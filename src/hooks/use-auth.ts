import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export function useAuth() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  return session;
}
