"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[550],{40550:(e,t,i)=>{i.r(t),i.d(t,{W3mConnectSocialsView:()=>C,W3mConnectingFarcasterView:()=>F,W3mConnectingSocialView:()=>T});var o=i(66386),r=i(43756),s=i(54417),a=i(90746),n=i(93060),c=i(96464),l=(i(20255),i(93746),i(53993)),d=i(421),u=i(8632),h=i(89668),p=i(60825),m=i(74547),v=i(82880),g=(i(68839),i(26566));const w=c.iv`
  :host {
    margin-top: ${e=>{let{spacing:t}=e;return t[1]}};
  }
  wui-separator {
    margin: ${e=>{let{spacing:t}=e;return t[3]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1)
      ${e=>{let{spacing:t}=e;return t[2]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1);
    width: calc(100% + ${e=>{let{spacing:t}=e;return t[3]}} * 2);
  }
`;var f=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let y=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=l.A.state.connectors,this.authConnector=this.connectors.find((e=>"AUTH"===e.type)),this.remoteFeatures=n.h.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=d.Q.state.plan.hasExceededUsageLimit,this.unsubscribe.push(l.A.subscribeKey("connectors",(e=>{this.connectors=e,this.authConnector=this.connectors.find((e=>"AUTH"===e.type))})),n.h.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,t;let i=(null===(e=this.remoteFeatures)||void 0===e?void 0:e.socials)||[];const r=Boolean(this.authConnector),s=null===(t=i)||void 0===t?void 0:t.length,a="ConnectSocials"===u.P.state.view;return r&&s||a?(a&&!s&&(i=h.bq.DEFAULT_SOCIALS),o.dy` <wui-flex flexDirection="column" gap="2">
      ${i.map((e=>o.dy`<wui-list-social
            @click=${()=>{this.onSocialClick(e)}}
            data-testid=${`social-selector-${e}`}
            name=${e}
            logo=${e}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`))}
    </wui-flex>`):null}async onSocialClick(e){this.hasExceededUsageLimit?u.P.push("UsageExceeded"):e&&await(0,m.y0)(e)}async handlePwaFrameLoad(){if(v.j.isPWA()){this.isPwaLoading=!0;try{var e;(null===(e=this.authConnector)||void 0===e?void 0:e.provider)instanceof g.S&&await this.authConnector.provider.init()}catch(t){p.B.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:t.message},"error")}finally{this.isPwaLoading=!1}}}};y.styles=w,f([(0,r.Cb)()],y.prototype,"tabIdx",void 0),f([(0,r.SB)()],y.prototype,"connectors",void 0),f([(0,r.SB)()],y.prototype,"authConnector",void 0),f([(0,r.SB)()],y.prototype,"remoteFeatures",void 0),f([(0,r.SB)()],y.prototype,"isPwaLoading",void 0),f([(0,r.SB)()],y.prototype,"hasExceededUsageLimit",void 0),y=f([(0,c.Mo)("w3m-social-login-list")],y);const b=c.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${e=>{let{durations:t}=e;return t.md}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: opacity;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }

  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var x=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let C=class extends o.oi{constructor(){super(),this.unsubscribe=[],this.checked=a.M.state.isLegalCheckboxChecked,this.unsubscribe.push(a.M.subscribeKey("isLegalCheckboxChecked",(e=>{this.checked=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:i}=n.h.state,r=null===(e=n.h.state.features)||void 0===e?void 0:e.legalCheckbox,a=Boolean(t||i)&&Boolean(r)&&!this.checked,c=a?-1:void 0;return o.dy`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${(0,s.o)(a?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${(0,s.o)(c)}></w3m-social-login-list>
      </wui-flex>
    `}};C.styles=b,x([(0,r.SB)()],C.prototype,"checked",void 0),C=x([(0,c.Mo)("w3m-connect-socials-view")],C);var S=i(83520),P=i(82994),$=i(26367),E=i(19374),k=i(90891),R=i(47443),L=i(86533),I=(i(71833),i(91168),i(3649),i(57104),i(11211)),O=i(74273);const A=c.iv`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
  }
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
  wui-icon-box {
    position: absolute;
    right: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    bottom: calc(${e=>{let{spacing:t}=e;return t[1]}} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}}
      ${e=>{let{durations:t}=e;return t.lg}};
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
  .capitalize {
    text-transform: capitalize;
  }
`;var U=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let T=class extends o.oi{constructor(){var e,t,i;super(),this.unsubscribe=[],this.socialProvider=null===(e=S.R.getAccountData())||void 0===e?void 0:e.socialProvider,this.socialWindow=null===(t=S.R.getAccountData())||void 0===t?void 0:t.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=n.h.state.remoteFeatures,this.address=null===(i=S.R.getAccountData())||void 0===i?void 0:i.address,this.connectionsByNamespace=P.l.getConnections(S.R.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=l.A.getAuthConnector(),this.handleSocialConnection=async e=>{var t;if(null!==(t=e.data)&&void 0!==t&&t.resultUri)if(e.origin===O.b.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;const t=this.parseURLError(e.data.resultUri);if(t)return void this.handleSocialError(t);this.closeSocialWindow(),this.updateMessage();const i=e.data.resultUri;this.socialProvider&&$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await P.l.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:i},this.authConnector.chain),this.socialProvider&&(E.M.setConnectedSocialProvider(this.socialProvider),$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(i){this.error=!0,this.updateMessage(),this.socialProvider&&$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:v.j.parseError(i)}})}}else u.P.goBack(),k.K.showError("Untrusted Origin"),this.socialProvider&&$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:"Untrusted Origin"}})};I.j.EmbeddedWalletAbortController.signal.addEventListener("abort",(()=>{this.closeSocialWindow()})),this.unsubscribe.push(S.R.subscribeChainProp("accountState",(e=>{if(e&&(this.socialProvider=e.socialProvider,e.socialWindow&&(this.socialWindow=e.socialWindow),e.address)){var t;const i=null===(t=this.remoteFeatures)||void 0===t?void 0:t.multiWallet;e.address!==this.address&&(this.hasMultipleConnections&&i?(u.P.replace("ProfileWallets"),k.K.showSuccess("New Wallet Added"),this.address=e.address):(R.I.state.open||n.h.state.enableEmbedded)&&R.I.close())}})),n.h.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e}))),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),window.removeEventListener("message",this.handleSocialConnection,!1);S.R.state.activeCaipAddress||!this.socialProvider||this.connecting||$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){var e;return o.dy`
      <wui-flex
        data-error=${(0,s.o)(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${(0,s.o)(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${null!==(e=this.socialProvider)&&void 0!==e?e:"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=L.u.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}parseURLError(e){try{const t="error=",i=e.indexOf(t);if(-1===i)return null;return e.substring(i+t.length)}catch{return null}}connectSocial(){const e=setInterval((()=>{var t;null!==(t=this.socialWindow)&&void 0!==t&&t.closed&&(this.connecting||"ConnectingSocial"!==u.P.state.view||u.P.goBack(),clearInterval(e))}),1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),S.R.setAccountProp("socialWindow",void 0,S.R.state.activeChain))}};T.styles=A,U([(0,r.SB)()],T.prototype,"socialProvider",void 0),U([(0,r.SB)()],T.prototype,"socialWindow",void 0),U([(0,r.SB)()],T.prototype,"error",void 0),U([(0,r.SB)()],T.prototype,"connecting",void 0),U([(0,r.SB)()],T.prototype,"message",void 0),U([(0,r.SB)()],T.prototype,"remoteFeatures",void 0),T=U([(0,c.Mo)("w3m-connecting-social-view")],T);i(45004),i(73706),i(39264),i(41159);const _=c.iv`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[8]}};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var B=function(e,t,i,o){var r,s=arguments.length,a=s<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var n=e.length-1;n>=0;n--)(r=e[n])&&(a=(s<3?r(a):s>3?r(t,i,a):r(t,i))||a);return s>3&&a&&Object.defineProperty(t,i,a),a};let F=class extends o.oi{constructor(){var e,t;super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=null===(e=S.R.getAccountData())||void 0===e?void 0:e.socialProvider,this.uri=null===(t=S.R.getAccountData())||void 0===t?void 0:t.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=n.h.state.remoteFeatures,this.authConnector=l.A.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(S.R.subscribeChainProp("accountState",(e=>{this.socialProvider=null===e||void 0===e?void 0:e.socialProvider,this.uri=null===e||void 0===e?void 0:e.farcasterUrl,this.connectFarcaster()})),n.h.subscribeKey("remoteFeatures",(e=>{this.remoteFeatures=e}))),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate);!S.R.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),o.dy`${this.platformTemplate()}`}platformTemplate(){return v.j.isMobile()?o.dy`${this.mobileTemplate()}`:o.dy`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?o.dy`${this.loadingTemplate()}`:o.dy`${this.qrTemplate()}`}qrTemplate(){return o.dy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return o.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return o.dy` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=L.u.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return o.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}async connectFarcaster(){if(this.authConnector)try{var e,t;await(null===(e=this.authConnector)||void 0===e?void 0:e.provider.connectFarcaster()),this.socialProvider&&(E.M.setConnectedSocialProvider(this.socialProvider),$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;const i=P.l.getConnections(this.authConnector.chain).length>0;await P.l.connectExternal(this.authConnector,this.authConnector.chain);const o=null===(t=this.remoteFeatures)||void 0===t?void 0:t.multiWallet;this.socialProvider&&$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,i&&o?(u.P.replace("ProfileWallets"),k.K.showSuccess("New Wallet Added")):R.I.close()}catch(i){this.socialProvider&&$.X.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:v.j.parseError(i)}}),u.P.goBack(),k.K.showError(i)}}mobileLinkTemplate(){return o.dy`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&v.j.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout((()=>{this.ready=!0}),200))}qrCodeTemplate(){var e;if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,i=null!==(e=L.u.state.themeVariables["--apkt-qr-color"])&&void 0!==e?e:L.u.state.themeVariables["--w3m-qr-color"];return o.dy` <wui-qr-code
      size=${t}
      theme=${L.u.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${(0,s.o)(i)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return o.dy`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(v.j.copyToClopboard(this.uri),k.K.showSuccess("Link copied"))}catch{k.K.showError("Failed to copy")}}};F.styles=_,B([(0,r.SB)()],F.prototype,"socialProvider",void 0),B([(0,r.SB)()],F.prototype,"uri",void 0),B([(0,r.SB)()],F.prototype,"ready",void 0),B([(0,r.SB)()],F.prototype,"loading",void 0),B([(0,r.SB)()],F.prototype,"remoteFeatures",void 0),F=B([(0,c.Mo)("w3m-connecting-farcaster-view")],F)}}]);
//# sourceMappingURL=550.chunk.js.map