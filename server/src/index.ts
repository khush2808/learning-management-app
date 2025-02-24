import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import * as dynamoose from 'dynamoose';
import courseRoutes from './routes/courseRoutes';
dotenv.config();
const isproduction = process.env.NODE_ENV === 'production';
if(!isproduction){
		dynamoose.aws.ddb.local();
}
const app = express();
// app.use(cors());
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy :"cross-origin"}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
// routes
app.get('/', (req, res) => {
	res.send('Hello World');
});
app.use('/courses',courseRoutes);
const port = process.env.PORT || 3000;
if(!isproduction){
	app.listen(port, () => {
		console.log(`Server is running on http://localhost:${port}`);
	});
}
// export default app;
