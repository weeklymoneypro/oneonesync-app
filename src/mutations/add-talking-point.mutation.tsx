import {gql} from "@apollo/client";

export const ADD_TALKING_POINT_MUTATION= gql`
    mutation ($syncEventId: String!, $text: String!) {
        addTalkingPoint(talkingPointArgs:{syncEventId: $syncEventId, text: $text}) {
            text
            id
        }
    }
`
