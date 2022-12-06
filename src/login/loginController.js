import * as loginSevice from '../login/loginServices.js';
import { MESSAGE } from '../../utils/constants.js';
import { generateToken } from '../../middleware/auth.js';

/**
 *
 * @param {*} req
 * @param {*} res
 * @returns
 */
const loginUser = async(req, res) => {
    try {
        const data = req.body;
        const detail = await loginSevice.login(data);
        if(typeof detail === 'string'){
            return res.status(400).json({
                data: detail,
            });
        }

        const userData = {
            id: detail._id,
            email: detail.email,
        };

        detail.password =  undefined;
        return res.status(200).json({
            message: MESSAGE.LOGIN_MESSAGE,
            data: detail,
            token: generateToken(userData)
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export { loginUser };
