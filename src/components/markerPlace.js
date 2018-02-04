import React from "react";
import "./markerPlace.css";

class MarkerPlace extends React.Component{
    render(){
        let classes="marker";
        if(this.props.selectedMarker){
            classes+=" selected";
        }

        return(
            <div className={classes}>
            {this.props.text}
            </div>
        );
    } 
}

export default MarkerPlace;