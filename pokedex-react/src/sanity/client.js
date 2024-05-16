import { SanityClient } from "@sanity/client";

const options = {
  projectId: "igiu14v5",

  dataset: "production",
};


const client = sanityClient({
  ...options,
  apiVersion: "2021-08-31",
  //Sees i Sanity Studio

  useCdn: true,
});
export default client;