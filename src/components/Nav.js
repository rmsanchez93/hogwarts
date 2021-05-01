import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" onClick={props.resetHogs}/>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
      <br/>
      <button onClick={props.sortByWeight}>Sort by Weight(heaviest)</button>
      <button onClick={props.sortByName}>Sort by Name</button>
      <button onClick={props.theGreasiest}>Gimme your greasiest pigs</button>
    </div>
  );
};

export default Nav;
