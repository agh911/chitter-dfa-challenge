import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });

import { allPeeps } from './src/routes/allPeeps.route.js';
import { addPeep } from './src/routes/addPeep.route.js';
import { signIn } from './src/routes/signIn.route.js';
import { signUp } from './src/routes/signUp.route.js';
import { userRouter } from './src/routes/user.route.js';

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

const main = async () => {
    console.log(`Connecting to DB at ${process.env.DB_URI}`);
    await mongoose.connect(process.env.DB_URI);
    console.log(`Connected to DB at ${process.env.DB_URI}`);
}

main().catch((err) => console.log(err));

app.use(express.json());
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));
app.use(`/`, allPeeps);
app.use(`/`, addPeep);
app.use(`/`, userRouter);
app.use(`/signIn`, signIn);
app.use(`/signUp`, signUp);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;