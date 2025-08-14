import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { cn } from "@/lib/utils";
import { useState } from "react";

function MainLayout() {
  const [activeItem, setActiveItem] = useState("dashboard");
  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className={cn("flex-1 overflow-y-auto")}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
