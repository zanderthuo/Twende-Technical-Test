import React, {useState, useEffect} from 'react'
import {IoIosHeart,IoIosHeartEmpty} from 'react-icons/io'


const CharacterItem = ({ repos }) => {
  const [favorites, setFavorites] = useState([]);
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');

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
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <strong>NAME:</strong>{repos.name}

        </div>
        <div className='card-back'>
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
          <ul>
            <li>
              <strong>Description:</strong> {repos.description}
            </li>
            <li>
              <strong>Stars:</strong> {repos.stargazers_count}
            </li>
            <li>
              <strong>Forks:</strong> {repos.forks}
            </li>
            <li>
              <strong>Watchers:</strong> {repos.watchers}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
