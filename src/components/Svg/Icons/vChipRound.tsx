import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const VChipRound: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const imgSrc = isDark ? "/images/logo/vChipLogoRound.png" : "/images/logo/vChipLogoRound.png"; // add light to end when there's another version
  return (
    <Svg viewBox="0 0 92 92" {...props}>
        <image width="90" height="90" href={imgSrc}/>
    </Svg>
  );
};

export default React.memo(VChipRound, (prev, next) => prev.isDark === next.isDark);
