const { ApolloServer, gql } = require('apollo-server-lambda');
const heroFactory = require('../src/core/factories/heroe');
const skillFactory = require('../src/core/factories/skill');

const { schema, resolvers } = require('./graphql/core')

const server = new ApolloServer({
  context: async () => ({
    Hero: await heroFactory.createInstance(),
    Skill: await skillFactory.createInstance()
  }),
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