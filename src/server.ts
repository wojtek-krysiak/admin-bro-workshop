import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

const run = async () => {
  await mongoose.connect('mongodb://localhost:27017/workshop', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  app.listen(port, () => console.log(`Example app listening on port ${port}!`));
};

run();
