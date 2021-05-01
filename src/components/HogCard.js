import React from "react";

class HogCard extends React.Component {
  state = {
    show: false,
  };

  toggleHog = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    //format hog name
    let formattedName = this.props.hog.name.toLowerCase().replace(/ /g, "_");
    //require image
    let newImage = require(`../hog-imgs/${formattedName}.jpg`);

    return (
      <div className="ui eight wide column">
        <div className={this.state.show === false ? "pigTile minPigTile ui eight wide column" : "pigTile maxPigTile ui eight wide column"}>
          <h2>{this.props.hog.name}</h2>
          <img
            src={newImage}
            style={{ width: "50%" }}
            onClick={this.toggleHog}
          ></img>
          {this.state.show === true ? (
            <div>
              <p>
                Highest Medal Achieved:
                {this.props.hog["highest medal achieved"]}
              </p>
              {this.props.hog.greased ? <p>Greasy</p> : <p>Not greased, yet</p>}
              <p>Speciality: {this.props.hog.specialty}</p>
              <p>Weight: {this.props.hog.weight}</p>
            </div>
          ) : null}
          <br/>

          <button onClick={() => this.props.banishHog(this.props.hog)}>
            Banish Me
          </button>
        </div>
      </div>
    );
  }
}

export default HogCard;
