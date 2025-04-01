import { baseExamsApi } from '../../examsApi'

export const usersApi = baseExamsApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<GetUsersResponse, GetUsersParams>({
      query: (params) => ({ url: '/users', params }),
    }),
  }),
})

export const { useGetUsersQuery } = usersApi

export type GetUsersResponse = {
  items: User[]
  totalCount: number
}
export type User = {
  id: string
  name: string
  age: number
}

export type GetUsersParams = {
  pageNumber?: number
  pageSize?: number
  name?: string
  sortBy?: 'name' | 'age'
  sortDirection?: SortDirection
}

type SortDirection = 'asc' | 'desc'
