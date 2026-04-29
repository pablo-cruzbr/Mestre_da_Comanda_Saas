import React from 'react';
import img1 from "../assets/process1.png";
import img2 from "../assets/process2.png";
import img3 from "../assets/process3.png";

const processSteps = [
    {
        img: img1,
        title: "Easy To Order",
        dese: "You only need a few steps in ordering food",
    },

     {
        img: img2,
        title: "Fastest Delivery",
        dese: "Delivery that is always on time even faster",
    },

     {
        img: img3,
        title: "Best Quality",
        dese: "Not only fast for us, quality ir also ir also number one",
    },

]

const Process = () => {
  return (
    <section>
        <div>
            <p>Our Service</p>
            <h2>How Does it Work?</h2>
        </div>
        
        <div>{processSteps.map((step, index) => (
            
        ))}</div>
    </section>
  )
}

export default Process
