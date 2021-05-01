import React, { Component } from "react";
import HogCard from './HogCard'

class HogsContainer extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="ui grid container">
        {this.props.hogs.map((hog)=>{
          return <HogCard hog={hog} banishHog ={this.props.banishHog}/>
        })}
      </div>
    );
  }
}

export default HogsContainer;
