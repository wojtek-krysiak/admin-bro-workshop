import express from 'express';
import mongoose from 'mongoose';

import adminRouter from './admin/router';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

const run = async () => {
  const connection = await mongoose.connect('mongodb://localhost:27017/workshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const { router, path } = adminRouter(connection);

  app.use(path, router);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

run();
