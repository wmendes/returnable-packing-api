import request from 'supertest';
import app from '../app';
import prisma from '../models/packModel';

beforeAll(async () => {
  await prisma.$connect();
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('POST /api/pack/data', () => {
  it('should store data and return 201 status', async () => {
    const response = await request(app)
      .post('/api/pack/data')
      .send({ material: 'Plastic', capacity: 2.0, returnable: true })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.material).toBe('Plastic');
    expect(response.body.capacity).toBe(2.0);
    expect(response.body.returnable).toBe(true);
  });
});

describe('GET /api/pack/data', () => {
  it('should retrieve stored data', async () => {
    const postResponse = await request(app)
      .post('/api/pack/data')
      .send({ material: 'Plastic', capacity: 2.0, returnable: true })
      .expect(201);

    const getResponse = await request(app)
      .get('/api/pack/data')
      .expect(200);

    expect(getResponse.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          material: 'Plastic',
          capacity: 2.0,
          returnable: true
        })
      ])
    );
  });
});
