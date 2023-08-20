import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV}` });

import { allPeeps } from './src/routes/allPeeps.route';
import { addPeep } from './src/routes/addPeep.route';
import { signIn } from './src/routes/signIn.route';
import { signUp } from './src/routes/signUp.route';

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
app.use(cors());
app.use(`/`, allPeeps);
app.use(`/`, addPeep);
app.use(`/signIn`, signIn);
app.use(`/signUp`, signUp);

const server = app.listen(port, host, () => {
    const SERVERHOST = server.address().address;
    const SERVERPORT = server.address().port;
    console.log(`Server is running on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;