import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.progressNow(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.countryShort}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.progressNow(30);
        let parsedData = await data.json()
        props.progressNow(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.progressNow(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} News - TadkaNews ${props.countryFull}`;
        updateNews();
        // eslint-disable-next-line
    }, [props.category, props.countryShort])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.countryShort}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <h1 className="text-center my-5">TadkaNews - Top {capitalizeFirstLetter(props.category)} Headlines ({props.countryFull})</h1>
            {loading ? <Spinner /> :
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length < totalResults}
                    loader={<Spinner />}
                >
                    <div className="container mb-3">
                        <div className="row">
                            {Array.isArray(articles) ? (
                                articles.map((element) => (
                                    <div className="col-md-4 mb-3" key={element.url}>
                                        <NewsItem
                                            title={element.title ? element.title : ""}
                                            description={element.description ? element.description : ""}
                                            imageURL={element.urlToImage ? element.urlToImage : "https://cdn.ndtv.com/common/images/ogndtv.png"}
                                            newsURL={element.url}
                                            imageALT={element.author}
                                            theme={props.theme}
                                            author={element.author}
                                            date={element.publishedAt}
                                            source={element.source.name}
                                        />
                                    </div>
                                ))
                            ) : (
                                <p>No articles to display.</p>
                            )}
                        </div>

                    </div>
                </InfiniteScroll>
            }
        </>
    )

}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News