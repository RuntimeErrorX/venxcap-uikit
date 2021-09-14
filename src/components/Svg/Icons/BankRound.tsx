import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const BankRound: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const imgSrc = isDark ? "/images/logo/BankRound.png" : "/images/logo/BankRound.png"; // add light to end when there's another version
  return (
    <Svg viewBox="0 0 92 92" {...props}>
        <image width="90" height="90" href={imgSrc}/>
    </Svg>
  );
};

export default React.memo(BankRound, (prev, next) => prev.isDark === next.isDark);
