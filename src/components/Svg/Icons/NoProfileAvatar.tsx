import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const imgSrc = theme.isDark ? "/images/investor/VenetianX-ProfilePicGrey.png" : "/images/investor/VenetianX-ProfilePicGrey.png";

  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <img width='32' height='32' src={ imgSrc } 
          srcSet={ imgSrc } />
    </Svg>
  );
};

export default Icon;

// const textColor = isDark ? "#FFFFFF" : "#000000";
// const imgSrc = isDark ? "/images/logo/VXCTopLeftLogoWhtText.png" : "/images/logo/VXCTopLeftLogoBlkText.png";
// return (
//   <Svg viewBox="0 0 172 41" {...props}>
//   <image width="171" height="40" href={imgSrc}/>
//   </Svg>
// );