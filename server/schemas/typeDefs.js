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
    categories: [Category]
    restaurants(category: ID, name: String): [Restaurant]
    users: [User]
    user(id: ID!): User
    me: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }
  
  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
    ): Auth
    addOrder(products: [ID]!): Order
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
