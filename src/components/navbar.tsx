"use client";

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Home, User, Mail, Code, FileBadge } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Início', href: '/', path: '/' },
  { icon: User, label: 'Sobre', href: '/sobre', path: '/sobre' },
  { icon: Code, label: 'Projetos', href: '/projetos', path: '/projetos' },
  { icon: FileBadge, label: 'Certificações', href: '/certificacoes', path: '/certificacoes' },
  { icon: Mail, label: 'Contato', href: '/contato', path: '/contato' },
];

export function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const updateActiveIndex = () => {
      const currentPath = window.location.pathname;
      const index = navItems.findIndex(item => item.path === currentPath);
      if (index !== -1) {
        setActiveIndex(index);
      } else {
        setActiveIndex(0);
      }
    };

    updateActiveIndex();
    
    window.addEventListener('popstate', updateActiveIndex);
    
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      window.removeEventListener('popstate', updateActiveIndex);
      clearTimeout(timer);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed bottom-10 left-0 right-0 z-50 flex justify-center items-center"
    >
      <div className="relative">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-teal-600/20 to-emerald-600/20 blur-xl rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
        
        <motion.div 
          className="relative bg-slate-900/80 backdrop-blur-xl border border-slate-700/50 rounded-full px-6 py-4 shadow-2xl overflow-hidden"
          initial={{ scale: 0, width: 0 }}
          animate={{ scale: 1, width: 'auto' }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300" />
          
          <ul className="flex items-center gap-2">
            { navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              const isHovered = hoveredIndex === index;
              
              return (
                <motion.li 
                  key={ item.label }
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: isLoaded ? 0.5 + (index * 0.1) : 0,
                    ease: 'easeOut' 
                  }}
                >
                  <motion.a
                    href={ item.href }
                    onClick={ () => setActiveIndex(index) }
                    onMouseEnter={ () => setHoveredIndex(index) }
                    onMouseLeave={ () => setHoveredIndex(null) }
                    className="relative block"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <AnimatePresence mode="wait">
                      {(isActive || isHovered) && (
                        <motion.div
                          layoutId={ isActive ? 'active-pill' : 'hover-pill' }
                          className={ `absolute inset-0 rounded-full ${
                            isActive
                              ? 'bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 shadow-[0_0_20px_rgba(20,184,166,0.5)]'
                              : 'bg-slate-700/50'
                          }`}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          transition={{ 
                            type: 'spring', 
                            duration: 0.25, 
                            bounce: 0.15,
                            stiffness: 300,
                            damping: 25
                          }}
                        />
                      )}
                    </AnimatePresence>
                    
                    <motion.div 
                      className="relative px-4 py-3 flex flex-col items-center justify-center gap-1"
                      animate={{
                        paddingTop: isActive || isHovered ? '0.75rem' : '0.75rem',
                        paddingBottom: isActive || isHovered ? '0.75rem' : '0.75rem',
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <motion.div
                        animate={{
                          y: isActive || isHovered ? 0 : 0,
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      >
                        <Icon
                          strokeWidth={2.5}
                          className={`w-6 h-6 transition-all duration-300 ease-out ${
                            isActive
                              ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]'
                              : isHovered
                              ? 'text-teal-300'
                              : 'text-slate-300'
                          }`}
                        />
                      </motion.div>
                      
                      <AnimatePresence>
                        {(isActive || isHovered) && (
                          <motion.span
                            initial={{ opacity: 0, y: 5, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: 5, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className={`text-xs font-medium whitespace-nowrap ${
                              isActive
                                ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                                : 'text-teal-300'
                            }`}
                          >
                            { item.label }
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.div>
                    
                    { isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-teal-600 to-emerald-600 opacity-30 blur-md"
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    )}
                  </motion.a>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
        <div className="absolute top-full left-0 right-0 h-20 bg-gradient-to-b from-teal-600/10 to-transparent blur-xl rounded-full transition-all duration-300" />
      </div>
    </motion.nav>
  );
}