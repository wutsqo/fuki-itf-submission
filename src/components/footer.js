import React from "react";
import tw from "twin.macro";

const FooterContainer = tw.div`text-center bg-skyblue text-whitesmoke p-4 text-sm mt-8`;

const Footer = () => {
  return (
    <FooterContainer>
      &lt;/&gt; with ♥ by Muhammad Urwatil Wutsqo
    </FooterContainer>
  );
};

export default Footer;
