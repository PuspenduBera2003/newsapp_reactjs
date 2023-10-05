import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export default class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 15,
        category: 'general',
        headlineTitle: 'Top Headlines'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        headlineTitle: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.category !== prevProps.category ||
            this.props.country !== prevProps.country
        ) {
            this.fetchData();
        }
        document.title=(this.props.category).charAt(0).toUpperCase()+(this.props.category).slice(1)+" - TadkaNews"
    }

    async fetchData() {
        let urlToFetch = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d9fc5f41fb0454599cc1c7afd6bf460&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(urlToFetch);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false,
            page: 1,
        });
    }

    handlePrevious = async () => {
        let nextButton = document.getElementById('nextButton');
        let urlToFetch = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d9fc5f41fb0454599cc1c7afd6bf460&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(urlToFetch);
        let parsedData = await data.json();
        this.setState({
            articles: parsedData.articles,
            page: this.state.page - 1,
            loading: false
        })
        if (this.state.page <= Math.ceil(this.state.totalResults / this.props.pageSize)) {
            nextButton.disabled = false;
        }
    }

    handleNext = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
            // next button disabled
            let urlToFetch = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9d9fc5f41fb0454599cc1c7afd6bf460&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(urlToFetch);
            let parsedData = await data.json();
            this.setState({
                articles: parsedData.articles,
                page: this.state.page + 1,
                loading: false
            })
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h3 className='card-title text-center mb-4'>{this.props.headlineTitle}</h3>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col mb-4" key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageURL={element.urlToImage ? element.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"} newsURL={element.url} imageALT={element.author} theme={this.props.theme} author={element.author} date={element.publishedAt} source={element.source.name}/>
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className={`btn btn-outline-${this.props.theme==='light'?'dark':'light'}`} onClick={this.handlePrevious}>
                        &laquo;  Previous
                    </button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className={`btn btn-outline-${this.props.theme==='light'?'dark':'light'}`} onClick={this.handleNext} id='nextButton'>
                        Next &raquo;
                    </button>
                </div>
            </div>
        )
    }
}
