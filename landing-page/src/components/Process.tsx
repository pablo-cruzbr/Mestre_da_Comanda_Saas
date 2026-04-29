import React from 'react';
import img1 from "../assets/process1.png"; // Recomendo ícones de dashboard/telas
import img2 from "../assets/process2.png"; // Recomendo ícones de smartphone
import img3 from "../assets/process3.png"; // Recomendo ícones de analytics
import ProcessCard from '../layouts/ProcessCard';

const processSteps = [
  {
    img: img1,
    title: "Gestão de Mesas",
    desc: "Abra mesas e controle o consumo de forma visual e intuitiva no painel.",
  },
  {
    img: img2,
    title: "Pedidos via Mobile",
    desc: "Garçons lançam pedidos direto da mesa com sincronização instantânea.",
  },
  {
    img: img3,
    title: "Fluxo de Caixa",
    desc: "Fechamentos precisos e relatórios de vendas em poucos cliques.",
  },
];

const Process = () => {
  return (
    <section className="py-20 px-5 lg:px-14 bg-white dark:bg-[#0a0a0b] transition-colors duration-300">
      <div className="text-center mb-16">
        <p className="text-[#e6005c] font-bold uppercase tracking-[0.2em] text-sm">Eficiência Operacional</p>
        <h2 className="text-3xl md:text-5xl font-extrabold dark:text-white mt-2">
          Como o Mestre funciona?
        </h2>
        <div className="w-20 h-1.5 bg-[#e6005c] mx-auto mt-4 rounded-full" />
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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