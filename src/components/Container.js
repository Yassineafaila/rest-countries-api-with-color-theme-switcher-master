import React, { useEffect, useState } from "react";
import urid from "urid";
import Form from "./Form";
import Filter from "./Filter";
import Countries from "./Countries";
import Country from "./Country";
import axios from "axios";
import Button from "./Button";
import { counter } from "@fortawesome/fontawesome-svg-core";

function Container() {
  const [data, setData] = useState([]);
  const [selectedCountry, setCountry] = useState(null);
  const [selectedContinents, setContinents] = useState(null);
   
  //this line it generate an id
  const id = urid(4, "num");

  //using useEffect to make some side effect ;
  useEffect(() => {
    //fetching the data from the api :
    const fetchData = async () => {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const newData = await response.json();
      setData(newData);
    };
    fetchData();
  }, []);
  
data.map((country) => {
  console.log(country);
});
  //when the user choose a continents this function will fire :D
  const ShowCountries = (select) => {
    setContinents(data.filter((country) => {
      return country.continents[0]===select.toString()
    }));
    
  };
  return (
    <div className="container sm:mx-auto mx-auto h-full">
      <div className="lg:flex items-center justify-between">
        <Form />
        <Filter showCountries={ShowCountries} />
      </div>

      {selectedContinents ? (
        <div className="container-countries w-auto my-7 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-12 md:gap-x-7 lg:gap-x-7 lg:gap-y-16">
          {selectedContinents.map((country, index) => {
            return (
              <Countries
                country={country}
                key={urid("3","num")}
                setCountry={setCountry}
              />
            );
          })}
        </div>
      ) : selectedCountry ? (
        <div className="container-country h-full">
          <Button c={selectedCountry} setCountry={setCountry} />
          <Country c={selectedCountry} key={id} />
        </div>
      ) : (
        <div className="container-countries w-auto my-7 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-12 md:gap-x-7 lg:gap-x-7 lg:gap-y-16">
          {data.map((country, index) => {
            return (
              <Countries
                country={country}
                key={urid("6","num")}
                setCountry={setCountry}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Container;
