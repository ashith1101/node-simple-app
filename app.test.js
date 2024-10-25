const request = require('supertest');
const express = require('express');
const axios = require('axios');
const app = require('./app');

jest.mock('axios');

describe('GET /', () => {
  it('should return a 200 status and display users', async () => {
    const usersMock = [
      { name: 'John Doe', email: 'john@example.com', company: { name: 'Example Corp' } },
      { name: 'Jane Doe', email: 'jane@example.com', company: { name: 'Example LLC' } },
    ];

    axios.get.mockResolvedValue({ data: usersMock });

    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('User List');
    expect(response.text).toContain('John Doe');
    expect(response.text).toContain('jane@example.com');
  });

  it('should handle errors gracefully and return 500 status', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));

    const response = await request(app).get('/');
    expect(response.status).toBe(500);
    expect(response.text).toContain('Internal Server Error');
  });
});
