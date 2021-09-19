import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { Box } from "../../components/Box";
import BottomNav from "../../components/BottomNav";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "../../widgets/Menu/icons/Logo"
import { Flex } from "../../components/Flex";
import Footer from "../../components/Footer";
import MenuItems from "../../components/MenuItems/MenuItems";
import SubMenuItems from "../../components/SubMenuItems";
import VXCPrice from "./components/VXCPrice"
import VChipPrice from "./components/VChipPrice"
import BankPrice from "./../Menu/components/BankPrice"
import UserBlock from "./UserBlock";
// import Avatar from "./Avatar";
import { NavProps } from "./types";
import { MENU_HEIGHT, MOBILE_MENU_HEIGHT } from "./config";
import LangSelector from "../../components/LangSelector/LangSelector";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

// transition: top 0.2s;-${MENU_HEIGHT}
  // border-bottom: solid 2px rgba(133, 133, 133, 0.1);
  // height: ${MENU_HEIGHT}px;
  // padding-bottom: ${({ showMenu }) => (showMenu ? `7px` : `3px`)};

const StyledNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  transition: top 0.21s;
  padding-top: ${({ showMenu }) => (showMenu ? `100px` : `85px`)};
  transition: padding-top 0.2s;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.cardBorder};
  z-index: 20;
  transform: translate3d(0, 0, 0);

  padding-left: 16px;
  padding-right: 16px;
`;

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;
// ${MENU_HEIGHT} - belo 0px

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
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
  currentLang,
  setLang,
  vxcPriceUsd,
  vchipPriceUsd,
  bankPriceUsd,
  // spotLightPriceUsd,
  links,
  subLinks,
  footerLinks,
  activeItem,
  activeSubItem,
  langs,
  buyVXCLabel,
  children,
}) => {
  const { isMobile } = useMatchBreakpoints();
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);
  const theme = useTheme();

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
      <Flex>
        <Logo isDark={isDark} href={homeLink?.href ?? "/"} />
        {!isMobile && <MenuItems items={links} activeItem={activeItem} activeSubItem={activeSubItem} ml="24px" />}
      </Flex>
      <Flex alignItems="center">
        {!isMobile && (
          <>
            <Box mr="36px">
              <VXCPrice vxcPriceUsd={vxcPriceUsd} isDark={theme.isDark} />
            </Box><Box mr="36px">
              <VChipPrice vchipPriceUsd={vchipPriceUsd} isDark={theme.isDark} />
            </Box><Box mr="36px">
              <BankPrice bankPriceUsd={bankPriceUsd} isDark={theme.isDark} />
            </Box>
          </>
        )}
        <Box mt="4px">
          <LangSelector
            currentLang={currentLang}
            langs={langs}
            setLang={setLang}
            buttonScale="xs"
            color="textSubtle"
            hideLanguage
          />
        </Box>
        <Flex>
          <UserBlock account={account} login={login} logout={logout} />
          {/* {profile && <Avatar profile={profile} />} */}
        </Flex>
        {/* {globalMenu} {userMenu} */}
      </Flex>
    </StyledNav>
      {subLinks && <SubMenuItems items={subLinks} mt={`${MENU_HEIGHT + 1}px`} activeItem={activeSubItem} />}
      <BodyWrapper>
        <Inner isPushed={false} showMenu={showMenu}>
          {children}
          <Footer
            items={footerLinks}
            isDark={isDark}
            toggleTheme={toggleTheme}
            langs={langs}
            setLang={setLang}
            currentLang={currentLang}
            vxcPriceUsd={vxcPriceUsd}
            vchipPriceUsd={vchipPriceUsd}
            bankPriceUsd={bankPriceUsd}
            buyVXCLabel={buyVXCLabel}
            mb={[`${MOBILE_MENU_HEIGHT}px`, null, "0px"]}
          />
        </Inner>
      </BodyWrapper>
      {isMobile && <BottomNav items={links} activeItem={activeItem} activeSubItem={activeSubItem} />}
      {/* <BodyWrapper>
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
        />
        <Inner isPushed={isPushed} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isPushed} onClick={() => setIsPushed(false)} role="presentation" />
      </BodyWrapper> */}
    </Wrapper>
  );
};

export default Menu;
