import React from "react";

//webpacks implementations - @ankitjpk
import "./food.css";

class Food extends React.Component{
    handleClick = () => {
        //Calling the parent methods SelectedFood -@ankitjpk
        this.props.selectFood(this.props.food);
    }

    render() {
        const title = this.props.food.price + " - " + this.props.food.name;
        //Template Literals in ES6 -@ankitjpk
        const style = {
            backgroundImage : `url('${this.props.food.imageUrl}')`
        };
        return(
            <div className="food" onClick={this.handleClick}>
                <div className="food-picture" style={style}></div>
                <div className="food-title">{title}</div>
            </div> 
        );
    }
}
  

export default Food;