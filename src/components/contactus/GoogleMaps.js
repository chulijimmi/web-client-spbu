import React, { Component } from "react"
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react"

const mapStyles = {
  width: "100%",
  height: "568px",
  margin: 0,
  position: "relative",
}

export class MapContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
    }
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    })

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      })
    }
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{ lat: -7.269015, lng: 112.740217 }}
      >
        {console.log("env vercel", {
          dev: process.env.GATSBY_MY_GOOGLE_MAP_API_KEY,
          prod: process.env.MY_GOOGLE_MAP_API_KEY,
        })}
        <Marker onClick={this.onMarkerClick} name={"Belly Law Firm"} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <p>Jl Kombes M. Duryat NO. 9 Surabaya, Jawa Timur 60271</p>
            <p>Call. 0812 4990 0871</p>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

// Api Key Google Maps
export default GoogleApiWrapper({
  apiKey: process.env.MY_GOOGLE_MAP_API_KEY,
})(MapContainer)
