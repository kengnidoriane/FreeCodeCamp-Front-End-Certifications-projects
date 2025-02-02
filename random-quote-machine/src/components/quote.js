import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteBox.css';

const QuoteBox = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const tweetQuote = () => {
    const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    <div id="quote-box" className="quote-box">
      <div id="text" className="quote-text">{quote}</div>
      <div id="author" className="quote-author">- {author}</div>
      <button id="new-quote" className="new-quote-btn" onClick={fetchQuote}>New Quote</button>
      <a id="tweet-quote" className="tweet-quote-btn" href="titter.com" onClick={tweetQuote} target="_blank">Tweet Quote</a>
    </div>
  );
};

export default QuoteBox;