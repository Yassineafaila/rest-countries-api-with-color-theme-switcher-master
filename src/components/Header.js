import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <div className="header py-6 px-3.5 flex items-center justify-between lg:px-7 h-24 shadow-md">
      <h2 className="title font-extrabold md:text-2xl lg:text-2xl xl:text-2xl">Where in the world?</h2>
      <div>
        <FontAwesomeIcon icon={faMoon} className='icon cursor-pointer me-2' />
        <span className="icon-title font-semibold ms-2 text-sm md:text-md lg:text-md">Dark Mode</span>
      </div>
    </div>
  );
}

export default Header