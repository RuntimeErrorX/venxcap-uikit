import React from "react";
import styled from "styled-components";
import { VenetianXRound } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  vxcPriceUsd?: number;
  isDark: boolean;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const VXCPrice: React.FC<Props> = ({ vxcPriceUsd, isDark }) => {
  return vxcPriceUsd ? (
    <PriceLink
      href="http://localhost:3000/swap?outputCurrency=0xdA94C8c31e2B0426CEf30E42964cE4d3aa9B06d3"
      target="_blank"
    >
      <VenetianXRound width="24px" mr="8px" isDark={isDark} />
      <Text color="textSubtle" bold>{`$${vxcPriceUsd.toFixed(9)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(VXCPrice);
