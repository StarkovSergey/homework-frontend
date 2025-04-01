import { createAction, createReducer, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../../../../app/store.ts'

export type Habit = {
  id: string
  title: string
  days: boolean[]
}

const initialState: Habit[] = [
  {
    id: nanoid(),
    title: 'Решать по 1 задаче на CodeWars',
    days: Array(7).fill(false), // Заполнение массива длиной 7 значениями false (изначально не в один из дней привычка не отмечена)
  },
]

// Добавление привычки с пустыми значениями для дней (все false)
export const addHabitAC = createAction('habits/addHabit', (title: string) => {
  return { payload: { id: nanoid(), title, days: Array(7).fill(false) } }
})

// 📝 Завершите реализацию
export const deleteHabitAC = createAction('habits/removeHabit', (id: string) => {
  return { payload: { id } }
})

export const updateHabitTitleAC = createAction<{ id: string; title: string }>('habits/updateHabitTitle')

export const toggleHabitDayAC = createAction<{ id: string; dayIndex: number }>('habits/toggleHabitDay')

export const habitsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addHabitAC, (state, action) => {
      // 📝 Завершите реализацию
      state.push(action.payload)
    })
    .addCase(updateHabitTitleAC, (state, action) => {
      const { id, title } = action.payload
      const habit = state.find((h) => h.id === id)
      if (habit) {
        habit.title = title
      }
    })
    .addCase(toggleHabitDayAC, (state, action) => {
      const { id, dayIndex } = action.payload
      const habit = state.find((h) => h.id === id)
      if (habit && dayIndex >= 0 && dayIndex < habit.days.length) {
        habit.days[dayIndex] = !habit.days[dayIndex]
      }
    })
    .addCase(deleteHabitAC, (state, action) => {
      return state.filter((habit) => habit.id !== action.payload.id)
    })
  // 📝 Добавьте обработку deleteHabitAC
})

export const selectHabits = (state: RootState) => state.habits
