import React, { ReactNode } from 'react'

interface ButtonProps {
  width?: string
  height?: string
  backgroundColor?: string
  color?: string
  icon?: string | ReactNode // Định kiểu cho icon
  children: ReactNode
  className?: string
  onClick?: () => void
  dataAttribute?: string
}

const Button: React.FC<ButtonProps> = ({
  width = 'auto',
  height = 'auto',
  backgroundColor = 'transparent',
  icon,
  children,
  className,
  onClick,
  color,
  dataAttribute
}) => {
  const buttonStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor,
    color,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'none'
  }

  return (
    <button style={buttonStyle} className={className} onClick={onClick} data-testid={dataAttribute}>
      {typeof icon === 'string' ? (
        <img src={icon} alt='Icon' className='icon' />
      ) : (
        icon && <span className='icon'>{icon}</span>
      )}
      {children}
    </button>
  )
}

export default Button
