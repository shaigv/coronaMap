import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import key from '../Ignore/GAPI';
import covids_locations from './Covids';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    state = { lat: null, lng: null, errorMessage: '' };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
            err => this.setState({ errorMessage: err.message })
        );
        
    }
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {

            return (
                <div>
                    <Map
                        google={this.props.google}
                        zoom={14}
                        showsUserLocation={true}
                        style={mapStyles}
                        initialCenter={
                            {
                                lat: this.state.lat,
                                lng: this.state.lng
                            }
                        }
                    >
                        <Marker
                            icon={{url: "https://www.robotwoods.com/dev/misc/bluecircle.png"}}
                            position={{
                                lat: this.state.lat ,
                                lng: this.state.lng }}
                        />
                        
                       {this.renderCovids()} 

                    </Map>

                </div>
            );
        }

        return <div> 'Please accept location request' </div>;
    }

    renderCovids(){
        return covids_locations.map(covid => {
            return (
            <Marker
                icon={{url: "https://www.brainpop.com//image_library/287000/287812_256x256.png",
                scaledSize:  new this.props.google.maps.Size(covid.datetime.length*10,covid.datetime.length*10)
            }}
                position={covid.location}
                 />);
        })
    }
    render() {

        return (
        <div>
            {this.renderContent()}
            {/* {this.renderCovids()} */}
        </div>
        );

    }
}

export default GoogleApiWrapper({ apiKey: key })(MapContainer);