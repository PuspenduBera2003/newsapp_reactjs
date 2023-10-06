import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        let invertFilterValue = null;
        let navTogglerBorder = null;
        if(this.props.theme==='dark') {
            invertFilterValue = 'invert(1)';
            navTogglerBorder = '0.5px solid white'
        }
        return (
            <nav className={`navbar navbar-expand-lg bg-${this.props.theme} p-3 sticky-top shadow-lg`}>
                <div className="container-fluid">
                    <Link className={`navbar-brand text-${this.props.theme==='light'?'dark':'light'}`} style={{fontWeight:'bold'}} to="/">TadkaNews</Link>
                    <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation" style={{border: navTogglerBorder}}>
                        <span className="navbar-toggler-icon" style={{filter: invertFilterValue}}></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                            <li className="nav-item">
                                <Link className={`nav-link text-${this.props.theme==='light'?'dark':'light'}`} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${this.props.theme==='light'?'dark':'light'}`} to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${this.props.theme==='light'?'dark':'light'}`} to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${this.props.theme==='light'?'dark':'light'}`} to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${this.props.theme==='light'?'dark':'light'}`} to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${this.props.theme==='light'?'dark':'light'}`} to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link text-${this.props.theme==='light'?'dark':'light'}`} to="/technology">Technology</Link>
                            </li>
                        </ul>
                        <span className={`btn btn-outline-${this.props.theme === 'light' ? 'dark' : 'light'} material-symbols-outlined`} onClick={this.props.toggleTheme} style={{ position: 'relative', top: '0px' }}>
                            {this.props.theme === 'light' ? 'dark' : 'light'}_mode
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
