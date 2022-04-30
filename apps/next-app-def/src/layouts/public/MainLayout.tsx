import React from "react";
import { Navbar, Footer } from "ui";

import CoreLayout, { Props as CoreLayoutProps } from "../core/CoreLayout";

type Props = CoreLayoutProps & {
  footer?: boolean;
};

const MainLayout: React.FC<Props> = ({
  footer = true,
  ...rest
}): JSX.Element => {
  return (
    <CoreLayout Nav={Navbar} Footer={footer ? Footer : undefined} {...rest} />
  );
};

export default MainLayout;
