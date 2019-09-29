import React from 'react';
import logo from './assets/SpaceX_9801.jpg';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Launches from './Components/Launches';
import LaunchItem from './Components/LaunchItem';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='container'>
          <img
            src={logo}
            alt='spaceX logo'
            style={{ width: 300, display: 'block', margin: 'auto' }}
          />
          <Route exact path='/' component={Launches} />
          <Route exact path='/Launch/:flight_number' component={LaunchItem} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
