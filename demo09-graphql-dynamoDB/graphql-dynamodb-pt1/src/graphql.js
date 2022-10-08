const { ApolloServer, gql } = require('apollo-server-lambda');

const { schema, resolvers } = require('./graphql/core')

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
});

module.exports = server.createHandler({
  expressGetMiddlewareOptions: {
    cors: {
      origin: '*',
      credentials: true,
    }
  },
});