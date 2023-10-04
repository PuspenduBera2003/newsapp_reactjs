import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {title, description, imageURL, newsURL, imageALT} = this.props;
        return (
            <div className="card" style={{width: '20rem', margin:'auto'}}>
                <img src={imageURL} className="card-img-top" alt={imageALT}/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a href={newsURL} className="btn btn-sm btn-primary" rel='noreferrer' target='_blank'>Read More</a>
                    </div>
            </div>
        )
    }
}
