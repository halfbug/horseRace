import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ApolloProvider } from '@apollo/client/react';

const httpLink = createHttpLink({
  uri: 'https://zed-ql.zed.run/graphql',
});

const authLink = setContext((_, { headers }) => {
  
  return {
    headers: {
      ...headers,
      Authorization: `x-developer-secret ${process.env.REACT_APP_API_KEY_STRING}`,
      'Content-Type': 'application/json'
      
    }
      
  }
});
console.log("🚀 ~ file: index.js ~ line 24 ~ authLink ~ process.env.REACT_APP_API_KEY", process.env.REACT_APP_API_KEY)
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
      </ApolloProvider>     
    </React.StrictMode>
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
