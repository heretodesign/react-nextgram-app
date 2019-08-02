import React from 'react';
import axios from 'axios';
import Flickr from './Flickr-1.4s-200px.svg';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Route, Link } from "react-router-dom";
import HomePage from './pages/HomePage';
import UserProfilePage from './pages/UserProfilePage';

class App extends React.Component {
  state = {
    users: [],
    isLoading: true,
  }

  componentDidMount() {
    axios.get('https://insta.nextacademy.com/api/v1/users')
    .then(result => {
      this.setState({
        users: result.data,
        isLoading: false
      })
    })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {
            this.state.isLoading
            ? <div class="has-text-white has-text-centered"><img src={Flickr} alt="Flickr" /></div>
            : <>
                <Route exact path="/" render={props => <HomePage {...props} users={this.state.users} />} />
                <Route path="/users/:id" component={props => {return(<UserProfilePage {...props} users={this.state.users} />)}} />
              </>
          }
        <Footer />
      </div>
    )
  }
}

export default App;