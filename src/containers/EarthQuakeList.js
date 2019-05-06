import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchEarthQuakeData } from '../actions';
import Map from '../containers/Map';


class EarthQuakeList extends Component {
   
  componentDidMount(){
    //Load all the earth quake data from action creator
    try{
      this.props.fetchEarthQuakeData();
    }catch(err){
      console.log(`Error: ${err}`);
    }
    
  }
  //iterate all the earthquake data and make list as left side navigation
  renderList = ()=>{    
    const {features} = this.props.earthquakes;
   
    if(!features) return null;

    return features.map((feature, index)=>{
      return <div className="list-group" style={{width:'30%'}} >
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                <div className="arrow">                    
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                  </div>

                  <div className="d-flex w-70 justify-content-between list-content">
                    <h6 className="mb-1">{feature.properties.place}</h6>
                    <small>{feature.properties.type}</small>                    
                  </div>                  
                 
                  <div className="d-flex w-70 justify-content-between">
                    <p>{feature.properties.time}</p>
                    <small>Magnitude : {feature.properties.mag}</small>
                  </div>
                  
                </a>
             
              </div>
                  
   });
    
      
  }
  render() {
    
    return ( 
          <div className="scroll-area">
            {this.renderList()} 
            <Map />   
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

export default connect(mapStateToProps, {fetchEarthQuakeData})(EarthQuakeList);
