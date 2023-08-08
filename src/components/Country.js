import React from 'react'
import { NumericFormat } from "react-number-format";

function Country({ c:selectedCountry }) {
  return (
    <div className="flex items-center justify-between flex-wrap ">
      <img
        src={selectedCountry.flags.png}
        alt="flag"
        className="cursor-pointer "
      />
      <div className="px-8 py-9 flex-1">
        <h3 className="font-extrabold text-lg country-name mb-3.5">
          {selectedCountry.name.common}
        </h3>
        <div className='flex items-start justify-between '>
          <ul className="flex flex-col gap-y-1">
            <li className="font-semibold flex gap-1">
              Native Name :
              <span>{selectedCountry.name.common}</span>
            </li>
            <li className="font-semibold flex gap-1">
              Population :
              <span className="">
                <NumericFormat
                  className="w-32"
                  value={selectedCountry.population}
                  thousandSeparator=","
                />
              </span>
            </li>
            <li className="font-semibold gap-1">
              Region : <span className="">{selectedCountry.region}</span>
            </li>
            <li className="font-semibold gap-1">
              Sub Region :<span>{selectedCountry.subregion}</span>
            </li>
            <li className="font-semibold gap-1">
              Capital : <span className="">{selectedCountry.capital}</span>
            </li>
          </ul>
          <ul className="flex flex-col gap-y-1">
            <li className="font-semibold flex gap-1">
              Top Level Domain :<span></span>
            </li>
            <li className="font-semibold flex gap-1">
              Currencies :<span>{selectedCountry.currencies.SAR.name}</span>
            </li>
            <li className="font-semibold flex gap-1">
              Languages :<span>{selectedCountry.languages.ara}</span>
            </li>
          </ul>
        </div>
        <div>
          <p>Border Countries :{selectedCountry.borders.map((item) => {
            
          }) }</p>
        </div>
      </div>
    </div>
  );
}

export default Country