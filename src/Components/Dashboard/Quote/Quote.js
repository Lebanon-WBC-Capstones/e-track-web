import { useEffect, useState } from 'react';
function Quote() {
  const [quote, setQuote] = useState(undefined);

  async function fetchQuote() {
    fetch('http://quotes.rest/qod.json')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.contents.quotes[0]);
      });
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-3 min-w-min text-center h-full">
      <h1 className="font-medium text-primary text-base">Quote of the day</h1>
      {quote ? (
        <p className="text-Grey pt-2">{quote.quote}</p>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
export default Quote;
