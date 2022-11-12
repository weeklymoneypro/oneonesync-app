import React from 'react';

import {SyncEvent} from './components/sync-event/sync-event';

interface Props {
    title: string;
}

export const App: React.FC<Props> = (props) => (
    <div>
        <SyncEvent/>
    </div>
);