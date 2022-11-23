import {gql} from "@apollo/client";

export const RESOLVE_ACTION_ITEM_MUTATION = gql`
    mutation ($actionItemId: String!) {
        resolveActionItem(actionItemId: $actionItemId) {
            id
        }
    }
`
