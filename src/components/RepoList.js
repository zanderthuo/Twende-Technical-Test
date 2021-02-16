import React from 'react';
import { Container, Card, Col, Button, Row} from 'react-bootstrap'
import { Redirect, Link } from 'react-router-dom';
';

import axios from 'axios'

import '../styles/Repositories.css'


// window.localStorage.setItem("repos", JSON.stringify(repos));


class RepoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      repos:[],
      isLoading: false,
    }
  }


  componentDidMount = () => {
      axios.get(`https://api.github.com/repositories`)
        .then(res => {
          const repos = res.data;
          console.log(repos)
          this.setState({ repos });
        })
        .catch(error => {
          console.log(error);
        });
  }


  render(){
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/singleRepo'/>;
     }
    return (
        <div className="container">
            <div className="Row">
                {this.state.repos.map((repos) => (
                    <Card className="RepoCard" style={{ width: '18rem' }}>
                        <>
                          <Card.Header className="cardHeader" as="h2">
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
                        </>
                  </Card>
                  ))}
            </div>
        </div>
    )
  }
}

export default RepoList
