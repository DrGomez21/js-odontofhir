import React from 'react'
import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className='flex px-6 mt-4'>
      <Link to='/'>
        <img src={Logo} />
      </Link>
    </div>
  )
}
