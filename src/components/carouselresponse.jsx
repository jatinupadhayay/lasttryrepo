import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/scrape');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Scraped Data</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
