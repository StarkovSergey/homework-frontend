import { TextField } from '@/homeworks/sprint-2/hw-7/TextField/TextField.tsx'
import { FormEvent, useState } from 'react'
import { Button } from '@/homeworks/sprint-2/hw-7/Button/Button.tsx'
import s from './NewHabitForm.module.css'
import { useDispatch } from 'react-redux'
import { addHabitAC } from '../../model/habits-reducer'

// 📝 Закончите логику добавления привычки

export const NewHabitForm = () => {
  const [newHabitTitle, setNewHabitTitle] = useState('')
  const isEmpty = newHabitTitle.trim() === ''
  const dispatch = useDispatch()

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setNewHabitTitle(e.currentTarget.value)
  }

  const handleAddHabit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isEmpty) return
    setNewHabitTitle('')
    dispatch(addHabitAC(newHabitTitle))
  }

  return (
    <form className={s.form} onSubmit={handleAddHabit}>
      <TextField
        id="hw9-new-habit-input"
        label="Ваша новая привычка"
        className={s.input}
        value={newHabitTitle}
        onChange={handleChange}
        name="title"
      />
      <Button type="submit" disabled={isEmpty} id="hw9-add-habit-button">
        Добавить
      </Button>
    </form>
  )
}
