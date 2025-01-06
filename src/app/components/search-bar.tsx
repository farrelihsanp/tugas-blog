"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?keyword=${searchTerm}`);
        setSearchTerm("");
      }}
      className="flex items-center space-x-2"
    >
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition duration-200"
      />
      <button
        type="submit"
        className="px-4 py-2 text-white bg-black rounded-lg shadow-md hover:bg-black transition duration-200"
      >
        Search
      </button>
    </form>
  );
}
