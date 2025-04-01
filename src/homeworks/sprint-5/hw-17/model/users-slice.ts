import { createAppSlice } from '@/shared/utils/createAppSlice'
import { GetUsersParams, User, examsApi } from '@/homeworks/sprint-5/hw-17/api/'

export const usersSlice = createAppSlice({
  name: 'users',
  initialState: {
    users: [] as User[],
    totalCount: 0,
    isLoading: false,
    error: null,
  },
  reducers: (create) => ({
    fetchUsersTC: create.asyncThunk(
      async (params: GetUsersParams, { rejectWithValue }) => {
        try {
          const res = await examsApi.getUsers(params)
          return { users: res.data.items, totalCount: res.data.totalCount }
        } catch (error) {
          return rejectWithValue(error)
        }
      },
      {
        pending: (state) => {
          state.isLoading = true
        },
        fulfilled: (state, action) => {
          state.users = action.payload.users
          state.totalCount = action.payload.totalCount
          state.isLoading = false
        },
        settled: (state) => {
          state.isLoading = false
        },
      }
    ),
  }),
  selectors: {
    selectUsers: (state) => state.users,
    selectTotalCount: (state) => state.totalCount,
    selectIsLoading: (state) => state.isLoading,
  },
})

export const { fetchUsersTC } = usersSlice.actions
export const { selectUsers, selectTotalCount, selectIsLoading } = usersSlice.selectors
