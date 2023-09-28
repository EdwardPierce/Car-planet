import React from "react";

import { SearchManuFacturerProps } from "../types";
import { manufacturers } from "../constants/filterData";

const SearchManufacturer = ({ setManufacturer }: SearchManuFacturerProps) => {
  return (
    <select
      className="bg-blue-300  px-6 py-2 rounded-full"
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
        setManufacturer(e.currentTarget.value)
      }
    >
      {manufacturers.map((item) => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
};

export default SearchManufacturer;
