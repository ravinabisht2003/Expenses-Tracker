import React from "react";
import Nav_bar from "./Nav_bar/Nav_bar";
import Top_Navbar from "./Nav_bar/Top_Navbar";
import Dashboard from "./Dashboard/Dashboard";
import Recent_Transc from "./Dashboard/Recent_Transc";

export default function App() {
  return (
    <div className="m-2 p-0 flex gap-5 ">
      <div>
        <Nav_bar />
      </div>
      <div className="w-full min-h-screen p-10">
        <Top_Navbar />
        <div>
          <Dashboard />
          <Recent_Transc />
        </div>
      </div>
    </div>
  );
}
