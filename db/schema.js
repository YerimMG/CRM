const { gql } = require("apollo-server")



// Schema
const typeDefs = gql`
    type User {
      id: ID
      nombre: String
      apellido: String
      email: String
      create: String
    }

    input UsuarioInput {
      nombre: String!
      apellido: String!
      email: String!
      password: String!
    }

    type Token{
      token: String
    }

    input AuthInput {
      email: String!
      password: String!
    }

    type Query {
      obtenerCurso: String
    }

    type Mutation {
      nuevoUsuario(input:UsuarioInput): User
      autenticarUsuario(input: AuthInput): Token
    }
`;


module.exports = typeDefs