import * as dotenv from 'dotenv';

dotenv.config();

import Server from '../../server/server'
import * as supertest from 'supertest'

const app = new Server().app

describe('Serve frontend files', () => {
  test('Asset files', (done) => {
    supertest(app)
      .get('/js/app.js')
      .expect('Content-Type', /javascript/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test('Route /', (done) => {
    supertest(app)
      .get('/')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test('Route /news', (done) => {
    supertest(app)
      .get('/news')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })

  test('Route /blabla', (done) => {
    supertest(app)
      .get('/blabla')
      .expect('Content-Type', /html/)
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        return done();
      })
  })
})
