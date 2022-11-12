import React from 'react';
import {ActionItemType} from "../../types/action-item.type";

interface Props {
    item: ActionItemType;
}

export const ActionItem: React.FC<Props> = (props) => (
    <div>{props.item.text} is resolved? {props.item.resolved ? 'Yes' : 'No'}</div>
);