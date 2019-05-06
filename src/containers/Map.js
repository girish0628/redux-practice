import React, { Component } from 'react';
import L from 'leaflet';
import { connect } from 'react-redux';
 class Map extends Component {
   
    componentDidMount(){
      //Declare map object   
      this.map = null;
      //Initialize the map object after dom ready
      this.mapInit();        
    }
    componentWillReceiveProps(nextProps) {
      
      if (nextProps!==null) {       
      //Earthquake marker styling options
      let geojsonMarkerOptions = {
        radius: 8,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    };
    
    //Create marker object using earthquake api
    let geojsonLayer = L.geoJson(nextProps.earthquakes, {
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
    }).addTo(this.map);

    //Zoom to map based on earthquake geojson layer/Data
    this.map.fitBounds(geojsonLayer.getBounds());

      }     

  }
    mapInit = ()=>{
      const {earthquakes} = this.props;      
      if(!earthquakes) return null;

          // initialize the map
          this.map = L.map('map');
          //Load tile layer on map using map box maps
          L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
            maxZoom: 18,
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
              '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
              'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            id: 'mapbox.light'
          }).addTo(this.map);
       
    }

  render() {
 
    return (
      <div id="map">
        
      </div>
    )
  }
}
//Map store states to current component props
const mapStateToProps = state =>{
  return {
    earthquakes: state.earthquakes
  }
}

export default connect(mapStateToProps, {})(Map);