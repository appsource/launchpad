"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[8235],{67715:(t,e,i)=>{i.d(e,{z:()=>u});var n=i(88611),o=i(46460),r=i(421),a=i(25337),s=i(83520),l=i(95174),c=i(52113);class u{constructor(){var t;let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.otpUuid=null,this.listeners={sessionChanged:[]},this.localAuthStorageKey=e.localAuthStorageKey||n.uJ.SIWX_AUTH_TOKEN,this.localNonceStorageKey=e.localNonceStorageKey||n.uJ.SIWX_NONCE_TOKEN,this.required=null===(t=e.required)||void 0===t||t,this.messenger=new c.g({getNonce:this.getNonce.bind(this)})}async createMessage(t){return this.messenger.createMessage(t)}async addSession(t){const e=await this.request({method:"POST",key:"authenticate",body:{data:t.data,message:t.message,signature:t.signature,clientId:this.getClientId(),walletInfo:this.getWalletInfo()},headers:["nonce","otp"]});this.setStorageToken(e.token,this.localAuthStorageKey),this.emit("sessionChanged",t),this.setAppKitAccountUser(function(t){const e=t.split(".");if(3!==e.length)throw new Error("Invalid token");const i=e[1];if("string"!==typeof i)throw new Error("Invalid token");const n=i.replace(/-/gu,"+").replace(/_/gu,"/"),o=n.padEnd(n.length+(4-n.length%4)%4,"=");return JSON.parse(atob(o))}(e.token)),this.otpUuid=null}async getSessions(t,e){try{if(!this.getStorageToken(this.localAuthStorageKey))return[];const i=await this.request({method:"GET",key:"me",query:{},headers:["auth"]});if(!i)return[];const n=i.address.toLowerCase()===e.toLowerCase(),o=i.caip2Network===t;if(!n||!o)return[];const r={data:{accountAddress:i.address,chainId:i.caip2Network},message:"",signature:""};return this.emit("sessionChanged",r),this.setAppKitAccountUser(i),[r]}catch{return[]}}async revokeSession(t,e){return Promise.resolve(this.clearStorageTokens())}async setSessions(t){if(0===t.length)this.clearStorageTokens();else{const e=t.find((t=>{var e;return t.data.chainId===(null===(e=(0,l.eq)())||void 0===e?void 0:e.caipNetworkId)}))||t[0];await this.addSession(e)}}getRequired(){return this.required}async getSessionAccount(){if(!this.getStorageToken(this.localAuthStorageKey))throw new Error("Not authenticated");return this.request({method:"GET",key:"me",body:void 0,query:{includeAppKitAccount:!0},headers:["auth"]})}async setSessionAccountMetadata(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(!this.getStorageToken(this.localAuthStorageKey))throw new Error("Not authenticated");return this.request({method:"PUT",key:"account-metadata",body:{metadata:t},headers:["auth"]})}on(t,e){return this.listeners[t].push(e),()=>{this.listeners[t]=this.listeners[t].filter((t=>t!==e))}}removeAllListeners(){Object.keys(this.listeners).forEach((t=>{this.listeners[t]=[]}))}async requestEmailOtp(t){let{email:e,account:i}=t;const n=await this.request({method:"POST",key:"otp",body:{email:e,account:i}});return this.otpUuid=n.uuid,this.messenger.resources=[`email:${e}`],n}confirmEmailOtp(t){let{code:e}=t;return this.request({method:"PUT",key:"otp",body:{code:e},headers:["otp"]})}async request(t){var e;let{method:i,key:n,query:r,body:a,headers:s}=t;const{projectId:l,st:c,sv:u}=this.getSDKProperties(),d=new URL(`${o.b.W3M_API_URL}/auth/v1/${String(n)}`);d.searchParams.set("projectId",l),d.searchParams.set("st",c),d.searchParams.set("sv",u),r&&Object.entries(r).forEach((t=>{let[e,i]=t;return d.searchParams.set(e,String(i))}));const h=await fetch(d,{method:i,body:a?JSON.stringify(a):void 0,headers:Array.isArray(s)?s.reduce(((t,e)=>{switch(e){case"nonce":t["x-nonce-jwt"]=`Bearer ${this.getStorageToken(this.localNonceStorageKey)}`;break;case"auth":t.Authorization=`Bearer ${this.getStorageToken(this.localAuthStorageKey)}`;break;case"otp":this.otpUuid&&(t["x-otp"]=this.otpUuid)}return t}),{}):void 0});if(!h.ok)throw new Error(await h.text());return null!==(e=h.headers.get("content-type"))&&void 0!==e&&e.includes("application/json")?h.json():null}getStorageToken(t){return n.mr.getItem(t)}setStorageToken(t,e){n.mr.setItem(e,t)}clearStorageTokens(){this.otpUuid=null,n.mr.removeItem(this.localAuthStorageKey),n.mr.removeItem(this.localNonceStorageKey),this.emit("sessionChanged",void 0)}async getNonce(){const{nonce:t,token:e}=await this.request({method:"GET",key:"nonce"});return this.setStorageToken(e,this.localNonceStorageKey),t}getClientId(){return a.L.state.clientId}getWalletInfo(){var t;const e=null===(t=s.R.getAccountData())||void 0===t?void 0:t.connectedWalletInfo;if(!e)return;if("social"in e&&"identifier"in e){return{type:"social",social:e.social,identifier:e.identifier}}const{name:i,icon:n}=e;let o="unknown";switch(e.type){case"EXTERNAL":case"INJECTED":case"ANNOUNCED":o="extension";break;case"WALLET_CONNECT":o="walletconnect";break;default:o="unknown"}return{type:o,name:i,icon:n}}getSDKProperties(){return r.Q._getSdkProperties()}emit(t,e){this.listeners[t].forEach((t=>t(e)))}setAppKitAccountUser(t){const{email:e}=t;e&&Object.values(o.b.CHAIN).forEach((t=>{s.R.setAccountProp("user",{email:e},t)}))}}},52113:(t,e,i)=>{i.d(e,{g:()=>r});var n=i(85288),o=i(83520);class r{constructor(t){this.getNonce=t.getNonce}async createMessage(t){const e={accountAddress:t.accountAddress,chainId:t.chainId,version:"1",domain:"undefined"===typeof document?"Unknown Domain":document.location.host,uri:"undefined"===typeof document?"Unknown URI":document.location.href,resources:this.resources,nonce:await this.getNonce(t),issuedAt:this.stringifyDate(new Date),statement:void 0,expirationTime:void 0,notBefore:void 0},i={toString:()=>this.stringify(e)};return Object.assign(e,i)}stringify(t){var e;const i=this.getNetworkName(t.chainId);return[`${t.domain} wants you to sign in with your ${i} account:`,t.accountAddress,t.statement?`\n${t.statement}\n`:"",`URI: ${t.uri}`,`Version: ${t.version}`,`Chain ID: ${t.chainId}`,`Nonce: ${t.nonce}`,t.issuedAt&&`Issued At: ${t.issuedAt}`,t.expirationTime&&`Expiration Time: ${t.expirationTime}`,t.notBefore&&`Not Before: ${t.notBefore}`,t.requestId&&`Request ID: ${t.requestId}`,(null===(e=t.resources)||void 0===e?void 0:e.length)&&t.resources.reduce(((t,e)=>`${t}\n- ${e}`),"Resources:")].filter((t=>"string"===typeof t)).join("\n").trim()}getNetworkName(t){const e=o.R.getAllRequestedCaipNetworks();return n.p.getNetworkNameByCaipNetworkId(e,t)}stringifyDate(t){return t.toISOString()}}},28235:(t,e,i)=>{i.r(e),i.d(e,{W3mDataCaptureOtpConfirmView:()=>b,W3mDataCaptureView:()=>k,W3mEmailSuffixesWidget:()=>c,W3mRecentEmailsWidget:()=>h});var n=i(66386),o=i(43756),r=i(96464);const a=n.iv`
  .email-sufixes {
    display: flex;
    flex-direction: row;
    gap: var(--wui-spacing-3xs);
    overflow-x: auto;
    max-width: 100%;
    margin-top: var(--wui-spacing-s);
    margin-bottom: calc(-1 * var(--wui-spacing-m));
    padding-bottom: var(--wui-spacing-m);
    margin-left: calc(-1 * var(--wui-spacing-m));
    margin-right: calc(-1 * var(--wui-spacing-m));
    padding-left: var(--wui-spacing-m);
    padding-right: var(--wui-spacing-m);

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;var s=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};const l=["@gmail.com","@outlook.com","@yahoo.com","@hotmail.com","@aol.com","@icloud.com","@zoho.com"];let c=class extends n.oi{constructor(){super(...arguments),this.email=""}render(){const t=l.filter(this.filter.bind(this)).map(this.item.bind(this));return 0===t.length?null:n.dy`<div class="email-sufixes">${t}</div>`}filter(t){if(!this.email)return!1;const e=this.email.split("@");if(e.length<2)return!0;const i=e.pop();return t.includes(i)&&t!==`@${i}`}item(t){return n.dy`<wui-button variant="neutral" size="sm" @click=${()=>{const e=this.email.split("@");e.length>1&&e.pop();const i=e[0]+t;this.dispatchEvent(new CustomEvent("change",{detail:i,bubbles:!0,composed:!0}))}}
      >${t}</wui-button
    >`}};c.styles=[a],s([(0,o.Cb)()],c.prototype,"email",void 0),c=s([(0,r.Mo)("w3m-email-suffixes-widget")],c);const u=n.iv`
  .recent-emails {
    display: flex;
    flex-direction: column;
    padding: var(--wui-spacing-s) 0;
    border-top: 1px solid var(--wui-color-gray-glass-005);
    border-bottom: 1px solid var(--wui-color-gray-glass-005);
  }

  .recent-emails-heading {
    margin-bottom: var(--wui-spacing-s);
  }

  .recent-emails-list-item {
    --wui-color-gray-glass-002: transparent;
  }
`;var d=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let h=class extends n.oi{constructor(){super(...arguments),this.emails=[]}render(){return 0===this.emails.length?null:n.dy`<div class="recent-emails">
      <wui-text variant="micro-600" color="fg-200" class="recent-emails-heading"
        >Recently used emails</wui-text
      >
      ${this.emails.map(this.item.bind(this))}
    </div>`}item(t){return n.dy`<wui-list-item
      @click=${()=>{this.dispatchEvent(new CustomEvent("select",{detail:t,bubbles:!0,composed:!0}))}}
      ?chevron=${!0}
      icon="mail"
      iconVariant="overlay"
      class="recent-emails-list-item"
    >
      <wui-text variant="paragraph-500" color="fg-100">${t}</wui-text>
    </wui-list-item>`}};h.styles=[u],d([(0,o.Cb)()],h.prototype,"emails",void 0),h=d([(0,r.Mo)("w3m-recent-emails-widget")],h);var p=i(93060),m=i(8632),g=i(83520),f=i(90891),w=i(67715),v=i(66861),y=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let b=class extends v.m{constructor(){super(...arguments),this.siwx=p.h.state.siwx,this.onOtpSubmit=async t=>{await this.siwx.confirmEmailOtp({code:t}),m.P.replace("SIWXSignMessage")},this.onOtpResend=async t=>{const e=g.R.getAccountData();if(null===e||void 0===e||!e.caipAddress)throw new Error("No account data found");await this.siwx.requestEmailOtp({email:t,account:e.caipAddress})}}connectedCallback(){this.siwx&&this.siwx instanceof w.z||f.K.showError("ReownAuthentication is not initialized."),super.connectedCallback()}shouldSubmitOnOtpChange(){return this.otp.length===v.m.OTP_LENGTH}};y([(0,o.SB)()],b.prototype,"siwx",void 0),b=y([(0,r.Mo)("w3m-data-capture-otp-confirm-view")],b);var x=i(88611);const $=n.iv`
  .hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);

    transition-property: margin, height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    margin-top: -100px;

    &[data-state='loading'] {
      margin-top: 0px;
    }

    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      height: 252px;
      width: 360px;
      background: radial-gradient(
        96.11% 53.95% at 50% 51.28%,
        transparent 0%,
        color-mix(in srgb, var(--wui-color-bg-100) 5%, transparent) 49%,
        color-mix(in srgb, var(--wui-color-bg-100) 65%, transparent) 99.43%
      );
    }
  }

  .hero-main-icon {
    width: 176px;
    transition-property: background-color;
    transition-duration: var(--wui-duration-lg);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      width: 56px;
    }
  }

  .hero-row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--wui-spacing-3xs);
    flex-wrap: nowrap;
    min-width: fit-content;

    &:nth-child(1) {
      transform: translateX(-30px);
    }

    &:nth-child(2) {
      transform: translateX(30px);
    }

    &:nth-child(4) {
      transform: translateX(40px);
    }

    transition-property: height;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);
    height: 68px;

    &[data-state='loading'] {
      height: 0px;
    }
  }

  .hero-row-icon {
    opacity: 0.1;
    transition-property: opacity;
    transition-duration: var(--wui-duration-md);
    transition-timing-function: var(--wui-ease-out-power-1);

    &[data-state='loading'] {
      opacity: 0;
    }
  }
`;var S=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let k=class extends n.oi{constructor(){var t,e,i,n,o,r,a,s,l,c,u;super(...arguments),this.email=null!==(t=null!==(e=null===(i=m.P.state.data)||void 0===i?void 0:i.email)&&void 0!==e?e:null===(n=g.R.getAccountData())||void 0===n||null===(o=n.user)||void 0===o?void 0:o.email)&&void 0!==t?t:"",this.address=null!==(r=null===(a=g.R.getAccountData())||void 0===a?void 0:a.address)&&void 0!==r?r:"",this.loading=!1,this.appName=null!==(s=null===(l=p.h.state.metadata)||void 0===l?void 0:l.name)&&void 0!==s?s:"AppKit",this.siwx=p.h.state.siwx,this.isRequired=Array.isArray(null===(c=p.h.state.remoteFeatures)||void 0===c?void 0:c.emailCapture)&&(null===(u=p.h.state.remoteFeatures)||void 0===u?void 0:u.emailCapture.includes("required")),this.recentEmails=this.getRecentEmails()}connectedCallback(){this.siwx&&this.siwx instanceof w.z||f.K.showError("ReownAuthentication is not initialized. Please contact support."),super.connectedCallback()}firstUpdated(){this.loading=!1,this.recentEmails=this.getRecentEmails(),this.email&&this.onSubmit()}render(){return n.dy`
      <wui-flex flexDirection="column" .padding=${["3xs","m","m","m"]} gap="l">
        ${this.hero()} ${this.paragraph()} ${this.emailInput()} ${this.recentEmailsWidget()}
        ${this.footerActions()}
      </wui-flex>
    `}hero(){return n.dy`
      <div class="hero" data-state=${this.loading?"loading":"default"}>
        ${this.heroRow(["id","mail","wallet","x","solana","qrCode"])}
        ${this.heroRow(["mail","farcaster","wallet","discord","mobile","qrCode"])}
        <div class="hero-row">
          ${this.heroIcon("github")} ${this.heroIcon("bank")}
          <wui-icon-box
            size="xl"
            iconSize="xxl"
            iconColor=${this.loading?"fg-100":"accent-100"}
            backgroundColor=${this.loading?"fg-100":"accent-100"}
            icon=${this.loading?"id":"user"}
            isOpaque
            class="hero-main-icon"
            data-state=${this.loading?"loading":"default"}
          >
          </wui-icon-box>
          ${this.heroIcon("id")} ${this.heroIcon("card")}
        </div>
        ${this.heroRow(["google","id","github","verify","apple","mobile"])}
      </div>
    `}heroRow(t){return n.dy`
      <div class="hero-row" data-state=${this.loading?"loading":"default"}>
        ${t.map(this.heroIcon.bind(this))}
      </div>
    `}heroIcon(t){return n.dy`
      <wui-icon-box
        size="xl"
        iconSize="xxl"
        iconColor="fg-100"
        backgroundColor="fg-100"
        icon=${t}
        data-state=${this.loading?"loading":"default"}
        isOpaque
        class="hero-row-icon"
      >
      </wui-icon-box>
    `}paragraph(){return this.loading?n.dy`
        <wui-text variant="paragraph-400" color="fg-200" align="center"
          >We are verifying your account with email
          <wui-text variant="paragraph-600" color="accent-100">${this.email}</wui-text> and address
          <wui-text variant="paragraph-600" color="fg-100">
            ${r.Hg.getTruncateString({string:this.address,charsEnd:4,charsStart:4,truncate:"middle"})} </wui-text
          >, please wait a moment.</wui-text
        >
      `:this.isRequired?n.dy`
        <wui-text variant="paragraph-600" color="fg-100" align="center">
          ${this.appName} requires your email for authentication.
        </wui-text>
      `:n.dy`
      <wui-flex flexDirection="column" gap="xs" alignItems="center">
        <wui-text variant="paragraph-600" color="fg-100" align="center" size>
          ${this.appName} would like to collect your email.
        </wui-text>

        <wui-text variant="small-400" color="fg-200" align="center">
          Don't worry, it's optional&mdash;you can skip this step.
        </wui-text>
      </wui-flex>
    `}emailInput(){if(this.loading)return null;const t=t=>{this.email=t.detail};return n.dy`
      <wui-flex flexDirection="column">
        <wui-email-input
          .value=${this.email}
          .disabled=${this.loading}
          @inputChange=${t}
          @keydown=${t=>{"Enter"===t.key&&this.onSubmit()}}
        ></wui-email-input>

        <w3m-email-suffixes-widget
          .email=${this.email}
          @change=${t}
        ></w3m-email-suffixes-widget>
      </wui-flex>
    `}recentEmailsWidget(){if(0===this.recentEmails.length||this.loading)return null;return n.dy`
      <w3m-recent-emails-widget
        .emails=${this.recentEmails}
        @select=${t=>{this.email=t.detail,this.onSubmit()}}
      ></w3m-recent-emails-widget>
    `}footerActions(){return n.dy`
      <wui-flex flexDirection="row" fullWidth gap="s">
        ${this.isRequired?null:n.dy`<wui-button
              size="lg"
              variant="neutral"
              fullWidth
              .disabled=${this.loading}
              @click=${this.onSkip.bind(this)}
              >Skip this step</wui-button
            >`}

        <wui-button
          size="lg"
          variant="main"
          type="submit"
          fullWidth
          .disabled=${!this.email||!this.isValidEmail(this.email)}
          .loading=${this.loading}
          @click=${this.onSubmit.bind(this)}
        >
          Continue
        </wui-button>
      </wui-flex>
    `}async onSubmit(){if(!(this.siwx instanceof w.z))return void f.K.showError("ReownAuthentication is not initialized. Please contact support.");const t=g.R.getActiveCaipAddress();if(!t)throw new Error("Account is not connected.");if(this.isValidEmail(this.email))try{this.loading=!0;const e=await this.siwx.requestEmailOtp({email:this.email,account:t});this.pushRecentEmail(this.email),null===e.uuid?m.P.replace("SIWXSignMessage"):m.P.replace("DataCaptureOtpConfirm",{email:this.email})}catch(e){f.K.showError("Failed to send email OTP"),this.loading=!1}else f.K.showError("Please provide a valid email.")}onSkip(){m.P.replace("SIWXSignMessage")}getRecentEmails(){const t=x.mr.getItem(x.uJ.RECENT_EMAILS);return(t?t.split(","):[]).filter(this.isValidEmail.bind(this)).slice(0,3)}pushRecentEmail(t){const e=this.getRecentEmails(),i=Array.from(new Set([t,...e])).slice(0,3);x.mr.setItem(x.uJ.RECENT_EMAILS,i.join(","))}isValidEmail(t){return/^\S+@\S+\.\S+$/u.test(t)}};k.styles=[$],S([(0,o.SB)()],k.prototype,"email",void 0),S([(0,o.SB)()],k.prototype,"address",void 0),S([(0,o.SB)()],k.prototype,"loading",void 0),S([(0,o.SB)()],k.prototype,"appName",void 0),S([(0,o.SB)()],k.prototype,"siwx",void 0),S([(0,o.SB)()],k.prototype,"isRequired",void 0),S([(0,o.SB)()],k.prototype,"recentEmails",void 0),k=S([(0,r.Mo)("w3m-data-capture-view")],k)},66861:(t,e,i)=>{i.d(e,{m:()=>S});var n=i(66386),o=i(43756),r=i(8632),a=i(53993),s=i(82880),l=i(90891),c=i(96464),u=(i(20255),i(3737),i(77395),i(2416),i(9886)),d=i(67940),h=i(47753);const p=i(15955).iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${t=>{let{tokens:e}=t;return e.theme.foregroundPrimary}};
    border-radius: ${t=>{let{borderRadius:e}=t;return e[4]}};
    border: 1px solid ${t=>{let{tokens:e}=t;return e.theme.borderPrimary}};
    font-family: ${t=>{let{fontFamily:e}=t;return e.regular}};
    font-size: ${t=>{let{textSize:e}=t;return e.large}};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${t=>{let{tokens:e}=t;return e.theme.textPrimary}};
    caret-color: ${t=>{let{tokens:e}=t;return e.core.textAccentPrimary}};
    transition:
      background-color ${t=>{let{durations:e}=t;return e.lg}}
        ${t=>{let{easings:e}=t;return e["ease-out-power-2"]}},
      border-color ${t=>{let{durations:e}=t;return e.lg}}
        ${t=>{let{easings:e}=t;return e["ease-out-power-2"]}},
      box-shadow ${t=>{let{durations:e}=t;return e.lg}}
        ${t=>{let{easings:e}=t;return e["ease-out-power-2"]}};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${t=>{let{spacing:e}=t;return e[4]}};
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  input:focus-visible:enabled {
    background-color: transparent;
    border: 1px solid ${t=>{let{tokens:e}=t;return e.theme.borderSecondary}};
    box-shadow: 0px 0px 0px 4px ${t=>{let{tokens:e}=t;return e.core.foregroundAccent040}};
  }
`;var m=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let g=class extends n.oi{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return n.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};g.styles=[u.ET,u.ZM,p],m([(0,o.Cb)({type:Boolean})],g.prototype,"disabled",void 0),m([(0,o.Cb)({type:String})],g.prototype,"value",void 0),g=m([(0,h.M)("wui-input-numeric")],g);const f=n.iv`
  :host {
    position: relative;
    display: block;
  }
`;var w=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let v=class extends n.oi{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=t=>this.values.slice(0,t).every((t=>""!==t)),this.handleKeyDown=(t,e)=>{const i=t.target,n=this.getInputElement(i);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(t.key)&&t.preventDefault();const o=n.selectionStart;switch(t.key){case"ArrowLeft":o&&n.setSelectionRange(o+1,o+1),this.focusInputField("prev",e);break;case"ArrowRight":case"Shift":this.focusInputField("next",e);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",e):this.updateInput(n,e,"")}},this.focusInputField=(t,e)=>{if("next"===t){const t=e+1;if(!this.shouldInputBeEnabled(t))return;const i=this.numerics[t<this.length?t:e],n=i?this.getInputElement(i):void 0;n&&(n.disabled=!1,n.focus())}if("prev"===t){const t=e-1,i=this.numerics[t>-1?t:e],n=i?this.getInputElement(i):void 0;n&&n.focus()}}}firstUpdated(){var t,e;this.otp&&(this.values=this.otp.split(""));const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelectorAll("wui-input-numeric");i&&(this.numerics=Array.from(i)),null===(e=this.numerics[0])||void 0===e||e.focus()}render(){return n.dy`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((t,e)=>n.dy`
            <wui-input-numeric
              @input=${t=>this.handleInput(t,e)}
              @click=${t=>this.selectInput(t)}
              @keydown=${t=>this.handleKeyDown(t,e)}
              .disabled=${!this.shouldInputBeEnabled(e)}
              .value=${this.values[e]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(t,e,i){const n=this.numerics[e],o=t||(n?this.getInputElement(n):void 0);o&&(o.value=i,this.values=this.values.map(((t,n)=>n===e?i:t)))}selectInput(t){const e=t.target;if(e){const t=this.getInputElement(e);null===t||void 0===t||t.select()}}handleInput(t,e){const i=t.target,n=this.getInputElement(i);if(n){const i=n.value;if("insertFromPaste"===t.inputType)this.handlePaste(n,i,e);else{d.H.isNumber(i)&&t.data?(this.updateInput(n,e,t.data),this.focusInputField("next",e)):this.updateInput(n,e,"")}}this.dispatchInputChangeEvent()}handlePaste(t,e,i){const n=e[0];if(n&&d.H.isNumber(n)){this.updateInput(t,i,n);const o=e.substring(1);if(i+1<this.length&&o.length){const t=this.numerics[i+1],e=t?this.getInputElement(t):void 0;e&&this.handlePaste(e,o,i+1)}else this.focusInputField("next",i)}else this.updateInput(t,i,"")}getInputElement(t){var e;return null!==(e=t.shadowRoot)&&void 0!==e&&e.querySelector("input")?t.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const t=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:t,bubbles:!0,composed:!0}))}};v.styles=[u.ET,f],w([(0,o.Cb)({type:Number})],v.prototype,"length",void 0),w([(0,o.Cb)({type:String})],v.prototype,"otp",void 0),w([(0,o.SB)()],v.prototype,"values",void 0),v=w([(0,h.M)("wui-otp")],v);i(57104);var y=i(30550);const b=n.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var x,$=function(t,e,i,n){var o,r=arguments.length,a=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(a=(r<3?o(a):r>3?o(e,i,a):o(e,i))||a);return r>3&&a&&Object.defineProperty(e,i,a),a};let S=x=class extends n.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var t;super(),this.loading=!1,this.timeoutTimeLeft=y.$.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=null===(t=r.P.state.data)||void 0===t?void 0:t.email,this.authConnector=a.A.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const t=Boolean(this.timeoutTimeLeft),e=this.getFooterLabels(t);return n.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","0","4","0"]}
        gap="4"
      >
        <wui-flex
          class="email-display"
          flexDirection="column"
          alignItems="center"
          .padding=${["0","5","0","5"]}
        >
          <wui-text variant="md-regular" color="primary" align="center">
            Enter the code we sent to
          </wui-text>
          <wui-text variant="md-medium" color="primary" lineClamp="1" align="center">
            ${this.email}
          </wui-text>
        </wui-flex>

        <wui-text variant="sm-regular" color="secondary">The code expires in 20 minutes</wui-text>

        ${this.loading?n.dy`<wui-loading-spinner size="xl" color="accent-primary"></wui-loading-spinner>`:n.dy` <wui-flex flexDirection="column" alignItems="center" gap="2">
              <wui-otp
                dissabled
                length="6"
                @inputChange=${this.onOtpInputChange.bind(this)}
                .otp=${this.otp}
              ></wui-otp>
              ${this.error?n.dy`
                    <wui-text variant="sm-regular" align="center" color="error">
                      ${this.error}. Try Again
                    </wui-text>
                  `:null}
            </wui-flex>`}

        <wui-flex alignItems="center" gap="2">
          <wui-text variant="sm-regular" color="secondary">${e.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${t}>
            ${e.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=y.$.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=y.$.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(t){try{var e;if(!this.loading)if(this.otp=t.detail,this.shouldSubmitOnOtpChange())this.loading=!0,await(null===(e=this.onOtpSubmit)||void 0===e?void 0:e.call(this,this.otp))}catch(i){this.error=s.j.parseError(i),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";if(!a.A.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),l.K.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(t){l.K.showError(t)}finally{this.loading=!1}}getFooterLabels(t){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(t?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(t?`in ${this.timeoutTimeLeft}s`:"Code")}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===x.OTP_LENGTH}};S.OTP_LENGTH=6,S.styles=b,$([(0,o.SB)()],S.prototype,"loading",void 0),$([(0,o.SB)()],S.prototype,"timeoutTimeLeft",void 0),$([(0,o.SB)()],S.prototype,"error",void 0),S=x=$([(0,c.Mo)("w3m-email-otp-widget")],S)}}]);
//# sourceMappingURL=8235.chunk.js.map