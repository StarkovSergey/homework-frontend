import { StudentsTable } from './StudentsTable/StudentsTable.tsx'
import { TextField } from '@/homeworks/sprint-2/hw-7/TextField/TextField.tsx'
import styles from './Homework13.module.css'
import DatePicker, { registerLocale } from 'react-datepicker'
import { ru } from 'date-fns/locale/ru'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts'
import { fetchStudentsTC, selectStudents } from './model/students-slice.ts'
import { useAppSelector } from '@/shared/hooks/useAppSelector.ts'

/*
 * react-datepicker - это популярная библиотека для работы с датами и временем. В данном задании мы с ней познакомимся!
 * В MUI есть свой компонент для работы с датами, но react-datepicker более гибкий и настраиваемый (и не требует тяжеловесной
 * установки MUI).
 *
 * 📝 Вам необходимо реализовать компонент Homework13, который будет отображать список студентов с фильтрацией по дате регистрации
 * (фильтр принимает диапазон дат).
 *
 * 1. Получите список студентов с фейкового "сервера" при помощи studentsApi.getStudents() и отобразите данные в компоненте StudentsTable.
 * - для этого используйте Redux Toolkit - students-slice.ts уже создан в папке model. Создайте fetchStudentsTC для получения списков студентов
 * 2. Добавьте фильтрацию по дате регистрации студента. Мы должны иметь возможность выбрать диапазон дат с помощью двух DatePicker'ов.
 * - Передайте выбранные даты в studentsApi.getStudents() через fetchStudentsTC.
 * - Допустимо передавать только startDate или endDate, оба параметра или не передавать ничего.
 * - startDate и endDate можно хранить в локальных стейтах компонента Homework13.
 *
 * 🧙‍ При необходимости, можете обратиться к документации react-datepicker: https://reactdatepicker.com
 * 🧙‍ Мы используем локаль 'ru' для DatePicker (она уже подключена и готова к использованию).
 * Информация о настройке локали: https://github.com/Hacker0x01/react-datepicker/?tab=readme-ov-file#localization
 * */

registerLocale('ru', ru)

export const Homework13 = () => {
  // 📝 Напишите необходимую логику для получения списка студентов с фильтрацией по диапазону дат
  const dispatch = useAppDispatch()
  const students = useAppSelector(selectStudents)

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  useEffect(() => {
    dispatch(fetchStudentsTC({ endDate, startDate }))
  }, [endDate, startDate])

  return (
    <section id="hw13">
      <h3>Homework 13 - Date range фильтрация</h3>
      <div className={styles.filters}>
        <div>
          <DatePicker
            id="hw13-start-date"
            autoComplete="off"
            selected={startDate} // 📝 Добавьте необходимое значение
            onChange={setStartDate} // 📝 Добавьте обработчик
            placeholderText="Дата от"
            customInput={<TextField />} // 🧙‍♂️ Мы можем использовать свой компонент в качестве кастомного инпута
            locale="ru" // 🧙‍♂️ Можно установить локаль для DatePicker
            dateFormat="dd.MM.yyyy" // 🧙‍♂️ Можно установить формат даты
          />
        </div>
        <div>
          <DatePicker
            id="hw13-end-date"
            autoComplete="off"
            selected={endDate} // 📝 Добавьте необходимое значение
            onChange={setEndDate} // 📝 Добавьте обработчик
            customInput={<TextField autoComplete="off" />}
            placeholderText="Дата до"
            locale="ru"
            dateFormat="dd.MM.yyyy"
          />
        </div>
      </div>
      <StudentsTable students={students} /> {/* 📝 Передайте студентов полученных из studentsApi в компонент */}
    </section>
  )
}
