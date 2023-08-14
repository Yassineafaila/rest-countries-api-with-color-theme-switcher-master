import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Filter from "./Filter";
import Country from "./Country";
import DetailCountry from './DetailCountry'
import Button from "./Button";

function Container({ data }) {
  const [inputValue, setInputValue] = useState("");
  const [selectedContinents, setContinents] = useState(null);
  const [vueDetails, setVueDetails] = useState({
    vue: false,
    country: null,
  });

  //this use for increase the app performance
  const debouncedValue = useDebounce(inputValue, 5000);
  const HandlerInput = (e) => {
    setInputValue(e.target.value);
  };

  //filter the data base on the input value :
  const filteredData = data.filter((country) => {
    const matchesInputValue =
      inputValue.toLowerCase() === "" ||
      country.name.common.toLowerCase().includes(inputValue.toLowerCase());

    const matchesSelectedContinents =
      selectedContinents === null ||
      country.continents.includes(selectedContinents);

    return matchesInputValue && matchesSelectedContinents;
  });

  // inputValue.toLowerCase()===""?country:country.name.common.toLowerCase().includes(inputValue.toLowerCase())
  //selectedContinents===""?country:country.continents.includes(selectedContinents)
  //render the Country components;
  const countryComponents = filteredData.map((country, index) => {
    return (
      <Country
        country={country}
        key={index}
        setVueDetails={setVueDetails}
        vueDetails={vueDetails}
      />
    );
  });
  return (
    <div className="container sm:mx-auto mx-auto h-full">
      <div className="lg:flex items-center justify-between">
        {/* ---start-form */}
        <div className="my-8 px-3.5 h-auto lg:flex-1">
          <form className=" rounded-md h-auto flex items-center shadow-md ">
            <div className="flex items-center justify-between w-full px-8 py-5">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="icon text-lg me-4 cursor-pointer"
              />
              <input
                type="text"
                value={inputValue}
                onChange={HandlerInput}
                placeholder="Search for a country..."
                className="flex-1 ms-2 text-base font-medium"
              />
            </div>
          </form>
        </div>
        {/* ---end-form */}
        <Filter setContinents={setContinents} />
      </div>
      {/* --display-all-countries-- */}
      {vueDetails.vue ? (
          <div className="flex flex-col h-full">
            <Button vueDetails={vueDetails} setVueDetails={setVueDetails}  />
            <DetailCountry country={vueDetails.country} key={crypto.randomUUID()} />
          </div>
        ) : (
          <div className="container-countries w-auto my-7 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-12 md:gap-x-7 lg:gap-x-7 lg:gap-y-16">
        {countryComponents}
      </div>
        )}
    </div>
  );
}

export default Container;
