import React, { useState, useEffect } from 'react';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('http://localhost:4000/posts');
    const items = await data.json();
    setItems(items);
  };

  return (
    <div className="container">
      <div className='header'>
        <div><input type="text" /></div>
        <div><h5>search</h5></div>


      </div>
      <br />
      <div className="row-images">
        {items.map((post) =>
          <div >
          <Link to= '/staticPage'> <img src={post.image} alt = "images" /></Link>
          <p>{post.title}</p>
          <br />
          <p>{post.description}</p>

          </div>
        )}
      </div>
    </div>


  );

}

export default App;