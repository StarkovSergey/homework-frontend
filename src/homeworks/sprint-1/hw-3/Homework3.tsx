import { ChangeEvent, useState } from 'react'

/*
 * Перед вами приложение для ведения списка дел.
 * 📝 Задание:
 * - Добавить типизацию, где необходимо
 * - Реализовать функционал добавления нового дела в конец списка
 *
 * Дополнительное задание:
 * - Если в инпуте нет текста, кнопка "Сохранить" должна быть disabled
 * */

export const Homework3 = () => {
  const [currentText, setCurrentText] = useState('')
  const [texts, setTexts] = useState<string[]>(['Прочитать раздел документации React "Describing the UI" на react.dev'])

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // 📝 add logic here
    setCurrentText(e.target.value)
  }

  const handleSave = () => {
    // 📝 add new task to the texts
    // 📝 and clear the currentText
    setTexts([...texts, currentText])
  }

  return (
    <div id={'hw03'}>
      <h3>Homework 3</h3>
      {currentText ? (
        <p id={'hw03-text'}>{currentText}</p>
      ) : (
        <p id={'hw03-default-text'}>Здесь появится новое дело</p> // nothing to change here
      )}
      <input id={'hw03-input'} type="text" value={currentText} onChange={handleChange} />
      <button id={'hw03-button'} onClick={handleSave}>
        Сохранить
      </button>
      <h4>Список дел на день:</h4>
      <ol id={'hw03-tasks'}>
        {texts.map((el, index) => {
          return (
            <li key={index} id={`hw03-task-${index}`}>
              {el}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
