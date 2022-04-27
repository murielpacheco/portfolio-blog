import { AppProps } from 'next/app'
import { PrismicPreview } from '@prismicio/next';
import { PrismicProvider } from '@prismicio/react';
import { linkResolver, repositoryName } from '../services/prismic';
import Link from 'next/link';

import { Header } from '../components/Header'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PrismicProvider
                linkResolver={linkResolver}
                internalLinkComponent={({ href, children, ...props }) => (
                    <Link href={href}>
                        <a {...props}>
                            {children}
                        </a>
                    </Link>
                )}
      >
        
        <PrismicPreview repositoryName={repositoryName}>
          <Header/>
          <Component {...pageProps} />
        </PrismicPreview>
      </PrismicProvider>
    </>
  )
}

export default MyApp
