import React from "react";
import SalesChart from "./SalesChat";
import StatsCards from "./StatasCard";
import { OrdersTable } from "./OrdersTable";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SalesChart />
        <StatsCards />
      </div>
      <OrdersTable />
    </div>
  );
};

export default Dashboard;
