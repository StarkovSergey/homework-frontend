import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch } from 'react-redux'
import { changeThemeModeAC, ThemeMode } from '@/app/app-reducer.ts'
import s from './ThemeSwitcher.module.css'
import { useAppSelector } from '@/shared/hooks/useAppSelector'

/*
 * Sprint-3, Homework-11
 *  📝 Завершите реализацию
 * */

export const THEME_KEY = 'themeMode' // ключ в LocalStorage

// устанавливает на html-элемент атрибут data-theme с выбранной темой
const applyTheme = (theme: ThemeMode) => {
  if (theme === 'system') {
    // проверяем, предпочитает ли пользователь тёмную тему в настройках своей операционной системы или браузера
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light')
  } else {
    document.documentElement.setAttribute('data-theme', theme)
  }
}

export const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  // 📝 1. Получи текущую тему из Redux
  const themeMode = useAppSelector((state) => state.app.themeMode)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = e.target.value as ThemeMode
    // 📝  2. Отправьте выбранную тему в redux state
    dispatch(changeThemeModeAC(selectedTheme))
  }

  // 🧙‍♂️ При монтировании компонента проверяем сохраненную тему в localStorage
  // и если она есть, то используем её и отправляем ее в redux state
  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY) as ThemeMode | null
    if (savedTheme) {
      applyTheme(savedTheme)
      // 📝 3. Отправьте сохранённую тему в redux state
      dispatch(changeThemeModeAC(savedTheme))
    }
  }, [dispatch])

  // 🧙‍ При изменении темы в redux state, записываем ее в localStorage
  // и устанавливаем на html элементе атрибут data-theme
  useEffect(() => {
    if (themeMode) {
      localStorage.setItem(THEME_KEY, themeMode)
      applyTheme(themeMode)
    }
  }, [themeMode])

  return (
    <div id="hw11" className={s.box}>
      <ul className={s.themeList}>
        <li className={s.themeItem}>
          <label htmlFor="hw11-light">
            <input
              type="radio"
              id="hw11-light"
              name="theme"
              value="light"
              checked={themeMode === 'light'}
              onChange={handleChange}
            />
            Светлая
          </label>
        </li>
        <li className={s.themeItem}>
          <label htmlFor="hw11-dark">
            <input
              type="radio"
              id="hw11-dark"
              name="theme"
              value="dark"
              checked={themeMode === 'dark'}
              onChange={handleChange}
            />
            Тёмная
          </label>
        </li>
        <li className={s.themeItem}>
          <label htmlFor="hw11-system">
            <input
              type="radio"
              id="hw11-system"
              name="theme"
              value="system"
              checked={themeMode === 'system'}
              onChange={handleChange}
            />
            Системная
          </label>
        </li>
      </ul>
    </div>
  )
}
