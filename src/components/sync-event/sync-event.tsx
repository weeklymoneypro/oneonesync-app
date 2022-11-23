import React from 'react';
import { useQuery } from '@apollo/client';

import { ACTION_ITEMS_QUERY } from '../../queries/sync-event.query';
import { ActionItems } from '../action-item/action-items';
import {TalkingPoints} from "../talking-point/talking-points";

interface Props {
}

export const SyncEvent: React.FC<Props> = (props) => {
    const {data, loading, error} = useQuery(ACTION_ITEMS_QUERY);
    if (loading) return <pre>'Loading...'</pre>;
    if (error) return <pre>{error.message}</pre>

    const {syncEvent} = data;
    return (
        <div id={'sync-event'}>
            <h2>Sync Event!</h2>
            <pre>start: {syncEvent.dateStart}</pre>
            <h3>Talking Points</h3>
            <TalkingPoints items={syncEvent.talkingPoints} syncEventId={syncEvent.id}/>
            <h3>Action Items</h3>
            <ActionItems items={syncEvent.actionItems} syncEventId={syncEvent.id}/>
        </div>
    )
}