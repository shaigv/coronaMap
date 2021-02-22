import React from 'react'
import { Marker } from 'google-maps-react';
import { getDistance } from 'geolib';
import covids_locations from './Covids'

class Markers extends React.PureComponent {

    calculateDistance = (origLat, origLon, markerLat, markerLon) => {   //in KM


        const ans = getDistance(
            { latitude: origLat, longitude: origLon },
            { latitude: markerLat, longitude: markerLon }
        )

        return ans;
    }

    renderCovidByRadius(covid) {

        return this.calculateDistance(covid.location.lat, covid.location.lng, this.props.lat, this.props.lng) < this.props.radius;
        
    }

    calculateCovidSize(len) {
        return (Math.log(len) + 1) * this.props.zoom;
    }
    render() {
       
        
          
            
            return covids_locations.filter(covid=>this.renderCovidByRadius(covid)).map(covid => {
                        return (
                            <Marker
                                {...this.props}
                                key={covid.address+covid.city+covid.name}
                                onClick={(props, marker, e) => this.props.onMClick(props, marker, e, covid)}
                                name={covid.name}
                                icon={{
                                    url: "/covid.png",
                                    scaledSize: new this.props.google.maps.Size(this.calculateCovidSize(covid.datetime.length), this.calculateCovidSize(covid.datetime.length))
                                }}
                                position={covid.location}

                            />);
                }); 
    }
}


export default Markers;