import type {ReactNode} from 'react';
import Head from '@docusaurus/Head';
import SearchPage from '@theme-original/SearchPage';

// Keep the local search results page out of search engine indexes (it is also left out of
// the sitemap in docusaurus.config.ts).
export default function SearchPageWrapper(props: Record<string, unknown>): ReactNode {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <SearchPage {...props} />
    </>
  );
}
