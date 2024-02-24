import React from "react";

function Header() {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-teal-400 border-b border-gray-200 py-3 sm:py-0">
      <nav
        className="relative max-w-7xl w-full mx-auto px-4 xl:flex xl:items-center xl:justify-between sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-center pt-5 pb-5 ">
          <div className="flex-none text-xl font-bold">
            CaptiGEN
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
