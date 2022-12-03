import express from 'express';
import bodyparser from 'body-parser';
import * as routes from './src/index.js';

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

/**
 * adding routes
 */
Object.values(routes)
    .map(route => app.use('/api', route));


export default app;
