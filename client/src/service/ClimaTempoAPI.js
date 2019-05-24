import Requester from "./Requester";
import { API_TOKEN } from "../utils/Constantes";

class ClimaTempoAPI {

  static getCidades(name, state) {
    const encodedUri = encodeURI(`http://apiadvisor.climatempo.com.br/api/v1/locale/city?name=${name}&state=${state}&token=${API_TOKEN}`);
    return Requester.get(encodedUri);
  }
}

export default ClimaTempoAPI;
