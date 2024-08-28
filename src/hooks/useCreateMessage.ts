import { useMutation } from "@apollo/client";
import { graphql } from "../gql";

const createMessageDocument = graphql(`
  mutation CreateMessage($createMessageInput: CreateMessageInput!) {
    createMessage(createMessageInput: $createMessageInput) {
      _id
      content
      createAt
    }
  }
`);

const useCreateMessage = () => {
  return useMutation(createMessageDocument);
};
export { useCreateMessage };
