import express, { Application, Request, Response } from 'express';
import bikeRoutes from './app/module/bike/bike.route';
import orderRoutes from './app/module/order/order.route';
import cors from 'cors';
const app: Application = express();

//parsers
app.use(express.json());
app.use(express.text());
app.use(cors());

app.use('/api/bike', bikeRoutes);
app.use('/api/orders', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server Live ⚡',
  });
});

export default app;
