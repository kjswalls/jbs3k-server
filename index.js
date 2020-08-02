const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
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
app.use(
  cors({
    origin: "https://jbs3k-client.vercel.app",
    optionsSuccessStatus: 200,
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cacheControl: {
    defaultMaxAge: 86400,
  },
  plugins: [responseCachePlugin()],
});

server.applyMiddleware({
  app,
  path: "/graphql",
  cors: {
    origin: "https://jbs3k-client.vercel.app",
  },
});

app.use(express.static(publicPath));
app.use("/", history());

app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at ${server.graphqlPath}`);
});
