import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import key from '../Ignore/GAPI';
import Plist from './Plist';
import Alert from './Alert'
import { getDistance } from 'geolib';
import './Tab.css';
import covids_locations from './Covids';

const RADIUS = 3500;
export class MapContainer extends Component {
    state = { lat: null, lng: null,positionAlert:null, errorMessage: '', showingInfoWindow: false,showAlert:false, activeMarker: {}, selectedCovid: {}, showTab: false,isButtonFilterClick:true, zoomLevel: 14,radius:RADIUS };
    timeoutid=0;


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
            err => this.setState({ errorMessage: err.message })
        );



    }
    onMarkerClick = (props, marker, e, covid) => {
        // console.log(covid)
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
        const currentZomm= this.refs.map.map.zoom;
        if(currentZomm===8)
            this.setState({ zoomLevel: this.refs.map.map.zoom});
    }

    calculateDistance = (origLat, origLon, markerLat, markerLon) => {   //in KM


        const ans = getDistance(
            { latitude: origLat, longitude: origLon },
            { latitude: markerLat, longitude: markerLon }
        )

        return ans;
    }

    changeMyPosition=()=>{
        this.setState({ lat: this.state.positionAlert.lat(), lng: this.state.positionAlert.lng(),showAlert:false })
    }

    changeMyPositionAlert(positionIfConfirm){

        this.timeoutid = setTimeout(()=>{
            this.setState({showAlert:true,positionAlert:positionIfConfirm});
        },250);

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
                        on
                        
                        onZoomChanged={this._handleZoomChanged.bind(this)}
                        showsUserLocation={true}
                        //onClick={(t, map, c) =>this.changeMyPositionAlert(c.latLng)}
                        //onDblclick ={()=>clearTimeout(this.timeoutid)}
                        onUserLocationChange={event => console.log("move")}
                        //style={{ height: '100%', width: this.state.showTab ? '84.5%' : '100%' }}
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
                                <div className='r-text'>{this.state.selectedCovid.city}</div>
                            </div>

                        </InfoWindow>

                    </Map>

                </div>
            );
        }

        return <div> 'Loading...' </div>;
    }


    renderPanel() {
        if (this.state.showTab) {
            return <Plist classname="right" covid={this.state.selectedCovid}></Plist>

            // return <Tab classname="right" covid={this.state.selectedCovid}></Tab>
        }
        else {
            return <div></div>
        }
    }


    onFilterRadius=()=>{
        if(this.state.isButtonFilterClick){
            this.setState({isButtonFilterClick:false,radius:99999999999})
        }
        else{
            this.setState({isButtonFilterClick:true,radius:RADIUS})
        }
    }

    calculateCovidSize(len) {
        return (Math.log(len) + 1) * this.state.zoomLevel;
    }

    renderCovidByRadius(covid){
        
        const isFilter = this.calculateDistance(covid.location.lat, covid.location.lng, this.state.lat, this.state.lng) < this.state.radius;
        // if(isFilter && this.state.radius<3501){
        //     console.log(this.state.radius);
        //     console.log(covid.name,"  ",covid.city);

        //     console.log(covid.location.lat, covid.location.lng, this.state.lat, this.state.lng);}

        return isFilter;
    }
    renderCovids() {
        return covids_locations.filter(covid=>this.renderCovidByRadius(covid)).map(covid => {
                return (
                    <Marker
                        key={covid.address+covid.city+covid.name}
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
                <div style={{position:'absolute',bottom:'5px'}}>
                    <button className={this.state.isButtonFilterClick? "ui toggle button active":"ui toggle button"} onClick={this.onFilterRadius}>(3.5 ק"מ) סנן לפי רדיוס</button>
                </div>
                <Alert
                   open={this.state.showAlert}
                   onConfirm={this.changeMyPosition}
                   onCancel={()=>this.setState({showAlert:false})}
                />
            </div>
        );

    }
}

export default GoogleApiWrapper({ apiKey: key, language: 'iw' })(MapContainer);