/* eslint-disable eqeqeq */
import apiSlice from "../api/apiSlice";

export const taskApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => "/tasks",
    }),
    getTask: builder.query({
      query: (id) => `/tasks/${id}`,
    }),

    addTask: builder.mutation({
      query: (data) => ({
        url: "/tasks",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const task = await queryFulfilled;

        if (task?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              draft.push(task.data);
            })
          );
        }
      },
    }),

    editTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `/tasks/${id}`,
        method: "PATCH",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        const task = await queryFulfilled;

        if (task?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
              const index = draft.findIndex((t) => t.id == arg.id);
              draft[index] = task.data;
            })
          );
        }
      },
    }),

    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(id, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData("getTasks", undefined, (draft) => {
            const deletedTaskIndex = draft.findIndex((t) => t.id == id);
            draft.splice(deletedTaskIndex, 1);
          })
        );

        await queryFulfilled.catch(() => {
          patchResult.undo();
        });
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = taskApi;
