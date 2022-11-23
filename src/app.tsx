import React from 'react';
import { useQuery } from '@apollo/client';

import { ACCOUNT_QUERY } from './queries/account-details.query';
import { SyncEvent } from './components/sync-event/sync-event';


interface Props {
    title: string;
}

export const App: React.FC<Props> = (props) => {
    const {data, loading, error} = useQuery(ACCOUNT_QUERY, {
        variables: {
            id: '4b0e32ff-e8b7-4d47-b7a9-8874c7d2ce74',
        }
    });
    if (loading) return <pre>Loading...</pre>;
    if (error) return <pre>{error.message}</pre>

    const { account } = data;

    return (
        <div>
            {account.firstName} {account.lastName}
            <p>{account.email}</p>
            <SyncEvent/>
        </div>
    )
}