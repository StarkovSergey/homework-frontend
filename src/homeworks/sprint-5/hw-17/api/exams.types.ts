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
  page?: number
  pageSize?: number
  name?: string
  sortBy?: 'name' | 'age'
  sortDirection?: SortDirection
}

type SortDirection = 'asc' | 'desc'
