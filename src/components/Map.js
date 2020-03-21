import React, { Component } from 'react'
import { GoogleMap, GroundOverlay, LoadScript, Marker } from '@react-google-maps/api'
import old_map from '../images/old_map.jpg'
import icon from '../images/sailing.png'

const center = {
    lat: 17.5,
    lng: -74.5
  };
  
  const bounds = {
    north: 29,
    south: 5,
    east: -58,
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
          mapContainerStyle={{height: '570px', width: '750px'}}
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
            position={{
                lat: 12.00444,
                lng: -61.75222
                }}
            icon={icon}
            width='10px'
            height='10px'
         />

        
        </GoogleMap>
        {/* <img src={old_map} style={{opacity: '0.1'}}/> */}
       
      </LoadScript>
     )
  }
}

export default Map