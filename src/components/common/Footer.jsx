import React from 'react'
import { social } from '../data/dummydata'

const Footer = () => {
    return (
        <>
        <footer data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom">
            {social.map((item)=>(
                <>
                <i >{item.icon}</i>
                </>
            ))}
            <p>All Right Rescoved 2023</p>
        </footer>
        </>
    )
}

export default Footer
