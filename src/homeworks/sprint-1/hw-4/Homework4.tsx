import { ChangeEvent, useState } from 'react'
import { CustomButton } from './CustomButton/CustomButton'
import { CustomInput } from './CustomInput/CustomInput'
import s from './Homework4.module.css'

/*
 * 🧙‍♂️ Изучите реализацию компонентов CustomButton и CustomInput. Обратите внимание на типизацию пропсов
 * - мы сохраняем все стандартные пропсы для компонентов button и input, только добавляем свои стили.
 * Для извлечения стандартных пропсов мы используем type helper из react - ComponentProps
 *
 * 📝 Задание:
 * 1. Почините компонент Homework4, чтобы он работал без ошибок
 * - Добавьте типизацию там, где это необходимо
 * 2. Для всех элементов списка с нечётными индексами добавьте класс s.odd (у них должен появиться фоновый цвет)
 * */

export const Homework4 = () => {
  const [currentText, setCurrentText] = useState('')
  const [texts, setTexts] = useState<string[]>(['Прочитать раздел документации React "Describing the UI" на react.dev'])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentText(event.target.value)
  }

  const handleSave = () => {
    setTexts([...texts, currentText])
    setCurrentText('')
  }

  return (
    <div id={'hw04'}>
      <h3>Homework 4</h3>
      {currentText ? <p id={'hw04-text'}>{currentText}</p> : <p id={'hw04-default-text'}>Здесь появится новое дело</p>}

      {/* 📝 добавьте необходимые пропсы */}
      <CustomInput id={'hw04-input'} value={currentText} onChange={handleChange} />

      {/* 📝 добавьте необходимые пропсы */}
      <CustomButton id={'hw04-button'} onClick={handleSave}>
        Сохранить
      </CustomButton>

      <h4>Список дел на день:</h4>
      <ol id={'hw04-tasks'}>
        {texts.map((el, index) => {
          return (
            <li
              key={index}
              id={`hw04-task-${index}`}
              /* 📝 для всех элементов с нечётными индексами добавьте класс s.odd */
              className={index % 2 ? s.odd : ''}>
              {' '}
              {el}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
