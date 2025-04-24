// Home.jsx
import React from "react";
import LeftSidebar from "./LeftSidebar.jsx";
import MainContent from "./MainContent.jsx";
import RightSidebar from "./RightSidebar.jsx";

const Home = () => {
  return (
    <div className="flex min-h-screen bg-[#f8fafce3]">
      <LeftSidebar />
      <MainContent />
      <RightSidebar />
    </div>
  );
};

export default Home;
