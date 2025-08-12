import React from 'react';
import OrdersTable from './OrdersTable';
import SalesChart from './SalesChat';
import StatsCards from './StatasCard';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening with your store today.
        </p>
      </div>
      
      <StatsCards />
      <SalesChart />
      <OrdersTable />
    </div>
  );
};

export default Dashboard;