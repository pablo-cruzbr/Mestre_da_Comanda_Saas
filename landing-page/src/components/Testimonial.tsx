import React from 'react'
import img from "../assets/review.jpg" 
import { FaQuoteLeft } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <section className="py-24 px-5 lg:px-14 bg-white dark:bg-[#0a0a0b] transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      
        <div className="flex justify-center relative">
          <div className="absolute -inset-6 bg-[#e6005c]/10 blur-[100px] rounded-full hidden dark:block" />
          
          <img 
            src={img} 
            alt="Cliente Mestre das Comandas" 
            className="relative z-10 w-full max-w-md rounded-[3rem] shadow-2xl border-4 border-white dark:border-white/10 object-cover transition-all"
          />

          <div className="absolute bottom-8 -right-4 md:right-0 z-20 bg-white dark:bg-[#1a1a1c] p-5 rounded-2xl shadow-xl border border-gray-100 dark:border-white/5">
            <div className="flex gap-1 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => <AiFillStar key={i} />)}
            </div>
            <p className="text-xs font-black text-gray-900 dark:text-white tracking-tight">500+ Restaurantes Atendidos</p>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-[#e6005c] font-black uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">
            Nossos Clientes
          </h2>

          <h3 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-10 leading-[1.1]">
            O que dizem sobre a <br /> nossa <span className="text-[#e6005c]">Experiência</span>
          </h3>

          <div className="relative p-10 bg-gray-50 dark:bg-[#111112] rounded-[2.5rem] border border-gray-100 dark:border-white/5 overflow-hidden transition-colors duration-300">
            {/* Aspas decorativas */}
            <FaQuoteLeft className="text-6xl text-[#e6005c]/10 absolute -top-2 -left-2" />
            
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed relative z-10">
              "Desde que implementamos o Mestre das Comandas, o tempo de atendimento caiu pela metade. A integração com o app dos garçons eliminou os erros de cozinha que tínhamos diariamente."
            </p>
            
            <div className="mt-8 flex items-center gap-4">
              <div className="h-12 w-1 bg-[#e6005c] rounded-full" />
              <div>
                <h4 className="font-bold text-xl text-gray-900 dark:text-white">Ricardo Oliveira</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide uppercase">Proprietário do Grill & Cia</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonial