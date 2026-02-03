
import { ScanSearch } from "lucide-react";
import React from "react";

export default function SearchBar() {
  return (
    <div className="px-4 py-6 w-full flex justify-center">
      <div className="border border-zinc-400 w-full overflow-hidden rounded max-w-125 flex ">
        {/* Input */}
        <input
          type="text"
          name=""
          placeholder="Search here..."
          id=""
          className=" w-full h-9 px-4 outline-none"
        />
        {/* Search Icon */}
        <button className="bg-amber-500 text-white px-4 border-blue-800">
          <ScanSearch />
        </button>
      </div>
    </div>
  );
}
