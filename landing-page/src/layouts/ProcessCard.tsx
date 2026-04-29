import React from 'react'

interface ProcessCardProps {
    img: string;
    title: string;
    desc: string;
}

const ProcessCard = ({ img, title, desc }: ProcessCardProps) => {
  return (
    <div className="bg-gray-50 dark:bg-[#0F1429] p-8 rounded-[2.5rem] border border-gray-100 dark:border-white/5 transition-all hover:scale-105 group">
      <img src={img} alt={title} className="w-full h-48 object-contain mb-8 group-hover:rotate-3 transition-transform" />
      <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{desc}</p>
    </div>
  );
};

export default ProcessCard