import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const vChipIcon: React.FC<SvgProps> = (props) => {
  const imgSrc = "/images/logo/loading1.png" // : "/images/logo/VenXCapLogoRoundLight.png";
  return (
    <Svg viewBox="0 0 210 210" {...props}>
        <image width="210" height="210" href={imgSrc}/>
    </Svg>
  );
};

export default vChipIcon;