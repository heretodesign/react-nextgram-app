import React, { Component } from 'react';
import axios from 'axios';
import Flickr from '../Flickr-1.4s-200px.svg';
import '../App.scss';
import Image from "react-graceful-image";

class UserImages extends React.Component {
  state = {
    images: [],
    isLoading: true,
  }

  getUserImages() {
    const {profile_id} = this.props
    axios
      .get("https://insta.nextacademy.com/api/v1/images?userId="+profile_id)
      .then(result => {
        this.setState({
          images: result.data,
          isLoading: false
        });
      })
      .catch(error => {
        console.log('ERROR: ', error)
      })
  }
  componentDidMount() {
    this.getUserImages()
  }


  render(){
    const { isLoading, images } = this.state;
    return (
      <div className="columns is-multiline">
        <>
          {!isLoading ? (
            <>
              {
                this.state.images.map(image =>
                  <div className="column is-half">
                    <Image src={image}  height="80%"  alt="My awesome image" retry={{ count: 10, delay: 3 }} />
                      {/* <img width="80%" height="60%" src={image} /> */}
                  </div>
                )
              }
            </>
          )
            : (
                <p className="text-center"><img class="display:inline;" src={Flickr} alt="Flickr" /></p>

            )}
        </>

      </div>
    )
  }
}

export default UserImages;
