import React from 'react';
import { Container, Card, Col, Button, Row} from 'react-bootstrap'

import { Redirect } from 'react-router-dom';

import API from '../api'

import '../styles/Repositories.css'

class RepoList extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
      repos:[],
      isLoading: false,
      redirect: false
    }
    this.ViewRepo = this.ViewRepo.bind(this)
  }
  

  componentDidMount = () => {
      API.get(`user/repos?page=1&per_page=10`)
        .then(res => {
          const repos = res.data;
          window.localStorage.setItem("repos", JSON.stringify(repos));
          this.setState({ repos });
        })
        .catch(error => {
          console.log(error);
        });
  }

  ViewRepo(e){
    e.preventDefault();
    API.get(`user/repos?page=1&per_page=10`)
      .then(res => {
        this.setState({ redirect: true, isLoading: false });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render(){
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/repoDisplay'/>;
     }
    return (
        <div>
            <Container>
                <Row>
                  {this.state.repos.sort((a, b) => {
                      if (a.stargazers_count > b.stargazers_count) return 1
                      else if (a.stargazers_count < b.stargazers_count) return -1
                      return 0
                    }).map((repos) => (
                    <Col sm>
                        <Card className="RepoCard" style={{ width: '18rem' }}>
                            <>
                              <Card.Header as="h5">
                                  <Card.Title key={repos.id}>{repos.name}</Card.Title>
                              </Card.Header>
                              <Card.Body>
                                  <Card.Text>
                                      {repos.watchers}
                                  </Card.Text>
                                  <Button variant="primary" onClick={this.ViewRepo}>View Repo</Button>
                              </Card.Body>
                            </>
                      </Card>
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
  }
}

export default RepoList
