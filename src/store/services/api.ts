import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Product, User, PaginationParams } from "@/types/api";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      process.env.NEXT_PUBLIC_API_URL || "https://api.escuelajs.co/api/v1",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], PaginationParams>({
      query: ({ offset = 0, limit = 12 }) =>
        `/products?offset=${offset}&limit=${limit}`,
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `/products/${id}`,
    }),
    getUsers: builder.query<User[], void>({
      query: () => "/users",
    }),
    getUser: builder.query<User, number>({
      query: (id) => `/users/${id}`,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetUsersQuery,
  useGetUserQuery,
} = api;
