import React from 'react'

const MoviesItem = ({title,poster,year}) => {
  return (
    <div className='container'>
      <div className="card mt-3" style={{ width: '18rem' }} >
  <img src={poster} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Year:{year}</p>
    <a href="/" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  )
}

export default MoviesItem
