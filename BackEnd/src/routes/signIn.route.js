import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.route('/')
    .post(async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });

            if (user && user.password === password) {
                res.send({ message: 'Successful signed in', user });
            } else {
                res.status(401).send({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).send({ message: 'An error occurred' });
        }
    });

export { router as signIn };