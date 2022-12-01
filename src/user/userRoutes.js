import { Router } from 'express';
import * as user  from '../user/userController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as userSchema from './userValidation.js';

const router = new Router();

/**
 * create user
 */
router.get(
    '/user',
    validation(userSchema.create),
    user.getUser
);

/**
 * get user deatil
 */
router.get(
    '/user',
    user.getUser
);

export default router;
