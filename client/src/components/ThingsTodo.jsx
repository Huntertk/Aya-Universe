import React from 'react'
import '../styles/homeBuffetOption.scss'
import { thingsTodo } from '../data'

const Cards = () => {
    
    return  (
        thingsTodo.map((data) => {
            return <div className="card" key={data.id}>
                <img src={data.image} alt="" />
                <div className="content">
                    <h3>{data.title}</h3>
                    <p>{data.desc}</p>
                </div>
            </div>
        })
    )
}

const ThingsTodo = () => {
  return (
    <section className='HomeBuffetOptionMainContainer'>
        <h1>Highlights SKYCAB LANGKAWI</h1>
        <div className="cardMainContainer">
            <Cards />
        </div>
    </section>
  )
}

export default ThingsTodo