"use client";

import { useParamsStore } from "@/hooks/useParamsStore";
import { Search } from "lucide-react";
import { KeyboardEvent, useRef } from "react";

function SearchBar() {
  const searchTermInputRef = useRef<HTMLInputElement | null>(null);
  const setParams = useParamsStore((state) => state.setParams);

  const onChangeSearchTerm = () => {
    if (searchTermInputRef.current) {
      setParams({ searchTerm: searchTermInputRef.current.value });
    }
  };

  const onEnterSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchTermInputRef.current) {
      setParams({ searchTerm: searchTermInputRef.current.value });
    }
  };

  return (
    <div className="flex w-[50%] items-center rounded-full border-2 shadow-sm">
      <input
        ref={searchTermInputRef}
        type="text"
        placeholder="Search for cars by make, model or color..."
        className="flex-grow border-transparent bg-transparent pl-5 text-sm text-gray-600 focus:border-transparent focus:outline-none focus:ring-0"
        onKeyDown={onEnterSearch}
      />
      <button onClick={onChangeSearchTerm}>
        <Search size={34} className="mx-2 cursor-pointer p-2" />
      </button>
    </div>
  );
}

export default SearchBar;
