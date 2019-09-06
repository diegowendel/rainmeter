import React, { Component, Fragment } from 'react';
import API from './service/ClimaTempoAPI';
import { CitySelect, StateSelect } from './components/select';
import ForecastPanel from './components/forecast/ForecastPanel';
import ConversionUtils from './utils/ConversionUtils';
import Spinner from './components/spinner/Spinner';
import LandingPanel from './components/landing/LandingPanel';
import LanguageToggle from './components/language/LanguageToggle';
import './styles/App.scss';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: undefined,
      forecast: undefined,
      loading: false,
      loadingCities: false,
      selectedCity: undefined,
      selectedState: undefined
    };

    this.onChange = this.onChange.bind(this);
  }

  findCities(state) {
    this.setState({loadingCities: true});
    API.getCitiesFromState(state).then(res => {
      this.setState({
        cities: res.data,
        loadingCities: false,
        selectedCity: null
      });
    }).catch(/*todo*/);
  }

  onChange(propertyName, property) {
    this.setState({ [propertyName]: property },() => {
      if(propertyName === "selectedState") {
        if (property) {
          this.findCities(property.value);
        } else {
          this.setState({
            selectedCity: null,
            selectedState: null
          });
        }
      } else if (property && propertyName === "selectedCity") {
        this.setState({ loading: true }, () => this.setData());
      }
    });
  }

  setData() {
    API.getForecastSevenDays(this.state.selectedCity.id).then(res => {
      let forecast = res.data;
      let categories = [];
      let data = forecast.data.map(day => {
        day.temperature.minf = ConversionUtils.toFahrenheit(day.temperature.min);
        day.temperature.maxf = ConversionUtils.toFahrenheit(day.temperature.max);
        day.temperature.dawn.minf = ConversionUtils.toFahrenheit(day.temperature.dawn.min);
        day.temperature.dawn.maxf = ConversionUtils.toFahrenheit(day.temperature.dawn.max);
        day.temperature.morning.minf = ConversionUtils.toFahrenheit(day.temperature.morning.min);
        day.temperature.morning.maxf = ConversionUtils.toFahrenheit(day.temperature.morning.max);
        day.temperature.afternoon.minf = ConversionUtils.toFahrenheit(day.temperature.afternoon.min);
        day.temperature.afternoon.maxf = ConversionUtils.toFahrenheit(day.temperature.afternoon.max);
        day.temperature.night.minf = ConversionUtils.toFahrenheit(day.temperature.night.min);
        day.temperature.night.maxf = ConversionUtils.toFahrenheit(day.temperature.night.max);
        day.wind.dawn.mph = ConversionUtils.toMPH(day.wind.dawn.velocity_avg);
        day.wind.morning.mph = ConversionUtils.toMPH(day.wind.morning.velocity_avg);
        day.wind.afternoon.mph = ConversionUtils.toMPH(day.wind.afternoon.velocity_avg);
        day.wind.night.mph = ConversionUtils.toMPH(day.wind.night.velocity_avg);
        categories.push('06:00');
        categories.push('12:00');
        categories.push('18:00');
        categories.push('22:00');
        return day;
      });
      forecast.data = data;
      forecast.categories = categories;
      this.setState({ forecast, loading: false });
    }).catch(/* todo */);
  }

  render() {
    const { locale, onChangeLocale } = this.props;
    return (
      <div className="container-fluid container-center">
        <header>
          <div className="flex-row mt-3">
            <img src={`${process.env.PUBLIC_URL}/img/water-drop.svg`} alt="rainmeter logo" className="logo" />
            <h3>Rainmeter</h3>
          </div>
          <LanguageToggle locale={locale} onChangeLocale={onChangeLocale} />
        </header>
        <main>
          <div>
            <StateSelect onChange={this.onChange}
              value={this.state.selectedState} />

            <CitySelect
              isDisabled={!this.state.selectedState}
              isLoading={this.state.loadingCities}
              onChange={this.onChange}
              options={this.state.cities}
              value={this.state.selectedCity} />

            {this.state.forecast ?
              <Fragment>
                <ForecastPanel forecast={this.state.forecast} locale={locale} />
                <a className="link-climatempo" href="https://www.climatempo.com.br/">climatempo.com.br</a>
              </Fragment> :
              <LandingPanel />
            }

            {
              this.state.loading && <Spinner />
            }
          </div>
        </main>
      </div>
    );
  }
}

export default App;
