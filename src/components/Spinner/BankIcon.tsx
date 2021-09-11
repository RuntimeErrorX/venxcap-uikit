import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const BankIcon: React.FC<SvgProps> = (props) => {
  const imgSrc = "/images/logo/loading2.png" // : "/images/logo/VenXCapLogoRoundLight.png";
  return (
    <Svg viewBox="0 0 195 195" {...props}>
        <image width="190" height="190" href={imgSrc}/>
    </Svg>
  );
};

export default BankIcon;