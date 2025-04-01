import { ErrorBoundary, FallbackProps } from 'react-error-boundary'
import { CatPhotoGenerator } from './CatPhotoGenerator/CatPhotoGenerator'

/*
 * Нажмите на кнопку "Показать другую фотографию".
 * Появится белый экран. В консоли - ошибка.
 *
 * Сегодня мы познакомимся с обработкой ошибок, возникающих при рендере React-компонентов.
 *
 * По умолчанию, если в приложении происходит ошибка при рендере, React полностью размонтирует приложение.
 * Это плохой UX (пользовательский опыт).
 * Чтобы этого избежать, используется механизм error boundary:
 * docs: https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary
 *
 * Мы будем использовать библиотеку react-error-boundary
 * Она рекомендована в официальной документации и активно используется в современной индустрии.
 * Под капотом они использует react class component (и его методы жизненного цикла)
 *
 * 📝 Задание:
 * 1. Добавьте в проект библиотеку `react-error-boundary`
 * - изучите её документацию (она совсем небольшая)
 * 2. Оберните компонент `CatPhotoGenerator` в `ErrorBoundary`
 * - `FallbackComponent` должен отображать текст генерируемой ошибки
 *
 * 🧙‍♂️
 * Используйте `ErrorBoundary` для компонентов, где может быть потенциально нестабильный код.
 * Не оборачивайте всё приложение целиком. Это будет почти как "белый экран".
 * Вместо этого локализуйте нестабильные компоненты.
 *
 * Типичные кандидаты для обертки в `ErrorBoundary`:
 * - Сторонние компоненты, в надёжности которых вы не уверены
 * - Динамически загружаемые компоненты
 * - Компоненты с асинхронной логикой
 * - Отдельные страницы приложения (роуты)
 */

export const Homework20 = () => {
  return (
    <section id={'hw20'}>
      <h3>Homework 20 - Error Boundary</h3>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <CatPhotoGenerator />
      </ErrorBoundary>
    </section>
  )
}

const FallbackComponent = ({ error }: FallbackProps) => {
  return <p>Error: {error.message}</p>
}
