import React from 'react'
import s from './AnimeCard.module.css'
import { Anime } from '../anime-fake-api.ts'

export const AnimeCard = ({ anime }: { anime: Anime }) => {
  return (
    <div className={s.card} id={`hw14-anime-card-${anime.id}`}>
      <h2>{anime.title}</h2>
      <p>ID: {anime.id}</p>
      {anime.isFavorite && <span className={s.favorite}>★</span>}
    </div>
  )
}
