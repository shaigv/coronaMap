import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import key from '../Ignore/GAPI'

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
    state = { lat: null, lng:null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
          position => this.setState({ lat: position.coords.latitude ,lng : position.coords.longitude}),
          err => this.setState({ errorMessage: err.message })
        );
      }
      renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
          return <div>Error: {this.state.errorMessage}</div>;
        }
    
        if (!this.state.errorMessage && this.state.lat) {
          return (
            <Map
            google={this.props.google}
            zoom={14}
            style={mapStyles}
            initialCenter={
              {
                // lat: this.state.lat,
                // lng: this.state.lng
                lat: this.state.lat,
                lng: this.state.lng
              }
            }
          />  
                );   
               }
    
        return <div> 'Please accept location request' </div>;
      }
  render() {
      console.log(this.state);
    
        return <div>{this.renderContent()}</div>;
        
  }
}

export default GoogleApiWrapper({apiKey: key})(MapContainer);