import Requester from "./Requester";
import { API_TOKEN } from "../utils/Constantes";

class ClimaTempoAPI {

  static getCitiesFromState(state) {
    const encodedUri = encodeURI(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?state=${state}&token=${API_TOKEN}`);
    return Requester.get(encodedUri);
  }

  static getWeatherByCity(city) {
    const encodedUri = encodeURI(`http://apiadvisor.climatempo.com.br/api/v1/weather/locale/${city}/current?token=${API_TOKEN}`);
    return Requester.get(encodedUri);
  }
}

export default ClimaTempoAPI;
