import { useHelper } from "../CustomHooks/useHelper";
import { AiOutlineSearch } from "react-icons/ai";
import { data } from "../data.js";
import CountryCard from "./CountryCard";

const CountriesContainer = () => {
  const {
    dark,
    inputValue,
    selectValue,
    inputChangeHandler,
    handleDropDownChange,
  } = useHelper();

  return (
    <div
      className={`${
        dark ? "bg-darkBg" : "bg-lightBg"
      } w-full h-fit py-[2.5rem]`}
    >
      {/* search and region-filter container*/}
      <div className="w-[90%] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-0">
        {/* search */}
        <div
          className={`${
            dark ? "bg-darkElements" : "bg-darkModeTextLightElements"
          } w-full md:w-[40%] pl-[2rem]  rounded-md shadow-md flex items-center gap-4`}
        >
          <AiOutlineSearch
            className={`${
              dark ? "text-darkModeTextLightElements" : "text-lightModeText"
            } `}
            fontSize={"1.5rem"}
          />

          <input
            type="text"
            placeholder="Search for a country..."
            className="input px-[0.5rem] pr-[1.5rem] py-[0.75rem] bg-transparent w-full focus:outline-none"
            name="inputValue"
            onChange={inputChangeHandler}
            autoComplete="off"
            value={inputValue}
          />
        </div>

        {/* dropdown */}
        <select
          className={`drop-down    ${
            dark ? "bg-darkElements" : "bg-darkModeTextLightElements"
          } w-fit  px-[2rem] py-[1rem] rounded-md shadow-md flex items-center focus: outline-none mb-[10px]  `}
          name="selectValue"
          onChange={handleDropDownChange}
          value={selectValue}
        >
          <option value="">Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>

      {/*  cards container */}
      <div className="cards-container w-[90%] grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-10  mx-auto mt-[2.5rem]">
        {
          // checking if the input field is not empty then filter countries on basis of value entered by user
          inputValue !== ""
            ? data
                .filter((data) =>
                  data.name.toLowerCase().includes(inputValue.toLowerCase())
                )
                .map((data) => <CountryCard data={data} key={data.name} />)
            : // if input field is empty then check if the dropdown is set or not , if  some value is selected then filter on basis of that region
            selectValue !== ""
            ? data
                .filter((data) => data.region.toLowerCase() === selectValue)
                .map((data) => <CountryCard data={data} key={data.name} />)
            : // if dropdown is also not selected then just render every country on the page
              data.map((data) => <CountryCard data={data} key={data.name} />)
        }
      </div>
    </div>
  );
};

export default CountriesContainer;
