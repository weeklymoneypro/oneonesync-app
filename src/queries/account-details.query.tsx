import {gql} from "@apollo/client";

export const ACCOUNT_QUERY = gql`
    query ($id: String!) {
        account(id: $id){
            id
            firstName
            lastName
            email
            syncs
        }
    }
`
