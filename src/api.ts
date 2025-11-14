import { createClient } from "contentful";

  const spaceID = import.meta.env.VITE_SPACE_ID;
  const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

  export const client = createClient({
    space: spaceID,
    accessToken: accessToken,
  });