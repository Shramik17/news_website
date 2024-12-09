import React from 'react'
import { useNewsContext } from '../../../Context/Context'
import NewsCard from '../../NewsCard/NewsCard'

function Newsfeed() {
    const {articles, loading, error} = useNewsContext()
  return (
    <>
        <div className="news-feed ">
            {
                articles.length === 0 ?
                 (<p>Articles are not found..</p>) : (
                    <div className='grid grid-cols-3 gap-2'> {articles.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}</div>
                 )
            }
        </div>
    </>
  )
}

export default Newsfeed