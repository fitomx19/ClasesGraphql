import './App.css';
import {ApolloProvider,ApolloClient,HttpLink,InMemoryCache,split} from '@apollo/client';
import {getMainDefinition} from '@apollo/client/utilities';
import { WebSocketLink} from '@apollo/link-ws';
import { render } from '@testing-library/react';
import Movies from './components/movies';
import Usuario from './components/movies-users';

const httpLink = new HttpLink({
      uri: `https://cines.hasura.app/v1/graphql`, headers:{
        'x-hasura-admin-secret': "JJwQ8PZD6FBJWPEpqjMqd6fGLmBNrkc6QCUwljjacgi55IKd3bukcvkS17f9hcQM"
      }
});

const wsLink = new WebSocketLink({
      uri: `ws://cines.hasura.app/v1/graphql`, options:{
        reconnect: true,
        connectionParams:{
          headers:{
            'x-hasura-admin-secret': "JJwQ8PZD6FBJWPEpqjMqd6fGLmBNrkc6QCUwljjacgi55IKd3bukcvkS17f9hcQM"
          }
        }
      }
});


const splitLink = split(
  ({query}) =>{
    const definition = getMainDefinition(query);
    return(
      definition.kind === "OperationDefinition" && 
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: splitLink,
});


const App = () => (
    <>
    <ApolloProvider client={client}>
      <h2>Peliculas!</h2>
        <Movies/>
        <Usuario/>
    </ApolloProvider>
     
     
    </>
    
); 

render(<App/> , document.getElementById("root"));