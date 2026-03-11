"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[4618],{14618:(e,t,i)=>{i.r(t),i.d(t,{W3mWalletReceiveView:()=>x});var r=i(66386),o=i(43756),n=i(54417),a=i(83520),s=i(90891),l=i(66107),c=i(86533),u=i(95174),d=i(8632),w=i(82880),p=i(96464),h=(i(76293),i(37640),i(73307),i(2416),i(9886)),m=i(47753);const f=i(15955).iv`
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${e=>{let{spacing:t}=e;return t[4]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[3]}};
    border: none;
    padding: ${e=>{let{spacing:t}=e;return t[3]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:active:enabled {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  wui-text {
    flex: 1;
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  wui-flex {
    width: auto;
    display: flex;
    align-items: center;
    gap: ${e=>{let{spacing:t}=e;return t["01"]}};
  }

  wui-icon {
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  .network-icon {
    position: relative;
    width: 20px;
    height: 20px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    overflow: hidden;
    margin-left: -8px;
  }

  .network-icon:first-child {
    margin-left: 0px;
  }

  .network-icon:after {
    position: absolute;
    inset: 0;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    box-shadow: inset 0 0 0 1px ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }
`;var v=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let g=class extends r.oi{constructor(){super(...arguments),this.networkImages=[""],this.text=""}render(){return r.dy`
      <button>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
        <wui-flex>
          ${this.networksTemplate()}
          <wui-icon name="chevronRight" size="sm" color="inherit"></wui-icon>
        </wui-flex>
      </button>
    `}networksTemplate(){const e=this.networkImages.slice(0,5);return r.dy` <wui-flex class="networks">
      ${null===e||void 0===e?void 0:e.map((e=>r.dy` <wui-flex class="network-icon"> <wui-image src=${e}></wui-image> </wui-flex>`))}
    </wui-flex>`}};g.styles=[h.ET,h.ZM,f],v([(0,o.Cb)({type:Array})],g.prototype,"networkImages",void 0),v([(0,o.Cb)()],g.prototype,"text",void 0),g=v([(0,m.M)("wui-compatible-network")],g);i(20255),i(39264),i(57104);var b=i(36839);const k=p.iv`
  wui-compatible-network {
    margin-top: ${e=>{let{spacing:t}=e;return t[4]}};
    width: 100%;
  }

  wui-qr-code {
    width: unset !important;
    height: unset !important;
  }

  wui-icon {
    align-items: normal;
  }
`;var y=function(e,t,i,r){var o,n=arguments.length,a=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(n<3?o(a):n>3?o(t,i,a):o(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a};let x=class extends r.oi{constructor(){var e,t;super(),this.unsubscribe=[],this.address=null===(e=a.R.getAccountData())||void 0===e?void 0:e.address,this.profileName=null===(t=a.R.getAccountData())||void 0===t?void 0:t.profileName,this.network=a.R.state.activeCaipNetwork,this.unsubscribe.push(a.R.subscribeChainProp("accountState",(e=>{e?(this.address=e.address,this.profileName=e.profileName):s.K.showError("Account not found")})),a.R.subscribeKey("activeCaipNetwork",(e=>{null!==e&&void 0!==e&&e.id&&(this.network=e)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;if(!this.address)throw new Error("w3m-wallet-receive-view: No account provided");const t=l.f.getNetworkImage(this.network);return r.dy` <wui-flex
      flexDirection="column"
      .padding=${["0","4","4","4"]}
      alignItems="center"
    >
      <wui-chip-button
        data-testid="receive-address-copy-button"
        @click=${this.onCopyClick.bind(this)}
        text=${p.Hg.getTruncateString({string:this.profileName||this.address||"",charsStart:this.profileName?18:4,charsEnd:this.profileName?0:4,truncate:this.profileName?"end":"middle"})}
        icon="copy"
        size="sm"
        imageSrc=${t||""}
        variant="gray"
      ></wui-chip-button>
      <wui-flex
        flexDirection="column"
        .padding=${["4","0","0","0"]}
        alignItems="center"
        gap="4"
      >
        <wui-qr-code
          size=${232}
          theme=${c.u.state.themeMode}
          uri=${this.address}
          ?arenaClear=${!0}
          color=${(0,n.o)(null!==(e=c.u.state.themeVariables["--apkt-qr-color"])&&void 0!==e?e:c.u.state.themeVariables["--w3m-qr-color"])}
          data-testid="wui-qr-code"
        ></wui-qr-code>
        <wui-text variant="lg-regular" color="primary" align="center">
          Copy your address or scan this QR code
        </wui-text>
        <wui-button @click=${this.onCopyClick.bind(this)} size="sm" variant="neutral-secondary">
          <wui-icon slot="iconLeft" size="sm" color="inherit" name="copy"></wui-icon>
          <wui-text variant="md-regular" color="inherit">Copy address</wui-text>
        </wui-button>
      </wui-flex>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){var e;const t=a.R.getAllRequestedCaipNetworks(),i=a.R.checkIfSmartAccountEnabled(),o=a.R.state.activeCaipNetwork,n=t.filter((e=>(null===e||void 0===e?void 0:e.chainNamespace)===(null===o||void 0===o?void 0:o.chainNamespace)));var s;if((0,u.r9)(null===o||void 0===o?void 0:o.chainNamespace)===b.y_.ACCOUNT_TYPES.SMART_ACCOUNT&&i)return o?r.dy`<wui-compatible-network
        @click=${this.onReceiveClick.bind(this)}
        text="Only receive assets on this network"
        .networkImages=${[null!==(s=l.f.getNetworkImage(o))&&void 0!==s?s:""]}
      ></wui-compatible-network>`:null;const c=(null===n||void 0===n||null===(e=n.filter((e=>{var t;return null===e||void 0===e||null===(t=e.assets)||void 0===t?void 0:t.imageId})))||void 0===e?void 0:e.slice(0,5)).map(l.f.getNetworkImage).filter(Boolean);return r.dy`<wui-compatible-network
      @click=${this.onReceiveClick.bind(this)}
      text="Only receive assets on these networks"
      .networkImages=${c}
    ></wui-compatible-network>`}onReceiveClick(){d.P.push("WalletCompatibleNetworks")}onCopyClick(){try{this.address&&(w.j.copyToClopboard(this.address),s.K.showSuccess("Address copied"))}catch{s.K.showError("Failed to copy")}}};x.styles=k,y([(0,o.SB)()],x.prototype,"address",void 0),y([(0,o.SB)()],x.prototype,"profileName",void 0),y([(0,o.SB)()],x.prototype,"network",void 0),x=y([(0,p.Mo)("w3m-wallet-receive-view")],x)}}]);
//# sourceMappingURL=4618.chunk.js.map