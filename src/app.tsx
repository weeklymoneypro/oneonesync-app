import React from 'react';

import {SyncEvent} from "./components/sync-event/sync-event";

const data = [
    {
        id: '1',
        text: 'Hello there!',
        resolved: false,
    },
    {
        id: '2',
        text: 'do something else',
        resolved: true,
    },
    {
        id: '3',
        text: 'ajdjd do something else',
        resolved: true,
    }
]

interface Props {
    title: string;
}

export const App: React.FC<Props> = (props) => (
    <div>
        <SyncEvent>
        </SyncEvent>
        <div>{props.title}</div>
        {'react setup from hello there scratch without cra testing ts'}
    </div>
);