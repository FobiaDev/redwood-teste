export const schema = gql`
  type Product {
    id: String!
    title: String!
    imageUrl: String!
    priceInCents: Int!
    createdAt: DateTime!
  }

  type Query {
    products(take: Int, page: Int, title: String): [Product!]! @skipAuth
  }

  input CreateProductInput {
    title: String!
    imageUrl: String!
    priceInCents: Int!
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @skipAuth
  }
`
