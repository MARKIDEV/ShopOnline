const mongoose = require('mongoose');

const connectDb = async () => {
  try {
    await mongoose.connect(' mongodb+srv://Admin:isenB@4@shop.htndb.mongodb.net/<dbname>?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log('connected with success to database');
  } catch {
    // eslint-disable-next-line no-unused-expressions
    (err) => {
      // eslint-disable-next-line no-console
      console.log(err);
      process.exit(1);
    };
  }
};
module.exports = connectDb;
