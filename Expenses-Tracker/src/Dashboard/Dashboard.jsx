import React from "react";
import { Icon, ArrowUpRight, ArrowUp } from "lucide-react";

export default function Dashboard() {
  const Dashboard = [
    {
      title: "Total balance",
      amount: 15700,
      percentage: 12.1,
    },
    {
      title: "Income",
      amount: 8500,
      percentage: 6.3,
    },
    {
      title: "Expense",
      amount: 6222,
      percentage: 2.4,
    },
    {
      title: "Total savings",
      amount: 32913,
      percentage: 12.1,
    },
  ];
  return (
    <div className="flex  flex-row mt-6 gap-6">
      {Dashboard.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={index}
            className="w-full h-40 pt-1 pl-3 pb-3  rounded-4xl cursor-pointer border-2 border-gray-300"
          >
            <div className="flex justify-between items-center">
              <div className="font-bold">{item.title}</div>
              <div className="flex">
                <span className="font-medium border-2 border-gray-400 p-2 rounded-full ">
                  <ArrowUpRight size={20} />
                </span>
              </div>
            </div>
            <div className="font-bold text-2xl mt-5">${item.amount} <span className="text-gray-400">.{item.amount.toFixed(2).split(".")[1]}</span></div>
            <div className="flex items-center mt-3 gap-1">
              
                <div className=" p-1 gap-1 w-fit rounded-full bg-green-300 text-green-500 text-xs flex items-center">
                  <div>
                    <ArrowUp size={18} />
                  </div>
                  <div>{item.percentage}%</div>
                </div>
                <div className=" text-gray-400 text-xs font-bold">
                  vs last month
                
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
