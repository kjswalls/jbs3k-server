const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { resolve } = require("path");
const history = require("connect-history-api-fallback");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");

const { PORT = 4000 } = process.env;
const publicPath = resolve(__dirname, "public");
// const staticConfig = { maxAge: "1y", etag: false };

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.applyMiddleware({
  app,
  path: "/graphql",
  cors: true,
});

app.use(express.static(publicPath));
app.use("/", history());

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at ${server.graphqlPath}`);
});
