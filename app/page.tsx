import CarCard from "@/layers/components/CarCard";
import CustomFilter from "@/layers/components/CustomFilter";
import Hero from "@/layers/components/Hero";
import SearchBar from "@/layers/components/SearchBar";
import ShowMore from "@/layers/components/ShowMore";
import { allLocalCars as allCars } from "@/layers/constants/carsData";
import { fuels, yearsOfProduction } from "@/layers/constants/filterData";
import { HomeProps } from "@/layers/types";
import { fetchCars } from "@/layers/utils";

import React from "react";

const Home = async ({ searchParams }: HomeProps) => {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   model: searchParams.model || "",
  //   limit: searchParams.limit || 10,
  //   fuel: searchParams.fuel || "",
  // });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div>
      <Hero />

      <div className="px-20 mt-10">
        <div>
          <h3 className="text-5xl font-medium">Car Catalogue</h3>
          <p className="text-xl text-gray-800 mt-4">
            Explore the cars you might like
          </p>
        </div>

        <div className="mt-10 flex flex-col">
          <div>
            <SearchBar />
          </div>

          <div>
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-14">
              {allCars.map((car) => (
                <CarCard key={car.make + car.model + car.city_mpg} car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div>Oops, no results</div>
        )}
      </div>
    </div>
  );
};

export default Home;
