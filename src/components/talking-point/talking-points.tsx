import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_TALKING_POINT_MUTATION } from '../../mutations/add-talking-point.mutation';
import { ACTION_ITEMS_QUERY } from '../../queries/sync-event.query';

import { TalkingPoint } from './talking-point';
import { TalkingPointType } from '../../types/talking-point.type';

interface Props {
    syncEventId: string;
    items: TalkingPointType[];
}

export const TalkingPoints: React.FC<Props> = (props) => {

    const [addTalkingPoint, {data, loading, error}] = useMutation(ADD_TALKING_POINT_MUTATION, {
        refetchQueries: [{query: ACTION_ITEMS_QUERY}]
    });

    const onBlur = async (e) => {
        if (e.target.value.length > 0) {
            e.preventDefault();
            await addTalkingPoint({variables: {syncEventId: props.syncEventId, text: e.target.value}});
            e.target.value = '';
        }
    }

    const onKeyDown = async (e) => {
        if (e.key === 'Enter' && e.target.value.length > 0) {
            e.preventDefault();
            await addTalkingPoint({variables: {syncEventId: props.syncEventId, text: e.target.value}});
            e.target.value = '';
            e.target.focus();
        }
    }

    const talkingPoints = props.items.map((item) => {
        return <TalkingPoint key={item.id} item={item}/>;
    })
    return (
        <div>
            {talkingPoints}
            <p/>
            <div>
                <input onBlur={onBlur} onKeyDown={onKeyDown}/></div>
        </div>
    )
}