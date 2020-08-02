const { gql } = require("apollo-server");

module.exports = typeDefs = gql`
  type Item {
    id: ID!
    title: String!
    description: String!
    image: String
    largeImage: String
    price: Float!
    category: Category!
    source: String
  }

  type Category {
    id: ID!
    name: String!
  }

  type Query {
    items: [Item]!
    categories: [Category]!
    netWorth: Float!
  }

  # type Mutation {
  #     createItem(title: String, description: String, price: Int, category: String, image: String, largeImage: String): Item!
  #     createCategory(name: String): Category!
  # }
`;
