import React from 'react'
import img from "../assets/order.png"

const GetApp = () => {
  return (
    <section className="bg-white dark:bg-[#0a0a0b] py-12 lg:py-20 transition-colors duration-300">
      
      <div className="bg-pink-50 dark:bg-[#111112] py-16 px-6 lg:px-20 rounded-[3rem] mx-4 lg:mx-16 border border-pink-100 dark:border-white/5 relative overflow-hidden shadow-2xl transition-colors duration-300">
        
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#e6005c]/10 blur-[120px] rounded-full hidden dark:block" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-[#e6005c]/5 blur-[100px] rounded-full hidden dark:block" />

        <div className="grid md:grid-cols-2 items-center gap-12 relative z-10">
          <div className="text-center md:text-left">
            <h4 className="text-[#e6005c] font-black uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">
              Versão Mobile
            </h4>
            
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-[1.1]">
              Agilidade na palma da mão do seu <span className="text-[#e6005c]">Garçom</span>
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-10 text-lg leading-relaxed max-w-md">
              Reduza erros e aumente a rotatividade das mesas. Com o nosso app, os pedidos vão direto para a cozinha em segundos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
              <button className="bg-[#e6005c] hover:bg-[#ff1a75] text-white font-bold px-10 py-4 rounded-2xl shadow-[0_10px_30px_rgba(230,0,92,0.3)] transition-all active:scale-95">
                Baixar Aplicativo
              </button>
              
              <button className="bg-white dark:bg-[#1a1a1c] text-gray-900 dark:text-white border border-gray-200 dark:border-white/10 font-bold px-10 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-[#252529] transition-all">
                Ver Tutorial
              </button>
            </div>
          </div>

          <div className="flex justify-center relative">
            <div className="absolute inset-0 bg-[#e6005c]/20 blur-[80px] rounded-full hidden dark:block" />
            <img 
              src={img} 
              alt="Mestre das Comandas Mobile" 
              className="w-[260px] md:w-[340px] drop-shadow-[0_35px_35px_rgba(230,0,92,0.25)] hover:scale-105 transition-transform duration-500 relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp