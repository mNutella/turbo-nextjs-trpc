import React from "react";
import NextHead from "next/head";
import { NextSeo } from "next-seo";

import {
  DEFAULT_FAVICON,
  DEFAULT_META_DESCRIPTION,
  DEFAULT_META_IMAGE,
  DEFAULT_META_TITLE,
  DEFAULT_META_URL,
} from "@/utils/constants";

export type Props = {
  /**
   * Title of the page. (SEO)
   *
   * Displayed in the browser tab.
   */
  metaTitle?: string;

  /**
   * Description of the page. (SEO)
   *
   * Used as Open Graph and twitter description.
   */
  metaDescription?: string;

  /**
   * Url of the page. (SEO)
   *
   * Used as Open Graph url.
   */
  metaUrl?: string;

  /**
   * Image associated with the page. (SEO)
   *
   * Used as Open Graph and twitter image.
   */
  metaImage?: string | null;

  /**
   * Favicon.
   *
   * Websites usually use the same favicon for all their pages.
   */
  favicon?: string;

  /**
   * Additional links and scripts HTML elements.
   *
   * Can be used to load 3rd party scripts and such.
   * It is recommended to use a "<Fragment>" as wrapper.
   */
  additionalContent?: React.ReactElement;
};

/**
 * Custom Next.js Head component.
 *
 * Configures SEO, load fonts.
 * XXX Core component, meant to be used by other layouts, shouldn't be used by other components directly.
 *
 */
const CoreHead: React.FC<Props> = (props): JSX.Element => {
  const { additionalContent = null } = props;
  let { metaTitle, metaDescription, metaUrl, favicon, metaImage } = props;
  metaTitle = metaTitle || DEFAULT_META_TITLE;
  metaDescription = metaDescription || DEFAULT_META_DESCRIPTION;
  // eslint-disable-next-line
  metaUrl = metaUrl || DEFAULT_META_URL;
  favicon = favicon || DEFAULT_FAVICON;
  // eslint-disable-next-line
  metaImage = metaImage || DEFAULT_META_IMAGE;

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />

      <NextSeo title={metaTitle} description={metaDescription} />

      {/* 
      <meta property="og:url" content={metaUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta name="twitter:site" content={metaUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={metaImage} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" /> */}

      {additionalContent && additionalContent}
    </NextHead>
  );
};

export default CoreHead;
