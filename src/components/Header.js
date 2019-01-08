import React from 'react'

import {Link} from 'react-router-dom'

import logo from '../assets/images/trash.svg'
import "../assets/styling/Home.css";

const Header = ({username, signout}) =>
    <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2 className='App-title'>
            {
                username ?
                    `Welcome back, ${username}!` :
                    'Welcome to ScrapIt.'
            }
            <br />
            <p>A simple waste collection App</p>
            {
                username ?
                    <button onClick={signout}>SIGN OUT</button> :
                    <Link to='/signin'><button>SIGN IN</button></Link>
            }
        </h2>
    </header>

export default Header