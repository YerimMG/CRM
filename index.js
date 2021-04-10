const { ApolloServer } = require("apollo-server")
const typeDefs = require("./db/schema")
const resolvers = require("./db/resolvers")
const conectDB = require("./config/db")



// servidor
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => { }
});

// Settings
conectDB();


// Iniciar el servidor
server.listen().then((result) => {
  console.log(`server on ${result.port}`)

}).catch((err) => {
  console.log(err)
});
