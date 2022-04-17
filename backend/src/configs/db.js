const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://sumanmunde:india@cluster0.5kzw3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  );
};