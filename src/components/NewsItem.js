import React, { Component } from 'react'


export default class NewsItem extends Component {
    render() {
        let { title, description, imageURL, newsURL, imageALT, theme, author, date, source } = this.props;
        const authorColor = () => {
            if (theme === 'light') {
                return '#898989'
            }
            else if (theme === 'dark') {
                return '#a3a3a3'
            }
        }
        return (
            <div className={`card bg-${theme}`} style={{ width: '20rem', margin: 'auto' }}>
                <img src={imageURL} className="card-img-top" alt={imageALT} />
                <div className="card-body">
                    <div style={{display:'flex', justifyContent:'flex-end'}}>
                        <span className={`badge bg-danger position-absolute top-0 p-2`} style={{right:'0px'}}>{!source ? 'TadkaNews.com' : source}</span>
                    </div>
                    <h5 className={`card-title text-${theme === 'light' ? 'dark' : 'light'}`}>{title}</h5>
                    <p className={`card-text text-${theme === 'light' ? 'dark' : 'light'}`}>{description}</p>
                    <p className="card-text"><small style={{ color: authorColor() }}>By {!author ? 'TadkaNews' : author} on {date}</small></p>
                    <a href={newsURL} className={`btn btn-sm btn-outline-${theme === 'light' ? 'dark' : 'light'}`} rel='noreferrer' target='_blank'>Read More</a>
                </div>
            </div>
        )
    }
}