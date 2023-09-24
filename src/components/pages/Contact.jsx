import React from 'react'
import Heading from '../common/Heading'
import { contact } from '../data/dummydata'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <Heading title="Keep In Touch"/>
                    <div className="content flexsb">
                        <div className="right">
                            <form>
                                <div className="flex">
                                    <input data-aos="fade-up" type="text" placeholder='Name'/>
                                    <input  data-aos="fade-down" type="email" placeholder='Email'/>
                                </div>
                                <input data-aos="fade-right" type="text" placeholder='Subject'/>
                                <textarea data-aos="fade-left" name="" id="" cols="30" rows="10"/>
                                <button data-aos="fade-up-right" type="submit">Submit</button>
                            </form>
                        </div>
                        <div className="left">
                            {contact.map((item)=>(
                                <div className="box" data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000">
                                    <i>{item.icon}</i>
                                    <p>{item.text1}</p>
                                    <p>{item.text2}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact
