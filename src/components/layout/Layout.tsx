import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  activeItem: string;
  onItemClick: (item: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, className, activeItem, onItemClick }) => {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeItem={activeItem} onItemClick={onItemClick} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className={cn('flex-1 overflow-y-auto', className)}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;