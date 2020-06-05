const { gql } = require('apollo-server');

export const typeDefs = gql`
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
  correct: Int,
  wrong: Int,
  deck: String,
  last: String,
}

type Query {
  users: [Users!]
  decks: [Decks!]
  cards: [Cards!]
  findUser(searchTerm: String!): [Users!]
}

type Mutation {
  addUser(username: String): Users
  deleteUsers(id: ID!): Users!
  updateUsers(id: ID!): Users!

  addDeck(name: String!): Decks
  deleteDeck(id: ID!): Decks!
  updateDeck(id: ID!): Decks!
  searchDeck(name: String!): [Decks!]

  addCard(front: String!, back: String!): Cards
  deleteCard(front: String!): Cards
  updateCard(id: ID!, front: ID, back: ID): Cards!
  searchCard(searchTerm: String!): [Cards!]
}
`;


