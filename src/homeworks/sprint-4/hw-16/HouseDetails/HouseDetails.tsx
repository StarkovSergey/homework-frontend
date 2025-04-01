import React, { useEffect, useState } from 'react'
import s from './HouseDetails.module.css'
import { Link, useParams } from 'react-router'
import { clsx } from 'clsx'
import { useSelector } from 'react-redux'
import { fetchHouseTC, selectCurrentHouse } from '../model/wizard-world-slice'
import { useAppDispatch } from '@/shared/hooks/useAppDispatch'

export const HouseDetails = () => {
  // 📝 Получите id факультета из URL
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const currentHouse = useSelector(selectCurrentHouse)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      dispatch(fetchHouseTC(id)).finally(() => {
        setLoading(false)
      })
    } else {
      setLoading(false)
    }
  }, [id, dispatch])

  if (loading) {
    return <div className={s.loading}>Загрузка... ⏳</div>
  }

  return (
    <div className={clsx(s.container, 'container')}>
      <Link id="hw16-back" to="/sprint-4" className={s.back}>
        ← Назад
      </Link>
      {currentHouse ? (
        <div className={s.contentBox} id={`hw16-${currentHouse.name}`}>
          <div className={s.imageColumn}>
            <h3 id={`hw16-currentHouse-title`}>{currentHouse.name}</h3>
            <img src={currentHouse.image} alt={currentHouse.name} className={s.image} />
          </div>
          <div className={s.textColumn}>
            <p>
              <strong>Основатель:</strong> {currentHouse.founder}
            </p>
            <p>
              <strong>Цвета:</strong> {currentHouse.houseColours}
            </p>
            <p>
              <strong>Животное:</strong> {currentHouse.animal}
            </p>
            <p>
              <strong>Стихия:</strong> {currentHouse.element}
            </p>
            <p>
              <strong>Привидение:</strong> {currentHouse.ghost}
            </p>
            <p>
              <strong>Общая комната:</strong> {currentHouse.commonRoom}
            </p>
            <h2>Руководители</h2>
            <ul>
              {currentHouse.heads.map((head) => (
                <li key={head.id}>
                  {head.firstName} {head.lastName}
                </li>
              ))}
            </ul>
            <h2>Черты</h2>
            <ul>
              {currentHouse.traits.map((trait) => (
                <li key={trait.id}>{trait.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className={s.error}>Факультет не найден 😢</div>
      )}
    </div>
  )
}
