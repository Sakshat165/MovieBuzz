  import { useState,useEffect } from 'react'
import React from 'react'
import MoviesItem from './MoviesItem'
  
  const Movies = ({search,page}) => {
    const [movie, setMovie] = useState([])

    const fetchUserData = async() => {
        if(search){
      const mov=await fetch(`https://www.omdbapi.com/?apikey=35b97ba4&s=${search}`)
      const res=await mov.json()
      console.log(res)
      setMovie(res.Search) 
        }
        else
        {
            const mov=await fetch(`https://www.omdbapi.com/?apikey=35b97ba4&s="jawan"`)
            const res=await mov.json()
            console.log(res)
            setMovie(res.Search)
            
        }
    }
  
    useEffect(() => {
      fetchUserData()
      // eslint-disable-next-line   
    },[search])
    return (
        <div className='container my-3'>
            <h1>Results for: {search}</h1>
        { <div className="row">
               {movie.map((m)=>{
                    return <div className='col-md-4' key={m.imdbID}>
                            <MoviesItem title={m.Title} poster={m.Poster} year={m.Year}/>
                        </div>
                })}
        </div> }
        
      </div>
     
    )
            }
  export default Movies
  