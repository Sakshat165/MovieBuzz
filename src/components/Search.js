import React,{useState} from 'react'

const Search = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        
      // Call the onSearch callback with the current search term
      onSearch(searchTerm);
    };
    
  return (
    <div className='mt-3'>
      <input class="form-control" type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      <button className="btn btn-primary mt-2" onClick={handleSearch}>Search</button>
    </div>
  )
}


export default Search
