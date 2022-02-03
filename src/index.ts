const { ApolloServer, gql } = require('apollo-server');

import {typeDefs} from './graphql/schema';

import {resolvers} from './graphql/resolvers'

import {createUserTable } from './uitils'



createUserTable();

//listTables();

//addUser(2, "Ademola Buhari", "demola@gmail.com", "babaforthegirls");

//getUsers()

 const server = new ApolloServer({typeDefs, resolvers});

  server.listen().then(({url}: {url: string}) => {
       console.log(`server listening on ${url}`);
   })

