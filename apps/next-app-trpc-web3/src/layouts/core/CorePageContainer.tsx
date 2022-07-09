import React from "react";

export type Props = {
  className?: string;
  children: React.ReactNode;
};

/**
 * Page wrapper handling the display of the Next.js Page component (as "children").
 *
 * XXX Core component, meant to be used by other layouts, shouldn't be used by other components directly.
 */
const CorePageContainer: React.FC<Props> = ({
  className,
  children,
}): JSX.Element => <div className={className}>{children}</div>;

export default CorePageContainer;
