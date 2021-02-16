import React, { Component } from 'react'
import axios from 'axios';
import { withRouter, Link } from "react-router-dom";

class SingleRepo extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      results: null,
    }
  }

  componentDidMount() {
    console.log("==>",this.props.match.params.id);
    axios
      .get(`https://api.github.com/repositories/${this.props.match.params.id}`)
      .then((res) => {
          console.log(res)
        const results = res.data;
        this.setState({ results });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="single">
        <div className="List">
        <Link to="/">Back</Link>
          <ul className="list-group">
            <li>NAME: {this.state.results?.name}</li>
            <li className="list-group-item">DESCRIPTION: {this.state.results?.description}</li>
            <li className="list-group-item">WATCHERS: {this.state.results?.watchers}</li>
            <li>STARS: {this.state.results?.stargazers_count}</li>
            <li>FORKS: {this.state.results?.forks}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default withRouter(SingleRepo);
