import request from "supertest";
import app from "../../app";
import jwt from 'jsonwebtoken';
import { Auth } from "../../interfaces/auth.interface";


it('fails when a email that does not exist ', async () => {
    return request(app).post('/auth').send({}).expect(400)
})

it('fails when an incorrect credentials is supplied', async () => {

    await request(app).post('/auth').send({
        email: 'test',
    }).expect(400)
});

it('return 201 when correct credentials is supplied', async () => {
    const response = await request(app).post('/auth').send({
        email: 'test@test.com'
    }).expect(201);
    expect(response.body.message).toBe("You are logged in");
});

it('check jwt token and message for successful authentication', async () => {
    const email = "test@test.com"
    const response = await request(app).post('/auth').send({ email }).expect(201);
    expect(response.body.message).toBe("You are logged in");

    const payload = jwt.verify(response.body.token, process.env.JWT_KEY!) as Auth;
    expect(payload.email).toBe(email);
})