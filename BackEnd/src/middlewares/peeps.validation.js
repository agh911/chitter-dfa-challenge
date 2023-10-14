import { check } from "express-validator";

export const newPeepValidation = [
    check('name').exists(),
    check('username').exists(),
    check('content').exists(),
];