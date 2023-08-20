import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.route('/')
    .post((req, res) => {
        const { email } = req.body;
        User.findOne({ email }, (err, user) => {
            if (user) {
                res.send({ message: `User already exists` });
            }
            else {
                const user = new User(req.body);
                user.save(err => {
                    if (err) {
                        res.send(err);
                    }
                    else {
                        res.send({ message: `Sign up successful.` });
                    }
                })
            }
        })
    })

export { router as signUp };