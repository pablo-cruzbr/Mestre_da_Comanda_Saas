import React from 'react';
import { HiOutlineDocumentText } from 'react-icons/hi';
import { RiDashboardLine } from 'react-icons/ri';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between py-4 px-5 lg:px-14 bg-white dark:bg-[#080B1A] border-b border-gray-100 dark:border-white/5 transition-colors duration-300 sticky top-0 z-50 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90">
        <div className="flex items-center gap-1.5 text-2xl font-bold text-[#e6005c]">
          <HiOutlineDocumentText className="text-3xl" />
          <span className="tracking-tighter text-gray-900 dark:text-white">
            Mestre das <span className="text-[#e6005c]">Comandas</span>
          </span>
        </div>

        <nav className="hidden lg:flex space-x-8 font-medium">
          <a href="#home" className="text-gray-600 dark:text-gray-400 hover:text-[#e6005c] transition-colors">Home</a>
          <a href="#funcionalidades" className="text-gray-600 dark:text-gray-400 hover:text-[#e6005c] transition-colors">Funcionalidades</a>
          <a href="#mobile" className="text-gray-600 dark:text-gray-400 hover:text-[#e6005c] transition-colors">Versão Mobile</a>
          <a href="#contato" className="text-gray-600 dark:text-gray-400 hover:text-[#e6005c] transition-colors">Suporte</a>
        </nav>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button className="hidden md:flex items-center gap-2 text-gray-700 dark:text-gray-300 font-semibold hover:text-[#e6005c] transition-colors">
            <RiDashboardLine className="text-lg" />
            Entrar
          </button>
          <button className="bg-[#e6005c] hover:bg-[#ff1a75] transition-all text-white py-2 px-6 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(230,0,92,0.3)] active:scale-95">
            Testar Grátis
          </button>
        </div>
    </header>
  );
};

export default Navbar;