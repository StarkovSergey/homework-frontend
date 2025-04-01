import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Student, StudentFilterParams, studentsApi } from '../students-fake-api'
import { stat } from 'fs'

/* 📝 Создайте fetchStudentsTC и завершите работу над studentsSlice */

export const studentsSlice = createSlice({
  name: 'students',
  initialState: {
    students: [] as Student[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchStudentsTC.fulfilled, (state, action) => {
      state.students = action.payload
    })
  },
  selectors: {
    selectStudents: (state) => state.students,
  },
})

export const { selectStudents } = studentsSlice.selectors

export const fetchStudentsTC = createAsyncThunk(
  `${studentsSlice.name}/fetchStudentsTC`,
  async (params: StudentFilterParams = {}, thunkAPI) => {
    const res = await studentsApi.getStudents(params)
    return res
  }
)
