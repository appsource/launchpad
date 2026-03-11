"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[9073],{49073:(e,t,r)=>{r.r(t),r.d(t,{W3mApproveTransactionView:()=>h,W3mRegisterAccountNameSuccess:()=>ee,W3mRegisterAccountNameView:()=>X,W3mSmartAccountSettingsView:()=>P,W3mUpgradeWalletView:()=>k});var i=r(66386),o=r(43756),n=r(43646),a=r(47443),s=r(93060),l=r(53993),c=r(86533),d=r(96464);const u=i.iv`
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`;var p=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let h=class extends i.oi{constructor(){super(),this.bodyObserver=void 0,this.unsubscribe=[],this.iframe=document.getElementById("w3m-iframe"),this.ready=!1,this.unsubscribe.push(a.I.subscribeKey("open",(e=>{e||this.onHideIframe()})),a.I.subscribeKey("shake",(e=>{this.iframe.style.animation=e?"w3m-shake 500ms var(--apkt-easings-ease-out-power-2)":"none"})))}disconnectedCallback(){var e;this.onHideIframe(),this.unsubscribe.forEach((e=>e())),null===(e=this.bodyObserver)||void 0===e||e.unobserve(window.document.body)}async firstUpdated(){var e;await this.syncTheme(),this.iframe.style.display="block";const t=null===this||void 0===this||null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector("div");this.bodyObserver=new ResizeObserver((e=>{var r,i;const o=null===e||void 0===e||null===(r=e[0])||void 0===r?void 0:r.contentBoxSize,n=null===o||void 0===o||null===(i=o[0])||void 0===i?void 0:i.inlineSize;this.iframe.style.height="600px",t.style.height="600px",s.h.state.enableEmbedded?this.updateFrameSizeForEmbeddedMode():n&&n<=430?(this.iframe.style.width="100%",this.iframe.style.left="0px",this.iframe.style.bottom="0px",this.iframe.style.top="unset",this.onShowIframe()):(this.iframe.style.width="360px",this.iframe.style.left="calc(50% - 180px)",this.iframe.style.top="calc(50% - 300px + 32px)",this.iframe.style.bottom="unset",this.onShowIframe())})),this.bodyObserver.observe(window.document.body)}render(){return i.dy`<div data-ready=${this.ready} id="w3m-frame-container"></div>`}onShowIframe(){const e=window.innerWidth<=430;this.ready=!0,this.iframe.style.animation=e?"w3m-iframe-zoom-in-mobile 200ms var(--apkt-easings-ease-out-power-2)":"w3m-iframe-zoom-in 200ms var(--apkt-easings-ease-out-power-2)"}onHideIframe(){this.iframe.style.display="none",this.iframe.style.animation="w3m-iframe-fade-out 200ms var(--apkt-easings-ease-out-power-2)"}async syncTheme(){const e=l.A.getAuthConnector();if(e){const t=c.u.getSnapshot().themeMode,r=c.u.getSnapshot().themeVariables;await e.provider.syncTheme({themeVariables:r,w3mThemeVariables:(0,n.t)(r,t)})}}async updateFrameSizeForEmbeddedMode(){var e;const t=null===this||void 0===this||null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector("div");await new Promise((e=>{setTimeout(e,300)}));const r=this.getBoundingClientRect();t.style.width="100%",this.iframe.style.left=`${r.left}px`,this.iframe.style.top=`${r.top}px`,this.iframe.style.width=`${r.width}px`,this.iframe.style.height=`${r.height}px`,this.onShowIframe()}};h.styles=u,p([(0,o.SB)()],h.prototype,"ready",void 0),h=p([(0,d.Mo)("w3m-approve-transaction-view")],h);var g=r(89668),m=(r(20255),r(76293),r(37640),r(73307),r(9886)),f=r(47753),b=r(15955);const w=b.iv`
  a {
    border: none;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, box-shadow, border;
  }

  /* -- Variants --------------------------------------------------------------- */
  a[data-type='success'] {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundSuccess}};
    color: ${e=>{let{tokens:t}=e;return t.core.textSuccess}};
  }

  a[data-type='error'] {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundError}};
    color: ${e=>{let{tokens:t}=e;return t.core.textError}};
  }

  a[data-type='warning'] {
    background-color: ${e=>{let{tokens:t}=e;return t.core.backgroundWarning}};
    color: ${e=>{let{tokens:t}=e;return t.core.textWarning}};
  }

  /* -- Sizes --------------------------------------------------------------- */
  a[data-size='sm'] {
    height: 24px;
  }

  a[data-size='md'] {
    height: 28px;
  }

  a[data-size='lg'] {
    height: 32px;
  }

  a[data-size='sm'] > wui-image,
  a[data-size='sm'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  a[data-size='md'] > wui-image,
  a[data-size='md'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  a[data-size='lg'] > wui-image,
  a[data-size='lg'] > wui-icon {
    width: 24px;
    height: 24px;
  }

  wui-text {
    padding-left: ${e=>{let{spacing:t}=e;return t[1]}};
    padding-right: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[3]}};
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
    a[data-type='success']:not(:disabled):hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
      box-shadow: 0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.core.borderSuccess}};
    }

    a[data-type='error']:not(:disabled):hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
      box-shadow: 0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.core.borderError}};
    }

    a[data-type='warning']:not(:disabled):hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
      box-shadow: 0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.core.borderWarning}};
    }
  }

  a[data-type='success']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.core.backgroundAccentPrimary}},
      0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  a[data-type='error']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.core.backgroundAccentPrimary}},
      0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  a[data-type='warning']:not(:disabled):focus-visible {
    box-shadow:
      0px 0px 0px 1px ${e=>{let{tokens:t}=e;return t.core.backgroundAccentPrimary}},
      0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  a:disabled {
    opacity: 0.5;
  }
`;var y=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};const v={sm:"md-regular",md:"lg-regular",lg:"lg-regular"},x={success:"sealCheck",error:"warning",warning:"exclamationCircle"};let $=class extends i.oi{constructor(){super(...arguments),this.type="success",this.size="md",this.imageSrc=void 0,this.disabled=!1,this.href="",this.text=void 0}render(){return i.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-type=${this.type}
        data-size=${this.size}
      >
        ${this.imageTemplate()}
        <wui-text variant=${v[this.size]} color="inherit">${this.text}</wui-text>
      </a>
    `}imageTemplate(){return this.imageSrc?i.dy`<wui-image src=${this.imageSrc} size="inherit"></wui-image>`:i.dy`<wui-icon
      name=${x[this.type]}
      weight="fill"
      color="inherit"
      size="inherit"
      class="image-icon"
    ></wui-icon>`}};$.styles=[m.ET,m.ZM,w],y([(0,o.Cb)()],$.prototype,"type",void 0),y([(0,o.Cb)()],$.prototype,"size",void 0),y([(0,o.Cb)()],$.prototype,"imageSrc",void 0),y([(0,o.Cb)({type:Boolean})],$.prototype,"disabled",void 0),y([(0,o.Cb)()],$.prototype,"href",void 0),y([(0,o.Cb)()],$.prototype,"text",void 0),$=y([(0,f.M)("wui-semantic-chip")],$);r(57104);var S=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let k=class extends i.oi{render(){return i.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="5" padding="5">
        <wui-text variant="md-regular" color="primary">Follow the instructions on</wui-text>
        <wui-semantic-chip
          icon="externalLink"
          variant="fill"
          text=${g.bq.SECURE_SITE_DASHBOARD}
          href=${g.bq.SECURE_SITE_DASHBOARD}
          imageSrc=${g.bq.SECURE_SITE_FAVICON}
          data-testid="w3m-secure-website-button"
        >
        </wui-semantic-chip>
        <wui-text variant="sm-regular" color="secondary">
          You will have to reconnect for security reasons
        </wui-text>
      </wui-flex>
    `}};k=S([(0,d.Mo)("w3m-upgrade-wallet-view")],k);var A=r(46460),C=r(83520),R=r(95174),T=r(82994),E=r(79261),N=r(61468),O=r(36839),_=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let P=class extends i.oi{constructor(){super(...arguments),this.loading=!1,this.switched=!1,this.text="",this.network=C.R.state.activeCaipNetwork}render(){return i.dy`
      <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
        ${this.togglePreferredAccountTypeTemplate()} ${this.toggleSmartAccountVersionTemplate()}
      </wui-flex>
    `}toggleSmartAccountVersionTemplate(){return i.dy`
      <w3m-tooltip-trigger text="Changing the smart account version will reload the page">
        <wui-list-item
          icon=${this.isV6()?"arrowTop":"arrowBottom"}
          ?rounded=${!0}
          ?chevron=${!0}
          data-testid="account-toggle-smart-account-version"
          @click=${this.toggleSmartAccountVersion.bind(this)}
        >
          <wui-text variant="lg-regular" color="primary"
            >Force Smart Account Version ${this.isV6()?"7":"6"}</wui-text
          >
        </wui-list-item>
      </w3m-tooltip-trigger>
    `}isV6(){return"v6"===(N.e.get("dapp_smart_account_version")||"v6")}toggleSmartAccountVersion(){var e,t;(N.e.set("dapp_smart_account_version",this.isV6()?"v7":"v6"),"undefined"!==typeof window)&&(null===(e=window)||void 0===e||null===(t=e.location)||void 0===t||t.reload())}togglePreferredAccountTypeTemplate(){var e;const t=null===(e=this.network)||void 0===e?void 0:e.chainNamespace,r=C.R.checkIfSmartAccountEnabled(),o=l.A.getConnectorId(t);return l.A.getAuthConnector()&&o===A.b.CONNECTOR_ID.AUTH&&r?(this.switched||(this.text=(0,R.r9)(t)===O.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account"),i.dy`
      <wui-list-item
        icon="swapHorizontal"
        ?rounded=${!0}
        ?chevron=${!0}
        ?loading=${this.loading}
        @click=${this.changePreferredAccountType.bind(this)}
        data-testid="account-toggle-preferred-account-type"
      >
        <wui-text variant="lg-regular" color="primary">${this.text}</wui-text>
      </wui-list-item>
    `):null}async changePreferredAccountType(){var e;const t=null===(e=this.network)||void 0===e?void 0:e.chainNamespace,r=C.R.checkIfSmartAccountEnabled(),i=(0,R.r9)(t)!==O.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&r?O.y_.ACCOUNT_TYPES.SMART_ACCOUNT:O.y_.ACCOUNT_TYPES.EOA;l.A.getAuthConnector()&&(this.loading=!0,await T.l.setPreferredAccountType(i,t),this.text=i===O.y_.ACCOUNT_TYPES.SMART_ACCOUNT?"Switch to your EOA":"Switch to your Smart Account",this.switched=!0,E.S.resetSend(),this.loading=!1,this.requestUpdate())}};_([(0,o.SB)()],P.prototype,"loading",void 0),_([(0,o.SB)()],P.prototype,"switched",void 0),_([(0,o.SB)()],P.prototype,"text",void 0),_([(0,o.SB)()],P.prototype,"network",void 0),P=_([(0,d.Mo)("w3m-smart-account-settings-view")],P);var I=r(33862),z=r(73838),D=r(82880),j=r(26367),M=r(90891);r(76162),r(24163);const U=b.iv`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    padding: ${e=>{let{spacing:t}=e;return t[4]}};
  }

  .name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      cursor: pointer;
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
      border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: default;
  }

  button:focus-visible:enabled {
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }
`;var B=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let V=class extends i.oi{constructor(){super(...arguments),this.name="",this.registered=!1,this.loading=!1,this.disabled=!1}render(){return i.dy`
      <button ?disabled=${this.disabled}>
        <wui-text class="name" color="primary" variant="md-regular">${this.name}</wui-text>
        ${this.templateRightContent()}
      </button>
    `}templateRightContent(){return this.loading?i.dy`<wui-loading-spinner size="lg" color="primary"></wui-loading-spinner>`:this.registered?i.dy`<wui-tag variant="info" size="sm">Registered</wui-tag>`:i.dy`<wui-tag variant="success" size="sm">Available</wui-tag>`}};V.styles=[m.ET,m.ZM,U],B([(0,o.Cb)()],V.prototype,"name",void 0),B([(0,o.Cb)({type:Boolean})],V.prototype,"registered",void 0),B([(0,o.Cb)({type:Boolean})],V.prototype,"loading",void 0),B([(0,o.Cb)({type:Boolean})],V.prototype,"disabled",void 0),V=B([(0,f.M)("wui-account-name-suggestion-item")],V);var Y=r(54417);r(65516);const W=b.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
  }

  :host([disabled]) {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .base-name {
    position: absolute;
    right: ${e=>{let{spacing:t}=e;return t[4]}};
    top: 50%;
    transform: translateY(-50%);
    text-align: right;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }
`;var F=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let K=class extends i.oi{constructor(){super(...arguments),this.disabled=!1,this.loading=!1}render(){return i.dy`
      <wui-input-text
        value=${(0,Y.o)(this.value)}
        ?disabled=${this.disabled}
        .value=${this.value||""}
        data-testid="wui-ens-input"
        icon="search"
        inputRightPadding="5xl"
        .onKeyDown=${this.onKeyDown}
      ></wui-input-text>
    `}};K.styles=[m.ET,W],F([(0,o.Cb)()],K.prototype,"errorMessage",void 0),F([(0,o.Cb)({type:Boolean})],K.prototype,"disabled",void 0),F([(0,o.Cb)()],K.prototype,"value",void 0),F([(0,o.Cb)({type:Boolean})],K.prototype,"loading",void 0),F([(0,o.Cb)({attribute:!1})],K.prototype,"onKeyDown",void 0),K=F([(0,f.M)("wui-ens-input")],K);r(73706),r(98777),r(77395);var H=r(50716);const L=d.iv`
  wui-flex {
    width: 100%;
  }

  .suggestion {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  .suggestion:hover:not(:disabled) {
    cursor: pointer;
    border: none;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
    padding: ${e=>{let{spacing:t}=e;return t[4]}};
  }

  .suggestion:disabled {
    opacity: 0.5;
    cursor: default;
  }

  .suggestion:focus-visible:not(:disabled) {
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .suggested-name {
    max-width: 75%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  form {
    width: 100%;
    position: relative;
  }

  .input-submit-button,
  .input-loading-spinner {
    position: absolute;
    top: 22px;
    transform: translateY(-50%);
    right: 10px;
  }
`;var q=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let X=class extends i.oi{constructor(){var e;super(),this.formRef=(0,I.V)(),this.usubscribe=[],this.name="",this.error="",this.loading=z.a.state.loading,this.suggestions=z.a.state.suggestions,this.profileName=null===(e=C.R.getAccountData())||void 0===e?void 0:e.profileName,this.onDebouncedNameInputChange=D.j.debounce((e=>{e.length<4?this.error="Name must be at least 4 characters long":H.g.isValidReownName(e)?(this.error="",z.a.getSuggestions(e)):this.error="The value is not a valid username"})),this.usubscribe.push(z.a.subscribe((e=>{this.suggestions=e.suggestions,this.loading=e.loading})),C.R.subscribeChainProp("accountState",(e=>{this.profileName=null===e||void 0===e?void 0:e.profileName,null!==e&&void 0!==e&&e.profileName&&(this.error="You already own a name")})))}firstUpdated(){var e;null===(e=this.formRef.value)||void 0===e||e.addEventListener("keydown",this.onEnterKey.bind(this))}disconnectedCallback(){var e;super.disconnectedCallback(),this.usubscribe.forEach((e=>e())),null===(e=this.formRef.value)||void 0===e||e.removeEventListener("keydown",this.onEnterKey.bind(this))}render(){return i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["1","3","4","3"]}
      >
        <form ${(0,I.i)(this.formRef)} @submit=${this.onSubmitName.bind(this)}>
          <wui-ens-input
            @inputChange=${this.onNameInputChange.bind(this)}
            .errorMessage=${this.error}
            .value=${this.name}
            .onKeyDown=${this.onKeyDown.bind(this)}
          >
          </wui-ens-input>
          ${this.submitButtonTemplate()}
          <input type="submit" hidden />
        </form>
        ${this.templateSuggestions()}
      </wui-flex>
    `}submitButtonTemplate(){const e=this.suggestions.find((e=>{var t,r;return(null===(t=e.name)||void 0===t||null===(r=t.split("."))||void 0===r?void 0:r[0])===this.name&&e.registered}));if(this.loading)return i.dy`<wui-loading-spinner
        class="input-loading-spinner"
        color="secondary"
      ></wui-loading-spinner>`;const t=`${this.name}${A.b.WC_NAME_SUFFIX}`;return i.dy`
      <wui-icon-link
        ?disabled=${Boolean(e)}
        class="input-submit-button"
        size="sm"
        icon="chevronRight"
        iconColor=${e?"default":"accent-primary"}
        @click=${()=>this.onSubmitName(t)}
      >
      </wui-icon-link>
    `}onNameInputChange(e){const t=H.g.validateReownName(e.detail||"");this.name=t,this.onDebouncedNameInputChange(t)}onKeyDown(e){1!==e.key.length||H.g.isValidReownName(e.key)||e.preventDefault()}templateSuggestions(){return!this.name||this.name.length<4||this.error?null:i.dy`<wui-flex flexDirection="column" gap="1" alignItems="center">
      ${this.suggestions.map((e=>i.dy`<wui-account-name-suggestion-item
            name=${e.name}
            ?registered=${e.registered}
            ?loading=${this.loading}
            ?disabled=${e.registered||this.loading}
            data-testid="account-name-suggestion"
            @click=${()=>this.onSubmitName(e.name)}
          ></wui-account-name-suggestion-item>`))}
    </wui-flex>`}isAllowedToSubmit(e){var t;const r=null===(t=e.split("."))||void 0===t?void 0:t[0],i=this.suggestions.find((e=>{var t,i;return(null===(t=e.name)||void 0===t||null===(i=t.split("."))||void 0===i?void 0:i[0])===r&&e.registered}));return!this.loading&&!this.error&&!this.profileName&&r&&z.a.validateName(r)&&!i}async onSubmitName(e){try{if(!this.isAllowedToSubmit(e))return;j.X.sendEvent({type:"track",event:"REGISTER_NAME_INITIATED",properties:{isSmartAccount:(0,R.r9)(C.R.state.activeChain)===O.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}}),await z.a.registerName(e),j.X.sendEvent({type:"track",event:"REGISTER_NAME_SUCCESS",properties:{isSmartAccount:(0,R.r9)(C.R.state.activeChain)===O.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e}})}catch(t){M.K.showError(t.message),j.X.sendEvent({type:"track",event:"REGISTER_NAME_ERROR",properties:{isSmartAccount:(0,R.r9)(C.R.state.activeChain)===O.y_.ACCOUNT_TYPES.SMART_ACCOUNT,ensName:e,error:D.j.parseError(t)}})}}onEnterKey(e){if("Enter"===e.key&&this.name&&this.isAllowedToSubmit(this.name)){const e=`${this.name}${A.b.WC_NAME_SUFFIX}`;this.onSubmitName(e)}}};X.styles=L,q([(0,o.Cb)()],X.prototype,"errorMessage",void 0),q([(0,o.SB)()],X.prototype,"name",void 0),q([(0,o.SB)()],X.prototype,"error",void 0),q([(0,o.SB)()],X.prototype,"loading",void 0),q([(0,o.SB)()],X.prototype,"suggestions",void 0),q([(0,o.SB)()],X.prototype,"profileName",void 0),X=q([(0,d.Mo)("w3m-register-account-name-view")],X);var G=r(69447),Z=r(8632);r(45004),r(71833),r(3737);const Q=i.iv`
  .continue-button-container {
    width: 100%;
  }
`;var J=function(e,t,r,i){var o,n=arguments.length,a=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,r):i;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,r,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,r,a):o(t,r))||a);return n>3&&a&&Object.defineProperty(t,r,a),a};let ee=class extends i.oi{render(){return i.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{D.j.openHref(G.U.URLS.FAQ,"_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return i.dy` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box size="xl" color="success" icon="checkmark"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="md-medium" color="primary">
          Account name chosen successfully
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          You can now fund your account and trade crypto
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return i.dy`<wui-flex
      .padding=${["0","4","0","4"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button fullWidth size="lg" borderRadius="xs" @click=${this.redirectToAccount.bind(this)}
        >Let's Go!
      </wui-button>
    </wui-flex>`}redirectToAccount(){Z.P.replace("Account")}};ee.styles=Q,ee=J([(0,d.Mo)("w3m-register-account-name-success-view")],ee)}}]);
//# sourceMappingURL=9073.chunk.js.map