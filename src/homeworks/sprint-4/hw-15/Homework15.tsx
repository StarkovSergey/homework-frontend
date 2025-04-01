import React, { useState } from 'react'
import s from './Homework15.module.css'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'
import { Button } from '@/homeworks/sprint-2/hw-7/Button/Button.tsx'

/*
 * Данные кнопки отправляют запросы на сервер, что приводит к различным ответам. Мы должны отобразить результат.
 *
 * 📝 Задание:
 * 1. Дописать функцию send:
 * - В локальный стейт записать код ответа, текст (поле errorText) и информацию (поле info), если они приходят с сервера.
 * Для ошибок на некорректный адрес записать в info сообщение из объекта ошибки (e.message).
 * - Показать соответствующую картинку в зависимости от результата запроса (success200, error400, error500, errorUnknown)
 * 2. Дизейблить кнопки пока идёт запрос (возможно, понадобиться добавить ещё один локальный стейт isLoading)
 *
 * 🧙‍♂️ Для выполнения этого задания будет полезно изучить вкладку Network в DevTools браузера.
 */

export const Homework15 = () => {
  const [code, setCode] = useState<null | number>(null)
  const [text, setText] = useState('')
  const [info, setInfo] = useState('')
  const [image, setImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const send = (data?: boolean | null) => () => {
    const url =
      data === null
        ? 'https://xxxxxx.ccc' // имитация запроса на некорректный адрес
        : 'https://samurai.it-incubator.io/api/3.0/homework/test'

    setCode(null)
    setImage('')
    setText('')
    setInfo('')

    setIsLoading(true)

    axios
      .post(url, { success: data })
      .then((res) => {
        setCode(res.status)
        setImage(success200)
        setInfo(res.data.info)
        setText(res.data.errorText)
        // 📝
      })
      .catch((err) => {
        const status = err.status

        console.log(err)

        if (axios.isAxiosError(err)) {
          setCode(status)
          setText(err.response?.data.errorText)
          setInfo(err.response?.data.info || err.message)
        }

        if (status === 500) {
          setImage(error500)
        } else if (status === 400) {
          setImage(error400)
        } else {
          setImage(errorUnknown)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
    // 📝
  }

  return (
    <section id={'hw13'}>
      <h3>Homework 15 - Error handling</h3>

      <div className={s.buttonsContainer}>
        <Button
          id={'hw13-send-true'}
          onClick={send(true)} // успешный запрос
          // 📝
          disabled={isLoading}>
          Success
        </Button>

        <Button
          id={'hw13-send-false'}
          onClick={send(false)} // запрос, который создаёт ошибку на сервере
          disabled={isLoading}
          // 📝
        >
          Server error
        </Button>

        <Button
          id={'hw13-send-undefined'}
          onClick={send(undefined)} // отправляем некорректные данные
          disabled={isLoading}
          // 📝
        >
          Incorrect data
        </Button>
        <Button
          id={'hw13-send-null'}
          onClick={send(null)} // запрос на некорректный адрес
          disabled={isLoading}
          // 📝
        >
          Incorrect URL
        </Button>
      </div>

      <div className={s.responseContainer}>
        <div className={s.textContainer}>
          <dl className={s.definitionList}>
            <div className={s.item}>
              <dt>Status code:</dt>
              <dd id={'hw13-code'}>{code}</dd>
            </div>
            <div className={s.item}>
              <dt>Text:</dt>
              <dd id={'hw13-text'}>{text}</dd>
            </div>
            <div className={s.item}>
              <dt>Info:</dt>
              <dd id={'hw13-info'}>{info}</dd>
            </div>
          </dl>
        </div>
        <div className={s.imageContainer}>{image && <img src={image} className={s.image} alt="status" />}</div>
      </div>
    </section>
  )
}
