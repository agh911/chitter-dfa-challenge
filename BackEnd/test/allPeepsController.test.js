import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server.js';

const expect = chai.expect;
chai.use(chaiHttp);

describe('allPeeps.controller', () => {
    const testServer = chai.request(server).keepOpen();

    it('should get all peeps', async () => {
        const res = await testServer
            .get('/');

        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
    });
});
