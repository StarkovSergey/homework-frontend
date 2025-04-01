import { deleteHabitAC, Habit, toggleHabitDayAC, updateHabitTitleAC } from '../../../model/habits-reducer.ts'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { clsx } from 'clsx'
import s from './HabitTableRow.module.css'

type HabitTableRowProps = {
  habit: Habit
}

// 📝 Закончите реализацию удаления привычки
export const HabitTableRow = ({ habit }: HabitTableRowProps) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [editingTitle, setEditingTitle] = useState('')

  const handleToggleDay = (dayIndex: number) => {
    dispatch(toggleHabitDayAC({ id: habit.id, dayIndex }))
  }

  const startEditing = () => {
    setIsEditing(true)
    setEditingTitle(habit.title)
  }

  const handleSaveEdit = () => {
    if (editingTitle.trim()) {
      dispatch(updateHabitTitleAC({ id: habit.id, title: editingTitle }))
      setIsEditing(false)
      setEditingTitle('')
    }
  }

  const handleDeleteHabit = () => {
    dispatch(deleteHabitAC(habit.id))
  }

  const isAllDaysDone = habit.days.every((day) => day)

  return (
    <tr className={clsx(isAllDaysDone && s.done)} id={`hw9-habit-row-${habit.id}`}>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editingTitle}
            onChange={(e) => setEditingTitle(e.target.value)}
            onBlur={handleSaveEdit}
            className={s.input}
            autoFocus
          />
        ) : (
          <span onClick={startEditing} className={s.editableSpan}>
            {habit.title}
          </span>
        )}
      </td>
      {habit.days.map((done, index) => (
        <td key={index}>
          <label aria-label="done" className={s.label}>
            <input type="checkbox" checked={done} onChange={() => handleToggleDay(index)} className={s.checkbox} />
          </label>
        </td>
      ))}
      <td>
        <button id={`hw9-delete-habit-button-${habit.id}`} onClick={handleDeleteHabit}>
          Удалить
        </button>
      </td>
    </tr>
  )
}
