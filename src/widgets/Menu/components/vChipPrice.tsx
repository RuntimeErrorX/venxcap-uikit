import React from "react";
import styled from "styled-components";
import { VChipRound } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  vchipPriceUsd?: number;
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

const VChipPrice: React.FC<Props> = ({ vchipPriceUsd, isDark }) => {
  return vchipPriceUsd ? (
    <PriceLink
      href="http://localhost:3000/swap?outputCurrency=0x70eBEfC51cea896b1742DB245a31D96098b5B8E3"
      target="_blank"
    >
      <VChipRound width="24px" mr="8px" isDark={isDark} />
      <Text color="textSubtle" bold>{`$${vchipPriceUsd.toFixed(10)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(VChipPrice);
