import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [quote, setQuote] = useState({ content: "", author: "" });
  const [quote1, setQuote1] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote({ content: data.content, author: data.author });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleClick = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote1(data.content);
        setAuthor(data.author);
      });
  };

  return (
    <div className="text-sm md:text-lg lg:text-2xl">
      <Header />
      <div className="lg:flex justify-center">
        <div>
          <div>
            <h3 className="m-6 flex justify-center font-bold">Trending Quotes</h3>
          </div>
          <div className="border mx-8 md:mx-16  lg:mx-16 lg:h-96">
            <div className="m-4 ">
              <div className="flex justify-center">
                <textarea
                  placeholder="Quotes Loading!"
                  className="h-44 w-44 flex justify-center md:w-96 lg:h-80"
                  value={quote.content ? quote.content : ""}
                  onChange={(event) => {
                    setQuote({ ...quote, content: event.target.value });
                  }}
                />


              </div>
              <div className="mt-2 flex justify-center text-gray-600 font-serif">
                {quote.author}
              </div>
            </div>
          </div>
        </div>
        <div className=" my-12 mx-8 p-2 border md:mx-16 md:px-16 lg:mx-16 lg:w-96 lg:mt-4 lg:px-0">
          {" "}
          <div className="mx-4 my-4">
            {" "}
            <div className="flex justify-center">
              {" "}
              <button
                onClick={handleClick}
                className="my-2 h-10 w-56 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                {" "}
                New Quote
              </button>{" "}
            </div>{" "}
            {quote1 && (
              <>
                {" "}
                <p>{quote1}</p>{" "}
              </>
            )}{" "}
          </div>{" "}
          <div className="mt-2 flex justify-center text-gray-600 font-serif">
            {" "}
            <p className="text-gray-600 font-serif">{author}</p>
          </div>{" "}
        </div>{" "}
      </div>
      <div className="mt-2">
        <Footer />
      </div>
    </div>
  );
}
export default App;
