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
  CircleQuestionMark,
  LogOut,
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
      <div className="flex items-center gap-5 px-4 py-6  rounded-t-3xl mb-5 bg-purple-500">
        <img
          src={expenses_logo}
          alt="Logo"
          className="h-18 w-18 rounded-full object-cover"
        />

        <h1 className="text-l  text-amber-50 font-bold">
          Money Tracker
        </h1>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2 px-3">
        {navbarIcons.map((item, index) => {
          const Icon = item.icon;

          return (
      
            <div
              key={index}
              className="flex items-center gap-9 pl-6 pb-3 pt-3  rounded-lg cursor-pointer hover:bg-blue-800 transition-all duration-300 hover:translate-x-4"
            >
              <div><Icon className="w-6 h-6 text-white" /></div>
              <div><span className="font-medium text-white">{item.intro}</span></div>
            </div>
            
          );
          
        })}

      </div>
    <div className="flex flex-col gap-2 px-3 mt-15 pb-25" >
      <div className="items-center  ">
      <div className="flex gap-9 pl-6 pb-3 pt-3 text-white rounded-lg cursor-pointer hover:bg-blue-800 transition-all duration-300 hover:translate-x-4">
          <span><CircleQuestionMark /></span>
          <span>Help</span>
      </div>
      <div className="flex gap-9 pl-6 pb-3 pt-3 text-white rounded-lg cursor-pointer hover:bg-blue-800 transition-all duration-300 hover:translate-x-4">
          <span><LogOut /></span>
          <span>Logout</span>
      </div>
    </div>
    </div>

        
      
    </nav>
  );
}