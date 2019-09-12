import ConversionUtils from '../../utils/ConversionUtils';

it("Converts Celsius to Fahrenheit with success", () => {
  let f = ConversionUtils.toFahrenheit(20);
  expect(f).toBe(68);
});

it("Converts km/h to MPH with success", () => {
  let mph = ConversionUtils.toMPH(10)
  expect(mph).toBe(6);
});
