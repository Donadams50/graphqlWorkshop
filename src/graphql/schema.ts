import { gql } from "apollo-server";

export const typeDefs = gql`
  type User {
    id: Int
    name: String
    email: String
    projects: [Project]
    password: String
  }

  type Project {
    id: Int
    title: String
    active: Boolean!
    members: [User]
  }

  type Query {
    users: [User]
  }
`
