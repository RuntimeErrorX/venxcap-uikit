import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const VenetianXIcon: React.FC<SvgProps> = (props) => {
  const imgSrc = "/images/logo/loading.png" // : "/images/logo/VenXCapLogoRoundLight.png";
  return (
    <Svg viewBox="0 0 180 180" {...props}>
        <image width="90" height="90" href={imgSrc}/>
    </Svg>
  );
};

export default VenetianXIcon;
