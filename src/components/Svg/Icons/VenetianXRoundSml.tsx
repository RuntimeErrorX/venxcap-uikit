import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const VenetianXRoundSml: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const imgSrc = isDark ? "/images/logo/VenXCapLogoRound.png" : "/images/logo/VenXCapLogoRoundLight.png";
  return (
    <Svg viewBox="0 0 42 42" {...props}>
        <image width="40" height="40" href={imgSrc}/>
    </Svg>
  );
};

export default React.memo(VenetianXRoundSml, (prev, next) => prev.isDark === next.isDark);