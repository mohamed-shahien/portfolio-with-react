import React from 'react'
import Heading from '../common/Heading'
import { blog } from '../data/dummydata'

const Blog = () => {
    return (
        <>
            <section className="blog">
                <div className="container">
                    <Heading title="Blog"/>
                    <div className="content grid3">
                        {blog.map((item)=>(
                            <div className="box" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" >
                                <div className="img">
                                    <img src={item.cover} alt="" />
                                </div>
                                <div className="text">
                                    <h3>{item.title}</h3>
                                    <label>by {item.author} {item.date}</label>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog
