/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: () => "/quizzes",
    }),

    getQuiz: builder.query({
      query: (id) => `/quizzes/${id}`,
    }),

    addQuiz: builder.mutation({
      query: (data) => ({
        url: "/quizzes",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
              draft.push(res.data);
            })
          );
        }
      },
    }),

    editQuiz: builder.mutation({
      query: ({ id, data }) => ({
        url: `/quizzes/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;
        if (res?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
              const updateIndex = draft.findIndex((v) => v.id == id);
              draft[updateIndex] = res.data;
            })
          );
        }
      },
    }),

    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `/quizzes/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData("getQuizzes", undefined, (draft) => {
            const deletedTaskIndex = draft.findIndex((v) => v.id == id);
            draft.splice(deletedTaskIndex, 1);
          })
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetQuizzesQuery,
  useGetQuizQuery,
  useAddQuizMutation,
  useEditQuizMutation,
  useDeleteQuizMutation,
} = quizApi;
