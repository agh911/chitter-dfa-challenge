import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.route('/')
    .post(async (req, res) => {
        const { email, name, username, password } = req.body;
        const user = await User.findOne({ email });
        if (user != null) {
            res.status(500).send({ message: `User already exists` });
        } else {
            const user = new User({
                name,
                username,
                email,
                password,
            });
            await user.save();
            res.send({ message: `Sign up successful.` });
        }
    })

export { router as signUp };