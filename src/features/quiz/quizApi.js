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

    // editAssignment: builder.mutation({
    //   query: ({ id, data }) => ({
    //     url: `/assignments/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    //   async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
    //     const res = await queryFulfilled;
    //     if (res?.data?.id) {
    //       dispatch(
    //         apiSlice.util.updateQueryData(
    //           "getAssignments",
    //           undefined,
    //           (draft) => {
    //             const updateIndex = draft.findIndex((v) => v.id == id);
    //             draft[updateIndex] = res.data;
    //           }
    //         )
    //       );
    //     }
    //   },
    // }),

    // deleteAssignment: builder.mutation({
    //   query: (id) => ({
    //     url: `/assignments/${id}`,
    //     method: "DELETE",
    //   }),

    //   async onQueryStarted(id, { queryFulfilled, dispatch }) {
    //     let patchResult = dispatch(
    //       apiSlice.util.updateQueryData(
    //         "getAssignments",
    //         undefined,
    //         (draft) => {
    //           const deletedTaskIndex = draft.findIndex((v) => v.id == id);
    //           draft.splice(deletedTaskIndex, 1);
    //         }
    //       )
    //     );

    //     try {
    //       await queryFulfilled;
    //     } catch {
    //       patchResult.undo();
    //     }
    //   },
    // }),
  }),
});

export const { useGetQuizzesQuery, useGetQuizQuery, useAddQuizMutation } =
  quizApi;
