import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import App from './App';
import './index.css';
import WagmiClient from './utils/wagmiClient';
import { AuthProvider } from './contexts/Auth/AuthProvider';

const link = createHttpLink({
  uri: 'http://127.0.0.1:3001/graphql',
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
        <AuthProvider>
          <App />
        </AuthProvider>
      </WagmiClient>
    </ApolloProvider>
  </React.StrictMode>
);
