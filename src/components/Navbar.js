import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = (props) => {
    let invertFilterValue = null;
    let navTogglerBorder = null;
    const location = useLocation();
    if (props.theme === 'dark') {
        invertFilterValue = 'invert(1)';
        navTogglerBorder = '0.5px solid white'
    }
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.theme} p-3 sticky-top shadow-lg`}>
            <div className="container-fluid">
                <Link className={`navbar-brand text-${props.theme === 'light' ? 'dark' : 'light'}`} style={{ fontWeight: 'bold' }} to="/">TadkaNews</Link>
                <button className={`navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation" style={{ border: navTogglerBorder }}>
                    <span className="navbar-toggler-icon" style={{ filter: invertFilterValue }}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'} ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'} ${location.pathname === '/business' ? 'active' : ''}`} to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'} ${location.pathname === '/entertainment' ? 'active' : ''}`} to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'} ${location.pathname === '/health' ? 'active' : ''}`} to="/health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'} ${location.pathname === '/science' ? 'active' : ''}`} to="/science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'} ${location.pathname === '/sports' ? 'active' : ''}`} to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'} ${location.pathname === '/technology' ? 'active' : ''}`} to="/technology">Technology</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link text-${props.theme === 'light' ? 'dark' : 'light'} ${location.pathname === '/dev-details' ? 'active' : ''}`} to="/dev-details">Developer Details</Link>
                        </li>
                    </ul>
                    <div className="dropdown me-4">
                        <a className={`btn btn-secondary dropdown-toggle bg-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Select Country
                        </a>
                        <ul className={`dropdown-menu bg-${props.theme}`}>
                            <li>
                                <div className={`dropdown-item dropdown-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`} onClick={() => props.onCountryChange('in', 'India')}>India</div>
                            </li>
                            <li>
                                <div className={`dropdown-item dropdown-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`} onClick={() => props.onCountryChange('au', 'Australia')}>Australia</div>
                            </li>
                            <li>
                                <div className={`dropdown-item dropdown-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`} onClick={() => props.onCountryChange('fr', 'France')}>France</div>
                            </li>
                            <li>
                                <div className={`dropdown-item dropdown-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`} onClick={() => props.onCountryChange('jp', 'Japan')}>Japan</div>
                            </li>
                            <li>
                                <div className={`dropdown-item dropdown-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`} onClick={() => props.onCountryChange('sg', 'Singapore')}>Singapore</div>
                            </li>
                            <li>
                                <div className={`dropdown-item dropdown-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`} onClick={() => props.onCountryChange('gb', 'United Kingdom')}>United Kingdom</div>
                            </li>
                            <li>
                                <div className={`dropdown-item dropdown-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`} onClick={() => props.onCountryChange('us', 'USA')}>USA</div>
                            </li>
                        </ul>
                    </div>
                    <span className={`btn btn-outline-${props.theme === 'light' ? 'dark' : 'light'} material-symbols-outlined`} onClick={props.toggleTheme} style={{ position: 'relative', top: '0px' }}>
                        {props.theme === 'light' ? 'dark' : 'light'}_mode
                    </span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
