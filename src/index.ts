const { ApolloServer, gql } = require('apollo-server');

import {typeDefs} from './graphql/schema';

import {resolvers} from './graphql/resolvers'

import {createUserTable , addUser, createProjectTable, addProject, createAssignmentTable, addAssignment} from './uitils'


//createUserTable();

//listTables();

//addUser( "Cliton Adamson", "adamsson@gmail.com", "bbc123");

//getUsers()

//createProjectTable()

//ddProject("Onboard New Developer", "Active")

//createAssignmentTable()

//addAssignment("adamsson@gmail.com", 7, "Cliton Adamson")

 const server = new ApolloServer({typeDefs, resolvers});

  server.listen().then(({url}: {url: string}) => {
       console.log(`server listening on ${url}`);
   })

