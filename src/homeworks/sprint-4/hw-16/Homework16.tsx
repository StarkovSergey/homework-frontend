import { useEffect, useState } from 'react'
import s from './Homework16.module.css'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'
import { fetchHousesTC, selectHouses } from './model/wizard-world-slice'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch.ts'

/*
 * В этом задании мы будем работать с динамическими сегментами роутов.
 * У нас есть 4 карточки-ссылки. При перехоже по ссылке мы должны попасть на странице факультета (baseURL/sprint-4/house/someID).
 * Там должен отобразиться компонент HouseDetails (и больше ничего, кроме Header и Footer приложения).
 *
 * Ваша задача закончить реализацию роутинга:
 * 1. Добавьте новый роут для страницы факультета в App.tsx
 * 2. Добавьте путь на страницу факультета в Link в Homework16.tsx
 * 3. Получите id факультета URL в HouseDetails.tsx и выведите информацию о факультете
 *
 * Компонент <Outlet /> из react-router в данном задании не нужен.
 * Docs: https://reactrouter.com/start/library/routing#dynamic-segments
 * */

export const Homework16 = () => {
  const houses = useSelector(selectHouses)
  const dispatch = useAppDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    dispatch(fetchHousesTC()).finally(() => {
      setLoading(false)
    })
  }, [dispatch])

  if (loading) {
    return <div className={s.loading}>Загрузка... ⏳</div>
  }

  return (
    <section id="hw16">
      <h3>Homework 16 - Dynamic routing segments</h3>
      <div className={s.container}>
        <div className={s.cards}>
          {houses.map((house) => (
            // 📝 Добавьте путь на страницу факультета, используя id факультета. Мы должны получить ссылки вида: baseURL/sprint-4/house/someID
            <Link to={`house/${house.id}`} key={house.id} className={s.card} id={`hw16-link-${house.name}`}>
              <img src={house.image} alt={house.name} className={s.image} />
              <h2>{house.name}</h2>
              <p>Основатель: {house.founder}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
