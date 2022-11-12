import {gql} from "@apollo/client";

export const RESOLVE_ACTION_ITEM_MUTATION = gql`
    mutation ResolveActionItem($actionItemId: String!) {
        resolveActionItem(actionItemId: $actionItemId) {
            id
        }
    }
`
