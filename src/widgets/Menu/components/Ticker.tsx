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
    <>
        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script>
            <div id="coinmarketcap-widget-marquee">
        </div>
    </>
  ) 
};

export default CryptoTicker;