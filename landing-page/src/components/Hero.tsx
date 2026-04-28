import React from 'react'
import { FaLeaf, FaMapMarkedAlt } from 'react-icons/fa'

const Hero = () => {
  return (
   <section>
    <div>
        <div>
            <FaLeaf/> People trust us 
        </div>

        <h1>
            Most <span>Fatest</span> Food
            <br /> <span>Delivery</span> Service
        </h1>

        <p>Enter your location to get yorr nearest restaurantes or get deliver foods & enjoy. Happy life</p>

        <div>
            <div>
                <FaMapMarkedAlt/>
                <input type="text" placeholder='San Francisco, USA' className="outline-none w-full bg-transparent" />
            </div>
        </div>
    </div>
   </section>
  )
}

export default Hero
