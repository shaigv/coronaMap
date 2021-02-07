import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import key from '../Ignore/GAPI';
import Tab from './Tab'
import Test from './Tets';
import { getDistance } from 'geolib';
import './Tab.css';
import covids_locations from './Covids';

const mapStyles = {
    width: '80%',
    height: '100%'
};

export class MapContainer extends Component {
    state = { lat: null, lng: null, errorMessage: '', showingInfoWindow: false, activeMarker: {}, selectedCovid: {}, showTab: false, zoomLevel: 14 };


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
            err => this.setState({ errorMessage: err.message })
        );



    }
    onMarkerClick = (props, marker, e, covid) => {
        console.log(covid)
        this.setState({
            selectedCovid: covid,
            activeMarker: marker,
            showingInfoWindow: true,
            showTab: true
        });

    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null,
                showTab: false
            });
        }
    };

    _handleZoomChanged() {
        this.setState({ zoomLevel: this.refs.map.map.zoom});
    }

    calculateDistance(origLat, origLon, markerLat, markerLon) {   //in KM
        return getDistance(
            { latitude: origLat, longitude: origLon },
            { latitude: markerLat, longitude: markerLon }
        )
    }

    changeMyPosition(position){
        this.setState({ lat: position.lat(), lng: position.lng() })
    }
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {

            return (
                <div>
                    <Map
                        ref='map'
                        google={this.props.google}
                        // zoom={16}
                        onZoomChanged={this._handleZoomChanged.bind(this)}
                        showsUserLocation={true}
                        onClick={(t, map, c) =>this.changeMyPosition(c.latLng)}
                        
                        onUserLocationChange={event => console.log("move")}
                        style={{ height: '100%', width: this.state.showTab ? '84.5%' : '100%' }}
                        initialCenter={
                            {
                                lat: this.state.lat,
                                lng: this.state.lng
                            }
                        }
                    >

                        <Marker
                            icon={{ url: "/bluecircle.png" }}
                            position={{
                                lat: this.state.lat,
                                lng: this.state.lng
                            }}
                        />

                        {this.renderCovids()}

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <div className='r-text'>{this.state.selectedCovid.name}</div>
                                <div className='r-text'>{this.state.selectedCovid.address}</div>
                            </div>

                        </InfoWindow>

                    </Map>

                </div>
            );
        }

        return <div> 'Please accept location request' </div>;
    }


    renderPanel() {
        if (this.state.showTab) {
            return <Test classname="right" covid={this.state.selectedCovid}></Test>

            // return <Tab classname="right" covid={this.state.selectedCovid}></Tab>
        }
        else {
            return <div></div>
        }
    }

    calculateCovidSize(len) {
        return (Math.log(len) + 1) * this.state.zoomLevel;
    }

    renderCovids() {
        return covids_locations.map(covid => {
            return (
                <Marker
                    key={covid.name}
                    // onClick={this.onMarkerClick}
                    onClick={(props, marker, e) => this.onMarkerClick(props, marker, e, covid)}
                    name={covid.name}
                    icon={{
                        url: "/covid.png",
                        scaledSize: new this.props.google.maps.Size(this.calculateCovidSize(covid.datetime.length), this.calculateCovidSize(covid.datetime.length))
                    }}
                    position={covid.location}
                />);
        })
    }

    render() {

        return (
            <div >
                {this.renderContent()}
                <div className="right">
                    {this.renderPanel()}
                </div>
            </div>
        );

    }
}

export default GoogleApiWrapper({ apiKey: key, language: 'iw' })(MapContainer);