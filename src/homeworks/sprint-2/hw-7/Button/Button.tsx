import { ComponentProps } from 'react'

import s from './Button.module.css'
import clsx from 'clsx'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonProps = {
  fullWidth?: boolean
  variant?: ButtonVariant
} & ComponentProps<'button'>

// 📝 Завершите реализацию компонента Button согласно заданию

export const Button = ({ fullWidth, className, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        s.button,
        variant === 'primary' && s.primary,
        variant === 'secondary' && s.secondary,
        fullWidth && s.fullWidth,
        className
      )}
    />
  )
}
