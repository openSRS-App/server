const { Users, Decks, Cards } = require('./models/UserModel')

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    users: async () => {
      return Users.find({});
    },
    findUser: async (parent, args) => {
      return Users.findOne({});
    },
    decks: async () => {
      return Decks.find({});
    },
    cards: async () => {
      return Cards.find({});
    },
  },
  Mutation: {
    // User Mutations -------------------------------------
    addUser: async (parent, args) => {
      return Users.create({ username: args.username });
    },
    deleteUsers: async (parent, args) => {
      return Users
        .findByIdAndDelete(args.id, { useFindAndModify: false })
        .then((result) => {
          result;
        })
    },
    updateUsers: async (parent, args) => {
      return Users
        .findByIdAndUpdate(args.id, { useFindAndModify: false })
        .then((result) => {
          result;
        })
    },
    // Deck Mutations -------------------------------------
    addDeck: async (parent, args) => {
      return Decks.create({ name: args.name });
    },
    deleteDeck: async (parent, args) => {
      return Decks
        .findByIdAndDelete(args.id, { useFindAndModify: false })
        .then((result) => {
          result;
        })
    },
    updateDeck: async (parent, args) => {
      return Decks
        .findByIdAndUpdate(
          args.id,
          { useFindAndModify: false },
          { name: args.name }
        ).then((result) => {
          result;
        })
    },
    searchDeck: async (parent, args) => {
      return Decks
        .findOne({ name: args.name })
        .then((result) => {
          result;
        })
    },
    // Card Mutations -------------------------------------
    addCard: async (parent, args) => {
      return Cards.create({ front: args.front, back: args.back });
    },
    deleteCard: async (parent, args) => {
      return Cards
        .findOneAndRemove({ front: args.front }, { useFindAndModify: false })
        .then((result) => {
          result
        })
    },
    updateCard: async (parent, args) => {
      return Cards
        .findByIdAndUpdate(args.id, { useFindAndModify: false })
        .then((result) => {
          result;
        })
    },
    // search by cards? might be hard.. do we want this?
    searchCard: async (parent, args) => {
      return Cards
        .findByIdAndUpdate(args.deck, { useFindAndModify: false })
        .then((result) => {
          result;
        })
    }
  }
};

