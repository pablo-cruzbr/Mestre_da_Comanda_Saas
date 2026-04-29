import React from 'react';
import img1 from "../assets/process1.png";
import img2 from "../assets/process2.png";
import img3 from "../assets/process3.png";
import ProcessCard from '../layouts/ProcessCard';

const processSteps = [
  {
    img: img1,
    title: "Easy To Order",
    desc: "You only need a few steps in ordering food", // Corrigido de 'dese' para 'desc'
  },
  {
    img: img2,
    title: "Fastest Delivery",
    desc: "Delivery that is always on time even faster",
  },
  {
    img: img3,
    title: "Best Quality",
    desc: "Not only fast for us, quality is also number one",
  },
];

const Process = () => {
  return (
    <section className="py-16 px-5 lg:px-14 bg-white dark:bg-black transition-colors duration-300">
      <div className="text-center mb-12">
        <p className="text-orange-500 font-semibold uppercase tracking-wide">Our Service</p>
        <h2 className="text-3xl md:text-4xl font-bold dark:text-white">How Does it Work?</h2>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processSteps.map((step, index) => (
          <ProcessCard 
            key={index} 
            img={step.img} 
            title={step.title} 
            desc={step.desc} 
          />
        ))}
      </div>
    </section>
  )
}

export default Process;