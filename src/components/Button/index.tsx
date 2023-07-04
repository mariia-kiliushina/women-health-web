import clsx from 'clsx'
import classes from './index.module.css'
import { FC, PropsWithChildren } from 'react'

type TButtonProps = {
  type?: 'primary' | 'secondary' | 'outlined'
  disabled?: boolean
  className?: string
  onClick?: () => void
}

export const Button: FC<PropsWithChildren<TButtonProps>> = ({
  children,
  className,
  disabled = false,
  type = 'primary',
  onClick,
  ...restProps
}) => {
  return (
    <button
      className={clsx(classes.primary, type === 'secondary' && classes.secondary, className)}
      {...restProps}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
