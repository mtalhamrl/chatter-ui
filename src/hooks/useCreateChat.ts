import { useMutation } from "@apollo/client";
import { graphql } from "../gql";
import { ChatFragment } from "../fragments/chat.fragments";

const createChatDocument = graphql(`
  mutation CreateChat($createChatInput: CreateChatInput!) {
    createChat(createChatInput: $createChatInput) {
      ...ChatFragment
    }
  }
`);

const useCreateChat = () => {
  return useMutation(createChatDocument, {
    update(cache, { data }) {
      cache.modify({
        fields: {
          chats(existingChats = []) {
            const newChatRef = cache.writeFragment({
              data: data?.createChat,
              fragment: ChatFragment,
            });
            return [...existingChats, newChatRef];
          },
        },
      });
    },
  });
};

export { useCreateChat };
