/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const videosApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos",
    }),

    getVideo: builder.query({
      query: (id) => `/videos/${id}`,
    }),

    addVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;

        if (res?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
              draft.push(res.data);
            })
          );
        }
      },
    }),

    editVideo: builder.mutation({
      query: ({ id, data }) => ({
        url: `/videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted({ id, data }, { queryFulfilled, dispatch }) {
        const res = await queryFulfilled;
        if (res?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
              const updateIndex = draft.findIndex((v) => v.id == id);
              draft[updateIndex] = res.data;
            })
          );
        }
      },
    }),

    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `/videos/${id}`,
        method: "DELETE",
      }),

      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData("getVideos", undefined, (draft) => {
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
  useGetVideosQuery,
  useGetVideoQuery,
  useAddVideoMutation,
  useEditVideoMutation,
  useDeleteVideoMutation,
} = videosApi;
