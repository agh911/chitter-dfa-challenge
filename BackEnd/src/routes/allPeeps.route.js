import express from 'express';
import { allPeeps } from '../controllers/getPeeps.controller';

const router = express.Router();

router.route(`/`)
    .get(allPeeps);

export { router as allPeeps };