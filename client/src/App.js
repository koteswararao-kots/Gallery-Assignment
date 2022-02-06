import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { Link } from "react-router-dom";


function App() {

  const [users, setUsers] = useState([]);
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get('https://reqres.in/api/users');
      setUsers(response.data.data);
    }
    loadUsers();
  }, []);

  const onSuggestHandler = (text) => {
    setText(text);
    setSuggestions([]);
  }

  const onChangeHandler = (text) => {
    let matches = []
    if (text.length > 0) {
      matches = users.filter(user => {
        const regex = new RegExp(`${text}`, "gi");
        return user.email.match(regex)

      })
    }
    console.log('matches', matches)
    setSuggestions(matches)
    setText(text)
  }



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
        <input className='input-bar' type="text" onChange={e => onChangeHandler(e.target.value)}
          value={text} />
        <h5>search</h5>

        {suggestions && suggestions.map((suggestion, i) =>
          <div className='suggestion' onClick={() => onSuggestHandler(suggestion.email)}>
            {suggestion.email}</div>
        )}


      </div>
      <br />
      <div className="row-images">
        {items.map((post) =>
          <div >
            <Link to='/staticPage'> <img src={post.image} alt="images" /></Link>
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