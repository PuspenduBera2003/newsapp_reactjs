import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
        document.title = (this.props.category).charAt(0).toUpperCase() + (this.props.category).slice(1) + " - TadkaNews"
    }

    async fetchData() {
        this.props.setProgress(10);
        let urlToFetch = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(urlToFetch);
        this.props.setProgress(25);
        let parsedData = await data.json();
        this.props.setProgress(50);
        const articlesWithUniqueKeys = parsedData.articles.map((article) => ({
            ...article,
            uniqueKey: `${Date.now()}_${Math.random()}_${article.url || article.title}`, // Generate a unique key
        }));
        this.props.setProgress(75);

        // Update the state with the articles that have unique keys
        this.setState({
            articles: articlesWithUniqueKeys,
            totalResults: parsedData.totalResults,
            loading: false,
            page: 1,
        });
        this.props.setProgress(100);
    }


    fetchMoreData = async () => {
        let urlToFetch = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(urlToFetch);
        let parsedData = await data.json();
        const articlesWithUniqueKeys = parsedData.articles.map((article) => ({
            ...article,
            uniqueKey: `${Date.now()}_${Math.random()}_${article.url || article.title}`, // Generate a unique key
        }));

        this.setState((prevState) => ({
            articles: [...prevState.articles, ...articlesWithUniqueKeys],
            totalResults: parsedData.totalResults,
            page: prevState.page + 1,
        }));
    };



    render() {
        return (
            <>
                <h3 className='card-title text-center my-3'>{this.props.headlineTitle}</h3>
                {this.state.loading ? <Spinner /> :
                    <div className="container">
                        <InfiniteScroll
                            dataLength={this.state.articles.length}
                            next={this.fetchMoreData}
                            hasMore={this.state.articles.length !== this.state.totalResults}
                            loader={<Spinner />}
                        >
                            <div className="row">
                                {(Array.isArray(this.state.articles)) ? (
                                    this.state.articles.map((element) => {
                                        return (
                                            <div className="col mb-4" key={element.uniqueKey}>
                                                <NewsItem
                                                    title={element.title}
                                                    description={element.description}
                                                    imageURL={element.urlToImage ? element.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"}
                                                    newsURL={element.url}
                                                    imageALT={element.author}
                                                    theme={this.props.theme}
                                                    author={element.author}
                                                    date={element.publishedAt}
                                                    source={element.source.name}
                                                />
                                            </div>
                                        );
                                    })
                                ) : (
                                    <p>No articles to display.</p>
                                )}
                            </div>
                        </InfiniteScroll>
                    </div>
                }
            </>
        )
    }
}
