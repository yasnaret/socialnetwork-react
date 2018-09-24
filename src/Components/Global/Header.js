import React, {Component} from 'react';
import Logo from './Logo.js'

const Header = (props)=> {
    return (
        <div className= 'divHeader'>
            <header>
                <div className="container">
                    <div className="row" id="profile">
                        <div className="col-4 col-md-3 logo">
                        <Logo/>
                        </div>
                        <div className="col col-md-8">
                            <span className="displayName">{props.user.displayName}</span>   
                            <img className="imagen" src={props.user.photoURL} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}



export default Header;
