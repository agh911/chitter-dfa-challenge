import chai from 'chai';
import chaiHttp from 'chai-http';
import Peep from '../src/models/peep.model.js';
import { getAllPeepsService, addPeepService } from '../src/services/peeps.service.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Peeps Service Tests', () => {
    beforeEach(async () => {
        await Peep.deleteMany({});
    });

    it('should get all peeps', async () => {
        await Peep.create({ name: 'User1', username: 'user1', content: 'Hello' });
        await Peep.create({ name: 'User2', username: 'user2', content: 'Hi there' });

        const peeps = await getAllPeepsService();

        expect(peeps).to.be.an('array');
        expect(peeps).to.have.lengthOf(2);
    });

    it('should add a new peep', async () => {
        const peepData = { name: 'New User', username: 'newuser', content: 'Testing' };

        const newPeep = await addPeepService(peepData);

        expect(newPeep).to.have.property('name', peepData.name);
        expect(newPeep).to.have.property('username', peepData.username);
        expect(newPeep).to.have.property('content', peepData.content);
    });
});
