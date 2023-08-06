import React from "react";
import { useHelper } from "../CustomHooks/useHelper";
import { Link } from "react-router-dom";

const CountryCard = ({ data }) => {
  const { dark } = useHelper();

  return (
    <Link to={`/country-details/${data.name}`}>
      <div
        className={`${
          dark ? "bg-darkElements" : "bg-darkModeTextLightElements"
        } rounded-md h-full flex flex-col  pb-[1.5rem] shadow-lg`}
      >
        <img
          src={data.flags.svg}
          className="mb-[1rem] rounded-t-md  w-full object-cover aspect-video"
          alt="flag"
        />

        {/* description */}
        <div className="p-[1.5rem]">
          <h2 className="font-bold text-lg mb-[1rem]">{data.name}</h2>
          <div className="text-sm">
            <p className="mb-[0.5rem]">
              Population:{" "}
              <span className="opacity-60 ">
                {data.population.toLocaleString()}
              </span>
            </p>
            <p className="mb-[0.5rem]">
              Region: <span className="opacity-60 ">{data.region}</span>
            </p>
            <p>
              Capital: <span className="opacity-60 ">{data.capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
