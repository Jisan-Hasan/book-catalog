import { apiSLice } from '../../api/apiSlice';

const bookApi = apiSLice.injectEndpoints({
  endpoints: (builder) => ({
    addBook: builder.mutation({
      query: (data) => ({
        url: '/book',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books','sortedBook'],
    }),
    getBooks: builder.query({
      query: () => '/books',
      providesTags: ['books'],
    }),
    getSingleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/book/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['books','sortedBook'],
    }),

    postReview: builder.mutation({
      query: ({ id, data }) => ({
        url: `/review/${id}`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['reviews'],
    }),
    getReviews: builder.query({
      query: (id) => `/review/${id}`,
      providesTags: ['reviews'],
    }),
    getGenres: builder.query({
      query: () => `/genres`,
    }),
    getYears: builder.query({
      query: () => `/year`,
    }),
    getSortedBooks: builder.query({
      query: () => 'sortedBook',
      providesTags: ['sortedBook']
    }),
  }),
});

export const {
  useAddBookMutation,
  useGetBooksQuery,
  useGetSingleBookQuery,
  usePostReviewMutation,
  useGetReviewsQuery,
  useUpdateBookMutation,
  useDeleteBookMutation,
  useGetGenresQuery,
  useGetYearsQuery,
  useGetSortedBooksQuery,
} = bookApi;
