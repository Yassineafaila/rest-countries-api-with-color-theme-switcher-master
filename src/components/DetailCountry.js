import React from "react";
import { NumericFormat } from "react-number-format";

function DetailCountry({ country: selectedCountry }) {
  return (
    <div className="country-container flex-col flex items-center justify-start  sm:justify-start md:flex-col lg:justify-between lg:flex-row flex-wrap px-4 xl:gap-11">
      <img
        src={selectedCountry.flags.png}
        alt="flag"
        className="cursor-pointer md:w-96  "
      />
      <div className=" country-detail px-4 sm:px-8 md:px-8 lg:px-8  py-9 flex-1 sm:ms-3 md:ms-10 xl:px-3 ">
        <h3 className="font-extrabold text-lg country-name mb-3.5 lg:text-2xl ">
          {selectedCountry.name.common}
        </h3>
        <div className="flex items-start my-8  md:justify-between xl:justify-between flex-wrap   ">
          <ul className="detail flex flex-col gap-y-1">
            <li className="font-semibold mt-1 flex items-center gap-1">
              Native Name :
              <span className="xl:text-md">{selectedCountry.name.common}</span>
            </li>
            <li className="font-semibold flex  mt-1 gap-1 ">
              Population :
              <span className="xl:text-md">
                <NumericFormat
                  className="w-32 "
                  value={selectedCountry.population}
                  thousandSeparator=","
                />
              </span>
            </li>
            <li className="font-semibold mt-1 gap-1">
              Region :{" "}
              <span className="xl:text-md">{selectedCountry.region}</span>
            </li>
            <li className="font-semibold mt-1 gap-1">
              Sub Region :
              <span className="xl:text-md">{selectedCountry.subregion}</span>
            </li>
            <li className="font-semibold mt-1 gap-1">
              Capital :{" "}
              <span className="xl:text-md">{selectedCountry.capital}</span>
            </li>
          </ul>
          <ul className="detail flex flex-col gap-y-1 my-3 md:my-0 md:mx-4 xl:m-0">
            <li className="font-semibold mt-1 flex gap-1">
              Top Level Domain :
              <span className="xl:text-md">{selectedCountry.tld[0]}</span>
            </li>
            <li className="font-semibold mt-1 flex gap-1">
              Currencies :
              {Object.keys(selectedCountry.currencies).map((keys) => {
                return (
                  <span className="xl:text-md">
                    {selectedCountry.currencies[keys].name}
                  </span>
                );
              })}
            </li>
            <li className="font-semibold mt-1 flex gap-1">
              Languages :
              <span>
                {Object.values(selectedCountry.languages).map((lang) => {
                  return <span className="lang xl:text-md me-1">{lang}</span>;
                })}
              </span>
            </li>
          </ul>
        </div>
        <div className="border-countries items-center flex flex-wrap gap-2  xl:mt-12">
          <p className="font-bold block  ">Border Countries :</p>
          {selectedCountry.hasOwnProperty("borders") ? (
            <div className="flex flex-wrap gap-4 mt-3">
              {selectedCountry.borders.map((item,index) => {
                return (
                  <button className="bg-white shadow-md py-2  px-7 lg:px-4 font-light rounded-md 2xl:w-24 ">
                    {item}
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default DetailCountry;
