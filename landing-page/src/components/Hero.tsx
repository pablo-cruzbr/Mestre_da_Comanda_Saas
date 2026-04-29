import React from 'react'
import img from '../assets/teste.png'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { RiDashboard3Line, RiDeviceLine } from 'react-icons/ri'
import { MdOutlineAdsClick } from 'react-icons/md'
import { AiOutlineThunderbolt } from 'react-icons/ai'

const Hero = () => {
  return (
    // Alterado dark:bg-[#0a0a0b] para dark:bg-[#080B1A]
    <section className="bg-white dark:bg-[#080B1A] text-gray-900 dark:text-white min-h-[90vh] flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between px-5 lg:px-14 py-10 gap-10 transition-colors duration-300">
      
      {/* Lado Esquerdo - Texto e Call to Action */}
      <div className="lg:w-1/2 w-full text-center lg:text-left">
        <div className="inline-flex items-center mb-6 text-[#e6005c] font-bold bg-pink-50 dark:bg-[#e6005c]/10 px-4 py-2 rounded-full text-sm border border-pink-100 dark:border-[#e6005c]/20">
          <AiOutlineThunderbolt className="mr-2 text-lg animate-pulse"/> Gestão em tempo real
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
          Controle seu <span className="text-[#e6005c]">Restaurante</span> <br className="hidden md:block" /> 
          na palma da mão
        </h1>

        <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
          O **Mestre das Comandas** facilita o gerenciamento de pedidos, mesas e produtos, integrando perfeitamente sua operação Web e Mobile.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
          <button className="bg-[#e6005c] hover:bg-[#ff1a75] active:scale-95 transition-all text-white font-bold rounded-2xl px-10 py-4 shadow-xl shadow-pink-500/20 w-full sm:w-auto">
            Começar Agora
          </button>
          
          <button className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-bold hover:text-[#e6005c] transition-colors px-6 py-4 group">
            <MdOutlineAdsClick className="text-2xl group-hover:scale-110 transition-transform" /> Ver Demo
          </button>
        </div>
      </div>

      {/* Lado Direito - Ajustado para Imagem Transparente */}
      <div className='lg:w-1/2 w-full relative flex justify-center items-center'>
        <div className="relative group w-full max-w-[550px]">
          
          {/* Brilho rosa de fundo (Glow) */}
          <div className="absolute -inset-4 bg-[#e6005c]/20 blur-[80px] rounded-full opacity-0 dark:opacity-40 group-hover:opacity-60 transition-opacity" />
          
          <img 
            src={img} 
            alt="Mestre das Comandas Dashboard" 
            // drop-shadow aplica a sombra no formato do objeto (notebook), não no quadrado da imagem
            className="relative z-10 w-full h-auto max-h-[480px] transition-all object-contain drop-shadow-[0_20px_50px_rgba(230,0,92,0.3)] group-hover:scale-[1.02] duration-500" 
          />
          
          {/* Badges - Fundo azul marinho levemente mais claro (#0f1429) */}
          <div className="absolute -top-4 -right-4 z-20 bg-white dark:bg-[#0f1429] text-gray-900 dark:text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl border border-gray-100 dark:border-white/5"> 
            <RiDashboard3Line className="text-[#e6005c] text-xl"/> Painel Admin
          </div>
          
          <div className="absolute top-1/2 -left-6 z-20 bg-white dark:bg-[#0f1429] text-gray-900 dark:text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl border border-gray-100 dark:border-white/5">
            <RiDeviceLine className="text-[#e6005c] text-xl"/> App Garçom
          </div>

          <div className="absolute -bottom-4 -right-4 z-20 bg-white dark:bg-[#0f1429] text-gray-900 dark:text-white text-xs md:text-sm font-bold px-4 py-2.5 rounded-2xl flex items-center gap-2 shadow-2xl border border-gray-100 dark:border-white/5">
            <HiOutlineDocumentReport className="text-[#e6005c] text-xl"/> Relatórios PDV
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero