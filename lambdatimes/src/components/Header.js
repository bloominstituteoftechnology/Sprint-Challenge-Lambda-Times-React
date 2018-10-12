import React from "react";

import { Head, Date, Temp } from "./Style";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

const Header = () => {
  return (
    <Head>
      <span>
        <Date>SMARCH 32, 2018</Date>
      </span>
      <h1>Lambda Times</h1>
      <span>
        <Temp>98°</Temp>
      </span>
    </Head>
  );
};

export default Header;
