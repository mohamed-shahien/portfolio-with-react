import React from 'react'
import { about } from '../data/dummydata'
import Heading from '../common/Heading'

const About = () => {
    return (
    <>

        <section className='about'>
            <div className="container flex">
            {about.map((val,i)=>(
                <>
                    <div data-aos="fade-up-right" className="left">
                        <img src={val.cover} alt="" />
                    </div>
                    <div className="rght" data-aos="fade-up-left">
                        <Heading title="About me"/>
                        <p>{val.desc}</p>
                        <p>{val.desc1}</p>
                        <button>DownLoade VC</button>
                        <button className='primaryBtn'>DownLoade VC</button>
                    </div>
                </>
            ))}
            </div>
        
        </section>

    </>
    )
}

export default About
