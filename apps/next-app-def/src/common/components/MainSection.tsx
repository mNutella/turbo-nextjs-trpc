import React from "react";

type Props = {
  children?: React.ReactNode;
};

// eslint-disable-next-line
const MainSection: React.FC<Props> = ({ children }) => <div>{children}</div>;

export default MainSection;
