import React from 'react';
import './home.css';
import logo from '../../imgs/logo.png' 

function Home(props) {
    return (
        <div>
        <div className='placeholder'>
        <img src={logo} alt="Logo" height={600} />
        </div>
        </div>
        
    );
}

export default Home;