import React from 'react';
import {ActionItem} from "./action-item";
import {ActionItemType} from "../../types/action-item.type";

interface Props {
    items: ActionItemType[];
}

export const ActionItems: React.FC<Props> = (props) => {

    const actionItems = props.items.map((item) => {
        return <ActionItem key={item.id} item={item}/>;
    })
    return (
        <div>
            {actionItems}
        </div>
    )
}