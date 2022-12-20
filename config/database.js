const mongoose = require("mongoose");

// exports.connectDatabase = () => {
//   mongoose
//     .set('strictQuery', false)
//     .connect(process.env.MONGO_URI)
//     .then(con => console.log(`Database connected: ${con.connection.host}`))
//     .catch(err => console.log(err))
// };

exports.connectDatabase = async () => {
  try {
    const conn = await mongoose.set('strictQuery', false).connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}