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
  Sun,
  Moon,
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
    <nav className="flex flex-col items-center w-64 min-h-screen bg-purple-600 shadow-lg rounded-3xl">
      {/* Logo Section */}
      <div className="flex items-center gap-5 px-4 py-6">
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
      <div className="flex  flex-col gap-2">
        {navbarIcons.map((item, index) => {
          const Icon = item.icon;

          return (
      
            <div
              key={index}
              className="flex  gap-9 pt-3 pb-3 p-5 rounded-lg cursor-pointer hover:bg-purple-700 transition-all duration-300 hover:translate-x-4"
            >
              <div><Icon className="w-6 h-6 text-white" /></div>
              <div><span className="font-medium text-white">{item.intro}</span></div>
            </div>
            
          );
          
        })}

      <div>
      <div className="flex gap-9 mt-8 pt-3 pb-3 p-5  hover:bg-purple-700 transition-all duration-300 hover:translate-x-4 rounded-lg">
        <div><CircleQuestionMark className="w-6 h-6 text-white"/></div>
        <div><span className="font-medium text-white">Help</span></div>
      </div>

     <div className="flex  gap-9 pt-3 pb-3 p-5  hover:bg-purple-700 transition-all duration-300 hover:translate-x-4 rounded-lg">
        <div><LogOut className="w-6 h-6 text-white"/></div>
        <div><span className="font-medium text-white">Logout</span></div>
      </div>
      </div>

      {/* <div className="mt-10 mb-5 p-1">
        <div className="gap-5 rounded-full border-2 text-white flex w-30 pl-3 pr-3">
        <div><Sun  className="w-8 h-8 text-white hover:bg-purple-700 transition-all duration-300 hover:translate-x-4 rounded-lg" /></div>
        <div><Moon className="w-8 h-8 text-white hover:bg-purple-700 transition-all duration-300 hover:translate-x-4 rounded-lg"/></div>
        </div>
      </div> */}





      </div>
    
   

   
        
      
    </nav>
  );
}