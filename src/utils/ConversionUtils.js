class ConversionUtils {

  /**
   * @param temperature in celsius
   */
  static toFahrenheit(temperature) {
    return Math.round(temperature * 1.8 + 32);
  }

  /**
   * @param speed in km/h
   */
  static toMPH(speed) {
    return Math.round(speed * 0.6214);
  }
}

export default ConversionUtils;
