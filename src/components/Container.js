import React, { useEffect, useState } from "react";
import Form from "./Form";
import Filter from "./Filter";
import Countries from "./Countries";
import Country from "./Country";
import axios from "axios";

function Container() {
  const [data, setData] = useState([]);

  const [selectedCountry, setCountry] = useState(null);
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
  // data.map((el) => {
  //     console.log(el)
  // })
  const ShowCountries = (select) => {};
  console.log(selectedCountry);
  return (
    <div className="container sm:mx-auto mx-auto">
      <div className="lg:flex items-center justify-between">
        <Form />
        <Filter showCountries={ShowCountries} />
      </div>

      {selectedCountry ? (
        <div>
          <Country c={selectedCountry} />
        </div>
      ) : (
        <div className="container-countries w-auto my-7 items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-12 md:gap-x-7 lg:gap-x-7 lg:gap-y-16">
          {data.map((country, index) => {
            return (
              <Countries
                country={country}
                key={index}
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
