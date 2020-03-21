import React, { Component } from 'react'
import { GoogleMap, GroundOverlay, LoadScript, Marker, Polyline } from '@react-google-maps/api'
import old_map from '../images/old_map.jpg'
import icon from '../images/sailing.png'
import legOne from './leg-one.json'

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

class Map extends Component {
  
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
                legOne.points[0]
                }
            icon={icon}
            width='10px'
            height='10px'
         />

         <Polyline 
            width = {2}
            path = {legOne.points}
            options = {{strokeWeight: 2, strokeColor: '#FF0000'}}
         />

        
        </GoogleMap>
        {/* <img src={old_map} style={{opacity: '0.1'}}/> */}
       
      </LoadScript>
     )
  }
}

export default Map