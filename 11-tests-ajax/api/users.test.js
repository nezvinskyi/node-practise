const express = require('express');
const request = require('supertest');

const usersRouter = require('./users');

const app = express();
const server = app.listen(3000);

app.use('/api/v1/users', usersRouter);

describe('test /users endpoint', () => {
  beforeAll(() => server);

  it('GET /api/v1/users', async () => {
    const { body, statusCode } = await request(app).get('/api/v1/users');

    expect(statusCode).toBe(200);
    expect(body.status).toBe('Success');
    expect(body.code).toBe(200);
    const { result } = body.data;
    expect(Array.isArray(result)).toBe(true);
    const { _id, name } = result[0];
    expect(typeof _id).toBe('string');
    expect(typeof name).toBe('string');
  });

  afterAll(async () => await server.close());
});
