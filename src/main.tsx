import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import App from './App';
import './index.css';
import WagmiClient from './utils/wagmiClient';
import { AuthProvider } from './contexts/Auth/AuthProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const link = createHttpLink({
  uri: `${import.meta.env.VITE_SERVER_URL}/graphql`,
  credentials: 'include'
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <WagmiClient>
        <Router>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Router>
      </WagmiClient>
    </ApolloProvider>
  </React.StrictMode>
);
