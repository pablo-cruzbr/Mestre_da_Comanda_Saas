import React from 'react'
import img from "../assets/order.png" // Aqui use o screenshot do celular que aparece no seu portfólio

const GetApp = () => {
  return (
    <section className="bg-white dark:bg-[#0a0a0b] py-16 transition-colors duration-300">
      <div className="bg-pink-50 dark:bg-[#1a1a1c] py-16 px-6 lg:px-20 rounded-[3rem] mx-4 lg:mx-16 border border-pink-100 dark:border-gray-800 relative overflow-hidden">
        
        {/* Efeito de luz decorativa no fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 blur-[100px] rounded-full" />

        <div className="grid md:grid-cols-2 items-center gap-12 relative z-10">
          <div className="text-center md:text-left">
            <h4 className="text-[#e6005c] font-bold uppercase tracking-widest mb-3">Versão Mobile</h4>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
              Agilidade na palma da mão do seu <span className="text-[#e6005c]">Garçom</span>
            </h2>
            <p className="text-gray-700 dark:text-gray-400 mb-8 text-lg leading-relaxed">
              Reduza erros e aumente a rotatividade das mesas. Com o nosso app, os pedidos vão direto para a cozinha em segundos, sem burocracia.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#e6005c] hover:bg-[#c2004d] text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-pink-500/20 transition-all active:scale-95">
                Baixar Aplicativo
              </button>
              <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                Ver Tutorial
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img 
              src={img} 
              alt="Mestre das Comandas Mobile" 
              className="w-[260px] md:w-[320px] drop-shadow-[0_35px_35px_rgba(230,0,92,0.2)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetApp