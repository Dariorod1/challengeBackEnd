import express, { json } from 'express'
import morgan from 'morgan';

//import routes
import routesPosts from './routes/posts';
import routesCategories from './routes/categories';

import sequelize from './database/database'


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json())

//routes
app.use('/api/posts', routesPosts);
app.use('/api/categories', routesCategories);


export default app;