import { useDispatch, useSelector } from 'react-redux';
import {setInputValue, setSelectValue} from '../redux/Slices/FilterSlice'

export const useHelper = () => {
    // fetching the state variables from slices
    const dark = useSelector((state) => state.mode.dark);
    const inputValue = useSelector((state) => state.filter.inputValue);
    const selectValue = useSelector((state) => state.filter.selectValue);
    const dispatch = useDispatch();

    // setting the inputValue state variable each time the user enters something in input field
    function inputChangeHandler(event){
        dispatch(setInputValue(event.target.value));
    }

    // setting the selectValue state variable each time the user selects something from dropdown
    function handleDropDownChange(event) {
        dispatch(setSelectValue(event.target.value));
    }

  return {dark, inputValue, selectValue,inputChangeHandler,handleDropDownChange};
  
}