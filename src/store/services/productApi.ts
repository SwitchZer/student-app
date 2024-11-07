import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, CreateProductRequest } from "@/types/product";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1/" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], { offset?: number; limit?: number }>({
      query: ({ offset = 0, limit = 10 } = {}) => ({
        url: "products",
        params: { offset, limit },
      }),
      providesTags: ["Product"],
    }),
    getProduct: builder.query<Product, number>({
      query: (id) => `products/${id}`,
      providesTags: ["Product"],
    }),
    createProduct: builder.mutation<Product, CreateProductRequest>({
      query: (product) => ({
        url: "products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation<Product, Partial<Product> & { id: number }>(
      {
        query: ({ id, ...patch }) => ({
          url: `products/${id}`,
          method: "PUT",
          body: patch,
        }),
        invalidatesTags: ["Product"],
      }
    ),
    deleteProduct: builder.mutation<boolean, number>({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
