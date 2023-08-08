import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
function Form() {
    const [country,setCountry]=useState("")
  return (
    <div className="my-8 px-3.5 h-auto lg:flex-1">
      <form className=" rounded-md h-auto flex items-center shadow-md ">
        <div className="flex items-center justify-between w-full px-8 py-5">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="icon text-lg me-4 cursor-pointer"
          />
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Search for a country..."
            className="flex-1 ms-2 text-base font-medium"
          />
        </div>
      </form>
    </div>
  );
}

export default Form