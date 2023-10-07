import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const[theme, setTheme] = useState('light');
  const[progress, setProgress] = useState(0);
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

  const apiKey = process.env.REACT_APP_NEWS_API2;
  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          progress={progress}
          height={3.5}
        />
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route
            exact path="/"
            element={<News progressNow={progressNow} apiKey={apiKey} category="general" theme={theme} />}
          />
          <Route
            exact path="/business"
            element={<News progressNow={progressNow} apiKey={apiKey} category="business" headlineTitle="Top Business Headlines" theme={theme} />}
          />
          <Route
            exact path="/entertainment"
            element={<News progressNow={progressNow} apiKey={apiKey} category="entertainment" headlineTitle="Top Entertainment Headlines" theme={theme} />}
          />
          <Route
            exact path="/health"
            element={<News progressNow={progressNow} apiKey={apiKey} category="health" headlineTitle="Top Health Headlines" theme={theme} />}
          />
          <Route
            exact path="/science"
            element={<News progressNow={progressNow} apiKey={apiKey} category="science" headlineTitle="Top Science Headlines" theme={theme} />}
          />
          <Route
            exact path="/sports"
            element={<News progressNow={progressNow} apiKey={apiKey} category="sports" headlineTitle="Top Sports Headlines" theme={theme} />}
          />
          <Route
            exact path="/technology"
            element={<News progressNow={progressNow} apiKey={apiKey} category="technology" headlineTitle="Top Technology Headlines" theme={theme} />}
          />
        </Routes>
      </div>
    </Router>
  )
}


export default App