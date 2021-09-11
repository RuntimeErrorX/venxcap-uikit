import React from "react";
import styled, { keyframes } from "styled-components";
import VChipIcon from "./VChipXIcon";
import VenetianXIcon from "./VenetianXIcon";
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
		transform: translatex(35px);
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
  animation: ${rotate} 2.5s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const VChipIcons = styled(VChipIcon)`
  position: absolute;
  padding-top: 1%;
  margin: auto 0px;
  text-align:center;
  animation: ${rotate} 3.25s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const BankIcons = styled(BankIcon)`
  position: absolute;
  padding-top: 1%;
  margin: auto 0px;
  text-align:center;
  animation: ${rotate} 4s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingCoinIcon = styled(VenetianXIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <BankIcons width={`175px`} />
      <VChipIcons width={'175px'} />
      <VenetianXIcons width={`175px`} />
      {/* <FloatingCoinIcon width={`210px`} /> */}
    </Container>
  );
};

export default Spinner;
