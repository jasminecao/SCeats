import React, {useState, useEffect} from 'react';
import RestCard from './RestCard';
import data from './data.json';
import styled from 'styled-components';

const RestCardContainer = () => {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = React.useState([]);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const results = data.content.body.filter(entry => 
      entry.name.includes(search) || entry.name.toLowerCase().includes(search)
    );
    setFiltered(results);
  }, [search]);

  return (
    <>
      <div className="restaurant">
        <h2 className="restHeader">Restaurants</h2>
        <input className="search" type="text" placeholder="Search for a restaurant..." value={search} onChange={handleChange}/>
        {filtered.map(block => RestCard(block))}
        <div className="footer">
          <p>Made with 🍜 by Jasmine Cao. <a className="link" target="_blank" rel="noopener noreferrer" href={"https://airtable.com/shrxgt5I2wDwfhilG"}>Feedback?</a></p>
        </div>
      </div>
    </>
  )
}

export default RestCardContainer;