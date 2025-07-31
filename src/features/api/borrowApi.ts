import { api } from "./api";
import type { Book } from "./bookApi";

export interface BorrowRequest {
  quantity: number;
  dueDate: string;
}

export const borrowApi = api.injectEndpoints({
  endpoints: (builder) => ({
    borrowBook: builder.mutation<Book, { bookId: string; data: BorrowRequest }>(
      {
        query: ({ bookId, data }) => ({
          url: `/borrow/${bookId}`,
          method: "POST",
          body: data,
        }),
        invalidatesTags: ["Books", "Borrow"],
      }
    ),
    getBorrowSummary: builder.query<
      { title: string; isbn: string; totalQuantity: number }[],
      void
    >({
      query: () => "/borrow-summary",
      providesTags: ["Borrow"],
    }),
  }),
  overrideExisting: false,
});

export const { useBorrowBookMutation, useGetBorrowSummaryQuery } = borrowApi;
