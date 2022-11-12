import {gql} from "@apollo/client";

export const ACTION_ITEMS_QUERY = gql`
    query{
        syncEvent(retrieveSyncEventArgs:{ id:"0ae83f0e-8b5e-4cc2-9ab4-8447106b07e2"}){
            id
            dateStart
            dateEnd
            actionItems {
                id
                text
                resolved
            }
        }
    }
`

