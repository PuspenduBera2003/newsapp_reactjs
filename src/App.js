import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: 'light'
    }
  }
  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' });
      document.body.style.backgroundColor = '#0a0819';
      document.body.style.color = '#fff';
    }
    else {
      this.setState({ theme: 'light' });
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
    }
  }

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress});
  }

  apiKey = process.env.REACT_APP_NEWS_API;

  render() {
    return (
      <Router>
        <div>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3.5}
          />
          <Navbar theme={this.state.theme} toggleTheme={this.toggleTheme} />
          <Routes>
            <Route
              exact path="/"
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey}  category="general" theme={this.state.theme} />}
            />
            <Route
              exact path="/business"
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey}  category="business" headlineTitle="Top Business Headlines" theme={this.state.theme} />}
            />
            <Route
              exact path="/entertainment"
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey}  category="entertainment" headlineTitle="Top Entertainment Headlines" theme={this.state.theme} />}
            />
            <Route
              exact path="/health"
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey}  category="health" headlineTitle="Top Health Headlines" theme={this.state.theme} />}
            />
            <Route
              exact path="/science"
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey}  category="science" headlineTitle="Top Science Headlines" theme={this.state.theme} />}
            />
            <Route
              exact path="/sports"
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey}  category="sports" headlineTitle="Top Sports Headlines" theme={this.state.theme} />}
            />
            <Route
              exact path="/technology"
              element={<News setProgress = {this.setProgress} apiKey={this.apiKey}  category="technology" headlineTitle="Top Technology Headlines" theme={this.state.theme} />}
            />
          </Routes>
        </div>
      </Router>
    )
  }
}
