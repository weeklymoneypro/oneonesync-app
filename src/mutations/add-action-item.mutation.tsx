import {gql} from "@apollo/client";

export const ADD_ACTION_ITEM_MUTATION = gql`
    mutation AddActionItem($syncEventId: String!, $text: String!) {
        addActionItem(actionItemArgs:{syncEventId: $syncEventId, text: $text}) {
            text
            id
        }
    }
`
