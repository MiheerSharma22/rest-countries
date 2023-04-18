import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {toggleDarkMode} from '../redux/Slices/DarkModeSlice'
import { useEffect } from 'react'

import moon from '../assets/moon-icon.svg'
import sun from '../assets/sun-icon.svg'

const Header = () => {
    const dark = useSelector((state) => state.mode.dark);
    const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(toggleDarkMode())
    // }, []);

  return (
    <header className={`h-[5rem] w-full shadow-md shadow-black ${dark ? 'bg-darkElements' : 'bg-white '}`}>
        <div className='w-[90%] h-full flex justify-between items-center mx-auto'>
        <h1 className='w-fit text-2xl font-bold'>Where in the world?</h1>

        <button onClick={() => dispatch(toggleDarkMode()) }>
            {
                dark ? <span className='text-lg font-semibold flex gap-2 justify-center items-center '><img src={sun} className='w-[1.2rem] h-[1.2rem]'/>Light Mode</span>
                 : <span className='text-lg font-semibold flex gap-2 justify-center items-center'> <img src={moon} className='w-[1.2rem] h-[1.2rem]'/>Dark Mode</span>
            }
        </button>
        </div>
    </header>
  )
}

export default Header