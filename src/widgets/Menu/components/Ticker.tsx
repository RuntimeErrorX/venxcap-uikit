import React, { forwardRef, ComponentPropsWithoutRef, ComponentProps, ComponentPropsWithRef } from "react";
  
interface Props {
    vxcPriceUsd?: number;
    isDark: boolean;
  }

  const NativeDivComponent = forwardRef<
    HTMLDivElement,
    ComponentPropsWithoutRef<"div">
  >(({ children, ...props }, ref) => {
    return (
      <div {...props} ref={ref}>
        {children}
      </div>
    );
  });
  
  <NativeDivComponent
    className=""
    style={{ background: "green" }}
    tabIndex={0}
    onTouchStart={() => alert("touched")}
  />;


const CryptoTicker: React.FC<Props> = ({ isDark }) => {

    
return (
    <>{/* <script src="https://widgets.coingecko.com/coingecko-coin-price-marquee-widget.js"></script>
    <coingecko-coin-price-marquee-widget  
    coin-ids="bitcoin,uniswap,pancakeswap-token,sushi,biswap,aave,venus,bancor,compound-coin,curve-dao-token,harvest-finance,apeswap-finance,pancake-bunny,treedefi,1inch,polycake-finance,mochiswap,cafeswap-token,polygonfarm-finance,swampy,yearn-finance-bit,polybull-finance,polycat-finance,goldfarm,yeld-finance" 
    currency="usd" background-color="#1c1c1c" locale="en" font-color="#ffffff">
    </coingecko-coin-price-marquee-widget> */}
    </>
  ) 
};

export default CryptoTicker;