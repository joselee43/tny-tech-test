import * as dotenv from 'dotenv';

dotenv.config();

import Server from '../../../server/server'
import * as supertest from 'supertest'

const app = new Server().app

jest.setTimeout(10 * 1000)

describe('News Api Controller', () => {
  test('Payload validate pageSize', (done) => {
    supertest(app)
      .get('/api/news')
      .query({
        pageSize: 'string'
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test('Payload validate page', (done) => {
    supertest(app)
      .get('/api/news')
      .query({
        page: 'string'
      })
      .expect(400)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test('Response length limit 100', (done) => {
    supertest(app)
      .get('/api/news')
      .expect(200)
      .expect(res => {
        const { totalResults, articles } = res.body
        if (totalResults >= 100) {
          expect(articles.length).toBe(100)
        }
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test('Response length limit 50', (done) => {
    supertest(app)
      .get('/api/news')
      .query({
        pageSize: 50
      })
      .expect(200)
      .expect(res => {
        const { totalResults, articles } = res.body
        if (totalResults >= 50) {
          expect(articles.length).toBe(50)
        }
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test('Response article validation', (done) => {
    supertest(app)
      .get('/api/news')
      .query({
        pageSize: 10
      })
      .expect(200)
      .expect(res => {
        const { totalResults, articles } = res.body
        expect(articles).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              title: expect.any(String),
              description: expect.any(String),
              content: expect.any(String),
              url: expect.any(String)
            })
          ])
        )
      })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
})
