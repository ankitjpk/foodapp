import React, { Component } from 'react'; 
import './App.css';
import GoogleMapReact from 'google-map-react';
import Food from "./components/food"
import MarkerPlace from "./components/markerPlace"

class App extends Component {
    constructor(props){
      super(props);
      this.state = {
        foods: [],
        allFood:[],
        selectedFood: null,
        search:""
      };
    }
  
    componentDidMount(){
      const url = "https://raw.githubusercontent.com/ankitjpk/sampleapi/master/food.json";
      fetch(url)
        .then(response => response.json())
        .then((data) =>  {
          this.setState({
            foods:data,
            allFood:data
          });
        })
    }

    selectfood = (foods) => {      
      this.setState({
        selectedFood:foods
      });
    } 

    handleSearch = (event) => { 
      this.setState({
        search:event.target.value,
        foods:this.state.allFood.filter((foods)=>new RegExp(event.target.value,"i").exec(foods.name))
      });
    }
   
    render() {
      let center={
        lat : 11.2588,
        lng : 75.7804
      }

      if(this.state.selectedFood){ 
        center={
          lat:this.state.selectedFood.lat,
          lng:this.state.selectedFood.lng
        }
      }
     
    return (
      <div className="app">
        <div className="main">
            <div className="search">
              <input 
                type="text"
                placeholder="search"
                value={this.state.search}
                onChange={this.handleSearch}/>
            </div>
            <div className="foods">
                {
                  this.state.foods.map((foods)=>{
                    return <Food key={foods.name} 
                                 food={foods}
                                 selectFood={this.selectfood}/>
                  })
                }
            </div>
        </div>

        <div className="map">
                <GoogleMapReact
                  center={center}
                  defaultZoom={11}>
                  {
                  this.state.foods.map((foods)=>{
                    return <MarkerPlace 
                              key={foods.name} 
                              lat={foods.lat} 
                              lng={foods.lng} 
                              text={foods.price}
                              selectedMarker={foods===this.state.selectedFood}/>
                  })
                  }
                  </GoogleMapReact>
        </div> 
      </div>

      
    );
  }
}

export default App;
