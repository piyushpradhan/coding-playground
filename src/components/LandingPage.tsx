import React from "react";
import CreateContainerButton from "./CreateContainerButton";

const LandingPage = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col">
      <h1 className="text-white text-4xl mt-16">Landing Page</h1>
      <div className="flex flex-col justify-center h-full">
        <CreateContainerButton />
      </div>
    </div>
  );
};

export default LandingPage;
