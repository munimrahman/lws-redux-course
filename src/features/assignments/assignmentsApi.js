/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const assignmentsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => "/assignments",
    }),

    getAssignment: builder.query({
      query: (id) => `/assignments/${id}`,
    }),

    addAssignment: builder.mutation({
      query: (data) => ({
        url: "/assignments",
        method: "POST",
        body: data,
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignments",
              undefined,
              (draft) => {
                draft.push(res.data);
              }
            )
          );
        }
      },
    }),

    editAssignment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/assignments/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;
        if (res?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData(
              "getAssignments",
              undefined,
              (draft) => {
                const updateIndex = draft.findIndex((v) => v.id == id);
                draft[updateIndex] = res.data;
              }
            )
          );
        }
      },
    }),

    // deleteVideo: builder.mutation({
    //   query: (id) => ({
    //     url: `/videos/${id}`,
    //     method: "DELETE",
    //   }),

    //   async onQueryStarted(id, { queryFulfilled, dispatch }) {
    //     let patchResult = dispatch(
    //       apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
    //         const deletedTaskIndex = draft.findIndex((v) => v.id == id);
    //         draft.splice(deletedTaskIndex, 1);
    //       })
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

export const {
  useGetAssignmentsQuery,
  useGetAssignmentQuery,
  useAddAssignmentMutation,
  useEditAssignmentMutation,
} = assignmentsApi;
