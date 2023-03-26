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
            apiSlice.util.updateQueryData("getTasks"),
            undefined,
            (draft) => {
              draft.push(task.data);
            }
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
        const updatedTask = await queryFulfilled;
        if (updatedTask?.data?.id) {
          dispatch(
            apiSlice.util.updateQueryData("getTasks"),
            undefined,
            (draft) => {
              const updatedTaskIndex = draft.findIndex(
                (task) => task.id == arg.id
              );
              draft.splice(updatedTaskIndex, 1, updatedTask.data);
            }
          );
        }
      },
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        let patchResult = dispatch(
          apiSlice.util.updateQueryData("getsTasks", undefined, (draft) => {
            const remainTask = draft.filter((t) => t.id != arg);
            return (draft = remainTask);
          })
        );
        try {
          const res = await queryFulfilled;
          if (!res) {
            patchResult.undo();
          }
        } catch (error) {
          patchResult.undo();
        }
      },
    }),
  }),
});

export const {
  useGetTasksQuery,
  useGetTaskQuery,
  useAddTaskMutation,
  useEditTaskMutation,
} = taskApi;
