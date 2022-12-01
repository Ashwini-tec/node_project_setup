import * as userSevice from '../user/userService.js';

const getUser = async(req, res) => {
    try {
        const detail = await userSevice.getUser('Hello World');
        return res.status(200).json({
            data: detail,
        });

    } catch (error) {
        return res.status(500).json({
            message: error.message,
        });
    }
};

export{
    getUser,
};
