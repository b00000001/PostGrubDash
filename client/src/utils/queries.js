import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_RESTAURANTS = gql`
  query getRestaurants($category: ID) {
    restaurants(category: $category) {
      _id
      name
      description
      image
      price
      category {
        _id
      }
    }
  }
`;

export const QUERY_ALL_RESTAURANTS = gql`
  {
    restaurants {
      _id
      name
      description
      image
      price
      category {
        name
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          image
        }
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;
