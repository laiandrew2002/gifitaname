// import React from 'react';
import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar navbar-dark bg-dark '>
                <img src='alek-logo.ico' width='30px' height='30px' alt='logo'/>
                <span className='navbar-brand mb-4 h1 mx-auto'>
                 Gif It A Name</span>
            </nav>
        )
    }
}

export default Navbar;