import { createApi, CreateApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import build from "next/dist/build";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  reducerPath: "api",
  tagTypes: [],
  endpoints: (build) => ({}),
});
