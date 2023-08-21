import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('addPeep.controller', () => {
    const testServer = chai.request(server).keepOpen();

    it('should add a new peep', async () => {
        const peepData = {
            name: 'John Doe',
            username: 'johndoe',
            content: 'Hello, world!',
        };

        const res = await testServer
            .post('/')
            .send(peepData);

        expect(res).to.have.status(201);
        expect(res.body).to.have.property('peep');
    })
})
