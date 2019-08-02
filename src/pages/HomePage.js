import React, { Component } from 'react';
import axios from 'axios';
import Flickr from '../Flickr-1.4s-200px.svg';
import '../App.scss';
import UserImages from '../containers/UserImages';
import Image from "react-graceful-image";


class HomePage extends React.Component {


  render(){
    return (
      <div  className="container">

        <h1>Home Page</h1>
        <div className="box">
          <div className="notification">
              {
                this.props.users.map(user =>
                  <div class="columns is-multiline is-mobile">
                      <div className="column is-narrow">
                          <img width="200" height="200" src={user.profileImage} />
                          <h3><span class="text-center">{user.username}</span></h3>
                      </div>
                      <div className="column">
                          {/* <li>{user.id}: {user.username}</li> */}
                          <UserImages className="" profile_id={user.id}/>
                      </div>
                  </div>
                )
              }
            </div>
        </div>

      </div>
    )
  }
}

export default HomePage;
