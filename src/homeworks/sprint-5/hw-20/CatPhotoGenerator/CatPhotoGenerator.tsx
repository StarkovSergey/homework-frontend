import { useState } from 'react'
import s from './CatPhotoGenerator.module.css'

/**
 * Не меняйте код в этом компоненте!
 * По крайней мере до тех пор, пока не выполните задание 🐈
 **/

export const CatPhotoGenerator = () => {
  const [imageUrl, setImageUrl] = useState('https://cataas.com/cat?' + Date.now())
  const [isShowError, setIsShowError] = useState(false)

  const handleClick = () => {
    setImageUrl('https://cataas.com/cat?' + Date.now())
    setIsShowError(true)
  }

  if (isShowError) {
    throw new Error('Что-то пошло не так! Не удалось загрузить фотографию котика 😱')
  }

  return (
    <div className={s.box} id="hw20-cat-generator">
      <div className={s.image}>
        <img src={imageUrl} alt="random cat photo" />
      </div>
      <button id="hw20-error-button" onClick={handleClick}>
        Показать другую фотографию
      </button>
    </div>
  )
}
