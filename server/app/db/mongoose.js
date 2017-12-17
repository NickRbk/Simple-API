const mongoose = require('mongoose');

// NOTE: in mongoose promises deprecated
mongoose.Promise = global.Promise;

// CONNECT TO OUR DATABASE
// ========================
//mongoose.createConnection(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection
  .once('open', () => console.log('Connected to MongoLab instance.'))
  .on('error', () => {
    console.log('Reconnect with MongoDB...');
    mongoose.connect(process.env.MONGODB_URI);
  });

module.exports = {mongoose};
