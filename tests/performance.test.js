const request = require('supertest');
const { app, server } = require('../app');
describe('Performance Tests', () => {
    afterAll((done) => {
        server.close(done);
    });
    test('API response time should be under 100ms', async () => {
        const start = Date.now();
        const response = await request(app).get('/');
        const duration = Date.now() - start;
        expect(response.status).toBe(200);
        expect(duration).toBeLessThan(100);
    });
    test('Calculate endpoint should handle concurrent requests', async () => {
        const requests = Array(10).fill().map(() =>
            request(app)
                .post('/calculate')
                .send({ operation: 'add', a: 5, b: 3 })
        );
        const responses = await Promise.all(requests);
        responses.forEach(response => {
            expect(response.status).toBe(200);
            expect(response.body.result).toBe(8);
        });
    });
});
