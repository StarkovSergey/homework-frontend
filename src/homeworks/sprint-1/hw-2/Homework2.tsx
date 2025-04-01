import { UserList } from './UserList'
import { useState } from 'react'

/*
 * 📝 Задание
 * 1. Отрендерить список пользователей. В этот раз используйте компонент UserItem
 * 2. Реализовать фильтрацию пользователей. При нажатии на кнопку "Show me only users from Los Angeles 🌴",
 * должны отобразиться только пользователи из Лос-Анджелеса
 * 3. Добавить типизация там, где это необходимо (удалить все any)
 *
 * Дополнительное задание:
 * - добавить кнопку "Reset filter" которая будет сбрасывать фильтр и снова показывать всех пользователей
 * */

const USERS: User[] = [
  { id: 1, name: 'John', age: 25, address: { street: '123 Main St', city: 'New York' } },
  { id: 2, name: 'Alice', age: 30, address: { street: '456 Elm St', city: 'San Francisco' } },
  { id: 3, name: 'Bob', age: 35, address: { street: '789 Oak St', city: 'Seattle' } },
  { id: 4, name: 'John', age: 44, address: { street: '123 Maple Ave', city: 'Dallas' } },
  { id: 5, name: 'Mary', age: 13, address: { street: '456 Elm St', city: 'Los Angeles' } },
  { id: 6, name: 'James', age: 18, address: { street: '987 Pine Rd', city: 'Dallas' } },
  { id: 7, name: 'Jennifer', age: 21, address: { street: '654 Birch Ct', city: 'Seattle' } },
  { id: 8, name: 'Robert', age: 4, address: { street: '876 Spruce Way', city: 'San Francisco' } },
  {
    id: 9,
    name: 'Jessica',
    age: 12,
    address: { street: '543 Willow Dr', city: 'San Francisco' },
  },
  { id: 10, name: 'Emily', age: 55, address: { street: '765 Aspen Blvd', city: 'Los Angeles' } },
]

export type User = {
  id: number
  name: string
  age: number
  address: Address
}

type Address = {
  street: string
  city: string
}

export const Homework2 = () => {
  const [users, setUsers] = useState(USERS)

  const filterLosAngelesUsers = () => {
    // 📝 Add filtration logic here
    // Only users from Los Angeles should be displayed
    // 🧙‍♂️ Hint: use the setUsers to update the list of users
    const filteredUsers = users.filter((user) => user.address.city === 'Los Angeles')
    setUsers(filteredUsers)
  }

  return (
    <section id={'hw02'}>
      <h3>Homework 2</h3>
      <UserList users={users} filterLosAngelesUsers={filterLosAngelesUsers} />
    </section>
  )
}
