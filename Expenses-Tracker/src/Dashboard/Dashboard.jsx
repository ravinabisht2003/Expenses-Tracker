import React from 'react'
import {Icon,ArrowUpRight,ArrowUp} from 'lucide-react'

export default function Dashboard() {
    const Dashboard = [
    {
      title: "Total balance",
      amount: 15700,
      percentage:12.1,
    },
    {
      title: "Income",
      amount: 8500,
      percentage:6.3,

    },
    {
      title: "Expense",
      amount: 6222,
      percentage:2.4,
    },
    {
      title: "Total savings",
      amount: 32913,
      percentage:12.1,
    },    
  ];
  return (
    
    <div className="flex  flex-row mt-10 gap-2">
        {Dashboard.map((item, index) => {
          const Icon = item.icon;

          return (
      
            <div
              key={index}
              className=" w-full pt-3 pb-3 p-5 rounded-lg cursor-pointer border-2 border-gray-300"
            >
            <div className='flex justify-between w-full items-center gap-25'>
              <div className='font-bold'>{item.title}</div>
              <div><span className="font-medium"><ArrowUpRight /></span></div>
            </div>
                <div className='font-bold text-2xl mt-4'>${item.amount}</div>
                <div className='flex items-center gap-2 ' >
                    
                <div className='bg-green-400 w-fit mt-2 rounded-full p-1 text-xs'><ArrowUp />{item.percentage}%</div>
                <div className=' text-gray-400 text-xs font-bold'>vs last month</div>
                </div>
            </div>
            
          );
          
        })}
    </div>

  )
}
