/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const marksApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignmentsMark: builder.query({
      query: () => "/assignmentMark",
    }),

    // getQuiz: builder.query({
    //   query: (id) => `/quizzes/${id}`,
    // }),

    addAssignmentMark: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignmentMark/${id}`,
        method: "PATCH",
        body: data,
      }),

      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData(
            "getAssignmentsMark",
            undefined,
            (draft) => {
              const updateIndex = draft.findIndex((v) => v.id == id);
              let existingData = draft[updateIndex];
              draft[updateIndex] = { ...existingData, ...data };
            }
          )
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

export const { useGetAssignmentsMarkQuery, useAddAssignmentMarkMutation } =
  marksApi;
