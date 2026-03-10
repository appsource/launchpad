"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[9972],{69972:(e,t,i)=>{i.r(t),i.d(t,{AppKitModal:()=>_t,W3mListWallet:()=>Gt,W3mModal:()=>Ft,W3mModalBase:()=>Lt,W3mRouterContainer:()=>Jt,W3mUsageExceededView:()=>Ht});var n=i(66386),r=i(43756),o=i(54417),a=i(93060),s=i(47443),c=i(83520),l=i(53993),d=i(421),u=i(8632),p=i(82994),h=i(40196);const m={isUnsupportedChainView:()=>"UnsupportedChain"===u.P.state.view||"SwitchNetwork"===u.P.state.view&&u.P.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void s.I.shake();await h.w.isSIWXCloseDisabled()?s.I.shake():("DataCapture"!==u.P.state.view&&"DataCaptureOtpConfirm"!==u.P.state.view||p.l.disconnect(),s.I.close())}};var g=i(86533),w=i(90891),y=i(25984),f=i(96464),b=i(9886),v=i(47753),x=i(15955);const k=x.iv`
  :host {
    display: block;
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[8]}}, 44px);
    box-shadow: 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    overflow: hidden;
  }
`;var C=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let S=class extends n.oi{render(){return n.dy`<slot></slot>`}};S.styles=[b.ET,k],S=C([(0,v.M)("wui-card")],S);i(20255);var $=i(60825);i(76293),i(73307),i(2416);const I=x.iv`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    box-sizing: border-box;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderSuccess}};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundWarning}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderWarning}};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};

      wui-icon {
        color: ${e=>{let{tokens:t}=e;return t.core.borderError}};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
    background-color: var(--local-icon-bg-value);
  }
`;var P=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const A={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let E=class extends n.oi{constructor(){super(...arguments),this.message="",this.type="info"}render(){return n.dy`
      <wui-flex
        data-type=${(0,o.o)(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${A[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){$.B.close()}};E.styles=[b.ET,I],P([(0,r.Cb)()],E.prototype,"message",void 0),P([(0,r.Cb)()],E.prototype,"type",void 0),E=P([(0,v.M)("wui-alertbar")],E);const R=f.iv`
  :host {
    display: block;
    position: absolute;
    top: ${e=>{let{spacing:t}=e;return t[3]}};
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    right: ${e=>{let{spacing:t}=e;return t[4]}};
    opacity: 0;
    pointer-events: none;
  }
`;var N=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const T={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let O=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.open=$.B.state.open,this.onOpen(!0),this.unsubscribe.push($.B.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=$.B.state,i=T[t];return n.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${null===i||void 0===i?void 0:i.backgroundColor}
        iconColor=${null===i||void 0===i?void 0:i.iconColor}
        icon=${null===i||void 0===i?void 0:i.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};O.styles=R,N([(0,r.SB)()],O.prototype,"open",void 0),O=N([(0,f.Mo)("w3m-alertbar")],O);var B=i(66107),j=i(32751),q=i(26367);const z=x.iv`
  :host {
    position: relative;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  /* -- Colors --------------------------------------------------- */
  button[data-type='accent'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
  }

  button[data-type='neutral'][data-variant='primary'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconInverse}};
  }

  button[data-type='neutral'][data-variant='secondary'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  button[data-type='success'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconSuccess}};
  }

  button[data-type='error'] wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.core.iconError}};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='xs'] {
    width: 16px;
    height: 16px;

    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='sm'] {
    width: 20px;
    height: 20px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='md'] {
    width: 24px;
    height: 24px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='lg'] {
    width: 28px;
    height: 28px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='xs'] wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='md'] wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] wui-icon {
    width: 20px;
    height: 20px;
  }

  /* -- Hover --------------------------------------------------- */
  @media (hover: hover) {
    button[data-type='accent']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
    }

    button[data-variant='primary'][data-type='neutral']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }

    button[data-variant='secondary'][data-type='neutral']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }

    button[data-type='success']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
    }

    button[data-type='error']:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};
    }
  }

  /* -- Focus --------------------------------------------------- */
  button:focus-visible {
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  /* -- Properties --------------------------------------------------- */
  button[data-full-width='true'] {
    width: 100%;
  }

  :host([fullWidth]) {
    width: 100%;
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var W=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let D=class extends n.oi{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return n.dy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,o.o)(this.iconSize)}></wui-icon>
    </button>`}};D.styles=[b.ET,b.ZM,z],W([(0,r.Cb)()],D.prototype,"icon",void 0),W([(0,r.Cb)()],D.prototype,"variant",void 0),W([(0,r.Cb)()],D.prototype,"type",void 0),W([(0,r.Cb)()],D.prototype,"size",void 0),W([(0,r.Cb)()],D.prototype,"iconSize",void 0),W([(0,r.Cb)({type:Boolean})],D.prototype,"fullWidth",void 0),W([(0,r.Cb)({type:Boolean})],D.prototype,"disabled",void 0),D=W([(0,v.M)("wui-icon-button")],D);i(37640);const U=x.iv`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    opacity: 0.5;
  }
`;var L=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const F={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},_={lg:"lg",md:"md",sm:"sm"};let M=class extends n.oi{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return n.dy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=F[this.size];return this.text?n.dy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return n.dy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=_[this.size];return n.dy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};M.styles=[b.ET,b.ZM,U],L([(0,r.Cb)()],M.prototype,"imageSrc",void 0),L([(0,r.Cb)()],M.prototype,"text",void 0),L([(0,r.Cb)()],M.prototype,"size",void 0),L([(0,r.Cb)()],M.prototype,"type",void 0),L([(0,r.Cb)({type:Boolean})],M.prototype,"disabled",void 0),M=L([(0,v.M)("wui-select")],M);i(76627),i(57104);var K=i(74273),H=(i(45004),i(73706),i(98777),i(51943),i(11753),i(77395),i(4627),i(39406),i(35666),i(24227)),Q=i(31085),V=i(46460),Y=i(42972),G=i(31453),X=i(82880),Z=i(37082),J=i(87051);const ee="INVALID_PAYMENT_CONFIG",te="INVALID_RECIPIENT",ie="INVALID_ASSET",ne="INVALID_AMOUNT",re="UNKNOWN_ERROR",oe="UNABLE_TO_INITIATE_PAYMENT",ae="INVALID_CHAIN_NAMESPACE",se="GENERIC_PAYMENT_ERROR",ce="UNABLE_TO_GET_EXCHANGES",le="ASSET_NOT_SUPPORTED",de="UNABLE_TO_GET_PAY_URL",ue="UNABLE_TO_GET_BUY_STATUS",pe="UNABLE_TO_GET_QUOTE",he="UNABLE_TO_GET_QUOTE_STATUS",me="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",ge={[ee]:"Invalid payment configuration",[te]:"Invalid recipient address",[ie]:"Invalid asset specified",[ne]:"Invalid payment amount",[me]:"Invalid recipient address for the asset selected",[re]:"Unknown payment error occurred",[oe]:"Unable to initiate payment",[ae]:"Invalid chain namespace",[se]:"Unable to process payment",[ce]:"Unable to get exchanges",[le]:"Asset not supported by the selected exchange",[de]:"Unable to get payment URL",[ue]:"Unable to get buy status",["UNABLE_TO_GET_TOKEN_BALANCES"]:"Unable to get token balances",[pe]:"Unable to get quote. Please choose a different token",[he]:"Unable to get quote status"};class we extends Error{get message(){return ge[this.code]}constructor(e,t){super(ge[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,we)}}var ye=i(78528),fe=i(95174);const be="reown_test";var ve=i(90511),xe=i(62510);function ke(e){if(!e)return null;const t=e.steps[0];return t&&t.type===We?t:null}function Ce(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return[];const i=e.steps.filter((e=>e.type===De)),n=i.filter(((e,i)=>i+1>t));return i.length>0&&i.length<3?n:[]}const Se=new ye.V({baseUrl:X.j.getApiUrl(),clientId:null});class $e extends Error{}function Ie(){const{projectId:e,sdkType:t,sdkVersion:i}=a.h.state;return{projectId:e,st:t||"appkit",sv:i||"html-wagmi-4.2.2"}}async function Pe(e,t){const i=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${a.h.getSnapshot().projectId}`,{sdkType:n,sdkVersion:r,projectId:o}=a.h.getSnapshot(),s={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:n,sv:r,projectId:o}},c=await fetch(i,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}),l=await c.json();if(l.error)throw new $e(l.error.message);return l}async function Ae(e){return(await Pe("reown_getExchanges",e)).result}async function Ee(e){return(await Pe("reown_getExchangePayUrl",e)).result}async function Re(e){const t=J.g.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),i=J.g.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&i?async function(e){var t,i,n;let{sourceToken:r,toToken:o,amount:a,recipient:s}=e;const c=p.l.parseUnits(a,r.metadata.decimals),l=p.l.parseUnits(a,o.metadata.decimals);return Promise.resolve({type:ze,origin:{amount:null!==(t=null===c||void 0===c?void 0:c.toString())&&void 0!==t?t:"0",currency:r},destination:{amount:null!==(i=null===l||void 0===l?void 0:l.toString())&&void 0!==i?i:"0",currency:o},fees:[{id:"service",label:"Service Fee",amount:"0",currency:o}],steps:[{requestId:ze,type:"deposit",deposit:{amount:null!==(n=null===c||void 0===c?void 0:c.toString())&&void 0!==n?n:"0",currency:r.asset,receiver:s}}],timeInSeconds:6})}(e):async function(e){const t=G.C.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:i,chainNamespace:n}=Y.u.parseCaipNetworkId(e.sourceToken.network),{chainId:r,chainNamespace:o}=Y.u.parseCaipNetworkId(e.toToken.network),a="native"===e.sourceToken.asset?(0,fe.rG)(n):e.sourceToken.asset,s="native"===e.toToken.asset?(0,fe.rG)(o):e.toToken.asset;return await Se.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:i.toString(),originCurrency:a,destinationChainId:r.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:Ie()})}(e)}const Ne=["eip155","solana"],Te={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}},Oe={56:"714",204:"714"};function Be(e,t){const{chainNamespace:i,chainId:n}=Y.u.parseCaipNetworkId(e),r=Te[i];if(!r)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${i}`);let o=r.native.assetNamespace,a=r.native.assetReference;"native"!==t?(o=r.defaultTokenNamespace,a=t):"eip155"===i&&Oe[n]&&(a=Oe[n]);return`${`${i}:${n}`}/${o}:${a}`}function je(e){const t=G.C.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}const qe="unknown",ze="direct-transfer",We="deposit",De="transaction",Ue=(0,H.sj)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[V.b.CHAIN.EVM]:[],[V.b.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),Le={state:Ue,subscribe:e=>(0,H.Ld)(Ue,(()=>e(Ue))),subscribeKey:(e,t)=>(0,Q.VW)(Ue,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){const{chainNamespace:e}=Y.u.parseCaipNetworkId(Le.state.paymentAsset.network);if(!X.j.isAddress(Le.state.recipient,e))throw new we(me,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),Ue.isConfigured=!0,q.X.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:Ue.exchanges,configuration:{network:Ue.paymentAsset.network,asset:Ue.paymentAsset.asset,recipient:Ue.recipient,amount:Ue.amount}}}),await s.I.open({view:"Pay"})},resetState(){Ue.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},Ue.recipient="0x0",Ue.amount=0,Ue.isConfigured=!1,Ue.error=null,Ue.isPaymentInProgress=!1,Ue.isLoading=!1,Ue.currentPayment=void 0,Ue.selectedExchange=void 0,Ue.exchangeUrlForQuote=void 0,Ue.requestId=void 0},resetQuoteState(){Ue.quote=void 0,Ue.quoteStatus="waiting",Ue.quoteError=null,Ue.isFetchingQuote=!1,Ue.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new we(ee);try{var t,i;Ue.choice=null!==(t=e.choice)&&void 0!==t?t:"pay",Ue.paymentAsset=e.paymentAsset,Ue.recipient=e.recipient,Ue.amount=e.amount,Ue.openInNewTab=null===(i=e.openInNewTab)||void 0===i||i,Ue.redirectUrl=e.redirectUrl,Ue.payWithExchange=e.payWithExchange,Ue.error=null}catch(n){throw new we(ee,n.message)}},setSelectedPaymentAsset(e){Ue.selectedPaymentAsset=e},setSelectedExchange(e){Ue.selectedExchange=e},setRequestId(e){Ue.requestId=e},setPaymentInProgress(e){Ue.isPaymentInProgress=e},getPaymentAsset:()=>Ue.paymentAsset,getExchanges:()=>Ue.exchanges,async fetchExchanges(){try{Ue.isLoading=!0;const e=await Ae({page:0});Ue.exchanges=e.exchanges.slice(0,2)}catch(e){throw w.K.showError(ge.UNABLE_TO_GET_EXCHANGES),new we(ce)}finally{Ue.isLoading=!1}},async getAvailableExchanges(e){try{var t,i;const n=null!==e&&void 0!==e&&e.asset&&null!==e&&void 0!==e&&e.network?Be(e.network,e.asset):void 0;return await Ae({page:null!==(t=null===e||void 0===e?void 0:e.page)&&void 0!==t?t:0,asset:n,amount:null===e||void 0===e||null===(i=e.amount)||void 0===i?void 0:i.toString()})}catch(n){throw new we(ce)}},async getPayUrl(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{const n=Number(t.amount),r=await Ee({exchangeId:e,asset:Be(t.network,t.asset),amount:n.toString(),recipient:`${t.network}:${t.recipient}`});return q.X.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e},headless:i}}),i&&(this.initiatePayment(),q.X.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:Ue.paymentId||qe,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:n},currentPayment:{type:"exchange",exchangeId:e}}})),r}catch(n){if(n instanceof Error&&n.message.includes("is not supported"))throw new we(le);throw new Error(n.message)}},async generateExchangeUrlForQuote(e){let{exchangeId:t,paymentAsset:i,amount:n,recipient:r}=e;const o=await Ee({exchangeId:t,asset:Be(i.network,i.asset),amount:n.toString(),recipient:r});Ue.exchangeSessionId=o.sessionId,Ue.exchangeUrlForQuote=o.url},async openPayUrl(e,t){let i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{var n;const r=await this.getPayUrl(e.exchangeId,t,i);if(!r)throw new we(de);const o=null===(n=e.openInNewTab)||void 0===n||n?"_blank":"_self";return X.j.openHref(r.url,o),r}catch(r){throw Ue.error=r instanceof we?r.message:ge.GENERIC_PAYMENT_ERROR,new we(de)}},async onTransfer(e){let{chainNamespace:t,fromAddress:i,toAddress:n,amount:r,paymentAsset:o}=e;if(Ue.currentPayment={type:"wallet",status:"IN_PROGRESS"},!Ue.isPaymentInProgress)try{this.initiatePayment();const e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===o.network));if(!e)throw new Error("Target network not found");const a=c.R.state.activeCaipNetwork;switch(J.g.isLowerCaseMatch(null===a||void 0===a?void 0:a.caipNetworkId,e.caipNetworkId)||await c.R.switchActiveNetwork(e),t){case V.b.CHAIN.EVM:"native"===o.asset&&(Ue.currentPayment.result=await async function(e,t,i){var n,r;if(t!==V.b.CHAIN.EVM)throw new we(ae);if(!i.fromAddress)throw new we(ee,"fromAddress is required for native EVM payments.");const o="string"===typeof i.amount?parseFloat(i.amount):i.amount;if(isNaN(o))throw new we(ee);const a=null!==(n=null===(r=e.metadata)||void 0===r?void 0:r.decimals)&&void 0!==n?n:18,s=p.l.parseUnits(o.toString(),a);if("bigint"!==typeof s)throw new we(se);const c=await p.l.sendTransaction({chainNamespace:t,to:i.recipient,address:i.fromAddress,value:s,data:"0x"});return null!==c&&void 0!==c?c:void 0}(o,t,{recipient:n,amount:r,fromAddress:i})),o.asset.startsWith("0x")&&(Ue.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new we(ee,"fromAddress is required for ERC20 EVM payments.");const i=e.asset,n=t.recipient,r=Number(e.metadata.decimals),o=p.l.parseUnits(t.amount.toString(),r);if(void 0===o)throw new we(se);const a=await p.l.writeContract({fromAddress:t.fromAddress,tokenAddress:i,args:[n,o],method:"transfer",abi:ve.g.getERC20Abi(i),chainNamespace:V.b.CHAIN.EVM});return null!==a&&void 0!==a?a:void 0}(o,{recipient:n,amount:r,fromAddress:i})),Ue.currentPayment.status="SUCCESS";break;case V.b.CHAIN.SOLANA:Ue.currentPayment.result=await async function(e,t){if(e!==V.b.CHAIN.SOLANA)throw new we(ae);if(!t.fromAddress)throw new we(ee,"fromAddress is required for Solana payments.");const i="string"===typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(i)||i<=0)throw new we(ee,"Invalid payment amount.");try{if(!xe.O.getProvider(e))throw new we(se,"No Solana provider available.");const n=await p.l.sendTransaction({chainNamespace:V.b.CHAIN.SOLANA,to:t.recipient,value:i,tokenMint:t.tokenMint});if(!n)throw new we(se,"Transaction failed.");return n}catch(n){if(n instanceof we)throw n;throw new we(se,`Solana payment failed: ${n}`)}}(t,{recipient:n,amount:r,fromAddress:i,tokenMint:"native"===o.asset?void 0:o.asset}),Ue.currentPayment.status="SUCCESS";break;default:throw new we(ae)}}catch(a){throw Ue.error=a instanceof we?a.message:ge.GENERIC_PAYMENT_ERROR,Ue.currentPayment.status="FAILED",w.K.showError(Ue.error),a}finally{Ue.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:i}=e;Le.initiatePayment();const n=c.R.getAllRequestedCaipNetworks().find((e=>{var t;return e.caipNetworkId===(null===(t=Ue.paymentAsset)||void 0===t?void 0:t.network)}));if(!n)throw new Error("Target network not found");const r=c.R.state.activeCaipNetwork;if(J.g.isLowerCaseMatch(null===r||void 0===r?void 0:r.caipNetworkId,n.caipNetworkId)||await c.R.switchActiveNetwork(n),t===V.b.CHAIN.EVM){const{from:e,to:n,data:r,value:o}=i.transaction;await p.l.sendTransaction({address:e,to:n,data:r,value:BigInt(o),chainNamespace:t})}else if(t===V.b.CHAIN.SOLANA){const{instructions:e}=i.transaction;await p.l.writeSolanaTransaction({instructions:e})}}catch(t){throw Ue.error=t instanceof we?t.message:ge.GENERIC_PAYMENT_ERROR,w.K.showError(Ue.error),t}finally{Ue.isPaymentInProgress=!1}},getExchangeById:e=>Ue.exchanges.find((t=>t.id===e)),validatePayConfig(e){const{paymentAsset:t,recipient:i,amount:n}=e;if(!t)throw new we(ee);if(!i)throw new we(te);if(!t.asset)throw new we(ie);if(void 0===n||null===n||n<=0)throw new we(ne)},async handlePayWithExchange(e){try{Ue.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:i}=Ue.paymentAsset,n={network:t,asset:i,amount:Ue.amount,recipient:Ue.recipient},r=await this.getPayUrl(e,n);if(!r)throw new we(oe);return Ue.currentPayment.sessionId=r.sessionId,Ue.currentPayment.status="IN_PROGRESS",Ue.currentPayment.exchangeId=e,this.initiatePayment(),{url:r.url,openInNewTab:Ue.openInNewTab}}catch(t){return Ue.error=t instanceof we?t.message:ge.GENERIC_PAYMENT_ERROR,Ue.isPaymentInProgress=!1,w.K.showError(Ue.error),null}},async getBuyStatus(e,t){try{const r=await async function(e){return(await Pe("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});var i,n;if("SUCCESS"===r.status||"FAILED"===r.status)q.X.sendEvent({type:"track",event:"SUCCESS"===r.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===r.status?X.j.parseError(Ue.error):void 0,source:"pay",paymentId:Ue.paymentId||qe,configuration:{network:Ue.paymentAsset.network,asset:Ue.paymentAsset.asset,recipient:Ue.recipient,amount:Ue.amount},currentPayment:{type:"exchange",exchangeId:null===(i=Ue.currentPayment)||void 0===i?void 0:i.exchangeId,sessionId:null===(n=Ue.currentPayment)||void 0===n?void 0:n.sessionId,result:r.txHash}}});return r}catch(r){throw new we(ue)}},async fetchTokensFromEOA(e){let{caipAddress:t,caipNetwork:i,namespace:n}=e;if(!t)return[];const{address:r}=Y.u.parseCaipAddress(t);let o=i;n===V.b.CHAIN.EVM&&(o=void 0);return await Z.Q.getMyTokensWithBalance({address:r,caipNetwork:o})},async fetchTokensFromExchange(){if(!Ue.selectedExchange)return[];const e=await async function(e){return await Se.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:Ie()})}(Ue.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map((async e=>{var t;const i={chainId:(n=e).network,address:`${n.network}:${n.asset}`,symbol:n.metadata.symbol,name:n.metadata.name,iconUrl:n.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:n.metadata.decimals.toString()}};var n;const{chainNamespace:r}=Y.u.parseCaipNetworkId(i.chainId);let o=i.address;if(X.j.isCaipAddress(o)){const{address:e}=Y.u.parseCaipAddress(o);o=e}const a=await B.f.getImageByToken(null!==(t=o)&&void 0!==t?t:"",r).catch((()=>{}));return i.iconUrl=null!==a&&void 0!==a?a:"",i})))},async fetchTokens(e){let{caipAddress:t,caipNetwork:i,namespace:n}=e;try{Ue.isFetchingTokenBalances=!0;const e=Boolean(Ue.selectedExchange)?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:t,caipNetwork:i,namespace:n}),r=await e;Ue.tokenBalances={...Ue.tokenBalances,[n]:r}}catch(r){const e=r instanceof Error?r.message:"Unable to get token balances";w.K.showError(e)}finally{Ue.isFetchingTokenBalances=!1}},async fetchQuote(e){let{amount:t,address:i,sourceToken:n,toToken:r,recipient:o}=e;try{Le.resetQuoteState(),Ue.isFetchingQuote=!0;const e=await Re({amount:t,address:Ue.selectedExchange?void 0:i,sourceToken:n,toToken:r,recipient:o});if(Ue.selectedExchange){const t=ke(e);if(t){var a;const e=`${n.network}:${t.deposit.receiver}`,i=G.C.formatNumber(t.deposit.amount,{decimals:null!==(a=n.metadata.decimals)&&void 0!==a?a:0,round:8});await Le.generateExchangeUrlForQuote({exchangeId:Ue.selectedExchange.id,paymentAsset:n,amount:i.toString(),recipient:e})}}Ue.quote=e}catch(s){let e=ge.UNABLE_TO_GET_QUOTE;if(s instanceof Error&&s.cause&&s.cause instanceof Response)try{const t=await s.cause.json();t.error&&"string"===typeof t.error&&(e=t.error)}catch{}throw Ue.quoteError=e,w.K.showError(e),new we(pe)}finally{Ue.isFetchingQuote=!1}},async fetchQuoteStatus(e){let{requestId:t}=e;try{if(t===ze){const e=Ue.selectedExchange,t=Ue.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:Ue.quoteStatus="waiting";break;case"SUCCESS":Ue.quoteStatus="success",Ue.isPaymentInProgress=!1;break;case"FAILED":Ue.quoteStatus="failure",Ue.isPaymentInProgress=!1}return}return void(Ue.quoteStatus="success")}const{status:e}=await async function(e){return await Se.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,...Ie()}})}({requestId:t});Ue.quoteStatus=e}catch{throw Ue.quoteStatus="failure",new we(he)}},initiatePayment(){Ue.isPaymentInProgress=!0,Ue.paymentId=crypto.randomUUID()},initializeAnalytics(){Ue.analyticsSet||(Ue.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",(e=>{var t;if(null!==(t=Ue.currentPayment)&&void 0!==t&&t.status&&"UNKNOWN"!==Ue.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[Ue.currentPayment.status];q.X.sendEvent({type:"track",event:e,properties:{message:"FAILED"===Ue.currentPayment.status?X.j.parseError(Ue.error):void 0,source:"pay",paymentId:Ue.paymentId||qe,configuration:{network:Ue.paymentAsset.network,asset:Ue.paymentAsset.asset,recipient:Ue.recipient,amount:Ue.amount},currentPayment:{type:Ue.currentPayment.type,exchangeId:Ue.currentPayment.exchangeId,sessionId:Ue.currentPayment.sessionId,result:Ue.currentPayment.result}}})}})))},async prepareTokenLogo(){if(!Ue.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=Y.u.parseCaipNetworkId(Ue.paymentAsset.network),t=await B.f.getImageByToken(Ue.paymentAsset.asset,e);Ue.paymentAsset.metadata.logoURI=t}catch{}}},Fe=f.iv`
  wui-separator {
    margin: var(--apkt-spacing-3) calc(var(--apkt-spacing-3) * -1) var(--apkt-spacing-2)
      calc(var(--apkt-spacing-3) * -1);
    width: calc(100% + var(--apkt-spacing-3) * 2);
  }

  .token-display {
    padding: var(--apkt-spacing-3) var(--apkt-spacing-3);
    border-radius: var(--apkt-borderRadius-5);
    background-color: var(--apkt-tokens-theme-backgroundPrimary);
    margin-top: var(--apkt-spacing-3);
    margin-bottom: var(--apkt-spacing-3);
  }

  .token-display wui-text {
    text-transform: none;
  }

  wui-loading-spinner {
    padding: var(--apkt-spacing-2);
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 40px;
    height: 40px;
  }

  .chain-image {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: -3px;
    right: -5px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .payment-methods-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
  }
`;var _e=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let Me=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.amount=Le.state.amount,this.namespace=void 0,this.paymentAsset=Le.state.paymentAsset,this.activeConnectorIds=l.A.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=Le.state.exchanges,this.isLoading=Le.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(Le.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(Le.subscribeKey("exchanges",(e=>this.exchanges=e))),this.unsubscribe.push(Le.subscribeKey("isLoading",(e=>this.isLoading=e))),Le.fetchExchanges(),Le.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return n.dy`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return n.dy`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){var e;const t=c.R.state.activeChain;this.namespace=t,this.caipAddress=null===(e=c.R.getAccountData(t))||void 0===e?void 0:e.caipAddress,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>{this.caipAddress=null===e||void 0===e?void 0:e.caipAddress}),t))}paymentDetailsTemplate(){const e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return n.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${je(this.amount||"0")}
          </wui-text>

          <wui-flex flexDirection="column">
            <wui-text variant="h6-regular" color="secondary">
              ${this.paymentAsset.metadata.symbol||"Unknown"}
            </wui-text>
            <wui-text variant="md-medium" color="secondary"
              >on ${(null===e||void 0===e?void 0:e.name)||"Unknown"}</wui-text
            >
          </wui-flex>
        </wui-flex>

        <wui-flex class="left-image-container">
          <wui-image
            src=${(0,o.o)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,o.o)(B.f.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return function(e){const{chainNamespace:t}=Y.u.parseCaipNetworkId(e);return Ne.includes(t)}(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():n.dy``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return n.dy`
      <wui-flex flexDirection="column" gap="3">
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${this.onWalletPayment}
          .boxed=${!1}
          ?chevron=${!0}
          ?fullSize=${!1}
          ?rounded=${!0}
          data-testid="wallet-payment-option"
          imageSrc=${(0,o.o)(t)}
          imageSize="3xl"
        >
          <wui-text variant="lg-regular" color="primary">Pay with ${e}</wui-text>
        </wui-list-item>

        <wui-list-item
          type="secondary"
          icon="power"
          iconColor="error"
          @click=${this.onDisconnect}
          data-testid="disconnect-button"
          ?chevron=${!1}
          boxColor="foregroundSecondary"
        >
          <wui-text variant="lg-regular" color="secondary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}disconnectedWalletTemplate(){return n.dy`<wui-list-item
      type="secondary"
      boxColor="foregroundSecondary"
      variant="icon"
      iconColor="default"
      iconVariant="overlay"
      icon="wallet"
      @click=${this.onWalletPayment}
      ?chevron=${!0}
      data-testid="wallet-payment-option"
    >
      <wui-text variant="lg-regular" color="primary">Pay with wallet</wui-text>
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return n.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter((e=>function(e){const t=c.R.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.network));return!!t&&Boolean(t.testnet)}(this.paymentAsset)?e.id===be:e.id!==be));return 0===e.length?n.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map((e=>n.dy`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,o.o)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `))}templateSeparator(){return n.dy`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?u.P.push("PayQuote"):(await l.A.connect(),await s.I.open({view:"PayQuote"}))}onExchangePayment(e){Le.setSelectedExchange(e),u.P.push("PayQuote")}async onDisconnect(){try{await p.l.disconnect(),await s.I.open({view:"Pay"})}catch{console.error("Failed to disconnect"),w.K.showError("Failed to disconnect")}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const n=l.A.getConnector({id:i,namespace:t});if(!n)return{name:void 0,image:void 0};const r=B.f.getConnectorImage(n);return{name:n.name,image:r}}};Me.styles=Fe,_e([(0,r.SB)()],Me.prototype,"amount",void 0),_e([(0,r.SB)()],Me.prototype,"namespace",void 0),_e([(0,r.SB)()],Me.prototype,"paymentAsset",void 0),_e([(0,r.SB)()],Me.prototype,"activeConnectorIds",void 0),_e([(0,r.SB)()],Me.prototype,"caipAddress",void 0),_e([(0,r.SB)()],Me.prototype,"exchanges",void 0),_e([(0,r.SB)()],Me.prototype,"isLoading",void 0),Me=_e([(0,f.Mo)("w3m-pay-view")],Me);var Ke=i(57346);const He=x.iv`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-container {
    position: relative;
    width: var(--pulse-size);
    height: var(--pulse-size);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pulse-rings {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 2px solid var(--pulse-color);
    opacity: 0;
    animation: pulse var(--pulse-duration, 2s) ease-out infinite;
  }

  .pulse-content {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.5);
      opacity: var(--pulse-opacity, 0.3);
    }
    50% {
      opacity: calc(var(--pulse-opacity, 0.3) * 0.5);
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }
`;var Qe=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const Ve={"accent-primary":x.gR.tokens.core.backgroundAccentPrimary};let Ye=class extends n.oi{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){const e=Ve[this.variant];this.style.cssText=`\n      --pulse-size: ${this.size};\n      --pulse-duration: ${this.duration}s;\n      --pulse-color: ${e};\n      --pulse-opacity: ${this.opacity};\n    `;const t=Array.from({length:this.rings},((e,t)=>this.renderRing(t,this.rings)));return n.dy`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){const i=`animation-delay: ${e/t*this.duration}s;`;return n.dy`<div class="pulse-ring" style=${i}></div>`}};Ye.styles=[b.ET,He],Qe([(0,r.Cb)({type:Number})],Ye.prototype,"rings",void 0),Qe([(0,r.Cb)({type:Number})],Ye.prototype,"duration",void 0),Qe([(0,r.Cb)({type:Number})],Ye.prototype,"opacity",void 0),Qe([(0,r.Cb)()],Ye.prototype,"size",void 0),Qe([(0,r.Cb)()],Ye.prototype,"variant",void 0),Ye=Qe([(0,v.M)("wui-pulse")],Ye);const Ge=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],Xe=["success","submitted","failure","timeout","refund"],Ze=f.iv`
  :host {
    display: block;
    height: 100%;
    width: 100%;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  .token-badge-container {
    position: absolute;
    bottom: 6px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    z-index: 3;
    min-width: 105px;
  }

  .token-badge-container.loading {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 3px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .token-badge-container.success {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 3px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  .token-image-container {
    position: relative;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 64px;
    height: 64px;
  }

  .token-image.success {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .token-image.error {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .token-image.loading {
    background: ${e=>{let{colors:t}=e;return t.accent010}};
  }

  .token-image wui-icon {
    width: 32px;
    height: 32px;
  }

  .token-badge {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  .token-badge wui-text {
    white-space: nowrap;
  }

  .payment-lifecycle-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
  }

  .payment-step-badge {
    padding: ${e=>{let{spacing:t}=e;return t[1]}} ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  .payment-step-badge.loading {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .payment-step-badge.error {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};
  }

  .payment-step-badge.success {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
  }

  .step-icon-container {
    position: relative;
    height: 40px;
    width: 40px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .step-icon-box {
    position: absolute;
    right: -4px;
    bottom: -1px;
    padding: 2px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .step-icon-box.success {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
  }
`;var Je=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const et={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};let tt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=Le.state.paymentAsset,this.quoteStatus=Le.state.quoteStatus,this.quote=Le.state.quote,this.amount=Le.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=l.A.state.activeConnectorIds,this.selectedExchange=Le.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(Le.subscribeKey("quoteStatus",(e=>this.quoteStatus=e)),Le.subscribeKey("quote",(e=>this.quote=e)),l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e)),Le.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach((e=>e()))}render(){return n.dy`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){var e;const t=je(this.amount||"0"),i=null!==(e=this.paymentAsset.metadata.symbol)&&void 0!==e?e:"Unknown",r=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network)),a="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?n.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a?n.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:n.dy`
      <wui-flex alignItems="center" justifyContent="center">
        <wui-flex class="token-image-container">
          <wui-pulse size="125px" rings="3" duration="4" opacity="0.5" variant="accent-primary">
            <wui-flex justifyContent="center" alignItems="center" class="token-image loading">
              <wui-icon name="paperPlaneTitle" color="accent-primary" size="inherit"></wui-icon>
            </wui-flex>
          </wui-pulse>

          <wui-flex
            justifyContent="center"
            alignItems="center"
            class="token-badge-container loading"
          >
            <wui-flex
              alignItems="center"
              justifyContent="center"
              gap="01"
              padding="1"
              class="token-badge"
            >
              <wui-image
                src=${(0,o.o)(B.f.getNetworkImage(r))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${t} ${i}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return n.dy`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return n.dy`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map((e=>this.renderStep(e)))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){var e,t;const i="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,r="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(i)return n.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(r)return n.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const o=null!==(e=null===(t=this.quote)||void 0===t?void 0:t.timeInSeconds)&&void 0!==e?e:0;return n.dy`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${o} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){var e,t,i,r,a;const s=c.R.getAllRequestedCaipNetworks().find((e=>{var t;const i=null===(t=this.quote)||void 0===t?void 0:t.origin.currency.network;if(!i)return!1;const{chainId:n}=Y.u.parseCaipNetworkId(i);return J.g.isLowerCaseMatch(e.id.toString(),n.toString())})),l=je(G.C.formatNumber((null===(e=this.quote)||void 0===e?void 0:e.origin.amount)||"0",{decimals:null!==(t=null===(i=this.quote)||void 0===i?void 0:i.origin.currency.metadata.decimals)&&void 0!==t?t:0}).toString()),d=null!==(r=null===(a=this.quote)||void 0===a?void 0:a.origin.currency.metadata.symbol)&&void 0!==r?r:"Unknown";return n.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${l}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${d}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,o.o)(B.f.getNetworkImage(s))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${null===s||void 0===s?void 0:s.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return n.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary"
          >${this.selectedExchange?"Exchange":"Wallet"}</wui-text
        >

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){var e;const{image:t}=this.getWalletProperties({namespace:this.namespace}),{address:i}=this.caipAddress?Y.u.parseCaipAddress(this.caipAddress):{},r=null===(e=this.selectedExchange)||void 0===e?void 0:e.name;return this.selectedExchange?n.dy`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${r}</wui-text>
          <wui-image src=${(0,o.o)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:n.dy`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${f.Hg.getTruncateString({string:this.profileName||i||r||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,o.o)(t)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?Ge.map((e=>({...e,status:"failed"}))):Ge.map((e=>{var t;const i=(null!==(t=et[e.id])&&void 0!==t?t:[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:i}}))}renderStep(e){let{title:t,icon:i,status:r}=e;const o={"step-icon-box":!0,success:"completed"===r};return n.dy`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${i} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,Ke.$)(o)}>
            ${this.renderStatusIndicator(r)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${t}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?n.dy`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?n.dy`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?n.dy`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval((()=>{this.fetchQuoteStatus()}),3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=Le.state.requestId;if(!e||Xe.includes(this.quoteStatus))this.stopPolling();else try{await Le.fetchQuoteStatus({requestId:e}),Xe.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){var e,t,i;const n=c.R.state.activeChain;this.namespace=n,this.caipAddress=null===(e=c.R.getAccountData(n))||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===(i=c.R.getAccountData(n))||void 0===i?void 0:i.profileName)&&void 0!==t?t:null,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>{var t;this.caipAddress=null===e||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===e||void 0===e?void 0:e.profileName)&&void 0!==t?t:null}),n))}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const n=l.A.getConnector({id:i,namespace:t});if(!n)return{name:void 0,image:void 0};const r=B.f.getConnectorImage(n);return{name:n.name,image:r}}};tt.styles=Ze,Je([(0,r.SB)()],tt.prototype,"paymentAsset",void 0),Je([(0,r.SB)()],tt.prototype,"quoteStatus",void 0),Je([(0,r.SB)()],tt.prototype,"quote",void 0),Je([(0,r.SB)()],tt.prototype,"amount",void 0),Je([(0,r.SB)()],tt.prototype,"namespace",void 0),Je([(0,r.SB)()],tt.prototype,"caipAddress",void 0),Je([(0,r.SB)()],tt.prototype,"profileName",void 0),Je([(0,r.SB)()],tt.prototype,"activeConnectorIds",void 0),Je([(0,r.SB)()],tt.prototype,"selectedExchange",void 0),tt=Je([(0,f.Mo)("w3m-pay-loading-view")],tt);i(23298),i(41159);const it=n.iv`
  :host {
    display: block;
  }
`;var nt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let rt=class extends n.oi{render(){return n.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-shimmer width="60px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Network Fee</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-shimmer
              width="75px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>

            <wui-flex alignItems="center" gap="01">
              <wui-shimmer width="14px" height="14px" rounded variant="light"></wui-shimmer>
              <wui-shimmer
                width="49px"
                height="14px"
                borderRadius="4xs"
                variant="light"
              ></wui-shimmer>
            </wui-flex>
          </wui-flex>
        </wui-flex>

        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Service Fee</wui-text>
          <wui-shimmer width="75px" height="16px" borderRadius="4xs" variant="light"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};rt.styles=[it],rt=nt([(0,f.Mo)("w3m-pay-fees-skeleton")],rt);const ot=f.iv`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }
`;var at=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let st=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.quote=Le.state.quote,this.unsubscribe.push(Le.subscribeKey("quote",(e=>this.quote=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,t,i,r;const o=G.C.formatNumber((null===(e=this.quote)||void 0===e?void 0:e.origin.amount)||"0",{decimals:null!==(t=null===(i=this.quote)||void 0===i?void 0:i.origin.currency.metadata.decimals)&&void 0!==t?t:0,round:6}).toString();return n.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${o} ${(null===(r=this.quote)||void 0===r?void 0:r.origin.currency.metadata.symbol)||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map((e=>this.renderFee(e))):null}
      </wui-flex>
    `}renderFee(e){var t;const i="network"===e.id,r=G.C.formatNumber(e.amount||"0",{decimals:null!==(t=e.currency.metadata.decimals)&&void 0!==t?t:0,round:6}).toString();if(i){const t=c.R.getAllRequestedCaipNetworks().find((t=>J.g.isLowerCaseMatch(t.caipNetworkId,e.currency.network)));return n.dy`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${r} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,o.o)(B.f.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${(null===t||void 0===t?void 0:t.name)||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return n.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${r} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};st.styles=[ot],at([(0,r.SB)()],st.prototype,"quote",void 0),st=at([(0,f.Mo)("w3m-pay-fees")],st);const ct=f.iv`
  :host {
    display: block;
    width: 100%;
  }

  .disabled-container {
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    min-height: 168px;
  }

  wui-icon {
    width: ${e=>{let{spacing:t}=e;return t[8]}};
    height: ${e=>{let{spacing:t}=e;return t[8]}};
  }

  wui-flex > wui-text {
    max-width: 273px;
  }
`;var lt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let dt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.selectedExchange=Le.state.selectedExchange,this.unsubscribe.push(Le.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=Boolean(this.selectedExchange);return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
        class="disabled-container"
      >
        <wui-icon name="coins" color="default" size="inherit"></wui-icon>

        <wui-text variant="md-regular" color="primary" align="center">
          You don't have enough funds to complete this transaction
        </wui-text>

        ${e?null:n.dy`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};dt.styles=[ct],lt([(0,r.Cb)({type:Array})],dt.prototype,"selectedExchange",void 0),dt=lt([(0,f.Mo)("w3m-pay-options-empty")],dt);const ut=f.iv`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    min-height: 60px;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    bottom: -3px;
    right: -5px;
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }
`;var pt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let ht=class extends n.oi{render(){return n.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return n.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-shimmer
              width="32px"
              height="32px"
              rounded
              variant="light"
              class="token-image"
            ></wui-shimmer>
            <wui-shimmer
              width="16px"
              height="16px"
              rounded
              variant="light"
              class="chain-image"
            ></wui-shimmer>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-shimmer
              width="74px"
              height="16px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
            <wui-shimmer
              width="46px"
              height="14px"
              borderRadius="4xs"
              variant="light"
            ></wui-shimmer>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}};ht.styles=[ut],ht=pt([(0,f.Mo)("w3m-pay-options-skeleton")],ht);const mt=f.iv`
  :host {
    display: block;
    width: 100%;
  }

  .pay-options-container {
    max-height: 196px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
    mask-image: var(--options-mask-image);
    -webkit-mask-image: var(--options-mask-image);
  }

  .pay-options-container::-webkit-scrollbar {
    display: none;
  }

  .pay-option-container {
    cursor: pointer;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color;
  }

  .token-images-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .token-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    width: 32px;
    height: 32px;
  }

  .chain-image {
    position: absolute;
    width: 16px;
    height: 16px;
    bottom: -3px;
    right: -5px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 2px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  @media (hover: hover) and (pointer: fine) {
    .pay-option-container:hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    }
  }
`;var gt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let wt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var e,t;this.unsubscribe.forEach((e=>e())),null===(e=this.resizeObserver)||void 0===e||e.disconnect();const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".pay-options-container");null===i||void 0===i||i.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".pay-options-container");var i;t&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),null===t||void 0===t||t.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleOptionsListScroll()})),null===(i=this.resizeObserver)||void 0===i||i.observe(t),this.handleOptionsListScroll())}render(){return n.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map((e=>this.payOptionTemplate(e)))}
      </wui-flex>
    `}payOptionTemplate(e){var t,i;const{network:r,metadata:a,asset:s,amount:l="0"}=e,d=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===r)),u=`${r}:${s}`===`${null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.network}:${null===(i=this.selectedPaymentAsset)||void 0===i?void 0:i.asset}`,p=G.C.bigNumber(l,{safe:!0}),h=p.gt(0);return n.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        gap="2"
        @click=${()=>{var t;return null===(t=this.onSelect)||void 0===t?void 0:t.call(this,e)}}
        class="pay-option-container"
      >
        <wui-flex alignItems="center" gap="2">
          <wui-flex class="token-images-container">
            <wui-image
              src=${(0,o.o)(a.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,o.o)(B.f.getNetworkImage(d))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${a.symbol}</wui-text>
            ${h?n.dy`<wui-text variant="sm-regular" color="secondary">
                  ${p.round(6).toString()} ${a.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${u?n.dy`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".pay-options-container");if(!t)return;t.scrollHeight>300?(t.style.setProperty("--options-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,\n          black 50px,\n          black calc(100% - 50px),\n          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%\n        )"),t.style.setProperty("--options-scroll--top-opacity",f.kj.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--options-scroll--bottom-opacity",f.kj.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--options-mask-image","none"),t.style.setProperty("--options-scroll--top-opacity","0"),t.style.setProperty("--options-scroll--bottom-opacity","0"))}};wt.styles=[mt],gt([(0,r.Cb)({type:Array})],wt.prototype,"options",void 0),gt([(0,r.Cb)()],wt.prototype,"selectedPaymentAsset",void 0),gt([(0,r.Cb)()],wt.prototype,"onSelect",void 0),wt=gt([(0,f.Mo)("w3m-pay-options")],wt);const yt=f.iv`
  .payment-methods-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-top-right-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    border-top-left-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
  }

  .pay-options-container {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  w3m-tooltip-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: fit-content;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  w3m-pay-options.disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;var ft=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const bt={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}};let vt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=Le.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=Le.state.amount,this.recipient=Le.state.recipient,this.activeConnectorIds=l.A.state.activeConnectorIds,this.selectedPaymentAsset=Le.state.selectedPaymentAsset,this.selectedExchange=Le.state.selectedExchange,this.isFetchingQuote=Le.state.isFetchingQuote,this.quoteError=Le.state.quoteError,this.quote=Le.state.quote,this.isFetchingTokenBalances=Le.state.isFetchingTokenBalances,this.tokenBalances=Le.state.tokenBalances,this.isPaymentInProgress=Le.state.isPaymentInProgress,this.exchangeUrlForQuote=Le.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(Le.subscribeKey("paymentAsset",(e=>this.paymentAsset=e))),this.unsubscribe.push(Le.subscribeKey("tokenBalances",(e=>this.onTokenBalancesChanged(e)))),this.unsubscribe.push(Le.subscribeKey("isFetchingTokenBalances",(e=>this.isFetchingTokenBalances=e))),this.unsubscribe.push(l.A.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(Le.subscribeKey("selectedPaymentAsset",(e=>this.selectedPaymentAsset=e))),this.unsubscribe.push(Le.subscribeKey("isFetchingQuote",(e=>this.isFetchingQuote=e))),this.unsubscribe.push(Le.subscribeKey("quoteError",(e=>this.quoteError=e))),this.unsubscribe.push(Le.subscribeKey("quote",(e=>this.quote=e))),this.unsubscribe.push(Le.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(Le.subscribeKey("recipient",(e=>this.recipient=e))),this.unsubscribe.push(Le.subscribeKey("isPaymentInProgress",(e=>this.isPaymentInProgress=e))),this.unsubscribe.push(Le.subscribeKey("selectedExchange",(e=>this.selectedExchange=e))),this.unsubscribe.push(Le.subscribeKey("exchangeUrlForQuote",(e=>this.exchangeUrlForQuote=e))),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach((e=>e()))}updated(e){super.updated(e);e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return n.dy`
      <wui-flex flexDirection="column">
        ${this.profileTemplate()}

        <wui-flex
          flexDirection="column"
          gap="4"
          class="payment-methods-container"
          .padding=${["4","4","5","4"]}
        >
          ${this.paymentOptionsViewTemplate()} ${this.amountWithFeeTemplate()}

          <wui-flex
            alignItems="center"
            justifyContent="space-between"
            .padding=${["1","0","1","0"]}
          >
            <wui-separator></wui-separator>
          </wui-flex>

          ${this.paymentActionsTemplate()}
        </wui-flex>
      </wui-flex>
    `}profileTemplate(){var e,t;if(this.selectedExchange){var i,r,a;const e=G.C.formatNumber(null===(i=this.quote)||void 0===i?void 0:i.origin.amount,{decimals:null!==(r=null===(a=this.quote)||void 0===a?void 0:a.origin.currency.metadata.decimals)&&void 0!==r?r:0}).toString();return n.dy`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?n.dy`<wui-text variant="lg-regular" color="primary">
                ${G.C.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:n.dy`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const s=null!==(e=X.j.getPlainAddress(this.caipAddress))&&void 0!==e?e:"",{name:c,image:l}=this.getWalletProperties({namespace:this.namespace}),{icon:d,label:u}=null!==(t=bt[this.namespace])&&void 0!==t?t:{};return n.dy`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,o.o)(this.profileName)}
          address=${(0,o.o)(s)}
          imageSrc=${(0,o.o)(l)}
          alt=${(0,o.o)(c)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,o.o)(u)}
          address=${(0,o.o)(s)}
          icon=${(0,o.o)(d)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,o.o)(u)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){var e,t,i;const n=c.R.state.activeChain;this.namespace=n,this.caipAddress=null===(e=c.R.getAccountData(n))||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===(i=c.R.getAccountData(n))||void 0===i?void 0:i.profileName)&&void 0!==t?t:null,this.unsubscribe.push(c.R.subscribeChainProp("accountState",(e=>this.onAccountStateChanged(e)),n))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:t,chainNamespace:i}=Y.u.parseCaipAddress(this.caipAddress),n=`${i}:${t}`;e=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===n))}await Le.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?Y.u.parseCaipAddress(this.caipAddress):{};Le.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const i=this.activeConnectorIds[t];if(!i)return{name:void 0,image:void 0};const n=l.A.getConnector({id:i,namespace:t});if(!n)return{name:void 0,image:void 0};const r=B.f.getConnectorImage(n);return{name:n.name,image:r}}paymentOptionsViewTemplate(){return n.dy`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return n.dy`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return n.dy`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const t={disabled:this.isFetchingQuote};return n.dy`<w3m-pay-options
      class=${(0,Ke.$)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,o.o)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?n.dy`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:n.dy`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){var e,t,i,r,o;const a=this.isFetchingQuote||this.isFetchingTokenBalances,s=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError),c=G.C.formatNumber(null!==(e=null===(t=this.quote)||void 0===t?void 0:t.origin.amount)&&void 0!==e?e:0,{decimals:null!==(i=null===(r=this.quote)||void 0===r?void 0:r.origin.currency.metadata.decimals)&&void 0!==i?i:0}).toString();return this.selectedExchange?a||s?n.dy`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:n.dy`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:n.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${a||s?n.dy`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:n.dy`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${je(c)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${(null===(o=this.quote)||void 0===o?void 0:o.origin.currency.metadata.symbol)||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:a,isDisabled:s})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=Ce(this.quote),{isLoading:i,isDisabled:r}=e;let o="Pay";return t.length>1&&0===this.completedTransactionsCount&&(o="Approve"),n.dy`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${i||this.isPaymentInProgress}
        ?disabled=${r||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${o}
        ${i?null:n.dy`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){var e;if(!this.namespace)return[];return(null!==(e=this.tokenBalances[this.namespace])&&void 0!==e?e:[]).map((e=>{try{return function(e){const t=c.R.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.chainId));let i=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(J.g.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))i="native";else if(X.j.isCaipAddress(i)){const{address:e}=Y.u.parseCaipAddress(i);i=e}else if(!i)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:i,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(t){return null}})).filter((e=>Boolean(e))).filter((e=>{const{chainId:t}=Y.u.parseCaipNetworkId(e.network),{chainId:i}=Y.u.parseCaipNetworkId(this.paymentAsset.network);return!!J.g.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||(!this.selectedExchange||!J.g.isLowerCaseMatch(t.toString(),i.toString()))}))}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&Le.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await l.A.connect(),await s.I.open({view:"PayQuote"})}onAccountStateChanged(e){var t;const{address:i}=this.caipAddress?Y.u.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=null===e||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===e||void 0===e?void 0:e.profileName)&&void 0!==t?t:null,i){const{address:e}=this.caipAddress?Y.u.parseCaipAddress(this.caipAddress):{};e?J.g.isLowerCaseMatch(e,i)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):s.I.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||Le.setSelectedPaymentAsset(e)}async onTransfer(){const e=ke(this.quote);if(e){var t,i,n,r,o;if(!J.g.isLowerCaseMatch(null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const a=null!==(i=null===(n=this.selectedPaymentAsset)||void 0===n?void 0:n.amount)&&void 0!==i?i:"0",s=G.C.formatNumber(e.deposit.amount,{decimals:null!==(r=null===(o=this.selectedPaymentAsset)||void 0===o?void 0:o.metadata.decimals)&&void 0!==r?r:0}).toString();if(!G.C.bigNumber(a).gte(s))return void w.K.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:t}=Y.u.parseCaipAddress(this.caipAddress);await Le.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:s,paymentAsset:this.selectedPaymentAsset}),Le.setRequestId(e.requestId),u.P.push("PayLoading")}}}async onSendTransactions(){var e,t,i,n,r,o;const a=null!==(e=null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.amount)&&void 0!==e?e:"0",s=G.C.formatNumber(null!==(i=null===(n=this.quote)||void 0===n?void 0:n.origin.amount)&&void 0!==i?i:0,{decimals:null!==(r=null===(o=this.selectedPaymentAsset)||void 0===o?void 0:o.metadata.decimals)&&void 0!==r?r:0}).toString();if(!G.C.bigNumber(a).gte(s))return void w.K.showError("Insufficient funds");const c=Ce(this.quote),[l]=Ce(this.quote,this.completedTransactionsCount);if(l&&this.namespace){await Le.onSendTransaction({namespace:this.namespace,transactionStep:l}),this.completedTransactionsCount+=1;this.completedTransactionsCount===c.length&&(Le.setRequestId(l.requestId),u.P.push("PayLoading"))}}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=X.j.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=ke(this.quote);t&&Le.setRequestId(t.requestId),Le.initiatePayment(),u.P.push("PayLoading")}}resetAssetsState(){Le.setSelectedPaymentAsset(null)}resetQuoteState(){Le.resetQuoteState()}};vt.styles=yt,ft([(0,r.SB)()],vt.prototype,"profileName",void 0),ft([(0,r.SB)()],vt.prototype,"paymentAsset",void 0),ft([(0,r.SB)()],vt.prototype,"namespace",void 0),ft([(0,r.SB)()],vt.prototype,"caipAddress",void 0),ft([(0,r.SB)()],vt.prototype,"amount",void 0),ft([(0,r.SB)()],vt.prototype,"recipient",void 0),ft([(0,r.SB)()],vt.prototype,"activeConnectorIds",void 0),ft([(0,r.SB)()],vt.prototype,"selectedPaymentAsset",void 0),ft([(0,r.SB)()],vt.prototype,"selectedExchange",void 0),ft([(0,r.SB)()],vt.prototype,"isFetchingQuote",void 0),ft([(0,r.SB)()],vt.prototype,"quoteError",void 0),ft([(0,r.SB)()],vt.prototype,"quote",void 0),ft([(0,r.SB)()],vt.prototype,"isFetchingTokenBalances",void 0),ft([(0,r.SB)()],vt.prototype,"tokenBalances",void 0),ft([(0,r.SB)()],vt.prototype,"isPaymentInProgress",void 0),ft([(0,r.SB)()],vt.prototype,"exchangeUrlForQuote",void 0),ft([(0,r.SB)()],vt.prototype,"completedTransactionsCount",void 0),vt=ft([(0,f.Mo)("w3m-pay-quote-view")],vt);const xt=f.iv`
  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  .transfers-badge {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }
`;var kt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let Ct=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.paymentAsset=Le.state.paymentAsset,this.amount=Le.state.amount,this.unsubscribe.push(Le.subscribeKey("paymentAsset",(e=>{this.paymentAsset=e})),Le.subscribeKey("amount",(e=>{this.amount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return n.dy`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,o.o)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:"Unknown"}
      </wui-text>
    </wui-flex>`}};Ct.styles=[xt],kt([(0,r.Cb)()],Ct.prototype,"paymentAsset",void 0),kt([(0,r.Cb)()],Ct.prototype,"amount",void 0),Ct=kt([(0,f.Mo)("w3m-pay-header")],Ct);const St=f.iv`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      slide-down-in 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      slide-up-in 120ms forwards ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var $t=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const It=["SmartSessionList"],Pt={PayWithExchange:f.gR.tokens.theme.foregroundPrimary};function At(){var e,t,i,n,r,o,a,s;const d=null===(e=u.P.state.data)||void 0===e||null===(t=e.connector)||void 0===t?void 0:t.name,p=null===(i=u.P.state.data)||void 0===i||null===(n=i.wallet)||void 0===n?void 0:n.name,h=null===(r=u.P.state.data)||void 0===r||null===(o=r.network)||void 0===o?void 0:o.name,m=null!==p&&void 0!==p?p:d,g=l.A.getConnectors(),w=1===g.length&&"w3m-email"===(null===(a=g[0])||void 0===a?void 0:a.id),y=null===(s=c.R.getAccountData())||void 0===s?void 0:s.socialProvider;return{Connect:`Connect ${w?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:null!==m&&void 0!==m?m:"Connect Wallet",ConnectingWalletConnect:null!==m&&void 0!==m?m:"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:m?`Get ${m}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:null!==h&&void 0!==h?h:"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:y?y.charAt(0).toUpperCase()+y.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let Et=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.heading=At()[u.P.state.view],this.network=c.R.state.activeCaipNetwork,this.networkImage=B.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.P.state.view,this.viewDirection="",this.unsubscribe.push(j.W.subscribeNetworkImages((()=>{this.networkImage=B.f.getNetworkImage(this.network)})),u.P.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.heading=At()[e]}),K.b.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),c.R.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=B.f.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=null!==(e=Pt[u.P.state.view])&&void 0!==e?e:f.gR.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),n.dy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){q.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.P.push("WhatIsAWallet")}async onClose(){await m.safeClose()}rightHeaderTemplate(){var e,t;const i=null===a.h||void 0===a.h||null===(e=a.h.state)||void 0===e||null===(t=e.features)||void 0===t?void 0:t.smartSessions;return"Account"===u.P.state.view&&i?n.dy`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>u.P.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return n.dy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return n.dy`<w3m-pay-header></w3m-pay-header>`;const e=It.includes(this.view);return n.dy`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${e?n.dy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.P.state,t="Connect"===e,i=a.h.state.enableEmbedded,r="ApproveTransaction"===e,s="ConnectingSiwe"===e,c="Account"===e,l=a.h.state.enableNetworkSwitch,d=r||s||t&&i;var p;return c&&l?n.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,o.o)(null===(p=this.network)||void 0===p?void 0:p.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,o.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?n.dy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:n.dy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(q.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.P.push("Networks"))}isAllowedNetworkSwitch(){const e=c.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,i=null===e||void 0===e?void 0:e.find((e=>{var t;let{id:i}=e;return i===(null===(t=this.network)||void 0===t?void 0:t.id)}));return t||!i}onViewChange(){const{history:e}=u.P.state;let t=K.b.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=K.b.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var e;const{history:t}=u.P.state,i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&i?(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.P.goBack()}};Et.styles=St,$t([(0,r.SB)()],Et.prototype,"heading",void 0),$t([(0,r.SB)()],Et.prototype,"network",void 0),$t([(0,r.SB)()],Et.prototype,"networkImage",void 0),$t([(0,r.SB)()],Et.prototype,"showBack",void 0),$t([(0,r.SB)()],Et.prototype,"prevHistoryLength",void 0),$t([(0,r.SB)()],Et.prototype,"view",void 0),$t([(0,r.SB)()],Et.prototype,"viewDirection",void 0),Et=$t([(0,f.Mo)("w3m-header")],Et);i(76162),i(37340);const Rt=x.iv`
  :host {
    display: flex;
    align-items: center;
    gap: ${e=>{let{spacing:t}=e;return t[1]}};
    padding: ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}} !important;
  }
`;var Nt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let Tt=class extends n.oi{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return n.dy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?n.dy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:n.dy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};Tt.styles=[b.ET,Rt],Nt([(0,r.Cb)()],Tt.prototype,"message",void 0),Nt([(0,r.Cb)()],Tt.prototype,"variant",void 0),Tt=Nt([(0,v.M)("wui-snackbar")],Tt);const Ot=n.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var Bt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let jt=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=w.K.state.open,this.unsubscribe.push(w.K.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=w.K.state;return n.dy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),w.K.state.autoClose&&(this.timeout=setTimeout((()=>w.K.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};jt.styles=Ot,Bt([(0,r.SB)()],jt.prototype,"open",void 0),jt=Bt([(0,f.Mo)("w3m-snackbar")],jt);i(13534),i(16039);var qt=i(50716);i(51838),i(36697);const zt=f.iv`
  :host {
    z-index: ${e=>{let{tokens:t}=e;return t.core.zIndex}};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.overlay}};
    backdrop-filter: blur(0px);
    transition:
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      backdrop-filter ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border-radius ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    transition-delay: ${e=>{let{durations:t}=e;return t.md}};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.theme.borderPrimaryDark}};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      card-background-border var(--apkt-duration-dynamic)
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      card-background-default var(--apkt-duration-dynamic)
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      w3m-shake ${e=>{let{durations:t}=e;return t.xl}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    }
    to {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
    to {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    }
  }
`;var Wt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};const Dt="scroll-lock",Ut={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class Lt extends n.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=a.h.state.enableEmbedded,this.open=s.I.state.open,this.caipAddress=c.R.state.activeCaipAddress,this.caipNetwork=c.R.state.activeCaipNetwork,this.shake=s.I.state.shake,this.filterByNamespace=l.A.state.filterByNamespace,this.padding=f.gR.spacing[1],this.mobileFullScreen=a.h.state.enableMobileFullScreen,this.initializeTheming(),d.Q.prefetchAnalyticsConfig(),this.unsubscribe.push(s.I.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),s.I.subscribeKey("shake",(e=>this.shake=e)),c.R.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),c.R.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),a.h.subscribeKey("enableEmbedded",(e=>this.enableEmbedded=e)),l.A.subscribeKey("filterByNamespace",(e=>{var t;this.filterByNamespace===e||null!==(t=c.R.getAccountData(e))&&void 0!==t&&t.caipAddress||(d.Q.fetchRecommendedWallets(),this.filterByNamespace=e)})),u.P.subscribeKey("view",(()=>{var e;this.dataset.border=qt.g.hasFooter()?"true":"false",this.padding=null!==(e=Ut[u.P.state.view])&&void 0!==e?e:f.gR.spacing[1]})))}firstUpdated(){if(this.dataset.border=qt.g.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return s.I.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?n.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?n.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return n.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,o.o)(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await m.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=g.u.state,i=f.Hg.getColorTheme(t);(0,f.n)(e,i)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),w.K.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=Dt,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${Dt}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-card");null===t||void 0===t||t.focus(),window.addEventListener("keydown",(e=>{if("Escape"===e.key)this.handleClose();else if("Tab"===e.key){const{tagName:i}=e.target;!i||i.includes("W3M-")||i.includes("WUI-")||null===t||void 0===t||t.focus()}}),this.abortController)}onRemoveKeyboardListener(){var e;null===(e=this.abortController)||void 0===e||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=c.R.state.isSwitchingNamespace,i="ProfileWallets"===u.P.state.view;!e&&!t&&!i&&s.I.close(),await h.w.initializeIfEnabled(e),this.caipAddress=e,c.R.setIsSwitchingNamespace(!1)}onNewNetwork(e){var t,i;const n=this.caipNetwork,r=(null===n||void 0===n||null===(t=n.caipNetworkId)||void 0===t?void 0:t.toString())!==(null===e||void 0===e||null===(i=e.caipNetworkId)||void 0===i?void 0:i.toString()),o="UnsupportedChain"===u.P.state.view,a=s.I.state.open;let c=!1;this.enableEmbedded&&"SwitchNetwork"===u.P.state.view&&(c=!0),r&&y.nY.resetState(),a&&o&&(c=!0),c&&"SIWXSignMessage"!==u.P.state.view&&u.P.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(d.Q.prefetch(),d.Q.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}Lt.styles=zt,Wt([(0,r.Cb)({type:Boolean})],Lt.prototype,"enableEmbedded",void 0),Wt([(0,r.SB)()],Lt.prototype,"open",void 0),Wt([(0,r.SB)()],Lt.prototype,"caipAddress",void 0),Wt([(0,r.SB)()],Lt.prototype,"caipNetwork",void 0),Wt([(0,r.SB)()],Lt.prototype,"shake",void 0),Wt([(0,r.SB)()],Lt.prototype,"filterByNamespace",void 0),Wt([(0,r.SB)()],Lt.prototype,"padding",void 0),Wt([(0,r.SB)()],Lt.prototype,"mobileFullScreen",void 0);let Ft=class extends Lt{};Ft=Wt([(0,f.Mo)("w3m-modal")],Ft);let _t=class extends Lt{};_t=Wt([(0,f.Mo)("appkit-modal")],_t);const Mt=f.iv`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    background-color: ${e=>{let{colors:t}=e;return t.semanticError010}};
  }
`;var Kt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let Ht=class extends n.oi{constructor(){super()}render(){return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="error" name="warningCircle"></wui-icon>
        </wui-flex>

        <wui-text variant="lg-medium" color="primary" align="center">
          The app isn't responding as expected
        </wui-text>
        <wui-text variant="md-regular" color="secondary" align="center">
          Try again or reach out to the app team for help.
        </wui-text>

        <wui-button
          variant="neutral-secondary"
          size="md"
          @click=${this.onTryAgainClick.bind(this)}
          data-testid="w3m-usage-exceeded-button"
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try Again
        </wui-button>
      </wui-flex>
    `}onTryAgainClick(){u.P.goBack()}};Ht.styles=Mt,Ht=Kt([(0,f.Mo)("w3m-usage-exceeded-view")],Ht);var Qt=i(58050);i(30567);const Vt=f.iv`
  :host {
    width: 100%;
  }
`;var Yt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let Gt=class extends n.oi{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1);e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()}))}),{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&q.X.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.P.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(Qt.j.state.adapters).length>1?this.namespaces:[]}render(){return n.dy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,o.o)(this.imageSrc)}
        name=${this.name}
        size=${(0,o.o)(this.size)}
        tagLabel=${(0,o.o)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};Gt.styles=Vt,Yt([(0,r.Cb)({type:Array})],Gt.prototype,"walletImages",void 0),Yt([(0,r.Cb)()],Gt.prototype,"imageSrc",void 0),Yt([(0,r.Cb)()],Gt.prototype,"name",void 0),Yt([(0,r.Cb)()],Gt.prototype,"size",void 0),Yt([(0,r.Cb)()],Gt.prototype,"tagLabel",void 0),Yt([(0,r.Cb)()],Gt.prototype,"tagVariant",void 0),Yt([(0,r.Cb)()],Gt.prototype,"walletIcon",void 0),Yt([(0,r.Cb)()],Gt.prototype,"tabIdx",void 0),Yt([(0,r.Cb)({type:Boolean})],Gt.prototype,"disabled",void 0),Yt([(0,r.Cb)({type:Boolean})],Gt.prototype,"showAllWallets",void 0),Yt([(0,r.Cb)({type:Boolean})],Gt.prototype,"loading",void 0),Yt([(0,r.Cb)({type:String})],Gt.prototype,"loadingSpinnerColor",void 0),Yt([(0,r.Cb)()],Gt.prototype,"rdnsId",void 0),Yt([(0,r.Cb)()],Gt.prototype,"displayIndex",void 0),Yt([(0,r.Cb)()],Gt.prototype,"walletRank",void 0),Yt([(0,r.Cb)({type:Array})],Gt.prototype,"namespaces",void 0),Gt=Yt([(0,f.Mo)("w3m-list-wallet")],Gt);const Xt=f.iv`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${e=>{let{durations:t}=e;return t.lg}};
    --local-transition: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${e=>{let{durations:t}=e;return t.lg}});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${e=>{let{durations:t}=e;return t.lg}});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var Zt=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let Jt=class extends n.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=a.h.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var e;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver((e=>{for(const i of e)if(i.target===this.getWrapper()){let e=i.contentRect.height;const n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){var t;e=((null===(t=window.visualViewport)||void 0===t?void 0:t.height)||window.innerHeight)-this.getHeaderHeight()-n,this.style.setProperty("--local-border-bottom-radius","0px")}else{e=e+n,this.style.setProperty("--local-border-bottom-radius",n?"var(--apkt-borderRadius-5)":"0px")}this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}})),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),null===(e=window.visualViewport)||void 0===e||e.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var e;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",this.onViewportResize)}render(){return n.dy`
      <div class="container" data-mobile-fullscreen="${(0,o.o)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,o.o)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),i=this.historyState.split(",").filter(Boolean),n=i.length,r=t.length,o=t[t.length-1]||"",a=f.Hg.cssDurationToNumber(this.transitionDuration);let s="";r>n?s="next":r<n?s="prev":r===n&&t[r-1]!==i[n-1]&&(s="next"),this.viewDirection=`${s}-${o}`,setTimeout((()=>{var t;this.historyState=e,null===(t=this.setView)||void 0===t||t.call(this,o)}),a),setTimeout((()=>{this.viewDirection=""}),2*a)}getWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let i=0;if(this.mobileFullScreen){var n;i=((null===(n=window.visualViewport)||void 0===n?void 0:n.height)||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")}else i=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${i}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${i}px`}getHeaderHeight(){return 60}};Jt.styles=[Xt],Zt([(0,r.Cb)({type:String})],Jt.prototype,"transitionDuration",void 0),Zt([(0,r.Cb)({type:String})],Jt.prototype,"transitionFunction",void 0),Zt([(0,r.Cb)({type:String})],Jt.prototype,"history",void 0),Zt([(0,r.Cb)({type:String})],Jt.prototype,"view",void 0),Zt([(0,r.Cb)({attribute:!1})],Jt.prototype,"setView",void 0),Zt([(0,r.SB)()],Jt.prototype,"viewDirection",void 0),Zt([(0,r.SB)()],Jt.prototype,"historyState",void 0),Zt([(0,r.SB)()],Jt.prototype,"previousHeight",void 0),Zt([(0,r.SB)()],Jt.prototype,"mobileFullScreen",void 0),Jt=Zt([(0,f.Mo)("w3m-router-container")],Jt)},51943:(e,t,i)=>{i(37640)}}]);
//# sourceMappingURL=9972.chunk.js.map