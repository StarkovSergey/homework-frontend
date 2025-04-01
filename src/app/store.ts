import { configureStore } from '@reduxjs/toolkit'
import { appReducer, ThemeMode } from './app-reducer'
import { habitsReducer } from '@/homeworks/sprint-3/hw-9/model/habits-reducer'
import { studentsSlice } from '@/homeworks/sprint-4/hw-13/model/students-slice'
import { animeSlice } from '@/homeworks/sprint-4/hw-14/model/anime-slice'
import { wizardWorldSlice } from '@/homeworks/sprint-4/hw-16/model/wizard-world-slice'
import { usersSlice } from '@/homeworks/sprint-5/hw-17/model/users-slice'
import { baseExamsApi } from '@/homeworks/sprint-5/examsApi'

export const store = configureStore({
  reducer: {
    habits: habitsReducer,
    app: appReducer,
    [studentsSlice.name]: studentsSlice.reducer,
    [animeSlice.name]: animeSlice.reducer,
    [wizardWorldSlice.name]: wizardWorldSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
    [baseExamsApi.reducerPath]: baseExamsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseExamsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
