const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// import  {typeDefs}   from './typedefs' ;
// const typeDefs = require("./typedefs")
// import  {resolvers}  from './resolvers';
// const resolvers = require("./resolvers")

const typeDefs = gql`
  type Users {
    id: ID,
    username: String,
    decks: String,
  }

  type Decks {
    id: ID,
    cards: String,
    Name: String,
    Toggle: Boolean,
  }

  type Cards {
    id: ID,
    front: String,
    back: String,
    correct: Number,
    wrong: Number,
    deck: String,
    last: String,
  }

  type Query {
    users: [Users!]
    decks: [Decks!]
    cards: [Cards!]
  }

  type Mutation {
    addUser(username: String!): User
    deleteUser(id: ID!): User!
    updateUser(id: ID!): User!
    searchUser(searchTerm: String!): [User!]

    addDeck(id: ID!): Deck
    deleteDeck(id: ID!): Deck!
    updateDeck(id: ID!): Deck!
    searchDeck(searchTerm: String!): [Deck!]

    addCard(id: ID!): Card
    deleteCard(id: ID!): Card!
    updateCard(id: ID!): Card!
    searchCard(searchTerm: String!): [Card!]
  }
`;

const Models = require('./models')

const User = Models.User
const Deck = Models.Deck
const Card = Models.Card
// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
    //   users: (userId) => User.findById({id: userId}),
      get_one_card: () => 'Hello world!',
      get_decks: () => 'Hello world!',
      get_one_deck: () => 'Hello world!',
    },
    Mutation: {
        edit_card: () => 'model.create(card',
        edit_deck: () => 'My old friend',
    }
  };



const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 8080 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);