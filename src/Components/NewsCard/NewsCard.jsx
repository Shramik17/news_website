import React from 'react'

const NewsCard = ({article}) =>{
  return (
    <>
      <div className="news-card bg-white text-black mt-10">
        <div className="shadow-xl h-full px-4 py-4 rounder-lg mt-6 ">
          <img className="h-fit w-fit mb-3" src={article.urlToImage} alt="" />
            <div className="">
              <h3 className='mb-3 font-bold'>{article.title}</h3>
              <p className='mb-4 font-semibold'>{article.description}</p>
              <a href={article.url} className='text-white bg-black font-2xl p-2 rounded-lg'>Read More</a>
            </div>
          </div>
      </div>
    </>
  )
}

export default NewsCard