import { Visibility } from '@mui/icons-material';
import React, { useState } from 'react'
import { portfolio } from '../data/dummydata';
import Heading from '../common/Heading';




const allCategory =["all", ...new Set(portfolio.map((item)=> item.category))];  //ترجعلى العناصر الى فى الابجيكت 

const Portfolio = () => {

    const [List,setList] = useState(portfolio);
    const [category,setCategory] = useState(allCategory);
    console.log(setCategory);
    const filterItem = (category) => {
        const newItem = portfolio.filter((item)=> item.category === category)
        setList(newItem);
        if(category === "all"){
            setList(portfolio)
        }
    }


    return (
        <>
            <article>
                <div className="container">
                    <Heading title="Portfolio"/>
                    <div className="catBotton">
                        {category.map((category)=>(<button className='primaryBtn' onClick={()=>{filterItem(category)}}>{category}</button>))}
                    </div>
                        <div className="content grid3">
                        {List.map((item)=>(
                            <div className="box">
                                <div className="img" data-aos="zoom-in-left">
                                    <img src={item.cover} alt="" />
                                </div>

                                <div className="overLay">
                                    <h3>{item.title}</h3>
                                    <span>{item.name}</span>
                                    <Visibility />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
            </article>
        </>
    )
}

export default Portfolio
