import express from 'express';

import { addPeep } from '../controllers/addPeep.controller';
import { newPeepValidation } from '../middlewares/peeps.validation';

const router = express.Router();

router.route(`/`)
    .post(newPeepValidation, addPeep);

export { router as addPeep };