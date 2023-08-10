import React from "react";
import { NumericFormat } from "react-number-format";


//using the use React.memo prevent the Country Component from re-render
const Country = React.memo(({ country }) => {
  return (
    <div className="country rounded-lg pb-4 w-72 overflow-hidden mx-auto h-96">
      <img
        src={country.flags.png}
        alt="flag"
        className="cursor-pointer h-40 w-full"
        // onClick={() => setCountry(country)}
      />
      <div className="px-8 py-9">
        <h3 className="font-extrabold text-lg country-name mb-3.5">
          {country.name.common}
        </h3>
        <ul className="flex flex-col gap-y-1">
          <li className="font-semibold flex gap-1">
            Population :
            <span className="">
              <NumericFormat
                className="w-32"
                value={country.population}
                thousandSeparator=","
              />
            </span>
          </li>
          <li className="font-semibold">
            Region : <span className="">{country.region}</span>
          </li>
          <li className="font-semibold">
            Capital : <span className="">{country.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Country;
