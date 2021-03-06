import React from "react";

type Props = {
  children?: React.ReactNode;
};

const MainSection: React.FC<Props> = ({ children }) => <div>{children}</div>;

export default MainSection;
