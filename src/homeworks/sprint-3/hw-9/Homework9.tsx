import { useSelector } from 'react-redux'
import { NewHabitForm } from './ui/NewHabitForm/NewHabitForm.tsx'
import { HabitTable } from './ui/HabitTable/HabitTable.tsx'
import s from './Homework9.module.css'
import { selectHabits } from './model/habits-reducer.ts'

/*
 * 📝 На этот раз вам предстоит закончить реализацию простого трекера привычек. В проекте используется Redux Toolkit (он уже подключен).
 * Изучите проект и завершите его.
 * 1. Допишите логику добавления привычки:
 * - завершите реализацию компонента NewHabitForm
 * - допишите .addCase в model/habits-reducer.ts
 * 2. Добавьте возможность удаления привычки (при клике на кнопку "Удалить"):
 * - добавьте Action Creator (deleteHabitAC) и .addCase
 * - добавьте обработчик на кнопку в компоненте HabitTableRow
 * */

export const Homework9 = () => {
  const habits = useSelector(selectHabits)

  return (
    <section id="hw9">
      <h3>Homework 9 - Трекер привычек</h3>
      <div className={s.box}>
        <NewHabitForm />
        {habits.length === 0 ? <p>Добавьте первую привычку!</p> : <HabitTable habits={habits} />}
      </div>
    </section>
  )
}
