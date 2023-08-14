import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Container from "./components/Container";
function App() {
  const [data, setData] = useState([]);
  const [isLoading,setLoading]=useState(false)
  //using useEffect to make some side effect ;
  useEffect(() => {
    //fetching the data from the api :
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
      const newData = await response.json();
      setData(newData);
      setLoading(true)
      } catch (error) {
        console.log(error)
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className="App w-full h-full ">
      <Header />
      {
        isLoading?<Container data={data} />:<h1>loading...</h1>
      }
    </div>
  );
}

export default App;
