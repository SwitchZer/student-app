import NextAuth from "next-auth";
import { UserRole } from "@/types/user";
import Credentials from "next-auth/providers/credentials";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Credentials({
      async authorize(credentials) {
        // This is where you would typically validate against your DB
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // For demo purposes, we'll use a fake validation
        if (email === "admin@example.com" && password === "password") {
          return {
            id: "1",
            email,
            name: "John Doe",
            role: UserRole.SUPER_ADMIN,
          };
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        // Type assertion to specify that user has a role property
        token.role = (user as { role: UserRole }).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});
