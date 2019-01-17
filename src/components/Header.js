import React, { Component } from 'react';
class Header extends Component {
   
    render() {
        return (
            <div className="header">          
                <img src={require('../assets/logo.png')} className="logo-image" alt="logo"></img>
            </div>
        );
    }
}

export default Header;