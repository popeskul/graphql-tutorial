const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3005;

mongoose.connect(
  'mongodb+srv://pasha:pasha123@cluster0.o7ujf.mongodb.net/graphql-tutorial?retryWrites=true&w=majority',
  { useUnifiedTopology: true, useNewUrlParser: true }
);

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const dbConnection = mongoose.connection;
dbConnection.on('error', error => console.log('Connection error', error));
dbConnection.once('open', () => console.log('Connected to DB!'));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started!');
});
