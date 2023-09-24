import { Menu } from '@mui/icons-material';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { navlink } from '../data/dummydata';
import logo from '../data/images/logo.png';



const Header = () => {
    const [responsive,setResponsive] = useState(false)
    return (
        <>
        <header>
            <div className="container flexsb">
                <div className="logo">
                    <img src={logo} data-aos="fade-right" alt="logo" />
                </div>
                <div className={responsive? "hideMenue": "nav"}>
                    {navlink.map((links, i) => (
                        <Link key={i} to={links.url}>{links.text}</Link>
                    ))}
                </div>
                <button className='toggle' onClick={()=>setResponsive(!responsive)}>
                    <Menu className='icon'></Menu>
                </button>
            </div>
        </header>
        </>
    )
}

export default Header
