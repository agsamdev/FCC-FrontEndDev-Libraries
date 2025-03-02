import React, { useEffect } from 'react';
import '../assets/styles/Card.css';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import quotes from '../assets/quotes.json';
import { useDispatch, useSelector } from 'react-redux';
import { setQuote, setColor } from './../redux/actions';

export function Card() {
  const dispatch = useDispatch();
  const { quote, color } = useSelector((state) => state);

  const getRandomQuote = () => {
    return quotes.quotes[Math.floor(Math.random() * quotes.quotes.length)];
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  useEffect(() => {
    dispatch(setQuote(getRandomQuote()));
    dispatch(setColor(getRandomColor()));
  }, [dispatch]);

  const handleNewQuote = () => {
    dispatch(setQuote(getRandomQuote()));
    dispatch(setColor(getRandomColor()));
  };

  return (
    <div className="message-box" style={{ color: color }}>
      <div className="quote-container">
        <FaQuoteLeft id="quotei" />
        <p id="quote">"{quote.quote}"</p>
      </div>
      <p id="author">- {quote.author}</p>
      <div className="button-container">
        <div className="social-media">
          <FaTwitter style={{ backgroundColor: color }} id="twitter" />
          <FaFacebookF style={{ backgroundColor: color }} id="facebook" />
        </div>
        <button style={{ backgroundColor: color }} id="button" onClick={handleNewQuote}>
          New Quote
        </button>
      </div>
    </div>
  );
}

export default Card;