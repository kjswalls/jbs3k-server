const express = require("express");
const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server-express");
const responseCachePlugin = require("apollo-server-plugin-response-cache");
const { resolve } = require("path");
const history = require("connect-history-api-fallback");
const typeDefs = require("./schema.js");
const resolvers = require("./resolvers.js");

dotenv.config();
const { PORT = 4000 } = process.env;
const publicPath = resolve(__dirname, "public");

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  cacheControl: {
    defaultMaxAge: 86400,
  },
  plugins: [responseCachePlugin()],
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
