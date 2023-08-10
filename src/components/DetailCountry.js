import React from "react";
import { NumericFormat } from "react-number-format";

function DetailCountry({ c: selectedCountry }) {
  return (
    <div className="country-container flex items-center justify-start  sm:justify-start md:flex-col lg:justify-between lg:flex-row flex-wrap px-4 xl:gap-11">
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
                  return <li className="lang xl:text-md me-1">{lang}</li>;
                })}
              </span>
            </li>
          </ul>
        </div>
        <div className="border-countries">
          {selectedCountry.hasOwnProperty("borders") ? (
            <p className="font-bold flex flex-wrap">
              Border Countries :
              {selectedCountry.borders.map((item) => {
                return (
                  <button className="bg-white shadow-md mx-3 px-3 font-light">
                    {item}
                  </button>
                );
              })}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default DetailCountry;
