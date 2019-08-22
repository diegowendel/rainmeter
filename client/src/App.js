import React, { Component, Fragment } from 'react';
import './App.css';
import API from './service/ClimaTempoAPI';
import { CitySelect, StateSelect } from './components/select';
import ForecastPanel from './components/forecast/ForecastPanel';
import ConversionUtils from './utils/ConversionUtils';
import Spinner from './components/spinner/Spinner';

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
            "date": "2019-08-20",
            "date_br": "20/08/2019",
            "humidity": {
              "min": 76,
              "max": 97,
              "dawn": {
                "min": 93,
                "max": 96
              },
              "morning": {
                "min": 83,
                "max": 97
              },
              "afternoon": {
                "min": 76,
                "max": 85
              },
              "night": {
                "min": 88,
                "max": 92
              }
            },
            "rain": {
              "probability": 90,
              "precipitation": 8
            },
            "wind": {
              "velocity_min": 7,
              "velocity_max": 21,
              "velocity_avg": 13,
              "gust_max": 27,
              "direction_degrees": 129,
              "direction": "ESE",
              "dawn": {
                "direction": "E",
                "direction_degrees": 106,
                "gust_max": 22,
                "velocity_max": 16,
                "velocity_avg": 15,
                "mph": 9
              },
              "morning": {
                "direction": "SE",
                "direction_degrees": 133,
                "gust_max": 19,
                "velocity_max": 13,
                "velocity_avg": 9,
                "mph": 6
              },
              "afternoon": {
                "direction": "SE",
                "direction_degrees": 139,
                "gust_max": 20,
                "velocity_max": 17,
                "velocity_avg": 12,
                "mph": 7
              },
              "night": {
                "direction": "SE",
                "direction_degrees": 138,
                "gust_max": 27,
                "velocity_max": 21,
                "velocity_avg": 18,
                "mph": 11
              }
            },
            "thermal_sensation": {
              "min": 15,
              "max": 20
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
              "max": 20,
              "dawn": {
                "min": 15,
                "max": 16,
                "minf": 59,
                "maxf": 61
              },
              "morning": {
                "min": 15,
                "max": 17,
                "minf": 59,
                "maxf": 63
              },
              "afternoon": {
                "min": 18,
                "max": 20,
                "minf": 64,
                "maxf": 68
              },
              "night": {
                "min": 16,
                "max": 20,
                "minf": 61,
                "maxf": 68
              },
              "minf": 59,
              "maxf": 68
            },
            "cloud_coverage": {
              "low": 7645.8,
              "mid": 2175,
              "high": 0,
              "dawn": {
                "low": 10000,
                "mid": 366.7,
                "high": 0
              },
              "morning": {
                "low": 8900,
                "mid": 7033.3,
                "high": 0
              },
              "afternoon": {
                "low": 5000,
                "mid": 1300,
                "high": 0
              },
              "night": {
                "low": 6683.3,
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
              "min": 76,
              "max": 95,
              "dawn": {
                "min": 92,
                "max": 94
              },
              "morning": {
                "min": 79,
                "max": 95
              },
              "afternoon": {
                "min": 76,
                "max": 83
              },
              "night": {
                "min": 86,
                "max": 89
              }
            },
            "rain": {
              "probability": 40,
              "precipitation": 2
            },
            "wind": {
              "velocity_min": 11,
              "velocity_max": 21,
              "velocity_avg": 15,
              "gust_max": 28,
              "direction_degrees": 118,
              "direction": "ESE",
              "dawn": {
                "direction": "ESE",
                "direction_degrees": 115,
                "gust_max": 19,
                "velocity_max": 15,
                "velocity_avg": 14,
                "mph": 9
              },
              "morning": {
                "direction": "E",
                "direction_degrees": 106,
                "gust_max": 19,
                "velocity_max": 13,
                "velocity_avg": 12,
                "mph": 7
              },
              "afternoon": {
                "direction": "ESE",
                "direction_degrees": 120,
                "gust_max": 23,
                "velocity_max": 19,
                "velocity_avg": 16,
                "mph": 10
              },
              "night": {
                "direction": "ESE",
                "direction_degrees": 128,
                "gust_max": 28,
                "velocity_max": 21,
                "velocity_avg": 19,
                "mph": 12
              }
            },
            "thermal_sensation": {
              "min": 14,
              "max": 23
            },
            "text_icon": {
              "icon": {
                "dawn": "3n",
                "morning": "3",
                "afternoon": "2r",
                "night": "3n",
                "day": "3"
              },
              "text": {
                "pt": "Nublado",
                "en": "Cloudy.",
                "es": "Cielo nublado de día y de noche. Posibilidad de llovizna.",
                "phrase": {
                  "reduced": "Nublado com aberturas de sol à  tarde. Pode garoar de manhã e à noite.",
                  "morning": "Nublado",
                  "afternoon": "Sol com muitas nuvens",
                  "night": "Nublado com possibilidade de chuviscos",
                  "dawn": "Nublado com possibilidade de chuviscos"
                }
              }
            },
            "temperature": {
              "min": 14,
              "max": 23,
              "dawn": {
                "min": 15,
                "max": 17,
                "minf": 59,
                "maxf": 63
              },
              "morning": {
                "min": 14,
                "max": 18,
                "minf": 57,
                "maxf": 64
              },
              "afternoon": {
                "min": 20,
                "max": 23,
                "minf": 68,
                "maxf": 73
              },
              "night": {
                "min": 17,
                "max": 21,
                "minf": 63,
                "maxf": 70
              },
              "minf": 57,
              "maxf": 73
            },
            "cloud_coverage": {
              "low": 6070.8,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 7616.7,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 7433.3,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 3483.3,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 5750,
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
              "min": 59,
              "max": 92,
              "dawn": {
                "min": 90,
                "max": 92
              },
              "morning": {
                "min": 65,
                "max": 93
              },
              "afternoon": {
                "min": 59,
                "max": 76
              },
              "night": {
                "min": 80,
                "max": 85
              }
            },
            "rain": {
              "probability": 20,
              "precipitation": 1
            },
            "wind": {
              "velocity_min": 11,
              "velocity_max": 21,
              "velocity_avg": 15,
              "gust_max": 26,
              "direction_degrees": 121,
              "direction": "ESE",
              "dawn": {
                "direction": "ESE",
                "direction_degrees": 118,
                "gust_max": 20,
                "velocity_max": 15,
                "velocity_avg": 14,
                "mph": 9
              },
              "morning": {
                "direction": "ESE",
                "direction_degrees": 119,
                "gust_max": 19,
                "velocity_max": 15,
                "velocity_avg": 13,
                "mph": 8
              },
              "afternoon": {
                "direction": "ESE",
                "direction_degrees": 120,
                "gust_max": 19,
                "velocity_max": 19,
                "velocity_avg": 16,
                "mph": 10
              },
              "night": {
                "direction": "ESE",
                "direction_degrees": 124,
                "gust_max": 26,
                "velocity_max": 21,
                "velocity_avg": 19,
                "mph": 12
              }
            },
            "thermal_sensation": {
              "min": 13,
              "max": 21
            },
            "text_icon": {
              "icon": {
                "dawn": "3n",
                "morning": "3",
                "afternoon": "2r",
                "night": "2rn",
                "day": "2r"
              },
              "text": {
                "pt": "Sol com muitas nuvens",
                "en": "Mostly cloudy.",
                "es": "Sol con muchas nubes.",
                "phrase": {
                  "reduced": "Nublado pela manhã, com possibilidade de garoa. Tarde de sol com diminuição de nuvens. Noite com muita nebulosidade.",
                  "morning": "Nublado",
                  "afternoon": "Sol com muitas nuvens",
                  "night": "Muitas nuvens",
                  "dawn": "Nublado com possibilidade de chuviscos"
                }
              }
            },
            "temperature": {
              "min": 13,
              "max": 21,
              "dawn": {
                "min": 18,
                "max": 19,
                "minf": 64,
                "maxf": 66
              },
              "morning": {
                "min": 16,
                "max": 20,
                "minf": 61,
                "maxf": 68
              },
              "afternoon": {
                "min": 18,
                "max": 21,
                "minf": 64,
                "maxf": 70
              },
              "night": {
                "min": 13,
                "max": 18,
                "minf": 55,
                "maxf": 64
              },
              "minf": 55,
              "maxf": 70
            },
            "cloud_coverage": {
              "low": 5975,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 6666.7,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 6850,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 4250,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 6133.3,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:23:00",
              "sunset": "17:49:00"
            }
          },
          {
            "date": "2019-08-23",
            "date_br": "23/08/2019",
            "humidity": {
              "min": 60,
              "max": 97,
              "dawn": {
                "min": 87,
                "max": 96
              },
              "morning": {
                "min": 60,
                "max": 97
              },
              "afternoon": {
                "min": 60,
                "max": 76
              },
              "night": {
                "min": 80,
                "max": 86
              }
            },
            "rain": {
              "probability": 90,
              "precipitation": 5
            },
            "wind": {
              "velocity_min": 10,
              "velocity_max": 25,
              "velocity_avg": 15,
              "gust_max": 30,
              "direction_degrees": 107,
              "direction": "E",
              "dawn": {
                "direction": "E",
                "direction_degrees": 98,
                "gust_max": 24,
                "velocity_max": 17,
                "velocity_avg": 15,
                "mph": 9
              },
              "morning": {
                "direction": "ENE",
                "direction_degrees": 77,
                "gust_max": 18,
                "velocity_max": 14,
                "velocity_avg": 11,
                "mph": 7
              },
              "afternoon": {
                "direction": "ESE",
                "direction_degrees": 110,
                "gust_max": 20,
                "velocity_max": 17,
                "velocity_avg": 13,
                "mph": 8
              },
              "night": {
                "direction": "ESE",
                "direction_degrees": 127,
                "gust_max": 30,
                "velocity_max": 25,
                "velocity_avg": 21,
                "mph": 13
              }
            },
            "thermal_sensation": {
              "min": 12,
              "max": 22
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
              "min": 12,
              "max": 22,
              "dawn": {
                "min": 14,
                "max": 15,
                "minf": 57,
                "maxf": 59
              },
              "morning": {
                "min": 12,
                "max": 16,
                "minf": 54,
                "maxf": 61
              },
              "afternoon": {
                "min": 18,
                "max": 22,
                "minf": 64,
                "maxf": 72
              },
              "night": {
                "min": 15,
                "max": 22,
                "minf": 59,
                "maxf": 72
              },
              "minf": 54,
              "maxf": 72
            },
            "cloud_coverage": {
              "low": 4312.5,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 5966.7,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 1466.7,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 4283.3,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 5533.3,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:22:00",
              "sunset": "17:50:00"
            }
          },
          {
            "date": "2019-08-24",
            "date_br": "24/08/2019",
            "humidity": {
              "min": 45,
              "max": 95,
              "dawn": {
                "min": 92,
                "max": 95
              },
              "morning": {
                "min": 54,
                "max": 94
              },
              "afternoon": {
                "min": 45,
                "max": 53
              },
              "night": {
                "min": 57,
                "max": 88
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 11,
              "velocity_max": 20,
              "velocity_avg": 16,
              "gust_max": 35,
              "direction_degrees": 89,
              "direction": "ENE",
              "dawn": {
                "direction": "E",
                "direction_degrees": 100,
                "gust_max": 25,
                "velocity_max": 18,
                "velocity_avg": 14,
                "mph": 9
              },
              "morning": {
                "direction": "ENE",
                "direction_degrees": 78,
                "gust_max": 26,
                "velocity_max": 20,
                "velocity_avg": 13,
                "mph": 8
              },
              "afternoon": {
                "direction": "ENE",
                "direction_degrees": 85,
                "gust_max": 25,
                "velocity_max": 19,
                "velocity_avg": 18,
                "mph": 11
              },
              "night": {
                "direction": "E",
                "direction_degrees": 92,
                "gust_max": 35,
                "velocity_max": 20,
                "velocity_avg": 18,
                "mph": 11
              }
            },
            "thermal_sensation": {
              "min": 11,
              "max": 23
            },
            "text_icon": {
              "icon": {
                "dawn": "2rn",
                "morning": "2r",
                "afternoon": "2",
                "night": "2n",
                "day": "2"
              },
              "text": {
                "pt": "Sol com algumas nuvens",
                "en": "Mostly sunny.",
                "es": "Sol con algunas nubes. No llueve.",
                "phrase": {
                  "reduced": "Dia de sol com algumas nuvens e névoa ao amanhecer. Noite com poucas nuvens.",
                  "morning": "Sol com muitas nuvens",
                  "afternoon": "Sol com algumas nuvens",
                  "night": "Algumas nuvens",
                  "dawn": "Muitas nuvens"
                }
              }
            },
            "temperature": {
              "min": 11,
              "max": 23,
              "dawn": {
                "min": 14,
                "max": 14,
                "minf": 57,
                "maxf": 57
              },
              "morning": {
                "min": 11,
                "max": 16,
                "minf": 52,
                "maxf": 61
              },
              "afternoon": {
                "min": 18,
                "max": 23,
                "minf": 64,
                "maxf": 73
              },
              "night": {
                "min": 14,
                "max": 23,
                "minf": 57,
                "maxf": 73
              },
              "minf": 52,
              "maxf": 73
            },
            "cloud_coverage": {
              "low": 1758.3,
              "mid": 0,
              "high": 0,
              "dawn": {
                "low": 3700,
                "mid": 0,
                "high": 0
              },
              "morning": {
                "low": 366.7,
                "mid": 0,
                "high": 0
              },
              "afternoon": {
                "low": 183.3,
                "mid": 0,
                "high": 0
              },
              "night": {
                "low": 2783.3,
                "mid": 0,
                "high": 0
              }
            },
            "sun": {
              "sunrise": "06:22:00",
              "sunset": "17:50:00"
            }
          },
          {
            "date": "2019-08-25",
            "date_br": "25/08/2019",
            "humidity": {
              "min": 37,
              "max": 91,
              "dawn": {
                "min": 88,
                "max": 91
              },
              "morning": {
                "min": 46,
                "max": 87
              },
              "afternoon": {
                "min": 37,
                "max": 45
              },
              "night": {
                "min": 54,
                "max": 82
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 13,
              "velocity_max": 20,
              "velocity_avg": 16,
              "gust_max": 35,
              "direction_degrees": 59,
              "direction": "NE",
              "dawn": {
                "direction": "NE",
                "direction_degrees": 62,
                "gust_max": 33,
                "velocity_max": 19,
                "velocity_avg": 16,
                "mph": 10
              },
              "morning": {
                "direction": "NNE",
                "direction_degrees": 40,
                "gust_max": 27,
                "velocity_max": 20,
                "velocity_avg": 15,
                "mph": 9
              },
              "afternoon": {
                "direction": "NE",
                "direction_degrees": 58,
                "gust_max": 26,
                "velocity_max": 19,
                "velocity_avg": 18,
                "mph": 11
              },
              "night": {
                "direction": "ENE",
                "direction_degrees": 73,
                "gust_max": 36,
                "velocity_max": 19,
                "velocity_avg": 17,
                "mph": 11
              }
            },
            "thermal_sensation": {
              "min": 12,
              "max": 24
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
              "max": 24,
              "dawn": {
                "min": 13,
                "max": 15,
                "minf": 55,
                "maxf": 59
              },
              "morning": {
                "min": 12,
                "max": 17,
                "minf": 54,
                "maxf": 63
              },
              "afternoon": {
                "min": 19,
                "max": 24,
                "minf": 66,
                "maxf": 75
              },
              "night": {
                "min": 16,
                "max": 24,
                "minf": 61,
                "maxf": 75
              },
              "minf": 54,
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
              "sunrise": "06:21:00",
              "sunset": "17:51:00"
            }
          },
          {
            "date": "2019-08-26",
            "date_br": "26/08/2019",
            "humidity": {
              "min": 33,
              "max": 82,
              "dawn": {
                "min": 75,
                "max": 81
              },
              "morning": {
                "min": 42,
                "max": 81
              },
              "afternoon": {
                "min": 33,
                "max": 39
              },
              "night": {
                "min": 54,
                "max": 69
              }
            },
            "rain": {
              "probability": 0,
              "precipitation": 0
            },
            "wind": {
              "velocity_min": 5,
              "velocity_max": 20,
              "velocity_avg": 13,
              "gust_max": 33,
              "direction_degrees": 39,
              "direction": "NNE",
              "dawn": {
                "direction": "NE",
                "direction_degrees": 49,
                "gust_max": 33,
                "velocity_max": 17,
                "velocity_avg": 15,
                "mph": 9
              },
              "morning": {
                "direction": "N",
                "direction_degrees": 17,
                "gust_max": 26,
                "velocity_max": 20,
                "velocity_avg": 16,
                "mph": 10
              },
              "afternoon": {
                "direction": "N",
                "direction_degrees": 16,
                "gust_max": 25,
                "velocity_max": 19,
                "velocity_avg": 11,
                "mph": 7
              },
              "night": {
                "direction": "ENE",
                "direction_degrees": 92,
                "gust_max": 22,
                "velocity_max": 14,
                "velocity_avg": 10,
                "mph": 6
              }
            },
            "thermal_sensation": {
              "min": 11,
              "max": 24
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
              "min": 11,
              "max": 24,
              "dawn": {
                "min": 12,
                "max": 15,
                "minf": 54,
                "maxf": 59
              },
              "morning": {
                "min": 11,
                "max": 16,
                "minf": 52,
                "maxf": 61
              },
              "afternoon": {
                "min": 18,
                "max": 24,
                "minf": 64,
                "maxf": 75
              },
              "night": {
                "min": 16,
                "max": 24,
                "minf": 61,
                "maxf": 75
              },
              "minf": 52,
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
              "sunrise": "06:20:00",
              "sunset": "17:51:00"
            }
          }
        ],
        "categories": [
          "06:00",
          "12:00",
          "18:00",
          "22:00",
          "06:00",
          "12:00",
          "18:00",
          "22:00",
          "06:00",
          "12:00",
          "18:00",
          "22:00",
          "06:00",
          "12:00",
          "18:00",
          "22:00",
          "06:00",
          "12:00",
          "18:00",
          "22:00",
          "06:00",
          "12:00",
          "18:00",
          "22:00",
          "06:00",
          "12:00",
          "18:00",
          "22:00"
        ]
      },
      loading: undefined,
      loadingCities: undefined,
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
        selectedCity: undefined
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
            selectedCity: undefined,
            selectedState: undefined
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
    return (
      <div className="container container-center">
        <div>
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

          {
            this.state.loading && <Spinner />
          }
        </div>
      </div>
    );
  }
}

export default App;
