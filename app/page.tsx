import CarCard from "@/layers/mainPage/components/cards/CarCard";
import CustomFilter from "@/layers/mainPage/components/CustomFilter";
import Hero from "@/layers/mainPage/components/shared/Hero";
import MainPage from "@/layers/mainPage/components/MainPage";
import SearchBar from "@/layers/mainPage/components/SearchBar";
import ShowMore from "@/layers/mainPage/components/ShowMore";
import { SwiperImage } from "@/layers/mainPage/components/Swiper";
import { allLocalCars as allCars } from "@/layers/mainPage/constants/carsData";
import {
  fuels,
  yearsOfProduction,
} from "@/layers/mainPage/constants/filterData";
import { HomeProps } from "@/layers/mainPage/types";
import { fetchCars } from "@/layers/mainPage/utils";

import React from "react";

const Home = async ({ searchParams }: HomeProps) => {
  // const allCars = await fetchCars({
  //   manufacturer: searchParams.manufacturer || "",
  //   year: searchParams.year || 2022,
  //   model: searchParams.model || "",
  //   limit: searchParams.limit || 100,
  //   fuel: searchParams.fuel || "",
  // });

  // const res = await fetch(process.env.URL + "/api/auth/register", {
  //   method: "POST",
  //   cache: "no-store",
  //   body: JSON.stringify({ email: 3333 }),
  // });

  // const data = await res.json();

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <div>
      <div className="">
        <SwiperImage />
      </div>

      <div className="px-20 mt-10" id="discover">
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

          <div className="mt-10">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <MainPage allCars={allCars} />
        ) : (
          <div>Oops, no results</div>
        )}
      </div>
    </div>
  );
};

export default Home;
