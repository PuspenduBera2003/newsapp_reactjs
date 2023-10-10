import React, { useEffect, useState } from 'react'
import DevImg from './DevImage.jpg'
import Spinner from './Spinner';

function Devdetails(props) {
    const DevContact = process.env.REACT_APP_DEV_CONTACT;
    const DevWhatsAppURL = `https://wa.me/${DevContact}`;
    const DevGithubURL = "https://github.com/puspendubera2003";
    const DevLinkedInURL = "https://www.linkedin.com/in/puspendu-bera-29b78620a/";
    const [loading, setLoading] = useState(true);
    const loadingFalse = () => {
        setLoading(false);
    }
    setTimeout(loadingFalse, 500);
    function changeContactColor() {
        if (props.theme === 'light') {
            return 'black';
        }
        else {
            return 'white';
        }
    }
    useEffect(() => {
        document.title = "Developer Details - TadkaNews";
    }, [])
    function changeFooterColor() {
        if (props.theme === 'light') {
            return null;
        }
        else {
            return '#2c2c2c';
        }
    }
    return (
        <>
            {loading ? <Spinner/> : <div className={`card m-auto mt-5 mb-3 bg-${props.theme}`} style={{ width: '18rem' }}>
                <img src={DevImg} className="card-img-top" alt="Developer" />
                <ul className="list-group list-group-flush">
                    <li className={`list-group-item bg-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                        <h5 className="card-title text-center">{props.developerName}</h5>
                    </li>
                    <li className={`list-group-item bg-${props.theme} text-${props.theme === 'light' ? 'dark' : 'light'}`}>
                        <p className="card-text text-center">
                            Developer of this app is {props.developerName}, currently pursuing B.Tech degree from St. Thomas College of Engineering & Technology which is affiliated by Maulana Abul Kalam Azad University of Technology.
                        </p>
                    </li>
                </ul>
                <div className="card-footer d-flex justify-content-around" style={{ backgroundColor: changeFooterColor() }}>
                    <a href={DevWhatsAppURL} rel='noreferrer' target="_blank" style={{ color: changeContactColor() }}><i className="bi bi-whatsapp"></i></a>
                    <a href={DevGithubURL} rel='noreferrer' target="_blank" style={{ color: changeContactColor() }}><i className="bi bi-github"></i></a>
                    <a href={DevLinkedInURL} rel='noreferrer' target='_blank' style={{ color: changeContactColor() }}><i className="bi bi-linkedin"></i></a>
                </div>
            </div>
            }
        </>
    )
}

export default Devdetails
