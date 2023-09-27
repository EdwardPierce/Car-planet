"use client";

import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer.trim() === "" && model.trim() === "") {
      return alert("Please provide some input");
    }

    updateSearchParams(manufacturer.toLowerCase(), model.toLowerCase());
  };

  const updateSearchParams = (manufacturer: string, model: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form onSubmit={handleSearch} className="flex">
      <div>
        <SearchManufacturer setManufacturer={setManufacturer} />
      </div>

      <div>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.currentTarget.value)}
          placeholder="Write model"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default SearchBar;
