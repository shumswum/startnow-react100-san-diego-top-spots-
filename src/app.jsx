import React, { Component } from "react";
import axios from "axios";
import Topspot from "./topspot.jsx";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    axios
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  renderTopspot(topspot) {
    return (
      <Topspot
        key={topspot.id}
        name={topspot.name}
        description={topspot.description}
        location={topspot.location}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="jumbotron huge-header">
              <h1>San Diego Top Spots</h1>
              <p>
                A list of the top 30 places to see in San Diego, California.
              </p>
            </div>
          </div>
        </div>
        {this.state.topspots.map(this.renderTopspot)}
        {/* <pre>{ JSON.stringify(this.state.topspots, null, 2) }</pre> */}
      </div>
    );
  }
}

export default App;
