const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String, 
     email: String,
       city: String,
  });

  const User = mongoose.model('userlist', UserSchema);
//   const cat = new Kitten({ name: 'huynh bao' });
//   cat.save();
module.exports = User;