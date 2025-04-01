import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseExamsApi = createApi({
  reducerPath: 'examsApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_EXAMS_API }),
  endpoints: () => ({}),
  tagTypes: ['Photos'],
  // 📝 Укажите необходимые теги
})
