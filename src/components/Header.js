import React from "react";

function Header() {
  return (
    <div className="bg-white shadow text-gray-800">
      <header className="container max-w-6xl px-10 py-3 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="title text-4xl text-gray-800 mt-1">
            Employee Directory
          </h1>
        </div>
        <p className="mb-16 text-md">
          Search for an employee or sort by Name or Category.
        </p>
      </header>
    </div>
  );
}

export default Header;
