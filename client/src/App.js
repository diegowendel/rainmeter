import React, { Component, Fragment } from 'react';
import './App.css';
import API from './service/ClimaTempoAPI';
import { CitySelect, StateSelect } from './components/select';
import ForecastPanel from './components/forecast/ForecastPanel';

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
    API.getCitiesFromState(state).then(res => {
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
    API.getForecastSevenDays(this.state.selectedCity.id).then(res => {
      console.log('WEATHER', res);
      this.setState({forecast: res.data});
    }).catch(/* todo */);
  }

  render() {
    return (
      <div className="container">
        <header className="">

          <StateSelect onChange={this.onChange}
            value={this.state.selectedState} />

          <CitySelect
            isDisabled={!this.state.selectedState}
            isLoading={this.state.loadingCities}
            onChange={this.onChange}
            options={this.state.cities}
            value={this.state.selectedCity} />

          {this.state.forecast &&
            <ForecastPanel
              forecast={this.state.forecast}
            />
          }

          <button onClick={this.onPress}>Click Me!</button>
        </header>
      </div>
    )
  }
}

export default App;
