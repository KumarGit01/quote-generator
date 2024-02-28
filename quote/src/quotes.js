import React, { useState } from "react";
import axios from "axios";

function Fetchdata() {
  const [quotes, setQuotes] = useState([]);
  let category = 'success';

  const getQuotes = () => {
    axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`)
      .then(res => {
        setQuotes(res.data); // Update the state with fetched data
      })
      .catch(error => {
        console.error('FETCH FAILED:', error);
      });
  }

  return (
    <div>
      <button onClick={getQuotes}>FETCH</button>
      {quotes.map((quote, index) => (
        <h1 key={index}>{quote.quote}</h1>
      ))}
    </div>
  );
}

export default Fetchdata;
