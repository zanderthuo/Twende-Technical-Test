import React, {useState, useEffect} from 'react';
import RepoItem from './components/RepoItem'
import './App.css';

import API from './api';

const App = () => {
  const [repos, setRepos] = useState([])
  const [isLoading, setIsLoading] = useState(true)


  useEffect(() => {
    const fetchItems = async () => {
      const result = await API.get(`users/zanderthuo/repos`)
      console.log(result.data)
      setRepos(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className="container">
      <RepoItem isLoading={isLoading} repos={repos} />
    </div>
  );
}

export default App;
