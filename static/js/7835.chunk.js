"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[7835],{37835:(e,t,i)=>{i.r(t),i.d(t,{W3mEmailLoginView:()=>S,W3mEmailOtpWidget:()=>h.m,W3mEmailVerifyDeviceView:()=>b,W3mEmailVerifyOtpView:()=>m,W3mUpdateEmailPrimaryOtpView:()=>A,W3mUpdateEmailSecondaryOtpView:()=>R,W3mUpdateEmailWalletView:()=>O});var n=i(83520),r=i(82994),o=i(93060),a=i(26367),l=i(47443),s=i(8632),c=i(90891),u=i(82880),d=i(96464),h=i(66861),p=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let m=class extends h.m{constructor(){super(...arguments),this.onOtpSubmit=async e=>{try{if(this.authConnector){var t,i;const u=n.R.state.activeChain,d=r.l.getConnections(u),h=null===(t=o.h.state.remoteFeatures)||void 0===t?void 0:t.multiWallet,p=d.length>0;if(await this.authConnector.provider.connectOtp({otp:e}),a.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),!u)throw new Error("Active chain is not set on ChainController");if(await r.l.connectExternal(this.authConnector,u),null!==(i=o.h.state.remoteFeatures)&&void 0!==i&&i.emailCapture)return;if(o.h.state.siwx)return void l.I.close();if(p&&h)return s.P.replace("ProfileWallets"),void c.K.showSuccess("New Wallet Added");l.I.close()}}catch(d){throw a.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:u.j.parseError(d)}}),d}},this.onOtpResend=async e=>{this.authConnector&&(await this.authConnector.provider.connectEmail({email:e}),a.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}))}}};m=p([(0,d.Mo)("w3m-email-verify-otp-view")],m);var f=i(66386),w=i(43756),v=i(53993);i(20255),i(71833),i(3737),i(57104);const g=d.iv`
  wui-icon-box {
    height: ${e=>{let{spacing:t}=e;return t[16]}};
    width: ${e=>{let{spacing:t}=e;return t[16]}};
  }
`;var y=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let b=class extends f.oi{constructor(){var e;super(),this.email=null===(e=s.P.state.data)||void 0===e?void 0:e.email,this.authConnector=v.A.getAuthConnector(),this.loading=!1,this.listenForDeviceApproval()}render(){if(!this.email)throw new Error("w3m-email-verify-device-view: No email provided");if(!this.authConnector)throw new Error("w3m-email-verify-device-view: No auth connector provided");return f.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["6","3","6","3"]}
        gap="4"
      >
        <wui-icon-box size="xl" color="accent-primary" icon="sealCheck"></wui-icon-box>

        <wui-flex flexDirection="column" alignItems="center" gap="3">
          <wui-flex flexDirection="column" alignItems="center">
            <wui-text variant="md-regular" color="primary">
              Approve the login link we sent to
            </wui-text>
            <wui-text variant="md-regular" color="primary"><b>${this.email}</b></wui-text>
          </wui-flex>

          <wui-text variant="sm-regular" color="secondary" align="center">
            The code expires in 20 minutes
          </wui-text>

          <wui-flex alignItems="center" id="w3m-resend-section" gap="2">
            <wui-text variant="sm-regular" color="primary" align="center">
              Didn't receive it?
            </wui-text>
            <wui-link @click=${this.onResendCode.bind(this)} .disabled=${this.loading}>
              Resend email
            </wui-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}async listenForDeviceApproval(){if(this.authConnector)try{await this.authConnector.provider.connectDevice(),a.X.sendEvent({type:"track",event:"DEVICE_REGISTERED_FOR_EMAIL"}),a.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),s.P.replace("EmailVerifyOtp",{email:this.email})}catch(e){s.P.goBack()}}async onResendCode(){try{if(!this.loading){if(!this.authConnector||!this.email)throw new Error("w3m-email-login-widget: Unable to resend email");this.loading=!0,await this.authConnector.provider.connectEmail({email:this.email}),this.listenForDeviceApproval(),c.K.showSuccess("Code email resent")}}catch(e){c.K.showError(e)}finally{this.loading=!1}}};b.styles=g,y([(0,w.SB)()],b.prototype,"loading",void 0),b=y([(0,d.Mo)("w3m-email-verify-device-view")],b);var E=i(33862);i(45004),i(77235);const x=f.iv`
  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }
`;var I=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let O=class extends f.oi{constructor(){var e,t,i;super(...arguments),this.formRef=(0,E.V)(),this.initialEmail=null!==(e=null===(t=s.P.state.data)||void 0===t?void 0:t.email)&&void 0!==e?e:"",this.redirectView=null===(i=s.P.state.data)||void 0===i?void 0:i.redirectView,this.email="",this.loading=!1}firstUpdated(){var e;null===(e=this.formRef.value)||void 0===e||e.addEventListener("keydown",(e=>{"Enter"===e.key&&this.onSubmitEmail(e)}))}render(){return f.dy`
      <wui-flex flexDirection="column" padding="4" gap="4">
        <form ${(0,E.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
          <wui-email-input
            value=${this.initialEmail}
            .disabled=${this.loading}
            @inputChange=${this.onEmailInputChange.bind(this)}
          >
          </wui-email-input>
          <input type="submit" hidden />
        </form>
        ${this.buttonsTemplate()}
      </wui-flex>
    `}onEmailInputChange(e){this.email=e.detail}async onSubmitEmail(e){try{if(this.loading)return;this.loading=!0,e.preventDefault();const t=v.A.getAuthConnector();if(!t)throw new Error("w3m-update-email-wallet: Auth connector not found");const i=await t.provider.updateEmail({email:this.email});a.X.sendEvent({type:"track",event:"EMAIL_EDIT"}),"VERIFY_SECONDARY_OTP"===i.action?s.P.push("UpdateEmailSecondaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView}):s.P.push("UpdateEmailPrimaryOtp",{email:this.initialEmail,newEmail:this.email,redirectView:this.redirectView})}catch(t){c.K.showError(t),this.loading=!1}}buttonsTemplate(){const e=!this.loading&&this.email.length>3&&this.email!==this.initialEmail;return this.redirectView?f.dy`
      <wui-flex gap="3">
        <wui-button size="md" variant="neutral" fullWidth @click=${s.P.goBack}>
          Cancel
        </wui-button>

        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      </wui-flex>
    `:f.dy`
        <wui-button
          size="md"
          variant="accent-primary"
          fullWidth
          @click=${this.onSubmitEmail.bind(this)}
          .disabled=${!e}
          .loading=${this.loading}
        >
          Save
        </wui-button>
      `}};O.styles=x,I([(0,w.SB)()],O.prototype,"email",void 0),I([(0,w.SB)()],O.prototype,"loading",void 0),O=I([(0,d.Mo)("w3m-update-email-wallet-view")],O);var C=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let A=class extends h.m{constructor(){var e;super(),this.email=null===(e=s.P.state.data)||void 0===e?void 0:e.email,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailPrimaryOtp({otp:e}),a.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),s.P.replace("UpdateEmailSecondaryOtp",s.P.state.data))}catch(t){throw a.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:u.j.parseError(t)}}),t}},this.onStartOver=()=>{s.P.replace("UpdateEmailWallet",s.P.state.data)}}};A=C([(0,d.Mo)("w3m-update-email-primary-otp-view")],A);var P=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let R=class extends h.m{constructor(){var e,t;super(),this.email=null===(e=s.P.state.data)||void 0===e?void 0:e.newEmail,this.redirectView=null===(t=s.P.state.data)||void 0===t?void 0:t.redirectView,this.onOtpSubmit=async e=>{try{this.authConnector&&(await this.authConnector.provider.updateEmailSecondaryOtp({otp:e}),a.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_PASS"}),this.redirectView&&s.P.reset(this.redirectView))}catch(t){throw a.X.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_FAIL",properties:{message:u.j.parseError(t)}}),t}},this.onStartOver=()=>{s.P.replace("UpdateEmailWallet",s.P.state.data)}}};R=P([(0,d.Mo)("w3m-update-email-secondary-otp-view")],R);var $=i(46460),T=i(18710),k=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let S=class extends f.oi{constructor(){var e;super(),this.authConnector=v.A.getAuthConnector(),this.isEmailEnabled=null===(e=o.h.state.remoteFeatures)||void 0===e?void 0:e.email,this.isAuthEnabled=this.checkIfAuthEnabled(v.A.state.connectors),this.connectors=v.A.state.connectors,v.A.subscribeKey("connectors",(e=>{this.connectors=e,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}))}render(){if(!this.isEmailEnabled)throw new Error("w3m-email-login-view: Email is not enabled");if(!this.isAuthEnabled)throw new Error("w3m-email-login-view: No auth connector provided");return f.dy`<wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="4">
      <w3m-email-login-widget></w3m-email-login-widget>
    </wui-flex> `}checkIfAuthEnabled(e){const t=e.filter((e=>e.type===T.b.CONNECTOR_TYPE_AUTH)).map((e=>e.chain));return $.b.AUTH_CONNECTOR_SUPPORTED_CHAINS.some((e=>t.includes(e)))}};k([(0,w.SB)()],S.prototype,"connectors",void 0),S=k([(0,d.Mo)("w3m-email-login-view")],S)},66861:(e,t,i)=>{i.d(t,{m:()=>I});var n=i(66386),r=i(43756),o=i(8632),a=i(53993),l=i(82880),s=i(90891),c=i(96464),u=(i(20255),i(3737),i(77395),i(2416),i(9886)),d=i(67940),h=i(47753);const p=i(15955).iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 48px;
    height: 48px;
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    font-family: ${e=>{let{fontFamily:t}=e;return t.regular}};
    font-size: ${e=>{let{textSize:t}=e;return t.large}};
    line-height: 18px;
    letter-spacing: -0.16px;
    text-align: center;
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, border-color, box-shadow;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: ${e=>{let{spacing:t}=e;return t[4]}};
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
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }
`;var m=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let f=class extends n.oi{constructor(){super(...arguments),this.disabled=!1,this.value=""}render(){return n.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
      value=${this.value}
    /> `}};f.styles=[u.ET,u.ZM,p],m([(0,r.Cb)({type:Boolean})],f.prototype,"disabled",void 0),m([(0,r.Cb)({type:String})],f.prototype,"value",void 0),f=m([(0,h.M)("wui-input-numeric")],f);const w=n.iv`
  :host {
    position: relative;
    display: block;
  }
`;var v=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let g=class extends n.oi{constructor(){super(...arguments),this.length=6,this.otp="",this.values=Array.from({length:this.length}).map((()=>"")),this.numerics=[],this.shouldInputBeEnabled=e=>this.values.slice(0,e).every((e=>""!==e)),this.handleKeyDown=(e,t)=>{const i=e.target,n=this.getInputElement(i);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();const r=n.selectionStart;switch(e.key){case"ArrowLeft":r&&n.setSelectionRange(r+1,r+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):this.updateInput(n,t,"")}},this.focusInputField=(e,t)=>{if("next"===e){const e=t+1;if(!this.shouldInputBeEnabled(e))return;const i=this.numerics[e<this.length?e:t],n=i?this.getInputElement(i):void 0;n&&(n.disabled=!1,n.focus())}if("prev"===e){const e=t-1,i=this.numerics[e>-1?e:t],n=i?this.getInputElement(i):void 0;n&&n.focus()}}}firstUpdated(){var e,t;this.otp&&(this.values=this.otp.split(""));const i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelectorAll("wui-input-numeric");i&&(this.numerics=Array.from(i)),null===(t=this.numerics[0])||void 0===t||t.focus()}render(){return n.dy`
      <wui-flex gap="1" data-testid="wui-otp-input">
        ${Array.from({length:this.length}).map(((e,t)=>n.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @click=${e=>this.selectInput(e)}
              @keydown=${e=>this.handleKeyDown(e,t)}
              .disabled=${!this.shouldInputBeEnabled(t)}
              .value=${this.values[t]||""}
            >
            </wui-input-numeric>
          `))}
      </wui-flex>
    `}updateInput(e,t,i){const n=this.numerics[t],r=e||(n?this.getInputElement(n):void 0);r&&(r.value=i,this.values=this.values.map(((e,n)=>n===t?i:e)))}selectInput(e){const t=e.target;if(t){const e=this.getInputElement(t);null===e||void 0===e||e.select()}}handleInput(e,t){const i=e.target,n=this.getInputElement(i);if(n){const i=n.value;if("insertFromPaste"===e.inputType)this.handlePaste(n,i,t);else{d.H.isNumber(i)&&e.data?(this.updateInput(n,t,e.data),this.focusInputField("next",t)):this.updateInput(n,t,"")}}this.dispatchInputChangeEvent()}handlePaste(e,t,i){const n=t[0];if(n&&d.H.isNumber(n)){this.updateInput(e,i,n);const r=t.substring(1);if(i+1<this.length&&r.length){const e=this.numerics[i+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,r,i+1)}else this.focusInputField("next",i)}else this.updateInput(e,i,"")}getInputElement(e){var t;return null!==(t=e.shadowRoot)&&void 0!==t&&t.querySelector("input")?e.shadowRoot.querySelector("input"):null}dispatchInputChangeEvent(){const e=this.values.join("");this.dispatchEvent(new CustomEvent("inputChange",{detail:e,bubbles:!0,composed:!0}))}};g.styles=[u.ET,w],v([(0,r.Cb)({type:Number})],g.prototype,"length",void 0),v([(0,r.Cb)({type:String})],g.prototype,"otp",void 0),v([(0,r.SB)()],g.prototype,"values",void 0),g=v([(0,h.M)("wui-otp")],g);i(57104);var y=i(30550);const b=n.iv`
  wui-loading-spinner {
    margin: 9px auto;
  }

  .email-display,
  .email-display wui-text {
    max-width: 100%;
  }
`;var E,x=function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a};let I=E=class extends n.oi{firstUpdated(){this.startOTPTimeout()}disconnectedCallback(){clearTimeout(this.OTPTimeout)}constructor(){var e;super(),this.loading=!1,this.timeoutTimeLeft=y.$.getTimeToNextEmailLogin(),this.error="",this.otp="",this.email=null===(e=o.P.state.data)||void 0===e?void 0:e.email,this.authConnector=a.A.getAuthConnector()}render(){if(!this.email)throw new Error("w3m-email-otp-widget: No email provided");const e=Boolean(this.timeoutTimeLeft),t=this.getFooterLabels(e);return n.dy`
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
          <wui-text variant="sm-regular" color="secondary">${t.title}</wui-text>
          <wui-link @click=${this.onResendCode.bind(this)} .disabled=${e}>
            ${t.action}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}startOTPTimeout(){this.timeoutTimeLeft=y.$.getTimeToNextEmailLogin(),this.OTPTimeout=setInterval((()=>{this.timeoutTimeLeft>0?this.timeoutTimeLeft=y.$.getTimeToNextEmailLogin():clearInterval(this.OTPTimeout)}),1e3)}async onOtpInputChange(e){try{var t;if(!this.loading)if(this.otp=e.detail,this.shouldSubmitOnOtpChange())this.loading=!0,await(null===(t=this.onOtpSubmit)||void 0===t?void 0:t.call(this,this.otp))}catch(i){this.error=l.j.parseError(i),this.loading=!1}}async onResendCode(){try{if(this.onOtpResend){if(!this.loading&&!this.timeoutTimeLeft){this.error="",this.otp="";if(!a.A.getAuthConnector()||!this.email)throw new Error("w3m-email-otp-widget: Unable to resend email");this.loading=!0,await this.onOtpResend(this.email),this.startOTPTimeout(),s.K.showSuccess("Code email resent")}}else this.onStartOver&&this.onStartOver()}catch(e){s.K.showError(e)}finally{this.loading=!1}}getFooterLabels(e){return this.onStartOver?{title:"Something wrong?",action:"Try again "+(e?`in ${this.timeoutTimeLeft}s`:"")}:{title:"Didn't receive it?",action:"Resend "+(e?`in ${this.timeoutTimeLeft}s`:"Code")}}shouldSubmitOnOtpChange(){return this.authConnector&&this.otp.length===E.OTP_LENGTH}};I.OTP_LENGTH=6,I.styles=b,x([(0,r.SB)()],I.prototype,"loading",void 0),x([(0,r.SB)()],I.prototype,"timeoutTimeLeft",void 0),x([(0,r.SB)()],I.prototype,"error",void 0),I=E=x([(0,c.Mo)("w3m-email-otp-widget")],I)}}]);
//# sourceMappingURL=7835.chunk.js.map