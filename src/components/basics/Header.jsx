import React from 'react'
import Logo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <div className='flex px-6 mt-4'>
      <img src={Logo} />
    </div>
  )
}
