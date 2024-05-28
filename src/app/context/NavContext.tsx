'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface NavContextType {
  currentView: string;
  setView: (view: string) => void;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

const NavProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentView, setCurrentView] = useState<string>('sales');

  const setView = (view: string) => {
    setCurrentView(view);
  };

  return (
    <NavContext.Provider value={{ currentView, setView }}>
      {children}
    </NavContext.Provider>
  );
};

const useNav = () => {
  const context = useContext(NavContext);
  if (!context) {
    throw new Error('useNav precisa ser usado dentro de um NavProvider');
  }
  return context;
};

export { NavProvider, useNav };