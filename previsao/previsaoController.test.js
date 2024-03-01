const PrevisaoController = require('../src/PrevisaoController');
const previsaoController = new PrevisaoController();

describe('PrevisaoController', () => {
  describe('getForecast', () => {
    it('should return a JSON object with weather data', async () => {
      const result = await previsaoController.getForecast('jacarei');
      expect(result).toHaveProperty('data');
    });
  });

  describe('getForecast7', () => {
    it('should return a JSON object with 7-day weather data', async () => {
      const result = await previsaoController.getForecast7('jacarei');
      expect(result).toHaveProperty('data');
    });
  });

  describe('getExtendedForecast', () => {
    it('should return a JSON object with extended weather data', async () => {
      const result = await previsaoController.getExtendedForecast('jacarei');
      expect(result).toHaveProperty('data');
    });
  });
});