import {gql} from "@apollo/client";

export const ACTION_ITEMS_QUERY = gql`
    query{
        syncEvent(retrieveSyncEventArgs:{ id:"9679add9-aff0-485c-af95-f05010adbd98"}){
            id
            dateStart
            dateEnd
            actionItems {
                id
                text
                resolved
            }
            talkingPoints {
                id
                text
                resolved
            }
        }
    }
`

