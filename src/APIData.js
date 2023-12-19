
import React, { useEffect, useState } from "react";

const APIData = () => {
  const [countryData, setCountryData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all/');
      const data = await res.json();

      if (res.ok && Array.isArray(data) && data.length > 0) {
        console.log(data[0]);
        setCountryData(data[0]);
      } else {
        console.error('Error fetching data:', data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="header-box">
      <h1>Country Data</h1>
      {countryData && (
        <div className="paragraph">
          <p>Common Name: {countryData.name.common}</p>
          <p>Official Name: {countryData.name.official}</p>
          <p>Region: {countryData.region}</p>
        </div>
      )}

    </div>
  );
};

export default APIData;


