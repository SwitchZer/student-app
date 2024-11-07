import { store } from "@/store";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface LoadingState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface QueryParams extends PaginationParams {
  search?: string;
  sort?: string;
  order?: "asc" | "desc";
}
