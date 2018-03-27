import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import MonzoRequest from './components/monzo';

class App extends Component {
  constructor(props) {
    super(props)

    // this.state = {
    //   videos: [],
    //   selectedVideo: null
    //  };

  }

  render() {

    return (
      <div>
      <h1>test</h1>
        <MonzoRequest />
      </div>
    );
  }
}

 ReactDOM.render(<App />, document.querySelector('.container'));
