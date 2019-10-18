import request from 'supertest'
import app from '../../../src/app'
import changeNamespace from '../../util/changeNamespace'

describe('User', () => {
  beforeEach(async () => {
    await changeNamespace()
  })

  it('should be able to register', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'Diego Fernandes',
        email: 'diego@fernandes.com.br',
        password: '123456'
      })
    expect(response.body).toHaveProperty('id')
  })

  it('should not be able to register with duplicated email', async () => {
    await request(app)
      .post('/api/users')
      .send({
        name: 'Diego Fernandes',
        email: 'diego@fernandes.com.br',
        password: '123456'
      })

    const response = await request(app)
      .post('/api/users')
      .send({
        name: 'Diego Fernandes',
        email: 'diego@fernandes.com.br',
        password: '123456'
      })
    expect(response.status).toBe(403)
  })
})
