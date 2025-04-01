import { ComponentProps } from 'react'
import s from './CustomButton.module.css'

type CustomButtonProps = ComponentProps<'button'> // Получаем все пропсы из стандартного компонента button

export const CustomButton = (props: CustomButtonProps) => {
  // {...props} - передаем все пропсы, которые пришли в компонент в стандартный компонент button
  // сохраняем возможность добавлять пользовательские классы для стилизации
  return <button {...props} className={`${s.button} ${props.className || ''}`} />
}
