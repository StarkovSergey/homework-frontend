import { useState } from 'react'
import s from './Homework10.module.css'

/*
 * Обычно сортировка и фильтрация данных выполняются на сервере,
 * но иногда возникает необходимость сделать это на клиенте.
 *
 * 📝 Задача:
 * 1. Реализовать сортировку по возрасту (по убыванию и возрастанию) при клике на заголовок "Возраст"
 * - изначально отображаются исходные неотсортированные данные
 * - при первом клике на заголовок "Возраст" данные сортируются по возрастанию (asc)
 * - при втором клике на заголовок "Возраст" данные сортируются по убыванию (desc)
 * - при третьем клике на заголовок "Возраст" отображаются исходные неотсортированные данные
 *
 * 2. Реализовать фильтрацию по возрасту (показать только 18+)
 * - при включении чекбокса "Показать только 18+" отображаются только те данные, у которых возраст >= 18 (с учётом текущей сортировки)
 * - при повторном клике на чекбокс "Показать только 18+" отображаются все данные  (также с учётом текущей сортировки)
 * */

type Person = {
  id: number
  name: string
  age: number
}

type SortDirection = 'asc' | 'desc'

// Не меняйте исходные данные - они нужны для проверки!
const initialData: Person[] = [
  { id: 1, name: 'Александр', age: 66 },
  { id: 2, name: 'Коля', age: 16 },
  { id: 3, name: 'Виктор', age: 44 },
  { id: 4, name: 'Дмитрий', age: 40 },
  { id: 0, name: 'Кот', age: 3 },
  { id: 5, name: 'Ирина', age: 55 },
]

export const Homework10 = () => {
  const [sortDirection, setSortDirection] = useState<SortDirection | null>(null)
  const [isFilteringAdults, setIsFilterAdults] = useState(false)

  const handleSort = () => {
    // 📝 Завершите реализацию
    if (sortDirection === null) {
      setSortDirection('asc')
    } else if (sortDirection === 'asc') {
      setSortDirection('desc')
    } else {
      setSortDirection(null)
    }
  }

  const handleAdultsFilter = () => {
    // 📝 Завершите реализацию
    setIsFilterAdults((prev) => !prev)
  }

  const filteredData = isFilteringAdults ? initialData.filter((user) => user.age >= 18) : initialData

  // 📝 Завершите реализацию
  const sortedData = sortDirection
    ? filteredData.toSorted((prev, next) => {
        return sortDirection === 'asc' ? prev.age - next.age : next.age - prev.age
      })
    : filteredData

  const arrow = sortDirection && (sortDirection === 'asc' ? '▲' : '▼')

  return (
    <section id="hw10">
      <h3>Homework 10 - Сортировка и фильтрация</h3>
      <label className={s.checkboxLabel}>
        <input
          id="hw-10-filter-checkbox"
          type="checkbox"
          checked={isFilteringAdults}
          onChange={handleAdultsFilter}
          className={s.checkbox}
        />
        Показать только 18+
      </label>
      <table className={s.table}>
        <thead>
          <tr>
            <th>Имя</th>
            <th id="hw-10-sort-button" className={s.thAge} role="button" tabIndex={0} onClick={handleSort}>
              Возраст {arrow}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((person) => (
            <tr key={person.id} id={`hw-10-person-${person.id}`}>
              <td>{person.name}</td>
              <td>{person.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
