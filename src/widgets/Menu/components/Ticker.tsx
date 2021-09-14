import react from 'react'
import ReactDOM from "react-dom";
import React, { forwardRef, ComponentPropsWithoutRef, ComponentProps, ComponentPropsWithRef } from "react";

var createReactClass = require('create-react-class');

export const CryptoTicker = createReactClass({
    constructor() {
      // create a ref to store the textInput DOM element
      this.coins = React.createRef();
    },

    componentDidMount() {
        ReactDOM.findDOMNode
        this.coins.getDOMNode().setAttribute('coins', '1,1027,825,2010,5426,52,7083,6758,3718,1839,2087,8497,7278,10787,9082,10746,7288,1727,5692,6538,2,2083,74,5994,3890,6859,4943,3408,1697,2588,8757,8104,9377,7791');
        this.coins.getDOMNode().setAttribute('currency', 'USD');
        this.coins.getDOMNode().setAttribute('theme', 'dark');
        this.coins.getDOMNode().setAttribute('transparent', 'true');
        this.coins.getDOMNode().setAttribute('show-symbol-logo', 'true');
    },
    render: function() {
        return <><script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script>
            <div ref={this.coins} id="coinmarketcap-widget-marquee">
        </div></>
    }
});
 
        // <div>
        //     <span ref="test">Element with a custom attribute</span>
        // </div>;
// render(<Hello />, document.getElementById('container'));

// return (
//     <>
//         <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script>
//             <div id="coinmarketcap-widget-marquee" coins="1,1027,825,2010,5426,52,7083,6758,3718,1839,2087,8497,7278,10787,9082,10746,7288,1727,5692,6538,2,2083,74,5994,3890,6859,4943,3408,1697,2588,8757,8104,9377,7791" currency="USD" theme="dark" transparent="true" show-symbol-logo="true">
//         </div>
//     </>
//   ) 
// };

export default CryptoTicker;