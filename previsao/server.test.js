const request = require('supertest');
const app = require('../src/app');
const { expect } = require('@jest/globals');

describe('Server', () => {
  it('should return a JSON object with weather data for /js/previsao/jacarei', async () => {
    const result = await request(app).get('/previsao/jacarei');
    expect(result.statusCode).toBe(200);
    expect(result.headers['content-type']).toContain('application/json');
    expect(result.body).toHaveProperty('data');
  });

  it('should return a JSON object with 7-day weather data for /js/previsao7/jacarei', async () => {
    const result = await request(app).get('/previsao7/jacarei');
    expect(result.statusCode).toBe(200);
    expect(result.headers['content-type']
```ontain('application/json'));
expect(result.body).toHaveProperty('data');
});

it('should return a JSON object with extended weather data for /js/estendida/jacarei', async () => {
const result = await request(app).get('/estendida/jacarei');
expect(result.statusCode).toBe(200);
expect(result.headers['content-type']).toContain('application/json');
expect(result.body).toHaveProperty('data');
});
});
```javascript

## Running the tests

To run the tests, make sure you have Jest installed and configured in your project. After that, execute the following command:

```bash
npm test