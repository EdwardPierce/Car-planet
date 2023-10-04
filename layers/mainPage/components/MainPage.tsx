"use client";

import React, { useState, useMemo, useEffect } from "react";

import CarCard from "./CarCard";
import Pagination from "../utils/hooks/Pagination";
import { checkAuth } from "@/layers/auth/store/authSlice";
import { useAppDispath, useAppSelector } from "@/layers/lib/hooks/redux";
import { CarProps } from "../types";
import { all } from "axios";

type AdapterAllCarsArray = {
  allCars: CarProps[];
};

const MainPage = ({ allCars }: AdapterAllCarsArray) => {
  const dispatch = useAppDispath();

  const isAuth = useAppSelector((state) => state.auth.isAuth);
  const status = useAppSelector((state) => state.auth.status);
  const user = useAppSelector((state) => state.auth.user);

  const [currentPage, setCurrentPage] = useState(1);

  const PageSize = 10;
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allCars.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allCars]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  console.log("isAuth ", isAuth);
  console.log("status ", status);

  return (
    <section>
      <h1 className="text-3xl text-red-500">
        {isAuth ? `The user authorized with ${user.email}` : "Log in"}{" "}
      </h1>
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
