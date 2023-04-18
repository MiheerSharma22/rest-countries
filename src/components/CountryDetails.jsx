import React from 'react'
import {useSelector } from 'react-redux';
import {useNavigate, useLocation , Link} from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
import { data } from '../data';


const CountryDetails = () => {
    const dark = useSelector((state) => state.mode.dark);
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let country = searchParams.get('country');

    country = data.filter((nation) => (nation.name === country || nation.alpha3Code === country));
    country = country[0];

  return (
    <div className={`${dark ? 'bg-darkBg' : 'bg-lightBg'} w-full transition-all duration-100 py-[2.5rem]`}>
        {/* back button */}
        <div className='w-[90%] mx-auto'>
            <button onClick={()=> navigate("/")} className={`flex rounded-sm items-center gap-2 px-[1.3rem] py-[0.4rem] shadow-md  ${dark ? 'bg-darkElements' : 'bg-darkModeTextLightElements'} text-sm`}><BsArrowLeft/>Back</button>
        </div>

        {/* country details container */}
        <div className='w-[90%] h-fit  mx-auto flex justify-between mt-[3rem] items-center'>
        {/* left */}
            <div className='w-[40%]'>
                <img src={country.flags.svg} className='h-[400px] w-full'/>
            </div>

            {/* right */}
            <div className='w-[50%] flex flex-col pb-[0.5rem]'>
                <h2 className='text-2xl font-bold mb-[2rem]'>{country.name}</h2>

                <div className='w-[80%] flex justify-between text-sm mb-[2rem]'>
                    {/* left-text-sub-container */}
                    <div className='w-fit flex flex-col gap-4'>
                        <p className='font-bold'>Native Name: <span className='font-normal'>{country.nativeName}</span></p>
                        <p className='font-bold'>Population: <span className='font-normal'>{country.population}</span></p>
                        <p className='font-bold'>Region: <span className='font-normal'>{country.region}</span></p>
                        <p className='font-bold'>Sub-Region: <span className='font-normal'>{country.subregion}</span></p>
                        <p className='font-bold'>Capital: <span className='font-normal'>{country.capital}</span></p>
                    </div>

                    {/* right-text-sub-container */}
                    <div className='w-fit flex flex-col gap-4'>
                        <p className='font-bold'>Top Level Domain: <span className='font-normal'>{country.topLevelDomain}</span></p>
                        <p className='font-bold'>Currencies: <span className='font-normal'>{country.currencies[0].name}</span></p>
                        <p className='font-bold'>Language: <span className='font-normal'>{country.languages[0].name}</span></p>
                    </div>
                </div>

                {/* border countries */}
                <div className='w-[40%]'>
                    {
                        country.borders && 
                        <div>
                            <p className='font-bold text-xl mb-[0.6rem]'>Border Countries:</p> 

                            <div className='flex flex-wrap gap-y-4 gap-x-2 '>
                                {
                                    country.borders.map((border) => <Link to={`/country-details?country=${border}`} ><span className={`${dark? 'bg-darkElements' : 'bg-darkModeTextLightElements'} px-[1rem] py-[0.3rem] rounded-sm shadow-md`}>{border}</span></Link>)
                                }
                            </div>
                           
                        </div>
                    }
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default CountryDetails