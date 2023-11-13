import React,{useState} from 'react'
import Search from './Search'
import Movies from './Movies'

const Home = () => {
    const [searchContent, setSearchContent] = useState('');
    const handleSearch = (searchTerm) => {
        // Update state or perform other actions with the search term
        setSearchContent(searchTerm);
      };
       
  return (
    <div className='container'>
        <div style={{ alignItems: 'center' }}>
            <Search onSearch={handleSearch}/>
        </div>
      
    
     <Movies search={searchContent} />
     
    </div>
  )
}

export default Home
