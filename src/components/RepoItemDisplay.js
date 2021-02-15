import React from 'react'
import RepoItem from './RepoItem'
import Spinner from '../UI/Spinner'
import '../App.css'

const RepoItemDisplay = ({ repos, isLoading }) => {
  return isLoading ? (<div>Loading...</div>) : (<section className="cards">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo}>{repo.name}</RepoItem>
      ))}
    </section>)
}

export default RepoItemDisplay
