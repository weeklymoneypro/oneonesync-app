import React from 'react';
import { Checkbox } from "@mui/material";
import { useMutation } from '@apollo/client';

import { ACTION_ITEMS_QUERY } from '../../queries/sync-event.query';
import { UPDATE_TALKING_POINT_MUTATION } from '../../mutations/resolve-talking-point.mutation';

import { TalkingPointType } from '../../types/talking-point.type';

interface Props {
    item: TalkingPointType;
}

export const TalkingPoint: React.FC<Props> = (props) => {
    const [updateTalkingPoint, {data, loading, error}] = useMutation(UPDATE_TALKING_POINT_MUTATION, {
        refetchQueries: [{query: ACTION_ITEMS_QUERY}]
    });

    const onChange = async (e, talkingPointId) => {
        e.preventDefault();
        await updateTalkingPoint({
            variables: {
                talkingPointId,
                resolved: e.target.checked,
            }
        })
    }
    return (
        <div>
            <Checkbox
                checked={props.item.resolved}
                onChange={e => onChange(e, props.item.id)}
            />
            {props.item.text}
        </div>
    )
}