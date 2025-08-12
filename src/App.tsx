import { useState } from 'react';
import Layout from './components/layout/Layout';
import Dashboard from './components/dashboard/Dashboard';
import { BagDashboard, HatDashboard, KeychainsDashboard, MugDashboard } from './components/dashboard/ProductDashboards';
import { Toaster } from 'sonner';


function App() {
  const [activeItem, setActiveItem] = useState('dashboard');

  const renderContent = () => {
    switch (activeItem) {
      case 'dashboard':
        return <Dashboard />;
      case 'products-hat':
        return <HatDashboard />;
      case 'products-mug':
        return <MugDashboard />;
      case 'products-keychains':
        return <KeychainsDashboard />;
      case 'products-bag':
        return <BagDashboard />;
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