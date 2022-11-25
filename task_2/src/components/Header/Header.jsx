import React from 'react'
import './Header.css'

function Header({text}) {
  return (
    <>
        <div className='header'>
            <div className='header_head'>
                {text}
            </div>
        </div>
    </>
  )
}

export default Header