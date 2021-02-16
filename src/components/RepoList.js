import React, {useState, useEffect} from 'react'
import {IoIosHeart,IoIosHeartEmpty} from 'react-icons/io'
import {  Card, Button, Row} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../styles/Repositories.css'


const CharacterItem = () => {
  const [repos, setRepos] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

  useEffect(() => {
   const result = axios.get(`https://api.github.com/repositories`)
   .then(response => setRepos(response.data));
   console.log(repos);

}, [])


  useEffect(() => {
    if (getArray !== 0){
      setFavorites([...getArray])
    }
  }, [])

  const addFav = (props: any) => {
    let array = favorites;
    let addArray = true;
    array.map((item: any, key: number) => {
      if (item === props.i){
        array.splice(key, 1);
        addArray = false;
      }
    });
    if (addArray){
      array.push(props.i);
    }
    setFavorites([...array])
    localStorage.setItem("favorites", JSON.stringify(favorites));

    var storage = localStorage.getItem('favItem' + (props.i) || '0')
    if (storage == null) {
      localStorage.setItem(('favItem' + (props.i)), JSON.stringify(props.items));
    }else {
      localStorage.removeItem('favItem' + (props.i));
    }
  }


  var items;
  var i;

  return (
    <div className="container">
        <div className="Row">
            {repos.map((repos) => (
                <Card className="RepoCard"  style={{ width: '18rem' }}>
                  <Card.Header className="cardHeader" as="h2">
                      <div>
                        {favorites.includes(i) ? (
                          <IoIosHeart
                              onClick={() => addFav({ items, i })}
                              style={{color: 'red' }}
                          />
                      ) : (
                          <IoIosHeartEmpty
                              onClick={() => addFav({ items, i })}
                              style={{ color: 'red' }}
                          />
                      )}
                      </div>
                      <Card.Title key={repos.id}>{repos.name}</Card.Title>
                  </Card.Header>
                  <Card.Body className="cardBody">
                      <Card.Text className="cardText">
                          {repos.description}
                      </Card.Text>
                  </Card.Body>
                  <Card.Footer className="cardFooter">
                    <Button>
                      <Link to={`/singleRepo/${repos.id}`}>View Repo</Link>
                    </Button>
                  </Card.Footer>
              </Card>
              ))}
        </div>
    </div>
  )
}

export default CharacterItem
