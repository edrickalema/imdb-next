"use client";

import React, { useState } from "react";
import { useFormStatus } from "react-dom";
import { searchMovie } from "../utils/action";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const { pending } = useFormStatus();
  const [search, setSearch] = useState();
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    router.push(`/search/${search}`);
  };

  return (
    <div className="py-8 max-w-6xl mx-auto items-center justify-center">
      <form action={searchMovie} onSubmit={handleSubmit} className="flex gap-4">
        <input
          className="w-full px-4 py-4 border-2 border-zinc-400 rounded-md outline-none bg-transparent"
          type="text"
          name="search"
          value={search}
          id=""
          placeholder="Search movie....."
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          type="submit"
          className="bg-amber-500 p-4 rounded-md border-0"
          disabled={pending}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
