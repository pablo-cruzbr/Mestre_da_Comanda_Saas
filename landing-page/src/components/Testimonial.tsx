import React from 'react'
import img from "../assets/review.jpg" // Recomendo uma foto de um dono de restaurante real ou chefe
import { FaQuoteLeft } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'

const Testimonial = () => {
  return (
    <section className="py-20 px-5 lg:px-14 bg-white dark:bg-[#0a0a0b] text-black dark:text-white transition-colors duration-300">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Lado da Imagem com Detalhe Decorativo */}
        <div className="flex justify-center relative">
          <div className="absolute -inset-4 bg-pink-500/10 rounded-[2rem] blur-2xl dark:block hidden" />
          <img 
            src={img} 
            alt="Cliente Mestre das Comandas" 
            className="relative z-10 w-full max-w-md rounded-[2.5rem] shadow-2xl border-4 border-white dark:border-gray-800 object-cover"
          />
          {/* Badge de Satisfação */}
          <div className="absolute bottom-6 -right-2 md:right-4 z-20 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl border border-pink-100 dark:border-gray-700">
            <div className="flex gap-1 text-yellow-400 mb-1">
              {[...Array(5)].map((_, i) => <AiFillStar key={i} />)}
            </div>
            <p className="text-xs font-bold dark:text-white">500+ Restaurantes Atendidos</p>
          </div>
        </div>

        {/* Lado do Texto / Depoimento */}
        <div className="text-center md:text-left">
          <h2 className="text-[#e6005c] font-bold uppercase tracking-[0.2em] mb-3 text-sm">
            Nossos Clientes
          </h2>

          <h3 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
            O que dizem sobre a <br /> nossa <span className="text-[#e6005c]">Experiência</span>
          </h3>

          <div className="relative p-8 bg-gray-50 dark:bg-[#1a1a1c] rounded-3xl border border-gray-100 dark:border-gray-800">
            <FaQuoteLeft className="text-4xl text-pink-500/20 absolute top-6 left-6" />
            <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed relative z-10">
              "Desde que implementamos o Mestre das Comandas, o tempo de atendimento caiu pela metade. A integração com o app dos garçons eliminou os erros de cozinha que tínhamos diariamente."
            </p>
            <div className="mt-6">
              <h4 className="font-bold text-xl text-gray-900 dark:text-white text-pink-500">Ricardo Oliveira</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Proprietário do Grill & Cia</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Testimonial