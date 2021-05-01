import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogsContainer from "./HogsContainer";

class App extends Component {
  state={
    hogs: hogs,
    banishedHogs: []
  }

  banishHog = (hog) =>{
    this.setState({
      banishedHogs:[...this.state.banishedHogs, hog]
    })
  }

  sortByWeight = () => {
    // console.log('sorting')
    let sortedWeightHogs = this.state.hogs.sort((hog1, hog2) => hog1.weight - hog2.weight ).reverse()
    // console.log(sortedWeightHogs)
    this.setState({hogs: sortedWeightHogs})
  }
  
  sortByName = () => {
    // console.log('sort by name')
    let sortedNameHogs = this.state.hogs.sort((hog1, hog2)=> hog1.name.localeCompare(hog2.name))
    // console.log(sortedNameHogs)
    this.setState({hogs: sortedNameHogs})

  }
  theGreasiest =()=>{
    //goood luuuuck
    let sortedGreasedHogs = this.state.hogs.filter(hog => hog.greased === true)
    //are we sort by greased??? 
    //tristons on to something
    //correct
    //now what?
    this.setState({
      hogs:sortedGreasedHogs
    })
    
  }

  resetHogs = () =>{
    this.setState({
      hogs:hogs, 
      banishedHogs:[]
    })
  }
  render() {
    let hogArr = this.state.hogs.filter(hog => this.state.banishedHogs.indexOf(hog) == -1)
    return (
      <div className="App">
        <Nav  sortByWeight={this.sortByWeight} sortByName={this.sortByName} theGreasiest={this.theGreasiest} resetHogs={this.resetHogs}/>
        <HogsContainer hogs={hogArr} banishHog ={this.banishHog}/>
      </div>
    );
  }
}

export default App;
