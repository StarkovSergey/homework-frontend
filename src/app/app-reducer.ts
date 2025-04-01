import { createAction, createReducer } from '@reduxjs/toolkit'
import { RootState } from '@/app/store.ts'

/*
 * Sprint-3, Homework-11
 * 📝 Завершите реализацию
 * 1. Добавьте changeThemeModeAC (он должен принимать ThemeMode)
 * 2. Обработайте его в .addCase в appReducer: он должен менять themeMode на тему из action.payload
 * 3. Добавьте selectThemeMode
 * Продолжите работу в файле widgets/theme-switcher/ThemeSwitcher.tsx
 * */

export type ThemeMode = 'dark' | 'light' | 'system'

const initialState = {
  themeMode: 'light' as ThemeMode,
}

export const changeThemeModeAC = createAction('app/changeTheme', (theme: ThemeMode) => ({
  payload: theme,
}))

export const appReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeThemeModeAC, (state, action) => {
    state.themeMode = action.payload
  })
})
