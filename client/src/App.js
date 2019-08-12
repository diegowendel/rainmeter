import React, { Component, Fragment } from 'react';
import './App.css';
import API from './service/ClimaTempoAPI';
import { CitySelect, StateSelect } from './components/select';
import ForecastPanel from './components/forecast/ForecastPanel';
import ConversionUtils from './utils/ConversionUtils';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cities: undefined,
      // forecast: undefined,
      forecast: {
        "id": 3849,
        "name": "Jacareí",
        "state": "SP",
        "country": "BR  ",
        "meteogram": "http://apiadvisor.climatempo.com.br/api/v1/meteogram/locale/3849?token=39a8dc378d9dff0245c62b36c9ebfc86&hash=6c07409973f99c8b9c840b111671aa9a",
        "data": [
          {
            "date": "2019-08-11",
            "date_br": "11/08/2019",
            "humidity": {
              "min": 46,
              "max": 96,
              "dawn": {
                "min": 46,
                "max": 61
              },
              "morning": {
                "min": 75,
                "max": 88
              },
              "afternoon": {
                "min": 71,
                "max": 82
              },
              "night": {
                "min": 89,
                "max": 96
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 9,
              "velocity_max": 15,
              "velocity_avg": 12,
              "gust_max": 26,
              "direction_degrees": 218,
              "direction": "SSW",
              "dawn": {
                "direction": "WNW",
                "direction_degrees": 310,
                "gust_max": 24,
                "velocity_max": 14,
                "velocity_avg": 14
              },
              "morning": {
                "direction": "SW",
                "direction_degrees": 251,
                "gust_max": 26,
                "velocity_max": 14,
                "velocity_avg": 12
              },
              "afternoon": {
                "direction": "SSE",
                "direction_degrees": 175,
                "gust_max": 16,
                "velocity_max": 15,
                "velocity_avg": 12
              },
              "night": {
                "direction": "SE",
                "direction_degrees": 140,
                "gust_max": 17,
                "velocity_max": 15,
                "velocity_avg": 12
              }
            },
            "thermal_sensation": {
              "min": 12,
              "max": 28
            },
            "text_icon": {
              "icon": {
                "dawn": "2n",
                "morning": "2",
                "afternoon": "2",
                "night": "2n",
                "day": "2"
              },
              "text": {
                "pt": "Sol com algumas nuvens",
                "en": "Mostly sunny.",
                "es": "Sol con algunas nubes. No llueve.",
                "phrase": {
                  "reduced": "Sol com algumas nuvens. Não chove.",
                  "morning": "Sol com algumas nuvens",
                  "afternoon": "Sol com algumas nuvens",
                  "night": "Algumas nuvens",
                  "dawn": "Algumas nuvens"
                }
              }
            },
            "temperature": {
              "min": 12,
              "max": 26,
              "dawn": {
                "min": 18,
                "max": 23,
                "minf": 64,
                "maxf": 73
              },
              "morning": {
                "min": 12,
                "max": 18,
                "minf": 54,
                "maxf": 64
              },
              "afternoon": {
                "min": 19,
                "max": 26,
                "minf": 66,
                "maxf": 79
              },
              "night": {
                "min": 15,
                "max": 26,
                "minf": 59,
                "maxf": 79
              },
              "minf": 54,
              "maxf": 79
            },
            "cloud_coverage": {
              "low": 2029.2,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 733.3,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 4616.7,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 2766.7,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:32:00",
              "sunset": "17:45:00"
            }
          },
          {
            "date": "2019-08-12",
            "date_br": "12/08/2019",
            "humidity": {
              "min": 33,
              "max": 95,
              "dawn": {
                "min": 81,
                "max": 95
              },
              "morning": {
                "min": 43,
                "max": 78
              },
              "afternoon": {
                "min": 33,
                "max": 49
              },
              "night": {
                "min": 48,
                "max": 53
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 5,
              "velocity_max": 24,
              "velocity_avg": 13,
              "gust_max": 33,
              "direction_degrees": 9,
              "direction": "N",
              "dawn": {
                "direction": "ENE",
                "direction_degrees": 62,
                "gust_max": 20,
                "velocity_max": 13,
                "velocity_avg": 11
              },
              "morning": {
                "direction": "N",
                "direction_degrees": 8,
                "gust_max": 33,
                "velocity_max": 24,
                "velocity_avg": 17
              },
              "afternoon": {
                "direction": "NNW",
                "direction_degrees": 346,
                "gust_max": 32,
                "velocity_max": 23,
                "velocity_avg": 15
              },
              "night": {
                "direction": "N",
                "direction_degrees": 354,
                "gust_max": 26,
                "velocity_max": 16,
                "velocity_avg": 10
              }
            },
            "thermal_sensation": {
              "min": 13,
              "max": 29
            },
            "text_icon": {
              "icon": {
                "dawn": "2n",
                "morning": "2",
                "afternoon": "2",
                "night": "2n",
                "day": "2"
              },
              "text": {
                "pt": "Sol com algumas nuvens",
                "en": "Mostly sunny.",
                "es": "Sol con algunas nubes. No llueve.",
                "phrase": {
                  "reduced": "Sol com algumas nuvens. Não chove.",
                  "morning": "Sol com algumas nuvens",
                  "afternoon": "Sol com algumas nuvens",
                  "night": "Algumas nuvens",
                  "dawn": "Algumas nuvens"
                }
              }
            },
            "temperature": {
              "min": 13,
              "max": 29,
              "dawn": {
                "min": 14,
                "max": 14,
                "minf": 57,
                "maxf": 57
              },
              "morning": {
                "min": 13,
                "max": 19,
                "minf": 55,
                "maxf": 66
              },
              "afternoon": {
                "min": 22,
                "max": 29,
                "minf": 72,
                "maxf": 84
              },
              "night": {
                "min": 18,
                "max": 29,
                "minf": 64,
                "maxf": 84
              },
              "minf": 55,
              "maxf": 84
            },
            "cloud_coverage": {
              "low": 1391.7,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 5566.7,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 0,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:31:00",
              "sunset": "17:46:00"
            }
          },
          {
            "date": "2019-08-13",
            "date_br": "13/08/2019",
            "humidity": {
              "min": 50,
              "max": 89,
              "dawn": {
                "min": 54,
                "max": 56
              },
              "morning": {
                "min": 56,
                "max": 73
              },
              "afternoon": {
                "min": 75,
                "max": 88
              },
              "night": {
                "min": 86,
                "max": 89
              }
            },
            "rain": {
              "probability": 80,
              "precipitation": 8
            },
            "wind": {
              "velocity_min": 9,
              "velocity_max": 23,
              "velocity_avg": 19,
              "gust_max": 31,
              "direction_degrees": 229,
              "direction": "SW",
              "dawn": {
                "direction": "NW",
                "direction_degrees": 336,
                "gust_max": 28,
                "velocity_max": 18,
                "velocity_avg": 17
              },
              "morning": {
                "direction": "NW",
                "direction_degrees": 320,
                "gust_max": 29,
                "velocity_max": 19,
                "velocity_avg": 16
              },
              "afternoon": {
                "direction": "S",
                "direction_degrees": 192,
                "gust_max": 28,
                "velocity_max": 23,
                "velocity_avg": 21
              },
              "night": {
                "direction": "SSE",
                "direction_degrees": 178,
                "gust_max": 31,
                "velocity_max": 22,
                "velocity_avg": 21
              }
            },
            "thermal_sensation": {
              "min": 14,
              "max": 28
            },
            "text_icon": {
              "icon": {
                "dawn": "2n",
                "morning": "2",
                "afternoon": "4t",
                "night": "4tn",
                "day": "4t"
              },
              "text": {
                "pt": "Sol, pancadas de chuva e trovoadas.",
                "en": null,
                "es": null,
                "phrase": {
                  "reduced": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                  "morning": "Sol com algumas nuvens",
                  "afternoon": "Sol, pancadas de chuva e trovoadas.",
                  "night": "Muitas nuvens, chuva e raios",
                  "dawn": "Algumas nuvens"
                }
              }
            },
            "temperature": {
              "min": 14,
              "max": 26,
              "dawn": {
                "min": 16,
                "max": 18,
                "minf": 61,
                "maxf": 64
              },
              "morning": {
                "min": 15,
                "max": 21,
                "minf": 59,
                "maxf": 70
              },
              "afternoon": {
                "min": 21,
                "max": 26,
                "minf": 70,
                "maxf": 79
              },
              "night": {
                "min": 14,
                "max": 19,
                "minf": 57,
                "maxf": 66
              },
              "minf": 57,
              "maxf": 79
            },
            "cloud_coverage": {
              "low": 3937.5,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 5750,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 10000,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:30:00",
              "sunset": "17:46:00"
            }
          },
          {
            "date": "2019-08-14",
            "date_br": "14/08/2019",
            "humidity": {
              "min": 51,
              "max": 89,
              "dawn": {
                "min": 82,
                "max": 84
              },
              "morning": {
                "min": 61,
                "max": 84
              },
              "afternoon": {
                "min": 51,
                "max": 59
              },
              "night": {
                "min": 70,
                "max": 83
              }
            },
            "rain": {
              "probability": 90,
              "precipitation": 10
            },
            "wind": {
              "velocity_min": 11,
              "velocity_max": 23,
              "velocity_avg": 18,
              "gust_max": 31,
              "direction_degrees": 167,
              "direction": "SSE",
              "dawn": {
                "direction": "SSE",
                "direction_degrees": 165,
                "gust_max": 30,
                "velocity_max": 20,
                "velocity_avg": 18
              },
              "morning": {
                "direction": "SSE",
                "direction_degrees": 173,
                "gust_max": 31,
                "velocity_max": 18,
                "velocity_avg": 17
              },
              "afternoon": {
                "direction": "SSE",
                "direction_degrees": 172,
                "gust_max": 27,
                "velocity_max": 19,
                "velocity_avg": 18
              },
              "night": {
                "direction": "SSE",
                "direction_degrees": 157,
                "gust_max": 29,
                "velocity_max": 24,
                "velocity_avg": 18
              }
            },
            "thermal_sensation": {
              "min": 6,
              "max": 15
            },
            "text_icon": {
              "icon": {
                "dawn": "5n",
                "morning": "5",
                "afternoon": "5",
                "night": "5n",
                "day": "5"
              },
              "text": {
                "pt": "Chuvoso",
                "en": "Rainy.",
                "es": "Lluvioso durante el día y en la noche.",
                "phrase": {
                  "reduced": "Chuvoso durante o dia e à noite.",
                  "morning": "Chuvoso",
                  "afternoon": "Chuvoso",
                  "night": "Chuvoso",
                  "dawn": "Chuvoso"
                }
              }
            },
            "temperature": {
              "min": 10,
              "max": 15,
              "dawn": {
                "min": 14,
                "max": 15,
                "minf": 57,
                "maxf": 59
              },
              "morning": {
                "min": 12,
                "max": 13,
                "minf": 54,
                "maxf": 55
              },
              "afternoon": {
                "min": 12,
                "max": 14,
                "minf": 54,
                "maxf": 57
              },
              "night": {
                "min": 10,
                "max": 14,
                "minf": 50,
                "maxf": 57
              },
              "minf": 50,
              "maxf": 59
            },
            "cloud_coverage": {
              "low": 6104.2,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 9816.7,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 9450,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 2400,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 2750,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:30:00",
              "sunset": "17:47:00"
            }
          },
          {
            "date": "2019-08-15",
            "date_br": "15/08/2019",
            "humidity": {
              "min": 52,
              "max": 89,
              "dawn": {
                "min": 71,
                "max": 89
              },
              "morning": {
                "min": 57,
                "max": 89
              },
              "afternoon": {
                "min": 52,
                "max": 54
              },
              "night": {
                "min": 68,
                "max": 90
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 11,
              "velocity_max": 22,
              "velocity_avg": 16,
              "gust_max": 30,
              "direction_degrees": 100,
              "direction": "E",
              "dawn": {
                "direction": "ESE",
                "direction_degrees": 124,
                "gust_max": 28,
                "velocity_max": 20,
                "velocity_avg": 16
              },
              "morning": {
                "direction": "ENE",
                "direction_degrees": 88,
                "gust_max": 30,
                "velocity_max": 22,
                "velocity_avg": 13
              },
              "afternoon": {
                "direction": "E",
                "direction_degrees": 93,
                "gust_max": 29,
                "velocity_max": 21,
                "velocity_avg": 19
              },
              "night": {
                "direction": "E",
                "direction_degrees": 95,
                "gust_max": 22,
                "velocity_max": 17,
                "velocity_avg": 15
              }
            },
            "thermal_sensation": {
              "min": 5,
              "max": 21
            },
            "text_icon": {
              "icon": {
                "dawn": "2n",
                "morning": "2",
                "afternoon": "2",
                "night": "2n",
                "day": "2"
              },
              "text": {
                "pt": "Sol com algumas nuvens",
                "en": "Mostly sunny.",
                "es": "Sol con algunas nubes. No llueve.",
                "phrase": {
                  "reduced": "Sol com algumas nuvens. Não chove.",
                  "morning": "Sol com algumas nuvens",
                  "afternoon": "Sol com algumas nuvens",
                  "night": "Algumas nuvens",
                  "dawn": "Algumas nuvens"
                }
              }
            },
            "temperature": {
              "min": 9,
              "max": 21,
              "dawn": {
                "min": 11,
                "max": 15,
                "minf": 52,
                "maxf": 59
              },
              "morning": {
                "min": 9,
                "max": 15,
                "minf": 48,
                "maxf": 59
              },
              "afternoon": {
                "min": 16,
                "max": 21,
                "minf": 61,
                "maxf": 70
              },
              "night": {
                "min": 14,
                "max": 21,
                "minf": 57,
                "maxf": 70
              },
              "minf": 48,
              "maxf": 70
            },
            "cloud_coverage": {
              "low": 1879.2,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 2016.7,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 1283.3,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 3850,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 366.7,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:29:00",
              "sunset": "17:47:00"
            }
          },
          {
            "date": "2019-08-16",
            "date_br": "16/08/2019",
            "humidity": {
              "min": 27,
              "max": 91,
              "dawn": {
                "min": 86,
                "max": 91
              },
              "morning": {
                "min": 36,
                "max": 84
              },
              "afternoon": {
                "min": 27,
                "max": 43
              },
              "night": {
                "min": 41,
                "max": 60
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 6,
              "velocity_max": 19,
              "velocity_avg": 13,
              "gust_max": 25,
              "direction_degrees": 44,
              "direction": "NNE",
              "dawn": {
                "direction": "NE",
                "direction_degrees": 52,
                "gust_max": 23,
                "velocity_max": 16,
                "velocity_avg": 15
              },
              "morning": {
                "direction": "NNE",
                "direction_degrees": 34,
                "gust_max": 25,
                "velocity_max": 20,
                "velocity_avg": 15
              },
              "afternoon": {
                "direction": "NE",
                "direction_degrees": 45,
                "gust_max": 23,
                "velocity_max": 17,
                "velocity_avg": 11
              },
              "night": {
                "direction": "NE",
                "direction_degrees": 46,
                "gust_max": 22,
                "velocity_max": 13,
                "velocity_avg": 9
              }
            },
            "thermal_sensation": {
              "min": 3,
              "max": 23
            },
            "text_icon": {
              "icon": {
                "dawn": "2n",
                "morning": "2",
                "afternoon": "2",
                "night": "2n",
                "day": "2"
              },
              "text": {
                "pt": "Sol com algumas nuvens",
                "en": "Mostly sunny.",
                "es": "Sol con algunas nubes. No llueve.",
                "phrase": {
                  "reduced": "Sol com algumas nuvens. Não chove.",
                  "morning": "Sol com algumas nuvens",
                  "afternoon": "Sol com algumas nuvens",
                  "night": "Algumas nuvens",
                  "dawn": "Algumas nuvens"
                }
              }
            },
            "temperature": {
              "min": 7,
              "max": 23,
              "dawn": {
                "min": 8,
                "max": 11,
                "minf": 46,
                "maxf": 52
              },
              "morning": {
                "min": 7,
                "max": 12,
                "minf": 45,
                "maxf": 54
              },
              "afternoon": {
                "min": 14,
                "max": 22,
                "minf": 57,
                "maxf": 72
              },
              "night": {
                "min": 15,
                "max": 23,
                "minf": 59,
                "maxf": 73
              },
              "minf": 45,
              "maxf": 73
            },
            "cloud_coverage": {
              "low": 0,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 0,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:28:00",
              "sunset": "17:47:00"
            }
          },
          {
            "date": "2019-08-17",
            "date_br": "17/08/2019",
            "humidity": {
              "min": 28,
              "max": 78,
              "dawn": {
                "min": 62,
                "max": 75
              },
              "morning": {
                "min": 39,
                "max": 79
              },
              "afternoon": {
                "min": 28,
                "max": 40
              },
              "night": {
                "min": 43,
                "max": 45
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 9,
              "velocity_max": 22,
              "velocity_avg": 15,
              "gust_max": 37,
              "direction_degrees": 359,
              "direction": "NNW",
              "dawn": {
                "direction": "NNE",
                "direction_degrees": 17,
                "gust_max": 26,
                "velocity_max": 16,
                "velocity_avg": 14
              },
              "morning": {
                "direction": "NNW",
                "direction_degrees": 356,
                "gust_max": 37,
                "velocity_max": 22,
                "velocity_avg": 19
              },
              "afternoon": {
                "direction": "NNW",
                "direction_degrees": 348,
                "gust_max": 26,
                "velocity_max": 19,
                "velocity_avg": 13
              },
              "night": {
                "direction": "NNW",
                "direction_degrees": 354,
                "gust_max": 29,
                "velocity_max": 19,
                "velocity_avg": 13
              }
            },
            "thermal_sensation": {
              "min": 5,
              "max": 25
            },
            "text_icon": {
              "icon": {
                "dawn": "1n",
                "morning": "1",
                "afternoon": "1",
                "night": "1n",
                "day": "1"
              },
              "text": {
                "pt": "Sol",
                "en": "Sunny",
                "es": "Sol durante todo el día sin nubes en el cielo. Noche despejada y sin nubes.",
                "phrase": {
                  "reduced": "Sol o dia todo sem nuvens no céu. Noite de tempo aberto ainda sem nuvens.",
                  "morning": "Sol",
                  "afternoon": "Sol",
                  "night": "Tempo aberto",
                  "dawn": "Tempo aberto"
                }
              }
            },
            "temperature": {
              "min": 9,
              "max": 25,
              "dawn": {
                "min": 10,
                "max": 13,
                "minf": 50,
                "maxf": 55
              },
              "morning": {
                "min": 9,
                "max": 15,
                "minf": 48,
                "maxf": 59
              },
              "afternoon": {
                "min": 18,
                "max": 25,
                "minf": 64,
                "maxf": 77
              },
              "night": {
                "min": 17,
                "max": 25,
                "minf": 63,
                "maxf": 77
              },
              "minf": 48,
              "maxf": 77
            },
            "cloud_coverage": {
              "low": 0,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 0,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:27:00",
              "sunset": "17:48:00"
            }
          }
        ]
      },
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
      let forecast = res.data;
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
        return day;
      });
      forecast.data = data;
      this.setState({ forecast });
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
            <Fragment>
              <ForecastPanel forecast={this.state.forecast}/>
              <a className="link-climatempo" href="https://www.climatempo.com.br/">climatempo.com.br</a>
            </Fragment>
          }

          <button onClick={this.onPress}>Click Me!</button>
        </header>
      </div>
    )
  }
}

export default App;
