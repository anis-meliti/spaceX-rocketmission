const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const cors = require('cors');
const schema = require('./schema');
const path = require('path');

// allow cross-origin
app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.use(express.static('public'));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
PORT = process.env.PORT || 5000;
app.listen(PORT, err =>
  err ? console.error(err) : console.log(`server is running on port ${PORT}`)
);
