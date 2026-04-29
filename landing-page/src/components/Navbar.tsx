import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi'; // Ícone que remete a Comandas/Ordens
import { RiDashboardLine } from 'react-icons/ri';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 px-5 lg:px-14 bg-white dark:bg-[#0a0a0b] border-b border-gray-100 dark:border-gray-800 transition-colors duration-300 sticky top-0 z-50">
        
        {/* Logo - Mestre das Comandas */}
        <div className="flex items-center gap-1.5 text-2xl font-bold text-[#e6005c]">
          <HiOutlineDocumentText className="text-3xl" />
          <span className="tracking-tighter">Mestre das Comandas</span>
        </div>

        {/* Navegação B2B */}
        <nav className="hidden lg:flex space-x-8 font-medium">
          <a href="#home" className="text-gray-600 dark:text-gray-300 hover:text-[#e6005c] dark:hover:text-[#ff3385] transition-colors">Home</a>
          <a href="#funcionalidades" className="text-gray-600 dark:text-gray-300 hover:text-[#e6005c] dark:hover:text-[#ff3385] transition-colors">Funcionalidades</a>
          <a href="#mobile" className="text-gray-600 dark:text-gray-300 hover:text-[#e6005c] dark:hover:text-[#ff3385] transition-colors">Versão Mobile</a>
          <a href="#contato" className="text-gray-600 dark:text-gray-300 hover:text-[#e6005c] dark:hover:text-[#ff3385] transition-colors">Suporte</a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          
          {/* Botão de Login (Dono do Restaurante) */}
          <button className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-200 font-semibold hover:text-[#e6005c] transition-colors">
            <RiDashboardLine />
            Entrar
          </button>
          
          {/* Call to Action Principal */}
          <button className="bg-[#e6005c] hover:bg-[#c2004d] transition-all text-white py-2 px-5 rounded-lg text-sm font-bold shadow-lg shadow-pink-500/20 active:scale-95">
            Testar Grátis
          </button>
        </div>
    </header>
  );
};

export default Navbar;