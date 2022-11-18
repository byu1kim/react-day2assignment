import { useState, useEffect } from "react";
import quotes from "../quotes.js";

const Quote = () => {
  const initQuote = {
    quote: "Click the button to get a quote",
    author: "",
  };

  const [data, setData] = useState([]);
  const [quote, setQuote] = useState(initQuote);
  const [button, setButton] = useState("Get Quote");

  const fetchData = async () => {
    try {
      const result = await fetch("http://127.0.0.1:3003/api/quotes");
      const dataJson = await result.json();
      setData(dataJson);
    } catch {
      console.log("Fetch failed");
      setData(quotes);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickHandle = () => {
    let i = 0;
    do {
      i = Math.floor(Math.random() * data.length);
    } while (quote == data[i].quote);
    setQuote(data[i]);
    setButton("Get another quote!");
  };

  return (
    <>
      <h2>{data == [] ? "Loading Quotes" : ""}</h2>
      <h3>"{quote.quote}"</h3>

      <p>{quote.author == "" ? "" : `- ${quote.author}`}</p>
      <button onClick={clickHandle}>{button}</button>
    </>
  );
};

export default Quote;
