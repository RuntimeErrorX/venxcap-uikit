import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import Panel from "./components/Panel";
import UserBlock from "./UserBlock";
import { Flex } from "../../components/Flex";
import CryptoTicker from "../Menu/components/Ticker"
import VXCPrice from "./components/VXCPrice"
import VChipPrice from "./components/VChipPrice"
import BankPrice from "./../Menu/components/BankPrice"
// import Avatar from "./Avatar";
import { NavProps } from "./types";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

// transition: top 0.2s;-${MENU_HEIGHT}
  // border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  // height: ${MENU_HEIGHT}px;
const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  transition: top 0.21s;
  padding-top: ${({ showMenu }) => (showMenu ? `70px` : `62px`)};
  transition: padding-top 0.2s;
  padding-bottom: 5px;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.nav.background};
  z-index: 20;
  transform: translate3d(0, 0, 0);
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;
// ${MENU_HEIGHT} - belo 0px
const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `0px` : 0)};
  transition: margin-left 0.2s
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  vxcPriceUsd,
  vchipPriceUsd,
  bankPriceUsd,
  links,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      if (isTopOfPage) {
        setShowMenu(true);
      }
      // Avoid triggering anything at the bottom because of layout shift
      else if (!isBottomOfPage) {
        if (currentOffset < refPrevOffset.current) {
          // Has scroll up
          setShowMenu(true);
        } else {
          // Has scroll down
          setShowMenu(false);
        }
      }
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledNav showMenu={showMenu}>
        <Logo
          isPushed={isPushed}
          togglePush={() => setIsPushed((prevState: boolean) => !prevState)}
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        {/* <nav className="navbar navbar-fixed-bottom">
            <ul className="navbar-nav ml-auto mr-auto">
                <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
                <coingecko-coin-price-marquee-widget coin-ids="bitcoin,ethereum,chainlink,pancakeswap-token,dai,binance-usd,cardano,wbnb,sidekick-token" currency="usd" background-color="#111417" locale="en" font-color="#ffffff" vce-ready=""></coingecko-coin-price-marquee-widget>
            </ul>
        </nav> */}
        {/* <CryptoTicker /> */}
        <VXCPrice vxcPriceUsd={vxcPriceUsd} isDark={isDark} />
        <VChipPrice vchipPriceUsd={vchipPriceUsd} isDark={isDark} />
        <BankPrice bankPriceUsd={bankPriceUsd} isDark={isDark} />
        {/* {userMenu} */}
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
          {/* {profile && <Avatar profile={profile} />} */}
        </Flex>
      </StyledNav>
      <BodyWrapper>
        <Panel
          isPushed={isPushed}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          langs={langs}
          setLang={setLang}
          currentLang={currentLang}
          vxcPriceUsd={vxcPriceUsd}
          pushNav={setIsPushed}
          links={links}
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper>
    </Wrapper>
  );
};

export default Menu;
