import express, { Application, Request, Response } from 'express';
import bikeRoutes from './app/module/bike/bike.route';
import cors from 'cors';
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/bike', bikeRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
