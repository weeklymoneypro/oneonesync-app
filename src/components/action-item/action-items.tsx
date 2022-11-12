import React from 'react';
import { useMutation } from '@apollo/client';

import { ADD_ACTION_ITEM_MUTATION } from '../../mutations/add-action-item.mutation';
import { ACTION_ITEMS_QUERY } from '../../queries/sync-event.query';

import { ActionItem } from './action-item';
import { ActionItemType } from '../../types/action-item.type';

interface Props {
    syncEventId: string,
    items: ActionItemType[];
}

export const ActionItems: React.FC<Props> = (props) => {

    const [addActionItem, {data, loading, error}] = useMutation(ADD_ACTION_ITEM_MUTATION, {
        refetchQueries: [{query: ACTION_ITEMS_QUERY}]
    });

    const onBlur = async (e) => {
        if (e.target.value.length > 0) {
            e.preventDefault();
            await addActionItem({variables: {syncEventId: props.syncEventId, text: e.target.value}});
            e.target.value = '';
        }
    }

    const onKeyDown = async (e) => {
        if (e.key === 'Enter' && e.target.value.length > 0) {
            e.preventDefault();
            await addActionItem({variables: {syncEventId: props.syncEventId, text: e.target.value}});
            e.target.value = '';
            e.target.focus();
        }
    }

    const actionItems = props.items.map((item) => {
        return <ActionItem key={item.id} item={item}/>;
    })
    return (
        <div>
            {actionItems}
            <p/>
            <div>
                <input onBlur={onBlur} onKeyDown={onKeyDown}/></div>
        </div>
    )
}