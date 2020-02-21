import express from 'express';
import mongoose from 'mongoose';
import AdminBro from 'admin-bro';
import AdminBroMongoose from 'admin-bro-mongoose';
import { buildRouter } from 'admin-bro-expressjs';

AdminBro.registerAdapter(AdminBroMongoose);

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

const run = async () => {
  await mongoose.connect('mongodb://localhost:27017/workshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const adminBro = new AdminBro({});
  const router = buildRouter(adminBro);
  app.use(adminBro.options.rootPath, router);

  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

run();
