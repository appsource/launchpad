"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[3327],{83327:(e,t,i)=>{i.r(t),i.d(t,{W3mSendConfirmedView:()=>oe,W3mSendSelectTokenView:()=>O,W3mWalletSendPreviewView:()=>ie,W3mWalletSendView:()=>z});var n=i(66386),r=i(43756),o=i(79261),s=i(8632),a=i(83520),l=i(47443),u=i(25984),c=i(82994),d=i(82880),h=i(90891),p=i(89668),m=i(66107),g=i(37082),f=i(96464),w=(i(45004),i(20255),i(71833),i(39406),i(33862));i(73706),i(57104);const v=f.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color;
    position: relative;
  }

  :host(:hover) {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    display: ruby;
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    margin: 0 ${e=>{let{spacing:t}=e;return t[2]}};
  }

  .instruction {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  .paste {
    display: inline-flex;
  }

  textarea {
    background: transparent;
    width: 100%;
    font-family: ${e=>{let{fontFamily:t}=e;return t.regular}};
    font-style: normal;
    font-size: ${e=>{let{textSize:t}=e;return t.large}};
    font-weight: ${e=>{let{fontWeight:t}=e;return t.regular}};
    line-height: ${e=>{let{typography:t}=e;return t["lg-regular"].lineHeight}};
    letter-spacing: ${e=>{let{typography:t}=e;return t["lg-regular"].letterSpacing}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.backgroundAccentPrimary}};
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    border: none;
    outline: none;
    appearance: none;
    resize: none;
    overflow: hidden;
  }
`;var b=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let y=class extends n.oi{constructor(){super(...arguments),this.inputElementRef=(0,w.V)(),this.instructionElementRef=(0,w.V)(),this.readOnly=!1,this.instructionHidden=Boolean(this.value),this.pasting=!1,this.onDebouncedSearch=d.j.debounce((async e=>{if(!e.length)return void this.setReceiverAddress("");const t=a.R.state.activeChain;if(d.j.isAddress(e,t))this.setReceiverAddress(e);else try{const t=await c.l.getEnsAddress(e);if(t){o.S.setReceiverProfileName(e),o.S.setReceiverAddress(t);const i=await c.l.getEnsAvatar(e);o.S.setReceiverProfileImageUrl(i||void 0)}}catch(i){this.setReceiverAddress(e)}finally{o.S.setLoading(!1)}}))}firstUpdated(){this.value&&(this.instructionHidden=!0),this.checkHidden()}render(){var e,t,i,r;return this.readOnly?n.dy` <wui-flex
        flexDirection="column"
        justifyContent="center"
        gap="01"
        .padding=${["8","4","5","4"]}
      >
        <textarea
          spellcheck="false"
          ?disabled=${!0}
          autocomplete="off"
          .value=${null!==(i=this.value)&&void 0!==i?i:""}
        >
           ${null!==(r=this.value)&&void 0!==r?r:""}</textarea
        >
      </wui-flex>`:n.dy` <wui-flex
      @click=${this.onBoxClick.bind(this)}
      flexDirection="column"
      justifyContent="center"
      gap="01"
      .padding=${["8","4","5","4"]}
    >
      <wui-text
        ${(0,w.i)(this.instructionElementRef)}
        class="instruction"
        color="secondary"
        variant="md-medium"
      >
        Type or
        <wui-button
          class="paste"
          size="md"
          variant="neutral-secondary"
          iconLeft="copy"
          @click=${this.onPasteClick.bind(this)}
        >
          <wui-icon size="sm" color="inherit" slot="iconLeft" name="copy"></wui-icon>
          Paste
        </wui-button>
        address
      </wui-text>
      <textarea
        spellcheck="false"
        ?disabled=${!this.instructionHidden}
        ${(0,w.i)(this.inputElementRef)}
        @input=${this.onInputChange.bind(this)}
        @blur=${this.onBlur.bind(this)}
        .value=${null!==(e=this.value)&&void 0!==e?e:""}
        autocomplete="off"
      >
${null!==(t=this.value)&&void 0!==t?t:""}</textarea
      >
    </wui-flex>`}async focusInput(){var e;this.instructionElementRef.value&&(this.instructionHidden=!0,await this.toggleInstructionFocus(!1),this.instructionElementRef.value.style.pointerEvents="none",null===(e=this.inputElementRef.value)||void 0===e||e.focus(),this.inputElementRef.value&&(this.inputElementRef.value.selectionStart=this.inputElementRef.value.selectionEnd=this.inputElementRef.value.value.length))}async focusInstruction(){var e;this.instructionElementRef.value&&(this.instructionHidden=!1,await this.toggleInstructionFocus(!0),this.instructionElementRef.value.style.pointerEvents="auto",null===(e=this.inputElementRef.value)||void 0===e||e.blur())}async toggleInstructionFocus(e){this.instructionElementRef.value&&await this.instructionElementRef.value.animate([{opacity:e?0:1},{opacity:e?1:0}],{duration:100,easing:"ease",fill:"forwards"}).finished}onBoxClick(){this.value||this.instructionHidden||this.focusInput()}onBlur(){this.value||!this.instructionHidden||this.pasting||this.focusInstruction()}checkHidden(){this.instructionHidden&&this.focusInput()}async onPasteClick(){this.pasting=!0;const e=await navigator.clipboard.readText();o.S.setReceiverAddress(e),this.focusInput()}onInputChange(e){var t;const i=e.target;this.pasting=!1,this.value=null===(t=e.target)||void 0===t?void 0:t.value,i.value&&!this.instructionHidden&&this.focusInput(),o.S.setLoading(!0),this.onDebouncedSearch(i.value)}setReceiverAddress(e){o.S.setReceiverAddress(e),o.S.setReceiverProfileName(void 0),o.S.setReceiverProfileImageUrl(void 0),o.S.setLoading(!1)}};y.styles=v,b([(0,r.Cb)()],y.prototype,"value",void 0),b([(0,r.Cb)({type:Boolean})],y.prototype,"readOnly",void 0),b([(0,r.SB)()],y.prototype,"instructionHidden",void 0),b([(0,r.SB)()],y.prototype,"pasting",void 0),y=b([(0,f.Mo)("w3m-input-address")],y);var k=i(31453);i(36619),i(3737),i(86929);const x=f.iv`
  :host {
    width: 100%;
    height: 100px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color;
    transition: all ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}}
      ${e=>{let{durations:t}=e;return t.lg}};
  }

  :host(:hover) {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  wui-flex {
    width: 100%;
    height: fit-content;
  }

  wui-button {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  wui-input-amount {
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  .totalValue {
    width: 100%;
  }
`;var $=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let S=class extends n.oi{constructor(){super(...arguments),this.readOnly=!1,this.isInsufficientBalance=!1}render(){const e=this.readOnly||!this.token;return n.dy` <wui-flex
      flexDirection="column"
      gap="01"
      .padding=${["5","3","4","3"]}
    >
      <wui-flex alignItems="center">
        <wui-input-amount
          @inputChange=${this.onInputChange.bind(this)}
          ?disabled=${e}
          .value=${this.sendTokenAmount?String(this.sendTokenAmount):""}
          ?error=${Boolean(this.isInsufficientBalance)}
        ></wui-input-amount>
        ${this.buttonTemplate()}
      </wui-flex>
      ${this.bottomTemplate()}
    </wui-flex>`}buttonTemplate(){return this.token?n.dy`<wui-token-button
        text=${this.token.symbol}
        imageSrc=${this.token.iconUrl}
        @click=${this.handleSelectButtonClick.bind(this)}
      >
      </wui-token-button>`:n.dy`<wui-button
      size="md"
      variant="neutral-secondary"
      @click=${this.handleSelectButtonClick.bind(this)}
      >Select token</wui-button
    >`}handleSelectButtonClick(){this.readOnly||s.P.push("WalletSendSelectToken")}sendValueTemplate(){if(!this.readOnly&&this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return n.dy`<wui-text class="totalValue" variant="sm-regular" color="secondary"
        >${e?`$${k.C.formatNumberToLocalString(e,2)}`:"Incorrect value"}</wui-text
      >`}return null}maxAmountTemplate(){return this.token?n.dy` <wui-text variant="sm-regular" color="secondary">
        ${f.Hg.roundNumber(Number(this.token.quantity.numeric),6,5)}
      </wui-text>`:null}actionTemplate(){return this.token?n.dy`<wui-link @click=${this.onMaxClick.bind(this)}>Max</wui-link>`:null}bottomTemplate(){return this.readOnly?null:n.dy`<wui-flex alignItems="center" justifyContent="space-between">
      ${this.sendValueTemplate()}
      <wui-flex alignItems="center" gap="01" justifyContent="flex-end">
        ${this.maxAmountTemplate()} ${this.actionTemplate()}
      </wui-flex>
    </wui-flex>`}onInputChange(e){o.S.setTokenAmount(e.detail)}onMaxClick(){if(this.token){const e=k.C.bigNumber(this.token.quantity.numeric);o.S.setTokenAmount(Number(e.toFixed(20)))}}};S.styles=x,$([(0,r.Cb)({type:Object})],S.prototype,"token",void 0),$([(0,r.Cb)({type:Boolean})],S.prototype,"readOnly",void 0),$([(0,r.Cb)({type:Number})],S.prototype,"sendTokenAmount",void 0),$([(0,r.Cb)({type:Boolean})],S.prototype,"isInsufficientBalance",void 0),S=$([(0,f.Mo)("w3m-input-token")],S);const C=f.iv`
  :host {
    display: block;
  }

  wui-flex {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[10]}} !important;
    border: 4px solid ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  wui-button {
    --local-border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}} !important;
  }

  .inputContainer {
    height: fit-content;
  }
`;var R=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const T="Insufficient Funds",P="Incorrect Value",A="Invalid Address",B="Add Address",E="Add Amount",N="Select Token",I="Preview Send";let z=class extends n.oi{constructor(){var e,t;super(),this.unsubscribe=[],this.isTryingToChooseDifferentWallet=!1,this.token=o.S.state.token,this.sendTokenAmount=o.S.state.sendTokenAmount,this.receiverAddress=o.S.state.receiverAddress,this.receiverProfileName=o.S.state.receiverProfileName,this.loading=o.S.state.loading,this.params=null===(e=s.P.state.data)||void 0===e?void 0:e.send,this.caipAddress=null===(t=a.R.getAccountData())||void 0===t?void 0:t.caipAddress,this.message=I,this.disconnecting=!1,this.token&&!this.params&&(this.fetchBalances(),this.fetchNetworkPrice());const i=a.R.subscribeKey("activeCaipAddress",(e=>{!e&&this.isTryingToChooseDifferentWallet&&(this.isTryingToChooseDifferentWallet=!1,l.I.open({view:"Connect",data:{redirectView:"WalletSend"}}).catch((()=>null)),i())}));this.unsubscribe.push(a.R.subscribeAccountStateProp("caipAddress",(e=>{this.caipAddress=e})),o.S.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.loading=e.loading})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}async firstUpdated(){await this.handleSendParameters()}render(){this.getMessage();const e=Boolean(this.params);return n.dy` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex class="inputContainer" gap="2" flexDirection="column">
        <w3m-input-token
          .token=${this.token}
          .sendTokenAmount=${this.sendTokenAmount}
          ?readOnly=${e}
          ?isInsufficientBalance=${this.message===T}
        ></w3m-input-token>
        <wui-icon-box size="md" variant="secondary" icon="arrowBottom"></wui-icon-box>
        <w3m-input-address
          ?readOnly=${e}
          .value=${this.receiverProfileName?this.receiverProfileName:this.receiverAddress}
        ></w3m-input-address>
      </wui-flex>
      ${this.buttonTemplate()}
    </wui-flex>`}async fetchBalances(){await o.S.fetchTokenBalance(),o.S.fetchNetworkBalance()}async fetchNetworkPrice(){await u.nY.getNetworkTokenPrice()}onButtonClick(){s.P.push("WalletSendPreview",{send:this.params})}onFundWalletClick(){s.P.push("FundWallet",{redirectView:"WalletSend"})}async onConnectDifferentWalletClick(){try{this.isTryingToChooseDifferentWallet=!0,this.disconnecting=!0,await c.l.disconnect()}finally{this.disconnecting=!1}}getMessage(){var e;if(this.message=I,this.receiverAddress&&!d.j.isAddress(this.receiverAddress,a.R.state.activeChain)&&(this.message=A),this.receiverAddress||(this.message=B),this.sendTokenAmount&&this.token&&this.sendTokenAmount>Number(this.token.quantity.numeric)&&(this.message=T),this.sendTokenAmount||(this.message=E),this.sendTokenAmount&&null!==(e=this.token)&&void 0!==e&&e.price){this.sendTokenAmount*this.token.price||(this.message=P)}this.token||(this.message=N)}buttonTemplate(){const e=!this.message.startsWith(I),t=this.message===T,i=Boolean(this.params);return t&&!i?n.dy`
        <wui-flex .margin=${["4","0","0","0"]} flexDirection="column" gap="4">
          <wui-button
            @click=${this.onFundWalletClick.bind(this)}
            size="lg"
            variant="accent-secondary"
            fullWidth
          >
            Fund Wallet
          </wui-button>

          <wui-separator data-testid="wui-separator" text="or"></wui-separator>

          <wui-button
            @click=${this.onConnectDifferentWalletClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
            fullWidth
            ?loading=${this.disconnecting}
          >
            Connect a different wallet
          </wui-button>
        </wui-flex>
      `:n.dy`<wui-flex .margin=${["4","0","0","0"]}>
      <wui-button
        @click=${this.onButtonClick.bind(this)}
        ?disabled=${e}
        size="lg"
        variant="accent-primary"
        ?loading=${this.loading}
        fullWidth
      >
        ${this.message}
      </wui-button>
    </wui-flex>`}async handleSendParameters(){if(this.loading=!0,!this.params)return void(this.loading=!1);const e=Number(this.params.amount);if(isNaN(e))return h.K.showError("Invalid amount"),void(this.loading=!1);const{namespace:t,chainId:i,assetAddress:n}=this.params;if(!p.bq.SEND_PARAMS_SUPPORTED_CHAINS.includes(t))return h.K.showError(`Chain "${t}" is not supported for send parameters`),void(this.loading=!1);const r=a.R.getCaipNetworkById(i,t);if(!r)return h.K.showError(`Network with id "${i}" not found`),void(this.loading=!1);try{var s;const{balance:t,name:i,symbol:a,decimals:l}=await g.Q.fetchERC20Balance({caipAddress:this.caipAddress,assetAddress:n,caipNetwork:r});if(!i||!a||!l||!t)return void h.K.showError("Token not found");o.S.setToken({name:i,symbol:a,chainId:r.id.toString(),address:`${r.chainNamespace}:${r.id}:${n}`,value:0,price:0,quantity:{decimals:l.toString(),numeric:t.toString()},iconUrl:null!==(s=m.f.getTokenImage(a))&&void 0!==s?s:""}),o.S.setTokenAmount(e),o.S.setReceiverAddress(this.params.to)}catch(l){console.error("Failed to load token information:",l),h.K.showError("Failed to load token information")}finally{this.loading=!1}}};z.styles=C,R([(0,r.SB)()],z.prototype,"token",void 0),R([(0,r.SB)()],z.prototype,"sendTokenAmount",void 0),R([(0,r.SB)()],z.prototype,"receiverAddress",void 0),R([(0,r.SB)()],z.prototype,"receiverProfileName",void 0),R([(0,r.SB)()],z.prototype,"loading",void 0),R([(0,r.SB)()],z.prototype,"params",void 0),R([(0,r.SB)()],z.prototype,"caipAddress",void 0),R([(0,r.SB)()],z.prototype,"message",void 0),R([(0,r.SB)()],z.prototype,"disconnecting",void 0),z=R([(0,f.Mo)("w3m-wallet-send-view")],z);i(33298),i(41549);const j=f.iv`
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
    border-radius: ${e=>{let{borderRadius:t}=e;return t[3]}};
  }
`;var D=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let O=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.tokenBalances=o.S.state.tokenBalances,this.search="",this.onDebouncedSearch=d.j.debounce((e=>{this.search=e})),this.fetchBalancesAndNetworkPrice(),this.unsubscribe.push(o.S.subscribe((e=>{this.tokenBalances=e.tokenBalances})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return n.dy`
      <wui-flex flexDirection="column">
        ${this.templateSearchInput()} <wui-separator></wui-separator> ${this.templateTokens()}
      </wui-flex>
    `}async fetchBalancesAndNetworkPrice(){var e;this.tokenBalances&&0!==(null===(e=this.tokenBalances)||void 0===e?void 0:e.length)||(await this.fetchBalances(),await this.fetchNetworkPrice())}async fetchBalances(){await o.S.fetchTokenBalance(),o.S.fetchNetworkBalance()}async fetchNetworkPrice(){await u.nY.getNetworkTokenPrice()}templateSearchInput(){return n.dy`
      <wui-flex gap="2" padding="3">
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}templateTokens(){var e,t;(this.tokens=null===(e=this.tokenBalances)||void 0===e?void 0:e.filter((e=>{var t;return e.chainId===(null===(t=a.R.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)})),this.search)?this.filteredTokens=null===(t=this.tokenBalances)||void 0===t?void 0:t.filter((e=>e.name.toLowerCase().includes(this.search.toLowerCase()))):this.filteredTokens=this.tokens;return n.dy`
      <wui-flex
        class="contentContainer"
        flexDirection="column"
        .padding=${["0","3","0","3"]}
      >
        <wui-flex justifyContent="flex-start" .padding=${["4","3","3","3"]}>
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2">
          ${this.filteredTokens&&this.filteredTokens.length>0?this.filteredTokens.map((e=>n.dy`<wui-list-token
                    @click=${this.handleTokenClick.bind(this,e)}
                    ?clickable=${!0}
                    tokenName=${e.name}
                    tokenImageUrl=${e.iconUrl}
                    tokenAmount=${e.quantity.numeric}
                    tokenValue=${e.value}
                    tokenCurrency=${e.symbol}
                  ></wui-list-token>`)):n.dy`<wui-flex
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
                  flexDirection="column"
                >
                  <wui-text variant="lg-medium" align="center" color="primary">
                    No tokens found
                  </wui-text>
                  <wui-text variant="lg-regular" align="center" color="secondary">
                    Your tokens will appear here
                  </wui-text>
                </wui-flex>
                <wui-link @click=${this.onBuyClick.bind(this)}>Buy</wui-link>
              </wui-flex>`}
        </wui-flex>
      </wui-flex>
    `}onBuyClick(){s.P.push("OnRampProviders")}onInputChange(e){this.onDebouncedSearch(e.detail)}handleTokenClick(e){o.S.setToken(e),o.S.setTokenAmount(void 0),s.P.goBack()}};O.styles=j,D([(0,r.SB)()],O.prototype,"tokenBalances",void 0),D([(0,r.SB)()],O.prototype,"tokens",void 0),D([(0,r.SB)()],O.prototype,"filteredTokens",void 0),D([(0,r.SB)()],O.prototype,"search",void 0),O=D([(0,f.Mo)("w3m-wallet-send-select-token-view")],O);var V=i(4906),W=i(4153),M=i(26367),H=(i(76293),i(37640),i(73307),i(2416),i(9886)),U=i(47753),F=(i(95590),i(15955));const _=F.iv`
  :host {
    height: 32px;
    display: flex;
    align-items: center;
    gap: ${e=>{let{spacing:t}=e;return t[1]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    padding-left: ${e=>{let{spacing:t}=e;return t[2]}};
  }

  wui-avatar,
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[16]}};
  }

  wui-icon {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[16]}};
  }
`;var K=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let L=class extends n.oi{constructor(){super(...arguments),this.text=""}render(){return n.dy`<wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      ${this.imageTemplate()}`}imageTemplate(){return this.address?n.dy`<wui-avatar address=${this.address} .imageSrc=${this.imageSrc}></wui-avatar>`:this.imageSrc?n.dy`<wui-image src=${this.imageSrc}></wui-image>`:n.dy`<wui-icon size="lg" color="inverse" name="networkPlaceholder"></wui-icon>`}};L.styles=[H.ET,H.ZM,_],K([(0,r.Cb)({type:String})],L.prototype,"text",void 0),K([(0,r.Cb)({type:String})],L.prototype,"address",void 0),K([(0,r.Cb)({type:String})],L.prototype,"imageSrc",void 0),L=K([(0,U.M)("wui-preview-item")],L);var q=i(54417);const Y=F.iv`
  :host {
    display: flex;
    padding: ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[3]}};
    width: 100%;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  wui-image {
    width: 20px;
    height: 20px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[16]}};
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }
`;var Z=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let J=class extends n.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.textTitle="",this.textValue=void 0}render(){return n.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="primary"> ${this.textTitle} </wui-text>
        ${this.templateContent()}
      </wui-flex>
    `}templateContent(){return this.imageSrc?n.dy`<wui-image src=${this.imageSrc} alt=${this.textTitle}></wui-image>`:this.textValue?n.dy` <wui-text variant="md-regular" color="secondary"> ${this.textValue} </wui-text>`:n.dy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};J.styles=[H.ET,H.ZM,Y],Z([(0,r.Cb)()],J.prototype,"imageSrc",void 0),Z([(0,r.Cb)()],J.prototype,"textTitle",void 0),Z([(0,r.Cb)()],J.prototype,"textValue",void 0),J=Z([(0,U.M)("wui-list-content")],J);const Q=f.iv`
  :host {
    display: flex;
    width: auto;
    flex-direction: column;
    gap: ${e=>{let{spacing:t}=e;return t[1]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[2]}}
      ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[2]}};
  }

  wui-list-content {
    width: -webkit-fill-available !important;
  }

  wui-text {
    padding: 0 ${e=>{let{spacing:t}=e;return t[2]}};
  }

  wui-flex {
    margin-top: ${e=>{let{spacing:t}=e;return t[2]}};
  }

  .network {
    cursor: pointer;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color;
  }

  .network:focus-visible {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.core.glass010}};
    -webkit-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
    -moz-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
    box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
  }

  .network:hover {
    background-color: ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }

  .network:active {
    background-color: ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }
`;var X=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let G=class extends n.oi{constructor(){var e;super(...arguments),this.params=null===(e=s.P.state.data)||void 0===e?void 0:e.send}render(){var e;return n.dy` <wui-text variant="sm-regular" color="secondary">Details</wui-text>
      <wui-flex flexDirection="column" gap="1">
        <wui-list-content
          textTitle="Address"
          textValue=${f.Hg.getTruncateString({string:null!==(e=this.receiverAddress)&&void 0!==e?e:"",charsStart:4,charsEnd:4,truncate:"middle"})}
        >
        </wui-list-content>
        ${this.networkTemplate()}
      </wui-flex>`}networkTemplate(){var e;return null!==(e=this.caipNetwork)&&void 0!==e&&e.name?n.dy` <wui-list-content
        @click=${()=>this.onNetworkClick(this.caipNetwork)}
        class="network"
        textTitle="Network"
        imageSrc=${(0,q.o)(m.f.getNetworkImage(this.caipNetwork))}
      ></wui-list-content>`:null}onNetworkClick(e){e&&!this.params&&s.P.push("Networks",{network:e})}};G.styles=Q,X([(0,r.Cb)()],G.prototype,"receiverAddress",void 0),X([(0,r.Cb)({type:Object})],G.prototype,"caipNetwork",void 0),X([(0,r.SB)()],G.prototype,"params",void 0),G=X([(0,f.Mo)("w3m-wallet-send-details")],G);const ee=f.iv`
  wui-avatar,
  wui-image {
    display: ruby;
    width: 32px;
    height: 32px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
  }

  .sendButton {
    width: 70%;
    --local-width: 100% !important;
    --local-border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}} !important;
  }

  .cancelButton {
    width: 30%;
    --local-width: 100% !important;
    --local-border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}} !important;
  }
`;var te=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let ie=class extends n.oi{constructor(){var e;super(),this.unsubscribe=[],this.token=o.S.state.token,this.sendTokenAmount=o.S.state.sendTokenAmount,this.receiverAddress=o.S.state.receiverAddress,this.receiverProfileName=o.S.state.receiverProfileName,this.receiverProfileImageUrl=o.S.state.receiverProfileImageUrl,this.caipNetwork=a.R.state.activeCaipNetwork,this.loading=o.S.state.loading,this.params=null===(e=s.P.state.data)||void 0===e?void 0:e.send,this.unsubscribe.push(o.S.subscribe((e=>{this.token=e.token,this.sendTokenAmount=e.sendTokenAmount,this.receiverAddress=e.receiverAddress,this.receiverProfileName=e.receiverProfileName,this.receiverProfileImageUrl=e.receiverProfileImageUrl,this.loading=e.loading})),a.R.subscribeKey("activeCaipNetwork",(e=>this.caipNetwork=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,t,i,r;return n.dy` <wui-flex flexDirection="column" .padding=${["0","4","4","4"]}>
      <wui-flex gap="2" flexDirection="column" .padding=${["0","2","0","2"]}>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-flex flexDirection="column" gap="01">
            <wui-text variant="sm-regular" color="secondary">Send</wui-text>
            ${this.sendValueTemplate()}
          </wui-flex>
          <wui-preview-item
            text="${this.sendTokenAmount?f.Hg.roundNumber(this.sendTokenAmount,6,5):"unknown"} ${null===(e=this.token)||void 0===e?void 0:e.symbol}"
            .imageSrc=${null===(t=this.token)||void 0===t?void 0:t.iconUrl}
          ></wui-preview-item>
        </wui-flex>
        <wui-flex>
          <wui-icon color="default" size="md" name="arrowBottom"></wui-icon>
        </wui-flex>
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="sm-regular" color="secondary">To</wui-text>
          <wui-preview-item
            text="${this.receiverProfileName?f.Hg.getTruncateString({string:this.receiverProfileName,charsStart:20,charsEnd:0,truncate:"end"}):f.Hg.getTruncateString({string:this.receiverAddress?this.receiverAddress:"",charsStart:4,charsEnd:4,truncate:"middle"})}"
            address=${null!==(i=this.receiverAddress)&&void 0!==i?i:""}
            .imageSrc=${null!==(r=this.receiverProfileImageUrl)&&void 0!==r?r:void 0}
            .isAddress=${!0}
          ></wui-preview-item>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" .padding=${["6","0","0","0"]}>
        <w3m-wallet-send-details
          .caipNetwork=${this.caipNetwork}
          .receiverAddress=${this.receiverAddress}
        ></w3m-wallet-send-details>
        <wui-flex justifyContent="center" gap="1" .padding=${["3","0","0","0"]}>
          <wui-icon size="sm" color="default" name="warningCircle"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>
        <wui-flex justifyContent="center" gap="3" .padding=${["4","0","0","0"]}>
          <wui-button
            class="cancelButton"
            @click=${this.onCancelClick.bind(this)}
            size="lg"
            variant="neutral-secondary"
          >
            Cancel
          </wui-button>
          <wui-button
            class="sendButton"
            @click=${this.onSendClick.bind(this)}
            size="lg"
            variant="accent-primary"
            .loading=${this.loading}
          >
            Send
          </wui-button>
        </wui-flex>
      </wui-flex></wui-flex
    >`}sendValueTemplate(){if(!this.params&&this.token&&this.sendTokenAmount){const e=this.token.price*this.sendTokenAmount;return n.dy`<wui-text variant="md-regular" color="primary"
        >$${e.toFixed(2)}</wui-text
      >`}return null}async onSendClick(){if(this.sendTokenAmount&&this.receiverAddress)try{await o.S.sendToken(),this.params?s.P.reset("WalletSendConfirmed"):(h.K.showSuccess("Transaction started"),s.P.replace("Account"))}catch(e){let t="Failed to send transaction";const i=e instanceof W.g&&e.originalName===V.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST,n=e instanceof W.g&&e.originalName===V.jD.PROVIDER_RPC_ERROR_NAME.SEND_TRANSACTION_ERROR;(i||n)&&(t=e.message),M.X.sendEvent({type:"track",event:i?"SEND_REJECTED":"SEND_ERROR",properties:o.S.getSdkEventProperties(e)}),h.K.showError(t)}else h.K.showError("Please enter a valid amount and receiver address")}onCancelClick(){s.P.goBack()}};ie.styles=ee,te([(0,r.SB)()],ie.prototype,"token",void 0),te([(0,r.SB)()],ie.prototype,"sendTokenAmount",void 0),te([(0,r.SB)()],ie.prototype,"receiverAddress",void 0),te([(0,r.SB)()],ie.prototype,"receiverProfileName",void 0),te([(0,r.SB)()],ie.prototype,"receiverProfileImageUrl",void 0),te([(0,r.SB)()],ie.prototype,"caipNetwork",void 0),te([(0,r.SB)()],ie.prototype,"loading",void 0),te([(0,r.SB)()],ie.prototype,"params",void 0),ie=te([(0,f.Mo)("w3m-wallet-send-preview-view")],ie);const ne=f.iv`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background-color: ${e=>{let{spacing:t}=e;return t[16]}};
    border: 8px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }
`;var re=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let oe=class extends n.oi{constructor(){super(),this.unsubscribe=[],this.unsubscribe.push()}render(){return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding="${["1","3","4","3"]}"
      >
        <wui-flex justifyContent="center" alignItems="center" class="icon-box">
          <wui-icon size="xxl" color="success" name="checkmark"></wui-icon>
        </wui-flex>

        <wui-text variant="h6-medium" color="primary">You successfully sent asset</wui-text>

        <wui-button
          fullWidth
          @click=${this.onCloseClick.bind(this)}
          size="lg"
          variant="neutral-secondary"
        >
          Close
        </wui-button>
      </wui-flex>
    `}onCloseClick(){l.I.close()}};oe.styles=ne,oe=re([(0,f.Mo)("w3m-send-confirmed-view")],oe)},36619:(e,t,i)=>{var n=i(66386),r=i(43756),o=i(33862),s=i(15955),a=i(9886),l=i(67940),u=i(47753);const c=s.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  :host([data-error='true']) > input {
    color: ${e=>{let{tokens:t}=e;return t.core.textError}};
  }

  :host([data-error='false']) > input {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
  }

  input {
    background: transparent;
    height: auto;
    box-sizing: border-box;
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    font-feature-settings: 'case' on;
    font-size: ${e=>{let{textSize:t}=e;return t.h4}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.backgroundAccentPrimary}};
    line-height: ${e=>{let{typography:t}=e;return t["h4-regular-mono"].lineHeight}};
    letter-spacing: ${e=>{let{typography:t}=e;return t["h4-regular-mono"].letterSpacing}};
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
    font-family: ${e=>{let{fontFamily:t}=e;return t.mono}};
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
    font-family: ${e=>{let{fontFamily:t}=e;return t.mono}};
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
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }
`;var d=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};let h=class extends n.oi{constructor(){super(...arguments),this.inputElementRef=(0,o.V)(),this.disabled=!1,this.value="",this.placeholder="0",this.widthVariant="auto",this.maxDecimals=void 0,this.maxIntegers=void 0,this.fontSize="h4",this.error=!1}firstUpdated(){this.resizeInput()}updated(){this.style.setProperty("--local-font-size",s.gR.textSize[this.fontSize]),this.resizeInput()}render(){var e;return this.dataset.widthVariant=this.widthVariant,this.dataset.error=String(this.error),null!==(e=this.inputElementRef)&&void 0!==e&&e.value&&this.value&&(this.inputElementRef.value.value=this.value),"auto"===this.widthVariant?this.inputTemplate():n.dy`
      <div class="wui-input-amount-fit-width">
        <span class="wui-input-amount-fit-mirror"></span>
        ${this.inputTemplate()}
      </div>
    `}inputTemplate(){var e;return n.dy`<input
      ${(0,o.i)(this.inputElementRef)}
      type="text"
      inputmode="decimal"
      pattern="[0-9,.]*"
      placeholder=${this.placeholder}
      ?disabled=${this.disabled}
      autofocus
      value=${null!==(e=this.value)&&void 0!==e?e:""}
      @input=${this.dispatchInputChangeEvent.bind(this)}
    />`}dispatchInputChangeEvent(){this.inputElementRef.value&&(this.inputElementRef.value.value=l.H.maskInput({value:this.inputElementRef.value.value,decimals:this.maxDecimals,integers:this.maxIntegers}),this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value.value,bubbles:!0,composed:!0})),this.resizeInput())}resizeInput(){if("fit"===this.widthVariant){const e=this.inputElementRef.value;if(e){const t=e.previousElementSibling;t&&(t.textContent=e.value||"0",e.style.width=`${t.offsetWidth}px`)}}}};h.styles=[a.ET,a.ZM,c],d([(0,r.Cb)({type:Boolean})],h.prototype,"disabled",void 0),d([(0,r.Cb)({type:String})],h.prototype,"value",void 0),d([(0,r.Cb)({type:String})],h.prototype,"placeholder",void 0),d([(0,r.Cb)({type:String})],h.prototype,"widthVariant",void 0),d([(0,r.Cb)({type:Number})],h.prototype,"maxDecimals",void 0),d([(0,r.Cb)({type:Number})],h.prototype,"maxIntegers",void 0),d([(0,r.Cb)({type:String})],h.prototype,"fontSize",void 0),d([(0,r.Cb)({type:Boolean})],h.prototype,"error",void 0),h=d([(0,u.M)("wui-input-amount")],h)},86929:(e,t,i)=>{var n=i(66386),r=i(43756),o=(i(76293),i(37640),i(96574),i(73307),i(2416),i(9886)),s=i(47753);const a=i(15955).iv`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
  }

  wui-text {
    padding-left: ${e=>{let{spacing:t}=e;return t[1]}};
    padding-right: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  .left-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  .left-image-container {
    position: relative;
    justify-content: center;
    align-items: center;
  }

  .chain-image {
    position: absolute;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
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

  button[data-size='lg'] .token-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .token-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .token-image {
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

  button[data-size='lg'] .chain-image {
    width: 12px;
    height: 12px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='md'] .chain-image {
    width: 10px;
    height: 10px;
    bottom: 2px;
    right: -4px;
  }

  button[data-size='sm'] .chain-image {
    width: 8px;
    height: 8px;
    bottom: 2px;
    right: -3px;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
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
`;var l=function(e,t,i,n){var r,o=arguments.length,s=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s};const u={lg:"lg-regular",md:"lg-regular",sm:"md-regular"},c={lg:"lg",md:"md",sm:"sm"};let d=class extends n.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.text="",this.loading=!1}render(){return this.loading?n.dy` <wui-flex alignItems="center" gap="01" padding="01">
        <wui-shimmer width="20px" height="20px"></wui-shimmer>
        <wui-shimmer width="32px" height="18px" borderRadius="4xs"></wui-shimmer>
      </wui-flex>`:n.dy`
      <button ?disabled=${this.disabled} data-size=${this.size}>
        ${this.imageTemplate()} ${this.textTemplate()}
      </button>
    `}imageTemplate(){if(this.imageSrc&&this.chainImageSrc)return n.dy`<wui-flex class="left-image-container">
        <wui-image src=${this.imageSrc} class="token-image"></wui-image>
        <wui-image src=${this.chainImageSrc} class="chain-image"></wui-image>
      </wui-flex>`;if(this.imageSrc)return n.dy`<wui-image src=${this.imageSrc} class="token-image"></wui-image>`;const e=c[this.size];return n.dy`<wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}textTemplate(){const e=u[this.size];return n.dy`<wui-text color="primary" variant=${e}
      >${this.text}</wui-text
    >`}};d.styles=[o.ET,o.ZM,a],l([(0,r.Cb)()],d.prototype,"size",void 0),l([(0,r.Cb)()],d.prototype,"imageSrc",void 0),l([(0,r.Cb)()],d.prototype,"chainImageSrc",void 0),l([(0,r.Cb)({type:Boolean})],d.prototype,"disabled",void 0),l([(0,r.Cb)()],d.prototype,"text",void 0),l([(0,r.Cb)({type:Boolean})],d.prototype,"loading",void 0),d=l([(0,s.M)("wui-token-button")],d)}}]);
//# sourceMappingURL=3327.chunk.js.map