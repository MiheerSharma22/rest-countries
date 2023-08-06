import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { data } from "../data";
import { setInputValue } from "../redux/Slices/FilterSlice";

const CountryDetails = () => {
  const dark = useSelector((state) => state.mode.dark);
  const countryName = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let country = countryName.name;

  // fetching current country details from all countries in data
  country = data.filter(
    (nation) => nation.name === country || nation.alpha3Code === country
  );
  country = country[0];

  const navigateToHome = () => {
    dispatch(setInputValue(""));
    navigate("/");
  };

  return (
    <div className={`${dark ? "bg-darkBg" : "bg-lightBg"} w-full  py-[2.5rem]`}>
      {/* back button */}
      <div className="w-[90%] mx-auto">
        <button
          onClick={() => navigateToHome()}
          className={`flex rounded-sm items-center gap-2 px-[1.3rem] py-[0.4rem] shadow-md  ${
            dark
              ? "bg-darkElements hover:bg-[#38444d]"
              : "bg-darkModeTextLightElements hover:bg-[#e4e0e0]"
          } text-sm transition-all duration-150`}
        >
          <BsArrowLeft />
          Back
        </button>
      </div>

      {/* country details container */}
      <div className="w-[90%] h-fit  mx-auto flex flex-col lg:flex-row justify-between mt-[3rem] ">
        {/* left */}
        <div className="w-full lg:w-[40%] mb-[1rem]">
          <img
            src={country.flags.svg}
            className=" h-full w-full shadow-lg object-cover"
            alt="flag"
          />
        </div>

        {/* right */}
        <div className="w-[80%] md:w-[50%] flex flex-col pb-[0.5rem] items-center lg:items-start mx-auto">
          <h2 className="text-3xl font-bold mb-[2rem] text-center ">
            {country.name}
          </h2>

          <div className="details-container w-full lg:w-[80%] flex flex-col lg:gap-20 lg:flex-row justify-between lg:text-md mb-[2rem]">
            {/* left-text-sub-container */}
            <div className="w-fit flex flex-col gap-4 mb-[1rem]">
              <p className="font-bold">
                Native Name:{" "}
                <span className="font-normal">{country.nativeName}</span>
              </p>
              <p className="font-bold">
                Population:{" "}
                <span className="font-normal">
                  {country.population.toLocaleString()}
                </span>
              </p>
              <p className="font-bold">
                Region: <span className="font-normal">{country.region}</span>
              </p>
              <p className="font-bold">
                Sub-Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </p>
              <p className="font-bold">
                Capital: <span className="font-normal">{country.capital}</span>
              </p>
            </div>

            {/* right-text-sub-container */}
            <div className="w-fit flex flex-col gap-4">
              <p className="font-bold">
                Top Level Domain:{" "}
                <span className="font-normal">{country.topLevelDomain}</span>
              </p>
              <p className="font-bold">
                Currencies:{" "}
                <span className="font-normal">
                  {country.currencies[0].name}
                </span>
              </p>
              <p className="font-bold">
                Language:{" "}
                <span className="font-normal">{country.languages[0].name}</span>
              </p>
            </div>
          </div>

          {/* border countries */}
          <div className="w-full mt-[2rem]">
            {country.borders && (
              <div>
                <p className="font-bold text-lg md:text-xl mb-[0.6rem]">
                  Border Countries:
                </p>

                <div className="flex flex-wrap gap-y-4 gap-x-2">
                  {country.borders.map((border) => (
                    <Link to={`/country-details/${border}`} key={border}>
                      <span
                        className={`${
                          dark
                            ? "bg-darkElements hover:bg-[#38444d]"
                            : "bg-darkModeTextLightElements hover:bg-[#e4e0e0]"
                        } px-[1rem] py-[0.5rem] flex justify-center items-center transition-all duration-150 rounded-sm shadow-md`}
                      >
                        {border}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
