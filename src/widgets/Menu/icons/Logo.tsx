import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  const imgSrc = isDark ? "/images/logo/VXCTopLeftLogoWhtText.png" : "/images/logo/VXCTopLeftLogoBlkText.png";
  return (
    <Svg viewBox="0 0 160 26" {...props}>
    <image width="128" height="30" href={imgSrc}/>
    </Svg>
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
