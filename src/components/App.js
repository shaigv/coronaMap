import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import key from '../Ignore/GAPI';
import Plist from './Plist';
import Alert from './Alert'
import './Tab.css';
import Markers from './Markers'

const RADIUS = 3500;
export class MapContainer extends Component {
    state = { lat: null, lng: null, positionAlert: null, errorMessage: '', showingInfoWindow: false, showAlert: true, activeMarker: {}, selectedCovid: {}, showTab: false, isButtonFilterClick: true, zoomLevel: 14, radius: RADIUS };
    timeoutid = 0;


    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude, lng: position.coords.longitude }),
            err => this.setState({ errorMessage: err.message })

            
        );
        
       


    }

    onMarkerClick = (props, marker, e, covid) => {
        // marker.setIcon({
        //     url: "/covid-click.png",
        //     scaledSize: new this.props.google.maps.Size(25,25)
        // });
        // marker.setIcon('https://www.google.com/mapfiles/marker_green.png');

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
        const currentZomm = this.refs.map.map.zoom;
        if (currentZomm === 8)
            this.setState({ zoomLevel: this.refs.map.map.zoom });
    }


    changeMyPosition = () => {
        this.setState({ lat: this.state.positionAlert.lat(), lng: this.state.positionAlert.lng(), showAlert: false })
    }

    changeMyPositionAlert(positionIfConfirm) {

        this.timeoutid = setTimeout(() => {
            this.setState({ showAlert: true, positionAlert: positionIfConfirm });
        }, 250);

    }


    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            if (this.state.errorMessage === "User denied Geolocation") {
                return (
                    <div style={{ position: 'relative', height: '720px' }} className="ui segment">
                        <div className="ui active dimmer">
                            <div className="ui huge text loader">נא אשר שימוש במיקום(במובייל יש להדליק את המיקום)</div>
                        </div>
                        <p></p>
                    </div>
                );
            }
            // return <div style={{textAlign:'center'}}>נא אשר שימוש במיקום(במובייל יש להדליק את המיקום)</div>;
        }

        if (!this.state.errorMessage && this.state.lat) {

            return (
                <div>
                    <Map
                        ref='map'
                        google={this.props.google}
                        onZoomChanged={this._handleZoomChanged.bind(this)}
                        showsUserLocation={true}
                        //onClick={(t, map, c) =>this.changeMyPositionAlert(c.latLng)}
                        //onDblclick ={()=>clearTimeout(this.timeoutid)}
                        onUserLocationChange={event => console.log("move")}
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
                        <Markers
                            zoom={this.state.zoomLevel}
                            lat={this.state.lat}
                            lng={this.state.lng}
                            radius={this.state.radius}
                            onMClick={this.onMarkerClick} />

                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        // content={"\u200e"+this.state.selectedCovid.name}


                        >
                            <div style={{ paddingLeft: '10px', paddingBottom: '10px' }}>{this.state.selectedCovid.name}</div>

                        </InfoWindow>




                    </Map>
                    <div style={{ position: 'absolute', bottom: '5px' }}>
                        <button className={this.state.isButtonFilterClick ? "ui toggle button active" : "ui toggle button"} onClick={this.onFilterRadius}>(3.5 ק"מ) סנן לפי רדיוס</button>
                    </div>

                </div>
            );
        }

        return (
            <div style={{ position: 'relative', height: '720px' }} className="ui segment">
                <div className="ui active dimmer">
                    <div className="ui huge text loader">טוען את המפה אנא המתן</div>
                </div>
                <p></p>
            </div>
        );
    }


    renderPanel() {
        if (this.state.showTab) {
            return <Plist classname="right" covid={this.state.selectedCovid}></Plist>
        }
        else {
            return <div></div>
        }
    }


    onFilterRadius = () => {
        if (this.state.isButtonFilterClick) {
            this.setState({ isButtonFilterClick: false, radius: 99999999999 })
        }
        else {
            this.setState({ isButtonFilterClick: true, radius: RADIUS })
        }
    }

    onConfirmAlert=()=>{
        this.setState({showAlert:false})
    }

    render() {

        return (
            <div >
                {this.renderContent()}

                <div className="right">
                    {this.renderPanel()}
                </div>

                {/* <div style={{ position: 'absolute', bottom: '5px' }}>
                    <button className={this.state.isButtonFilterClick ? "ui toggle button active" : "ui toggle button"} onClick={this.onFilterRadius}>(3.5 ק"מ) סנן לפי רדיוס</button>
                </div> */}

                <Alert
                    open={this.state.showAlert}
                    onConfirm={this.onConfirmAlert}
                    //onCancel={() => this.setState({ showAlert: false })}
                />
            </div>
        );

    }
}

export default GoogleApiWrapper({ apiKey: key, language: 'iw' })(MapContainer);