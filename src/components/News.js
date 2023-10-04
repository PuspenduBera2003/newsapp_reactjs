import React, { Component } from 'react'
import NewsItem from './NewsItem'
export default class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            pageSize: 15
        }
    }

    async componentDidMount() {
        let urlToFetch = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9d9fc5f41fb0454599cc1c7afd6bf460&page=1&pageSize=${this.state.pageSize}`;
        let data = await fetch(urlToFetch);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
    }

    handlePrevious = async () => {
        let nextButton = document.getElementById('nextButton');
        let urlToFetch = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9d9fc5f41fb0454599cc1c7afd6bf460&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
        let data = await fetch(urlToFetch);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1
        })
        if (this.state.page <= Math.ceil(this.state.totalResults / this.state.pageSize)) {
            nextButton.disabled = false;
        }
    }

    handleNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {
            // next button disabled
        }
        else {
            let urlToFetch = `https://newsapi.org/v2/top-headlines?country=in&apiKey=9d9fc5f41fb0454599cc1c7afd6bf460&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
            let data = await fetch(urlToFetch);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h3 className='card-title text-center mb-4'>Top Headlines in India</h3>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col mb-3" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage ? element.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"} newsURL={element.url} imageALT={element.author} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevious}>
                        &laquo;  Previous
                    </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} className="btn btn-dark" onClick={this.handleNext} id='nextButton'>
                        Next &raquo;
                    </button>
                </div>
            </div>
        )
    }
}
