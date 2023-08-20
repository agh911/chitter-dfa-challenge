import Peep from '../models/peep.model.js';

export const getAllPeepsService = async () => {
    try {
        // Added logic to return newest peeps first
        return await Peep.find({}).sort({ createdAt: -1 });
    } catch (e) {
        throw e;
    }
}

export const addPeepService = async peepData => {
    try {
        const newPeep = new Peep(peepData);
        return await newPeep.save();
    } catch (e) {
        throw e;
    }
}