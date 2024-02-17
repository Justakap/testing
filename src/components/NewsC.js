import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinners from './Spinners';
import PropTypes from 'prop-types'


const NewsC = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState([true])
  const [page, setPage] = useState([1])
  const [totalResults, setTotalResults] = useState([0])


  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=809c80e8fe7b4e7bab954f92d4039667&pageSize=${props.pageSize}&page=${page}`;

    let data = await fetch(url);
    let parsedData = await data.json()  
    setArticles(parsedData.articles)
    setTotalResults(parsedData.TotalResults)
    setLoading(false)

  }
  useEffect(() => {
    updateNews();
  }, []);

  const nextClick = async () => {
    updateNews();
    setPage(page + 1)
  }
  const prevClick = async () => {
    // updateNews();
    setPage(page - 1)
  }
  return (
    <>
      <div className="container">
        <h1 className='text-center my-3'>MarkNews Top Headlines</h1>
        <center> {loading && <Spinners />}</center>

        <div className="row">
          {articles.map((element) => {
            return <div className="col-md-4 " key={element.url}>
              <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description : ""} newsUrl="todo" imageUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author={element.author} />

            </div>
          })}

        </div>
        <div className="d-flex justify-content-between">
          <button disabled={page <= 1} className="btn btn-dark" onClick={prevClick}> &larr; Prev</button>
          <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} onClick={nextClick} className="btn btn-dark" > Next &rarr;</button>
        </div>
      </div>
    </>
  )
}



NewsC.defaultProps = {
  country: 'in',
  pageSize: 5,
  category: 'general',
}
NewsC.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
}


export default NewsC