import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

const expect = chai.expect;
chai.use(chaiHttp);

const testServer = chai.request(server).keepOpen();

describe('Routes Tests', () => {
    // Test the GET / route
    describe('GET /', () => {
        it('should return all peeps', async () => {
            const res = await testServer.get('/');

            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
        });
    });

    // Test the POST / route for adding a new peep
    describe('POST /', () => {
        it('should add a new peep', async () => {
            const peepData = { name: 'John Doe', username: 'johndoe', content: 'Hello world!' };
            const res = await testServer.post('/').send(peepData);

            expect(res).to.have.status(201);
            expect(res.body).to.have.property('peep');
        });

        it('should return an error for invalid peep data', async () => {
            const invalidPeepData = { name: 'John Doe' };
            const res = await testServer.post('/').send(invalidPeepData);

            expect(res).to.have.status(422);
        });
    });


    describe('Authentication Routes Tests', () => {
        // Test the POST /signIn route
        describe('POST /signIn', () => {
            it('should successfully sign in a user with correct credentials', async () => {
                const signInData = { email: 'user@example.com', password: 'password' };
                const res = await testServer.post('/signIn').send(signInData);

                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message', 'Successful signed in');
                expect(res.body).to.have.property('user');
            });

            it('should return 401 for invalid credentials', async () => {
                const invalidSignInData = { email: 'user@example.com', password: 'wrongpassword' };
                const res = await testServer.post('/signIn').send(invalidSignInData);

                expect(res).to.have.status(401);
                expect(res.body).to.have.property('message', 'Invalid credentials');
            });
        });

        // Test the POST /signUp route
        describe('POST /signUp', () => {
            it('should return 500 for an existing user', async () => {
                const existingUser = {
                    name: 'Existing User',
                    username: 'existinguser',
                    email: 'user@example.com',
                    password: 'password'
                };
                const res = await testServer.post('/signUp').send(existingUser);

                expect(res).to.have.status(500);
                expect(res.body).to.have.property('message', 'User already exists');
            });
        });
    });
});

after(() => {
    testServer.close();
});
