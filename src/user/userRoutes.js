import { Router } from 'express';
import * as user  from '../user/userController.js';
import validation from '../../lib/schemaValidationConfig.js';
import * as userSchema from './userValidation.js';

const router = new Router();

/**
 * create user
 */
router.post(
    '/user',
    validation(userSchema.create()),
    user.createUser
);

/**
 * get user detail
 */
router.get(
    '/user',
    user.getUser
);

/**
 * get user by id
 */
router.get(
    '/user/:id',
    user.getById
);

/**
 * update user detail
 */
router.put(
    '/user/:id',
    validation(userSchema.update()),
    user.updateUser
);


/**
 * delete user detail
 */
router.delete(
    '/user/:id',
    user.deleteUser
);

export default router;
