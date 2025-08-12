import { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import { Toaster } from 'sonner';
import Products from './components/dashboard/Products';


function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'products-hat':
        return <Products categoryName="Hat" />;
      case 'products-mug':
        return <Products categoryName="Mug" />;
      case 'products-keychains':
        return <Products categoryName="Keychains" />;
      case 'products-bag':
        return <Products categoryName="Bag" />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Layout activeItem={activeItem} onItemClick={setActiveItem}>
        {renderContent()}
      </Layout>
      <Toaster />
    </div>
  );
}

export default App;