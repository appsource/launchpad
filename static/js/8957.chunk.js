"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[8957],{68957:(t,e,i)=>{i.r(e),i.d(e,{W3mDepositFromExchangeSelectAssetView:()=>A,W3mDepositFromExchangeView:()=>P});var n=i(66386),o=i(43756),r=i(54417),a=i(83520),s=i(33230),u=i(8632),l=i(66107),c=i(90891),d=i(82994),p=i(96464),h=(i(76293),i(37640),i(73307),i(9886)),m=i(47753);const g=i(15955).iv`
  button {
    border: none;
    border-radius: ${t=>{let{borderRadius:e}=t;return e[20]}};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${t=>{let{spacing:e}=t;return e[1]}};
    transition:
      background-color ${t=>{let{durations:e}=t;return e.lg}}
        ${t=>{let{easings:e}=t;return e["ease-out-power-2"]}},
      box-shadow ${t=>{let{durations:e}=t;return e.lg}}
        ${t=>{let{easings:e}=t;return e["ease-out-power-2"]}};
    will-change: background-color, box-shadow;
  }

  /* -- Variants --------------------------------------------------------------- */
  button[data-type='accent'] {
    background-color: ${t=>{let{tokens:e}=t;return e.core.backgroundAccentPrimary}};
    color: ${t=>{let{tokens:e}=t;return e.theme.textPrimary}};
  }

  button[data-type='neutral'] {
    background-color: ${t=>{let{tokens:e}=t;return e.theme.foregroundSecondary}};
    color: ${t=>{let{tokens:e}=t;return e.theme.textPrimary}};
  }

  /* -- Sizes --------------------------------------------------------------- */
  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='sm'] > wui-image,
  button[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-image,
  button[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-image,
  button[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${t=>{let{spacing:e}=t;return e[1]}};
    padding-right: ${t=>{let{spacing:e}=t;return e[1]}};
  }

  wui-image {
    border-radius: ${t=>{let{borderRadius:e}=t;return e[3]}};
    overflow: hidden;
    user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  /* -- States --------------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button[data-type='accent']:not(:disabled):hover {
      background-color: ${t=>{let{tokens:e}=t;return e.core.foregroundAccent060}};
    }

    button[data-type='neutral']:not(:disabled):hover {
      background-color: ${t=>{let{tokens:e}=t;return e.theme.foregroundTertiary}};
    }
  }

  button[data-type='accent']:not(:disabled):focus-visible,
  button[data-type='accent']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${t=>{let{tokens:e}=t;return e.core.foregroundAccent020}};
  }

  button[data-type='neutral']:not(:disabled):focus-visible,
  button[data-type='neutral']:not(:disabled):active {
    box-shadow: 0 0 0 4px ${t=>{let{tokens:e}=t;return e.core.foregroundAccent020}};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var y=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const f={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};let w=class extends n.oi{constructor(){super(...arguments),this.type="accent",this.size="md",this.imageSrc="",this.disabled=!1,this.leftIcon=void 0,this.rightIcon=void 0,this.text=""}render(){return n.dy`
      <button ?disabled=${this.disabled} data-type=${this.type} data-size=${this.size}>
        ${this.imageSrc?n.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}
        ${this.leftIcon?n.dy`<wui-icon name=${this.leftIcon} color="inherit" size="inherit"></wui-icon>`:null}
        <wui-text variant=${f[this.size]} color="inherit">${this.text}</wui-text>
        ${this.rightIcon?n.dy`<wui-icon name=${this.rightIcon} color="inherit" size="inherit"></wui-icon>`:null}
      </button>
    `}};w.styles=[h.ET,h.ZM,g],y([(0,o.Cb)()],w.prototype,"type",void 0),y([(0,o.Cb)()],w.prototype,"size",void 0),y([(0,o.Cb)()],w.prototype,"imageSrc",void 0),y([(0,o.Cb)({type:Boolean})],w.prototype,"disabled",void 0),y([(0,o.Cb)()],w.prototype,"leftIcon",void 0),y([(0,o.Cb)()],w.prototype,"rightIcon",void 0),y([(0,o.Cb)()],w.prototype,"text",void 0),w=y([(0,m.M)("wui-chip-button")],w);i(20255),i(98777),i(51943),i(11753),i(41159),i(57104),i(45004),i(36619),i(3737);var b=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let x=class extends n.oi{constructor(){super(...arguments),this.maxDecimals=void 0,this.maxIntegers=void 0}render(){return n.dy`
      <wui-flex alignItems="center" gap="1">
        <wui-input-amount
          widthVariant="fit"
          fontSize="h2"
          .maxDecimals=${(0,r.o)(this.maxDecimals)}
          .maxIntegers=${(0,r.o)(this.maxIntegers)}
          .value=${this.amount?String(this.amount):""}
        ></wui-input-amount>
        <wui-text variant="md-regular" color="secondary">USD</wui-text>
      </wui-flex>
    `}};b([(0,o.Cb)({type:Number})],x.prototype,"amount",void 0),b([(0,o.Cb)({type:Number})],x.prototype,"maxDecimals",void 0),b([(0,o.Cb)({type:Number})],x.prototype,"maxIntegers",void 0),x=b([(0,p.Mo)("w3m-fund-input")],x);const v=p.iv`
  .amount-input-container {
    border-radius: ${t=>{let{borderRadius:e}=t;return e[6]}};
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    background-color: ${t=>{let{tokens:e}=t;return e.theme.foregroundPrimary}};
    padding: ${t=>{let{spacing:e}=t;return e[1]}};
  }

  .container {
    border-radius: 30px;
  }
`;var $=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const k=[10,50,100];let P=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.network=a.R.state.activeCaipNetwork,this.exchanges=s.u.state.exchanges,this.isLoading=s.u.state.isLoading,this.amount=s.u.state.amount,this.tokenAmount=s.u.state.tokenAmount,this.priceLoading=s.u.state.priceLoading,this.isPaymentInProgress=s.u.state.isPaymentInProgress,this.currentPayment=s.u.state.currentPayment,this.paymentId=s.u.state.paymentId,this.paymentAsset=s.u.state.paymentAsset,this.unsubscribe.push(a.R.subscribeKey("activeCaipNetwork",(t=>{this.network=t,this.setDefaultPaymentAsset()})),s.u.subscribe((t=>{var e,i;this.exchanges=t.exchanges,this.isLoading=t.isLoading,this.amount=t.amount,this.tokenAmount=t.tokenAmount,this.priceLoading=t.priceLoading,this.paymentId=t.paymentId,this.isPaymentInProgress=t.isPaymentInProgress,this.currentPayment=t.currentPayment,this.paymentAsset=t.paymentAsset;t.isPaymentInProgress&&(null===(e=t.currentPayment)||void 0===e?void 0:e.exchangeId)&&(null===(i=t.currentPayment)||void 0===i?void 0:i.sessionId)&&t.paymentId&&this.handlePaymentInProgress()})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()));s.u.state.isPaymentInProgress||s.u.reset()}async firstUpdated(){await this.getPaymentAssets(),this.paymentAsset||await this.setDefaultPaymentAsset(),s.u.setAmount(k[0]),await s.u.fetchExchanges()}render(){return n.dy`
      <wui-flex flexDirection="column" class="container">
        ${this.amountInputTemplate()} ${this.exchangesTemplate()}
      </wui-flex>
    `}exchangesLoadingTemplate(){return Array.from({length:2}).map((()=>n.dy`<wui-shimmer width="100%" height="65px" borderRadius="xxs"></wui-shimmer>`))}_exchangesTemplate(){return this.exchanges.length>0?this.exchanges.map((t=>n.dy`<wui-list-item
              @click=${()=>this.onExchangeClick(t)}
              chevron
              variant="image"
              imageSrc=${t.imageUrl}
              ?loading=${this.isLoading}
            >
              <wui-text variant="md-regular" color="primary">
                Deposit from ${t.name}
              </wui-text>
            </wui-list-item>`)):n.dy`<wui-flex flexDirection="column" alignItems="center" gap="4" padding="4">
          <wui-text variant="lg-medium" align="center" color="primary">
            No exchanges support this asset on this network
          </wui-text>
        </wui-flex>`}exchangesTemplate(){return n.dy`<wui-flex
      flexDirection="column"
      gap="2"
      .padding=${["3","3","3","3"]}
      class="exchanges-container"
    >
      ${this.isLoading?this.exchangesLoadingTemplate():this._exchangesTemplate()}
    </wui-flex>`}amountInputTemplate(){var t,e;return n.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        class="amount-input-container"
      >
        <wui-flex
          justifyContent="space-between"
          alignItems="center"
          .margin=${["0","0","6","0"]}
        >
          <wui-text variant="md-medium" color="secondary">Asset</wui-text>
          <wui-token-button
            data-testid="deposit-from-exchange-asset-button"
            flexDirection="row-reverse"
            text=${(null===(t=this.paymentAsset)||void 0===t?void 0:t.metadata.symbol)||""}
            imageSrc=${(null===(e=this.paymentAsset)||void 0===e?void 0:e.metadata.iconUrl)||""}
            @click=${()=>u.P.push("PayWithExchangeSelectAsset")}
            size="lg"
            .chainImageSrc=${(0,r.o)(l.f.getNetworkImage(this.network))}
          >
          </wui-token-button>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          .margin=${["0","0","4","0"]}
        >
          <w3m-fund-input
            @inputChange=${this.onAmountChange.bind(this)}
            .amount=${this.amount}
            .maxDecimals=${6}
            .maxIntegers=${10}
          >
          </w3m-fund-input>
          ${this.tokenAmountTemplate()}
        </wui-flex>
        <wui-flex justifyContent="center" gap="2">
          ${k.map((t=>n.dy`<wui-chip-button
                @click=${()=>s.u.setAmount(t)}
                type="neutral"
                size="lg"
                text=${`$${t}`}
              ></wui-chip-button>`))}
        </wui-flex>
      </wui-flex>
    `}tokenAmountTemplate(){var t;return this.priceLoading?n.dy`<wui-shimmer
        width="65px"
        height="20px"
        borderRadius="xxs"
        variant="light"
      ></wui-shimmer>`:n.dy`
      <wui-text variant="md-regular" color="secondary">
        ${this.tokenAmount.toFixed(4)} ${null===(t=this.paymentAsset)||void 0===t?void 0:t.metadata.symbol}
      </wui-text>
    `}async onExchangeClick(t){this.amount?await s.u.handlePayWithExchange(t.id):c.K.showError("Please enter an amount")}handlePaymentInProgress(){var t,e,i;const n=a.R.state.activeChain,{redirectView:o="Account"}=null!==(t=u.P.state.data)&&void 0!==t?t:{};this.isPaymentInProgress&&null!==(e=this.currentPayment)&&void 0!==e&&e.exchangeId&&null!==(i=this.currentPayment)&&void 0!==i&&i.sessionId&&this.paymentId&&(s.u.waitUntilComplete({exchangeId:this.currentPayment.exchangeId,sessionId:this.currentPayment.sessionId,paymentId:this.paymentId}).then((t=>{"SUCCESS"===t.status?(c.K.showSuccess("Deposit completed"),s.u.reset(),n&&(a.R.fetchTokenBalance(),d.l.updateBalance(n)),u.P.replace("Transactions")):"FAILED"===t.status&&c.K.showError("Deposit failed")})),c.K.showLoading("Deposit in progress..."),u.P.replace(o))}onAmountChange(t){let{detail:e}=t;s.u.setAmount(e?Number(e):null)}async getPaymentAssets(){this.network&&await s.u.getAssetsForNetwork(this.network.caipNetworkId)}async setDefaultPaymentAsset(){if(this.network){const t=await s.u.getAssetsForNetwork(this.network.caipNetworkId);t[0]&&s.u.setPaymentAsset(t[0])}}};P.styles=v,$([(0,o.SB)()],P.prototype,"network",void 0),$([(0,o.SB)()],P.prototype,"exchanges",void 0),$([(0,o.SB)()],P.prototype,"isLoading",void 0),$([(0,o.SB)()],P.prototype,"amount",void 0),$([(0,o.SB)()],P.prototype,"tokenAmount",void 0),$([(0,o.SB)()],P.prototype,"priceLoading",void 0),$([(0,o.SB)()],P.prototype,"isPaymentInProgress",void 0),$([(0,o.SB)()],P.prototype,"currentPayment",void 0),$([(0,o.SB)()],P.prototype,"paymentId",void 0),$([(0,o.SB)()],P.prototype,"paymentAsset",void 0),P=$([(0,p.Mo)("w3m-deposit-from-exchange-view")],P);var I=i(82880);i(73706),i(71833),i(33298),i(41549),i(39406);const C=p.iv`
  .contentContainer {
    height: 440px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }

  wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${t=>{let{borderRadius:e}=t;return e[3]}};
  }
`;var S=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let A=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.assets=s.u.state.assets,this.search="",this.onDebouncedSearch=I.j.debounce((t=>{this.search=t})),this.unsubscribe.push(s.u.subscribe((t=>{this.assets=t.assets})))}disconnectedCallback(){this.unsubscribe.forEach((t=>t()))}render(){return n.dy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}templateSearchInput(){return n.dy`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){const t=this.assets.filter((t=>t.metadata.name.toLowerCase().includes(this.search.toLowerCase()))),e=t.length>0;return n.dy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Available tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${e?t.map((t=>n.dy`<wui-list-item
                    .imageSrc=${t.metadata.iconUrl}
                    ?clickable=${!0}
                    @click=${this.handleTokenClick.bind(this,t)}
                  >
                    <wui-text variant="md-medium" color="primary">${t.metadata.name}</wui-text>
                    <wui-text variant="md-regular" color="secondary"
                      >${t.metadata.symbol}</wui-text
                    >
                  </wui-list-item>`)):n.dy`<wui-flex
                .padding=${["20","0","0","0"]}
                alignItems="center"
                flexDirection="column"
                gap="4"
              >
                <wui-icon-box icon="coinPlaceholder" color="default" size="lg"></wui-icon-box>
                <wui-flex
                  class="textContent"
                  gap="2"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){u.P.push("OnRampProviders")}onInputChange(t){this.onDebouncedSearch(t.detail)}handleTokenClick(t){s.u.setPaymentAsset(t),u.P.goBack()}};A.styles=C,S([(0,o.SB)()],A.prototype,"assets",void 0),S([(0,o.SB)()],A.prototype,"search",void 0),A=S([(0,p.Mo)("w3m-deposit-from-exchange-select-asset-view")],A)},51943:(t,e,i)=>{i(37640)},36619:(t,e,i)=>{var n=i(66386),o=i(43756),r=i(33862),a=i(15955),s=i(9886),u=i(67940),l=i(47753);const c=a.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  :host([data-error='true']) > input {
    color: ${t=>{let{tokens:e}=t;return e.core.textError}};
  }

  :host([data-error='false']) > input {
    color: ${t=>{let{tokens:e}=t;return e.theme.textPrimary}};
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${t=>{let{tokens:e}=t;return e.theme.textPrimary}};
    font-feature-settings: 'case' on;
    font-size: ${t=>{let{textSize:e}=t;return e.h4}};
    caret-color: ${t=>{let{tokens:e}=t;return e.core.backgroundAccentPrimary}};
    line-height: ${t=>{let{typography:e}=t;return e["h4-regular-mono"].lineHeight}};
    letter-spacing: ${t=>{let{typography:e}=t;return e["h4-regular-mono"].letterSpacing}};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${t=>{let{fontFamily:e}=t;return e.mono}};
  }

  :host([data-width-variant='auto']) input {
    width: 100%;
  }

  :host([data-width-variant='fit']) input {
    width: 1ch;
  }

  .wui-input-amount-fit-mirror {
    position: absolute;
    visibility: hidden;
    white-space: pre;
    font-size: var(--local-font-size);
    line-height: 130%;
    letter-spacing: -1.28px;
    font-family: ${t=>{let{fontFamily:e}=t;return e.mono}};
  }

  .wui-input-amount-fit-width {
    display: inline-block;
    position: relative;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input::placeholder {
    color: ${t=>{let{tokens:e}=t;return e.theme.textSecondary}};
  }
`;var d=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let p=class extends n.oi{constructor(){super(...arguments),this.inputElementRef=(0,r.V)(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4",this.error=!1}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",a.gR.textSize[this.fontSize]),this.resizeInput()}render(){var t;return this.dataset.widthVariant=this.widthVariant,this.dataset.error=String(this.error),null!==(t=this.inputElementRef)&&void 0!==t&&t.value&&this.value&&(this.inputElementRef.value.value=this.value),"auto"===this.widthVariant?this.inputTemplate():n.dy`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){var t;return n.dy`<input
      ${(0,r.i)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${null!==(t=this.value)&&void 0!==t?t:""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=u.H.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if("fit"===this.widthVariant){const t=this.inputElementRef.value;if(t){const e=t.previousElementSibling;e&&(e.textContent=t.value||"0",t.style.width=`${e.offsetWidth}px`)}}}};p.styles=[s.ET,s.ZM,c],d([(0,o.Cb)({type:Boolean})],p.prototype,"disabled",void 0),d([(0,o.Cb)({type:String})],p.prototype,"value",void 0),d([(0,o.Cb)({type:String})],p.prototype,"placeholder",void 0),d([(0,o.Cb)({type:String})],p.prototype,"widthVariant",void 0),d([(0,o.Cb)({type:Number})],p.prototype,"maxDecimals",void 0),d([(0,o.Cb)({type:Number})],p.prototype,"maxIntegers",void 0),d([(0,o.Cb)({type:String})],p.prototype,"fontSize",void 0),d([(0,o.Cb)({type:Boolean})],p.prototype,"error",void 0),p=d([(0,l.M)("wui-input-amount")],p)}}]);
//# sourceMappingURL=8957.chunk.js.map