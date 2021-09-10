import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import VenetianXIcon from "./VenetianXIcon";
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
    transform: scale(1) translate(-2px, -2px);
	}
	100% {
    transform: scale(0) translate(-2px, -2px);
		transform: translatey(0px);
		transform: translatex(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const VenetianXIcons = styled(VenetianXIcon)`
  position: absolute;
  margin: 0px auto;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingCoinIcon = styled(PanIcon)`
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <VenetianXIcons width={`195px`} />
      {/* <FloatingCoinIcon width={`200px`} /> */}
    </Container>
  );
};

export default Spinner;
