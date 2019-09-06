import mockAxios from 'axios';

import ClimaTempoAPI from '../service/ClimaTempoAPI';

describe("ClimaTempoAPI", () => {
  it("Fetches cities data", async () => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ id: 1, name: "São Paulo"}]
      })
    );

    // when
    const res = await ClimaTempoAPI.getCitiesFromState(1234);

    // then
    expect(res.data).toEqual([{ id: 1, name: "São Paulo"}]);
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith("http://apiadvisor.climatempo.com.br/api/v1/locale/city?state=1234&token=39a8dc378d9dff0245c62b36c9ebfc86");
  });

  it("Fetches weather by city", async () => {
    // setup
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: [{ id: 1, name: "São Paulo"}]
      })
    );

    // when
    const res = await ClimaTempoAPI.getForecastSevenDays(1234);

    // then
    expect(res.data).toEqual([{ id: 1, name: "São Paulo"}]);
    expect(mockAxios.get).toHaveBeenCalledTimes(2);
    expect(mockAxios.get).toHaveBeenCalledWith("http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/1234/days/15?token=39a8dc378d9dff0245c62b36c9ebfc86");
  });
});
