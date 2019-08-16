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
            "date": "2019-08-16",
            "date_br": "16/08/2019",
            "humidity": {
              "min": 28,
              "max": 89,
              "dawn": {
                "min": 81,
                "max": 89
              },
              "morning": {
                "min": 35,
                "max": 79
              },
              "afternoon": {
                "min": 28,
                "max": 38
              },
              "night": {
                "min": 51,
                "max": 65
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 1,
              "velocity_max": 18,
              "velocity_avg": 12,
              "gust_max": 32,
              "direction_degrees": 46,
              "direction": "NE",
              "dawn": {
                "direction": "NE",
                "direction_degrees": 48,
                "gust_max": 32,
                "velocity_max": 18,
                "velocity_avg": 16,
                "mph": 10
              },
              "morning": {
                "direction": "N",
                "direction_degrees": 0,
                "gust_max": 24,
                "velocity_max": 15,
                "velocity_avg": 15,
                "mph": 9
              },
              "afternoon": {
                "direction": "SE",
                "direction_degrees": 68,
                "gust_max": 12,
                "velocity_max": 10,
                "velocity_avg": 5,
                "mph": 3
              },
              "night": {
                "direction": "SE",
                "direction_degrees": 121,
                "gust_max": 24,
                "velocity_max": 14,
                "velocity_avg": 11,
                "mph": 7
              }
            },
            "thermal_sensation": {
              "min": 6,
              "max": 24
            },
            "text_icon": {
              "icon": {
                "dawn": "9n",
                "morning": "9",
                "afternoon": "2",
                "night": "2n",
                "day": "2"
              },
              "text": {
                "pt": "Sol com algumas nuvens",
                "en": "Mostly sunny.",
                "es": "Sol con algunas nubes. No llueve.",
                "phrase": {
                  "reduced": "Dia de sol, com nevoeiro ao amanhecer. As nuvens aumentam no decorrer da tarde.",
                  "morning": "Nevoeiro",
                  "afternoon": "Sol com algumas nuvens",
                  "night": "Algumas nuvens",
                  "dawn": "Nevoeiro"
                }
              }
            },
            "temperature": {
              "min": 10,
              "max": 24,
              "dawn": {
                "min": 11,
                "max": 13,
                "minf": 52,
                "maxf": 55
              },
              "morning": {
                "min": 10,
                "max": 14,
                "minf": 50,
                "maxf": 57
              },
              "afternoon": {
                "min": 16,
                "max": 23,
                "minf": 61,
                "maxf": 73
              },
              "night": {
                "min": 17,
                "max": 24,
                "minf": 63,
                "maxf": 75
              },
              "minf": 50,
              "maxf": 75
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
              "min": 23,
              "max": 62,
              "dawn": {
                "min": 50,
                "max": 54
              },
              "morning": {
                "min": 30,
                "max": 57
              },
              "afternoon": {
                "min": 23,
                "max": 34
              },
              "night": {
                "min": 32,
                "max": 39
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 6,
              "velocity_max": 22,
              "velocity_avg": 15,
              "gust_max": 30,
              "direction_degrees": 357,
              "direction": "NNW",
              "dawn": {
                "direction": "NNE",
                "direction_degrees": 20,
                "gust_max": 27,
                "velocity_max": 16,
                "velocity_avg": 16,
                "mph": 10
              },
              "morning": {
                "direction": "NNW",
                "direction_degrees": 348,
                "gust_max": 30,
                "velocity_max": 22,
                "velocity_avg": 20,
                "mph": 12
              },
              "afternoon": {
                "direction": "NNW",
                "direction_degrees": 342,
                "gust_max": 24,
                "velocity_max": 18,
                "velocity_avg": 11,
                "mph": 7
              },
              "night": {
                "direction": "NNW",
                "direction_degrees": 359,
                "gust_max": 30,
                "velocity_max": 19,
                "velocity_avg": 12,
                "mph": 7
              }
            },
            "thermal_sensation": {
              "min": 11,
              "max": 27
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
              "min": 11,
              "max": 27,
              "dawn": {
                "min": 12,
                "max": 15,
                "minf": 54,
                "maxf": 59
              },
              "morning": {
                "min": 11,
                "max": 17,
                "minf": 52,
                "maxf": 63
              },
              "afternoon": {
                "min": 19,
                "max": 27,
                "minf": 66,
                "maxf": 81
              },
              "night": {
                "min": 16,
                "max": 27,
                "minf": 61,
                "maxf": 81
              },
              "minf": 52,
              "maxf": 81
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
          },
          {
            "date": "2019-08-18",
            "date_br": "18/08/2019",
            "humidity": {
              "min": 20,
              "max": 46,
              "dawn": {
                "min": 41,
                "max": 43
              },
              "morning": {
                "min": 26,
                "max": 46
              },
              "afternoon": {
                "min": 20,
                "max": 34
              },
              "night": {
                "min": 33,
                "max": 38
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 8,
              "velocity_max": 27,
              "velocity_avg": 19,
              "gust_max": 37,
              "direction_degrees": 319,
              "direction": "NW",
              "dawn": {
                "direction": "NNW",
                "direction_degrees": 346,
                "gust_max": 30,
                "velocity_max": 20,
                "velocity_avg": 19,
                "mph": 12
              },
              "morning": {
                "direction": "NW",
                "direction_degrees": 335,
                "gust_max": 37,
                "velocity_max": 26,
                "velocity_avg": 20,
                "mph": 12
              },
              "afternoon": {
                "direction": "WNW",
                "direction_degrees": 298,
                "gust_max": 36,
                "velocity_max": 27,
                "velocity_avg": 23,
                "mph": 14
              },
              "night": {
                "direction": "W",
                "direction_degrees": 289,
                "gust_max": 22,
                "velocity_max": 18,
                "velocity_avg": 12,
                "mph": 7
              }
            },
            "thermal_sensation": {
              "min": 13,
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
              "min": 13,
              "max": 29,
              "dawn": {
                "min": 13,
                "max": 18,
                "minf": 55,
                "maxf": 64
              },
              "morning": {
                "min": 13,
                "max": 20,
                "minf": 55,
                "maxf": 68
              },
              "afternoon": {
                "min": 24,
                "max": 29,
                "minf": 75,
                "maxf": 84
              },
              "night": {
                "min": 14,
                "max": 29,
                "minf": 57,
                "maxf": 84
              },
              "minf": 55,
              "maxf": 84
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
          },
          {
            "date": "2019-08-19",
            "date_br": "19/08/2019",
            "humidity": {
              "min": 37,
              "max": 93,
              "dawn": {
                "min": 37,
                "max": 82
              },
              "morning": {
                "min": 83,
                "max": 93
              },
              "afternoon": {
                "min": 67,
                "max": 78
              },
              "night": {
                "min": 80,
                "max": 88
              }
            },
            "rain": {
              "probability": 90,
              "precipitation": 5
            },
            "wind": {
              "velocity_min": 9,
              "velocity_max": 18,
              "velocity_avg": 14,
              "gust_max": 26,
              "direction_degrees": 199,
              "direction": "S",
              "dawn": {
                "direction": "NW",
                "direction_degrees": 319,
                "gust_max": 26,
                "velocity_max": 16,
                "velocity_avg": 15,
                "mph": 9
              },
              "morning": {
                "direction": "SSW",
                "direction_degrees": 228,
                "gust_max": 25,
                "velocity_max": 14,
                "velocity_avg": 12,
                "mph": 7
              },
              "afternoon": {
                "direction": "S",
                "direction_degrees": 177,
                "gust_max": 18,
                "velocity_max": 17,
                "velocity_avg": 12,
                "mph": 7
              },
              "night": {
                "direction": "SE",
                "direction_degrees": 144,
                "gust_max": 22,
                "velocity_max": 18,
                "velocity_avg": 17,
                "mph": 11
              }
            },
            "thermal_sensation": {
              "min": 14,
              "max": 29
            },
            "text_icon": {
              "icon": {
                "dawn": "2rn",
                "morning": "2r",
                "afternoon": "4r",
                "night": "4rn",
                "day": "4r"
              },
              "text": {
                "pt": "Sol com muitas nuvens e chuva",
                "en": "Sun and rain.",
                "es": "Sol con muchas nubes durante el día. Períodos de nublado, con lluvia a cualquier hora.",
                "phrase": {
                  "reduced": "Sol com muitas nuvens. Pancadas de chuva à tarde e à noite.",
                  "morning": "Sol com muitas nuvens",
                  "afternoon": "Sol com muitas nuvens e chuva",
                  "night": "Muitas nuvens e chuva",
                  "dawn": "Muitas nuvens"
                }
              }
            },
            "temperature": {
              "min": 14,
              "max": 27,
              "dawn": {
                "min": 17,
                "max": 19,
                "minf": 63,
                "maxf": 66
              },
              "morning": {
                "min": 14,
                "max": 20,
                "minf": 57,
                "maxf": 68
              },
              "afternoon": {
                "min": 22,
                "max": 27,
                "minf": 72,
                "maxf": 81
              },
              "night": {
                "min": 16,
                "max": 24,
                "minf": 61,
                "maxf": 75
              },
              "minf": 57,
              "maxf": 81
            },
            "cloud_coverage": {
              "low": 3987.5,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 0,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 2966.7,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 5750,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 7233.3,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:26:00",
              "sunset": "17:48:00"
            }
          },
          {
            "date": "2019-08-20",
            "date_br": "20/08/2019",
            "humidity": {
              "min": 27,
              "max": 95,
              "dawn": {
                "min": 86,
                "max": 95
              },
              "morning": {
                "min": 39,
                "max": 94
              },
              "afternoon": {
                "min": 27,
                "max": 46
              },
              "night": {
                "min": 54,
                "max": 85
              }
            },
            "rain": {
              "probability": 90,
              "precipitation": 8
            },
            "wind": {
              "velocity_min": 3,
              "velocity_max": 20,
              "velocity_avg": 13,
              "gust_max": 27,
              "direction_degrees": 55,
              "direction": "NE",
              "dawn": {
                "direction": "ESE",
                "direction_degrees": 100,
                "gust_max": 24,
                "velocity_max": 17,
                "velocity_avg": 15,
                "mph": 9
              },
              "morning": {
                "direction": "NE",
                "direction_degrees": 57,
                "gust_max": 27,
                "velocity_max": 20,
                "velocity_avg": 14,
                "mph": 9
              },
              "afternoon": {
                "direction": "NNW",
                "direction_degrees": 2,
                "gust_max": 25,
                "velocity_max": 18,
                "velocity_avg": 15,
                "mph": 9
              },
              "night": {
                "direction": "NNW",
                "direction_degrees": 106,
                "gust_max": 18,
                "velocity_max": 14,
                "velocity_avg": 9,
                "mph": 6
              }
            },
            "thermal_sensation": {
              "min": 15,
              "max": 25
            },
            "text_icon": {
              "icon": {
                "dawn": "4rn",
                "morning": "4r",
                "afternoon": "4r",
                "night": "4rn",
                "day": "4r"
              },
              "text": {
                "pt": "Sol com muitas nuvens e chuva",
                "en": "Sun and rain.",
                "es": "Sol con muchas nubes durante el día. Períodos de nublado, con lluvia a cualquier hora.",
                "phrase": {
                  "reduced": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
                  "morning": "Sol com muitas nuvens e chuva",
                  "afternoon": "Sol com muitas nuvens e chuva",
                  "night": "Muitas nuvens e chuva",
                  "dawn": "Muitas nuvens e chuva"
                }
              }
            },
            "temperature": {
              "min": 15,
              "max": 25,
              "dawn": {
                "min": 16,
                "max": 18,
                "minf": 61,
                "maxf": 64
              },
              "morning": {
                "min": 15,
                "max": 18,
                "minf": 59,
                "maxf": 64
              },
              "afternoon": {
                "min": 21,
                "max": 25,
                "minf": 70,
                "maxf": 77
              },
              "night": {
                "min": 18,
                "max": 25,
                "minf": 64,
                "maxf": 77
              },
              "minf": 59,
              "maxf": 77
            },
            "cloud_coverage": {
              "low": 1479.2,
              "mid": 229.2,
              "high": 0,
              "dawn": {
                "low": 5733.3,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 183.3,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 0,
                "mid": 916.7,
                "high": 0
              },
              "night": {
                "low": 0,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:25:00",
              "sunset": "17:49:00"
            }
          },
          {
            "date": "2019-08-21",
            "date_br": "21/08/2019",
            "humidity": {
              "min": 30,
              "max": 85,
              "dawn": {
                "min": 66,
                "max": 80
              },
              "morning": {
                "min": 31,
                "max": 70
              },
              "afternoon": {
                "min": 30,
                "max": 76
              },
              "night": {
                "min": 80,
                "max": 87
              }
            },
            "rain": {
              "probability": 80,
              "precipitation": 5
            },
            "wind": {
              "velocity_min": 2,
              "velocity_max": 25,
              "velocity_avg": 12,
              "gust_max": 29,
              "direction_degrees": 194,
              "direction": "S",
              "dawn": {
                "direction": "E",
                "direction_degrees": 52,
                "gust_max": 12,
                "velocity_max": 9,
                "velocity_avg": 7,
                "mph": 4
              },
              "morning": {
                "direction": "NNE",
                "direction_degrees": 323,
                "gust_max": 13,
                "velocity_max": 10,
                "velocity_avg": 5,
                "mph": 3
              },
              "afternoon": {
                "direction": "SSW",
                "direction_degrees": 229,
                "gust_max": 20,
                "velocity_max": 21,
                "velocity_avg": 14,
                "mph": 9
              },
              "night": {
                "direction": "SSE",
                "direction_degrees": 175,
                "gust_max": 29,
                "velocity_max": 25,
                "velocity_avg": 20,
                "mph": 12
              }
            },
            "thermal_sensation": {
              "min": 15,
              "max": 27
            },
            "text_icon": {
              "icon": {
                "dawn": "4rn",
                "morning": "4r",
                "afternoon": "4r",
                "night": "4rn",
                "day": "4r"
              },
              "text": {
                "pt": "Sol com muitas nuvens e chuva",
                "en": "Sun and rain.",
                "es": "Sol con muchas nubes durante el día. Períodos de nublado, con lluvia a cualquier hora.",
                "phrase": {
                  "reduced": "Sol com muitas nuvens durante o dia. Períodos de nublado, com chuva a qualquer hora.",
                  "morning": "Sol com muitas nuvens e chuva",
                  "afternoon": "Sol com muitas nuvens e chuva",
                  "night": "Muitas nuvens e chuva",
                  "dawn": "Muitas nuvens e chuva"
                }
              }
            },
            "temperature": {
              "min": 15,
              "max": 26,
              "dawn": {
                "min": 16,
                "max": 18,
                "minf": 61,
                "maxf": 64
              },
              "morning": {
                "min": 15,
                "max": 20,
                "minf": 59,
                "maxf": 68
              },
              "afternoon": {
                "min": 22,
                "max": 26,
                "minf": 72,
                "maxf": 79
              },
              "night": {
                "min": 19,
                "max": 24,
                "minf": 66,
                "maxf": 75
              },
              "minf": 59,
              "maxf": 79
            },
            "cloud_coverage": {
              "low": 1112.5,
              "mid": 45.8,
              "high": 0,
              "dawn": {
                "low": 0,
                "mid": 183.3,
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
                "low": 4450,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:24:00",
              "sunset": "17:49:00"
            }
          },
          {
            "date": "2019-08-22",
            "date_br": "22/08/2019",
            "humidity": {
              "min": 70,
              "max": 92,
              "dawn": {
                "min": 86,
                "max": 90
              },
              "morning": {
                "min": 73,
                "max": 92
              },
              "afternoon": {
                "min": 70,
                "max": 77
              },
              "night": {
                "min": 82,
                "max": 95
              }
            },
            "rain": {
              "probability": 60,
              "precipitation": 3
            },
            "wind": {
              "velocity_min": 9,
              "velocity_max": 24,
              "velocity_avg": 16,
              "gust_max": 32,
              "direction_degrees": 132,
              "direction": "ESE",
              "dawn": {
                "direction": "SE",
                "direction_degrees": 154,
                "gust_max": 18,
                "velocity_max": 13,
                "velocity_avg": 12,
                "mph": 7
              },
              "morning": {
                "direction": "SE",
                "direction_degrees": 152,
                "gust_max": 16,
                "velocity_max": 11,
                "velocity_avg": 10,
                "mph": 6
              },
              "afternoon": {
                "direction": "ESE",
                "direction_degrees": 123,
                "gust_max": 29,
                "velocity_max": 24,
                "velocity_avg": 19,
                "mph": 12
              },
              "night": {
                "direction": "ESE",
                "direction_degrees": 120,
                "gust_max": 32,
                "velocity_max": 25,
                "velocity_avg": 23,
                "mph": 14
              }
            },
            "thermal_sensation": {
              "min": 14,
              "max": 18
            },
            "text_icon": {
              "icon": {
                "dawn": "2n",
                "morning": "2",
                "afternoon": "4",
                "night": "4n",
                "day": "4"
              },
              "text": {
                "pt": "Sol e Chuva",
                "en": "Sun and rain.",
                "es": "Sol y aumento de nubes. Chubascos aislados en la tarde y en la noche.",
                "phrase": {
                  "reduced": "Sol e aumento de nuvens de manhã. Pancadas de chuva à tarde e à noite.",
                  "morning": "Sol com algumas nuvens",
                  "afternoon": "Sol e Chuva",
                  "night": "Algumas nuvens e chuva",
                  "dawn": "Algumas nuvens"
                }
              }
            },
            "temperature": {
              "min": 14,
              "max": 18,
              "dawn": {
                "min": 17,
                "max": 17,
                "minf": 63,
                "maxf": 63
              },
              "morning": {
                "min": 16,
                "max": 18,
                "minf": 61,
                "maxf": 64
              },
              "afternoon": {
                "min": 17,
                "max": 18,
                "minf": 63,
                "maxf": 64
              },
              "night": {
                "min": 14,
                "max": 17,
                "minf": 57,
                "maxf": 63
              },
              "minf": 57,
              "maxf": 64
            },
            "cloud_coverage": {
              "low": 6595.8,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 8350,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 6333.3,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 6133.3,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 5566.7,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:23:00",
              "sunset": "17:49:00"
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
        day.wind.dawn.mph = ConversionUtils.toMPH(day.wind.dawn.velocity_avg);
        day.wind.morning.mph = ConversionUtils.toMPH(day.wind.morning.velocity_avg);
        day.wind.afternoon.mph = ConversionUtils.toMPH(day.wind.afternoon.velocity_avg);
        day.wind.night.mph = ConversionUtils.toMPH(day.wind.night.velocity_avg);
        return day;
      });
      forecast.data = data;
      console.log('dataaaaaaaaaaaaaaaaaa', forecast);
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
