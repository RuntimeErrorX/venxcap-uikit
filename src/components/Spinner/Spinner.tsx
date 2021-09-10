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
		transform: translatey(0px);
		transform: translatex(20px);
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
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingCoinIcon = styled(VenetianXIcon)`
  animation: ${float} 4s ease-in-out infinite;
  animation: ${rotate} 2.5s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      {/* <VenetianXIcons width={`${size * 0.5}px`} /> */}
      <FloatingCoinIcon width={`280px`} />
    </Container>
  );
};

export default Spinner;
