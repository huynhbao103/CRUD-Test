require('dotenv').config();
const mongoose = require('mongoose')


var dbState = [{
    value: 0,
    label: "disconnected"
},
{
    value: 1,
    label: "connected"
},
{
    value: 2,
    label: "connecting"
},
{
    value: 3,
    label: "disconnecting"
}];


const connection = async()=>{
//     mongoose.connect('mongodb://127.0.0.1:27017/test').
//   catch(error => handleError(error));
// Or:

    const option = {
        user: process.env.DB_USER,
        pass: process.env.DB_PASSWORD,
        dbName:process.env.DB_NAME,
}
  await mongoose.connect(process.env.DB_HOSt,option);
  const state = Number(mongoose.connection.readyState);
  console.log(dbState.find(f => f.value == state).label, "DB success"); // connected to db



}
module.exports = connection;