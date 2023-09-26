import CarCard from "@/layers/components/CarCard";
import Hero from "@/layers/components/Hero";
import { allLocalCars } from "@/layers/constants/carsData";
import { HomeProps } from "@/layers/types";
import { fetchCars } from "@/layers/utils";
import { log } from "console";
import React from "react";

const Home = async ({ searchParams }: HomeProps) => {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   model: searchParams.model || "",
  //   limit: searchParams.limit || 10,
  //   fuel: searchParams.fuel || "",
  // });

  const isDataEmpty =
    !Array.isArray(allLocalCars) || allLocalCars.length < 1 || !allLocalCars;

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

        {!isDataEmpty ? (
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-14">
            {allLocalCars.map((car) => (
              <CarCard key={car.make + car.model + car.city_mpg} car={car} />
            ))}
          </div>
        ) : (
          <div>Oops, no results</div>
        )}
      </div>
    </div>
  );
};

export default Home;
