const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// test movies
const movies = [
  { id: '1', name: 'Pulp Fiction', genre: 'Crime' },
  { id: '2', name: '1984', genre: 'Sci-Fi' },
  { id: 3, name: 'V for vendetta', genre: 'Sci-Fi-Triller' },
  { id: 4, name: 'Snatch', genre: 'Crime-Comedy' }
];

// db schema
const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// root query
const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // 'resolve' describe the logic of what data should be returned
        return movies.find(movie => movie.id === args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: Query
});
