import { TextField } from './TextField/TextField.tsx'
import { Button } from './Button/Button.tsx'
import s from './Homework7.module.css'
import { Card } from './Card/Card.tsx'

/*
 * В этом задании мы вернёмся к работе с универсальными компонентами
 * 1. 🧙‍♂️ Изучите реализацию компонента TextField:
 * - это упрощенный вариант того же TextField, который используется в интерфейсе Личного кабинета
 * - обратите внимание, что мы переиспользуем все стандартные пропсы компонента input с помощью утилиты ComponentProps,
 * а также добавляет свои (errorMessage, label)
 * - для комбинирования CSS-классов используется библиотека clsx
 *
 * 2. 🧙‍♂️ Изучите реализацию компонента Card:
 * Это упрощенный вариант реализации для демонстрации работы с children и передачей компонентов через пропсы
 *
 * 3. 📝 Ваша задача доработать компонент Button так, чтобы к нему применялись соответствующие CSS-классы
 * в зависимости от значения пропсов variant и fullWidth:
 * - у всех кнопок должен быть общий класс .button
 * - у кнопок с variant primary или без variant, есть класс .primary (primary - вариант по умолчанию)
 * - у кнопок с variant secondary, есть класс .secondary
 * - у кнопок с fullWidth = true, есть класс .fullWidth
 * - кнопки могут принимать className из пропсов и добавлять его к другим классам
 *
 * 🧙‍♂️ Для объединения CSS-классов в задании можете использовать библиотеку clsx
 * или реализовать собственное решение, например, с помощью вложенных тернарных операторов.
 * Однако стоит учитывать, что библиотеки вроде `clsx` или `classnames` широко используются во фронтенд-разработке —
 * с ними код получается заметно читаемее.
 *
 * Документация: https://github.com/lukeed/clsx#readme
 * */

export const Homework7 = () => {
  return (
    <section id={'hw7'}>
      <h3>Homework 7 - Универсальные компоненты</h3>
      <Card className={s.box}>
        <TextField className={s.textField} label="Обычное текстовое поле" />
        <TextField className={s.textField} label="Поле с ошибкой" errorMessage="Заполните поле ❌" />
      </Card>

      <Card className={s.box} headerContent={<h3 className={s.cardTitle}>Демонстрация кнопок</h3>}>
        <Button id="hw-7-default-button">Default (Primary)</Button>
        <Button variant="secondary" id="hw-7-secondry-button">
          Secondary
        </Button>
        <Button fullWidth id="hw-7-fullWidth-button">
          Full width
        </Button>
        <Button className={s.green} id="hw-7-custom-button">
          Custom className
        </Button>
      </Card>
    </section>
  )
}
