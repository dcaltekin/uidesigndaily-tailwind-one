import React from "react";
import { BsSearch } from "react-icons/bs";

function SearchButton() {
  return (
    <div>
      <form className="flex items-center mx-auto container mt-8 relative gap-x-2">
        <div className="flex absolute inset-y-0 justify-start items-center pl-3 pointer-events-none">
          <BsSearch size={22} />
        </div>

        <input
          type="text"
          className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500  pl-10 p-4 "
          placeholder="Search articles, topics, etc."
          required
        />
        <button className="bg-[#2A325E] p-3.5 px-6 rounded-xl text-white">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchButton;
