// src/components/Header.js
import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav>
      <ul className="flex justify-center space-x-8">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
