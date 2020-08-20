import { gql } from "apollo-boost";

export const deleteDirectorMutation = gql`
  mutation deleteMovie($id: ID) {
    deleteDirector(id: $id) {
      id
    }
  }
`;
