"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[5891],{45891:(e,t,r)=>{r.r(t),r.d(t,{W3mBuyInProgressView:()=>W,W3mOnRampProvidersView:()=>P,W3mOnrampFiatSelectView:()=>m,W3mOnrampTokensView:()=>O,W3mOnrampWidget:()=>F,W3mWhatIsABuyView:()=>L});var i=r(66386),o=r(43756),n=r(54417),s=r(38478),a=r(32751),c=r(90746),u=r(93060),l=r(47443),d=r(96464);r(20255),r(11753),r(57104),r(93746);const p=d.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}}
      ${e=>{let{durations:t}=e;return t.md}};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var h=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let m=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=s.ph.state.paymentCurrency,this.currencies=s.ph.state.paymentCurrencies,this.currencyImages=a.W.state.currencyImages,this.checked=c.M.state.isLegalCheckboxChecked,this.unsubscribe.push(s.ph.subscribe((e=>{this.selectedCurrency=e.paymentCurrency,this.currencies=e.paymentCurrencies})),a.W.subscribeKey("currencyImages",(e=>this.currencyImages=e)),c.M.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:r}=u.h.state,o=null===(e=u.h.state.features)||void 0===e?void 0:e.legalCheckbox,s=Boolean(t||r)&&Boolean(o)&&!this.checked;return i.dy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,n.o)(s?"disabled":void 0)}
      >
        ${this.currenciesTemplate(s)}
      </wui-flex>
    `}currenciesTemplate(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.currencies.map((t=>{var r;return i.dy`
        <wui-list-item
          imageSrc=${(0,n.o)(null===(r=this.currencyImages)||void 0===r?void 0:r[t.id])}
          @click=${()=>this.selectCurrency(t)}
          variant="image"
          tabIdx=${(0,n.o)(e?-1:void 0)}
        >
          <wui-text variant="md-medium" color="primary">${t.id}</wui-text>
        </wui-list-item>
      `}))}selectCurrency(e){e&&(s.ph.setPaymentCurrency(e),l.I.close())}};m.styles=p,h([(0,o.SB)()],m.prototype,"selectedCurrency",void 0),h([(0,o.SB)()],m.prototype,"currencies",void 0),h([(0,o.SB)()],m.prototype,"currencyImages",void 0),h([(0,o.SB)()],m.prototype,"checked",void 0),m=h([(0,d.Mo)("w3m-onramp-fiat-select-view")],m);var y=r(83520),g=r(8632),w=r(82880),b=r(26367),v=r(95174),f=r(36839),x=r(66107);r(73706),r(51943),r(77395),r(23334);const $=d.iv`
  button {
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    border: none;
    outline: none;
    background-color: ${e=>{let{tokens:t}=e;return t.core.glass010}};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${e=>{let{spacing:t}=e;return t[3]}};
    transition: background-color ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}}
      ${e=>{let{durations:t}=e;return t.md}};
    will-change: background-color;
    cursor: pointer;
  }

  button:hover {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  .provider-image {
    width: ${e=>{let{spacing:t}=e;return t[10]}};
    min-width: ${e=>{let{spacing:t}=e;return t[10]}};
    height: ${e=>{let{spacing:t}=e;return t[10]}};
    border-radius: calc(
      ${e=>{let{borderRadius:t}=e;return t[4]}} - calc(${e=>{let{spacing:t}=e;return t[3]}} / 2)
    );
    position: relative;
    overflow: hidden;
  }

  .network-icon {
    width: ${e=>{let{spacing:t}=e;return t[3]}};
    height: ${e=>{let{spacing:t}=e;return t[3]}};
    border-radius: calc(${e=>{let{spacing:t}=e;return t[3]}} / 2);
    overflow: hidden;
    box-shadow:
      0 0 0 3px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}},
      0 0 0 3px ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    transition: box-shadow ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}}
      ${e=>{let{durations:t}=e;return t.md}};
    will-change: box-shadow;
  }

  button:hover .network-icon {
    box-shadow:
      0 0 0 3px ${e=>{let{tokens:t}=e;return t.core.glass010}},
      0 0 0 3px ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }
`;var k=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let C=class extends i.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit",this.label="",this.feeRange="",this.loading=!1,this.onClick=null}render(){return i.dy`
      <button ?disabled=${this.disabled} @click=${this.onClick} ontouchstart>
        <wui-visual name=${(0,n.o)(this.name)} class="provider-image"></wui-visual>
        <wui-flex flexDirection="column" gap="01">
          <wui-text variant="md-regular" color="primary">${this.label}</wui-text>
          <wui-flex alignItems="center" justifyContent="flex-start" gap="4">
            <wui-text variant="sm-medium" color="primary">
              <wui-text variant="sm-regular" color="secondary">Fees</wui-text>
              ${this.feeRange}
            </wui-text>
            <wui-flex gap="2">
              <wui-icon name="bank" size="sm" color="default"></wui-icon>
              <wui-icon name="card" size="sm" color="default"></wui-icon>
            </wui-flex>
            ${this.networksTemplate()}
          </wui-flex>
        </wui-flex>
        ${this.loading?i.dy`<wui-loading-spinner color="secondary" size="md"></wui-loading-spinner>`:i.dy`<wui-icon name="chevronRight" color="default" size="sm"></wui-icon>`}
      </button>
    `}networksTemplate(){var e;const t=y.R.getAllRequestedCaipNetworks(),r=null===t||void 0===t||null===(e=t.filter((e=>{var t;return null===e||void 0===e||null===(t=e.assets)||void 0===t?void 0:t.imageId})))||void 0===e?void 0:e.slice(0,5);return i.dy`
      <wui-flex class="networks">
        ${null===r||void 0===r?void 0:r.map((e=>i.dy`
            <wui-flex class="network-icon">
              <wui-image src=${(0,n.o)(x.f.getNetworkImage(e))}></wui-image>
            </wui-flex>
          `))}
      </wui-flex>
    `}};C.styles=[$],k([(0,o.Cb)({type:Boolean})],C.prototype,"disabled",void 0),k([(0,o.Cb)()],C.prototype,"color",void 0),k([(0,o.Cb)()],C.prototype,"name",void 0),k([(0,o.Cb)()],C.prototype,"label",void 0),k([(0,o.Cb)()],C.prototype,"feeRange",void 0),k([(0,o.Cb)({type:Boolean})],C.prototype,"loading",void 0),k([(0,o.Cb)()],C.prototype,"onClick",void 0),C=k([(0,d.Mo)("w3m-onramp-provider-item")],C);r(26158);var R=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let P=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.providers=s.ph.state.providers,this.unsubscribe.push(s.ph.subscribeKey("providers",(e=>{this.providers=e})))}render(){return i.dy`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.onRampProvidersTemplate()}
      </wui-flex>
    `}onRampProvidersTemplate(){return this.providers.filter((e=>{var t;return e.supportedChains.includes(null!==(t=y.R.state.activeChain)&&void 0!==t?t:"eip155")})).map((e=>i.dy`
          <w3m-onramp-provider-item
            label=${e.label}
            name=${e.name}
            feeRange=${e.feeRange}
            @click=${()=>{this.onClickProvider(e)}}
            ?disabled=${!e.url}
            data-testid=${`onramp-provider-${e.name}`}
          ></w3m-onramp-provider-item>
        `))}onClickProvider(e){var t;s.ph.setSelectedProvider(e),g.P.push("BuyInProgress"),w.j.openHref((null===(t=s.ph.state.selectedProvider)||void 0===t?void 0:t.url)||e.url,"popupWindow","width=600,height=800,scrollbars=yes"),b.X.sendEvent({type:"track",event:"SELECT_BUY_PROVIDER",properties:{provider:e.name,isSmartAccount:(0,v.r9)(y.R.state.activeChain)===f.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}};R([(0,o.SB)()],P.prototype,"providers",void 0),P=R([(0,d.Mo)("w3m-onramp-providers-view")],P);r(79234);const I=d.iv`
  :host > wui-grid {
    max-height: 360px;
    overflow: auto;
  }

  wui-flex {
    transition: opacity ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}}
      ${e=>{let{durations:t}=e;return t.md}};
    will-change: opacity;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var B=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let O=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.selectedCurrency=s.ph.state.purchaseCurrencies,this.tokens=s.ph.state.purchaseCurrencies,this.tokenImages=a.W.state.tokenImages,this.checked=c.M.state.isLegalCheckboxChecked,this.unsubscribe.push(s.ph.subscribe((e=>{this.selectedCurrency=e.purchaseCurrencies,this.tokens=e.purchaseCurrencies})),a.W.subscribeKey("tokenImages",(e=>this.tokenImages=e)),c.M.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:r}=u.h.state,o=null===(e=u.h.state.features)||void 0===e?void 0:e.legalCheckbox,s=Boolean(t||r)&&Boolean(o)&&!this.checked;return i.dy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="2"
        class=${(0,n.o)(s?"disabled":void 0)}
      >
        ${this.currenciesTemplate(s)}
      </wui-flex>
    `}currenciesTemplate(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.tokens.map((t=>{var r;return i.dy`
        <wui-list-item
          imageSrc=${(0,n.o)(null===(r=this.tokenImages)||void 0===r?void 0:r[t.symbol])}
          @click=${()=>this.selectToken(t)}
          variant="image"
          tabIdx=${(0,n.o)(e?-1:void 0)}
        >
          <wui-flex gap="1" alignItems="center">
            <wui-text variant="md-medium" color="primary">${t.name}</wui-text>
            <wui-text variant="sm-regular" color="secondary">${t.symbol}</wui-text>
          </wui-flex>
        </wui-list-item>
      `}))}selectToken(e){e&&(s.ph.setPurchaseCurrency(e),l.I.close())}};O.styles=I,B([(0,o.SB)()],O.prototype,"selectedCurrency",void 0),B([(0,o.SB)()],O.prototype,"tokens",void 0),B([(0,o.SB)()],O.prototype,"tokenImages",void 0),B([(0,o.SB)()],O.prototype,"checked",void 0),O=B([(0,d.Mo)("w3m-onramp-token-select-view")],O);var S=r(82994),A=r(86533),j=r(90891);r(45004),r(71833),r(3737),r(91168);const T=d.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${e=>{let{borderRadius:t}=e;return t[1]}} * 9 - ${e=>{let{borderRadius:t}=e;return t[3]}}
    );
    position: relative;
    overflow: hidden;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    bottom: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${e=>{let{spacing:t}=e;return t[4]}};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${e=>{let{spacing:t}=e;return t["01"]}} ${e=>{let{spacing:t}=e;return t[2]}};
  }
`;var D=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let W=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.selectedOnRampProvider=s.ph.state.selectedProvider,this.uri=S.l.state.wcUri,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.error=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(s.ph.subscribeKey("selectedProvider",(e=>{this.selectedOnRampProvider=e})))}disconnectedCallback(){this.intervalId&&clearInterval(this.intervalId)}render(){var e;let t="Continue in external window";if(this.error)t="Buy failed";else if(this.selectedOnRampProvider){var r;t=`Buy in ${null===(r=this.selectedOnRampProvider)||void 0===r?void 0:r.label}`}const o=this.error?"Buy can be declined from your side or due to and error on the provider app":"We\u2019ll notify you once your Buy is processed";return i.dy`
      <wui-flex
        data-error=${(0,n.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-visual
            name=${(0,n.o)(null===(e=this.selectedOnRampProvider)||void 0===e?void 0:e.name)}
            size="lg"
            class="provider-image"
          >
          </wui-visual>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["4","0","0","0"]}
        >
          <wui-text variant="md-medium" color=${this.error?"error":"primary"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="sm-medium" color="secondary">${o}</wui-text>
        </wui-flex>

        ${this.error?this.tryAgainTemplate():null}
      </wui-flex>

      <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
        <wui-link @click=${this.onCopyUri} color="secondary">
          <wui-icon size="sm" color="default" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>
    `}onTryAgain(){this.selectedOnRampProvider&&(this.error=!1,w.j.openHref(this.selectedOnRampProvider.url,"popupWindow","width=600,height=800,scrollbars=yes"))}tryAgainTemplate(){var e;return null!==(e=this.selectedOnRampProvider)&&void 0!==e&&e.url?i.dy`<wui-button size="md" variant="accent" @click=${this.onTryAgain.bind(this)}>
      <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
      Try again
    </wui-button>`:null}loaderTemplate(){const e=A.u.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return i.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){var e;if(null===(e=this.selectedOnRampProvider)||void 0===e||!e.url)return j.K.showError("No link found"),void g.P.goBack();try{w.j.copyToClopboard(this.selectedOnRampProvider.url),j.K.showSuccess("Link copied")}catch{j.K.showError("Failed to copy")}}};W.styles=T,D([(0,o.SB)()],W.prototype,"intervalId",void 0),D([(0,o.SB)()],W.prototype,"selectedOnRampProvider",void 0),D([(0,o.SB)()],W.prototype,"uri",void 0),D([(0,o.SB)()],W.prototype,"ready",void 0),D([(0,o.SB)()],W.prototype,"showRetry",void 0),D([(0,o.SB)()],W.prototype,"buffering",void 0),D([(0,o.SB)()],W.prototype,"error",void 0),D([(0,o.Cb)({type:Boolean})],W.prototype,"isMobile",void 0),D([(0,o.Cb)()],W.prototype,"onRetry",void 0),W=D([(0,d.Mo)("w3m-buy-in-progress-view")],W);var M=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let L=class extends i.oi{render(){return i.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["6","10","5","10"]}
        alignItems="center"
        gap="5"
      >
        <wui-visual name="onrampCard"></wui-visual>
        <wui-flex flexDirection="column" gap="2" alignItems="center">
          <wui-text align="center" variant="md-medium" color="primary">
            Quickly and easily buy digital assets!
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Simply select your preferred onramp provider and add digital assets to your account
            using your credit card or bank transfer
          </wui-text>
        </wui-flex>
        <wui-button @click=${g.P.goBack}>
          <wui-icon size="sm" color="inherit" name="add" slot="iconLeft"></wui-icon>
          Buy
        </wui-button>
      </wui-flex>
    `}};L=M([(0,d.Mo)("w3m-what-is-a-buy-view")],L);r(33298);const U=d.iv`
  :host {
    width: 100%;
  }

  wui-loading-spinner {
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  .currency-container {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[2]}};
    height: 40px;
    padding: ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[2]}}
      ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[2]}};
    min-width: 95px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    cursor: pointer;
  }

  .currency-container > wui-image {
    height: 24px;
    width: 24px;
    border-radius: 50%;
  }
`;var z=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};let K=class extends i.oi{constructor(){var e;super(),this.unsubscribe=[],this.type="Token",this.value=0,this.currencies=[],this.selectedCurrency=null===(e=this.currencies)||void 0===e?void 0:e[0],this.currencyImages=a.W.state.currencyImages,this.tokenImages=a.W.state.tokenImages,this.unsubscribe.push(s.ph.subscribeKey("purchaseCurrency",(e=>{e&&"Fiat"!==this.type&&(this.selectedCurrency=this.formatPurchaseCurrency(e))})),s.ph.subscribeKey("paymentCurrency",(e=>{e&&"Token"!==this.type&&(this.selectedCurrency=this.formatPaymentCurrency(e))})),s.ph.subscribe((e=>{"Fiat"===this.type?this.currencies=e.purchaseCurrencies.map(this.formatPurchaseCurrency):this.currencies=e.paymentCurrencies.map(this.formatPaymentCurrency)})),a.W.subscribe((e=>{this.currencyImages={...e.currencyImages},this.tokenImages={...e.tokenImages}})))}firstUpdated(){s.ph.getAvailableCurrencies()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=(null===(e=this.selectedCurrency)||void 0===e?void 0:e.symbol)||"",r=this.currencyImages[t]||this.tokenImages[t];return i.dy`<wui-input-text type="number" size="lg" value=${this.value}>
      ${this.selectedCurrency?i.dy` <wui-flex
            class="currency-container"
            justifyContent="space-between"
            alignItems="center"
            gap="1"
            @click=${()=>l.I.open({view:`OnRamp${this.type}Select`})}
          >
            <wui-image src=${(0,n.o)(r)}></wui-image>
            <wui-text color="primary">${this.selectedCurrency.symbol}</wui-text>
          </wui-flex>`:i.dy`<wui-loading-spinner></wui-loading-spinner>`}
    </wui-input-text>`}formatPaymentCurrency(e){return{name:e.id,symbol:e.id}}formatPurchaseCurrency(e){return{name:e.name,symbol:e.symbol}}};K.styles=U,z([(0,o.Cb)({type:String})],K.prototype,"type",void 0),z([(0,o.Cb)({type:Number})],K.prototype,"value",void 0),z([(0,o.SB)()],K.prototype,"currencies",void 0),z([(0,o.SB)()],K.prototype,"selectedCurrency",void 0),z([(0,o.SB)()],K.prototype,"currencyImages",void 0),z([(0,o.SB)()],K.prototype,"tokenImages",void 0),K=z([(0,d.Mo)("w3m-onramp-input")],K);const E=d.iv`
  :host > wui-flex {
    width: 100%;
    max-width: 360px;
  }

  :host > wui-flex > wui-flex {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
    width: 100%;
  }

  .amounts-container {
    width: 100%;
  }
`;var q=function(e,t,r,i){var o,n=arguments.length,s=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,i);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(n<3?o(s):n>3?o(t,r,s):o(t,r))||s);return n>3&&s&&Object.defineProperty(t,r,s),s};const V={USD:"$",EUR:"\u20ac",GBP:"\xa3"},N=[100,250,500,1e3];let F=class extends i.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.caipAddress=y.R.state.activeCaipAddress,this.loading=l.I.state.loading,this.paymentCurrency=s.ph.state.paymentCurrency,this.paymentAmount=s.ph.state.paymentAmount,this.purchaseAmount=s.ph.state.purchaseAmount,this.quoteLoading=s.ph.state.quotesLoading,this.unsubscribe.push(y.R.subscribeKey("activeCaipAddress",(e=>this.caipAddress=e)),l.I.subscribeKey("loading",(e=>{this.loading=e})),s.ph.subscribe((e=>{this.paymentCurrency=e.paymentCurrency,this.paymentAmount=e.paymentAmount,this.purchaseAmount=e.purchaseAmount,this.quoteLoading=e.quotesLoading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return i.dy`
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center">
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <w3m-onramp-input
            type="Fiat"
            @inputChange=${this.onPaymentAmountChange.bind(this)}
            .value=${this.paymentAmount||0}
          ></w3m-onramp-input>
          <w3m-onramp-input
            type="Token"
            .value=${this.purchaseAmount||0}
            .loading=${this.quoteLoading}
          ></w3m-onramp-input>
          <wui-flex justifyContent="space-evenly" class="amounts-container" gap="2">
            ${N.map((e=>{var t;return i.dy`<wui-button
                  variant=${this.paymentAmount===e?"accent-secondary":"neutral-secondary"}
                  size="md"
                  textVariant="md-medium"
                  fullWidth
                  @click=${()=>this.selectPresetAmount(e)}
                  >${`${V[(null===(t=this.paymentCurrency)||void 0===t?void 0:t.id)||"USD"]} ${e}`}</wui-button
                >`}))}
          </wui-flex>
          ${this.templateButton()}
        </wui-flex>
      </wui-flex>
    `}templateButton(){return this.caipAddress?i.dy`<wui-button
          @click=${this.getQuotes.bind(this)}
          variant="accent-primary"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Get quotes
        </wui-button>`:i.dy`<wui-button
          @click=${this.openModal.bind(this)}
          variant="accent"
          fullWidth
          size="lg"
          borderRadius="xs"
        >
          Connect wallet
        </wui-button>`}getQuotes(){this.loading||l.I.open({view:"OnRampProviders"})}openModal(){l.I.open({view:"Connect"})}async onPaymentAmountChange(e){s.ph.setPaymentAmount(Number(e.detail)),await s.ph.getQuote()}async selectPresetAmount(e){s.ph.setPaymentAmount(e),await s.ph.getQuote()}};F.styles=E,q([(0,o.Cb)({type:Boolean})],F.prototype,"disabled",void 0),q([(0,o.SB)()],F.prototype,"caipAddress",void 0),q([(0,o.SB)()],F.prototype,"loading",void 0),q([(0,o.SB)()],F.prototype,"paymentCurrency",void 0),q([(0,o.SB)()],F.prototype,"paymentAmount",void 0),q([(0,o.SB)()],F.prototype,"purchaseAmount",void 0),q([(0,o.SB)()],F.prototype,"quoteLoading",void 0),F=q([(0,d.Mo)("w3m-onramp-widget")],F)},51943:(e,t,r)=>{r(37640)}}]);
//# sourceMappingURL=5891.chunk.js.map