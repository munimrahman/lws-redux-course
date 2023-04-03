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
    }),

    // editVideo: builder.mutation({}),
  }),
});

export const { useGetVideosQuery, useGetVideoQuery, useAddVideoMutation } =
  videosApi;
