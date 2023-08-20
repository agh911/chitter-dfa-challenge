import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.route('/')
    .post((req, res) => {
        const { email, password } = req.body;

        User.findOne({ email }, (err, user) => {
            if (user && (password === user.password)) {
                res.send({ message: `Successful signed in`, user });
            } else {
                res.status(404).send({ message: `The user details introduced were not found.` });
            }
        })
    });

export { router as signIn };