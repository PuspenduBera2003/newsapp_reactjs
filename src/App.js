import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Devdetails from './components/Devdetails';

const App = () => {
  const[theme, setTheme] = useState('light');
  const[progress, setProgress] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState('in');
  const [selectedCountryFull, setSelectedCountryFull] = useState('India');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = '#0a0819';
      document.body.style.color = '#fff';
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
    }
  }

  const progressNow = (progress) => {
    setProgress(progress);
  }

  const handleCountryChange = (newCountry, newCountryFull) => {
    setSelectedCountry(newCountry);
    setSelectedCountryFull(newCountryFull);
  };

  const apiKey = process.env.REACT_APP_NEWS_API2;
  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3.5}
        />
        <Navbar theme={theme} toggleTheme={toggleTheme} onCountryChange={handleCountryChange} />
        <Routes>
          <Route
            exact path="/"
            element={<News countryShort={selectedCountry} countryFull={selectedCountryFull} progressNow={progressNow} apiKey={apiKey} category="general" theme={theme} />}
          />
          <Route
            exact path="/business"
            element={<News countryShort={selectedCountry} countryFull={selectedCountryFull} progressNow={progressNow} apiKey={apiKey} category="business" theme={theme} />}
          />
          <Route
            exact path="/entertainment"
            element={<News countryShort={selectedCountry} countryFull={selectedCountryFull} progressNow={progressNow} apiKey={apiKey} category="entertainment" theme={theme} />}
          />
          <Route
            exact path="/health"
            element={<News countryShort={selectedCountry} countryFull={selectedCountryFull} progressNow={progressNow} apiKey={apiKey} category="health" theme={theme} />}
          />
          <Route
            exact path="/science"
            element={<News countryShort={selectedCountry} countryFull={selectedCountryFull} progressNow={progressNow} apiKey={apiKey} category="science" theme={theme} />}
          />
          <Route
            exact path="/sports"
            element={<News countryShort={selectedCountry} countryFull={selectedCountryFull} progressNow={progressNow} apiKey={apiKey} category="sports" theme={theme} />}
          />
          <Route
            exact path="/technology"
            element={<News countryShort={selectedCountry} countryFull={selectedCountryFull} progressNow={progressNow} apiKey={apiKey} category="technology" theme={theme} />}
          />
          <Route
            exact path="/dev-details"
            element={<Devdetails progressNow={progressNow} theme={theme} developerName="Puspendu Bera" />}
          />
        </Routes>
      </div>
    </Router>
  )
}


export default App