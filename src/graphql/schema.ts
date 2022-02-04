import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: String
    name: String
    email: String
    projects: [Project]
    password: String
  }

  type Project {
    id: Int
    title: String
    status: String!
    members: [User]
  }

  type Query {
    users: [User]
  }
`
