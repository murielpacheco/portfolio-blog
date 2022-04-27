import { GetServerSideProps, NextApiRequest } from 'next';
import * as prismic from '@prismicio/client';
import { enableAutoPreviews } from '@prismicio/next';

export const endpoint = "https://portfolio-mrl.prismic.io/api/v2";
export const repositoryName = prismic.getRepositoryName(endpoint);

interface PrismaProps {
   req: NextApiRequest;
   previewData: GetServerSideProps;
}

export function linkResolver(doc) {
   switch (doc.type) {
      case 'homepage':
         return '/'
      case 'page':
         return `/${doc.uid}`
      default:
         return null;
  }
}

interface PrismicResolver {
   [key: string]: any;
}

export function createClient(config: PrismicResolver) {
   const client = prismic.createClient(endpoint, {
     ...config,
   })
 
   enableAutoPreviews({
     client,
     previewData: config.previewData,
     req: config.req,
   })
 
   return client
 }