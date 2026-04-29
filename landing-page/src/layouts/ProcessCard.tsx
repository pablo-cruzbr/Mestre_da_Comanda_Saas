import React from 'react'

interface ProcessCardProps {
    img: string;
    title: string;
    desc: string;
}

const ProcessCard = ({ img, title, desc }: ProcessCardProps) => {
  return (
    <div className="group flex flex-col items-center text-center p-8 bg-gray-50 dark:bg-gray-800/40 rounded-3xl border border-transparent hover:border-orange-500/20 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/5">
      
      {/* Container do Ícone (Tamanho Ampliado) */}
      <div className="relative mb-10"> {/* Aumentei a margem inferior para não encostar no texto */}
  
  {/* 1. FUNDO DE EXPANSÃO (Acompanha o tamanho do container) */}
  <div className="absolute inset-0 bg-orange-500/10 rounded-2xl scale-0 group-hover:scale-110 transition-transform duration-500" />
  
  {/* 2. CONTAINER DO ÍCONE (Aumentado para w-40 h-40) */}
  <div className="relative w-40 h-40 flex items-center justify-center bg-white dark:bg-gray-700 rounded-3xl shadow-lg group-hover:shadow-orange-500/20 transition-all border border-gray-100 dark:border-gray-600">
    
    {/* 3. IMAGEM DO ÍCONE (Aumentada para w-28 h-28) */}
    <img 
      src={img} 
      alt={title} 
      className="w-28 h-28 object-contain group-hover:rotate-12 group-hover:-translate-y-3 transition-transform duration-300" 
    />
  </div>
</div>

      {/* Textos */}
      <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3 tracking-tight">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-[240px]">
        {desc}
      </p>
    </div>
  )
}

export default ProcessCard