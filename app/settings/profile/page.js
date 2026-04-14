import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen bg-(--color-main)">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 h-1/2 bg-(--color-secondary) rounded-lg shadow-lg">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-(--color-last)">Profile</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
