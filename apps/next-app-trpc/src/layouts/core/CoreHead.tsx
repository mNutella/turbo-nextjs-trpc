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
const CoreHead: React.FC<Props> = ({
  additionalContent,
  metaTitle = DEFAULT_META_TITLE,
  metaDescription = DEFAULT_META_DESCRIPTION,
  metaUrl = DEFAULT_META_URL,
  favicon = DEFAULT_FAVICON,
  metaImage = DEFAULT_META_IMAGE,
}): JSX.Element => {
  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{metaTitle}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href={favicon} />

      <NextSeo
        title={metaTitle}
        description={metaDescription}
        canonical={metaUrl}
      />

      {additionalContent && additionalContent}
    </NextHead>
  );
};

export default CoreHead;
