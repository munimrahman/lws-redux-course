import apiSlice from "../api/apiSlice";

export const teamMembersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTeamMembers: builder.query({
      query: () => "/team",
    }),
    getTeamMember: builder.query({
      query: (memberName) => `/team?name_like=${memberName}`,
    }),
  }),
});

export const { useGetTeamMembersQuery, useGetTeamMemberQuery } = teamMembersApi;
