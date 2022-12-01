import * as dotenv from 'dotenv';
const process = dotenv.config();

const config = {
    PORT : process.parsed.PORT,
    // DB_CONFIG:
};

export default config;
