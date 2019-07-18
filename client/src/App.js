import React, { Component } from 'react';
import './App.css';
import API from './service/ClimaTempoAPI';
import { CitySelect, StateSelect } from './components/select';
import ForecastPanel from './components/forecast/ForecastPanel';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: undefined,
      // forecast: undefined,
      forecast: {"id":3849,"name":"Jacare\u00ed","state":"SP","country":"BR  ","meteogram":"http://apiadvisor.climatempo.com.br/api/v1/meteogram/locale/3849?token=39a8dc378d9dff0245c62b36c9ebfc86&hash=6c07409973f99c8b9c840b111671aa9a","data":[{"date":"2019-07-18","date_br":"18/07/2019","humidity":{"min":52,"max":93,"dawn":{"min":88,"max":93},"morning":{"min":58,"max":90},"afternoon":{"min":52,"max":64},"night":{"min":71,"max":89}},"rain":{"probability":0,"precipitation":0},"wind":{"velocity_min":11,"velocity_max":22,"velocity_avg":16,"gust_max":34,"direction_degrees":77,"direction":"ENE","dawn":{"direction":"ENE","direction_degrees":75,"gust_max":20,"velocity_max":14,"velocity_avg":12},"morning":{"direction":"NE","direction_degrees":64,"gust_max":27,"velocity_max":20,"velocity_avg":13},"afternoon":{"direction":"ENE","direction_degrees":75,"gust_max":29,"velocity_max":22,"velocity_avg":20},"night":{"direction":"ENE","direction_degrees":89,"gust_max":34,"velocity_max":19,"velocity_avg":17}},"thermal_sensation":{"min":2,"max":19},"text_icon":{"icon":{"dawn":"9n","morning":"9","afternoon":"2","night":"2n","day":"2"},"text":{"pt":"Sol com algumas nuvens","en":"Mostly sunny.","es":"Sol con algunas nubes. No llueve.","phrase":{"reduced":"Dia de sol, com nevoeiro ao amanhecer. As nuvens aumentam no decorrer da tarde.","morning":"Nevoeiro","afternoon":"Sol com algumas nuvens","night":"Algumas nuvens","dawn":"Nevoeiro"}}},"temperature":{"min":6,"max":19,"dawn":{"min":7,"max":11},"morning":{"min":6,"max":13},"afternoon":{"min":15,"max":19},"night":{"min":11,"max":19}},"cloud_coverage":{"low":1054.2,"mid":0,"high":0,"dawn":{"low":916.7,"mid":0,"high":0},"morning":{"low":733.3,"mid":0,"high":0},"afternoon":{"low":2200,"mid":0,"high":0},"night":{"low":366.7,"mid":0,"high":0}},"sun":{"sunrise":"06:44:00","sunset":"17:35:00"}},{"date":"2019-07-19","date_br":"19/07/2019","humidity":{"min":43,"max":89,"dawn":{"min":87,"max":89},"morning":{"min":50,"max":87},"afternoon":{"min":43,"max":61},"night":{"min":63,"max":73}},"rain":{"probability":0,"precipitation":0},"wind":{"velocity_min":7,"velocity_max":21,"velocity_avg":14,"gust_max":33,"direction_degrees":51,"direction":"NE","dawn":{"direction":"NE","direction_degrees":57,"gust_max":33,"velocity_max":16,"velocity_avg":15},"morning":{"direction":"NNE","direction_degrees":39,"gust_max":28,"velocity_max":21,"velocity_avg":15},"afternoon":{"direction":"NE","direction_degrees":48,"gust_max":27,"velocity_max":20,"velocity_avg":14},"night":{"direction":"ENE","direction_degrees":64,"gust_max":23,"velocity_max":14,"velocity_avg":11}},"thermal_sensation":{"min":4,"max":21},"text_icon":{"icon":{"dawn":"2n","morning":"2","afternoon":"2","night":"2n","day":"2"},"text":{"pt":"Sol com algumas nuvens","en":"Mostly sunny.","es":"Sol con algunas nubes. No llueve.","phrase":{"reduced":"Sol com algumas nuvens. N\u00e3o chove.","morning":"Sol com algumas nuvens","afternoon":"Sol com algumas nuvens","night":"Algumas nuvens","dawn":"Algumas nuvens"}}},"temperature":{"min":8,"max":21,"dawn":{"min":9,"max":11},"morning":{"min":8,"max":12},"afternoon":{"min":15,"max":21},"night":{"min":13,"max":21}},"cloud_coverage":{"low":0,"mid":0,"high":0,"dawn":{"low":0,"mid":0,"high":0},"morning":{"low":0,"mid":0,"high":0},"afternoon":{"low":0,"mid":0,"high":0},"night":{"low":0,"mid":0,"high":0}},"sun":{"sunrise":"06:43:00","sunset":"17:36:00"}},{"date":"2019-07-20","date_br":"20/07/2019","humidity":{"min":42,"max":84,"dawn":{"min":76,"max":83},"morning":{"min":49,"max":84},"afternoon":{"min":42,"max":61},"night":{"min":63,"max":74}},"rain":{"probability":0,"precipitation":0},"wind":{"velocity_min":8,"velocity_max":21,"velocity_avg":15,"gust_max":30,"direction_degrees":26,"direction":"NNE","dawn":{"direction":"NNE","direction_degrees":33,"gust_max":24,"velocity_max":15,"velocity_avg":14},"morning":{"direction":"N","direction_degrees":13,"gust_max":30,"velocity_max":21,"velocity_avg":17},"afternoon":{"direction":"N","direction_degrees":21,"gust_max":30,"velocity_max":20,"velocity_avg":16},"night":{"direction":"NNE","direction_degrees":46,"gust_max":22,"velocity_max":13,"velocity_avg":12}},"thermal_sensation":{"min":6,"max":22},"text_icon":{"icon":{"dawn":"2n","morning":"2","afternoon":"2","night":"2n","day":"2"},"text":{"pt":"Sol com algumas nuvens","en":"Mostly sunny.","es":"Sol con algunas nubes. No llueve.","phrase":{"reduced":"Sol com algumas nuvens. N\u00e3o chove.","morning":"Sol com algumas nuvens","afternoon":"Sol com algumas nuvens","night":"Algumas nuvens","dawn":"Algumas nuvens"}}},"temperature":{"min":10,"max":22,"dawn":{"min":12,"max":14},"morning":{"min":10,"max":14},"afternoon":{"min":17,"max":22},"night":{"min":15,"max":22}},"cloud_coverage":{"low":0,"mid":0,"high":0,"dawn":{"low":0,"mid":0,"high":0},"morning":{"low":0,"mid":0,"high":0},"afternoon":{"low":0,"mid":0,"high":0},"night":{"low":0,"mid":0,"high":0}},"sun":{"sunrise":"06:43:00","sunset":"17:36:00"}},{"date":"2019-07-21","date_br":"21/07/2019","humidity":{"min":45,"max":86,"dawn":{"min":75,"max":86},"morning":{"min":50,"max":85},"afternoon":{"min":45,"max":61},"night":{"min":66,"max":70}},"rain":{"probability":0,"precipitation":0},"wind":{"velocity_min":12,"velocity_max":22,"velocity_avg":16,"gust_max":32,"direction_degrees":23,"direction":"NNE","dawn":{"direction":"NNE","direction_degrees":27,"gust_max":25,"velocity_max":16,"velocity_avg":15},"morning":{"direction":"N","direction_degrees":19,"gust_max":32,"velocity_max":22,"velocity_avg":17},"afternoon":{"direction":"N","direction_degrees":18,"gust_max":31,"velocity_max":21,"velocity_avg":19},"night":{"direction":"NNE","direction_degrees":30,"gust_max":25,"velocity_max":18,"velocity_avg":15}},"thermal_sensation":{"min":11,"max":23},"text_icon":{"icon":{"dawn":"2n","morning":"2","afternoon":"2","night":"2n","day":"2"},"text":{"pt":"Sol com algumas nuvens","en":"Mostly sunny.","es":"Sol con algunas nubes. No llueve.","phrase":{"reduced":"Sol com algumas nuvens. N\u00e3o chove.","morning":"Sol com algumas nuvens","afternoon":"Sol com algumas nuvens","night":"Algumas nuvens","dawn":"Algumas nuvens"}}},"temperature":{"min":11,"max":23,"dawn":{"min":12,"max":14},"morning":{"min":11,"max":15},"afternoon":{"min":18,"max":23},"night":{"min":16,"max":23}},"cloud_coverage":{"low":91.7,"mid":0,"high":0,"dawn":{"low":0,"mid":0,"high":0},"morning":{"low":0,"mid":0,"high":0},"afternoon":{"low":0,"mid":0,"high":0},"night":{"low":366.7,"mid":0,"high":0}},"sun":{"sunrise":"06:43:00","sunset":"17:37:00"}},{"date":"2019-07-22","date_br":"22/07/2019","humidity":{"min":45,"max":83,"dawn":{"min":73,"max":81},"morning":{"min":55,"max":83},"afternoon":{"min":45,"max":62},"night":{"min":63,"max":68}},"rain":{"probability":0,"precipitation":0},"wind":{"velocity_min":6,"velocity_max":24,"velocity_avg":16,"gust_max":38,"direction_degrees":2,"direction":"N","dawn":{"direction":"N","direction_degrees":17,"gust_max":37,"velocity_max":17,"velocity_avg":16},"morning":{"direction":"N","direction_degrees":1,"gust_max":38,"velocity_max":24,"velocity_avg":19},"afternoon":{"direction":"NNW","direction_degrees":349,"gust_max":35,"velocity_max":24,"velocity_avg":17},"night":{"direction":"NNW","direction_degrees":1,"gust_max":26,"velocity_max":16,"velocity_avg":10}},"thermal_sensation":{"min":11,"max":24},"text_icon":{"icon":{"dawn":"2n","morning":"2","afternoon":"2","night":"2n","day":"2"},"text":{"pt":"Sol com algumas nuvens","en":"Mostly sunny.","es":"Sol con algunas nubes. No llueve.","phrase":{"reduced":"Sol com algumas nuvens. N\u00e3o chove.","morning":"Sol com algumas nuvens","afternoon":"Sol com algumas nuvens","night":"Algumas nuvens","dawn":"Algumas nuvens"}}},"temperature":{"min":11,"max":24,"dawn":{"min":12,"max":14},"morning":{"min":11,"max":15},"afternoon":{"min":18,"max":24},"night":{"min":16,"max":24}},"cloud_coverage":{"low":0,"mid":0,"high":0,"dawn":{"low":0,"mid":0,"high":0},"morning":{"low":0,"mid":0,"high":0},"afternoon":{"low":0,"mid":0,"high":0},"night":{"low":0,"mid":0,"high":0}},"sun":{"sunrise":"06:43:00","sunset":"17:37:00"}},{"date":"2019-07-23","date_br":"23/07/2019","humidity":{"min":44,"max":79,"dawn":{"min":69,"max":77},"morning":{"min":54,"max":79},"afternoon":{"min":44,"max":60},"night":{"min":61,"max":65}},"rain":{"probability":0,"precipitation":0},"wind":{"velocity_min":7,"velocity_max":22,"velocity_avg":16,"gust_max":32,"direction_degrees":353,"direction":"NNW","dawn":{"direction":"NNW","direction_degrees":348,"gust_max":27,"velocity_max":17,"velocity_avg":16},"morning":{"direction":"NNW","direction_degrees":352,"gust_max":32,"velocity_max":22,"velocity_avg":19},"afternoon":{"direction":"NNW","direction_degrees":351,"gust_max":32,"velocity_max":22,"velocity_avg":17},"night":{"direction":"N","direction_degrees":3,"gust_max":26,"velocity_max":17,"velocity_avg":12}},"thermal_sensation":{"min":13,"max":24},"text_icon":{"icon":{"dawn":"2n","morning":"2","afternoon":"2","night":"2n","day":"2"},"text":{"pt":"Sol com algumas nuvens","en":"Mostly sunny.","es":"Sol con algunas nubes. No llueve.","phrase":{"reduced":"Sol com algumas nuvens. N\u00e3o chove.","morning":"Sol com algumas nuvens","afternoon":"Sol com algumas nuvens","night":"Algumas nuvens","dawn":"Algumas nuvens"}}},"temperature":{"min":13,"max":24,"dawn":{"min":14,"max":16},"morning":{"min":13,"max":17},"afternoon":{"min":19,"max":24},"night":{"min":18,"max":24}},"cloud_coverage":{"low":0,"mid":0,"high":0,"dawn":{"low":0,"mid":0,"high":0},"morning":{"low":0,"mid":0,"high":0},"afternoon":{"low":0,"mid":0,"high":0},"night":{"low":0,"mid":0,"high":0}},"sun":{"sunrise":"06:42:00","sunset":"17:38:00"}},{"date":"2019-07-24","date_br":"24/07/2019","humidity":{"min":43,"max":85,"dawn":{"min":64,"max":69},"morning":{"min":50,"max":71},"afternoon":{"min":43,"max":60},"night":{"min":62,"max":88}},"rain":{"probability":0,"precipitation":0},"wind":{"velocity_min":2,"velocity_max":23,
      "velocity_avg":14,"gust_max":33,"direction_degrees":347,"direction":"NNW","dawn":{"direction":"NNW","direction_degrees":348,"gust_max":28,"velocity_max":17,"velocity_avg":16},"morning":{"direction":"NNW","direction_degrees":352,"gust_max":33,"velocity_max":23,"velocity_avg":19},"afternoon":{"direction":"NNW","direction_degrees":339,"gust_max":30,"velocity_max":22,"velocity_avg":15},"night":{"direction":"NW","direction_degrees":149,"gust_max":13,"velocity_max":9,"velocity_avg":6}},"thermal_sensation":{"min":14,"max":25},"text_icon":{"icon":{"dawn":"1n","morning":"1","afternoon":"1","night":"1n","day":"1"},"text":{"pt":"Sol","en":"Sunny","es":"Sol durante todo el d\u00eda sin nubes en el cielo. Noche despejada y sin nubes.","phrase":{"reduced":"Sol o dia todo sem nuvens no c\u00e9u. Noite de tempo aberto ainda sem nuvens.","morning":"Sol","afternoon":"Sol","night":"Tempo aberto","dawn":"Tempo aberto"}}},"temperature":{"min":14,"max":25,"dawn":{"min":15,"max":17},"morning":{"min":14,"max":18},"afternoon":{"min":20,"max":25},"night":{"min":15,"max":25}},"cloud_coverage":{"low":91.7,"mid":0,"high":0,"dawn":{"low":0,"mid":0,"high":0},"morning":{"low":0,"mid":0,"high":0},"afternoon":{"low":0,"mid":0,"high":0},"night":{"low":366.7,"mid":0,"high":0}},"sun":{"sunrise":"06:42:00","sunset":"17:38:00"}}]},
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
