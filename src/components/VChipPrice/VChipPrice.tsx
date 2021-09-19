import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";
import { VChipRound } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

interface Props {
  color?: keyof Colors;
  vchipPriceUsd?: number;
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

const VChipPrice: React.FC<Props> = ({ vchipPriceUsd, color = "textSubtle" }) => {
const theme = useTheme();

  return vchipPriceUsd ? (
    <PriceLink
      href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
      target="_blank"
    >
      <VChipRound width="24px" mr="8px" isDark={theme.isDark} />
      <Text color={color} bold>{`$${vchipPriceUsd.toFixed(9)}`}</Text> {/* color={color} */}
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(VChipPrice);
