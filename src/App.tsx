import { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import { Toaster } from 'sonner';
import Products from './components/dashboard/Products';
import ProductUploads from './components/dashboard/ProductUploads';
import CustomerDashboard from './components/dashboard/CustomerDeshboard';


function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'products-hat':
        return <Products categoryName="Hat" onItemClick={setActiveItem} />;
      case 'products-mug':
        return <Products categoryName="Mug" onItemClick={setActiveItem} />;
      case 'products-keychains':
        return <Products categoryName="Keychains" onItemClick={setActiveItem} />;
      case 'products-bag':
        return <Products categoryName="Bag" onItemClick={setActiveItem} />;
      case 'product-uploads':
        return <ProductUploads />;
      case 'customers':
        return <CustomerDashboard />;
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