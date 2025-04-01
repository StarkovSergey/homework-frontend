import { useState } from 'react'
import { Filters } from './Filters/Filters.tsx'
import { BookList } from './BookList/BookList.tsx'

/*
 * 📝 Ваша задача дописать приложение, которое отображает список книг.
 * В приложении есть возможность фильтровать книги по жанру, а также удалять книги
 *
 * 1. Добавьте типизацию (в том числе в компонентах Filters и BookList), избавьтесь от any
 * 2. Реализуйте фильтрацию книг по жанру. Если фильтр не выбран, отображаются все книги
 * 3. Реализуйте удаление книги
 */

/*
 * 📝 Замените any на правильный тип.
 * Не изменяйте эти данные! Они нужны для тестов.
 * */
const BOOKS: Book[] = [
  { id: 1, title: 'Grokking Algorithms', genre: 'Dev' },
  { id: 2, title: 'The Hobbit', genre: 'Fantasy' },
  { id: 3, title: 'The Great Gatsby', genre: 'Classic' },
  { id: 4, title: 'Clean Code', genre: 'Dev' },
  { id: 5, title: 'The Catcher in the Rye', genre: 'Classic' },
]

export type Book = {
  id: number
  title: string
  genre: Genre
}

export type Genre = 'Dev' | 'Fantasy' | 'Classic'

export const Homework6 = () => {
  const [filter, setFilter] = useState<Genre | null>(null)
  const [books, setBooks] = useState(BOOKS)

  const handleDeleteBook = (id: number) => {
    // 📝 Напишите логику удаления книги
    setBooks(books.filter((book) => book.id !== id))
  }

  // 📝 Напишите логику фильтрации книг
  const filteredBooks = filter ? books.filter((book) => book.genre === filter) : books

  return (
    <section id={'hw6'}>
      <h3>Homework 6 - Домашняя библиотека</h3>
      <Filters filter={filter} setFilter={setFilter} />
      <BookList books={filteredBooks} handleDeleteBook={handleDeleteBook} />
    </section>
  )
}
