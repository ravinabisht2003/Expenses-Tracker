import React from "react";
import expenses_logo from "../assets/expenses_logo.jpg";

import {
  LayoutDashboard,
  ArrowLeftRight,
  Wallet,
  Goal,
  Settings,
  BadgeDollarSign,
  ChartNoAxesCombined,
} from "lucide-react";

export default function Nav_bar() {
  const navbarIcons = [
    {
      icon: LayoutDashboard,
      intro: "Dashboard",
    },
    {
      icon: ArrowLeftRight,
      intro: "Transcations",
    },
    {
      icon: Wallet,
      intro: "Wallet",
    },
    {
      icon: Goal,
      intro: "Goal",
    },
    {
      icon: BadgeDollarSign,
      intro: "Budget",
    },
    {
      icon: ChartNoAxesCombined,
      intro: "Analytics",
    },

    {
      icon: Settings,
      intro: "Settings",
    },
    
  ];

  return (
    <nav className="w-64 min-h-screen bg-purple-600 shadow-lg rounded-3xl">
      {/* Logo Section */}
      <div className="flex items-center gap-4 px-4 py-6">
        <img
          src={expenses_logo}
          alt="Logo"
          className="h-20 w-20 rounded-full object-cover"
        />

        <h1 className="text-xl text-amber-50 font-bold">
          Expense Tracker
        </h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2 px-3 mt-4">
        {navbarIcons.map((item, index) => {
          const Icon = item.icon;

          return (
      
            <div
              key={index}
              className="flex items-center gap-8 pl-6 pb-3 pt-3 mt-1 rounded-lg cursor-pointer hover:bg-purple-500 transition-all duration-300 hover:translate-x-4"
            >
              <div><Icon className="w-6 h-6 text-white" /></div>
              <div><span className="font-medium text-white">{item.intro}</span></div>
            </div>
            
          );
        })}
      </div>
    </nav>
  );
}