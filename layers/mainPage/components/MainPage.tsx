"use client";

import React, { useState, useMemo } from "react";
import CarCard from "./CarCard";
import Pagination from "../utils/hooks/Pagination";

const MainPage = ({ allCars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const PageSize = 10;

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allCars.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allCars]);

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
