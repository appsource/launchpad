"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[3622],{73622:(e,t,i)=>{i.r(t),i.d(t,{W3mAllWalletsView:()=>st,W3mConnectingWcBasicView:()=>Pe,W3mDownloadsView:()=>dt});var r=i(66386),o=i(43756),n=i(7711),l=i(53560),a=i(18395),s=i(23814),c=i(7387),d=(i(78330),i(54417)),u=i(95772),p=i(86392),h=i(42772),w=i(98541),g=i(90125),b=(i(71478),function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l});let m=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=p.A.state.connectors,this.count=a.Q.state.count,this.filteredCount=a.Q.state.filteredWallets.length,this.isFetchingRecommendedWallets=a.Q.state.isFetchingRecommendedWallets,this.unsubscribe.push(p.A.subscribeKey("connectors",(e=>this.connectors=e)),a.Q.subscribeKey("count",(e=>this.count=e)),a.Q.subscribeKey("filteredWallets",(e=>this.filteredCount=e.length)),a.Q.subscribeKey("isFetchingRecommendedWallets",(e=>this.isFetchingRecommendedWallets=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.connectors.find((e=>"walletConnect"===e.id)),{allWallets:t}=l.h.state;if(!e||"HIDE"===t)return null;if("ONLY_MOBILE"===t&&!n.j.isMobile())return null;const i=a.Q.state.featured.length,o=this.count+i,s=o<10?o:10*Math.floor(o/10),c=this.filteredCount>0?this.filteredCount:s;let p=`${c}`;this.filteredCount>0?p=`${this.filteredCount}`:c<o&&(p=`${c}+`);const w=h.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT);return r.dy`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${p}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${(0,d.o)(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${w}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var e;w.X.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),g.P.push("AllWallets",{redirectView:null===(e=g.P.state.data)||void 0===e?void 0:e.redirectView})}};b([(0,o.Cb)()],m.prototype,"tabIdx",void 0),b([(0,o.SB)()],m.prototype,"connectors",void 0),b([(0,o.SB)()],m.prototype,"count",void 0),b([(0,o.SB)()],m.prototype,"filteredCount",void 0),b([(0,o.SB)()],m.prototype,"isFetchingRecommendedWallets",void 0),m=b([(0,c.Mo)("w3m-all-wallets-widget")],m);var f=i(2615),y=i(94091),v=i(16986),x=i(64300),$=i(10817);const C=c.iv`
  :host {
    margin-top: ${e=>{let{spacing:t}=e;return t[1]}};
  }
  wui-separator {
    margin: ${e=>{let{spacing:t}=e;return t[3]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1)
      ${e=>{let{spacing:t}=e;return t[2]}} calc(${e=>{let{spacing:t}=e;return t[3]}} * -1);
    width: calc(100% + ${e=>{let{spacing:t}=e;return t[3]}} * 2);
  }
`;var k=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let R=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.explorerWallets=a.Q.state.explorerWallets,this.connections=h.l.state.connections,this.connectorImages=f.W.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(h.l.subscribeKey("connections",(e=>this.connections=e)),f.W.subscribeKey("connectorImages",(e=>this.connectorImages=e)),a.Q.subscribeKey("explorerFilteredWallets",(e=>{this.explorerWallets=null!==e&&void 0!==e&&e.length?e:a.Q.state.explorerWallets})),a.Q.subscribeKey("explorerWallets",(e=>{var t;null!==(t=this.explorerWallets)&&void 0!==t&&t.length||(this.explorerWallets=e)}))),n.j.isTelegram()&&n.j.isIos()&&(this.loadingTelegram=!h.l.state.wcUri,this.unsubscribe.push(h.l.subscribeKey("wcUri",(e=>this.loadingTelegram=!e))))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return r.dy`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return y.C.connectorList().map(((e,t)=>"connector"===e.kind?this.renderConnector(e,t):this.renderWallet(e,t)))}getConnectorNamespaces(e){return"walletConnect"===e.subtype?[]:"multiChain"===e.subtype?(null===(t=e.connector.connectors)||void 0===t?void 0:t.map((e=>e.chain)))||[]:[e.connector.chain];var t}renderConnector(e,t){var i,o,n,l,a;const s=e.connector,c=v.f.getConnectorImage(s)||this.connectorImages[null!==(i=null===s||void 0===s?void 0:s.imageId)&&void 0!==i?i:""],p=(null!==(o=this.connections.get(s.chain))&&void 0!==o?o:[]).some((e=>$.g.isLowerCaseMatch(e.connectorId,s.id)));let w,g;"walletConnect"===e.subtype?(w="qr code",g="accent"):"injected"===e.subtype||"announced"===e.subtype?(w=p?"connected":"installed",g=p?"info":"success"):(w=void 0,g=void 0);const b=h.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT),m=("walletConnect"===e.subtype||"external"===e.subtype)&&b;return r.dy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.o)(c)}
        .installed=${!0}
        name=${null!==(n=s.name)&&void 0!==n?n:"Unknown"}
        .tagVariant=${g}
        tagLabel=${(0,d.o)(w)}
        data-testid=${`wallet-selector-${s.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${(0,d.o)(this.tabIdx)}
        ?disabled=${m}
        rdnsId=${(0,d.o)((null===(l=s.explorerWallet)||void 0===l?void 0:l.rdns)||void 0)}
        walletRank=${(0,d.o)(null===(a=s.explorerWallet)||void 0===a?void 0:a.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){var t;const i=null===(t=g.P.state.data)||void 0===t?void 0:t.redirectView;return"walletConnect"===e.subtype?(p.A.setActiveConnector(e.connector),void(n.j.isMobile()?g.P.push("AllWallets"):g.P.push("ConnectingWalletConnect",{redirectView:i}))):"multiChain"===e.subtype?(p.A.setActiveConnector(e.connector),void g.P.push("ConnectingMultiChain",{redirectView:i})):"injected"===e.subtype?(p.A.setActiveConnector(e.connector),void g.P.push("ConnectingExternal",{connector:e.connector,redirectView:i,wallet:e.connector.explorerWallet})):"announced"===e.subtype?"walletConnect"===e.connector.id?void(n.j.isMobile()?g.P.push("AllWallets"):g.P.push("ConnectingWalletConnect",{redirectView:i})):void g.P.push("ConnectingExternal",{connector:e.connector,redirectView:i,wallet:e.connector.explorerWallet}):void g.P.push("ConnectingExternal",{connector:e.connector,redirectView:i})}renderWallet(e,t){var i;const o=e.wallet,n=v.f.getWalletImage(o),l=h.l.hasAnyConnection(u.b.CONNECTOR_ID.WALLET_CONNECT),a=this.loadingTelegram,s="recent"===e.subtype?"recent":void 0,c="recent"===e.subtype?"info":void 0;return r.dy`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${(0,d.o)(n)}
        name=${null!==(i=o.name)&&void 0!==i?i:"Unknown"}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${o.id}`}
        tabIdx=${(0,d.o)(this.tabIdx)}
        ?loading=${a}
        ?disabled=${l}
        rdnsId=${(0,d.o)(o.rdns||void 0)}
        walletRank=${(0,d.o)(o.order)}
        tagLabel=${(0,d.o)(s)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){var t;const i=null===(t=g.P.state.data)||void 0===t?void 0:t.redirectView,r=x.R.state.activeChain;if("featured"===e.subtype)return void p.A.selectWalletConnector(e.wallet);if("recent"===e.subtype){if(this.loadingTelegram)return;return void p.A.selectWalletConnector(e.wallet)}if("custom"===e.subtype){if(this.loadingTelegram)return;return void g.P.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:i})}if(this.loadingTelegram)return;const o=r?p.A.getConnector({id:e.wallet.id,namespace:r}):void 0;o?g.P.push("ConnectingExternal",{connector:o,redirectView:i}):g.P.push("ConnectingWalletConnect",{wallet:e.wallet,redirectView:i})}};R.styles=C,k([(0,o.Cb)({type:Number})],R.prototype,"tabIdx",void 0),k([(0,o.SB)()],R.prototype,"explorerWallets",void 0),k([(0,o.SB)()],R.prototype,"connections",void 0),k([(0,o.SB)()],R.prototype,"connectorImages",void 0),k([(0,o.SB)()],R.prototype,"loadingTelegram",void 0),R=k([(0,c.Mo)("w3m-connector-list")],R);var S=i(94565),E=i(71895),P=i(15337),j=i(59609),T=i(73775),O=i(50745),I=i(32603),W=(i(91980),i(26576),i(10109));const L=W.iv`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${e=>{let{spacing:t}=e;return t[1]}} ${e=>{let{spacing:t}=e;return t[2]}};
    column-gap: ${e=>{let{spacing:t}=e;return t[1]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[20]}};
    background-color: transparent;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundTertiary}};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    }
  }
`;var B=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};const z={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},A={lg:"md",md:"sm",sm:"sm"};let _=class extends r.oi{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return r.dy`
      <button data-active=${this.active}>
        ${this.icon?r.dy`<wui-icon size=${A[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${z[this.size]}> ${this.label} </wui-text>
      </button>
    `}};_.styles=[O.ET,O.ZM,L],B([(0,o.Cb)()],_.prototype,"icon",void 0),B([(0,o.Cb)()],_.prototype,"size",void 0),B([(0,o.Cb)()],_.prototype,"label",void 0),B([(0,o.Cb)({type:Boolean})],_.prototype,"active",void 0),_=B([(0,I.M)("wui-tab-item")],_);const D=W.iv`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[32]}};
    padding: ${e=>{let{spacing:t}=e;return t["01"]}};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var M=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let N=class extends r.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map(((e,t)=>{var i;const o=t===this.activeTab;return r.dy`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${null===(i=e.label)||void 0===i?void 0:i.toLowerCase()}"
        ></wui-tab-item>
      `}))}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};N.styles=[O.ET,O.ZM,D],M([(0,o.Cb)({type:Array})],N.prototype,"tabs",void 0),M([(0,o.Cb)()],N.prototype,"onTabChange",void 0),M([(0,o.Cb)()],N.prototype,"size",void 0),M([(0,o.SB)()],N.prototype,"activeTab",void 0),N=M([(0,I.M)("wui-tabs")],N);var q=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let V=class extends r.oi{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=this.generateTabs();return r.dy`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${e} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const e=this.platforms.map((e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"}));return this.platformTabs=e.map((e=>{let{platform:t}=e;return t})),e}onTabChange(e){const t=this.platformTabs[e];var i;t&&(null===(i=this.onSelectPlatfrom)||void 0===i||i.call(this,t))}};q([(0,o.Cb)({type:Array})],V.prototype,"platforms",void 0),q([(0,o.Cb)()],V.prototype,"onSelectPlatfrom",void 0),V=q([(0,c.Mo)("w3m-connecting-header")],V);var U=i(33885);i(74385),i(75692),i(99568),i(61126);const F=W.iv`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Q=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let H=class extends r.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const e=this.radius>50?50:this.radius,t=36-e,i=116+t,o=245+t,n=360+1.75*t;return r.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${n}
        />
      </svg>
    `}};H.styles=[O.ET,F],Q([(0,o.Cb)({type:Number})],H.prototype,"radius",void 0),H=Q([(0,I.M)("wui-loading-thumbnail")],H);i(43549),i(71186),i(19658),i(41837);const K=W.iv`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    padding-left: ${e=>{let{spacing:t}=e;return t[3]}};
    padding-right: ${e=>{let{spacing:t}=e;return t[3]}};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${e=>{let{spacing:t}=e;return t[6]}};
  }

  wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var X=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let G=class extends r.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return r.dy`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};G.styles=[O.ET,O.ZM,K],X([(0,o.Cb)({type:Boolean})],G.prototype,"disabled",void 0),X([(0,o.Cb)()],G.prototype,"label",void 0),X([(0,o.Cb)()],G.prototype,"buttonLabel",void 0),G=X([(0,I.M)("wui-cta-button")],G);const Y=c.iv`
  :host {
    display: block;
    padding: 0 ${e=>{let{spacing:t}=e;return t[5]}} ${e=>{let{spacing:t}=e;return t[5]}};
  }
`;var J=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Z=class extends r.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:e,app_store:t,play_store:i,chrome_store:o,homepage:l}=this.wallet,a=n.j.isMobile(),s=n.j.isIos(),d=n.j.isAndroid(),u=[t,i,l,o].filter(Boolean).length>1,p=c.Hg.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return u&&!a?r.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>g.P.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&l?r.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&s?r.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:i&&d?r.dy`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.app_store&&n.j.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.play_store&&n.j.openHref(this.wallet.play_store,"_blank")}onHomePage(){var e;null!==(e=this.wallet)&&void 0!==e&&e.homepage&&n.j.openHref(this.wallet.homepage,"_blank")}};Z.styles=[Y],J([(0,o.Cb)({type:Object})],Z.prototype,"wallet",void 0),Z=J([(0,c.Mo)("w3m-mobile-download-links")],Z);const ee=c.iv`
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

  wui-wallet-image {
    width: 56px;
    height: 56px;
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
    transition-property: opacity, transform;
    transition-duration: ${e=>{let{durations:t}=e;return t.lg}};
    transition-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
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

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var te=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};class ie extends r.oi{constructor(){var e,t,i,r,o,l,a,s;(super(),this.wallet=null===(e=g.P.state.data)||void 0===e?void 0:e.wallet,this.connector=null===(t=g.P.state.data)||void 0===t?void 0:t.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=null!==(i=v.f.getConnectorImage(this.connector))&&void 0!==i?i:v.f.getWalletImage(this.wallet),this.name=null!==(r=null!==(o=null===(l=this.wallet)||void 0===l?void 0:l.name)&&void 0!==o?o:null===(a=this.connector)||void 0===a?void 0:a.name)&&void 0!==r?r:"Wallet",this.isRetrying=!1,this.uri=h.l.state.wcUri,this.error=h.l.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(h.l.subscribeKey("wcUri",(e=>{var t;(this.uri=e,this.isRetrying&&this.onRetry)&&(this.isRetrying=!1,null===(t=this.onConnect)||void 0===t||t.call(this))})),h.l.subscribeKey("wcError",(e=>this.error=e))),(n.j.isTelegram()||n.j.isSafari())&&n.j.isIos()&&h.l.state.wcUri)&&(null===(s=this.onConnect)||void 0===s||s.call(this))}firstUpdated(){var e;null===(e=this.onAutoConnect)||void 0===e||e.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),h.l.setWcError(!1),clearTimeout(this.timeout)}render(){var e;null===(e=this.onRender)||void 0===e||e.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),r.dy`
      <wui-flex
        data-error=${(0,d.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,d.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?r.dy`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?r.dy`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){var e;this.showRetry=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-button");null===t||void 0===t||t.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var e,t;(h.l.setWcError(!1),this.onRetry)?(this.isRetrying=!0,null===(e=this.onRetry)||void 0===e||e.call(this)):null===(t=this.onConnect)||void 0===t||t.call(this)}loaderTemplate(){const e=U.u.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return r.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(n.j.copyToClopboard(this.uri),E.K.showSuccess("Link copied"))}catch{E.K.showError("Failed to copy")}}}ie.styles=ee,te([(0,o.SB)()],ie.prototype,"isRetrying",void 0),te([(0,o.SB)()],ie.prototype,"uri",void 0),te([(0,o.SB)()],ie.prototype,"error",void 0),te([(0,o.SB)()],ie.prototype,"ready",void 0),te([(0,o.SB)()],ie.prototype,"showRetry",void 0),te([(0,o.SB)()],ie.prototype,"label",void 0),te([(0,o.SB)()],ie.prototype,"secondaryBtnLabel",void 0),te([(0,o.SB)()],ie.prototype,"secondaryLabel",void 0),te([(0,o.SB)()],ie.prototype,"isLoading",void 0),te([(0,o.Cb)({type:Boolean})],ie.prototype,"isMobile",void 0),te([(0,o.Cb)()],ie.prototype,"onRetry",void 0);var re=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let oe=class extends ie{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:g.P.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:e}=p.A.state,t=e.find((e=>{var t,i,r;return"ANNOUNCED"===e.type&&(null===(t=e.info)||void 0===t?void 0:t.rdns)===(null===(i=this.wallet)||void 0===i?void 0:i.rdns)||"INJECTED"===e.type||e.name===(null===(r=this.wallet)||void 0===r?void 0:r.name)}));if(!t)throw new Error("w3m-connecting-wc-browser: No connector found");await h.l.connectExternal(t,t.chain),P.I.close()}catch(t){var e;if(t instanceof j.g&&t.originalName===S.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST)w.X.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}});else w.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(e=null===t||void 0===t?void 0:t.message)&&void 0!==e?e:"Unknown"}});this.error=!0}}};oe=re([(0,c.Mo)("w3m-connecting-wc-browser")],oe);var ne=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let le=class extends ie{constructor(){var e;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:g.P.state.view}})}onRenderProxy(){var e;!this.ready&&this.uri&&(this.ready=!0,null===(e=this.onConnect)||void 0===e||e.call(this))}onConnectProxy(){var e;if(null!==(e=this.wallet)&&void 0!==e&&e.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.j.formatNativeUrl(e,this.uri);h.l.setWcLinking({name:t,href:r}),h.l.setRecentWallet(this.wallet),n.j.openHref(i,"_blank")}catch{this.error=!0}}};le=ne([(0,c.Mo)("w3m-connecting-wc-desktop")],le);var ae=i(86951),se=i(71203),ce=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let de=class extends ie{constructor(){var e;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=l.h.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{ae.f.onConnectMobile(this.wallet)},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=se.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(h.l.subscribeKey("wcUri",(()=>{this.onHandleURI()}))),w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:this.wallet.order,view:g.P.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var e;(this.isLoading=!this.uri,!this.ready&&this.uri)&&(this.ready=!0,null===(e=this.onConnect)||void 0===e||e.call(this))}onTryAgain(){var e;h.l.setWcError(!1),null===(e=this.onConnect)||void 0===e||e.call(this)}};ce([(0,o.SB)()],de.prototype,"redirectDeeplink",void 0),ce([(0,o.SB)()],de.prototype,"redirectUniversalLink",void 0),ce([(0,o.SB)()],de.prototype,"target",void 0),ce([(0,o.SB)()],de.prototype,"preferUniversalLinks",void 0),ce([(0,o.SB)()],de.prototype,"isLoading",void 0),de=ce([(0,c.Mo)("w3m-connecting-wc-mobile")],de);i(72738);var ue=i(20741);function pe(e,t,i){if(e===t)return!1;return(e-t<0?t-e:e-t)<=i+.1}const he={generate(e){let{uri:t,size:i,logoSize:o,padding:n=8,dotColor:l="var(--apkt-colors-black)"}=e;const a=10,s=[],c=function(e,t){const i=Array.prototype.slice.call(ue.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(i.length);return i.reduce(((e,t,i)=>(i%r===0?e.push([t]):e[e.length-1].push(t))&&e),[])}(t,"Q"),d=(i-2*n)/c.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach((e=>{let{x:t,y:i}=e;const o=(c.length-7)*d*t+n,p=(c.length-7)*d*i+n,h=.45;for(let n=0;n<u.length;n+=1){const e=d*(7-2*n);s.push(r.YP`
            <rect
              fill=${2===n?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${0===n?e-a:e}
              rx= ${0===n?(e-a)*h:e*h}
              ry= ${0===n?(e-a)*h:e*h}
              stroke=${l}
              stroke-width=${0===n?a:0}
              height=${0===n?e-a:e}
              x= ${0===n?p+d*n+5:p+d*n}
              y= ${0===n?o+d*n+5:o+d*n}
            />
          `)}}));const p=Math.floor((o+25)/d),h=c.length/2-p/2,w=c.length/2+p/2-1,g=[];c.forEach(((e,t)=>{e.forEach(((e,i)=>{if(c[t][i]&&!(t<7&&i<7||t>c.length-8&&i<7||t<7&&i>c.length-8)&&!(t>h&&t<w&&i>h&&i<w)){const e=t*d+d/2+n,r=i*d+d/2+n;g.push([e,r])}}))}));const b={};return g.forEach((e=>{let[t,i]=e;var r;b[t]?null===(r=b[t])||void 0===r||r.push(i):b[t]=[i]})),Object.entries(b).map((e=>{let[t,i]=e;const r=i.filter((e=>i.every((t=>!pe(e,t,d)))));return[Number(t),r]})).forEach((e=>{let[t,i]=e;i.forEach((e=>{s.push(r.YP`<circle cx=${t} cy=${e} fill=${l} r=${d/2.5} />`)}))})),Object.entries(b).filter((e=>{let[t,i]=e;return i.length>1})).map((e=>{let[t,i]=e;const r=i.filter((e=>i.some((t=>pe(e,t,d)))));return[Number(t),r]})).map((e=>{let[t,i]=e;i.sort(((e,t)=>e<t?-1:1));const r=[];for(const o of i){const e=r.find((e=>e.some((e=>pe(o,e,d)))));e?e.push(o):r.push([o])}return[t,r.map((e=>[e[0],e[e.length-1]]))]})).forEach((e=>{let[t,i]=e;i.forEach((e=>{let[i,o]=e;s.push(r.YP`
              <line
                x1=${t}
                x2=${t}
                y1=${i}
                y2=${o}
                stroke=${l}
                stroke-width=${d/1.25}
                stroke-linecap="round"
              />
            `)}))})),s}},we=W.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${e=>{let{colors:t}=e;return t.white}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  :host {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    box-shadow: inset 0 0 0 4px ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[6]}};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var ge=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let be=class extends r.oi{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),r.dy`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return r.YP`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${he.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){var e;return this.imageSrc?r.dy`<wui-image src=${this.imageSrc} alt=${null!==(e=this.alt)&&void 0!==e?e:"logo"}></wui-image>`:this.farcaster?r.dy`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:r.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};be.styles=[O.ET,we],ge([(0,o.Cb)()],be.prototype,"uri",void 0),ge([(0,o.Cb)({type:Number})],be.prototype,"size",void 0),ge([(0,o.Cb)()],be.prototype,"theme",void 0),ge([(0,o.Cb)()],be.prototype,"imageSrc",void 0),ge([(0,o.Cb)()],be.prototype,"alt",void 0),ge([(0,o.Cb)({type:Boolean})],be.prototype,"arenaClear",void 0),ge([(0,o.Cb)({type:Boolean})],be.prototype,"farcaster",void 0),be=ge([(0,I.M)("wui-qr-code")],be);i(77749),i(46597);const me=c.iv`
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

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var fe=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let ye=class extends ie{constructor(){super(),this.basic=!1}firstUpdated(){var e,t,i,r;this.basic||w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:null!==(e=null===(t=this.wallet)||void 0===t?void 0:t.name)&&void 0!==e?e:"WalletConnect",platform:"qrcode",displayIndex:null===(i=this.wallet)||void 0===i?void 0:i.display_index,walletRank:null===(r=this.wallet)||void 0===r?void 0:r.order,view:g.P.state.view}})}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this.unsubscribe)||void 0===e||e.forEach((e=>e()))}render(){return this.onRenderProxy(),r.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){var e;if(!this.uri||!this.ready)return null;const t=this.wallet?this.wallet.name:void 0;h.l.setWcLinking(void 0),h.l.setRecentWallet(this.wallet);const i=null!==(e=U.u.state.themeVariables["--apkt-qr-color"])&&void 0!==e?e:U.u.state.themeVariables["--w3m-qr-color"];return r.dy` <wui-qr-code
      theme=${U.u.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,d.o)(v.f.getWalletImage(this.wallet))}
      color=${(0,d.o)(i)}
      alt=${(0,d.o)(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return r.dy`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};ye.styles=me,fe([(0,o.Cb)({type:Boolean})],ye.prototype,"basic",void 0),ye=fe([(0,c.Mo)("w3m-connecting-wc-qrcode")],ye);var ve=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let xe=class extends r.oi{constructor(){var e,t,i;if(super(),this.wallet=null===(e=g.P.state.data)||void 0===e?void 0:e.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:null===(t=this.wallet)||void 0===t?void 0:t.display_index,walletRank:null===(i=this.wallet)||void 0===i?void 0:i.order,view:g.P.state.view}})}render(){return r.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,d.o)(v.f.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};xe=ve([(0,c.Mo)("w3m-connecting-wc-unsupported")],xe);var $e=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Ce=class extends ie{constructor(){var e,t;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=se.bq.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(h.l.subscribeKey("wcUri",(()=>{this.updateLoadingState()}))),w.X.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:null===(e=this.wallet)||void 0===e?void 0:e.display_index,walletRank:null===(t=this.wallet)||void 0===t?void 0:t.order,view:g.P.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var e;if(null!==(e=this.wallet)&&void 0!==e&&e.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:e,name:t}=this.wallet,{redirect:i,href:r}=n.j.formatUniversalUrl(e,this.uri);h.l.setWcLinking({name:t,href:r}),h.l.setRecentWallet(this.wallet),n.j.openHref(i,"_blank")}catch{this.error=!0}}};$e([(0,o.SB)()],Ce.prototype,"isLoading",void 0),Ce=$e([(0,c.Mo)("w3m-connecting-wc-web")],Ce);const ke=c.iv`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var Re=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Se=class extends r.oi{constructor(){var e;super(),this.wallet=null===(e=g.P.state.data)||void 0===e?void 0:e.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=Boolean(l.h.state.siwx),this.remoteFeatures=l.h.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(l.h.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return l.h.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),r.dy`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var e;return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding&&this.displayBranding?r.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}async initializeConnection(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if("browser"!==this.platform&&(!l.h.state.manualWCControl||e))try{var t;const{wcPairingExpiry:r,status:o}=h.l.state,{redirectView:a}=null!==(t=g.P.state.data)&&void 0!==t?t:{};if(e||l.h.state.enableEmbedded||n.j.isPairingExpired(r)||"connecting"===o){var i;const e=h.l.getConnections(x.R.state.activeChain),t=null===(i=this.remoteFeatures)||void 0===i?void 0:i.multiWallet,r=e.length>0;await h.l.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(r&&t?(g.P.replace("ProfileWallets"),E.K.showSuccess("New Wallet Added")):a?g.P.replace(a):P.I.close())}}catch(s){var r,o;if(s instanceof Error&&s.message.includes("An error occurred when attempting to switch chain")&&!l.h.state.enableNetworkSwitch)if(x.R.state.activeChain)return x.R.setActiveCaipNetwork(T.f.getUnsupportedNetwork(`${x.R.state.activeChain}:${null===(o=x.R.state.activeCaipNetwork)||void 0===o?void 0:o.id}`)),void x.R.showUnsupportedChainUI();var a;if(s instanceof j.g&&s.originalName===S.jD.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST)w.X.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:s.message}});else w.X.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:null!==(a=null===s||void 0===s?void 0:s.message)&&void 0!==a?a:"Unknown"}});h.l.setWcError(!0),E.K.showError(null!==(r=s.message)&&void 0!==r?r:"Connection error"),h.l.resetWcConnection(),g.P.goBack()}}determinePlatforms(){if(!this.wallet)return this.platforms.push("qrcode"),void(this.platform="qrcode");if(this.platform)return;const{mobile_link:e,desktop_link:t,webapp_link:i,injected:r,rdns:o}=this.wallet,a=null===r||void 0===r?void 0:r.map((e=>{let{injected_id:t}=e;return t})).filter(Boolean),s=[...o?[o]:null!==a&&void 0!==a?a:[]],c=!l.h.state.isUniversalProvider&&s.length,d=e,u=i,p=h.l.checkInstalled(s),w=c&&p,g=t&&!n.j.isMobile();w&&!x.R.state.noAdapters&&this.platforms.push("browser"),d&&this.platforms.push(n.j.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),g&&this.platforms.push("desktop"),w||!c||x.R.state.noAdapters||this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return r.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return r.dy`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return r.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return r.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return r.dy`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return r.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?r.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){var t;const i=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Se.styles=ke,Re([(0,o.SB)()],Se.prototype,"platform",void 0),Re([(0,o.SB)()],Se.prototype,"platforms",void 0),Re([(0,o.SB)()],Se.prototype,"isSiwxEnabled",void 0),Re([(0,o.SB)()],Se.prototype,"remoteFeatures",void 0),Re([(0,o.Cb)({type:Boolean})],Se.prototype,"displayBranding",void 0),Re([(0,o.Cb)({type:Boolean})],Se.prototype,"basic",void 0),Se=Re([(0,c.Mo)("w3m-connecting-wc-view")],Se);var Ee=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Pe=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.isMobile=n.j.isMobile(),this.remoteFeatures=l.h.state.remoteFeatures,this.unsubscribe.push(l.h.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){if(this.isMobile){const{featured:e,recommended:t}=a.Q.state,{customWallets:i}=l.h.state,o=s.M.getRecentWallets(),n=e.length||t.length||(null===i||void 0===i?void 0:i.length)||o.length;return r.dy`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?r.dy`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return r.dy`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var e;return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding?r.dy` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Ee([(0,o.SB)()],Pe.prototype,"isMobile",void 0),Ee([(0,o.SB)()],Pe.prototype,"remoteFeatures",void 0),Pe=Ee([(0,c.Mo)("w3m-connecting-wc-basic-view")],Pe);var je=i(33862);const Te=W.iv`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      width ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      height ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${e=>{let{colors:t}=e;return t.neutrals300}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      border ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      box-shadow ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      width ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      height ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      transform ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}},
      opacity ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${e=>{let{colors:t}=e;return t.white}};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.textTertiary}};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${e=>{let{tokens:t}=e;return t.core.iconAccentPrimary}};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals400}};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${e=>{let{colors:t}=e;return t.accent080}};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals700}};
  }

  input:checked:disabled + span {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals700}};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${e=>{let{colors:t}=e;return t.neutrals400}};
  }

  input:checked:disabled + span::before {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.textTertiary}};
  }
`;var Oe=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Ie=class extends r.oi{constructor(){super(...arguments),this.inputElementRef=(0,je.V)(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return r.dy`
      <label data-size=${this.size}>
        <input
          ${(0,je.i)(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var e;this.dispatchEvent(new CustomEvent("switchChange",{detail:null===(e=this.inputElementRef.value)||void 0===e?void 0:e.checked,bubbles:!0,composed:!0}))}};Ie.styles=[O.ET,O.ZM,Te],Oe([(0,o.Cb)({type:Boolean})],Ie.prototype,"checked",void 0),Oe([(0,o.Cb)({type:Boolean})],Ie.prototype,"disabled",void 0),Oe([(0,o.Cb)()],Ie.prototype,"size",void 0),Ie=Oe([(0,I.M)("wui-toggle")],Ie);const We=W.iv`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[2]}} ${e=>{let{spacing:t}=e;return t[3]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    box-shadow: inset 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var Le=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Be=class extends r.oi{constructor(){super(...arguments),this.checked=!1}render(){return r.dy`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};Be.styles=[O.ET,O.ZM,We],Le([(0,o.Cb)({type:Boolean})],Be.prototype,"checked",void 0),Be=Le([(0,I.M)("wui-certified-switch")],Be);const ze=W.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${e=>{let{spacing:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    color: inherit;
    background: transparent;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    caret-color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[10]}};
    font-size: ${e=>{let{textSize:t}=e;return t.large}};
    line-height: ${e=>{let{typography:t}=e;return t["lg-regular"].lineHeight}};
    letter-spacing: ${e=>{let{typography:t}=e;return t["lg-regular"].letterSpacing}};
    font-weight: ${e=>{let{fontWeight:t}=e;return t.regular}};
    font-family: ${e=>{let{fontFamily:t}=e;return t.regular}};
  }

  input[data-size='lg'] {
    padding: ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[3]}}
      ${e=>{let{spacing:t}=e;return t[4]}} ${e=>{let{spacing:t}=e;return t[10]}};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  input::placeholder {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  input:focus:enabled {
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderSecondary}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    -webkit-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    -moz-box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
    box-shadow: 0px 0px 0px 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent040}};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[3]}};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
    color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${e=>{let{spacing:t}=e;return t[12]}};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var Ae=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let _e=class extends r.oi{constructor(){super(...arguments),this.inputElementRef=(0,je.V)(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return r.dy` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${(0,je.i)(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${(0,d.o)(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?r.dy`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var e;return this.onSubmit?r.dy`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${null===(e=this.onSubmit)||void 0===e?void 0:e.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?r.dy`<wui-icon name="spinner" size="md"></wui-icon>`:r.dy`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?r.dy`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?r.dy`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var e;this.dispatchEvent(new CustomEvent("inputChange",{detail:null===(e=this.inputElementRef.value)||void 0===e?void 0:e.value,bubbles:!0,composed:!0}))}};_e.styles=[O.ET,O.ZM,ze],Ae([(0,o.Cb)()],_e.prototype,"icon",void 0),Ae([(0,o.Cb)({type:Boolean})],_e.prototype,"disabled",void 0),Ae([(0,o.Cb)({type:Boolean})],_e.prototype,"loading",void 0),Ae([(0,o.Cb)()],_e.prototype,"placeholder",void 0),Ae([(0,o.Cb)()],_e.prototype,"type",void 0),Ae([(0,o.Cb)()],_e.prototype,"value",void 0),Ae([(0,o.Cb)()],_e.prototype,"errorText",void 0),Ae([(0,o.Cb)()],_e.prototype,"warningText",void 0),Ae([(0,o.Cb)()],_e.prototype,"onSubmit",void 0),Ae([(0,o.Cb)()],_e.prototype,"size",void 0),Ae([(0,o.Cb)({attribute:!1})],_e.prototype,"onKeyDown",void 0),_e=Ae([(0,I.M)("wui-input-text")],_e);const De=W.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${e=>{let{spacing:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.iconDefault}};
    cursor: pointer;
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    background-color: transparent;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }
`;var Me=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Ne=class extends r.oi{constructor(){super(...arguments),this.inputComponentRef=(0,je.V)(),this.inputValue=""}render(){return r.dy`
      <wui-input-text
        ${(0,je.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?r.dy`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||""}clearValue(){const e=this.inputComponentRef.value,t=null===e||void 0===e?void 0:e.inputElementRef.value;t&&(t.value="",this.inputValue="",t.focus(),t.dispatchEvent(new Event("input")))}};Ne.styles=[O.ET,De],Me([(0,o.Cb)()],Ne.prototype,"inputValue",void 0),Ne=Me([(0,I.M)("wui-search-bar")],Ne);var qe=i(27123),Ve=i(38127);i(33710);const Ue=W.iv`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var Fe=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Qe=class extends r.oi{constructor(){super(...arguments),this.type="wallet"}render(){return r.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?r.dy` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Ve.W}`:r.dy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};Qe.styles=[O.ET,O.ZM,Ue],Fe([(0,o.Cb)()],Qe.prototype,"type",void 0),Qe=Fe([(0,I.M)("wui-card-select-loader")],Qe);var He=i(56409);const Ke=r.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Xe=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Ge=class extends r.oi{render(){return this.style.cssText=`\n      grid-template-rows: ${this.gridTemplateRows};\n      grid-template-columns: ${this.gridTemplateColumns};\n      justify-items: ${this.justifyItems};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      align-content: ${this.alignContent};\n      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};\n      padding-top: ${this.padding&&He.H.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&He.H.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&He.H.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&He.H.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&He.H.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&He.H.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&He.H.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&He.H.getSpacingStyles(this.margin,3)};\n    `,r.dy`<slot></slot>`}};Ge.styles=[O.ET,Ke],Xe([(0,o.Cb)()],Ge.prototype,"gridTemplateRows",void 0),Xe([(0,o.Cb)()],Ge.prototype,"gridTemplateColumns",void 0),Xe([(0,o.Cb)()],Ge.prototype,"justifyItems",void 0),Xe([(0,o.Cb)()],Ge.prototype,"alignItems",void 0),Xe([(0,o.Cb)()],Ge.prototype,"justifyContent",void 0),Xe([(0,o.Cb)()],Ge.prototype,"alignContent",void 0),Xe([(0,o.Cb)()],Ge.prototype,"columnGap",void 0),Xe([(0,o.Cb)()],Ge.prototype,"rowGap",void 0),Xe([(0,o.Cb)()],Ge.prototype,"gap",void 0),Xe([(0,o.Cb)()],Ge.prototype,"padding",void 0),Xe([(0,o.Cb)()],Ge.prototype,"margin",void 0),Ge=Xe([(0,I.M)("wui-grid")],Ge);const Ye=c.iv`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${e=>{let{spacing:t}=e;return t[2]}};
    padding: ${e=>{let{spacing:t}=e;return t[3]}} ${e=>{let{spacing:t}=e;return t[0]}};
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[4]}}, 20px);
    transition:
      color ${e=>{let{durations:t}=e;return t.lg}} ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      background-color ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}},
      border-radius ${e=>{let{durations:t}=e;return t.lg}}
        ${e=>{let{easings:t}=e;return t["ease-out-power-1"]}};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textPrimary}};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }

  [data-selected='true'] {
    background-color: ${e=>{let{colors:t}=e;return t.accent020}};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${e=>{let{colors:t}=e;return t.accent010}};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${e=>{let{colors:t}=e;return t.accent010}};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var Je=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let Ze=class extends r.oi{constructor(){super(),this.observer=new IntersectionObserver((()=>{})),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1}))}),{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var e,t;const i="certified"===(null===(e=this.wallet)||void 0===e?void 0:e.badge_type);return r.dy`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${(0,d.o)(i?"certified":void 0)}
            >${null===(t=this.wallet)||void 0===t?void 0:t.name}</wui-text
          >
          ${i?r.dy`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var e,t,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():r.dy`
      <wui-wallet-image
        size="lg"
        imageSrc=${(0,d.o)(this.imageSrc)}
        name=${(0,d.o)(null===(e=this.wallet)||void 0===e?void 0:e.name)}
        .installed=${null!==(t=null===(i=this.wallet)||void 0===i?void 0:i.installed)&&void 0!==t&&t}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return r.dy`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=v.f.getWalletImage(this.wallet),this.imageSrc||(this.imageLoading=!0,this.imageSrc=await v.f.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){this.wallet&&!this.isImpressed&&(this.isImpressed=!0,w.X.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:g.P.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Ze.styles=Ye,Je([(0,o.SB)()],Ze.prototype,"visible",void 0),Je([(0,o.SB)()],Ze.prototype,"imageSrc",void 0),Je([(0,o.SB)()],Ze.prototype,"imageLoading",void 0),Je([(0,o.SB)()],Ze.prototype,"isImpressed",void 0),Je([(0,o.Cb)()],Ze.prototype,"explorerId",void 0),Je([(0,o.Cb)()],Ze.prototype,"walletQuery",void 0),Je([(0,o.Cb)()],Ze.prototype,"certified",void 0),Je([(0,o.Cb)()],Ze.prototype,"displayIndex",void 0),Je([(0,o.Cb)({type:Object})],Ze.prototype,"wallet",void 0),Ze=Je([(0,c.Mo)("w3m-all-wallets-list-item")],Ze);const et=c.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-inout-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${e=>{let{spacing:t}=e;return t[4]}};
    padding-bottom: ${e=>{let{spacing:t}=e;return t[4]}};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var tt=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};const it="local-paginator";let rt=class extends r.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!a.Q.state.wallets.length,this.wallets=a.Q.state.wallets,this.mobileFullScreen=l.h.state.enableMobileFullScreen,this.unsubscribe.push(a.Q.subscribeKey("wallets",(e=>this.wallets=e)))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var e;this.unsubscribe.forEach((e=>e())),null===(e=this.paginationObserver)||void 0===e||e.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),r.dy`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var e;this.loading=!0;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-grid");t&&(await a.Q.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map((()=>r.dy`
        <wui-card-select-loader type="wallet" id=${(0,d.o)(t)}></wui-card-select-loader>
      `))}walletsTemplate(){return qe.J.getWalletConnectWallets(this.wallets).map(((e,t)=>r.dy`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${"certified"===this.badge}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `))}paginationLoaderTemplate(){const{wallets:e,recommended:t,featured:i,count:r,mobileFilteredOutWalletsLength:o}=a.Q.state,n=window.innerWidth<352?3:4,l=e.length+t.length;let s=Math.ceil(l/n)*n-l+n;return s-=e.length?i.length%n:0,0===r&&i.length>0?null:0===r||[...i,...e,...t].length<r-(null!==o&&void 0!==o?o:0)?this.shimmerTemplate(s,it):null}createPaginationObserver(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`#${it}`);t&&(this.paginationObserver=new IntersectionObserver((e=>{let[t]=e;if(null!==t&&void 0!==t&&t.isIntersecting&&!this.loading){const{page:e,count:t,wallets:i}=a.Q.state;i.length<t&&a.Q.fetchWalletsByPage({page:e+1})}})),this.paginationObserver.observe(t))}onConnectWallet(e){p.A.selectWalletConnector(e)}};rt.styles=et,tt([(0,o.SB)()],rt.prototype,"loading",void 0),tt([(0,o.SB)()],rt.prototype,"wallets",void 0),tt([(0,o.SB)()],rt.prototype,"badge",void 0),tt([(0,o.SB)()],rt.prototype,"mobileFullScreen",void 0),rt=tt([(0,c.Mo)("w3m-all-wallets-list")],rt);i(90285);const ot=r.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var nt=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let lt=class extends r.oi{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=l.h.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?r.dy`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query.trim()===this.prevQuery.trim()&&this.badge===this.prevBadge||(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await a.Q.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:e}=a.Q.state,t=qe.J.markWalletsAsInstalled(e),i=qe.J.filterWalletsByWcSupport(t);return i.length?r.dy`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${i.map(((e,t)=>r.dy`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${"certified"===this.badge}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `))}
      </wui-grid>
    `:r.dy`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){p.A.selectWalletConnector(e)}};lt.styles=ot,nt([(0,o.SB)()],lt.prototype,"loading",void 0),nt([(0,o.SB)()],lt.prototype,"mobileFullScreen",void 0),nt([(0,o.Cb)()],lt.prototype,"query",void 0),nt([(0,o.Cb)()],lt.prototype,"badge",void 0),lt=nt([(0,c.Mo)("w3m-all-wallets-search")],lt);var at=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let st=class extends r.oi{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=n.j.debounce((e=>{this.search=e}))}render(){const e=this.search.length>=2;return r.dy`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${"certified"===this.badge}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?r.dy`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:r.dy`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge="certified",E.K.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return n.j.isMobile()?r.dy`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){g.P.push("ConnectingWalletConnect")}};at([(0,o.SB)()],st.prototype,"search",void 0),at([(0,o.SB)()],st.prototype,"badge",void 0),st=at([(0,c.Mo)("w3m-all-wallets-view")],st);i(65723);var ct=function(e,t,i,r){var o,n=arguments.length,l=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,i,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(l=(n<3?o(l):n>3?o(t,i,l):o(t,i))||l);return n>3&&l&&Object.defineProperty(t,i,l),l};let dt=class extends r.oi{constructor(){var e;super(...arguments),this.wallet=null===(e=g.P.state.data)||void 0===e?void 0:e.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return r.dy`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.chrome_store?r.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.app_store?r.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.play_store?r.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var e;return null!==(e=this.wallet)&&void 0!==e&&e.homepage?r.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(w.X.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),n.j.openHref(e.href,"_blank"))}onChromeStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var e;null!==(e=this.wallet)&&void 0!==e&&e.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var e;null!==(e=this.wallet)&&void 0!==e&&e.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};dt=ct([(0,c.Mo)("w3m-downloads-view")],dt)}}]);
//# sourceMappingURL=3622.chunk.js.map