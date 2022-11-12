import React from 'react';
import { ActionItemType } from '../../types/action-item.type';

interface Props {
    item: ActionItemType;
}

export const TalkingPoint: React.FC<Props> = (props) => {
    const onChange = async (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <input type={"checkbox"} checked={props.item.resolved} onChange={onChange}/>
            {props.item.text}
        </div>
    )
}