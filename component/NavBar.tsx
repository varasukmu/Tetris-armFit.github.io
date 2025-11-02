'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Documentation', href: '/documentation' },
  // { name: 'How To Play', href: '/howToPlay' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex justify-center">
      <nav className="bg-sky-300 px-4 sm:px-8 py-4 w-11/12 lg:w-3/4 rounded-xl shadow-2xl">
        <div className="flex justify-between items-center font-sans">
          
          {/* โลโก้ */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-2xl sm:text-3xl font-bold text-black tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              TetrisArmFit
            </Link>
          </div>

          {/* ปุ่ม toggle menu (มือถือ) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* เมนู desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href} 
                  className={`
                    px-4 py-2 rounded-lg text-base font-semibold
                    transition-all duration-300 ease-in-out
                    ${isActive 
                      ? 'bg-sky-400 text-black shadow-inner' 
                      : 'text-black hover:text-black hover:bg-sky-200'
                    }
                  `}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

        </div>

        {/* เมนูมือถือ (transition) */}
        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-300 ease-in-out
            border-t border-black/20 space-y-2
            ${isOpen ? 'max-h-96 opacity-100 pt-4 mt-4' : 'max-h-0 opacity-0'}
          `}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className={`
                  block w-full text-left px-4 py-2 rounded-lg text-base font-medium
                  transition-all duration-300 ease-in-out
                  ${isActive 
                    ? 'bg-sky-400 text-black shadow-inner' 
                    : 'text-black hover:text-black hover:bg-sky-200'
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

      </nav>
    </header>
  );
}