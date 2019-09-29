const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const cors = require('cors');
const schema = require('./schema');

// allow cross-origin
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

PORT = process.env.PORT || 5000;
app.listen(PORT, err =>
  err ? console.error(err) : console.log(`server is running on port ${PORT}`)
);
