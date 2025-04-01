import { ChangeEvent, useEffect, useState } from 'react'
import s from './Homework14.module.css'
import { AnimeCard } from '@/homeworks/sprint-4/hw-14/AnimeCard/AnimeCard.tsx'
import { TextField } from '@/homeworks/sprint-2/hw-7/TextField/TextField.tsx'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'
import { fetchAnimeTC, selectAnime } from './model/anime-slice.ts'
import { useSearchParams } from 'react-router'

/*
 * Во многих случаях хорошим решением будет хранить state не в useState или Redux, а в URL!
 * Это позволяет делиться ссылкой на страницу с другими пользователями, сохранять состояние при обновлении страницы,
 * или при переходе по истории браузера.
 *
 * В данный момент приложение полностью функционально, но не сохраняет состояние при обновлении страницы.
 * 📝 Ваша задача - сохранить состояние фильтров в URL. Можете удалить из компонента states, отвечающие за фильтры.
 * - используйте хук useSearchParams из библиотеки react-router для получения и установки параметров поиска в URL.
 *
 * 🧙‍♂️ Можете посмотреть видео про useSearchParams от Игоря из плейлиста "React-router-dom"
 *
 * 🧙‍♂️ Функция setSearchParams может принимать колбэк, который получает текущее значение (URLSearchParams) и возвращает новое.
 * Пример:
 * ```
 * setSearchParams((prev) => {
 *   prev.set('queryKey', 'new value') // добавить или изменить значение к параметрам поиска
 *   return prev
 * })
 *
 * 🧙‍ Также хорошей практикой будет не хранить в URL дефолтные значения фильтров.
 * Например, `BASE_URL/sprint-4?isFavorite=false&title=` можно упростить до `BASE_URL/sprint-4`
 * */

export const Homework14 = () => {
  const anime = useSelector(selectAnime)
  const dispatch = useAppDispatch()
  const [searchParams, setSearchParams] = useSearchParams()

  const filterTitle = searchParams.get('title') || ''
  const isFavorite = searchParams.get('isFavorite') === 'true'

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchParams((prev) => {
      if (e.currentTarget.value === '') {
        prev.delete('title')
      } else {
        prev.set('title', e.currentTarget.value)
      }
      return prev
    })
  }

  const handleFavoriteChange = () => {
    setSearchParams((prev) => {
      if (isFavorite) {
        prev.delete('isFavorite')
      } else {
        prev.set('isFavorite', 'true')
      }
      return prev
    })
  }

  useEffect(() => {
    dispatch(fetchAnimeTC({ title: filterTitle, isFavorite }))
  }, [isFavorite, filterTitle])

  return (
    <section id="hw14">
      <h3>Homework 14 - Search Params</h3>
      <div className={s.container}>
        <div className={s.filters}>
          <TextField
            id="hw14-title-input"
            className={s.textField}
            placeholder="Поиск по названию"
            aria-label="Поиск по названию"
            value={filterTitle}
            onChange={handleNameChange}
          />
          <label>
            <input id="hw14-favorite-checkbox" type="checkbox" checked={isFavorite} onChange={handleFavoriteChange} />
            Только любимое аниме ^_^
          </label>
        </div>
        <div className={s.grid}>
          {anime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      </div>
    </section>
  )
}
