import {useHelper} from '../CustomHooks/useHelper'
import search from '../assets/search.png'
import {data} from '../data.js';
import CountryCard from './CountryCard';

const CountriesContainer = () => {
    const {dark, inputValue, selectValue,inputChangeHandler,handleDropDownChange} = useHelper();

  return (
    <div className={`${dark ? 'bg-darkBg' : 'bg-lightBg'} w-full h-fit transition-all duration-100 py-[2.5rem]`}>
        {/* search and region-filter container*/}
        <div className='w-[90%] mx-auto flex  items-center justify-between'>

            {/* search */}
            <div className={`${dark? 'bg-darkElements' : 'bg-darkModeTextLightElements'} w-[35%] px-[2rem] py-[1rem] rounded-md shadow-md flex items-center gap-4`}>
                <img src={search}  className='w-[1.2rem]  '/>

                <input type="text" placeholder='Search for a country...' className='bg-transparent w-full focus:outline-none transition-all duration-100' name="inputValue" onChange={inputChangeHandler}/>
            </div>

            {/* dropdown */}
            <select className={`drop-down    ${dark? 'bg-darkElements' : 'bg-darkModeTextLightElements'} w-[15%] px-[2rem] py-[1rem] rounded-md shadow-md flex items-center focus: outline-none mb-[10px] transition-all duration-100 self-center `} name="selectValue" onChange={handleDropDownChange}>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>

        {/*  cards container */}
        <div className='w-[90%] grid grid-cols-4 gap-20  mx-auto mt-[2.5rem]'>
            {
                // checking if the input field is not empty then filter countries on basis of value entered by user 
                inputValue != "" ? data.filter((data) => data.name.toLowerCase().includes(inputValue.toLowerCase()) ).map((data) =><CountryCard data={data} key={data.name}/>) 
                :
                // if input field is empty then check if the dropdown is set ot not , if  some value is selected then filter on basis of that region
                (selectValue!= ""? data.filter((data) => data.region.toLowerCase() == selectValue).map((data) =><CountryCard data={data} key={data.name}/>) 

                // if dropdown is also not selected then just render every country on the page
                : data.map((data) =><CountryCard data={data} key={data.name}/>))
            }
        </div>
    </div>
  )
}

export default CountriesContainer