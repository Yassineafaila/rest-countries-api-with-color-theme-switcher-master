import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
function App() {
  const [data, setData] = useState([]);
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
  
  return (
    <div className="App w-full h-full ">
      <Header />
      <Container data={data} />
    </div>
  );
}

export default App;
