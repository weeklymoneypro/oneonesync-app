import React from "react";
import {useQuery} from "@apollo/client";

import {ACTION_ITEMS_QUERY} from '../../queries/sync-event.query';
import {ActionItems} from "../action-item/action-items";

interface Props {
}

export const SyncEvent: React.FC<Props> = (props) => {
    const {data, loading, error} = useQuery(ACTION_ITEMS_QUERY);
    if (loading) return "Loading...";
    if (error) return <pre>{error.message}</pre>

    const {syncEvent} = data;
    return (
        <div id={'sync-event'}>
            <h2>Sync Event!</h2>
            <pre>start: {syncEvent.dateStart}</pre>
            end: {syncEvent.dateEnd}
            <ActionItems items={syncEvent.actionItems}/>
        </div>
    )
}