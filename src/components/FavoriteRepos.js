import React from 'react';

const FavoriteRepos = () => {
  var favList: any = [{}]
  const getArray = JSON.parse(localStorage.getItem('favorites') || '0');
  for (var i = 0; i< getArray.length; i++){
    let x = getArray[i]
    favList = JSON.parse(localStorage.getItem('favItem' + [x]) || '')
  }
  const titles = Object.keys(favList[0]);
  return (
    <div>
      <h5>Your Favorite Repos</h5>
      <table>
        <thead>
          <tr>
            {titles.map((title, key) => (
              <th key={key}>{title}</key>
            ))}
          </tr>
        </thead>
        <tbody>
          {favList.map((items: any, i: number) => (
            <tr key={i}>
              {(Object.values(favList[i])).map((value: any, key: number) => (
                <td key={key}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default FavoriteRepos
