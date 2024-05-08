import jwt from 'jsonwebtoken';

beforeAll(async () => {
    process.env.JWT_KEY = 'asdfasf'
})

const getAuthToken = () => {
    const payload = { email: 'test@test.com' }
    const token = jwt.sign(payload, process.env.JWT_KEY!)
    return token;
}

export { getAuthToken }