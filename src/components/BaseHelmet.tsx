import {Head} from 'vite-react-ssg';

interface OGMeta {
  title: string;
  url: string;
  description: string;
  image: {
    src: string;
    width: string;
    height: string;
  };
}

export const WEDDING_META: OGMeta = {
  title: 'Surya & Apri Tied The Knot at 11 Juni 2025',
  url: 'https://suryaapritiedtheknot.site',
  description:
    'Celebrating the love of Surya & Apri — 11 Juni 2025. View their story and wedding moments',
  image: {
    src: `https://raw.githubusercontent.com/imdbsd/invitation/refs/heads/main/public/og_image_prewed.jpg`,
    width: '600',
    height: '325',
  },
};

export const SIRAMAN_META: OGMeta = {
  title: 'Siraman Surya & Apri Tied The Knot at 1 Juni 2025',
  url: 'https://suryaapritiedtheknot.site/siraman',
  description:
    'Celebrating the love of Surya & Apri — 1 Juni 2025. View their story and wedding moments',
  image: {
    src: `https://raw.githubusercontent.com/imdbsd/invitation/refs/heads/main/public/og_image_siraman.jpg`,
    width: '600',
    height: '325',
  },
};

const BaseHelmet = ({meta}: {meta: OGMeta}) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta property="description" content={meta.description} />
      <link rel="canonical" href={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={meta.image.src} />
      <meta property="og:image:width" content={meta.image.width} />
      <meta property="og:image:height" content={meta.image.height} />
      <meta property="og:url" content={meta.url} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta property="twitter:image" content={meta.image.src} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default BaseHelmet;
