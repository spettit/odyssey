import React, { Component } from 'react'
import { GoogleMap, GroundOverlay, LoadScript, Marker, Polyline } from '@react-google-maps/api'
import old_map from '../../static/assets/old_map.jpg'
import icon from '../../static/assets/odessey.png'
// import path from '../../static/assets/odessey.svg'
import gps from '../../static/assets/gps.json'

const center = {
    lat: 17.5,
    lng: -74.5
  };
  
  const bounds = {
    north: 29.4,
    south: 5,
    east: -57.7,
    west: -91
  };

  const z = 5

  let lineSymbol



class Map extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyAov8VpvRFBsCiFsB8pZIMa4P2NEP0qwcU"
        // {...other props}
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={{width: '750px', height: '580px'}}
          center = {center}
          zoom = {z}
          options={{maxZoom: z, minZoom: z, disableDefaultUI: true, draggable: false}}
          
        //   {...other props }
        >
        <GroundOverlay
             key={'url'}
            url={old_map}
            bounds={bounds}
            opacity={1}
        
        />
        <Marker
            position={
                gps.points[this.props.point]
                }
            icon={icon}
            width='10px'
            height='10px'
         />

         <Polyline 
            width = {2}
            path = {gps.points}
            options = {{strokeWeight: 2, strokeColor: '#FF0000', icons:[{icon: icon, offset: '50%'}]}}
         />

        
        </GoogleMap>
        {/* <img src={old_map} style={{opacity: '0.1'}}/> */}
       
      </LoadScript>
     )
  }
}

export default Map