"use client";

import React, { useState, useMemo, useEffect } from "react";

import CarCard from "./cards/CarCard";
import Pagination from "../utils/hooks/Pagination";
import { setAuth } from "@/layers/auth/store/authSlice";
import { useAppDispath, useAppSelector } from "@/layers/lib/hooks/redux";
import { CarProps } from "../types";
import { all } from "axios";
import AuthService from "@/layers/auth/service/AuthService";
import { useQuery } from "react-query";
import { useCheckAuth } from "@/layers/lib/hooks/checkAuth";

type AdapterAllCarsArray = {
  allCars: CarProps[];
};

const MainPage = ({ allCars }: AdapterAllCarsArray) => {
  const [currentPage, setCurrentPage] = useState(1);

  const PageSize = 10;
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allCars.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allCars]);

  useCheckAuth();

  return (
    <section>
      <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-14">
        {currentTableData.map((car) => (
          <CarCard key={car.make + car.model + car.city_mpg} car={car} />
        ))}
      </div>

      {/* <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            /> */}

      <Pagination
        className="w-full flex justify-center"
        currentPage={currentPage}
        totalCount={allCars.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

export default MainPage;
