import { validationResult } from 'express-validator';
import { addPeepService } from '../services/peeps.service';

export const addPeep = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).send(`Adding the new peep has failed.`);
    }
    try {
        const peep = await addPeepService(req.body);
        res.status(201).json({ peep });
    } catch (error) {
        console.log(error);
        res.status(400).send(`Adding the new peep has failed.`);
    }
}