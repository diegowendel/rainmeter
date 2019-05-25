import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./service/ClimaTempoAPI";
import Select from "react-select";
import { stateOptions } from './data/Data';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: undefined,
      forecast: undefined,
      loadingCities: undefined,
      selectedCity: undefined,
      selectedState: undefined,
      text: undefined
    };

    this.findCities = this.findCities.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  findCities(state) {
    this.setState({loadingCities: true});
    console.log(state);
    API.getCitiesFromState(state).then(res => {
      console.log('res', res.data);
      this.setState({
        cities : res.data,
        loadingCities: false
      });
    }).catch(/*todo*/);
  }

  onChange(propertyName, property) {
    if(property && propertyName === "selectedState") {
      this.findCities(property.value);
    }

    this.setState({ [propertyName]: property });
  }

  onPress() {
    console.log('this.state.selectedCity',this.state.selectedCity)
    API.getWeatherByCity(this.state.selectedCity.id).then(res => {
      console.log('WEATHER', res);
      this.setState({forecast: res.data});
    }).catch(/* todo */);
  }

  render() {
    return (
      <div className="container">
        <header className="">
          <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name="color"
            options={stateOptions}
            onChange={(selectedState) => this.onChange("selectedState", selectedState)}
            value={this.state.selectedState}
            placeholder="Selecione seu estado..."
          />

          <Select
            className="basic-single"
            classNamePrefix="select"
            isDisabled={!this.state.selectedState}
            isLoading={this.state.loadingCities}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name="color"
            getOptionLabel={(option) => option.name}
            getOptionValue={(option) => option.id}
            options={this.state.cities}
            onChange={(selectedCity) => this.onChange("selectedCity", selectedCity)}
            value={this.state.selectedCity}
            placeholder="Selecione sua cidade..."
          />

          {this.state.forecast &&
            <Fragment>
              <p>Tempo em {this.state.forecast.name}</p>
              <p>Condição: {this.state.forecast.data.condition}</p>
              <p>Temperatura: {this.state.forecast.data.temperature}</p>
            </Fragment>
          }

          <button onClick={this.onPress}>Click Me!</button>
        </header>
      </div>
    )
  }
}

export default App;
