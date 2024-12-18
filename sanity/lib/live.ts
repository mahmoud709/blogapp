import "server-only";
import { defineLive } from "next-sanity";
import { writeClient } from './client'

export const { sanityFetch, SanityLive } = defineLive({ 
  client: writeClient.withConfig({ 
    // Live content is currently only available on the experimental API
    // https://www.sanity.io/docs/api-versioning
    apiVersion: 'vX' 
  }) 
});
