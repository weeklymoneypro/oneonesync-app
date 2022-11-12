import React from 'react';
import {createRoot} from "react-dom/client";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

import {App} from './app';

const container = document.getElementById('root');
const root = createRoot(container!);

const client = new ApolloClient({
    uri: 'http://localhost:3000/graphql',
    cache: new InMemoryCache(),
})

root.render(
    <ApolloProvider client={client}>
        <App title={'hello'}/>
    </ApolloProvider>
);