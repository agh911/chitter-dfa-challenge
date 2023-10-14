import { getAllPeepsService } from '../services/peeps.service.js';

export const allPeeps = async (req, res) => {
    try {
        const peeps = await getAllPeepsService();
        res.json(peeps)
    } catch (e) {
        res.status(404).send(`Apologies, we were not able to find any peeps.`);
    }
}