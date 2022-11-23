import {gql} from "@apollo/client";

export const UPDATE_TALKING_POINT_MUTATION = gql`
    mutation ($talkingPointId: String!, $text: String, $resolved: Boolean) {
        updateTalkingPoint(talkingPointArgs: { 
            id: $talkingPointId, 
            text: $text,
            resolved: $resolved
        }) 
        {
            id
        }
    }
`
