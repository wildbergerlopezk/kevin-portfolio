// src/components/NavItem.tsx
import React from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  scrollToSection: (sectionId: string) => void;
}

const NavItem: React.FC<NavItemProps> = ({ 
  href, 
  children, 
  isActive, 
  scrollToSection 
}) => (
  <button
    onClick={() => scrollToSection(href)}
    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
      isActive 
        ? 'text-cyan-400 bg-cyan-400/10' 
        : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50'
    }`}
  >
    {children}
  </button>
);

export default NavItem;