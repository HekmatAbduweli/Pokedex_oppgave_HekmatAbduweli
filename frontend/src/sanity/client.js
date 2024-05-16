import { SanityClient } from "@sanity/client";

const options = {
  projectId: "igiu14v5",
  dataset: "production",
};


const client = SanityClient({
  ...options,
  apiVersion: "2024-05-16",
  //Sees i Sanity Studio

  useCdn: true,
});
export default client;