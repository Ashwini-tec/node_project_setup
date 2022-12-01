import { Router } from 'express';
import * as user  from '../user/userController.js';

const router = new Router();

/**
 * get user deatil
 */
router.get('/user', user.getUser);

export default router;
