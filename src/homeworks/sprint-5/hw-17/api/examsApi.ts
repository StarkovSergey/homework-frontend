import axios from 'axios'
import { GetUsersParams, GetUsersResponse } from './exams.types'

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_EXAMS_API,
})

export const examsApi = {
  getUsers(params: GetUsersParams) {
    return instance.get<GetUsersResponse>('/users', { params })
  },
}
