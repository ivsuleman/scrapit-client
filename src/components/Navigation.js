import React from 'react'

const navigation = () => {
    return (

        // div.nav>(div.menu>div.logo+ul.menu_items>li*3)+div.log>button.login+button.signup
        <div className="nav">
            <div className="menu">
                <div className="logo">ScrapIt</div>
                <ul className="menu_items">
                    <li>Resident</li>
                    <li>Waste Collector</li>
                    <li>Waste Site</li>
                    <li>Help</li>
                </ul>
            </div>
            <div className="log">
                <button className="login">Log in</button>
                <button className="signup">Sign up</button></div>
        </div>

    )
}

export default navigation