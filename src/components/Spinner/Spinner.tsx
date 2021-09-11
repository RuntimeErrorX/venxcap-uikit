import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import VenetianXIcon from "./VenetianXIcon";
import VChipIcon from "./VChipXIcon";
import BankIcon from "./BankIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
		transform: translatex(0px);
	}
	50% {
		transform: translatex(50px);
	}
	100% {
		transform: translatey(0px);
		transform: translatex(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const VenetianXIcons = styled(VenetianXIcon)`
  position: absolute;
  padding-top: 1%;
  margin: auto 0px;
  text-align:center;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingCoinIcon = styled(VenetianXIcon)`
  z-index: 3;
  position: absolute;
  animation: ${rotate} 2s linear infinite;
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;
const FloatingCoinIcon1 = styled(VChipIcon)`
  z-index: 2;
  position: absolute;
  animation: ${rotate} 2s linear infinite;
  animation: ${float} 5.25s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;
const FloatingCoinIcon2 = styled(BankIcon)`
  z-index: 1;
  position: absolute;
  animation: ${rotate} 2s linear infinite;
  animation: ${float} 4.75s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      {/* <VenetianXIcons width={`175px`} /> */}
      <FloatingCoinIcon1 width={`190px`} />
      <FloatingCoinIcon2 width={`190px`} />
      <FloatingCoinIcon width={`190px`} />
    </Container>
  );
};

export default Spinner;
