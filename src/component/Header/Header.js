import React from 'react'
import Typed from 'react-typed'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='text-box'>
                <Typed
                    className='hed'
                    strings={['Hello Then', 'Welcome to back']}
                    typedSpeed={120}
                    backSpeed={100}
                    loop
                />
                <p>We are Leon - Super Creative & Minimal Agency Web Template</p>
            </div>
        </div>
    )
}

export default Header
