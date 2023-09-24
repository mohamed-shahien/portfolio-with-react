import React from 'react';

import {home} from "../data/dummydata";
import Typewriter from "typewriter-effect"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        {home.map((valu,i)=>(
          <div className="heroContainer">
            <h3 data-aos="fade-up">{valu.text}</h3>
            <h1 data-aos="fade-up">
              <Typewriter options={{strings:[`${valu.name}`, `${valu.post}`, `${valu.design}`], autoStart:true ,loop:true}} />
            </h1>
            <p data-aos="fade-down">{valu.desc}</p>
            <button data-aos="fade-right" className="primaryBtn">DownLoad CV</button>
          </div>
        ))}
      </section>
    </>
  )
}

export default Hero
