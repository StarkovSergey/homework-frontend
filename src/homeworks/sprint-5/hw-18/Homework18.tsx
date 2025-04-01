import { useState } from 'react'
import { useGetUsersQuery } from './api/usersApi'
import { Pagination } from './Pagination/Pagination'

/*
 * В этом задании мы будем работать с пагинацией данных.
 * У нас есть API, которое возвращает пользователей постранично (usersApi.ts).
 *
 * 📝 Ваша задача реализовать пагинацию для отображения списка пользователей.
 * Компонент Pagination почти закончен.
 * 1. Передайте в компонент Pagination необходимые пропсы.
 * - Размер страницы по умолчанию - 5, номер страницы по умолчанию - 1
 * - State для пагинации может хранится в URL, в локальном стейте или в Redux.
 * - При изменении размера страницы (pageSize) нужно сбрасывать номер страницы на 1
 *
 * 2. Завершите реализацию компонента Pagination
 * - Добавьте динамический расчет общего количества страниц
 * - Если мы находимся на первой странице кнопка Prev должна быть disabled
 * - Если мы находимся на последней странице кнопка Next должна быть disabled
 */

export const Homework18 = () => {
  // 📝
  const [pageSize, setPageSize] = useState(5)
  const [pageNumber, setPageNumber] = useState(1)

  const { data } = useGetUsersQuery({
    pageNumber,
    pageSize,
  })

  return (
    <section id={'hw18'}>
      <h3>Homework 18 - Pagination</h3>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody id={'hw18-tbody'}>
          {data?.items.map((user, index) => (
            <tr key={user.id} id={`hw18-user-${user.id}`}>
              <td id={`hw18-user-name-${index}`}>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {data && (
        <Pagination
          pageNumber={pageNumber}
          totalCount={data.totalCount}
          pageSize={pageSize}
          handlePageChange={setPageNumber}
          handlePageSizeChange={setPageSize}
        />
      )}
    </section>
  )
}
