const mongoose = require("mongoose");


const User = mongoose.Schema({
  nombre: {
    type: String,
    require: true,
    trim: true
  },

  apellido: {
    type: String,
    require: true,
    trim: true
  },

  email: {
    type: String,
    require: true,
    trim: true,
    unique: true
  },

  password: {
    type: String,
    require: true,
    trim: true,
  },

  create: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model("User", User)