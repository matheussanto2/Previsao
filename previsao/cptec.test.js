const Cptec = require('../src/Cptec');
const cptec = new Cptec();

describe('Cptec', () => {
  describe('getForecast', () => {
    it('should return a JSON object with weather data', async () => {
      const result = await cptec.getForecast('jacarei');
      expect(result).toHaveProperty('data');
    });
  });

  describe('getExtendedForecast', () => {
    it('should return a JSON object with extended weather data', async () => {
      const result = await cptec.getExtendedForecast('jacarei');
      expect(result).toHaveProperty('data');
    });
  });
});