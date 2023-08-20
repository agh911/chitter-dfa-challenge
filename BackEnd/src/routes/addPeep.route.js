import express from 'express';

import { addPeep } from '../controllers/addPeep.controller.js';
import { newPeepValidation } from '../middlewares/peeps.validation.js';

const router = express.Router();

router.route(`/`)
    .post(newPeepValidation, addPeep);

export { router as addPeep };