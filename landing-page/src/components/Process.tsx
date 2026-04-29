import React from 'react';
import img1 from "../assets/img4.png"; 
import img2 from "../assets/img2.png"; 
import img3 from "../assets/img1.png"; 
import ProcessCard from '../layouts/ProcessCard';

const processSteps = [
  { img: img1, title: "Gestão de Mesas", desc: "Abra mesas e controle o consumo de forma visual e intuitiva no painel." },
  { img: img2, title: "Pedidos via Mobile", desc: "Garçons lançam pedidos direto da mesa com sincronização instantânea." },
  { img: img3, title: "Fluxo de Caixa", desc: "Fechamentos precisos e relatórios de vendas em poucos cliques." },
];

const Process = () => {
  return (
    <section className="py-24 px-5 lg:px-14 bg-white dark:bg-[#080B1A] transition-colors duration-300">
      <div className="text-center mb-20">
        <p className="text-[#e6005c] font-bold uppercase tracking-[0.3em] text-xs md:text-sm">
          Eficiência Operacional
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mt-3">
          Como o Mestre funciona?
        </h2>
        <div className="w-24 h-1.5 bg-[#e6005c] mx-auto mt-6 rounded-full dark:shadow-[0_0_15px_rgba(230,0,92,0.4)]" />
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
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