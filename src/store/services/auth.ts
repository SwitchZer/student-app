import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { AuthResponse, LoginRequest, RegisterRequest } from "@/types/auth";
import { UserRole } from "@/types/user";

// For demo purposes, we'll use a fake API
const FAKE_API_DELAY = 1000;

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      queryFn: async (credentials) => {
        await new Promise((resolve) => setTimeout(resolve, FAKE_API_DELAY));

        return {
          data: {
            user: {
              id: "1",
              email: credentials.email,
              name: "John Doe",
              role: UserRole.STUDENT,
            },
            token: "fake-jwt-token",
          },
        };
      },
    }),
    register: builder.mutation<AuthResponse, RegisterRequest>({
      queryFn: async (credentials) => {
        await new Promise((resolve) => setTimeout(resolve, FAKE_API_DELAY));

        return {
          data: {
            user: {
              id: "1",
              email: credentials.email,
              name: credentials.name,
              role: credentials.role as UserRole,
            },
            token: "fake-jwt-token",
          },
        };
      },
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
