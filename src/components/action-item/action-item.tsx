import React from 'react';
import { ActionItemType } from '../../types/action-item.type';

import { useMutation } from '@apollo/client';

import { ACTION_ITEMS_QUERY } from '../../queries/sync-event.query';
import {RESOLVE_ACTION_ITEM_MUTATION} from "../../mutations/resolve-action-item.mutation";

interface Props {
    item: ActionItemType;
}

export const ActionItem: React.FC<Props> = (props) => {

    const [addActionItem, {data, loading, error}] = useMutation(RESOLVE_ACTION_ITEM_MUTATION, {
        refetchQueries: [{query: ACTION_ITEMS_QUERY}]
    });

    const onChange = async (e, id) => {
        e.preventDefault();
        await addActionItem({variables: {actionItemId: id}});
    }
    return (
        <div>
            <input type={"checkbox"} checked={props.item.resolved} onChange={e => onChange(e, props.item.id)}/>
            {props.item.text}
        </div>
    )
}