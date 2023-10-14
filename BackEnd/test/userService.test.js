import chai from 'chai';
import chaiHttp from 'chai-http';
import User from '../src/models/user.model.js';
import { getUserByQuery } from '../src/services/user.service.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('User Service Tests', () => {
    // Clear the database before each test
    beforeEach(async () => {
        await User.deleteMany({});
    });

    it('should get a user by email', async () => {
        await User.create({ name: 'User1', username: 'user1', email: 'user1@example.com', password: 'password' });

        const users = await getUserByQuery({ email: 'user1@example.com' });

        expect(users).to.be.an('array');
        expect(users).to.have.lengthOf(1);
        expect(users[0]).to.have.property('name', 'User1');
        expect(users[0]).to.have.property('username', 'user1');
    });
});
