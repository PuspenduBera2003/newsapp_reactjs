import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      theme : 'light'
    }
  }
  toggleTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({theme: 'dark'});
      document.body.style.backgroundColor = '#0a0819';
      document.body.style.color = '#fff';
    }
    else {
      this.setState({theme: 'light'});
      document.body.style.backgroundColor = '#fff';
      document.body.style.color = 'black';
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar theme={this.state.theme} toggleTheme={this.toggleTheme} />
          <Routes>
            <Route
              exact path="/"
              element={<News category="general" theme={this.state.theme}/>}
            />
            <Route
              exact path="/business"
              element={<News category="business" headlineTitle="Top Business Headlines" theme={this.state.theme}/>}
            />
            <Route
              exact path="/entertainment"
              element={<News category="entertainment" headlineTitle="Top Entertainment Headlines" theme={this.state.theme}/>}
            />
            <Route
              exact path="/health"
              element={<News category="health" headlineTitle="Top Health Headlines" theme={this.state.theme}/>}
            />
            <Route
              exact path="/science"
              element={<News category="science" headlineTitle="Top Science Headlines" theme={this.state.theme}/>}
            />
            <Route
              exact path="/sports"
              element={<News category="sports" headlineTitle="Top Sports Headlines" theme={this.state.theme}/>}
            />
            <Route
              exact path="/technology"
              element={<News category="technology" headlineTitle="Top Technology Headlines" theme={this.state.theme}/>}
            />
          </Routes>
        </div>
      </Router>
    )
  }
}
