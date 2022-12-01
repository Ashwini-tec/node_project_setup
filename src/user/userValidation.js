import Joi from 'joi';

const create = () =>{
    return Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required(),
    });
};


export{
    create,
};
