import React from 'react'
import img from '../assets/Hero.jpg'
import { BsCartCheckFill } from 'react-icons/bs'
import { FaLeaf, FaMapMarkedAlt } from 'react-icons/fa'
import { GiFoodTruck } from 'react-icons/gi'
import { MdDeliveryDining } from 'react-icons/md'

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
            <button>Find Foods</button>
        </div>
    </div>

    <div>
        <div>
            <img src={img} alt="Delivery Guy" />
        </div>
    </div>

    
    <div>
        <GiFoodTruck/> Qualityy Food
    </div>
    
    <div>
        <BsCartCheckFill/> Easy to Order
    </div>

    <div>
        <MdDeliveryDining/> Fastest Delivery
    </div>


   </section>
  )
}

export default Hero
