
import React, { useEffect, useState } from "react";

const Data1 = () => {
  const [translationsData, setTranslationsData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://restcountries.com/v3.1/all/');
      const data = await res.json();

      if (res.ok && Array.isArray(data) && data.length > 0) {
        console.log(data[0]);
        setTranslationsData(Object.entries(data[0].translations));
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
    <div className="data-header">
      <h1>Translations Data</h1>
      <table>
        <thead>
          <tr>
            <th>Language</th>
            <th>Official Translation</th>
            <th>Common Translation</th>
            
          </tr>
        </thead>
        <tbody>
          {translationsData.map(([lang, translation], index) => (
            <tr key={index}>
              <td>{lang}</td>
              <td>{translation.official}</td>
              <td>{translation.common}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default Data1;
