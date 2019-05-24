import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./service/ClimaTempoAPI";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(res) {
    API.getCidades('São Paulo', 'SP').then(res => {
      console.log('res', res);
      this.setState({text: res.data[0].name});
    }).catch();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.text}</p>

          <button onClick={this.onChange}>Click Me!</button>
        </header>
      </div>
    )
  }
}

export default App;
