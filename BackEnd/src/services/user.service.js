import User from '../models/user.model.js';

export const getUserByQuery = async (query) => {
    try {
        // Added logic to return newest peeps first
        return await User.find(query);
    } catch (e) {
        throw e;
    }
}