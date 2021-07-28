const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type Category {
    _id: ID
    name: String!
  }
  type Restaurant {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
    category: Category
    products: [Product]
  }
  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }
  type User {
    _id: ID
    username: String
    email: String
    password: String
    orders: [Order]
  }
  type Product {
    _id: ID
    name: String
    description: String
    image: String
    price: Float
  }
  type Checkout {
    session: ID
  }
  type Auth {
    token: ID
    user: User
  }
  type Query {
    me: User
    categories: [Category]
    restaurants: [Restaurant]
    order(_id: ID!): Order
    checkout(productIds: [ID]!): Checkout
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(productIds: [ID]!): Order
  }
`;
module.exports = typeDefs;

