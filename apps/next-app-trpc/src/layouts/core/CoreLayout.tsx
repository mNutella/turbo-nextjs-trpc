import React from "react";
import CoreHead, { Props as CoreHeadProps } from "./CoreHead";
import CorePageContainer from "./CorePageContainer";

export type Props = {
  /**
   * Content to display within the layout.
   *
   * Essentially, the page's content.
   */
  children: React.ReactNode;

  /**
   * Class name of the layout.
   *
   * Will be used as tailwind classes for the main wrapper element.
   */
  className?: string;

  /**
   * Props forwarded to the Head component.
   *
   * Essentially, SEO metadata, etc.
   * Will use sane defaults if not specified.
   */
  coreHeadProps?: CoreHeadProps | null;

  /**
   * Wrapper container for the page.
   *
   * @default CorePageContainer
   */
  PageContainer?: React.FC;

  /**
   * Force hiding the nav.
   */
  hideNav?: boolean;

  /**
   * Force hiding the footer.
   */
  hideFooter?: boolean;

  /**
   * Component to use as Head.
   *
   * @default BaseHead
   */
  Head?: React.FC<CoreHeadProps>;

  /**
   * Component to use as Footer.
   *
   * @default BaseFooter
   */
  Footer?: React.FC;

  /**
   * Component to use as Nav.
   *
   * @default BaseNav
   */
  Nav?: React.FC;
};

/**
 * Handles the positioning of top-level elements within the page.
 *
 * It does the following:
 *  - Adds a Nav/Footer component, and the dynamic Next.js "Page" component in between.
 *
 * XXX Core component, meant to be used by layouts, shouldn't be used by other components directly.
 */
const CoreLayout: React.FC<Props> = (props): JSX.Element => {
  const {
    children,
    className,
    coreHeadProps = {},
    PageContainer = CorePageContainer,
    hideNav,
    hideFooter,
    Head = CoreHead,
    Footer = null,
    Nav = null,
  } = props;
  const isNavDisplayed = !hideNav && Nav;
  const isFooterDisplayed = !hideFooter && Footer;

  return (
    <main role="main" className={className}>
      <Head {...coreHeadProps} />

      {isNavDisplayed && <Nav />}

      <PageContainer>{children}</PageContainer>

      {isFooterDisplayed && <Footer />}
    </main>
  );
};

export default CoreLayout;
