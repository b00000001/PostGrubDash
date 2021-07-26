import { gql } from "@apollo/client";
export const QUERY_CATEGORIES = gql`
  query categories {
    categories {
      _id
      name
    }
  }
`;
export const QUERY_RESTAURANTS_BY_CATEGORY = gql`
  query getRestaurantsByCategory($categoryId: ID) {
    restaurants(categoryId: $categoryId) {
      _id
      name
      description
      image
      price
    }
  }
`;
export const QUERY_ALL_RESTAURANTS = gql`
  query restaurants {
    restaurants {
      _id
      name
      description
      image
      price
    }
  }
`;
export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_CHECKOUT = gql`
  query getCheckout($productIds: [ID]!) {
    checkout(productIds: $productIds) {
      session
    }
  }
`;
