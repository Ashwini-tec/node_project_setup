

const getUser = (data) => {
    try {
        const detail = data;
        return `get the data : ${detail}`;
    } catch (error) {
        return error.message;
    }
};

export{
    getUser,
};
