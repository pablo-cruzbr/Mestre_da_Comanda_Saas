import React from 'react'
import img from '../assets/Hero.jpg' // Recomendo usar o print do seu dashboard aqui
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { RiDashboard3Line, RiDeviceLine } from 'react-icons/ri'
import { MdOutlineAdsClick } from 'react-icons/md'
import { AiOutlineThunderbolt } from 'react-icons/ai'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-[#0a0a0b] text-black dark:text-white min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-5 lg:px-14 py-10 gap-10 transition-colors duration-300">
      
      {/* Lado Esquerdo - Copywriting B2B */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <div className="inline-flex items-center mb-4 text-[#e6005c] font-semibold bg-pink-50 dark:bg-pink-900/10 px-4 py-1.5 rounded-full text-sm border border-pink-100 dark:border-pink-500/20">
          <AiOutlineThunderbolt className="mr-2 text-lg"/> Gestão em tempo real
        </div>

      <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
      Controle seu <span className="text-[#e6005c]">Restaurante</span> <br className="hidden md:block" /> 
      na palma da mão
    </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
          O **Mestre das Comandas** facilita o gerenciamento de pedidos, mesas e produtos, integrando perfeitamente sua operação Web e Mobile.
        </p>

        {/* CTA - Em vez de busca de endereço, foco em demonstração/contato */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
          <button className="bg-[#e6005c] hover:bg-[#c2004d] active:scale-95 transition-all text-white font-bold rounded-xl px-10 py-4 shadow-xl shadow-pink-500/20 w-full sm:w-auto">
            Começar Agora
          </button>
          <button className="flex items-center gap-2 text-gray-700 dark:text-gray-200 font-bold hover:text-[#e6005c] transition-colors px-6 py-4">
            <MdOutlineAdsClick className="text-xl" /> Ver Demo
          </button>
        </div>
      </div>

      {/* Lado Direito - Visual do Software */}
      <div className='lg:w-1/2 w-full relative flex justify-center'>
        <div className="relative">
          {/* Imagem do Software (Squircle para parecer tela de sistema) */}
          <img 
            src={img} 
            alt="Mestre das Comandas Dashboard" 
            className="rounded-3xl w-[320px] h-[320px] md:w-[500px] md:h-[400px] object-cover border-4 border-pink-500/10 shadow-2xl" 
          />
          
          {/* Badges Flutuantes - Funcionalidades Reais */}
          <div className="absolute -top-4 -right-4 bg-white dark:bg-[#1a1a1c] text-black dark:text-white text-xs md:text-sm font-bold px-4 py-3 rounded-2xl flex items-center gap-2 shadow-2xl border border-gray-100 dark:border-gray-800"> 
            <RiDashboard3Line className="text-[#e6005c] text-xl"/> Painel Admin
          </div>
          
          <div className="absolute top-1/2 -left-10 bg-white dark:bg-[#1a1a1c] text-black dark:text-white text-xs md:text-sm font-bold px-4 py-3 rounded-2xl flex items-center gap-2 shadow-2xl border border-gray-100 dark:border-gray-800">
            <RiDeviceLine className="text-[#e6005c] text-xl"/> App Garçom
          </div>

          <div className="absolute -bottom-4 right-4 bg-white dark:bg-[#1a1a1c] text-black dark:text-white text-xs md:text-sm font-bold px-4 py-3 rounded-2xl flex items-center gap-2 shadow-2xl border border-gray-100 dark:border-gray-800">
            <HiOutlineDocumentReport className="text-[#e6005c] text-xl"/> Relatórios PDV
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero