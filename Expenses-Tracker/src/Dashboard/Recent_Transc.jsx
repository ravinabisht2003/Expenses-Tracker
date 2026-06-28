import React from "react";
import { ChevronDown, ChevronRight, Dice1 } from "lucide-react";

export default function Recent_Transc() {
  const RecentTrans = [
    {
      Date: "25 Jul 12:30",
      Amount: 10,
      Payment: "Youtube",
      Method: "VISA **3254",
      Category: "Subscription",
    },
    {
      Date: "25 Jul 12:30",
      Amount: 10,
      Payment: "Youtube",
      Method: "VISA **3254",
      Category: "Subscription",
    },
    {
      Date: "25 Jul 12:30",
      Amount: 10,
      Payment: "Youtube",
      Method: "VISA **3254",
      Category: "Subscription",
    },
    {
      Date: "25 Jul 12:30",
      Amount: 10,
      Payment: "Youtube",
      Method: "VISA **3254",
      Category: "Subscription",
    },
    {
      Date: "25 Jul 12:30",
      Amount: 10,
      Payment: "Youtube",
      Method: "VISA **3254",
      Category: "Subscription",
    },

    {
      Date: "25 Jul 12:30",
      Amount: 10,
      Payment: "Youtube",
      Method: "VISA **3254",
      Category: "Subscription",
    },
  ];
  return (
    <div className="mt-5 border-2 p-4 h-full border-gray-400 rounded-3xl">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-xl">Recent Transcations</h1>
        <div className="flex gap-5">
          <div className="border-2 border-gray-300 rounded-full pl-2 pr-2 text-xs flex items-center gap-2">
            All accounts{" "}
            <span>
              <ChevronDown size={20} />
            </span>
          </div>
          <div className="border-2 border-gray-300 rounded-full pl-2 pr-2 text-xs flex items-center gap-2">
            See all{" "}
            <span>
              <ChevronRight size={20} />
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 justify-between text-purple-400 items-center mt-5 text-xs font-bold ">
        <div>DATE</div>
        <div>AMOUNT </div>
        <div>PAYMENT NAME </div>
        <div>METHOD </div>
        <div>CATEGORY </div>
      </div>

      <div>
        {RecentTrans.map((item, index) => {
          const Trans = item.Date;

          return (
            <div
              key={index}
              className="grid grid-cols-5 justify-between items-center mt-5 text-xs font-bold"
            >
              <div>{item.Date}</div>
              <div>{item.Amount}</div>
              <div>{item.Payment}</div>
              <div>{item.Method}</div>
              <div>{item.Category}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
