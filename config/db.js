require("dotenv").config({ path: ".env" })
const mongoose = require("mongoose");


const conectDB = async () => {

  try {
    await mongoose.connect(process.env.DB_Mongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    })
    console.log("Conecto to DB")
  } catch (error) {
    console.log("error")
    console.log(error)
    process.exit(1)
  }
}

module.exports = conectDB