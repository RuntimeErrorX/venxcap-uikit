import React from "react";
import styled from "styled-components";
import { BankRound } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  bankPriceUsd?: number;
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

const BankPrice: React.FC<Props> = ({ bankPriceUsd, isDark }) => {
  return bankPriceUsd ? (
    <PriceLink
      href="http://localhost:3000/swap?outputCurrency=0xca7F55bC7cD3ee83e69d3F366062D68617115F3c"
      target="_blank"
    >
      <BankRound width="24px" mr="8px" isDark={isDark} />
      <Text color="textSubtle" bold>{`$${bankPriceUsd.toFixed(10)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(BankPrice);
