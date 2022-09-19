const express = require('express');
const cluster = require('cluster');
const totalCpus = require('os').cpus().length;
const mongoose = require('mongoose');


if (cluster.isMaster) {
  console.log(`Number of CPUs is ${totalCpus}`);
  console.log(`Master PID: ${process.pid} is running`);

  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    console.log(`Let's fork another worker!`);
    cluster.fork();
  });
} else {
  const { createProduct } = require('./product_controller');

  const app = express();

  app.use(express.json());

  mongoose.connect(
    "mongodb+srv://sunnyben:adetoberu@cluster0.gkpbm.mongodb.net/unbxd_server?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('Connected to Mongodb');
      }
    }
  )

  app.post('/api/:site_key/upload/feed', createProduct);
  const port = process.env.PORT || 3001;
  app.listen(port, () => console.log('Server is running on port '+port));
}
