"use strict";(self.webpackChunkidofactory=self.webpackChunkidofactory||[]).push([[4326],{72512:(e,t,n)=>{n.d(t,{EN:()=>g,F8:()=>a,H8:()=>h,Hr:()=>v,MR:()=>u,Pm:()=>m,Wo:()=>p,X$:()=>l,Yi:()=>o,_A:()=>d,du:()=>s,k3:()=>r,nZ:()=>c});const a=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"},{inputs:[{name:"addr",type:"address"}],name:"getEthBalance",outputs:[{name:"balance",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getCurrentBlockTimestamp",outputs:[{internalType:"uint256",name:"timestamp",type:"uint256"}],stateMutability:"view",type:"function"}],o=[{name:"query",type:"function",stateMutability:"view",inputs:[{type:"tuple[]",name:"queries",components:[{type:"address",name:"sender"},{type:"string[]",name:"urls"},{type:"bytes",name:"data"}]}],outputs:[{type:"bool[]",name:"failures"},{type:"bytes[]",name:"responses"}]},{name:"HttpError",type:"error",inputs:[{type:"uint16",name:"status"},{type:"string",name:"message"}]}],i=[{inputs:[{name:"dns",type:"bytes"}],name:"DNSDecodingFailed",type:"error"},{inputs:[{name:"ens",type:"string"}],name:"DNSEncodingFailed",type:"error"},{inputs:[],name:"EmptyAddress",type:"error"},{inputs:[{name:"status",type:"uint16"},{name:"message",type:"string"}],name:"HttpError",type:"error"},{inputs:[],name:"InvalidBatchGatewayResponse",type:"error"},{inputs:[{name:"errorData",type:"bytes"}],name:"ResolverError",type:"error"},{inputs:[{name:"name",type:"bytes"},{name:"resolver",type:"address"}],name:"ResolverNotContract",type:"error"},{inputs:[{name:"name",type:"bytes"}],name:"ResolverNotFound",type:"error"},{inputs:[{name:"primary",type:"string"},{name:"primaryAddress",type:"bytes"}],name:"ReverseAddressMismatch",type:"error"},{inputs:[{internalType:"bytes4",name:"selector",type:"bytes4"}],name:"UnsupportedResolverProfile",type:"error"}],r=[...i,{name:"resolveWithGateways",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"},{name:"gateways",type:"string[]"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],s=[...i,{name:"reverseWithGateways",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"},{type:"uint256",name:"coinType"},{type:"string[]",name:"gateways"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolver"},{type:"address",name:"reverseResolver"}]}],c=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],d=[{name:"isValidSignature",type:"function",stateMutability:"view",inputs:[{name:"hash",type:"bytes32"},{name:"signature",type:"bytes"}],outputs:[{name:"",type:"bytes4"}]}],u=[{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{name:"_signer",type:"address"},{name:"_hash",type:"bytes32"},{name:"_signature",type:"bytes"}],outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function",name:"isValidSig"}],p=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],m=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{type:"bool"}]}],h=[{inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"uint256",name:"balance",type:"uint256"},{internalType:"uint256",name:"needed",type:"uint256"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ERC1155InsufficientBalance",type:"error"},{inputs:[{internalType:"address",name:"approver",type:"address"}],name:"ERC1155InvalidApprover",type:"error"},{inputs:[{internalType:"uint256",name:"idsLength",type:"uint256"},{internalType:"uint256",name:"valuesLength",type:"uint256"}],name:"ERC1155InvalidArrayLength",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"}],name:"ERC1155InvalidOperator",type:"error"},{inputs:[{internalType:"address",name:"receiver",type:"address"}],name:"ERC1155InvalidReceiver",type:"error"},{inputs:[{internalType:"address",name:"sender",type:"address"}],name:"ERC1155InvalidSender",type:"error"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"address",name:"owner",type:"address"}],name:"ERC1155MissingApprovalForAll",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"values",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"value",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],v=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}]},{type:"event",name:"ApprovalForAll",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"operator",type:"address"},{indexed:!1,name:"approved",type:"bool"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!0,name:"tokenId",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"payable",inputs:[{name:"spender",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{type:"uint256"}]},{type:"function",name:"getApproved",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{type:"address"}]},{type:"function",name:"isApprovedForAll",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"operator",type:"address"}],outputs:[{type:"bool"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"ownerOf",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"owner",type:"address"}]},{type:"function",name:"safeTransferFrom",stateMutability:"payable",inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]},{type:"function",name:"safeTransferFrom",stateMutability:"nonpayable",inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"id",type:"uint256"},{name:"data",type:"bytes"}],outputs:[]},{type:"function",name:"setApprovalForAll",stateMutability:"nonpayable",inputs:[{name:"operator",type:"address"},{name:"approved",type:"bool"}],outputs:[]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{type:"string"}]},{type:"function",name:"tokenByIndex",stateMutability:"view",inputs:[{name:"index",type:"uint256"}],outputs:[{type:"uint256"}]},{type:"function",name:"tokenByIndex",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"index",type:"uint256"}],outputs:[{name:"tokenId",type:"uint256"}]},{type:"function",name:"tokenURI",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{type:"uint256"}]},{type:"function",name:"transferFrom",stateMutability:"payable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"tokenId",type:"uint256"}],outputs:[]}],g=[{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"sender",type:"address"},{indexed:!0,name:"receiver",type:"address"},{indexed:!1,name:"assets",type:"uint256"},{indexed:!1,name:"shares",type:"uint256"}],name:"Deposit",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"sender",type:"address"},{indexed:!0,name:"receiver",type:"address"},{indexed:!0,name:"owner",type:"address"},{indexed:!1,name:"assets",type:"uint256"},{indexed:!1,name:"shares",type:"uint256"}],name:"Withdraw",type:"event"},{inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],name:"approve",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"asset",outputs:[{name:"assetTokenAddress",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{name:"account",type:"address"}],name:"balanceOf",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"convertToAssets",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"convertToShares",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"},{name:"receiver",type:"address"}],name:"deposit",outputs:[{name:"shares",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"caller",type:"address"}],name:"maxDeposit",outputs:[{name:"maxAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"caller",type:"address"}],name:"maxMint",outputs:[{name:"maxShares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"owner",type:"address"}],name:"maxRedeem",outputs:[{name:"maxShares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"owner",type:"address"}],name:"maxWithdraw",outputs:[{name:"maxAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"},{name:"receiver",type:"address"}],name:"mint",outputs:[{name:"assets",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"previewDeposit",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"previewMint",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"}],name:"previewRedeem",outputs:[{name:"assets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"assets",type:"uint256"}],name:"previewWithdraw",outputs:[{name:"shares",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"shares",type:"uint256"},{name:"receiver",type:"address"},{name:"owner",type:"address"}],name:"redeem",outputs:[{name:"assets",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"totalAssets",outputs:[{name:"totalManagedAssets",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"to",type:"address"},{name:"amount",type:"uint256"}],name:"transfer",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"from",type:"address"},{name:"to",type:"address"},{name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"assets",type:"uint256"},{name:"receiver",type:"address"},{name:"owner",type:"address"}],name:"withdraw",outputs:[{name:"shares",type:"uint256"}],stateMutability:"nonpayable",type:"function"}]},19585:(e,t,n)=>{function a(e,t){let n=e.toString();const a=n.startsWith("-");a&&(n=n.slice(1)),n=n.padStart(t,"0");let[o,i]=[n.slice(0,n.length-t),n.slice(n.length-t)];return i=i.replace(/(0+)$/,""),`${a?"-":""}${o||"0"}${i?`.${i}`:""}`}n.d(t,{b:()=>a})},4326:(e,t,n)=>{n.r(t),n.d(t,{AppKitModal:()=>yr,W3mListWallet:()=>Nr,W3mModal:()=>wr,W3mModalBase:()=>gr,W3mRouterContainer:()=>Sr,W3mUsageExceededView:()=>Cr});var a=n(66386),o=n(43756),i=n(54417),r=n(53560),s=n(15337),c=n(64300),l=n(86392),d=n(18395),u=n(90125),p=n(42772),m=n(97675);const h={isUnsupportedChainView:()=>"UnsupportedChain"===u.P.state.view||"SwitchNetwork"===u.P.state.view&&u.P.state.history.includes("UnsupportedChain"),async safeClose(){if(this.isUnsupportedChainView())return void s.I.shake();await m.w.isSIWXCloseDisabled()?s.I.shake():("DataCapture"!==u.P.state.view&&"DataCaptureOtpConfirm"!==u.P.state.view||p.l.disconnect(),s.I.close())}};var v=n(33885),g=n(71895),w=n(24227),y=n(31085),f=n(57921),b=n(95772),C=n(8795),k=n(26322),E=n(73242),A=n(71203),N=n(7711),I=n(16641);const T={getGasPriceInEther:(e,t)=>Number(t*e)/1e18,getGasPriceInUSD(e,t,n){const a=T.getGasPriceInEther(t,n);return f.C.bigNumber(e).times(a).toNumber()},getPriceImpact(e){let{sourceTokenAmount:t,sourceTokenPriceInUSD:n,toTokenPriceInUSD:a,toTokenAmount:o}=e;const i=f.C.bigNumber(t).times(n),r=f.C.bigNumber(o).times(a);return i.minus(r).div(i).times(100).toNumber()},getMaxSlippage(e,t){const n=f.C.bigNumber(e).div(100);return f.C.multiply(t,n).toNumber()},getProviderFee(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.0085;return f.C.bigNumber(e).times(t).toString()},isInsufficientNetworkTokenForGas(e,t){const n=t||"0";return!!f.C.bigNumber(e).eq(0)||f.C.bigNumber(f.C.bigNumber(n)).gt(e)},isInsufficientSourceTokenForSwap(e,t,n){var a,o;const i=null===n||void 0===n||null===(a=n.find((e=>e.address===t)))||void 0===a||null===(o=a.quantity)||void 0===o?void 0:o.numeric;return f.C.bigNumber(i||"0").lt(e)}};var S=n(59609),x=n(92112),O=n(74441),_=n(98541);const P=15e4;class R extends Error{constructor(e,t){super(e),this.name="TransactionError",this.displayMessage=t}}const U={initializing:!1,initialized:!1,loadingPrices:!1,loadingQuote:!1,loadingApprovalTransaction:!1,loadingBuildTransaction:!1,loadingTransaction:!1,switchingTokens:!1,fetchError:!1,approvalTransaction:void 0,swapTransaction:void 0,transactionError:void 0,sourceToken:void 0,sourceTokenAmount:"",sourceTokenPriceInUSD:0,toToken:void 0,toTokenAmount:"",toTokenPriceInUSD:0,networkPrice:"0",networkBalanceInUSD:"0",networkTokenSymbol:"",inputError:void 0,slippage:A.bq.CONVERT_SLIPPAGE_TOLERANCE,tokens:void 0,popularTokens:void 0,suggestedTokens:void 0,foundTokens:void 0,myTokensWithBalance:void 0,tokensPriceMap:{},gasFee:"0",gasPriceInUSD:0,priceImpact:void 0,maxSlippage:void 0,providerFee:void 0},D=(0,w.sj)({...U}),B={state:D,subscribe:e=>(0,w.Ld)(D,(()=>e(D))),subscribeKey:(e,t)=>(0,y.VW)(D,e,t),getParams(){var e,t,n,a,o,i,r,s,d,u;const p=c.R.state.activeChain,m=null!==(e=null===(t=c.R.getAccountData(p))||void 0===t?void 0:t.caipAddress)&&void 0!==e?e:c.R.state.activeCaipAddress,h=N.j.getPlainAddress(m),v=(0,E.EO)(),g=l.A.getConnectorId(c.R.state.activeChain);if(!h)throw new Error("No address found to swap the tokens from.");const w=!(null!==(n=D.toToken)&&void 0!==n&&n.address)||!(null!==(a=D.toToken)&&void 0!==a&&a.decimals),y=!(null!==(o=D.sourceToken)&&void 0!==o&&o.address)||!(null!==(i=D.sourceToken)&&void 0!==i&&i.decimals)||!f.C.bigNumber(D.sourceTokenAmount).gt(0),C=!D.sourceTokenAmount;return{networkAddress:v,fromAddress:h,fromCaipAddress:m,sourceTokenAddress:null===(r=D.sourceToken)||void 0===r?void 0:r.address,toTokenAddress:null===(s=D.toToken)||void 0===s?void 0:s.address,toTokenAmount:D.toTokenAmount,toTokenDecimals:null===(d=D.toToken)||void 0===d?void 0:d.decimals,sourceTokenAmount:D.sourceTokenAmount,sourceTokenDecimals:null===(u=D.sourceToken)||void 0===u?void 0:u.decimals,invalidToToken:w,invalidSourceToken:y,invalidSourceTokenAmount:C,availableToSwap:m&&!w&&!y&&!C,isAuthConnector:g===b.b.CONNECTOR_ID.AUTH}},async setSourceToken(e){if(!e)return D.sourceToken=e,D.sourceTokenAmount="",void(D.sourceTokenPriceInUSD=0);D.sourceToken=e,await $.setTokenPrice(e.address,"sourceToken")},setSourceTokenAmount(e){D.sourceTokenAmount=e},async setToToken(e){if(!e)return D.toToken=e,D.toTokenAmount="",void(D.toTokenPriceInUSD=0);D.toToken=e,await $.setTokenPrice(e.address,"toToken")},setToTokenAmount(e){D.toTokenAmount=e?f.C.toFixed(e,6):""},async setTokenPrice(e,t){let n=D.tokensPriceMap[e]||0;n||(D.loadingPrices=!0,n=await $.getAddressPrice(e)),"sourceToken"===t?D.sourceTokenPriceInUSD=n:"toToken"===t&&(D.toTokenPriceInUSD=n),D.loadingPrices&&(D.loadingPrices=!1),$.getParams().availableToSwap&&!D.switchingTokens&&$.swapTokens()},async switchTokens(){if(!D.initializing&&D.initialized&&!D.switchingTokens){D.switchingTokens=!0;try{const e=D.toToken?{...D.toToken}:void 0,t=D.sourceToken?{...D.sourceToken}:void 0,n=e&&""===D.toTokenAmount?"1":D.toTokenAmount;$.setSourceTokenAmount(n),$.setToTokenAmount(""),await $.setSourceToken(e),await $.setToToken(t),D.switchingTokens=!1,$.swapTokens()}catch(e){throw D.switchingTokens=!1,e}}},resetState(){D.myTokensWithBalance=U.myTokensWithBalance,D.tokensPriceMap=U.tokensPriceMap,D.initialized=U.initialized,D.initializing=U.initializing,D.switchingTokens=U.switchingTokens,D.sourceToken=U.sourceToken,D.sourceTokenAmount=U.sourceTokenAmount,D.sourceTokenPriceInUSD=U.sourceTokenPriceInUSD,D.toToken=U.toToken,D.toTokenAmount=U.toTokenAmount,D.toTokenPriceInUSD=U.toTokenPriceInUSD,D.networkPrice=U.networkPrice,D.networkTokenSymbol=U.networkTokenSymbol,D.networkBalanceInUSD=U.networkBalanceInUSD,D.inputError=U.inputError},resetValues(){var e;const{networkAddress:t}=$.getParams(),n=null===(e=D.tokens)||void 0===e?void 0:e.find((e=>e.address===t));$.setSourceToken(n),$.setToToken(void 0)},getApprovalLoadingState:()=>D.loadingApprovalTransaction,clearError(){D.transactionError=void 0},async initializeState(){if(!D.initializing){if(D.initializing=!0,!D.initialized)try{await $.fetchTokens(),D.initialized=!0}catch(e){D.initialized=!1,g.K.showError("Failed to initialize swap"),u.P.goBack()}D.initializing=!1}},async fetchTokens(){var e;const{networkAddress:t}=$.getParams();await $.getNetworkTokenPrice(),await $.getMyTokensWithBalance();const n=null===(e=D.myTokensWithBalance)||void 0===e?void 0:e.find((e=>e.address===t));n&&(D.networkTokenSymbol=n.symbol,$.setSourceToken(n),$.setSourceTokenAmount("0"))},async getTokenList(){var e;const t=null===(e=c.R.state.activeCaipNetwork)||void 0===e?void 0:e.caipNetworkId;if(D.caipNetworkId!==t||!D.tokens)try{var n;D.tokensLoading=!0;const e=await I.n.getTokenList(t);D.tokens=e,D.caipNetworkId=t,D.popularTokens=e.sort(((e,t)=>e.symbol<t.symbol?-1:e.symbol>t.symbol?1:0));const a=(t&&(null===(n=A.bq.SUGGESTED_TOKENS_BY_CHAIN)||void 0===n?void 0:n[t])||[]).map((t=>e.find((e=>e.symbol===t)))).filter((e=>Boolean(e))),o=(A.bq.SWAP_SUGGESTED_TOKENS||[]).map((t=>e.find((e=>e.symbol===t)))).filter((e=>Boolean(e))).filter((e=>!a.some((t=>t.address===e.address))));D.suggestedTokens=[...a,...o]}catch(a){D.tokens=[],D.popularTokens=[],D.suggestedTokens=[]}finally{D.tokensLoading=!1}},async getAddressPrice(e){var t,n;const a=D.tokensPriceMap[e];if(a)return a;const o=await O.L.fetchTokenPrice({addresses:[e]}),i=(null===o||void 0===o?void 0:o.fungibles)||[],r=[...D.tokens||[],...D.myTokensWithBalance||[]],s=null===r||void 0===r||null===(t=r.find((t=>t.address===e)))||void 0===t?void 0:t.symbol,c=(null===(n=i.find((e=>e.symbol.toLowerCase()===(null===s||void 0===s?void 0:s.toLowerCase()))))||void 0===n?void 0:n.price)||0,l=parseFloat(c.toString());return D.tokensPriceMap[e]=l,l},async getNetworkTokenPrice(){var e;const{networkAddress:t}=$.getParams(),n=null===(e=(await O.L.fetchTokenPrice({addresses:[t]}).catch((()=>(g.K.showError("Failed to fetch network token price"),{fungibles:[]})))).fungibles)||void 0===e?void 0:e[0],a=(null===n||void 0===n?void 0:n.price.toString())||"0";D.tokensPriceMap[t]=parseFloat(a),D.networkTokenSymbol=(null===n||void 0===n?void 0:n.symbol)||"",D.networkPrice=a},async getMyTokensWithBalance(e){var t;const n=await k.Q.getMyTokensWithBalance({forceUpdate:e,caipNetwork:c.R.state.activeCaipNetwork,address:null===(t=c.R.getAccountData())||void 0===t?void 0:t.address}),a=I.n.mapBalancesToSwapTokens(n);a&&(await $.getInitialGasPrice(),$.setBalances(a))},setBalances(e){const{networkAddress:t}=$.getParams(),n=c.R.state.activeCaipNetwork;if(!n)return;const a=e.find((e=>e.address===t));e.forEach((e=>{D.tokensPriceMap[e.address]=e.price||0})),D.myTokensWithBalance=e.filter((e=>e.address.startsWith(n.caipNetworkId))),D.networkBalanceInUSD=a?f.C.multiply(a.quantity.numeric,a.price).toString():"0"},async getInitialGasPrice(){var e,t,n,a;const o=await I.n.fetchGasPrice();if(!o)return{gasPrice:null,gasPriceInUSD:null};switch(null===(e=c.R.state)||void 0===e||null===(t=e.activeCaipNetwork)||void 0===t?void 0:t.chainNamespace){case b.b.CHAIN.SOLANA:return D.gasFee=null!==(n=o.standard)&&void 0!==n?n:"0",D.gasPriceInUSD=f.C.multiply(o.standard,D.networkPrice).div(1e9).toNumber(),{gasPrice:BigInt(D.gasFee),gasPriceInUSD:Number(D.gasPriceInUSD)};case b.b.CHAIN.EVM:default:const e=null!==(a=o.standard)&&void 0!==a?a:"0",t=BigInt(e),i=BigInt(P),r=T.getGasPriceInUSD(D.networkPrice,i,t);return D.gasFee=e,D.gasPriceInUSD=r,{gasPrice:t,gasPriceInUSD:r}}},async swapTokens(){var e;const t=null===(e=c.R.getAccountData())||void 0===e?void 0:e.address,n=D.sourceToken,a=D.toToken,o=f.C.bigNumber(D.sourceTokenAmount).gt(0);if(o||$.setToTokenAmount(""),!a||!n||D.loadingPrices||!o||!t)return;D.loadingQuote=!0;const i=f.C.bigNumber(D.sourceTokenAmount).times(10**n.decimals).round(0).toFixed(0);try{var r,s;const e=await O.L.fetchSwapQuote({userAddress:t,from:n.address,to:a.address,gasPrice:D.gasFee,amount:i.toString()});D.loadingQuote=!1;const o=null===e||void 0===e||null===(r=e.quotes)||void 0===r||null===(s=r[0])||void 0===s?void 0:s.toAmount;if(!o)return void x.B.open({displayMessage:"Incorrect amount",debugMessage:"Please enter a valid amount"},"error");const c=f.C.bigNumber(o).div(10**a.decimals).toString();$.setToTokenAmount(c);$.hasInsufficientToken(D.sourceTokenAmount,n.address)?D.inputError="Insufficient balance":(D.inputError=void 0,$.setTransactionDetails())}catch(l){const e=await I.n.handleSwapError(l);D.loadingQuote=!1,D.inputError=e||"Insufficient balance"}},async getTransaction(){const{fromCaipAddress:e,availableToSwap:t}=$.getParams(),n=D.sourceToken,a=D.toToken;if(e&&t&&n&&a&&!D.loadingQuote)try{D.loadingBuildTransaction=!0;let t;return t=await I.n.fetchSwapAllowance({userAddress:e,tokenAddress:n.address,sourceTokenAmount:D.sourceTokenAmount,sourceTokenDecimals:n.decimals})?await $.createSwapTransaction():await $.createAllowanceTransaction(),D.loadingBuildTransaction=!1,D.fetchError=!1,t}catch(o){return u.P.goBack(),g.K.showError("Failed to check allowance"),D.loadingBuildTransaction=!1,D.approvalTransaction=void 0,D.swapTransaction=void 0,void(D.fetchError=!0)}},async createAllowanceTransaction(){const{fromCaipAddress:e,sourceTokenAddress:t,toTokenAddress:n}=$.getParams();if(e&&n){if(!t)throw new Error("createAllowanceTransaction - No source token address found.");try{const a=await O.L.generateApproveCalldata({from:t,to:n,userAddress:e}),o=N.j.getPlainAddress(a.tx.from);if(!o)throw new Error("SwapController:createAllowanceTransaction - address is required");const i={data:a.tx.data,to:o,gasPrice:BigInt(a.tx.eip155.gasPrice),value:BigInt(a.tx.value),toAmount:D.toTokenAmount};return D.swapTransaction=void 0,D.approvalTransaction={data:i.data,to:i.to,gasPrice:i.gasPrice,value:i.value,toAmount:i.toAmount},{data:i.data,to:i.to,gasPrice:i.gasPrice,value:i.value,toAmount:i.toAmount}}catch(a){return u.P.goBack(),g.K.showError("Failed to create approval transaction"),D.approvalTransaction=void 0,D.swapTransaction=void 0,void(D.fetchError=!0)}}},async createSwapTransaction(){var e;const{networkAddress:t,fromCaipAddress:n,sourceTokenAmount:a}=$.getParams(),o=D.sourceToken,i=D.toToken;if(!n||!a||!o||!i)return;const r=null===(e=p.l.parseUnits(a,o.decimals))||void 0===e?void 0:e.toString();try{const e=await O.L.generateSwapCalldata({userAddress:n,from:o.address,to:i.address,amount:r,disableEstimate:!0}),a=o.address===t,s=BigInt(e.tx.eip155.gas),c=BigInt(e.tx.eip155.gasPrice),l=N.j.getPlainAddress(e.tx.to);if(!l)throw new Error("SwapController:createSwapTransaction - address is required");const d={data:e.tx.data,to:l,gas:s,gasPrice:c,value:a?BigInt(null!==r&&void 0!==r?r:"0"):BigInt("0"),toAmount:D.toTokenAmount};return D.gasPriceInUSD=T.getGasPriceInUSD(D.networkPrice,s,c),D.approvalTransaction=void 0,D.swapTransaction=d,d}catch(s){return u.P.goBack(),g.K.showError("Failed to create transaction"),D.approvalTransaction=void 0,D.swapTransaction=void 0,void(D.fetchError=!0)}},onEmbeddedWalletApprovalSuccess(){g.K.showLoading("Approve limit increase in your wallet"),u.P.replace("SwapPreview")},async sendTransactionForApproval(e){const{fromAddress:t,isAuthConnector:n}=$.getParams();D.loadingApprovalTransaction=!0;n?u.P.pushTransactionStack({onSuccess:$.onEmbeddedWalletApprovalSuccess}):g.K.showLoading("Approve limit increase in your wallet");try{await p.l.sendTransaction({address:t,to:e.to,data:e.data,value:e.value,chainNamespace:b.b.CHAIN.EVM}),await $.swapTokens(),await $.getTransaction(),D.approvalTransaction=void 0,D.loadingApprovalTransaction=!1}catch(r){var a,o,i;const e=r;D.transactionError=null===e||void 0===e?void 0:e.displayMessage,D.loadingApprovalTransaction=!1,g.K.showError((null===e||void 0===e?void 0:e.displayMessage)||"Transaction error"),_.X.sendEvent({type:"track",event:"SWAP_APPROVAL_ERROR",properties:{message:(null===e||void 0===e?void 0:e.displayMessage)||(null===e||void 0===e?void 0:e.message)||"Unknown",network:(null===(a=c.R.state.activeCaipNetwork)||void 0===a?void 0:a.caipNetworkId)||"",swapFromToken:(null===(o=$.state.sourceToken)||void 0===o?void 0:o.symbol)||"",swapToToken:(null===(i=$.state.toToken)||void 0===i?void 0:i.symbol)||"",swapFromAmount:$.state.sourceTokenAmount||"",swapToAmount:$.state.toTokenAmount||"",isSmartAccount:(0,E.r9)(b.b.CHAIN.EVM)===C.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}},async sendTransactionForSwap(e){var t,n,a,o;if(!e)return;const{fromAddress:i,toTokenAmount:r,isAuthConnector:s}=$.getParams();D.loadingTransaction=!0;const l=`Swapping ${null===(t=D.sourceToken)||void 0===t?void 0:t.symbol} to ${f.C.formatNumberToLocalString(r,3)} ${null===(n=D.toToken)||void 0===n?void 0:n.symbol}`,d=`Swapped ${null===(a=D.sourceToken)||void 0===a?void 0:a.symbol} to ${f.C.formatNumberToLocalString(r,3)} ${null===(o=D.toToken)||void 0===o?void 0:o.symbol}`;s?u.P.pushTransactionStack({onSuccess(){u.P.replace("Account"),g.K.showLoading(l),B.resetState()}}):g.K.showLoading("Confirm transaction in your wallet");try{var m,h,v,w,y;const t=[null===(m=D.sourceToken)||void 0===m?void 0:m.address,null===(h=D.toToken)||void 0===h?void 0:h.address].join(","),n=await p.l.sendTransaction({address:i,to:e.to,data:e.data,value:e.value,chainNamespace:b.b.CHAIN.EVM});return D.loadingTransaction=!1,g.K.showSuccess(d),_.X.sendEvent({type:"track",event:"SWAP_SUCCESS",properties:{network:(null===(v=c.R.state.activeCaipNetwork)||void 0===v?void 0:v.caipNetworkId)||"",swapFromToken:(null===(w=$.state.sourceToken)||void 0===w?void 0:w.symbol)||"",swapToToken:(null===(y=$.state.toToken)||void 0===y?void 0:y.symbol)||"",swapFromAmount:$.state.sourceTokenAmount||"",swapToAmount:$.state.toTokenAmount||"",isSmartAccount:(0,E.r9)(b.b.CHAIN.EVM)===C.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),B.resetState(),s||u.P.replace("Account"),B.getMyTokensWithBalance(t),n}catch(I){var k,A,N;const e=I;return D.transactionError=null===e||void 0===e?void 0:e.displayMessage,D.loadingTransaction=!1,g.K.showError((null===e||void 0===e?void 0:e.displayMessage)||"Transaction error"),void _.X.sendEvent({type:"track",event:"SWAP_ERROR",properties:{message:(null===e||void 0===e?void 0:e.displayMessage)||(null===e||void 0===e?void 0:e.message)||"Unknown",network:(null===(k=c.R.state.activeCaipNetwork)||void 0===k?void 0:k.caipNetworkId)||"",swapFromToken:(null===(A=$.state.sourceToken)||void 0===A?void 0:A.symbol)||"",swapToToken:(null===(N=$.state.toToken)||void 0===N?void 0:N.symbol)||"",swapFromAmount:$.state.sourceTokenAmount||"",swapToAmount:$.state.toTokenAmount||"",isSmartAccount:(0,E.r9)(b.b.CHAIN.EVM)===C.y_.ACCOUNT_TYPES.SMART_ACCOUNT}})}},hasInsufficientToken:(e,t)=>T.isInsufficientSourceTokenForSwap(e,t,D.myTokensWithBalance),setTransactionDetails(){const{toTokenAddress:e,toTokenDecimals:t}=$.getParams();e&&t&&(D.gasPriceInUSD=T.getGasPriceInUSD(D.networkPrice,BigInt(D.gasFee),BigInt(P)),D.priceImpact=T.getPriceImpact({sourceTokenAmount:D.sourceTokenAmount,sourceTokenPriceInUSD:D.sourceTokenPriceInUSD,toTokenPriceInUSD:D.toTokenPriceInUSD,toTokenAmount:D.toTokenAmount}),D.maxSlippage=T.getMaxSlippage(D.slippage,D.toTokenAmount),D.providerFee=T.getProviderFee(D.sourceTokenAmount))}},$=(0,S.P)(B);var M=n(7387),W=n(50745),L=n(32603),F=n(10109);const j=F.iv`
  :host {
    display: block;
    border-radius: clamp(0px, ${e=>{let{borderRadius:t}=e;return t[8]}}, 44px);
    box-shadow: 0 0 0 1px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    overflow: hidden;
  }
`;var H=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let V=class extends a.oi{render(){return a.dy`<slot></slot>`}};V.styles=[W.ET,j],V=H([(0,L.M)("wui-card")],V);n(78330);var K=n(1426);const q="https://rpc.walletconnect.org",z="https://pulse.walletconnect.org",G="https://api.web3modal.org",J={WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",BASE_ACCOUNT:"baseAccount",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"AUTH"},Y={EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122",TON:"ton"},Q={eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos",sui:"Sui",stacks:"Stacks",ton:"TON"},X="undefined"!==typeof K&&!1,Z="MetaMask",ee="Trust Wallet",te="Solflare",ne="Phantom",ae="Coin98",oe="Magic Eden",ie="Backpack",re="Bitget Wallet",se="Frontier",ce="Xverse Wallet",le="Leather",de="OKX Wallet",ue="Binance Wallet",pe={ConnectorExplorerIds:{[J.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[J.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[J.BASE_ACCOUNT]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[J.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[J.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[J.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[Z]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[ee]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[te]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[ne]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[ae]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[oe]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[ie]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[re]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[se]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[ce]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[le]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",[de]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[ue]:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200","00000008819873e925422c1ff0f99f7c":"b3406e4a-bbfc-44fb-e3a6-89673c78b700","-239":"20f673c0-095e-49b2-07cf-eb5049dcf600","-3":"20f673c0-095e-49b2-07cf-eb5049dcf600"},ConnectorImageIds:{[J.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[J.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[J.BASE_ACCOUNT]:"bba2c8be-7fd1-463e-42b1-796ecb0ad200",[J.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[J.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[J.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[J.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[J.INJECTED]:"Browser Wallet",[J.WALLET_CONNECT]:"WalletConnect",[J.COINBASE]:"Coinbase",[J.COINBASE_SDK]:"Coinbase",[J.BASE_ACCOUNT]:"Base Account",[J.LEDGER]:"Ledger",[J.SAFE]:"Safe"},ConnectorTypesMap:{[J.INJECTED]:"INJECTED",[J.WALLET_CONNECT]:"WALLET_CONNECT",[J.EIP6963]:"ANNOUNCED",[J.AUTH]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]};const me=("undefined"!==typeof n(1426)?{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",he={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:me,SECURE_SITE_DASHBOARD:`${me}/dashboard`,SECURE_SITE_FAVICON:`${me}/images/favicon.png`,SOLANA_NATIVE_TOKEN_ADDRESS:"So11111111111111111111111111111111111111111",RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SUGGESTED_TOKENS_BY_CHAIN:{"eip155:42161":["USD\u20ae0"]},BALANCE_SUPPORTED_CHAINS:[Y.EVM,Y.SOLANA],SEND_PARAMS_SUPPORTED_CHAINS:[Y.EVM],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:[Y.EVM],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:[Y.EVM,Y.SOLANA],PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES:[Y.EVM,Y.SOLANA],ACTIVITY_ENABLED_CHAIN_NAMESPACES:[Y.EVM,Y.TON],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x",sui:"0x",stacks:"0x",ton:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:[Y.EVM,Y.SOLANA],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0,multiWallet:!1,emailCapture:!1,payWithExchange:!1,payments:!1,reownAuthentication:!1,headless:!1},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1,emailCapture:!1,reownAuthentication:!1,headless:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1,reownAuthentication:!1,headless:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa",ton:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"},SIWX_DEFAULTS:{signOutOnDisconnect:!0},MANDATORY_WALLET_IDS_ON_MOBILE:[pe.ConnectorExplorerIds[J.COINBASE],pe.ConnectorExplorerIds[J.COINBASE_SDK],pe.ConnectorExplorerIds[J.BASE_ACCOUNT],pe.ConnectorExplorerIds[te],pe.ConnectorExplorerIds[ne],pe.ConnectorExplorerIds[ue]],DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"]},ve="@appkit/active_caip_network_id",ge="@appkit/connected_social",we="@appkit-wallet/SOCIAL_USERNAME",ye="@appkit/recent_wallets",fe="@appkit/recent_wallet",be="WALLETCONNECT_DEEPLINK_CHOICE",Ce="@appkit/active_namespace",ke="@appkit/connected_namespaces",Ee="@appkit/connection_status",Ae="@appkit/social_provider",Ne="@appkit/native_balance_cache",Ie="@appkit/portfolio_cache",Te="@appkit/ens_cache",Se="@appkit/identity_cache",xe="@appkit/preferred_account_types",Oe="@appkit/connections",_e="@appkit/disconnected_connector_ids",Pe="@appkit/history_transactions_cache",Re="@appkit/token_price_cache",Ue="@appkit/latest_version",De="@appkit/ton_wallets_cache";function Be(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}const $e={setItem(e,t){Me()&&void 0!==t&&localStorage.setItem(e,t)},getItem(e){if(Me())return localStorage.getItem(e)||void 0},removeItem(e){Me()&&localStorage.removeItem(e)},clear(){Me()&&localStorage.clear()}};function Me(){return"undefined"!==typeof window&&"undefined"!==typeof localStorage}const We={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5,transactionsHistory:15e3,tokenPrice:15e3,latestAppKitVersion:6048e5,tonWallets:864e5},isCacheExpired:(e,t)=>Date.now()-e>t,getActiveNetworkProps(){const e=We.getActiveNamespace(),t=We.getActiveCaipNetworkId(),n=t?t.split(":")[1]:void 0;return{namespace:e,caipNetworkId:t,chainId:n?isNaN(Number(n))?n:Number(n):void 0}},setWalletConnectDeepLink(e){let{name:t,href:n}=e;try{$e.setItem(be,JSON.stringify({href:n,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=$e.getItem(be);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{$e.removeItem(be)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{$e.setItem(Ce,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{$e.setItem(ve,e),We.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return $e.getItem(ve)}catch{return void console.info("Unable to get active caip network id")}},deleteActiveCaipNetworkId(){try{$e.removeItem(ve)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=Be(e);$e.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=We.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),$e.setItem(ye,JSON.stringify(t)),$e.setItem(fe,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=$e.getItem(ye);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},getRecentWallet(){try{const e=$e.getItem(fe);return e?JSON.parse(e):null}catch{console.info("Unable to get AppKit recent")}return null},deleteRecentWallet(){try{$e.removeItem(fe)}catch{console.info("Unable to delete AppKit recent")}},setConnectedConnectorId(e,t){try{const n=Be(e);$e.setItem(n,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return $e.getItem(Ce)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=Be(e);return $e.getItem(t)}catch(t){console.info("Unable to get connected connector id in namespace",e)}},setConnectedSocialProvider(e){try{$e.setItem(ge,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return $e.getItem(ge)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{$e.removeItem(ge)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return $e.getItem(we)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var e;const t=$e.getItem(ve);return null===t||void 0===t||null===(e=t.split(":"))||void 0===e?void 0:e[1]},setConnectionStatus(e){try{$e.setItem(Ee,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return $e.getItem(Ee)}catch{return}},getConnectedNamespaces(){try{const e=$e.getItem(ke);return null!==e&&void 0!==e&&e.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));$e.setItem(ke,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=We.getConnectedNamespaces();t.includes(e)||(t.push(e),We.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=We.getConnectedNamespaces(),n=t.indexOf(e);n>-1&&(t.splice(n,1),We.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return $e.getItem(Ae)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{$e.setItem(Ae,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{$e.removeItem(Ae)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=$e.getItem(Ie);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=We.getBalanceCache();$e.setItem(Ie,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const t=We.getBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.portfolio))return t.balance;We.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=We.getBalanceCache();t[e.caipAddress]=e,$e.setItem(Ie,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=$e.getItem(Ne);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=We.getBalanceCache();$e.setItem(Ne,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const t=We.getNativeBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.nativeBalance))return t;console.info("Discarding cache for address",e),We.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=We.getNativeBalanceCache();t[e.caipAddress]=e,$e.setItem(Ne,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=$e.getItem(Te);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const t=We.getEnsCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.ens))return t.ens;We.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=We.getEnsCache();t[e.address]=e,$e.setItem(Te,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=We.getEnsCache();$e.setItem(Te,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=$e.getItem(Se);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const t=We.getIdentityCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.identity))return t.identity;We.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=We.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},$e.setItem(Se,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=We.getIdentityCache();$e.setItem(Se,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},getTonWalletsCache(){try{const e=$e.getItem(De),t=e?JSON.parse(e):void 0;if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.tonWallets))return t;We.removeTonWalletsCache()}catch{console.info("Unable to get ton wallets cache")}},updateTonWalletsCache(e){try{const t=We.getTonWalletsCache()||{timestamp:0,wallets:[]};t.timestamp=(new Date).getTime(),t.wallets=e,$e.setItem(De,JSON.stringify(t))}catch{console.info("Unable to update ton wallets cache",e)}},removeTonWalletsCache(){try{$e.removeItem(De)}catch{console.info("Unable to remove ton wallets cache")}},clearAddressCache(){try{$e.removeItem(Ie),$e.removeItem(Ne),$e.removeItem(Te),$e.removeItem(Se),$e.removeItem(Pe)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{$e.setItem(xe,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=$e.getItem(xe);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{var n;const a=We.getConnections(),o=null!==(n=a[t])&&void 0!==n?n:[],i=new Map;for(const e of o)i.set(e.connectorId,{...e});for(const t of e){const e=i.get(t.connectorId),n=t.connectorId===J.AUTH;if(e&&!n){const n=new Set(e.accounts.map((e=>e.address.toLowerCase()))),a=t.accounts.filter((e=>!n.has(e.address.toLowerCase())));e.accounts.push(...a)}else i.set(t.connectorId,{...t})}const r={...a,[t]:Array.from(i.values())};$e.setItem(Oe,JSON.stringify(r))}catch(a){console.error("Unable to sync connections to storage",a)}},getConnections(){try{const e=$e.getItem(Oe);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}},deleteAddressFromConnection(e){let{connectorId:t,address:n,namespace:a}=e;try{var o;const e=We.getConnections(),i=null!==(o=e[a])&&void 0!==o?o:[],r=new Map(i.map((e=>[e.connectorId,e]))),s=r.get(t);if(s){0===s.accounts.filter((e=>e.address.toLowerCase()!==n.toLowerCase())).length?r.delete(t):r.set(t,{...s,accounts:s.accounts.filter((e=>e.address.toLowerCase()!==n.toLowerCase()))})}$e.setItem(Oe,JSON.stringify({...e,[a]:Array.from(r.values())}))}catch{console.error(`Unable to remove address "${n}" from connector "${t}" in namespace "${a}"`)}},getDisconnectedConnectorIds(){try{const e=$e.getItem(_e);return e?JSON.parse(e):{}}catch{console.info("Unable to get disconnected connector ids")}return{}},addDisconnectedConnectorId(e,t){try{var n;const a=We.getDisconnectedConnectorIds(),o=null!==(n=a[t])&&void 0!==n?n:[];o.push(e),$e.setItem(_e,JSON.stringify({...a,[t]:Array.from(new Set(o))}))}catch{console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`)}},removeDisconnectedConnectorId(e,t){try{var n;const a=We.getDisconnectedConnectorIds();let o=null!==(n=a[t])&&void 0!==n?n:[];o=o.filter((t=>t.toLowerCase()!==e.toLowerCase())),$e.setItem(_e,JSON.stringify({...a,[t]:Array.from(new Set(o))}))}catch{console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`)}},isConnectorDisconnected(e,t){try{var n;const a=We.getDisconnectedConnectorIds();return(null!==(n=a[t])&&void 0!==n?n:[]).some((t=>t.toLowerCase()===e.toLowerCase()))}catch{console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`)}return!1},getTransactionsCache(){try{const e=$e.getItem(Pe);return e?JSON.parse(e):{}}catch{console.info("Unable to get transactions cache")}return{}},getTransactionsCacheForAddress(e){let{address:t,chainId:n=""}=e;try{var a;const e=null===(a=We.getTransactionsCache()[t])||void 0===a?void 0:a[n];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.transactionsHistory))return e.transactions;We.removeTransactionsCache({address:t,chainId:n})}catch{console.info("Unable to get transactions cache")}},updateTransactionsCache(e){let{address:t,chainId:n="",timestamp:a,transactions:o}=e;try{const e=We.getTransactionsCache();e[t]={...e[t],[n]:{timestamp:a,transactions:o}},$e.setItem(Pe,JSON.stringify(e))}catch{console.info("Unable to update transactions cache",{address:t,chainId:n,timestamp:a,transactions:o})}},removeTransactionsCache(e){let{address:t,chainId:n}=e;try{const e=We.getTransactionsCache(),a=(null===e||void 0===e?void 0:e[t])||{},{[n]:o,...i}=a;$e.setItem(Pe,JSON.stringify({...e,[t]:i}))}catch{console.info("Unable to remove transactions cache",{address:t,chainId:n})}},getTokenPriceCache(){try{const e=$e.getItem(Re);return e?JSON.parse(e):{}}catch{console.info("Unable to get token price cache")}return{}},getTokenPriceCacheForAddresses(e){try{const t=We.getTokenPriceCache()[e.join(",")];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.tokenPrice))return t.tokenPrice;We.removeTokenPriceCache(e)}catch{console.info("Unable to get token price cache for addresses",e)}},updateTokenPriceCache(e){try{const t=We.getTokenPriceCache();t[e.addresses.join(",")]={timestamp:e.timestamp,tokenPrice:e.tokenPrice},$e.setItem(Re,JSON.stringify(t))}catch{console.info("Unable to update token price cache",e)}},removeTokenPriceCache(e){try{const t=We.getTokenPriceCache();$e.setItem(Re,JSON.stringify({...t,[e.join(",")]:void 0}))}catch{console.info("Unable to remove token price cache",e)}},getLatestAppKitVersion(){try{const e=this.getLatestAppKitVersionCache(),t=null===e||void 0===e?void 0:e.version;return t&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.latestAppKitVersion)?t:void 0}catch{console.info("Unable to get latest AppKit version")}},getLatestAppKitVersionCache(){try{const e=$e.getItem(Ue);return e?JSON.parse(e):{}}catch{console.info("Unable to get latest AppKit version cache")}return{}},updateLatestAppKitVersion(e){try{const t=We.getLatestAppKitVersionCache();t.timestamp=e.timestamp,t.version=e.version,$e.setItem(Ue,JSON.stringify(t))}catch{console.info("Unable to update latest AppKit version on local storage",e)}}},Le={getWindow(){if("undefined"!==typeof window)return window},isMobile(){var e,t;return!!this.isClient()&&Boolean((null===(e=window)||void 0===e?void 0:e.matchMedia)&&"function"===typeof window.matchMedia&&(null===(t=window.matchMedia("(pointer:coarse)"))||void 0===t?void 0:t.matches)||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},checkCaipNetwork(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null===e||void 0===e?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){var e;if(!this.isMobile())return!1;const t=null===(e=window)||void 0===e?void 0:e.navigator.userAgent.toLowerCase();return Le.isMobile()&&t.includes("android")},isIos(){var e;if(!this.isMobile())return!1;const t=null===(e=window)||void 0===e?void 0:e.navigator.userAgent.toLowerCase();return t.includes("iphone")||t.includes("ipad")},isSafari(){var e;if(!this.isClient())return!1;return(null===(e=window)||void 0===e?void 0:e.navigator.userAgent.toLowerCase()).includes("safari")},isClient:()=>"undefined"!==typeof window,isPairingExpired:e=>!e||e-Date.now()<=he.TEN_SEC_MS,isAllowedRetry(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:he.ONE_SEC_MS;return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{var e,t;return(null===(e=window)||void 0===e?void 0:e.self)!==(null===(t=window)||void 0===t?void 0:t.top)}catch(n){return!1}},isSafeApp(){if(Le.isClient()&&window.self!==window.top)try{var e,t,n;const a=null===(e=window)||void 0===e||null===(t=e.location)||void 0===t||null===(n=t.ancestorOrigins)||void 0===n?void 0:n[0],o="https://app.safe.global";if(a){const e=new URL(a),t=new URL(o);return e.hostname===t.hostname}}catch{return!1}return!1},getPairingExpiry:()=>Date.now()+he.FOUR_MINUTES_MS,getNetworkId:e=>null===e||void 0===e?void 0:e.split(":")[1],getPlainAddress:e=>null===e||void 0===e?void 0:e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];function r(){e(...o)}t&&clearTimeout(t),t=setTimeout(r,n)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){var n;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(Le.isHttpUrl(e))return this.formatUniversalUrl(e,t);let o=e,i=a;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),!i||null!==(n=i)&&void 0!==n&&n.endsWith("/")||(i=`${i}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const r=encodeURIComponent(t);return{redirect:`${o}wc?uri=${r}`,redirectUniversalLink:i?`${i}wc?uri=${r}`:void 0,href:o}},formatUniversalUrl(e,t){if(!Le.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);return{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},getOpenTargetForPlatform(e){return"popupWindow"===e?e:this.isTelegram()?We.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,n){var a;null===(a=window)||void 0===a||a.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},returnOpenHref(e,t,n){var a;return null===(a=window)||void 0===a?void 0:a.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},isTelegram:()=>"undefined"!==typeof window&&(Boolean(window.TelegramWebviewProxy)||Boolean(window.Telegram)||Boolean(window.TelegramWebviewProxyProto)),isPWA(){var e,t,n,a;if("undefined"===typeof window)return!1;const o=!(null===(e=window)||void 0===e||!e.matchMedia||"function"!==typeof window.matchMedia)&&(null===(t=window.matchMedia("(display-mode: standalone)"))||void 0===t?void 0:t.matches),i=null===(n=window)||void 0===n||null===(a=n.navigator)||void 0===a?void 0:a.standalone;return Boolean(o||i)},async preloadImage(e){const t=new Promise(((t,n)=>{const a=new Image;a.onload=t,a.onerror=n,a.crossOrigin="anonymous",a.src=e}));return Promise.race([t,Le.wait(2e3)])},parseBalance(e,t){let n="0.000";if("string"===typeof e){const t=Number(e);if(!isNaN(t)){const e=(Math.floor(1e3*t)/1e3).toFixed(3);e&&(n=e)}}const[a,o]=n.split("."),i=a||"0",r=o||"000";return{formattedText:`${i}.${r}${t?` ${t}`:""}`,value:i,decimals:r,symbol:t}},getApiUrl:()=>G,getBlockchainApiUrl:()=>q,getAnalyticsUrl:()=>z,getUUID(){var e;return null!==(e=crypto)&&void 0!==e&&e.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},parseError(e){var t,n;return"string"===typeof e?e:"string"===typeof(null===e||void 0===e||null===(t=e.issues)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.message)?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n={};return t&&e&&(e.forEach(((e,t)=>{n[e]=t})),t.sort(((e,t)=>{const a=n[e.id],o=n[t.id];return void 0!==a&&void 0!==o?a-o:void 0!==a?-1:void 0!==o?1:0}))),t},calculateBalance(e){let t=0;for(const a of e){var n;t+=null!==(n=a.value)&&void 0!==n?n:0}return t},formatTokenBalance(e){const t=e.toFixed(2),[n,a]=t.split(".");return{dollars:n,pennies:a}},isAddress(e){switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"eip155"){case"eip155":return!!/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&!(!/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&!/^(?:0x)?[0-9A-F]{40}$/iu.test(e));case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);case"bip122":{const t=/^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),n=/^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),a=/^bc1[a-z0-9]{39,87}$/u.test(e),o=/^bc1p[a-z0-9]{58}$/u.test(e);return t||n||a||o}default:return!1}},uniqueBy(e,t){const n=new Set;return e.filter((e=>{const a=e[t];return!n.has(a)&&(n.add(a),!0)}))},generateSdkVersion:(e,t,n)=>`${t}-${0===e.length?he.ADAPTER_TYPES.UNIVERSAL:e.map((e=>e.adapterType)).join(",")}-${n}`,createAccount:(e,t,n,a,o)=>({namespace:e,address:t,type:n,publicKey:a,path:o}),isCaipAddress(e){if("string"!==typeof e)return!1;const t=e.split(":"),n=t[0];return 3===t.filter(Boolean).length&&n in Q},getAccount:e=>e?"string"===typeof e?{address:e,chainId:void 0}:{address:e.address,chainId:e.chainId}:{address:void 0,chainId:void 0},isMac(){var e;const t=null===(e=window)||void 0===e?void 0:e.navigator.userAgent.toLowerCase();return t.includes("macintosh")&&!t.includes("safari")},formatTelegramSocialLoginUrl(e){var t;const n=`--${encodeURIComponent(null===(t=window)||void 0===t?void 0:t.location.href)}`,a="state=";if("auth.magic.link"===new URL(e).host){const t="provider_authorization_url=",o=e.substring(e.indexOf(t)+t.length),i=this.injectIntoUrl(decodeURIComponent(o),a,n);return e.replace(o,encodeURIComponent(i))}return this.injectIntoUrl(e,a,n)},injectIntoUrl(e,t,n){const a=e.indexOf(t);if(-1===a)throw new Error(`${t} parameter not found in the URL: ${e}`);const o=e.indexOf("&",a),i=t.length,r=-1!==o?o:e.length;return e.substring(0,a+i)+(e.substring(a+i,r)+n)+e.substring(o)},isNumber:e=>("number"===typeof e||"string"===typeof e)&&!isNaN(Number(e))};async function Fe(){const e=await fetch(...arguments);if(!e.ok){throw new Error(`HTTP status code: ${e.status}`,{cause:e})}return e}const je={getFeatureValue(e,t){const n=null===t||void 0===t?void 0:t[e];return void 0===n?he.DEFAULT_FEATURES[e]:n},filterSocialsByPlatform(e){if(!e||!e.length)return e;let t=e;return Le.isTelegram()&&(Le.isIos()&&(t=t.filter((e=>"google"!==e))),Le.isMac()&&(t=t.filter((e=>"x"!==e))),Le.isAndroid()&&(t=t.filter((e=>!["facebook","x"].includes(e))))),Le.isMobile()&&(t=t.filter((e=>"facebook"!==e))),t},isSocialsEnabled(){var e,t,n,a;return Array.isArray(null===(e=Ve.state.features)||void 0===e?void 0:e.socials)&&(null===(t=Ve.state.features)||void 0===t?void 0:t.socials.length)>0||Array.isArray(null===(n=Ve.state.remoteFeatures)||void 0===n?void 0:n.socials)&&(null===(a=Ve.state.remoteFeatures)||void 0===a?void 0:a.socials.length)>0},isEmailEnabled(){var e,t;return Boolean((null===(e=Ve.state.features)||void 0===e?void 0:e.email)||(null===(t=Ve.state.remoteFeatures)||void 0===t?void 0:t.email))}},He=(0,w.sj)({features:he.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:he.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{},enableMobileFullScreen:!1,coinbasePreference:"all"}),Ve={state:He,subscribeKey:(e,t)=>(0,y.VW)(He,e,t),setOptions(e){Object.assign(He,e)},setRemoteFeatures(e){var t,n;if(!e)return;const a={...He.remoteFeatures,...e};He.remoteFeatures=a,null!==(t=He.remoteFeatures)&&void 0!==t&&t.socials&&(He.remoteFeatures.socials=je.filterSocialsByPlatform(He.remoteFeatures.socials)),null!==(n=He.features)&&void 0!==n&&n.pay&&(He.remoteFeatures.email=!1,He.remoteFeatures.socials=!1)},setFeatures(e){var t;if(!e)return;He.features||(He.features=he.DEFAULT_FEATURES);const n={...He.features,...e};He.features=n,null!==(t=He.features)&&void 0!==t&&t.pay&&He.remoteFeatures&&(He.remoteFeatures.email=!1,He.remoteFeatures.socials=!1)},setProjectId(e){He.projectId=e},setCustomRpcUrls(e){He.customRpcUrls=e},setAllWallets(e){He.allWallets=e},setIncludeWalletIds(e){He.includeWalletIds=e},setExcludeWalletIds(e){He.excludeWalletIds=e},setFeaturedWalletIds(e){He.featuredWalletIds=e},setTokens(e){He.tokens=e},setTermsConditionsUrl(e){He.termsConditionsUrl=e},setPrivacyPolicyUrl(e){He.privacyPolicyUrl=e},setCustomWallets(e){He.customWallets=e},setIsSiweEnabled(e){He.isSiweEnabled=e},setIsUniversalProvider(e){He.isUniversalProvider=e},setSdkVersion(e){He.sdkVersion=e},setMetadata(e){He.metadata=e},setDisableAppend(e){He.disableAppend=e},setEIP6963Enabled(e){He.enableEIP6963=e},setDebug(e){He.debug=e},setEnableWalletGuide(e){He.enableWalletGuide=e},setEnableAuthLogger(e){He.enableAuthLogger=e},setEnableWallets(e){He.enableWallets=e},setPreferUniversalLinks(e){He.experimental_preferUniversalLinks=e},setSIWX(e){if(e)for(const[n,a]of Object.entries(he.SIWX_DEFAULTS)){var t;null!==(t=e[n])&&void 0!==t||(e[n]=a)}He.siwx=e},setConnectMethodsOrder(e){He.features={...He.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){He.features={...He.features,walletFeaturesOrder:e}},setSocialsOrder(e){He.remoteFeatures={...He.remoteFeatures,socials:e}},setCollapseWallets(e){He.features={...He.features,collapseWallets:e}},setEnableEmbedded(e){He.enableEmbedded=e},setAllowUnsupportedChain(e){He.allowUnsupportedChain=e},setManualWCControl(e){He.manualWCControl=e},setEnableNetworkSwitch(e){He.enableNetworkSwitch=e},setEnableMobileFullScreen(e){He.enableMobileFullScreen=Le.isMobile()&&e},setEnableReconnect(e){He.enableReconnect=e},setCoinbasePreference(e){He.coinbasePreference=e},setDefaultAccountTypes(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.entries(e).forEach((e=>{let[t,n]=e;n&&(He.defaultAccountTypes[t]=n)}))},setUniversalProviderConfigOverride(e){He.universalProviderConfigOverride=e},getUniversalProviderConfigOverride:()=>He.universalProviderConfigOverride,getSnapshot:()=>(0,w.CO)(He)},Ke=Object.freeze({enabled:!0,events:[]}),qe=new class{constructor(e){let{baseUrl:t,clientId:n}=e;this.baseUrl=t,this.clientId=n}async get(e){let{headers:t,signal:n,cache:a,...o}=e;const i=this.createUrl(o);return(await Fe(i,{method:"GET",headers:t,signal:n,cache:a})).json()}async getBlob(e){let{headers:t,signal:n,...a}=e;const o=this.createUrl(a);return(await Fe(o,{method:"GET",headers:t,signal:n})).blob()}async post(e){let{body:t,headers:n,signal:a,...o}=e;const i=this.createUrl(o);return(await Fe(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0,signal:a})).json()}async put(e){let{body:t,headers:n,signal:a,...o}=e;const i=this.createUrl(o);return(await Fe(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0,signal:a})).json()}async delete(e){let{body:t,headers:n,signal:a,...o}=e;const i=this.createUrl(o);return(await Fe(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0,signal:a})).json()}createUrl(e){let{path:t,params:n}=e;const a=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach((e=>{let[t,n]=e;n&&a.searchParams.append(t,n)})),this.clientId&&a.searchParams.append("clientId",this.clientId),a}sendBeacon(e){let{body:t,...n}=e;const a=this.createUrl(n);return navigator.sendBeacon(a.toString(),t?JSON.stringify(t):void 0)}}({baseUrl:Le.getAnalyticsUrl(),clientId:null}),ze=(0,w.sj)({...Ke}),Ge={state:ze,subscribeKey:(e,t)=>(0,y.VW)(ze,e,t),async sendError(e,t){if(!ze.enabled)return;const n=Date.now();if(ze.events.filter((e=>{const t=new Date(e.properties.timestamp||"").getTime();return n-t<6e4})).length>=5)return;const a={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:(new Date).toISOString()}};ze.events.push(a);try{if("undefined"===typeof window)return;const{projectId:n,sdkType:a,sdkVersion:o}=Ve.state;await qe.post({path:"/e",params:{projectId:n,st:a,sv:o||"html-wagmi-4.2.2"},body:{eventId:Le.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:(new Date).toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){ze.enabled=!0},disable(){ze.enabled=!1},clearEvents(){ze.events=[]}};class Je extends Error{constructor(e,t,n){super(e),this.originalName="AppKitError",this.name="AppKitError",this.category=t,this.originalError=n,n&&n instanceof Error&&(this.originalName=n.name),Object.setPrototypeOf(this,Je.prototype);let a=!1;if(n instanceof Error&&"string"===typeof n.stack&&n.stack){const e=n.stack,t=e.indexOf("\n");if(t>-1){const n=e.substring(t+1);this.stack=`${this.name}: ${this.message}\n${n}`,a=!0}}a||(Error.captureStackTrace?Error.captureStackTrace(this,Je):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function Ye(e,t){let n="";try{n=e instanceof Error?e.message:"string"===typeof e?e:"object"===typeof e&&null!==e?0===Object.keys(e).length?"Unknown error":(null===e||void 0===e?void 0:e.message)||JSON.stringify(e):String(e)}catch(o){n="Unknown error",console.error("Error parsing error message",o)}const a=e instanceof Je?e:new Je(n,t,e);throw Ge.sendError(a,a.category),a}const Qe=(0,w.sj)({message:"",variant:"info",open:!1}),Xe=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"INTERNAL_SDK_ERROR";const n={};return Object.keys(e).forEach((a=>{const o=e[a];if("function"===typeof o){let e=o;e="AsyncFunction"===o.constructor.name?async function(){try{return await o(...arguments)}catch(e){return Ye(e,t)}}:function(){try{return o(...arguments)}catch(e){return Ye(e,t)}},n[a]=e}else n[a]=o})),n}({state:Qe,subscribeKey:(e,t)=>(0,y.VW)(Qe,e,t),open(e,t){const{debug:n}=Ve.state,{code:a,displayMessage:o,debugMessage:i}=e;if(o&&n&&(Qe.message=o,Qe.variant=t,Qe.open=!0),i){if(!X)return;const e="function"===typeof i?i():i,n=a?{code:a}:void 0;"error"===t?console.error(e,n):"warning"===t?console.warn(e,n):console.info(e,n)}},warn(e,t,n){Qe.open=!0,Qe.message=e,Qe.variant="warning",t&&console.warn(t,n)},close(){Qe.open=!1,Qe.message="",Qe.variant="info"}});n(91980),n(26576),n(19658);const Ze=F.iv`
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
`;var et=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};const tt={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let nt=class extends a.oi{constructor(){super(...arguments),this.message="",this.type="info"}render(){return a.dy`
      <wui-flex
        data-type=${(0,i.o)(this.type)}
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
            <wui-icon color="inherit" size="md" name=${tt[this.type]}></wui-icon>
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
    `}onClose(){Xe.close()}};nt.styles=[W.ET,Ze],et([(0,o.Cb)()],nt.prototype,"message",void 0),et([(0,o.Cb)()],nt.prototype,"type",void 0),nt=et([(0,L.M)("wui-alertbar")],nt);const at=M.iv`
  :host {
    display: block;
    position: absolute;
    top: ${e=>{let{spacing:t}=e;return t[3]}};
    left: ${e=>{let{spacing:t}=e;return t[4]}};
    right: ${e=>{let{spacing:t}=e;return t[4]}};
    opacity: 0;
    pointer-events: none;
  }
`;var ot=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};const it={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let rt=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.open=x.B.state.open,this.onOpen(!0),this.unsubscribe.push(x.B.subscribeKey("open",(e=>{this.open=e,this.onOpen(!1)})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=x.B.state,n=it[t];return a.dy`
      <wui-alertbar
        message=${e}
        backgroundColor=${null===n||void 0===n?void 0:n.backgroundColor}
        iconColor=${null===n||void 0===n?void 0:n.iconColor}
        icon=${null===n||void 0===n?void 0:n.icon}
        type=${t}
      ></wui-alertbar>
    `}onOpen(e){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):e||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};rt.styles=at,ot([(0,o.SB)()],rt.prototype,"open",void 0),rt=ot([(0,M.Mo)("w3m-alertbar")],rt);var st=n(16986),ct=n(2615);const lt=F.iv`
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
`;var dt=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let ut=class extends a.oi{constructor(){super(...arguments),this.icon="card",this.variant="primary",this.type="accent",this.size="md",this.iconSize=void 0,this.fullWidth=!1,this.disabled=!1}render(){return a.dy`<button
      data-variant=${this.variant}
      data-type=${this.type}
      data-size=${this.size}
      data-full-width=${this.fullWidth}
      ?disabled=${this.disabled}
    >
      <wui-icon color="inherit" name=${this.icon} size=${(0,i.o)(this.iconSize)}></wui-icon>
    </button>`}};ut.styles=[W.ET,W.ZM,lt],dt([(0,o.Cb)()],ut.prototype,"icon",void 0),dt([(0,o.Cb)()],ut.prototype,"variant",void 0),dt([(0,o.Cb)()],ut.prototype,"type",void 0),dt([(0,o.Cb)()],ut.prototype,"size",void 0),dt([(0,o.Cb)()],ut.prototype,"iconSize",void 0),dt([(0,o.Cb)({type:Boolean})],ut.prototype,"fullWidth",void 0),dt([(0,o.Cb)({type:Boolean})],ut.prototype,"disabled",void 0),ut=dt([(0,L.M)("wui-icon-button")],ut);n(72738);const pt=F.iv`
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
`;var mt=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};const ht={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},vt={lg:"lg",md:"md",sm:"sm"};let gt=class extends a.oi{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return a.dy`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const e=ht[this.size];return this.text?a.dy`<wui-text color="primary" variant=${e}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return a.dy`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const e=vt[this.size];return a.dy` <wui-flex class="left-icon-container">
      <wui-icon size=${e} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};gt.styles=[W.ET,W.ZM,pt],mt([(0,o.Cb)()],gt.prototype,"imageSrc",void 0),mt([(0,o.Cb)()],gt.prototype,"text",void 0),mt([(0,o.Cb)()],gt.prototype,"size",void 0),mt([(0,o.Cb)()],gt.prototype,"type",void 0),mt([(0,o.Cb)({type:Boolean})],gt.prototype,"disabled",void 0),gt=mt([(0,L.M)("wui-select")],gt);n(79996),n(43549);const wt={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:("undefined"!==typeof n(1426)?{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120,ModalHeight:150,ViewTransition:150},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]};var yt=n(1426);const ft={WC_NAME_SUFFIX:".reown.id",WC_NAME_SUFFIX_LEGACY:".wcn.id",BLOCKCHAIN_API_RPC_URL:"https://rpc.walletconnect.org",PULSE_API_URL:"https://pulse.walletconnect.org",W3M_API_URL:"https://api.web3modal.org",CONNECTOR_ID:{WALLET_CONNECT:"walletConnect",INJECTED:"injected",WALLET_STANDARD:"announced",COINBASE:"coinbaseWallet",COINBASE_SDK:"coinbaseWalletSDK",BASE_ACCOUNT:"baseAccount",SAFE:"safe",LEDGER:"ledger",OKX:"okx",EIP6963:"eip6963",AUTH:"AUTH"},CONNECTOR_NAMES:{AUTH:"Auth"},AUTH_CONNECTOR_SUPPORTED_CHAINS:["eip155","solana"],LIMITS:{PENDING_TRANSACTIONS:99},CHAIN:{EVM:"eip155",SOLANA:"solana",POLKADOT:"polkadot",BITCOIN:"bip122",TON:"ton"},CHAIN_NAME_MAP:{eip155:"EVM Networks",solana:"Solana",polkadot:"Polkadot",bip122:"Bitcoin",cosmos:"Cosmos",sui:"Sui",stacks:"Stacks",ton:"TON"},ADAPTER_TYPES:{BITCOIN:"bitcoin",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",TON:"ton"},USDT_CONTRACT_ADDRESSES:["0xdac17f958d2ee523a2206206994597c13d831ec7","0xc2132d05d31c914a87c6611c10748aeb04b58e8f","0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7","0x919C1c267BC06a7039e03fcc2eF738525769109c","0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e","0x55d398326f99059fF775485246999027B3197955","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9"],SOLANA_SPL_TOKEN_ADDRESSES:{SOL:"So11111111111111111111111111111111111111112"},NATIVE_IMAGE_IDS_BY_NAMESPACE:{eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"3e8119e5-2a6f-4818-c50c-1937011d5900",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00"},TOKEN_SYMBOLS_BY_ADDRESS:{"0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48":"USDC","0x833589fcd6edb6e08f4c7c32d4f71b54bda02913":"USDC","0x0b2c639c533813f4aa9d7837caf62653d097ff85":"USDC","0xaf88d065e77c8cc2239327c5edb3a432268e5831":"USDC","0x3c499c542cef5e3811e1192ce70d8cc03d5c3359":"USDC","0x2791bca1f2de4661ed88a30c99a7a9449aa84174":"USDC",EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v:"USDC","0xdac17f958d2ee523a2206206994597c13d831ec7":"USDT","0x94b008aa00579c1307b0ef2c499ad98a8ce58e58":"USDT","0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9":"USDT","0xc2132d05d31c914a87c6611c10748aeb04b58e8f":"USDT",Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB:"USDT"},HTTP_STATUS_CODES:{SERVER_ERROR:500,TOO_MANY_REQUESTS:429,SERVICE_UNAVAILABLE:503,FORBIDDEN:403},UNSUPPORTED_NETWORK_NAME:"Unknown Network",SECURE_SITE_SDK_ORIGIN:("undefined"!==typeof yt?{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",REMOTE_FEATURES_ALERTS:{MULTI_WALLET_NOT_ENABLED:{DEFAULT:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com."},CONNECTIONS_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook."},CONNECTION_HOOK:{displayMessage:"Multi-Wallet Not Enabled",debugMessage:"Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook."}},HEADLESS_NOT_ENABLED:{DEFAULT:{displayMessage:"",debugMessage:"Headless support is not enabled. Please enable it with the features.headless option in the AppKit configuration and make sure your current plan supports it."}}},IS_DEVELOPMENT:"undefined"!==typeof yt&&!1,DEFAULT_ALLOWED_ANCESTORS:["http://localhost:*","https://localhost:*","http://127.0.0.1:*","https://127.0.0.1:*","https://*.pages.dev","https://*.vercel.app","https://*.ngrok-free.app","https://secure-mobile.walletconnect.com","https://secure-mobile.walletconnect.org"],METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH"},bt={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,parseEvmChainId(e){return"string"===typeof e?this.caipNetworkIdToNumber(e):e},getNetworksByNamespace:(e,t)=>(null===e||void 0===e?void 0:e.filter((e=>e.chainNamespace===t)))||[],getFirstNetworkByNamespace(e,t){return this.getNetworksByNamespace(e,t)[0]},getNetworkNameByCaipNetworkId(e,t){var n;if(!t)return;const a=e.find((e=>e.caipNetworkId===t));if(a)return a.name;const[o]=t.split(":");return(null===(n=ft.CHAIN_NAME_MAP)||void 0===n?void 0:n[o])||void 0}},Ct=["eip155","solana","polkadot","bip122","cosmos","sui","stacks"];function kt(e,t){var n;const a=null!==(n=null===e||void 0===e?void 0:e["--apkt-accent"])&&void 0!==n?n:null===e||void 0===e?void 0:e["--w3m-accent"];return"light"===t?{"--w3m-accent":a||"hsla(231, 100%, 70%, 1)","--w3m-background":"#fff"}:{"--w3m-accent":a||"hsla(230, 100%, 67%, 1)","--w3m-background":"#202020"}}n(1426);const Et="@appkit-wallet/",At="LAST_EMAIL_LOGIN_TIME",Nt="SMART_ACCOUNT_ENABLED_NETWORKS",It="RPC_RESPONSE_TRANSACTION_HASH",Tt="RPC_RESPONSE_OBJECT",St={SAFE_RPC_METHODS:["eth_accounts","eth_blockNumber","eth_call","eth_chainId","eth_estimateGas","eth_feeHistory","eth_gasPrice","eth_getAccount","eth_getBalance","eth_getBlockByHash","eth_getBlockByNumber","eth_getBlockReceipts","eth_getBlockTransactionCountByHash","eth_getBlockTransactionCountByNumber","eth_getCode","eth_getFilterChanges","eth_getFilterLogs","eth_getLogs","eth_getProof","eth_getStorageAt","eth_getTransactionByBlockHashAndIndex","eth_getTransactionByBlockNumberAndIndex","eth_getTransactionByHash","eth_getTransactionCount","eth_getTransactionReceipt","eth_getUncleCountByBlockHash","eth_getUncleCountByBlockNumber","eth_maxPriorityFeePerGas","eth_newBlockFilter","eth_newFilter","eth_newPendingTransactionFilter","eth_sendRawTransaction","eth_syncing","eth_uninstallFilter","wallet_getCapabilities","wallet_getCallsStatus","eth_getUserOperationReceipt","eth_estimateUserOperationGas","eth_getUserOperationByHash","eth_supportedEntryPoints","wallet_getAssets"],NOT_SAFE_RPC_METHODS:["personal_sign","eth_signTypedData_v4","eth_sendTransaction","solana_signMessage","solana_signTransaction","solana_signAllTransactions","solana_signAndSendTransaction","wallet_sendCalls","wallet_grantPermissions","wallet_revokePermissions","eth_sendUserOperation"],GET_CHAIN_ID:"eth_chainId",RPC_METHOD_NOT_ALLOWED_MESSAGE:"Requested RPC call is not allowed",RPC_METHOD_NOT_ALLOWED_UI_MESSAGE:"Action not allowed",ACCOUNT_TYPES:{EOA:"eoa",SMART_ACCOUNT:"smartAccount"}},xt={validateCaipAddress(e){var t;if(3!==(null===(t=e.split(":"))||void 0===t?void 0:t.length))throw new Error("Invalid CAIP Address");return e},parseCaipAddress(e){const t=e.split(":");if(3!==t.length)throw new Error(`Invalid CAIP-10 address: ${e}`);const[n,a,o]=t;if(!n||!a||!o)throw new Error(`Invalid CAIP-10 address: ${e}`);return{chainNamespace:n,chainId:a,address:o}},parseCaipNetworkId(e){const t=e.split(":");if(2!==t.length)throw new Error(`Invalid CAIP-2 network id: ${e}`);const[n,a]=t;if(!n||!a)throw new Error(`Invalid CAIP-2 network id: ${e}`);return{chainNamespace:n,chainId:a}}},Ot=/^0x(?:[A-Fa-f0-9]{64})$/u,_t=/^0x(?:[a-fA-F0-9]{62,})$/u,Pt=3e4,Rt={checkIfAllowedToTriggerEmail(){const e=Ut.get(At);if(e){const t=Date.now()-Number(e);if(t<Pt){const e=Math.ceil((Pt-t)/1e3);throw new Error(`Please try again after ${e} seconds`)}}},getTimeToNextEmailLogin(){const e=Ut.get(At);if(e){const t=Date.now()-Number(e);if(t<Pt)return Math.ceil((Pt-t)/1e3)}return 0},checkIfRequestExists:e=>St.NOT_SAFE_RPC_METHODS.includes(e.method)||St.SAFE_RPC_METHODS.includes(e.method),getResponseType:e=>"string"===typeof e&&((null===e||void 0===e?void 0:e.match(Ot))||(null===e||void 0===e?void 0:e.match(_t)))?It:Tt,checkIfRequestIsSafe:e=>St.SAFE_RPC_METHODS.includes(e.method),isClient:"undefined"!==typeof window},Ut={set(e,t){Rt.isClient&&localStorage.setItem(`${Et}${e}`,t)},get:e=>Rt.isClient?localStorage.getItem(`${Et}${e}`):null,delete(e,t){Rt.isClient&&(t?localStorage.removeItem(e):localStorage.removeItem(`${Et}${e}`))}};var Dt=n(72512),Bt=n(19585);const $t={ConnectorExplorerIds:{[ft.CONNECTOR_ID.COINBASE]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[ft.CONNECTOR_ID.COINBASE_SDK]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[ft.CONNECTOR_ID.BASE_ACCOUNT]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[ft.CONNECTOR_ID.SAFE]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[ft.CONNECTOR_ID.LEDGER]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927",[ft.CONNECTOR_ID.OKX]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[ft.METMASK_CONNECTOR_NAME]:"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",[ft.TRUST_CONNECTOR_NAME]:"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",[ft.SOLFLARE_CONNECTOR_NAME]:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",[ft.PHANTOM_CONNECTOR_NAME]:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",[ft.COIN98_CONNECTOR_NAME]:"2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01",[ft.MAGIC_EDEN_CONNECTOR_NAME]:"8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6",[ft.BACKPACK_CONNECTOR_NAME]:"2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0",[ft.BITGET_CONNECTOR_NAME]:"38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662",[ft.FRONTIER_CONNECTOR_NAME]:"85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041",[ft.XVERSE_CONNECTOR_NAME]:"2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b",[ft.LEATHER_CONNECTOR_NAME]:"483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13",[ft.OKX_CONNECTOR_NAME]:"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",[ft.BINANCE_CONNECTOR_NAME]:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25"},NetworkImageIds:{1:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",42161:"3bff954d-5cb0-47a0-9a23-d20192e74600",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",5e3:"e86fae9b-b770-4eea-e520-150e12c81100",295:"6a97d510-cac8-4e58-c7ce-e8681b044c00",11155111:"e909ea0a-f92a-4512-c8fc-748044ea6800",84532:"a18a7ecd-e307-4360-4746-283182228e00",1301:"4eeea7ef-0014-4649-5d1d-07271a80f600",130:"2257980a-3463-48c6-cbac-a42d2a956e00",10143:"0a728e83-bacb-46db-7844-948f05434900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100",2020:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",2021:"b8101fc0-9c19-4b6f-ec65-f6dfff106e00",80094:"e329c2c9-59b0-4a02-83e4-212ff3779900",2741:"fc2427d1-5af9-4a9c-8da5-6f94627cd900","5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":"a1b58899-f671-4276-6a5e-56ca5bd59700","4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":"a1b58899-f671-4276-6a5e-56ca5bd59700",EtWTRABZaYq6iMfeYKouRu166VU2xqa1:"a1b58899-f671-4276-6a5e-56ca5bd59700","000000000019d6689c085ae165831e93":"0b4838db-0161-4ffe-022d-532bf03dba00","000000000933ea01ad0ee984209779ba":"39354064-d79b-420b-065d-f980c4b78200","00000008819873e925422c1ff0f99f7c":"b3406e4a-bbfc-44fb-e3a6-89673c78b700","-239":"20f673c0-095e-49b2-07cf-eb5049dcf600","-3":"20f673c0-095e-49b2-07cf-eb5049dcf600"},ConnectorImageIds:{[ft.CONNECTOR_ID.COINBASE]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ft.CONNECTOR_ID.COINBASE_SDK]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[ft.CONNECTOR_ID.BASE_ACCOUNT]:"bba2c8be-7fd1-463e-42b1-796ecb0ad200",[ft.CONNECTOR_ID.SAFE]:"461db637-8616-43ce-035a-d89b8a1d5800",[ft.CONNECTOR_ID.LEDGER]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[ft.CONNECTOR_ID.WALLET_CONNECT]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[ft.CONNECTOR_ID.INJECTED]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[ft.CONNECTOR_ID.INJECTED]:"Browser Wallet",[ft.CONNECTOR_ID.WALLET_CONNECT]:"WalletConnect",[ft.CONNECTOR_ID.COINBASE]:"Coinbase",[ft.CONNECTOR_ID.COINBASE_SDK]:"Coinbase",[ft.CONNECTOR_ID.BASE_ACCOUNT]:"Base Account",[ft.CONNECTOR_ID.LEDGER]:"Ledger",[ft.CONNECTOR_ID.SAFE]:"Safe"},ConnectorTypesMap:{[ft.CONNECTOR_ID.INJECTED]:"INJECTED",[ft.CONNECTOR_ID.WALLET_CONNECT]:"WALLET_CONNECT",[ft.CONNECTOR_ID.EIP6963]:"ANNOUNCED",[ft.CONNECTOR_ID.AUTH]:"AUTH"},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]};const Mt=("undefined"!==typeof n(1426)?{NODE_ENV:"production",PUBLIC_URL:".",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",Wt={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,FIVE_SEC_MS:5e3,THREE_SEC_MS:3e3,ONE_SEC_MS:1e3,SECURE_SITE:Mt,SECURE_SITE_DASHBOARD:`${Mt}/dashboard`,SECURE_SITE_FAVICON:`${Mt}/images/favicon.png`,SOLANA_NATIVE_TOKEN_ADDRESS:"So11111111111111111111111111111111111111111",RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"],SWAP_SUGGESTED_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP"],SWAP_POPULAR_TOKENS:["ETH","UNI","1INCH","AAVE","SOL","ADA","AVAX","DOT","LINK","NITRO","GAIA","MILK","TRX","NEAR","GNO","WBTC","DAI","WETH","USDC","USDT","ARB","BAL","BICO","CRV","ENS","MATIC","OP","METAL","DAI","CHAMP","WOLF","SALE","BAL","BUSD","MUST","BTCpx","ROUTE","HEX","WELT","amDAI","VSQ","VISION","AURUM","pSP","SNX","VC","LINK","CHP","amUSDT","SPHERE","FOX","GIDDY","GFC","OMEN","OX_OLD","DE","WNT"],SUGGESTED_TOKENS_BY_CHAIN:{"eip155:42161":["USD\u20ae0"]},BALANCE_SUPPORTED_CHAINS:[ft.CHAIN.EVM,ft.CHAIN.SOLANA],SEND_PARAMS_SUPPORTED_CHAINS:[ft.CHAIN.EVM],SWAP_SUPPORTED_NETWORKS:["eip155:1","eip155:42161","eip155:10","eip155:324","eip155:8453","eip155:56","eip155:137","eip155:100","eip155:43114","eip155:250","eip155:8217","eip155:1313161554"],NAMES_SUPPORTED_CHAIN_NAMESPACES:[ft.CHAIN.EVM],ONRAMP_SUPPORTED_CHAIN_NAMESPACES:[ft.CHAIN.EVM,ft.CHAIN.SOLANA],PAY_WITH_EXCHANGE_SUPPORTED_CHAIN_NAMESPACES:[ft.CHAIN.EVM,ft.CHAIN.SOLANA],ACTIVITY_ENABLED_CHAIN_NAMESPACES:[ft.CHAIN.EVM,ft.CHAIN.TON],NATIVE_TOKEN_ADDRESS:{eip155:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",solana:"So11111111111111111111111111111111111111111",polkadot:"0x",bip122:"0x",cosmos:"0x",sui:"0x",stacks:"0x",ton:"0x"},CONVERT_SLIPPAGE_TOLERANCE:1,CONNECT_LABELS:{MOBILE:"Open and continue in the wallet app",WEB:"Open and continue in the wallet app"},SEND_SUPPORTED_NAMESPACES:[ft.CHAIN.EVM,ft.CHAIN.SOLANA],DEFAULT_REMOTE_FEATURES:{swaps:["1inch"],onramp:["meld"],email:!0,socials:["google","x","discord","farcaster","github","apple","facebook"],activity:!0,reownBranding:!0,multiWallet:!1,emailCapture:!1,payWithExchange:!1,payments:!1,reownAuthentication:!1,headless:!1},DEFAULT_REMOTE_FEATURES_DISABLED:{email:!1,socials:!1,swaps:!1,onramp:!1,activity:!1,reownBranding:!1,emailCapture:!1,reownAuthentication:!1,headless:!1},DEFAULT_FEATURES:{receive:!0,send:!0,emailShowWallets:!0,connectorTypeOrder:["walletConnect","recent","injected","featured","custom","external","recommended"],analytics:!0,allWallets:!0,legalCheckbox:!1,smartSessions:!1,collapseWallets:!1,walletFeaturesOrder:["onramp","swaps","receive","send"],connectMethodsOrder:void 0,pay:!1,reownAuthentication:!1,headless:!1},DEFAULT_SOCIALS:["google","x","farcaster","discord","apple","github","facebook"],DEFAULT_ACCOUNT_TYPES:{bip122:"payment",eip155:"smartAccount",polkadot:"eoa",solana:"eoa",ton:"eoa"},ADAPTER_TYPES:{UNIVERSAL:"universal",SOLANA:"solana",WAGMI:"wagmi",ETHERS:"ethers",ETHERS5:"ethers5",BITCOIN:"bitcoin"},SIWX_DEFAULTS:{signOutOnDisconnect:!0},MANDATORY_WALLET_IDS_ON_MOBILE:[$t.ConnectorExplorerIds[ft.CONNECTOR_ID.COINBASE],$t.ConnectorExplorerIds[ft.CONNECTOR_ID.COINBASE_SDK],$t.ConnectorExplorerIds[ft.CONNECTOR_ID.BASE_ACCOUNT],$t.ConnectorExplorerIds[ft.SOLFLARE_CONNECTOR_NAME],$t.ConnectorExplorerIds[ft.PHANTOM_CONNECTOR_NAME],$t.ConnectorExplorerIds[ft.BINANCE_CONNECTOR_NAME]],DEFAULT_CONNECT_METHOD_ORDER:["email","social","wallet"]},Lt="@appkit/active_caip_network_id",Ft="@appkit/connected_social",jt="@appkit-wallet/SOCIAL_USERNAME",Ht="@appkit/recent_wallets",Vt="@appkit/recent_wallet",Kt="WALLETCONNECT_DEEPLINK_CHOICE",qt="@appkit/active_namespace",zt="@appkit/connected_namespaces",Gt="@appkit/connection_status",Jt="@appkit/social_provider",Yt="@appkit/native_balance_cache",Qt="@appkit/portfolio_cache",Xt="@appkit/ens_cache",Zt="@appkit/identity_cache",en="@appkit/preferred_account_types",tn="@appkit/connections",nn="@appkit/disconnected_connector_ids",an="@appkit/history_transactions_cache",on="@appkit/token_price_cache",rn="@appkit/latest_version",sn="@appkit/ton_wallets_cache";function cn(e){if(!e)throw new Error("Namespace is required for CONNECTED_CONNECTOR_ID");return`@appkit/${e}:connected_connector_id`}const ln={setItem(e,t){dn()&&void 0!==t&&localStorage.setItem(e,t)},getItem(e){if(dn())return localStorage.getItem(e)||void 0},removeItem(e){dn()&&localStorage.removeItem(e)},clear(){dn()&&localStorage.clear()}};function dn(){return"undefined"!==typeof window&&"undefined"!==typeof localStorage}const un={cacheExpiry:{portfolio:3e4,nativeBalance:3e4,ens:3e5,identity:3e5,transactionsHistory:15e3,tokenPrice:15e3,latestAppKitVersion:6048e5,tonWallets:864e5},isCacheExpired:(e,t)=>Date.now()-e>t,getActiveNetworkProps(){const e=un.getActiveNamespace(),t=un.getActiveCaipNetworkId(),n=t?t.split(":")[1]:void 0;return{namespace:e,caipNetworkId:t,chainId:n?isNaN(Number(n))?n:Number(n):void 0}},setWalletConnectDeepLink(e){let{name:t,href:n}=e;try{ln.setItem(Kt,JSON.stringify({href:n,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=ln.getItem(Kt);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{ln.removeItem(Kt)}catch{console.info("Unable to delete WalletConnect deep link")}},setActiveNamespace(e){try{ln.setItem(qt,e)}catch{console.info("Unable to set active namespace")}},setActiveCaipNetworkId(e){try{ln.setItem(Lt,e),un.setActiveNamespace(e.split(":")[0])}catch{console.info("Unable to set active caip network id")}},getActiveCaipNetworkId(){try{return ln.getItem(Lt)}catch{return void console.info("Unable to get active caip network id")}},deleteActiveCaipNetworkId(){try{ln.removeItem(Lt)}catch{console.info("Unable to delete active caip network id")}},deleteConnectedConnectorId(e){try{const t=cn(e);ln.removeItem(t)}catch{console.info("Unable to delete connected connector id")}},setAppKitRecent(e){try{const t=un.getRecentWallets();t.find((t=>t.id===e.id))||(t.unshift(e),t.length>2&&t.pop(),ln.setItem(Ht,JSON.stringify(t)),ln.setItem(Vt,JSON.stringify(e)))}catch{console.info("Unable to set AppKit recent")}},getRecentWallets(){try{const e=ln.getItem(Ht);return e?JSON.parse(e):[]}catch{console.info("Unable to get AppKit recent")}return[]},getRecentWallet(){try{const e=ln.getItem(Vt);return e?JSON.parse(e):null}catch{console.info("Unable to get AppKit recent")}return null},deleteRecentWallet(){try{ln.removeItem(Vt)}catch{console.info("Unable to delete AppKit recent")}},setConnectedConnectorId(e,t){try{const n=cn(e);ln.setItem(n,t)}catch{console.info("Unable to set Connected Connector Id")}},getActiveNamespace(){try{return ln.getItem(qt)}catch{console.info("Unable to get active namespace")}},getConnectedConnectorId(e){if(e)try{const t=cn(e);return ln.getItem(t)}catch(t){console.info("Unable to get connected connector id in namespace",e)}},setConnectedSocialProvider(e){try{ln.setItem(Ft,e)}catch{console.info("Unable to set connected social provider")}},getConnectedSocialProvider(){try{return ln.getItem(Ft)}catch{console.info("Unable to get connected social provider")}},deleteConnectedSocialProvider(){try{ln.removeItem(Ft)}catch{console.info("Unable to delete connected social provider")}},getConnectedSocialUsername(){try{return ln.getItem(jt)}catch{console.info("Unable to get connected social username")}},getStoredActiveCaipNetworkId(){var e;const t=ln.getItem(Lt);return null===t||void 0===t||null===(e=t.split(":"))||void 0===e?void 0:e[1]},setConnectionStatus(e){try{ln.setItem(Gt,e)}catch{console.info("Unable to set connection status")}},getConnectionStatus(){try{return ln.getItem(Gt)}catch{return}},getConnectedNamespaces(){try{const e=ln.getItem(zt);return null!==e&&void 0!==e&&e.length?e.split(","):[]}catch{return[]}},setConnectedNamespaces(e){try{const t=Array.from(new Set(e));ln.setItem(zt,t.join(","))}catch{console.info("Unable to set namespaces in storage")}},addConnectedNamespace(e){try{const t=un.getConnectedNamespaces();t.includes(e)||(t.push(e),un.setConnectedNamespaces(t))}catch{console.info("Unable to add connected namespace")}},removeConnectedNamespace(e){try{const t=un.getConnectedNamespaces(),n=t.indexOf(e);n>-1&&(t.splice(n,1),un.setConnectedNamespaces(t))}catch{console.info("Unable to remove connected namespace")}},getTelegramSocialProvider(){try{return ln.getItem(Jt)}catch{return console.info("Unable to get telegram social provider"),null}},setTelegramSocialProvider(e){try{ln.setItem(Jt,e)}catch{console.info("Unable to set telegram social provider")}},removeTelegramSocialProvider(){try{ln.removeItem(Jt)}catch{console.info("Unable to remove telegram social provider")}},getBalanceCache(){let e={};try{const t=ln.getItem(Qt);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromBalanceCache(e){try{const t=un.getBalanceCache();ln.setItem(Qt,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getBalanceCacheForCaipAddress(e){try{const t=un.getBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.portfolio))return t.balance;un.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateBalanceCache(e){try{const t=un.getBalanceCache();t[e.caipAddress]=e,ln.setItem(Qt,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getNativeBalanceCache(){let e={};try{const t=ln.getItem(Yt);e=t?JSON.parse(t):{}}catch{console.info("Unable to get balance cache")}return e},removeAddressFromNativeBalanceCache(e){try{const t=un.getBalanceCache();ln.setItem(Yt,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove address from balance cache",e)}},getNativeBalanceCacheForCaipAddress(e){try{const t=un.getNativeBalanceCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.nativeBalance))return t;console.info("Discarding cache for address",e),un.removeAddressFromBalanceCache(e)}catch{console.info("Unable to get balance cache for address",e)}},updateNativeBalanceCache(e){try{const t=un.getNativeBalanceCache();t[e.caipAddress]=e,ln.setItem(Yt,JSON.stringify(t))}catch{console.info("Unable to update balance cache",e)}},getEnsCache(){let e={};try{const t=ln.getItem(Xt);e=t?JSON.parse(t):{}}catch{console.info("Unable to get ens name cache")}return e},getEnsFromCacheForAddress(e){try{const t=un.getEnsCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.ens))return t.ens;un.removeEnsFromCache(e)}catch{console.info("Unable to get ens name from cache",e)}},updateEnsCache(e){try{const t=un.getEnsCache();t[e.address]=e,ln.setItem(Xt,JSON.stringify(t))}catch{console.info("Unable to update ens name cache",e)}},removeEnsFromCache(e){try{const t=un.getEnsCache();ln.setItem(Xt,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove ens name from cache",e)}},getIdentityCache(){let e={};try{const t=ln.getItem(Zt);e=t?JSON.parse(t):{}}catch{console.info("Unable to get identity cache")}return e},getIdentityFromCacheForAddress(e){try{const t=un.getIdentityCache()[e];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.identity))return t.identity;un.removeIdentityFromCache(e)}catch{console.info("Unable to get identity from cache",e)}},updateIdentityCache(e){try{const t=un.getIdentityCache();t[e.address]={identity:e.identity,timestamp:e.timestamp},ln.setItem(Zt,JSON.stringify(t))}catch{console.info("Unable to update identity cache",e)}},removeIdentityFromCache(e){try{const t=un.getIdentityCache();ln.setItem(Zt,JSON.stringify({...t,[e]:void 0}))}catch{console.info("Unable to remove identity from cache",e)}},getTonWalletsCache(){try{const e=ln.getItem(sn),t=e?JSON.parse(e):void 0;if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.tonWallets))return t;un.removeTonWalletsCache()}catch{console.info("Unable to get ton wallets cache")}},updateTonWalletsCache(e){try{const t=un.getTonWalletsCache()||{timestamp:0,wallets:[]};t.timestamp=(new Date).getTime(),t.wallets=e,ln.setItem(sn,JSON.stringify(t))}catch{console.info("Unable to update ton wallets cache",e)}},removeTonWalletsCache(){try{ln.removeItem(sn)}catch{console.info("Unable to remove ton wallets cache")}},clearAddressCache(){try{ln.removeItem(Qt),ln.removeItem(Yt),ln.removeItem(Xt),ln.removeItem(Zt),ln.removeItem(an)}catch{console.info("Unable to clear address cache")}},setPreferredAccountTypes(e){try{ln.setItem(en,JSON.stringify(e))}catch{console.info("Unable to set preferred account types",e)}},getPreferredAccountTypes(){try{const e=ln.getItem(en);return e?JSON.parse(e):{}}catch{console.info("Unable to get preferred account types")}return{}},setConnections(e,t){try{var n;const a=un.getConnections(),o=null!==(n=a[t])&&void 0!==n?n:[],i=new Map;for(const e of o)i.set(e.connectorId,{...e});for(const t of e){const e=i.get(t.connectorId),n=t.connectorId===ft.CONNECTOR_ID.AUTH;if(e&&!n){const n=new Set(e.accounts.map((e=>e.address.toLowerCase()))),a=t.accounts.filter((e=>!n.has(e.address.toLowerCase())));e.accounts.push(...a)}else i.set(t.connectorId,{...t})}const r={...a,[t]:Array.from(i.values())};ln.setItem(tn,JSON.stringify(r))}catch(a){console.error("Unable to sync connections to storage",a)}},getConnections(){try{const e=ln.getItem(tn);return e?JSON.parse(e):{}}catch(e){return console.error("Unable to get connections from storage",e),{}}},deleteAddressFromConnection(e){let{connectorId:t,address:n,namespace:a}=e;try{var o;const e=un.getConnections(),i=null!==(o=e[a])&&void 0!==o?o:[],r=new Map(i.map((e=>[e.connectorId,e]))),s=r.get(t);if(s){0===s.accounts.filter((e=>e.address.toLowerCase()!==n.toLowerCase())).length?r.delete(t):r.set(t,{...s,accounts:s.accounts.filter((e=>e.address.toLowerCase()!==n.toLowerCase()))})}ln.setItem(tn,JSON.stringify({...e,[a]:Array.from(r.values())}))}catch{console.error(`Unable to remove address "${n}" from connector "${t}" in namespace "${a}"`)}},getDisconnectedConnectorIds(){try{const e=ln.getItem(nn);return e?JSON.parse(e):{}}catch{console.info("Unable to get disconnected connector ids")}return{}},addDisconnectedConnectorId(e,t){try{var n;const a=un.getDisconnectedConnectorIds(),o=null!==(n=a[t])&&void 0!==n?n:[];o.push(e),ln.setItem(nn,JSON.stringify({...a,[t]:Array.from(new Set(o))}))}catch{console.error(`Unable to set disconnected connector id "${e}" for namespace "${t}"`)}},removeDisconnectedConnectorId(e,t){try{var n;const a=un.getDisconnectedConnectorIds();let o=null!==(n=a[t])&&void 0!==n?n:[];o=o.filter((t=>t.toLowerCase()!==e.toLowerCase())),ln.setItem(nn,JSON.stringify({...a,[t]:Array.from(new Set(o))}))}catch{console.error(`Unable to remove disconnected connector id "${e}" for namespace "${t}"`)}},isConnectorDisconnected(e,t){try{var n;const a=un.getDisconnectedConnectorIds();return(null!==(n=a[t])&&void 0!==n?n:[]).some((t=>t.toLowerCase()===e.toLowerCase()))}catch{console.info(`Unable to get disconnected connector id "${e}" for namespace "${t}"`)}return!1},getTransactionsCache(){try{const e=ln.getItem(an);return e?JSON.parse(e):{}}catch{console.info("Unable to get transactions cache")}return{}},getTransactionsCacheForAddress(e){let{address:t,chainId:n=""}=e;try{var a;const e=null===(a=un.getTransactionsCache()[t])||void 0===a?void 0:a[n];if(e&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.transactionsHistory))return e.transactions;un.removeTransactionsCache({address:t,chainId:n})}catch{console.info("Unable to get transactions cache")}},updateTransactionsCache(e){let{address:t,chainId:n="",timestamp:a,transactions:o}=e;try{const e=un.getTransactionsCache();e[t]={...e[t],[n]:{timestamp:a,transactions:o}},ln.setItem(an,JSON.stringify(e))}catch{console.info("Unable to update transactions cache",{address:t,chainId:n,timestamp:a,transactions:o})}},removeTransactionsCache(e){let{address:t,chainId:n}=e;try{const e=un.getTransactionsCache(),a=(null===e||void 0===e?void 0:e[t])||{},{[n]:o,...i}=a;ln.setItem(an,JSON.stringify({...e,[t]:i}))}catch{console.info("Unable to remove transactions cache",{address:t,chainId:n})}},getTokenPriceCache(){try{const e=ln.getItem(on);return e?JSON.parse(e):{}}catch{console.info("Unable to get token price cache")}return{}},getTokenPriceCacheForAddresses(e){try{const t=un.getTokenPriceCache()[e.join(",")];if(t&&!this.isCacheExpired(t.timestamp,this.cacheExpiry.tokenPrice))return t.tokenPrice;un.removeTokenPriceCache(e)}catch{console.info("Unable to get token price cache for addresses",e)}},updateTokenPriceCache(e){try{const t=un.getTokenPriceCache();t[e.addresses.join(",")]={timestamp:e.timestamp,tokenPrice:e.tokenPrice},ln.setItem(on,JSON.stringify(t))}catch{console.info("Unable to update token price cache",e)}},removeTokenPriceCache(e){try{const t=un.getTokenPriceCache();ln.setItem(on,JSON.stringify({...t,[e.join(",")]:void 0}))}catch{console.info("Unable to remove token price cache",e)}},getLatestAppKitVersion(){try{const e=this.getLatestAppKitVersionCache(),t=null===e||void 0===e?void 0:e.version;return t&&!this.isCacheExpired(e.timestamp,this.cacheExpiry.latestAppKitVersion)?t:void 0}catch{console.info("Unable to get latest AppKit version")}},getLatestAppKitVersionCache(){try{const e=ln.getItem(rn);return e?JSON.parse(e):{}}catch{console.info("Unable to get latest AppKit version cache")}return{}},updateLatestAppKitVersion(e){try{const t=un.getLatestAppKitVersionCache();t.timestamp=e.timestamp,t.version=e.version,ln.setItem(rn,JSON.stringify(t))}catch{console.info("Unable to update latest AppKit version on local storage",e)}}},pn={getWindow(){if("undefined"!==typeof window)return window},isMobile(){var e,t;return!!this.isClient()&&Boolean((null===(e=window)||void 0===e?void 0:e.matchMedia)&&"function"===typeof window.matchMedia&&(null===(t=window.matchMedia("(pointer:coarse)"))||void 0===t?void 0:t.matches)||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent))},checkCaipNetwork(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return null===e||void 0===e?void 0:e.caipNetworkId.toLocaleLowerCase().includes(t.toLowerCase())},isAndroid(){var e;if(!this.isMobile())return!1;const t=null===(e=window)||void 0===e?void 0:e.navigator.userAgent.toLowerCase();return pn.isMobile()&&t.includes("android")},isIos(){var e;if(!this.isMobile())return!1;const t=null===(e=window)||void 0===e?void 0:e.navigator.userAgent.toLowerCase();return t.includes("iphone")||t.includes("ipad")},isSafari(){var e;if(!this.isClient())return!1;return(null===(e=window)||void 0===e?void 0:e.navigator.userAgent.toLowerCase()).includes("safari")},isClient:()=>"undefined"!==typeof window,isPairingExpired:e=>!e||e-Date.now()<=Wt.TEN_SEC_MS,isAllowedRetry(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Wt.ONE_SEC_MS;return Date.now()-e>=t},copyToClopboard(e){navigator.clipboard.writeText(e)},isIframe(){try{var e,t;return(null===(e=window)||void 0===e?void 0:e.self)!==(null===(t=window)||void 0===t?void 0:t.top)}catch(n){return!1}},isSafeApp(){if(pn.isClient()&&window.self!==window.top)try{var e,t,n;const a=null===(e=window)||void 0===e||null===(t=e.location)||void 0===t||null===(n=t.ancestorOrigins)||void 0===n?void 0:n[0],o="https://app.safe.global";if(a){const e=new URL(a),t=new URL(o);return e.hostname===t.hostname}}catch{return!1}return!1},getPairingExpiry:()=>Date.now()+Wt.FOUR_MINUTES_MS,getNetworkId:e=>null===e||void 0===e?void 0:e.split(":")[1],getPlainAddress:e=>null===e||void 0===e?void 0:e.split(":")[2],wait:async e=>new Promise((t=>{setTimeout(t,e)})),debounce(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500;return function(){for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];function r(){e(...o)}t&&clearTimeout(t),t=setTimeout(r,n)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){var n;let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(pn.isHttpUrl(e))return this.formatUniversalUrl(e,t);let o=e,i=a;o.includes("://")||(o=e.replaceAll("/","").replaceAll(":",""),o=`${o}://`),o.endsWith("/")||(o=`${o}/`),!i||null!==(n=i)&&void 0!==n&&n.endsWith("/")||(i=`${i}/`),this.isTelegram()&&this.isAndroid()&&(t=encodeURIComponent(t));const r=encodeURIComponent(t);return{redirect:`${o}wc?uri=${r}`,redirectUniversalLink:i?`${i}wc?uri=${r}`:void 0,href:o}},formatUniversalUrl(e,t){if(!pn.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);return{redirect:`${n}wc?uri=${encodeURIComponent(t)}`,href:n}},getOpenTargetForPlatform(e){return"popupWindow"===e?e:this.isTelegram()?un.getTelegramSocialProvider()?"_top":"_blank":e},openHref(e,t,n){var a;null===(a=window)||void 0===a||a.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},returnOpenHref(e,t,n){var a;return null===(a=window)||void 0===a?void 0:a.open(e,this.getOpenTargetForPlatform(t),n||"noreferrer noopener")},isTelegram:()=>"undefined"!==typeof window&&(Boolean(window.TelegramWebviewProxy)||Boolean(window.Telegram)||Boolean(window.TelegramWebviewProxyProto)),isPWA(){var e,t,n,a;if("undefined"===typeof window)return!1;const o=!(null===(e=window)||void 0===e||!e.matchMedia||"function"!==typeof window.matchMedia)&&(null===(t=window.matchMedia("(display-mode: standalone)"))||void 0===t?void 0:t.matches),i=null===(n=window)||void 0===n||null===(a=n.navigator)||void 0===a?void 0:a.standalone;return Boolean(o||i)},async preloadImage(e){const t=new Promise(((t,n)=>{const a=new Image;a.onload=t,a.onerror=n,a.crossOrigin="anonymous",a.src=e}));return Promise.race([t,pn.wait(2e3)])},parseBalance(e,t){let n="0.000";if("string"===typeof e){const t=Number(e);if(!isNaN(t)){const e=(Math.floor(1e3*t)/1e3).toFixed(3);e&&(n=e)}}const[a,o]=n.split("."),i=a||"0",r=o||"000";return{formattedText:`${i}.${r}${t?` ${t}`:""}`,value:i,decimals:r,symbol:t}},getApiUrl:()=>ft.W3M_API_URL,getBlockchainApiUrl:()=>ft.BLOCKCHAIN_API_RPC_URL,getAnalyticsUrl:()=>ft.PULSE_API_URL,getUUID(){var e;return null!==(e=crypto)&&void 0!==e&&e.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,(e=>{const t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)}))},parseError(e){var t,n;return"string"===typeof e?e:"string"===typeof(null===e||void 0===e||null===(t=e.issues)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.message)?e.issues[0].message:e instanceof Error?e.message:"Unknown error"},sortRequestedNetworks(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];const n={};return t&&e&&(e.forEach(((e,t)=>{n[e]=t})),t.sort(((e,t)=>{const a=n[e.id],o=n[t.id];return void 0!==a&&void 0!==o?a-o:void 0!==a?-1:void 0!==o?1:0}))),t},calculateBalance(e){let t=0;for(const a of e){var n;t+=null!==(n=a.value)&&void 0!==n?n:0}return t},formatTokenBalance(e){const t=e.toFixed(2),[n,a]=t.split(".");return{dollars:n,pennies:a}},isAddress(e){switch(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"eip155"){case"eip155":return!!/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&!(!/^(?:0x)?[0-9a-f]{40}$/iu.test(e)&&!/^(?:0x)?[0-9A-F]{40}$/iu.test(e));case"solana":return/[1-9A-HJ-NP-Za-km-z]{32,44}$/iu.test(e);case"bip122":{const t=/^[1][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),n=/^[3][a-km-zA-HJ-NP-Z1-9]{25,34}$/u.test(e),a=/^bc1[a-z0-9]{39,87}$/u.test(e),o=/^bc1p[a-z0-9]{58}$/u.test(e);return t||n||a||o}default:return!1}},uniqueBy(e,t){const n=new Set;return e.filter((e=>{const a=e[t];return!n.has(a)&&(n.add(a),!0)}))},generateSdkVersion:(e,t,n)=>`${t}-${0===e.length?Wt.ADAPTER_TYPES.UNIVERSAL:e.map((e=>e.adapterType)).join(",")}-${n}`,createAccount:(e,t,n,a,o)=>({namespace:e,address:t,type:n,publicKey:a,path:o}),isCaipAddress(e){if("string"!==typeof e)return!1;const t=e.split(":"),n=t[0];return 3===t.filter(Boolean).length&&n in ft.CHAIN_NAME_MAP},getAccount:e=>e?"string"===typeof e?{address:e,chainId:void 0}:{address:e.address,chainId:e.chainId}:{address:void 0,chainId:void 0},isMac(){var e;const t=null===(e=window)||void 0===e?void 0:e.navigator.userAgent.toLowerCase();return t.includes("macintosh")&&!t.includes("safari")},formatTelegramSocialLoginUrl(e){var t;const n=`--${encodeURIComponent(null===(t=window)||void 0===t?void 0:t.location.href)}`,a="state=";if("auth.magic.link"===new URL(e).host){const t="provider_authorization_url=",o=e.substring(e.indexOf(t)+t.length),i=this.injectIntoUrl(decodeURIComponent(o),a,n);return e.replace(o,encodeURIComponent(i))}return this.injectIntoUrl(e,a,n)},injectIntoUrl(e,t,n){const a=e.indexOf(t);if(-1===a)throw new Error(`${t} parameter not found in the URL: ${e}`);const o=e.indexOf("&",a),i=t.length,r=-1!==o?o:e.length;return e.substring(0,a+i)+(e.substring(a+i,r)+n)+e.substring(o)},isNumber:e=>("number"===typeof e||"string"===typeof e)&&!isNaN(Number(e))};async function mn(){const e=await fetch(...arguments);if(!e.ok){throw new Error(`HTTP status code: ${e.status}`,{cause:e})}return e}class hn{constructor(e){let{baseUrl:t,clientId:n}=e;this.baseUrl=t,this.clientId=n}async get(e){let{headers:t,signal:n,cache:a,...o}=e;const i=this.createUrl(o);return(await mn(i,{method:"GET",headers:t,signal:n,cache:a})).json()}async getBlob(e){let{headers:t,signal:n,...a}=e;const o=this.createUrl(a);return(await mn(o,{method:"GET",headers:t,signal:n})).blob()}async post(e){let{body:t,headers:n,signal:a,...o}=e;const i=this.createUrl(o);return(await mn(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0,signal:a})).json()}async put(e){let{body:t,headers:n,signal:a,...o}=e;const i=this.createUrl(o);return(await mn(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0,signal:a})).json()}async delete(e){let{body:t,headers:n,signal:a,...o}=e;const i=this.createUrl(o);return(await mn(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0,signal:a})).json()}createUrl(e){let{path:t,params:n}=e;const a=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach((e=>{let[t,n]=e;n&&a.searchParams.append(t,n)})),this.clientId&&a.searchParams.append("clientId",this.clientId),a}sendBeacon(e){let{body:t,...n}=e;const a=this.createUrl(n);return navigator.sendBeacon(a.toString(),t?JSON.stringify(t):void 0)}}const vn={getFeatureValue(e,t){const n=null===t||void 0===t?void 0:t[e];return void 0===n?Wt.DEFAULT_FEATURES[e]:n},filterSocialsByPlatform(e){if(!e||!e.length)return e;let t=e;return pn.isTelegram()&&(pn.isIos()&&(t=t.filter((e=>"google"!==e))),pn.isMac()&&(t=t.filter((e=>"x"!==e))),pn.isAndroid()&&(t=t.filter((e=>!["facebook","x"].includes(e))))),pn.isMobile()&&(t=t.filter((e=>"facebook"!==e))),t},isSocialsEnabled(){var e,t,n,a;return Array.isArray(null===(e=wn.state.features)||void 0===e?void 0:e.socials)&&(null===(t=wn.state.features)||void 0===t?void 0:t.socials.length)>0||Array.isArray(null===(n=wn.state.remoteFeatures)||void 0===n?void 0:n.socials)&&(null===(a=wn.state.remoteFeatures)||void 0===a?void 0:a.socials.length)>0},isEmailEnabled(){var e,t;return Boolean((null===(e=wn.state.features)||void 0===e?void 0:e.email)||(null===(t=wn.state.remoteFeatures)||void 0===t?void 0:t.email))}},gn=(0,w.sj)({features:Wt.DEFAULT_FEATURES,projectId:"",sdkType:"appkit",sdkVersion:"html-wagmi-undefined",defaultAccountTypes:Wt.DEFAULT_ACCOUNT_TYPES,enableNetworkSwitch:!0,experimental_preferUniversalLinks:!1,remoteFeatures:{},enableMobileFullScreen:!1,coinbasePreference:"all"}),wn={state:gn,subscribeKey:(e,t)=>(0,y.VW)(gn,e,t),setOptions(e){Object.assign(gn,e)},setRemoteFeatures(e){var t,n;if(!e)return;const a={...gn.remoteFeatures,...e};gn.remoteFeatures=a,null!==(t=gn.remoteFeatures)&&void 0!==t&&t.socials&&(gn.remoteFeatures.socials=vn.filterSocialsByPlatform(gn.remoteFeatures.socials)),null!==(n=gn.features)&&void 0!==n&&n.pay&&(gn.remoteFeatures.email=!1,gn.remoteFeatures.socials=!1)},setFeatures(e){var t;if(!e)return;gn.features||(gn.features=Wt.DEFAULT_FEATURES);const n={...gn.features,...e};gn.features=n,null!==(t=gn.features)&&void 0!==t&&t.pay&&gn.remoteFeatures&&(gn.remoteFeatures.email=!1,gn.remoteFeatures.socials=!1)},setProjectId(e){gn.projectId=e},setCustomRpcUrls(e){gn.customRpcUrls=e},setAllWallets(e){gn.allWallets=e},setIncludeWalletIds(e){gn.includeWalletIds=e},setExcludeWalletIds(e){gn.excludeWalletIds=e},setFeaturedWalletIds(e){gn.featuredWalletIds=e},setTokens(e){gn.tokens=e},setTermsConditionsUrl(e){gn.termsConditionsUrl=e},setPrivacyPolicyUrl(e){gn.privacyPolicyUrl=e},setCustomWallets(e){gn.customWallets=e},setIsSiweEnabled(e){gn.isSiweEnabled=e},setIsUniversalProvider(e){gn.isUniversalProvider=e},setSdkVersion(e){gn.sdkVersion=e},setMetadata(e){gn.metadata=e},setDisableAppend(e){gn.disableAppend=e},setEIP6963Enabled(e){gn.enableEIP6963=e},setDebug(e){gn.debug=e},setEnableWalletGuide(e){gn.enableWalletGuide=e},setEnableAuthLogger(e){gn.enableAuthLogger=e},setEnableWallets(e){gn.enableWallets=e},setPreferUniversalLinks(e){gn.experimental_preferUniversalLinks=e},setSIWX(e){if(e)for(const[n,a]of Object.entries(Wt.SIWX_DEFAULTS)){var t;null!==(t=e[n])&&void 0!==t||(e[n]=a)}gn.siwx=e},setConnectMethodsOrder(e){gn.features={...gn.features,connectMethodsOrder:e}},setWalletFeaturesOrder(e){gn.features={...gn.features,walletFeaturesOrder:e}},setSocialsOrder(e){gn.remoteFeatures={...gn.remoteFeatures,socials:e}},setCollapseWallets(e){gn.features={...gn.features,collapseWallets:e}},setEnableEmbedded(e){gn.enableEmbedded=e},setAllowUnsupportedChain(e){gn.allowUnsupportedChain=e},setManualWCControl(e){gn.manualWCControl=e},setEnableNetworkSwitch(e){gn.enableNetworkSwitch=e},setEnableMobileFullScreen(e){gn.enableMobileFullScreen=pn.isMobile()&&e},setEnableReconnect(e){gn.enableReconnect=e},setCoinbasePreference(e){gn.coinbasePreference=e},setDefaultAccountTypes(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.entries(e).forEach((e=>{let[t,n]=e;n&&(gn.defaultAccountTypes[t]=n)}))},setUniversalProviderConfigOverride(e){gn.universalProviderConfigOverride=e},getUniversalProviderConfigOverride:()=>gn.universalProviderConfigOverride,getSnapshot:()=>(0,w.CO)(gn)},yn=Object.freeze({message:"",variant:"success",svg:void 0,open:!1,autoClose:!0}),fn=(0,w.sj)({...yn}),bn={state:fn,subscribeKey:(e,t)=>(0,y.VW)(fn,e,t),showLoading(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._showMessage({message:e,variant:"loading",...t})},showSuccess(e){this._showMessage({message:e,variant:"success"})},showSvg(e,t){this._showMessage({message:e,svg:t})},showError(e){const t=pn.parseError(e);this._showMessage({message:t,variant:"error"})},hide(){fn.message=yn.message,fn.variant=yn.variant,fn.svg=yn.svg,fn.open=yn.open,fn.autoClose=yn.autoClose},_showMessage(e){let{message:t,svg:n,variant:a="success",autoClose:o=yn.autoClose}=e;fn.open?(fn.open=!1,setTimeout((()=>{fn.message=t,fn.variant=a,fn.svg=n,fn.open=!0,fn.autoClose=o}),150)):(fn.message=t,fn.variant=a,fn.svg=n,fn.open=!0,fn.autoClose=o)}},Cn={purchaseCurrencies:[{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"USD Coin",symbol:"USDC",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]},{id:"2b92315d-eab7-5bef-84fa-089a131333f5",name:"Ether",symbol:"ETH",networks:[{name:"ethereum-mainnet",display_name:"Ethereum",chain_id:"1",contract_address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"},{name:"polygon-mainnet",display_name:"Polygon",chain_id:"137",contract_address:"0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"}]}],paymentCurrencies:[{id:"USD",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]},{id:"EUR",payment_method_limits:[{id:"card",min:"10.00",max:"7500.00"},{id:"ach_bank_account",min:"10.00",max:"25000.00"}]}]},kn=pn.getBlockchainApiUrl(),En=(0,w.sj)({clientId:null,api:new hn({baseUrl:kn,clientId:null}),supportedChains:{http:[],ws:[]}}),An={state:En,async get(e){const{st:t,sv:n}=An.getSdkProperties(),a=wn.state.projectId,o={...e.params||{},st:t,sv:n,projectId:a};return En.api.get({...e,params:o})},getSdkProperties(){const{sdkType:e,sdkVersion:t}=wn.state;return{st:e||"unknown",sv:t||"unknown"}},async isNetworkSupported(e){if(!e)return!1;try{En.supportedChains.http.length||await An.getSupportedNetworks()}catch(t){return!1}return En.supportedChains.http.includes(e)},async getSupportedNetworks(){try{const e=await An.get({path:"v1/supported-chains"});return En.supportedChains=e,e}catch{return En.supportedChains}},async fetchIdentity(e){let{address:t}=e;const n=un.getIdentityFromCacheForAddress(t);if(n)return n;const a=await An.get({path:`/v1/identity/${t}`,params:{sender:Ua.state.activeCaipAddress?pn.getPlainAddress(Ua.state.activeCaipAddress):void 0}});return un.updateIdentityCache({address:t,identity:a,timestamp:Date.now()}),a},async fetchTransactions(e){var t;let{account:n,cursor:a,signal:o,cache:i,chainId:r}=e;if(!await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId))return{data:[],next:void 0};const s=un.getTransactionsCacheForAddress({address:n,chainId:r});if(s)return s;const c=await An.get({path:`/v1/account/${n}/history`,params:{cursor:a,chainId:r},signal:o,cache:i});return un.updateTransactionsCache({address:n,chainId:r,timestamp:Date.now(),transactions:c}),c},async fetchSwapQuote(e){var t;let{amount:n,userAddress:a,from:o,to:i,gasPrice:r}=e;return await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)?An.get({path:"/v1/convert/quotes",headers:{"Content-Type":"application/json"},params:{amount:n,userAddress:a,from:o,to:i,gasPrice:r}}):{quotes:[]}},async fetchSwapTokens(e){var t;let{chainId:n}=e;return await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)?An.get({path:"/v1/convert/tokens",params:{chainId:n}}):{tokens:[]}},async getAddressBalance(e){let{caipNetworkId:t,address:n}=e;return En.api.post({path:`/v1?chainId=${t}&projectId=${wn.state.projectId}`,body:{id:"1",jsonrpc:"2.0",method:"getAddressBalance",params:{address:n}}}).then((e=>e.result))},async fetchTokenPrice(e){var t;let{addresses:n,caipNetworkId:a=(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)}=e;if(!await An.isNetworkSupported(a))return{fungibles:[]};const o=un.getTokenPriceCacheForAddresses(n);if(o)return o;const i=await En.api.post({path:"/v1/fungible/price",body:{currency:"usd",addresses:n,projectId:wn.state.projectId},headers:{"Content-Type":"application/json"}});return un.updateTokenPriceCache({addresses:n,timestamp:Date.now(),tokenPrice:i}),i},async fetchSwapAllowance(e){var t;let{tokenAddress:n,userAddress:a}=e;return await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)?An.get({path:"/v1/convert/allowance",params:{tokenAddress:n,userAddress:a},headers:{"Content-Type":"application/json"}}):{allowance:"0"}},async fetchGasPrice(e){var t;let{chainId:n}=e;const{st:a,sv:o}=An.getSdkProperties();if(!await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId))throw new Error("Network not supported for Gas Price");return An.get({path:"/v1/convert/gas-price",headers:{"Content-Type":"application/json"},params:{chainId:n,st:a,sv:o}})},async generateSwapCalldata(e){var t;let{amount:n,from:a,to:o,userAddress:i,disableEstimate:r}=e;if(!await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId))throw new Error("Network not supported for Swaps");return En.api.post({path:"/v1/convert/build-transaction",headers:{"Content-Type":"application/json"},body:{amount:n,eip155:{slippage:Wt.CONVERT_SLIPPAGE_TOLERANCE},projectId:wn.state.projectId,from:a,to:o,userAddress:i,disableEstimate:r}})},async generateApproveCalldata(e){var t;let{from:n,to:a,userAddress:o}=e;const{st:i,sv:r}=An.getSdkProperties();if(!await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId))throw new Error("Network not supported for Swaps");return An.get({path:"/v1/convert/build-approve",headers:{"Content-Type":"application/json"},params:{userAddress:o,from:n,to:a,st:i,sv:r}})},async getBalance(e,t,n){var a;const{st:o,sv:i}=An.getSdkProperties();if(!await An.isNetworkSupported(null===(a=Ua.state.activeCaipNetwork)||void 0===a?void 0:a.caipNetworkId))return bn.showError("Token Balance Unavailable"),{balances:[]};const r=`${t}:${e}`,s=un.getBalanceCacheForCaipAddress(r);if(s)return s;const c=await An.get({path:`/v1/account/${e}/balance`,params:{currency:"usd",chainId:t,forceUpdate:n,st:o,sv:i}});return un.updateBalanceCache({caipAddress:r,balance:c,timestamp:Date.now()}),c},async lookupEnsName(e){var t;return await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)?An.get({path:`/v1/profile/account/${e}`,params:{apiVersion:"2"}}):{addresses:{},attributes:[]}},async reverseLookupEnsName(e){var t,n;let{address:a}=e;if(!await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId))return[];const o=null===(n=Ua.getAccountData())||void 0===n?void 0:n.address;return An.get({path:`/v1/profile/reverse/${a}`,params:{sender:o,apiVersion:"2"}})},async getEnsNameSuggestions(e){var t;return await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)?An.get({path:`/v1/profile/suggestions/${e}`,params:{zone:"reown.id"}}):{suggestions:[]}},async registerEnsName(e){var t;let{coinType:n,address:a,message:o,signature:i}=e;return await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)?En.api.post({path:"/v1/profile/account",body:{coin_type:n,address:a,message:o,signature:i},headers:{"Content-Type":"application/json"}}):{success:!1}},async generateOnRampURL(e){var t;let{destinationWallets:n,partnerUserId:a,defaultNetwork:o,purchaseAmount:i,paymentAmount:r}=e;if(!await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId))return"";return(await En.api.post({path:"/v1/generators/onrampurl",params:{projectId:wn.state.projectId},body:{destinationWallets:n,defaultNetwork:o,partnerUserId:a,defaultExperience:"buy",presetCryptoAmount:i,presetFiatAmount:r}})).url},async getOnrampOptions(){var e;if(!await An.isNetworkSupported(null===(e=Ua.state.activeCaipNetwork)||void 0===e?void 0:e.caipNetworkId))return{paymentCurrencies:[],purchaseCurrencies:[]};try{return await An.get({path:"/v1/onramp/options"})}catch(t){return Cn}},async getOnrampQuote(e){let{purchaseCurrency:t,paymentCurrency:n,amount:a,network:o}=e;try{var i;if(!await An.isNetworkSupported(null===(i=Ua.state.activeCaipNetwork)||void 0===i?void 0:i.caipNetworkId))return null;return await En.api.post({path:"/v1/onramp/quote",params:{projectId:wn.state.projectId},body:{purchaseCurrency:t,paymentCurrency:n,amount:a,network:o}})}catch(r){return{networkFee:{amount:a,currency:n.id},paymentSubtotal:{amount:a,currency:n.id},paymentTotal:{amount:a,currency:n.id},purchaseAmount:{amount:a,currency:n.id},quoteId:"mocked-quote-id"}}},async getSmartSessions(e){var t;return await An.isNetworkSupported(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId)?An.get({path:`/v1/sessions/${e}`}):[]},async revokeSmartSession(e,t,n){var a;return await An.isNetworkSupported(null===(a=Ua.state.activeCaipNetwork)||void 0===a?void 0:a.caipNetworkId)?En.api.post({path:`/v1/sessions/${e}/revoke`,params:{projectId:wn.state.projectId},body:{pci:t,signature:n}}):{success:!1}},setClientId(e){En.clientId=e,En.api=new hn({baseUrl:kn,clientId:e})}},Nn=pn.getAnalyticsUrl(),In=new hn({baseUrl:Nn,clientId:null}),Tn=["MODAL_CREATED"],Sn=(0,w.sj)({timestamp:Date.now(),lastFlush:Date.now(),reportedErrors:{},data:{type:"track",event:"MODAL_CREATED"},pendingEvents:[],subscribedToVisibilityChange:!1,walletImpressions:[]}),xn={state:Sn,subscribe:e=>(0,w.Ld)(Sn,(()=>e(Sn))),getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:n}=wn.state;return{projectId:e,st:t,sv:n||"html-wagmi-4.2.2"}},shouldFlushEvents(){const e=JSON.stringify(Sn.pendingEvents).length/1024>45,t=Sn.lastFlush+1e4<Date.now();return e||t},_setPendingEvent(e){try{var t,n;let a=null===(t=Ua.getAccountData())||void 0===t?void 0:t.address;if("address"in e.data&&e.data.address&&(a=e.data.address),Tn.includes(e.data.event)||"undefined"===typeof window)return;const o=null===(n=Ua.getActiveCaipNetwork())||void 0===n?void 0:n.caipNetworkId;this.state.pendingEvents.push({eventId:pn.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:{...e.data,address:a,properties:{..."properties"in e.data?e.data.properties:{},caipNetworkId:o}}}),Sn.reportedErrors.FORBIDDEN=!1;xn.shouldFlushEvents()&&xn._submitPendingEvents()}catch(a){console.warn("_setPendingEvent",a)}},sendEvent(e){var t;Sn.timestamp=Date.now(),Sn.data=e;(null!==(t=wn.state.features)&&void 0!==t&&t.analytics||["INITIALIZE","CONNECT_SUCCESS","SOCIAL_LOGIN_SUCCESS"].includes(e.event))&&xn._setPendingEvent(Sn),this.subscribeToFlushTriggers()},sendWalletImpressionEvent(e){Sn.walletImpressions.push(e)},_transformPendingEventsForBatch(e){try{return e.filter((e=>"WALLET_IMPRESSION_V2"!==e.props.event))}catch{return e}},_submitPendingEvents(){if(Sn.lastFlush=Date.now(),0!==Sn.pendingEvents.length||0!==Sn.walletImpressions.length)try{const e=xn._transformPendingEventsForBatch(Sn.pendingEvents);Sn.walletImpressions.length&&e.push({eventId:pn.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:Date.now(),props:{type:"track",event:"WALLET_IMPRESSION_V2",items:[...Sn.walletImpressions]}}),In.sendBeacon({path:"/batch",params:xn.getSdkProperties(),body:e}),Sn.reportedErrors.FORBIDDEN=!1,Sn.pendingEvents=[],Sn.walletImpressions=[]}catch(e){Sn.reportedErrors.FORBIDDEN=!0}},subscribeToFlushTriggers(){var e,t,n,a,o,i;Sn.subscribedToVisibilityChange||"undefined"!==typeof document&&(Sn.subscribedToVisibilityChange=!0,null===(e=document)||void 0===e||null===(t=e.addEventListener)||void 0===t||t.call(e,"visibilitychange",(()=>{"hidden"===document.visibilityState&&xn._submitPendingEvents()})),null===(n=document)||void 0===n||null===(a=n.addEventListener)||void 0===a||a.call(n,"freeze",(()=>{xn._submitPendingEvents()})),null===(o=window)||void 0===o||null===(i=o.addEventListener)||void 0===i||i.call(o,"pagehide",(()=>{xn._submitPendingEvents()})),setInterval((()=>{xn._submitPendingEvents()}),1e4))}},On={getConnectionStatus(e,t){const n=za.state.activeConnectorIds[t],a=ca.getConnections(t);if(Boolean(n)&&e.connectorId===n)return"connected";return a.some((t=>t.connectorId.toLowerCase()===e.connectorId.toLowerCase()))?"active":"disconnected"},excludeConnectorAddressFromConnections(e){let{connections:t,connectorId:n,addresses:a}=e;return t.map((e=>{if(!!n&&e.connectorId.toLowerCase()===n.toLowerCase()&&a){const t=e.accounts.filter((e=>!a.some((t=>t.toLowerCase()===e.address.toLowerCase()))));return{...e,accounts:t}}return e}))},excludeExistingConnections(e,t){const n=new Set(e);return t.filter((e=>!n.has(e.connectorId)))},getConnectionsByConnectorId:(e,t)=>e.filter((e=>e.connectorId.toLowerCase()===t.toLowerCase())),getConnectionsData(e){var t,n;const a=Boolean(null===(t=wn.state.remoteFeatures)||void 0===t?void 0:t.multiWallet),o=za.state.activeConnectorIds[e],i=ca.getConnections(e),r=(null!==(n=ca.state.recentConnections.get(e))&&void 0!==n?n:[]).filter((e=>za.getConnectorById(e.connectorId))),s=On.excludeExistingConnections([...i.map((e=>e.connectorId)),...o?[o]:[]],r);return a?{connections:i,recentConnections:s}:{connections:i.filter((e=>e.connectorId.toLowerCase()===(null===o||void 0===o?void 0:o.toLowerCase()))),recentConnections:[]}},onConnectMobile(e){const t=ca.state.wcUri;if(null!==e&&void 0!==e&&e.mobile_link&&t)try{ca.setWcError(!1);const{mobile_link:n,link_mode:a,name:o}=e,{redirect:i,redirectUniversalLink:r,href:s}=pn.formatNativeUrl(n,t,a),c=i,l=r,d=pn.isIframe()?"_top":"_self";ca.setWcLinking({name:o,href:s}),ca.setRecentWallet(e),wn.state.experimental_preferUniversalLinks&&l?pn.openHref(l,d):pn.openHref(c,d)}catch(n){xn.sendEvent({type:"track",event:"CONNECT_PROXY_ERROR",properties:{message:n instanceof Error?n.message:"Error parsing the deep link",uri:t,mobile_link:e.mobile_link,name:e.name}}),ca.setWcError(!0)}}},_n=Object.freeze({enabled:!0,events:[]}),Pn=new hn({baseUrl:pn.getAnalyticsUrl(),clientId:null}),Rn=(0,w.sj)({..._n}),Un={state:Rn,subscribeKey:(e,t)=>(0,y.VW)(Rn,e,t),async sendError(e,t){if(!Rn.enabled)return;const n=Date.now();if(Rn.events.filter((e=>{const t=new Date(e.properties.timestamp||"").getTime();return n-t<6e4})).length>=5)return;const a={type:"error",event:t,properties:{errorType:e.name,errorMessage:e.message,stackTrace:e.stack,timestamp:(new Date).toISOString()}};Rn.events.push(a);try{if("undefined"===typeof window)return;const{projectId:n,sdkType:a,sdkVersion:o}=wn.state;await Pn.post({path:"/e",params:{projectId:n,st:a,sv:o||"html-wagmi-4.2.2"},body:{eventId:pn.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:(new Date).toISOString(),props:{type:"error",event:t,errorType:e.name,errorMessage:e.message,stackTrace:e.stack}}})}catch{}},enable(){Rn.enabled=!0},disable(){Rn.enabled=!1},clearEvents(){Rn.events=[]}};class Dn extends Error{constructor(e,t,n){super(e),this.originalName="AppKitError",this.name="AppKitError",this.category=t,this.originalError=n,n&&n instanceof Error&&(this.originalName=n.name),Object.setPrototypeOf(this,Dn.prototype);let a=!1;if(n instanceof Error&&"string"===typeof n.stack&&n.stack){const e=n.stack,t=e.indexOf("\n");if(t>-1){const n=e.substring(t+1);this.stack=`${this.name}: ${this.message}\n${n}`,a=!0}}a||(Error.captureStackTrace?Error.captureStackTrace(this,Dn):this.stack||(this.stack=`${this.name}: ${this.message}`))}}function Bn(e,t){let n="";try{n=e instanceof Error?e.message:"string"===typeof e?e:"object"===typeof e&&null!==e?0===Object.keys(e).length?"Unknown error":(null===e||void 0===e?void 0:e.message)||JSON.stringify(e):String(e)}catch(o){n="Unknown error",console.error("Error parsing error message",o)}const a=e instanceof Dn?e:new Dn(n,t,e);throw Un.sendError(a,a.category),a}function $n(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"INTERNAL_SDK_ERROR";const n={};return Object.keys(e).forEach((a=>{const o=e[a];if("function"===typeof o){let e=o;e="AsyncFunction"===o.constructor.name?async function(){try{return await o(...arguments)}catch(e){return Bn(e,t)}}:function(){try{return o(...arguments)}catch(e){return Bn(e,t)}},n[a]=e}else n[a]=o})),n}const Mn=(0,w.sj)({walletImages:{},networkImages:{},chainImages:{},connectorImages:{},tokenImages:{},currencyImages:{}}),Wn=$n({state:Mn,subscribeNetworkImages:e=>(0,w.Ld)(Mn.networkImages,(()=>e(Mn.networkImages))),subscribeKey:(e,t)=>(0,y.VW)(Mn,e,t),subscribe:e=>(0,w.Ld)(Mn,(()=>e(Mn))),setWalletImage(e,t){Mn.walletImages[e]=t},setNetworkImage(e,t){Mn.networkImages[e]=t},setChainImage(e,t){Mn.chainImages[e]=t},setConnectorImage(e,t){Mn.connectorImages={...Mn.connectorImages,[e]:t}},setTokenImage(e,t){Mn.tokenImages[e]=t},setCurrencyImage(e,t){Mn.currencyImages[e]=t}}),Ln={eip155:"ba0ba0cd-17c6-4806-ad93-f9d174f17900",solana:"a1b58899-f671-4276-6a5e-56ca5bd59700",polkadot:"",bip122:"0b4838db-0161-4ffe-022d-532bf03dba00",cosmos:"",sui:"",stacks:"",ton:"20f673c0-095e-49b2-07cf-eb5049dcf600"},Fn=(0,w.sj)({networkImagePromises:{},tokenImagePromises:{}}),jn={async fetchWalletImage(e){if(e)return await Gn._fetchWalletImage(e),this.getWalletImageById(e)},async fetchNetworkImage(e){if(!e)return;const t=this.getNetworkImageById(e);return t||(Fn.networkImagePromises[e]||(Fn.networkImagePromises[e]=Gn._fetchNetworkImage(e)),await Fn.networkImagePromises[e],this.getNetworkImageById(e))},async fetchTokenImage(e){if(e)return Fn.tokenImagePromises[e]||(Fn.tokenImagePromises[e]=Gn._fetchTokenImage(e)),await Fn.tokenImagePromises[e],this.getTokenImage(e)},getWalletImageById(e){if(e)return Wn.state.walletImages[e]},getWalletImage:e=>null!==e&&void 0!==e&&e.image_url?null===e||void 0===e?void 0:e.image_url:null!==e&&void 0!==e&&e.image_id?Wn.state.walletImages[e.image_id]:void 0,getNetworkImage(e){var t,n,a;return null!==e&&void 0!==e&&null!==(t=e.assets)&&void 0!==t&&t.imageUrl?null===e||void 0===e||null===(a=e.assets)||void 0===a?void 0:a.imageUrl:null!==e&&void 0!==e&&null!==(n=e.assets)&&void 0!==n&&n.imageId?Wn.state.networkImages[e.assets.imageId]:void 0},getNetworkImageById(e){if(e)return Wn.state.networkImages[e]},getConnectorImage(e){var t;return null!==e&&void 0!==e&&e.imageUrl?e.imageUrl:null!==e&&void 0!==e&&null!==(t=e.info)&&void 0!==t&&t.icon?e.info.icon:null!==e&&void 0!==e&&e.imageId?Wn.state.connectorImages[e.imageId]:void 0},getChainImage:e=>Wn.state.networkImages[Ln[e]],getTokenImage(e){if(e)return Wn.state.tokenImages[e]},getWalletImageUrl(e){if(!e)return"";const{projectId:t,sdkType:n,sdkVersion:a}=wn.state,o=new URL(`${ft.W3M_API_URL}/getWalletImage/${e}`);return o.searchParams.set("projectId",t),o.searchParams.set("st",n),o.searchParams.set("sv",a),o.toString()},getAssetImageUrl(e){if(!e)return"";const{projectId:t,sdkType:n,sdkVersion:a}=wn.state,o=new URL(`${ft.W3M_API_URL}/public/getAssetImage/${e}`);return o.searchParams.set("projectId",t),o.searchParams.set("st",n),o.searchParams.set("sv",a),o.toString()},getChainNamespaceImageUrl(e){return this.getAssetImageUrl(Ln[e])},async getImageByToken(e,t){var n;if("native"===e){var a;const e=null!==(a=ft.NATIVE_IMAGE_IDS_BY_NAMESPACE[t])&&void 0!==a?a:null;if(!e)return;return jn.fetchNetworkImage(e)}const[,o]=null!==(n=Object.entries(ft.TOKEN_SYMBOLS_BY_ADDRESS).find((t=>{let[n]=t;return n.toLowerCase()===e.toLowerCase()})))&&void 0!==n?n:[];if(o)return jn.fetchTokenImage(o)}},Hn={PHANTOM:{id:"a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393",url:"https://phantom.app"},SOLFLARE:{id:"1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79",url:"https://solflare.com"},COINBASE:{id:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",url:"https://go.cb-w.com"},BINANCE:{id:"2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25",appId:"yFK5FCqYprrXDiVFbhyRx7",deeplink:"bnc://app.binance.com/mp/app",url:"https://app.binance.com/en/download"}},Vn={handleMobileDeeplinkRedirect(e,t){const n=window.location.href,a=encodeURIComponent(n);if(e===Hn.PHANTOM.id&&!("phantom"in window)){const e=n.startsWith("https")?"https":"http",t=n.split("/")[2],o=encodeURIComponent(`${e}://${t}`);window.location.href=`${Hn.PHANTOM.url}/ul/browse/${a}?ref=${o}`}if(e!==Hn.SOLFLARE.id||"solflare"in window||(window.location.href=`${Hn.SOLFLARE.url}/ul/v1/browse/${a}?ref=${a}`),t===ft.CHAIN.SOLANA&&(e!==Hn.COINBASE.id||"coinbaseSolana"in window||(window.location.href=`${Hn.COINBASE.url}/dapp?cb_url=${a}`)),t===ft.CHAIN.BITCOIN&&e===Hn.BINANCE.id&&!("binancew3w"in window)){var o;const e=Ua.state.activeCaipNetwork,t=window.btoa("/pages/browser/index"),n=window.btoa(`url=${a}&defaultChainId=${null!==(o=null===e||void 0===e?void 0:e.id)&&void 0!==o?o:1}`),i=new URL(Hn.BINANCE.deeplink);i.searchParams.set("appId",Hn.BINANCE.appId),i.searchParams.set("startPagePath",t),i.searchParams.set("startPageQuery",n);const r=new URL(Hn.BINANCE.url);r.searchParams.set("_dp",window.btoa(i.toString())),window.location.href=r.toString()}}},Kn=pn.getApiUrl(),qn=new hn({baseUrl:Kn,clientId:null}),zn=(0,w.sj)({promises:{},page:1,count:0,featured:[],allFeatured:[],recommended:[],allRecommended:[],wallets:[],filteredWallets:[],search:[],isAnalyticsEnabled:!1,excludedWallets:[],isFetchingRecommendedWallets:!1,explorerWallets:[],explorerFilteredWallets:[],plan:{tier:"none",hasExceededUsageLimit:!1,limits:{isAboveRpcLimit:!1,isAboveMauLimit:!1}}}),Gn={state:zn,subscribeKey:(e,t)=>(0,y.VW)(zn,e,t),_getSdkProperties(){const{projectId:e,sdkType:t,sdkVersion:n}=wn.state;return{projectId:e,st:t||"appkit",sv:n||"html-wagmi-4.2.2"}},_filterOutExtensions:e=>wn.state.isUniversalProvider?e.filter((e=>Boolean(e.mobile_link||e.desktop_link||e.webapp_link))):e,async _fetchWalletImage(e){const t=`${qn.baseUrl}/getWalletImage/${e}`,n=await qn.getBlob({path:t,params:Gn._getSdkProperties()});Wn.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${qn.baseUrl}/public/getAssetImage/${e}`,n=await qn.getBlob({path:t,params:Gn._getSdkProperties()});Wn.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${qn.baseUrl}/public/getAssetImage/${e}`,n=await qn.getBlob({path:t,params:Gn._getSdkProperties()});Wn.setConnectorImage(e,URL.createObjectURL(n))},async _fetchCurrencyImage(e){const t=`${qn.baseUrl}/public/getCurrencyImage/${e}`,n=await qn.getBlob({path:t,params:Gn._getSdkProperties()});Wn.setCurrencyImage(e,URL.createObjectURL(n))},async _fetchTokenImage(e){const t=`${qn.baseUrl}/public/getTokenImage/${e}`,n=await qn.getBlob({path:t,params:Gn._getSdkProperties()});Wn.setTokenImage(e,URL.createObjectURL(n))},_filterWalletsByPlatform(e){const t=e.length,n=pn.isMobile()?null===e||void 0===e?void 0:e.filter((e=>{if(e.mobile_link||e.webapp_link)return!0;return Object.values(Hn).map((e=>e.id)).includes(e.id)})):e;return{filteredWallets:n,mobileFilteredOutWalletsLength:t-n.length}},fetchProjectConfig:async()=>(await qn.get({path:"/appkit/v1/config",params:Gn._getSdkProperties()})).features,async fetchUsage(){try{const e=await qn.get({path:"/appkit/v1/project-limits",params:Gn._getSdkProperties()}),{tier:t,isAboveMauLimit:n,isAboveRpcLimit:a}=e.planLimits,o="starter"===t,i=n||a;Gn.state.plan={tier:t,hasExceededUsageLimit:o&&i,limits:{isAboveRpcLimit:a,isAboveMauLimit:n}}}catch(e){console.warn("Failed to fetch usage",e)}},async fetchAllowedOrigins(){try{const{allowedOrigins:e}=await qn.get({path:"/projects/v1/origins",params:Gn._getSdkProperties()});return e}catch(e){if(e instanceof Error&&e.cause instanceof Response){const t=e.cause.status;if(t===ft.HTTP_STATUS_CODES.TOO_MANY_REQUESTS)throw new Error("RATE_LIMITED",{cause:e});if(t>=ft.HTTP_STATUS_CODES.SERVER_ERROR&&t<600)throw new Error("SERVER_ERROR",{cause:e});return[]}return[]}},async fetchNetworkImages(){const e=Ua.getAllRequestedCaipNetworks(),t=null===e||void 0===e?void 0:e.map((e=>{let{assets:t}=e;return null===t||void 0===t?void 0:t.imageId})).filter(Boolean).filter((e=>!jn.getNetworkImageById(e)));t&&await Promise.allSettled(t.map((e=>Gn._fetchNetworkImage(e))))},async fetchConnectorImages(){const{connectors:e}=za.state,t=e.map((e=>{let{imageId:t}=e;return t})).filter(Boolean);await Promise.allSettled(t.map((e=>Gn._fetchConnectorImage(e))))},async fetchCurrencyImages(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];await Promise.allSettled(e.map((e=>Gn._fetchCurrencyImage(e))))},async fetchTokenImages(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];await Promise.allSettled(e.map((e=>Gn._fetchTokenImage(e))))},async fetchWallets(e){var t,n;const a=null!==(t=e.exclude)&&void 0!==t?t:[];Gn._getSdkProperties().sv.startsWith("html-core-")&&a.push(...Object.values(Hn).map((e=>e.id)));const o=await qn.get({path:"/getWallets",params:{...Gn._getSdkProperties(),...e,page:String(e.page),entries:String(e.entries),include:null===(n=e.include)||void 0===n?void 0:n.join(","),exclude:a.join(",")}}),{filteredWallets:i,mobileFilteredOutWalletsLength:r}=Gn._filterWalletsByPlatform(null===o||void 0===o?void 0:o.data);return{data:i||[],count:null===o||void 0===o?void 0:o.count,mobileFilteredOutWalletsLength:r}},async prefetchWalletRanks(){const e=za.state.connectors;if(null===e||void 0===e||!e.length)return;const t={page:1,entries:20,badge:"certified"};if(t.names=e.map((e=>e.name)).join(","),Ua.state.activeChain===ft.CHAIN.EVM){const n=[...e.flatMap((e=>{var t;return(null===(t=e.connectors)||void 0===t?void 0:t.map((e=>{var t;return null===(t=e.info)||void 0===t?void 0:t.rdns})))||[]})),...e.map((e=>{var t;return null===(t=e.info)||void 0===t?void 0:t.rdns}))].filter((e=>"string"===typeof e&&e.length>0));n.length&&(t.rdns=n.join(","))}const{data:n}=await Gn.fetchWallets(t);zn.explorerWallets=n,za.extendConnectorsWithExplorerWallets(n);const a=Ua.getRequestedCaipNetworkIds().join(",");zn.explorerFilteredWallets=n.filter((e=>{var t;return null===(t=e.chains)||void 0===t?void 0:t.some((e=>a.includes(e)))}))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=wn.state;if(null!==e&&void 0!==e&&e.length){var t;const n={...Gn._getSdkProperties(),page:1,entries:null!==(t=null===e||void 0===e?void 0:e.length)&&void 0!==t?t:4,include:e},{data:a}=await Gn.fetchWallets(n),o=[...a].sort(((t,n)=>e.indexOf(t.id)-e.indexOf(n.id))),i=o.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(i.map((e=>Gn._fetchWalletImage(e)))),zn.featured=o,zn.allFeatured=o}},async fetchRecommendedWallets(){try{zn.isFetchingRecommendedWallets=!0;const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=wn.state,a=[...null!==t&&void 0!==t?t:[],...null!==n&&void 0!==n?n:[]].filter(Boolean),o={page:1,entries:4,include:e,exclude:a,chains:Ua.getRequestedCaipNetworkIds().join(",")},{data:i,count:r}=await Gn.fetchWallets(o),s=un.getRecentWallets(),c=i.map((e=>e.image_id)).filter(Boolean),l=s.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...c,...l].map((e=>Gn._fetchWalletImage(e)))),zn.recommended=i,zn.allRecommended=i,zn.count=null!==r&&void 0!==r?r:0}catch{}finally{zn.isFetchingRecommendedWallets=!1}},async fetchWalletsByPage(e){var t;let{page:n}=e;const{includeWalletIds:a,excludeWalletIds:o,featuredWalletIds:i}=wn.state,r=Ua.getRequestedCaipNetworkIds().join(","),s={page:n,entries:40,include:a,exclude:[...zn.recommended.map((e=>{let{id:t}=e;return t})),...null!==o&&void 0!==o?o:[],...null!==i&&void 0!==i?i:[]].filter(Boolean),chains:r},{data:c,count:l,mobileFilteredOutWalletsLength:d}=await Gn.fetchWallets(s);zn.mobileFilteredOutWalletsLength=d+(null!==(t=zn.mobileFilteredOutWalletsLength)&&void 0!==t?t:0);const u=c.slice(0,20).map((e=>e.image_id)).filter(Boolean);await Promise.allSettled(u.map((e=>Gn._fetchWalletImage(e)))),zn.wallets=pn.uniqueBy([...zn.wallets,...Gn._filterOutExtensions(c)],"id").filter((e=>{var t;return null===(t=e.chains)||void 0===t?void 0:t.some((e=>r.includes(e)))})),zn.count=l>zn.count?l:zn.count,zn.page=n},async initializeExcludedWallets(e){let{ids:t}=e;const n={page:1,entries:t.length,include:t},{data:a}=await Gn.fetchWallets(n);a&&a.forEach((e=>{zn.excludedWallets.push({rdns:e.rdns,name:e.name})}))},async searchWallet(e){let{search:t,badge:n}=e;const{includeWalletIds:a,excludeWalletIds:o}=wn.state,i=Ua.getRequestedCaipNetworkIds().join(",");zn.search=[];const r={page:1,entries:100,search:null===t||void 0===t?void 0:t.trim(),badge_type:n,include:a,exclude:o,chains:i},{data:s}=await Gn.fetchWallets(r);xn.sendEvent({type:"track",event:"SEARCH_WALLET",properties:{badge:null!==n&&void 0!==n?n:"",search:null!==t&&void 0!==t?t:""}});const c=s.map((e=>e.image_id)).filter(Boolean);await Promise.allSettled([...c.map((e=>Gn._fetchWalletImage(e))),pn.wait(300)]),zn.search=Gn._filterOutExtensions(s)},initPromise(e,t){const n=zn.promises[e];return n||(zn.promises[e]=t())},prefetch(){let{fetchConnectorImages:e=!0,fetchFeaturedWallets:t=!0,fetchRecommendedWallets:n=!0,fetchNetworkImages:a=!0,fetchWalletRanks:o=!0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const i=[e&&Gn.initPromise("connectorImages",Gn.fetchConnectorImages),t&&Gn.initPromise("featuredWallets",Gn.fetchFeaturedWallets),n&&Gn.initPromise("recommendedWallets",Gn.fetchRecommendedWallets),a&&Gn.initPromise("networkImages",Gn.fetchNetworkImages),o&&Gn.initPromise("walletRanks",Gn.prefetchWalletRanks)].filter(Boolean);return Promise.allSettled(i)},prefetchAnalyticsConfig(){var e;null!==(e=wn.state.features)&&void 0!==e&&e.analytics&&Gn.fetchAnalyticsConfig()},async fetchAnalyticsConfig(){try{const{isAnalyticsEnabled:e}=await qn.get({path:"/getAnalyticsConfig",params:Gn._getSdkProperties()});wn.setFeatures({analytics:e})}catch(e){wn.setFeatures({analytics:!1})}},filterByNamespaces(e){if(null===e||void 0===e||!e.length)return zn.featured=zn.allFeatured,void(zn.recommended=zn.allRecommended);const t=Ua.getRequestedCaipNetworkIds().join(",");zn.featured=zn.allFeatured.filter((e=>{var n;return null===(n=e.chains)||void 0===n?void 0:n.some((e=>t.includes(e)))})),zn.recommended=zn.allRecommended.filter((e=>{var n;return null===(n=e.chains)||void 0===n?void 0:n.some((e=>t.includes(e)))})),zn.filteredWallets=zn.wallets.filter((e=>{var n;return null===(n=e.chains)||void 0===n?void 0:n.some((e=>t.includes(e)))}))},clearFilterByNamespaces(){zn.filteredWallets=[]},setFilterByNamespace(e){if(!e)return zn.featured=zn.allFeatured,void(zn.recommended=zn.allRecommended);const t=Ua.getRequestedCaipNetworkIds().join(",");zn.featured=zn.allFeatured.filter((e=>{var n;return null===(n=e.chains)||void 0===n?void 0:n.some((e=>t.includes(e)))})),zn.recommended=zn.allRecommended.filter((e=>{var n;return null===(n=e.chains)||void 0===n?void 0:n.some((e=>t.includes(e)))})),zn.filteredWallets=zn.wallets.filter((e=>{var n;return null===(n=e.chains)||void 0===n?void 0:n.some((e=>t.includes(e)))}))}},Jn=["ConnectingExternal","ConnectingMultiChain","ConnectingSocial","ConnectingFarcaster"],Yn=(0,w.sj)({view:"Connect",history:["Connect"],transactionStack:[]}),Qn=$n({state:Yn,subscribeKey:(e,t)=>(0,y.VW)(Yn,e,t),pushTransactionStack(e){Yn.transactionStack.push(e)},popTransactionStack(e){const t=Yn.transactionStack.pop();if(!t)return;const{onSuccess:n,onError:a,onCancel:o}=t;switch(e){case"success":null===n||void 0===n||n();break;case"error":null===a||void 0===a||a(),Qn.goBack();break;case"cancel":null===o||void 0===o||o(),Qn.goBack()}},push(e,t){let n=e,a=t;Gn.state.plan.hasExceededUsageLimit&&Jn.includes(e)&&(n="UsageExceeded",a=void 0),n!==Yn.view&&(Yn.view=n,Yn.history.push(n),Yn.data=a)},reset(e,t){Yn.view=e,Yn.history=[e],Yn.data=t},replace(e,t){Yn.history.at(-1)===e||(Yn.view=e,Yn.history[Yn.history.length-1]=e,Yn.data=t)},goBack(){var e,t;const n=Ua.state.activeCaipAddress,a="ConnectingFarcaster"===Qn.state.view,o=!n&&a;if(Yn.history.length>1){Yn.history.pop();const[e]=Yn.history.slice(-1);if(e){const t="Connect"===e;Yn.view=n&&t?"Account":e}}else na.close();null!==(e=Yn.data)&&void 0!==e&&e.wallet&&(Yn.data.wallet=void 0),null!==(t=Yn.data)&&void 0!==t&&t.redirectView&&(Yn.data.redirectView=void 0),setTimeout((()=>{if(o){var e,t,n;Ua.setAccountProp("farcasterUrl",void 0,Ua.state.activeChain);const a=za.getAuthConnector();null===a||void 0===a||null===(e=a.provider)||void 0===e||e.reload();const o=(0,w.CO)(wn.state);null===a||void 0===a||null===(t=a.provider)||void 0===t||null===(n=t.syncDappData)||void 0===n||n.call(t,{metadata:o.metadata,sdkVersion:o.sdkVersion,projectId:o.projectId,sdkType:o.sdkType})}}),100)},goBackToIndex(e){if(Yn.history.length>1){Yn.history=Yn.history.slice(0,e+1);const[t]=Yn.history.slice(-1);t&&(Yn.view=t)}},goBackOrCloseModal(){Qn.state.history.length>1?Qn.goBack():na.close()}}),Xn={onSwitchNetwork(e){var t,n;let{network:a,ignoreSwitchConfirmation:o=!1}=e;const i=Ua.state.activeCaipNetwork,r=Ua.state.activeChain,s=Qn.state.data;if(a.id===(null===i||void 0===i?void 0:i.id))return;const c=Boolean(null===(t=Ua.getAccountData(r))||void 0===t?void 0:t.address),l=Boolean(null===(n=Ua.getAccountData(a.chainNamespace))||void 0===n?void 0:n.address),d=a.chainNamespace!==r,u=za.getConnectorId(r)===ft.CONNECTOR_ID.AUTH,p=ft.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===a.chainNamespace));o||u&&p?Qn.push("SwitchNetwork",{...s,network:a}):c&&d&&!l?Qn.push("SwitchActiveChain",{switchToChain:a.chainNamespace,navigateTo:"Connect",navigateWithReplace:!0,network:a}):Qn.push("SwitchNetwork",{...s,network:a})}},Zn=(0,w.sj)({loading:!1,open:!1,selectedNetworkId:void 0,activeChain:void 0,initialized:!1,connectingWallet:void 0}),ea={state:Zn,subscribe:e=>(0,w.Ld)(Zn,(()=>e(Zn))),subscribeOpen:e=>(0,y.VW)(Zn,"open",e),set(e){Object.assign(Zn,{...Zn,...e})}},ta=(0,w.sj)({loading:!1,loadingNamespaceMap:new Map,open:!1,shake:!1,namespace:void 0}),na=$n({state:ta,subscribe:e=>(0,w.Ld)(ta,(()=>e(ta))),subscribeKey:(e,t)=>(0,y.VW)(ta,e,t),async open(e){var t;const n=null===e||void 0===e?void 0:e.namespace,a=Ua.state.activeChain,o=n&&n!==a,i=null===(t=Ua.getAccountData(null===e||void 0===e?void 0:e.namespace))||void 0===t?void 0:t.caipAddress,r=Ua.state.noAdapters;if(ca.state.wcBasic?Gn.prefetch({fetchNetworkImages:!1,fetchConnectorImages:!1,fetchWalletRanks:!1}):await Gn.prefetch(),za.setFilterByNamespace(null===e||void 0===e?void 0:e.namespace),na.setLoading(!0,n),n&&o){var s;const e=(null===(s=Ua.getNetworkData(n))||void 0===s?void 0:s.caipNetwork)||Ua.getRequestedCaipNetworks(n)[0];e&&(r?(await Ua.switchActiveNetwork(e),Qn.push("ConnectingWalletConnectBasic")):Xn.onSwitchNetwork({network:e,ignoreSwitchConfirmation:!0}))}else wn.state.manualWCControl||r&&!i?pn.isMobile()?Qn.reset("AllWallets"):Qn.reset("ConnectingWalletConnectBasic"):null!==e&&void 0!==e&&e.view?Qn.reset(e.view,e.data):i?Qn.reset("Account"):Qn.reset("Connect");ta.open=!0,ea.set({open:!0}),xn.sendEvent({type:"track",event:"MODAL_OPEN",properties:{connected:Boolean(i)}})},close(){const e=wn.state.enableEmbedded,t=Boolean(Ua.state.activeCaipAddress);ta.open&&xn.sendEvent({type:"track",event:"MODAL_CLOSE",properties:{connected:t}}),ta.open=!1,Qn.reset("Connect"),na.clearLoading(),e?t?Qn.replace("Account"):Qn.push("Connect"):ea.set({open:!1}),ca.resetUri()},setLoading(e,t){t&&ta.loadingNamespaceMap.set(t,e),ta.loading=e,ea.set({loading:e})},clearLoading(){ta.loadingNamespaceMap.clear(),ta.loading=!1,ea.set({loading:!1})},shake(){ta.shake||(ta.shake=!0,setTimeout((()=>{ta.shake=!1}),500))}}),aa={checkNamespaceConnectorId:(e,t)=>za.getConnectorId(e)===t,isSocialProvider:e=>Wt.DEFAULT_REMOTE_FEATURES.socials.includes(e),connectWalletConnect(e){let{walletConnect:t,connector:n,closeModalOnConnect:a=!0,redirectViewOnModalClose:o="Connect",onOpen:i,onConnect:r}=e;return new Promise(((e,s)=>{if(t&&za.setActiveConnector(n),null===i||void 0===i||i(pn.isMobile()&&t),o){const e=na.subscribeKey("open",(t=>{t||(Qn.state.view!==o&&Qn.replace(o),e(),s(new Error("Modal closed")))}))}const c=Ua.subscribeKey("activeCaipAddress",(t=>{t&&(null===r||void 0===r||r(),a&&na.close(),c(),e(xt.parseCaipAddress(t)))}))}))},connectExternal:e=>new Promise(((t,n)=>{const a=Ua.subscribeKey("activeCaipAddress",(e=>{e&&(na.close(),a(),t(xt.parseCaipAddress(e)))}));ca.connectExternal(e,e.chain).catch((()=>{a(),n(new Error("Connection rejected"))}))})),connectSocial(e){let t,{social:n,namespace:a,closeModalOnConnect:o=!0,onOpenFarcaster:i,onConnect:r}=e,s=!1,c=null;const l=a||Ua.state.activeChain,d=Ua.subscribeKey("activeCaipAddress",(e=>{e&&(o&&na.close(),d())}));return new Promise(((e,a)=>{async function o(i){var r;if(null!==(r=i.data)&&void 0!==r&&r.resultUri)if(i.origin===ft.SECURE_SITE_SDK_ORIGIN){window.removeEventListener("message",o,!1);try{const o=za.getAuthConnector(l);if(o&&!s){t&&t.close(),s=!0;const r=i.data.resultUri;xn.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:n}}),un.setConnectedSocialProvider(n),await ca.connectExternal({id:o.id,type:o.type,socialUri:r},o.chain);const c=Ua.state.activeCaipAddress;if(!c)return void a(new Error("Failed to connect"));e(xt.parseCaipAddress(c)),xn.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:n}})}}catch(c){xn.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:n,message:pn.parseError(c)}}),a(new Error("Failed to connect"))}}else xn.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:n,message:"Untrusted Origin"}})}!async function(){if(xn.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:n}}),"farcaster"===n){null===i||void 0===i||i();const e=na.subscribeKey("open",(t=>{t||"farcaster"!==n||(a(new Error("Popup closed")),null===r||void 0===r||r(),e())})),t=za.getAuthConnector();if(t){const e=Ua.getAccountData(l);if(null===e||void 0===e||!e.farcasterUrl)try{const{url:e}=await t.provider.getFarcasterUri();Ua.setAccountProp("farcasterUrl",e,l)}catch{a(new Error("Failed to connect to farcaster"))}}}else{const i=za.getAuthConnector();c=pn.returnOpenHref(`${ft.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes");try{if(i){const{uri:r}=await i.provider.getSocialRedirectUri({provider:n});if(c&&r){c.location.href=r,t=c;const e=setInterval((()=>{var n;null!==(n=t)&&void 0!==n&&n.closed&&!s&&(a(new Error("Popup closed")),clearInterval(e))}),1e3);window.addEventListener("message",o,!1)}else{var e;null===(e=c)||void 0===e||e.close(),a(new Error("Failed to initiate social connection"))}}}catch{var d;a(new Error("Failed to initiate social connection")),null===(d=c)||void 0===d||d.close()}}}()}))},connectEmail(e){let{closeModalOnConnect:t=!0,redirectViewOnModalClose:n="Connect",onOpen:a,onConnect:o}=e;return new Promise(((e,i)=>{if(null===a||void 0===a||a(),n){const e=na.subscribeKey("open",(t=>{t||(Qn.state.view!==n&&Qn.replace(n),e(),i(new Error("Modal closed")))}))}const r=Ua.subscribeKey("activeCaipAddress",(n=>{n&&(null===o||void 0===o||o(),t&&na.close(),r(),e(xt.parseCaipAddress(n)))}))}))},async updateEmail(){var e;const t=un.getConnectedConnectorId(Ua.state.activeChain),n=za.getAuthConnector();if(!n)throw new Error("No auth connector found");if(t!==ft.CONNECTOR_ID.AUTH)throw new Error("Not connected to email or social");const a=null!==(e=n.provider.getEmail())&&void 0!==e?e:"";return await na.open({view:"UpdateEmailWallet",data:{email:a,redirectView:void 0}}),new Promise(((e,t)=>{const o=setInterval((()=>{var t;const r=null!==(t=n.provider.getEmail())&&void 0!==t?t:"";r!==a&&(na.close(),clearInterval(o),i(),e({email:r}))}),1e3),i=na.subscribeKey("open",(e=>{e||("Connect"!==Qn.state.view&&Qn.push("Connect"),clearInterval(o),i(),t(new Error("Modal closed")))}))}))},canSwitchToSmartAccount:e=>Ua.checkIfSmartAccountEnabled()&&$a(e)===St.ACCOUNT_TYPES.EOA},oa=(0,w.sj)({transactions:[],transactionsByYear:{},lastNetworkInView:void 0,loading:!1,empty:!1,next:void 0}),ia=$n({state:oa,subscribe:e=>(0,w.Ld)(oa,(()=>e(oa))),setLastNetworkInView(e){oa.lastNetworkInView=e},async fetchTransactions(e){if(!e)throw new Error("Transactions can't be fetched without an accountAddress");oa.loading=!0;try{var t;const n=await An.fetchTransactions({account:e,cursor:oa.next,chainId:null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId}),a=ia.filterSpamTransactions(n.data),o=ia.filterByConnectedChain(a),i=[...oa.transactions,...o];oa.loading=!1,oa.transactions=i,oa.transactionsByYear=ia.groupTransactionsByYearAndMonth(oa.transactionsByYear,o),oa.empty=0===i.length,oa.next=n.next?n.next:void 0}catch(n){const t=Ua.state.activeChain;xn.sendEvent({type:"track",event:"ERROR_FETCH_TRANSACTIONS",properties:{address:e,projectId:wn.state.projectId,cursor:oa.next,isSmartAccount:$a(t)===St.ACCOUNT_TYPES.SMART_ACCOUNT}}),bn.showError("Failed to fetch transactions"),oa.loading=!1,oa.empty=!0,oa.next=void 0}},groupTransactionsByYearAndMonth(){const e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).forEach((t=>{var n,a;const o=new Date(t.metadata.minedAt).getFullYear(),i=new Date(t.metadata.minedAt).getMonth(),r=null!==(n=e[o])&&void 0!==n?n:{},s=(null!==(a=r[i])&&void 0!==a?a:[]).filter((e=>e.id!==t.id));e[o]={...r,[i]:[...s,t].sort(((e,t)=>new Date(t.metadata.minedAt).getTime()-new Date(e.metadata.minedAt).getTime()))}})),e},filterSpamTransactions:e=>e.filter((e=>{var t;return!(null===(t=e.transfers)||void 0===t?void 0:t.every((e=>{var t;return!0===(null===(t=e.nft_info)||void 0===t?void 0:t.flags.is_spam)})))})),filterByConnectedChain(e){var t;const n=null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId;return e.filter((e=>e.metadata.chain===n))},clearCursor(){oa.next=void 0},resetTransactions(){oa.transactions=[],oa.transactionsByYear={},oa.lastNetworkInView=void 0,oa.loading=!1,oa.empty=!1,oa.next=void 0}},"API_ERROR"),ra=(0,w.sj)({connections:new Map,recentConnections:new Map,isSwitchingConnection:!1,wcError:!1,wcFetchingUri:!1,buffering:!1,status:"disconnected"});let sa;const ca=$n({state:ra,subscribe:e=>(0,w.Ld)(ra,(()=>e(ra))),subscribeKey:(e,t)=>(0,y.VW)(ra,e,t),_getClient:()=>ra._client,setClient(e){ra._client=(0,w.iH)(e)},initialize(e){const t=e.filter((e=>Boolean(e.namespace))).map((e=>e.namespace));ca.syncStorageConnections(t)},syncStorageConnections(e){const t=un.getConnections(),n=null!==e&&void 0!==e?e:Array.from(Ua.state.chains.keys());for(const o of n){var a;const e=null!==(a=t[o])&&void 0!==a?a:[],n=new Map(ra.recentConnections);n.set(o,e),ra.recentConnections=n}},getConnections(e){var t;return e&&null!==(t=ra.connections.get(e))&&void 0!==t?t:[]},hasAnyConnection(e){const t=ca.state.connections;return Array.from(t.values()).flatMap((e=>e)).some((t=>{let{connectorId:n}=t;return n===e}))},async connectWalletConnect(){let{cache:e="auto"}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};ra.wcFetchingUri=!0;const t=pn.isTelegram()||pn.isSafari()&&pn.isIos();if("always"===e||"auto"===e&&t){var n,a;if(sa)return await sa,void(sa=void 0);if(!pn.isPairingExpired(null===ra||void 0===ra?void 0:ra.wcPairingExpiry)){const e=ra.wcUri;return void(ra.wcUri=e)}sa=null===(n=ca._getClient())||void 0===n||null===(a=n.connectWalletConnect)||void 0===a?void 0:a.call(n).catch((()=>{})),ca.state.status="connecting",await sa,sa=void 0,ra.wcPairingExpiry=void 0,ca.state.status="connected"}else{var o,i;await(null===(o=ca._getClient())||void 0===o||null===(i=o.connectWalletConnect)||void 0===i?void 0:i.call(o))}},async connectExternal(e,t){var n,a,o;let i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=await(null===(n=ca._getClient())||void 0===n||null===(a=n.connectExternal)||void 0===a?void 0:a.call(n,e));i&&Ua.setActiveNamespace(t);const s=za.state.allConnectors.find((t=>t.id===(null===e||void 0===e?void 0:e.id))),c="AUTH"===e.type?"email":"browser";return xn.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:c,name:(null===s||void 0===s?void 0:s.name)||"Unknown",view:Qn.state.view,walletRank:null===s||void 0===s||null===(o=s.explorerWallet)||void 0===o?void 0:o.order}}),r},async reconnectExternal(e){var t,n;await(null===(t=ca._getClient())||void 0===t||null===(n=t.reconnectExternal)||void 0===n?void 0:n.call(t,e));const a=e.chain||Ua.state.activeChain;a&&za.setConnectorId(e.id,a)},async setPreferredAccountType(e,t){var n;if(!t)return;na.setLoading(!0,Ua.state.activeChain);const a=za.getAuthConnector();a&&(Ua.setAccountProp("preferredAccountType",e,t),await a.provider.setPreferredAccount(e),un.setPreferredAccountTypes(Object.entries(Ua.state.chains).reduce(((e,t)=>{let[n,a]=t;const o=n,i=$a(o);return void 0!==i&&(e[o]=i),e}),{})),await ca.reconnectExternal(a),na.setLoading(!1,Ua.state.activeChain),xn.sendEvent({type:"track",event:"SET_PREFERRED_ACCOUNT_TYPE",properties:{accountType:e,network:(null===(n=Ua.state.activeCaipNetwork)||void 0===n?void 0:n.caipNetworkId)||""}}))},async signMessage(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.signMessage(e)},parseUnits(e,t){var n;return null===(n=ca._getClient())||void 0===n?void 0:n.parseUnits(e,t)},formatUnits(e,t){var n;return null===(n=ca._getClient())||void 0===n?void 0:n.formatUnits(e,t)},updateBalance(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.updateBalance(e)},async sendTransaction(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.sendTransaction(e)},async getCapabilities(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.getCapabilities(e)},async grantPermissions(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.grantPermissions(e)},async walletGetAssets(e){var t,n;return null!==(t=null===(n=ca._getClient())||void 0===n?void 0:n.walletGetAssets(e))&&void 0!==t?t:{}},async estimateGas(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.estimateGas(e)},async writeContract(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.writeContract(e)},async writeSolanaTransaction(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.writeSolanaTransaction(e)},async getEnsAddress(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.getEnsAddress(e)},async getEnsAvatar(e){var t;return null===(t=ca._getClient())||void 0===t?void 0:t.getEnsAvatar(e)},checkInstalled(e){var t,n;return(null===(t=ca._getClient())||void 0===t||null===(n=t.checkInstalled)||void 0===n?void 0:n.call(t,e))||!1},resetWcConnection(){ra.wcUri=void 0,ra.wcPairingExpiry=void 0,ra.wcLinking=void 0,ra.recentWallet=void 0,ra.wcFetchingUri=!1,ra.status="disconnected",ia.resetTransactions(),un.deleteWalletConnectDeepLink(),un.deleteRecentWallet(),ea.set({connectingWallet:void 0})},resetUri(){ra.wcUri=void 0,ra.wcPairingExpiry=void 0,sa=void 0,ra.wcFetchingUri=!1,ea.set({connectingWallet:void 0})},finalizeWcConnection(e){const{wcLinking:t,recentWallet:n}=ca.state;var a,o;(t&&un.setWalletConnectDeepLink(t),n&&un.setAppKitRecent(n),e)&&xn.sendEvent({type:"track",event:"CONNECT_SUCCESS",address:e,properties:{method:t?"mobile":"qrcode",name:(null===(a=Qn.state.data)||void 0===a||null===(o=a.wallet)||void 0===o?void 0:o.name)||"Unknown",view:Qn.state.view,walletRank:null===n||void 0===n?void 0:n.order}})},setWcBasic(e){ra.wcBasic=e},setUri(e){ra.wcUri=e,ra.wcFetchingUri=!1,ra.wcPairingExpiry=pn.getPairingExpiry()},setWcLinking(e){ra.wcLinking=e},setWcError(e){ra.wcError=e,ra.wcFetchingUri=!1,ra.buffering=!1},setRecentWallet(e){ra.recentWallet=e},setBuffering(e){ra.buffering=e},setStatus(e){ra.status=e},setIsSwitchingConnection(e){ra.isSwitchingConnection=e},async disconnect(){let{id:e,namespace:t,initialDisconnect:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var a;await(null===(a=ca._getClient())||void 0===a?void 0:a.disconnect({id:e,chainNamespace:t,initialDisconnect:n}))}catch(o){throw new Dn("Failed to disconnect","INTERNAL_SDK_ERROR",o)}},async disconnectConnector(e){let{id:t,namespace:n}=e;try{var a;await(null===(a=ca._getClient())||void 0===a?void 0:a.disconnectConnector({id:t,namespace:n}))}catch(o){throw new Dn("Failed to disconnect connector","INTERNAL_SDK_ERROR",o)}},setConnections(e,t){const n=new Map(ra.connections);n.set(t,e),ra.connections=n},async handleAuthAccountSwitch(e){var t,n;let{address:a,namespace:o}=e;const i=Ua.getAccountData(o),r=null===i||void 0===i||null===(t=i.user)||void 0===t||null===(n=t.accounts)||void 0===n?void 0:n.find((e=>"smartAccount"===e.type)),s=r&&r.address.toLowerCase()===a.toLowerCase()&&aa.canSwitchToSmartAccount(o)?"smartAccount":"eoa";await ca.setPreferredAccountType(s,o)},async handleActiveConnection(e){let{connection:t,namespace:n,address:a}=e;const o=za.getConnectorById(t.connectorId),i=t.connectorId===ft.CONNECTOR_ID.AUTH;if(!o)throw new Error(`No connector found for connection: ${t.connectorId}`);if(!i){const e=await ca.connectExternal({id:o.id,type:o.type,provider:o.provider,address:a,chain:n},n);return null===e||void 0===e?void 0:e.address}return a&&await ca.handleAuthAccountSwitch({address:a,namespace:n}),a},async handleDisconnectedConnection(e){var t,n;let{connection:a,namespace:o,address:i,closeModalOnConnect:r}=e;const s=za.getConnectorById(a.connectorId),c=null===(t=a.auth)||void 0===t||null===(n=t.name)||void 0===n?void 0:n.toLowerCase(),l=a.connectorId===ft.CONNECTOR_ID.AUTH,d=a.connectorId===ft.CONNECTOR_ID.WALLET_CONNECT;if(!s)throw new Error(`No connector found for connection: ${a.connectorId}`);let u;if(l)if(c&&aa.isSocialProvider(c)){const{address:e}=await aa.connectSocial({social:c,closeModalOnConnect:r,onOpenFarcaster(){na.open({view:"ConnectingFarcaster"})},onConnect(){Qn.replace("ProfileWallets")}});u=e}else{const{address:e}=await aa.connectEmail({closeModalOnConnect:r,onOpen(){na.open({view:"EmailLogin"})},onConnect(){Qn.replace("ProfileWallets")}});u=e}else if(d){const{address:e}=await aa.connectWalletConnect({walletConnect:!0,connector:s,closeModalOnConnect:r,onOpen(e){const t=e?"AllWallets":"ConnectingWalletConnect";na.state.open?Qn.push(t):na.open({view:t})},onConnect(){Qn.replace("ProfileWallets")}});u=e}else{const e=await ca.connectExternal({id:s.id,type:s.type,provider:s.provider,chain:o},o);e&&(u=e.address)}return l&&i&&await ca.handleAuthAccountSwitch({address:i,namespace:o}),u},async switchConnection(e){var t;let n,{connection:a,address:o,namespace:i,closeModalOnConnect:r,onChange:s}=e;const c=null===(t=Ua.getAccountData(i))||void 0===t?void 0:t.caipAddress;if(c){const{address:e}=xt.parseCaipAddress(c);n=e}const l=On.getConnectionStatus(a,i);switch(l){case"connected":case"active":{const e=await ca.handleActiveConnection({connection:a,namespace:i,address:o});if(n&&e){const t=e.toLowerCase()!==n.toLowerCase();null===s||void 0===s||s({address:e,namespace:i,hasSwitchedAccount:t,hasSwitchedWallet:"active"===l})}break}case"disconnected":{const e=await ca.handleDisconnectedConnection({connection:a,namespace:i,address:o,closeModalOnConnect:r});e&&(null===s||void 0===s||s({address:e,namespace:i,hasSwitchedAccount:!0,hasSwitchedWallet:!0}));break}default:throw new Error(`Invalid connection status: ${l}`)}}}),la={createBalance(e,t){const n={name:e.metadata.name||"",symbol:e.metadata.symbol||"",decimals:e.metadata.decimals||0,value:e.metadata.value||0,price:e.metadata.price||0,iconUrl:e.metadata.iconUrl||""};return{name:n.name,symbol:n.symbol,chainId:t,address:"native"===e.address?void 0:this.convertAddressToCAIP10Address(e.address,t),value:n.value,price:n.price,quantity:{decimals:n.decimals.toString(),numeric:this.convertHexToBalance({hex:e.balance,decimals:n.decimals})},iconUrl:n.iconUrl}},convertHexToBalance(e){let{hex:t,decimals:n}=e;return(0,Bt.b)(BigInt(t),n)},convertAddressToCAIP10Address:(e,t)=>`${t}:${e}`,createCAIP2ChainId:(e,t)=>`${t}:${parseInt(e,16)}`,getChainIdHexFromCAIP2ChainId(e){const t=e.split(":");if(t.length<2||!t[1])return"0x0";const n=t[1],a=parseInt(n,10);return isNaN(a)?"0x0":`0x${a.toString(16)}`},isWalletGetAssetsResponse(e){return"object"===typeof e&&null!==e&&Object.values(e).every((e=>Array.isArray(e)&&e.every((e=>this.isValidAsset(e)))))},isValidAsset:e=>"object"===typeof e&&null!==e&&"string"===typeof e.address&&"string"===typeof e.balance&&("ERC20"===e.type||"NATIVE"===e.type)&&"object"===typeof e.metadata&&null!==e.metadata&&"string"===typeof e.metadata.name&&"string"===typeof e.metadata.symbol&&"number"===typeof e.metadata.decimals&&"number"===typeof e.metadata.price&&"string"===typeof e.metadata.iconUrl};let da;async function ua(){if(!da){const{createPublicClient:e,http:t,defineChain:a}=await n.e(284).then(n.bind(n,50284));da={createPublicClient:e,http:t,defineChain:a}}return da}const pa={getBlockchainApiRpcUrl(e,t){const n=new URL("https://rpc.walletconnect.org/v1/");return n.searchParams.set("chainId",e),n.searchParams.set("projectId",t),n.toString()},async getViemChain(e){const{defineChain:t}=await ua(),{chainId:n}=xt.parseCaipNetworkId(e.caipNetworkId);return t({...e,id:Number(n)})},async createViemPublicClient(e){const{createPublicClient:t,http:n}=await ua(),a=wn.state.projectId,o=await pa.getViemChain(e);if(!o)throw new Error(`Chain ${e.caipNetworkId} not found in viem/chains`);return t({chain:o,transport:n(pa.getBlockchainApiRpcUrl(e.caipNetworkId,a))})}},ma={async getMyTokensWithBalance(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forceUpdate:void 0,caipNetwork:Ua.state.activeCaipNetwork,address:null===(e=Ua.getAccountData())||void 0===e?void 0:e.address};const{forceUpdate:n,caipNetwork:a,address:o}=t,i=za.getConnectorId("eip155")===ft.CONNECTOR_ID.AUTH;if(!o)return[];const r=a?`${a.caipNetworkId}:${o}`:o,s=un.getBalanceCacheForCaipAddress(r);if(s)return s.balances;if(a&&a.chainNamespace===ft.CHAIN.EVM&&i){const e=await this.getEIP155Balances(o,a);if(e)return this.filterLowQualityTokens(e)}const c=await An.getBalance(o,null===a||void 0===a?void 0:a.caipNetworkId,n);return this.filterLowQualityTokens(c.balances)},async getEIP155Balances(e,t){try{var n,a;const o=la.getChainIdHexFromCAIP2ChainId(t.caipNetworkId),i=await ca.getCapabilities(e);if(null===i||void 0===i||null===(n=i[o])||void 0===n||null===(a=n.assetDiscovery)||void 0===a||!a.supported)return null;const r=await ca.walletGetAssets({account:e,chainFilter:[o]});if(!la.isWalletGetAssetsResponse(r))return null;const s=(r[o]||[]).map((e=>la.createBalance(e,t.caipNetworkId)));return un.updateBalanceCache({caipAddress:`${t.caipNetworkId}:${e}`,balance:{balances:s},timestamp:Date.now()}),s}catch(o){return null}},filterLowQualityTokens:e=>e.filter((e=>"0"!==e.quantity.decimals)),async fetchERC20Balance(e){let{caipAddress:t,assetAddress:n,caipNetwork:a}=e;const o=await pa.createViemPublicClient(a),{address:i}=xt.parseCaipAddress(t),[{result:r},{result:s},{result:c},{result:l}]=await o.multicall({contracts:[{address:n,functionName:"name",args:[],abi:Dt.Wo},{address:n,functionName:"symbol",args:[],abi:Dt.Wo},{address:n,functionName:"balanceOf",args:[i],abi:Dt.Wo},{address:n,functionName:"decimals",args:[],abi:Dt.Wo}]});return{name:r,symbol:s,decimals:l,balance:c&&l?(0,Bt.b)(c,l):"0"}}},ha={adapters:{}},va={state:ha,initialize(e){ha.adapters={...e}},get:e=>ha.adapters[e]},ga={eip155:void 0,solana:void 0,polkadot:void 0,bip122:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:void 0},wa=(0,w.sj)({providers:{...ga},providerIds:{...ga}}),ya={state:wa,subscribeKey:(e,t)=>(0,y.VW)(wa,e,t),subscribe:e=>(0,w.Ld)(wa,(()=>{e(wa)})),subscribeProviders:e=>(0,w.Ld)(wa.providers,(()=>e(wa.providers))),setProvider(e,t){e&&t&&(wa.providers[e]=(0,w.iH)(t))},getProvider(e){if(e)return wa.providers[e]},setProviderId(e,t){t&&(wa.providerIds[e]=t)},getProviderId(e){if(e)return wa.providerIds[e]},reset(){wa.providers={...ga},wa.providerIds={...ga}},resetChain(e){wa.providers[e]=void 0,wa.providerIds[e]=void 0}},fa={RPC_ERROR_CODE:{USER_REJECTED_REQUEST:4001,USER_REJECTED_METHODS:5002,USER_REJECTED:5e3,SEND_TRANSACTION_ERROR:5001},PROVIDER_RPC_ERROR_NAME:{PROVIDER_RPC:"ProviderRpcError",USER_REJECTED_REQUEST:"UserRejectedRequestError",SEND_TRANSACTION_ERROR:"SendTransactionError"},isRpcProviderError(e){try{if("object"===typeof e&&null!==e){const t=e,n="string"===typeof t.message,a="number"===typeof t.code;return n&&a}return!1}catch{return!1}},isUserRejectedMessage:e=>e.toLowerCase().includes("user rejected")||e.toLowerCase().includes("user cancelled")||e.toLowerCase().includes("user canceled"),isUserRejectedRequestError(e){if(fa.isRpcProviderError(e)){const t=e.code===fa.RPC_ERROR_CODE.USER_REJECTED_REQUEST,n=e.code===fa.RPC_ERROR_CODE.USER_REJECTED_METHODS;return t||n||fa.isUserRejectedMessage(e.message)}return e instanceof Error&&fa.isUserRejectedMessage(e.message)}};class ba extends Error{constructor(e,t){super(t.message,{cause:e}),this.name=fa.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC,this.code=t.code}}class Ca extends ba{constructor(e){super(e,{code:fa.RPC_ERROR_CODE.USER_REJECTED_REQUEST,message:"User rejected the request"}),this.name=fa.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST}}var ka=n(98113);const Ea={bigNumber(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{safe:!1};try{return e?new ka.Z(e):new ka.Z(0)}catch(n){if(t.safe)return new ka.Z(0);throw n}},formatNumber(e,t){const{decimals:n,round:a=8,safe:o=!0}=t;return Ea.bigNumber(e,{safe:o}).div(new ka.Z(10).pow(n)).round(a)},multiply(e,t){if(void 0===e||void 0===t)return new ka.Z(0);const n=new ka.Z(e),a=new ka.Z(t);return n.times(a)},toFixed(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return void 0===e||""===e?new ka.Z(0).toFixed(t):new ka.Z(e).toFixed(t)},formatNumberToLocalString(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return void 0===e||""===e?"0.00":"number"===typeof e?e.toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"}):parseFloat(e).toLocaleString("en-US",{maximumFractionDigits:t,minimumFractionDigits:t,roundingMode:"floor"})},parseLocalStringToNumber(e){if(void 0===e||""===e)return 0;const t=e.replace(/,/gu,"");return new ka.Z(t).toNumber()}},Aa=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Na=[{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],Ia=e=>ft.USDT_CONTRACT_ADDRESSES.includes(e)?Na:Aa,Ta={async getTokenList(e){var t;const n=await An.fetchSwapTokens({chainId:e});return(null===n||void 0===n||null===(t=n.tokens)||void 0===t?void 0:t.map((e=>({...e,eip2612:!1,quantity:{decimals:"0",numeric:"0"},price:0,value:0}))))||[]},async fetchGasPrice(){var e;const t=Ua.state.activeCaipNetwork;if(!t)return null;try{if("solana"===t.chainNamespace){const t=null===(e=await(null===ca||void 0===ca?void 0:ca.estimateGas({chainNamespace:"solana"})))||void 0===e?void 0:e.toString();return{standard:t,fast:t,instant:t}}return await An.fetchGasPrice({chainId:t.caipNetworkId})}catch{return null}},async fetchSwapAllowance(e){let{tokenAddress:t,userAddress:n,sourceTokenAmount:a,sourceTokenDecimals:o}=e;const i=await An.fetchSwapAllowance({tokenAddress:t,userAddress:n});if(null!==i&&void 0!==i&&i.allowance&&a&&o){const e=ca.parseUnits(a,o)||0;return BigInt(i.allowance)>=e}return!1},async getMyTokensWithBalance(e){var t;const n=await ma.getMyTokensWithBalance({forceUpdate:e,caipNetwork:Ua.state.activeCaipNetwork,address:null===(t=Ua.getAccountData())||void 0===t?void 0:t.address});return Ua.setAccountProp("tokenBalance",n,Ua.state.activeChain),this.mapBalancesToSwapTokens(n)},mapBalancesToSwapTokens:e=>(null===e||void 0===e?void 0:e.map((e=>({...e,address:null!==e&&void 0!==e&&e.address?e.address:Da(),decimals:parseInt(e.quantity.decimals,10),logoUri:e.iconUrl,eip2612:!1}))))||[],async handleSwapError(e){try{var t,n;const a=null===e||void 0===e?void 0:e.cause;if(null===a||void 0===a||!a.json)return;const o=await a.json(),i=null===o||void 0===o||null===(t=o.reasons)||void 0===t||null===(n=t[0])||void 0===n?void 0:n.description;return null!==i&&void 0!==i&&i.includes("insufficient liquidity")?"Insufficient liquidity":void 0}catch{return}}},Sa=(0,w.sj)({tokenBalances:[],loading:!1}),xa=$n({state:Sa,subscribe:e=>(0,w.Ld)(Sa,(()=>e(Sa))),subscribeKey:(e,t)=>(0,y.VW)(Sa,e,t),setToken(e){e&&(Sa.token=(0,w.iH)(e))},setTokenAmount(e){Sa.sendTokenAmount=e},setReceiverAddress(e){Sa.receiverAddress=e},setReceiverProfileImageUrl(e){Sa.receiverProfileImageUrl=e},setReceiverProfileName(e){Sa.receiverProfileName=e},setNetworkBalanceInUsd(e){Sa.networkBalanceInUSD=e},setLoading(e){Sa.loading=e},getSdkEventProperties(e){var t,n,a;return{message:pn.parseError(e),isSmartAccount:$a(Ua.state.activeChain)===St.ACCOUNT_TYPES.SMART_ACCOUNT,token:(null===(t=Sa.token)||void 0===t?void 0:t.symbol)||"",amount:null!==(n=Sa.sendTokenAmount)&&void 0!==n?n:0,network:(null===(a=Ua.state.activeCaipNetwork)||void 0===a?void 0:a.caipNetworkId)||""}},async sendToken(){try{var e;switch(xa.setLoading(!0),null===(e=Ua.state.activeCaipNetwork)||void 0===e?void 0:e.chainNamespace){case"eip155":return void await xa.sendEvmToken();case"solana":return void await xa.sendSolanaToken();default:throw new Error("Unsupported chain")}}catch(t){if(fa.isUserRejectedRequestError(t))throw new Ca(t);throw t}finally{xa.setLoading(!1)}},async sendEvmToken(){var e;const t=Ua.state.activeChain;if(!t)throw new Error("SendController:sendEvmToken - activeChainNamespace is required");const n=$a(t);if(!xa.state.sendTokenAmount||!xa.state.receiverAddress)throw new Error("An amount and receiver address are required");if(!xa.state.token)throw new Error("A token is required");if(null!==(e=xa.state.token)&&void 0!==e&&e.address){var a;xn.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:n===St.ACCOUNT_TYPES.SMART_ACCOUNT,token:xa.state.token.address,amount:xa.state.sendTokenAmount,network:(null===(a=Ua.state.activeCaipNetwork)||void 0===a?void 0:a.caipNetworkId)||""}});const{hash:e}=await xa.sendERC20Token({receiverAddress:xa.state.receiverAddress,tokenAddress:xa.state.token.address,sendTokenAmount:xa.state.sendTokenAmount,decimals:xa.state.token.quantity.decimals});e&&(Sa.hash=e)}else{var o;xn.sendEvent({type:"track",event:"SEND_INITIATED",properties:{isSmartAccount:n===St.ACCOUNT_TYPES.SMART_ACCOUNT,token:xa.state.token.symbol||"",amount:xa.state.sendTokenAmount,network:(null===(o=Ua.state.activeCaipNetwork)||void 0===o?void 0:o.caipNetworkId)||""}});const{hash:e}=await xa.sendNativeToken({receiverAddress:xa.state.receiverAddress,sendTokenAmount:xa.state.sendTokenAmount,decimals:xa.state.token.quantity.decimals});e&&(Sa.hash=e)}},async fetchTokenBalance(e){var t,n,a,o;Sa.loading=!0;const i=Ua.state.activeChain,r=null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId,s=null===(n=Ua.state.activeCaipNetwork)||void 0===n?void 0:n.chainNamespace,c=null!==(a=null===(o=Ua.getAccountData(i))||void 0===o?void 0:o.caipAddress)&&void 0!==a?a:Ua.state.activeCaipAddress,l=c?pn.getPlainAddress(c):void 0;if(Sa.lastRetry&&!pn.isAllowedRetry(Sa.lastRetry,30*Wt.ONE_SEC_MS))return Sa.loading=!1,[];try{if(l&&r&&s){const e=await ma.getMyTokensWithBalance();return Sa.tokenBalances=e,Sa.lastRetry=void 0,e}}catch(d){Sa.lastRetry=Date.now(),null===e||void 0===e||e(d),bn.showError("Token Balance Unavailable")}finally{Sa.loading=!1}return[]},fetchNetworkBalance(){if(0===Sa.tokenBalances.length)return;const e=Ta.mapBalancesToSwapTokens(Sa.tokenBalances);if(!e)return;const t=e.find((e=>e.address===Da()));t&&(Sa.networkBalanceInUSD=t?Ea.multiply(t.quantity.numeric,t.price).toString():"0")},async sendNativeToken(e){var t,n,a,o;Qn.pushTransactionStack({});const i=e.receiverAddress,r=null===(t=Ua.getAccountData())||void 0===t?void 0:t.address,s=ca.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),c=await ca.sendTransaction({chainNamespace:ft.CHAIN.EVM,to:i,address:r,data:"0x",value:null!==s&&void 0!==s?s:BigInt(0)});return xn.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:$a("eip155")===St.ACCOUNT_TYPES.SMART_ACCOUNT,token:(null===(n=xa.state.token)||void 0===n?void 0:n.symbol)||"",amount:e.sendTokenAmount,network:(null===(a=Ua.state.activeCaipNetwork)||void 0===a?void 0:a.caipNetworkId)||"",hash:c||""}}),null===(o=ca._getClient())||void 0===o||o.updateBalance("eip155"),xa.resetSend(),{hash:c}},async sendERC20Token(e){var t;Qn.pushTransactionStack({onSuccess(){Qn.replace("Account")}});const n=ca.parseUnits(e.sendTokenAmount.toString(),Number(e.decimals)),a=null===(t=Ua.getAccountData())||void 0===t?void 0:t.address;if(a&&e.sendTokenAmount&&e.receiverAddress&&e.tokenAddress){var o,i;const t=pn.getPlainAddress(e.tokenAddress);if(!t)throw new Error("SendController:sendERC20Token - tokenAddress is required");const r=await ca.writeContract({fromAddress:a,tokenAddress:t,args:[e.receiverAddress,null!==n&&void 0!==n?n:BigInt(0)],method:"transfer",abi:Ia(t),chainNamespace:ft.CHAIN.EVM});return xn.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:$a("eip155")===St.ACCOUNT_TYPES.SMART_ACCOUNT,token:(null===(o=xa.state.token)||void 0===o?void 0:o.symbol)||"",amount:e.sendTokenAmount,network:(null===(i=Ua.state.activeCaipNetwork)||void 0===i?void 0:i.caipNetworkId)||"",hash:r||""}}),xa.resetSend(),{hash:r}}return{hash:void 0}},async sendSolanaToken(){var e,t,n;if(!xa.state.sendTokenAmount||!xa.state.receiverAddress)throw new Error("An amount and receiver address are required");let a;Qn.pushTransactionStack({onSuccess(){Qn.replace("Account")}}),xa.state.token&&xa.state.token.address!==Wt.SOLANA_NATIVE_TOKEN_ADDRESS&&(a=pn.isCaipAddress(xa.state.token.address)?pn.getPlainAddress(xa.state.token.address):xa.state.token.address);const o=await ca.sendTransaction({chainNamespace:"solana",tokenMint:a,to:xa.state.receiverAddress,value:xa.state.sendTokenAmount});o&&(Sa.hash=o),null===(e=ca._getClient())||void 0===e||e.updateBalance("solana"),xn.sendEvent({type:"track",event:"SEND_SUCCESS",properties:{isSmartAccount:!1,token:(null===(t=xa.state.token)||void 0===t?void 0:t.symbol)||"",amount:xa.state.sendTokenAmount,network:(null===(n=Ua.state.activeCaipNetwork)||void 0===n?void 0:n.caipNetworkId)||"",hash:o||""}}),xa.resetSend()},resetSend(){Sa.token=void 0,Sa.sendTokenAmount=void 0,Sa.receiverAddress=void 0,Sa.receiverProfileImageUrl=void 0,Sa.receiverProfileName=void 0,Sa.loading=!1,Sa.tokenBalances=[]}}),Oa={currentTab:0,tokenBalance:[],smartAccountDeployed:!1,addressLabels:new Map,user:void 0,preferredAccountType:void 0},_a={caipNetwork:void 0,supportsAllNetworks:!0,smartAccountEnabledNetworks:[]},Pa=(0,w.sj)({chains:(0,y.Yr)(),activeCaipAddress:void 0,activeChain:void 0,activeCaipNetwork:void 0,noAdapters:!1,universalAdapter:{connectionControllerClient:void 0},isSwitchingNamespace:!1}),Ra={state:Pa,subscribe:e=>(0,w.Ld)(Pa,(()=>{e(Pa)})),subscribeKey:(e,t)=>(0,y.VW)(Pa,e,t),subscribeAccountStateProp(e,t,n){var a;const o=n||Pa.activeChain;return o?(0,y.VW)((null===(a=Pa.chains.get(o))||void 0===a?void 0:a.accountState)||{},e,t):()=>{}},subscribeChainProp(e,t,n){let a;return(0,w.Ld)(Pa.chains,(()=>{const o=n||Pa.activeChain;if(o){var i;const n=null===(i=Pa.chains.get(o))||void 0===i?void 0:i[e];a!==n&&(a=n,t(n))}}))},initialize(e,t,n){var a;const{chainId:o,namespace:i}=un.getActiveNetworkProps(),r=null===t||void 0===t?void 0:t.find((e=>e.id.toString()===(null===o||void 0===o?void 0:o.toString()))),s=e.find((e=>(null===e||void 0===e?void 0:e.namespace)===i))||(null===e||void 0===e?void 0:e[0]),c=e.map((e=>e.namespace)).filter((e=>void 0!==e)),l=wn.state.enableEmbedded?new Set([...c]):new Set([...null!==(a=null===t||void 0===t?void 0:t.map((e=>e.chainNamespace)))&&void 0!==a?a:[]]);0!==(null===e||void 0===e?void 0:e.length)&&s||(Pa.noAdapters=!0),Pa.noAdapters||(Pa.activeChain=null===s||void 0===s?void 0:s.namespace,Pa.activeCaipNetwork=r,Ua.setChainNetworkData(null===s||void 0===s?void 0:s.namespace,{caipNetwork:r}),Pa.activeChain&&ea.set({activeChain:null===s||void 0===s?void 0:s.namespace})),l.forEach((e=>{const a=null===t||void 0===t?void 0:t.filter((t=>t.chainNamespace===e)),o=un.getPreferredAccountTypes()||{},i={...wn.state.defaultAccountTypes,...o};Ua.state.chains.set(e,{namespace:e,networkState:(0,w.sj)({..._a,caipNetwork:null===a||void 0===a?void 0:a[0]}),accountState:(0,w.sj)({...Oa,preferredAccountType:i[e]}),caipNetworks:null!==a&&void 0!==a?a:[],...n}),Ua.setRequestedCaipNetworks(null!==a&&void 0!==a?a:[],e)}))},removeAdapter(e){if(Pa.activeChain===e){const a=Array.from(Pa.chains.entries()).find((t=>{let[n]=t;return n!==e}));if(a){var t,n;const e=null===(t=a[1])||void 0===t||null===(n=t.caipNetworks)||void 0===n?void 0:n[0];e&&Ua.setActiveCaipNetwork(e)}}Pa.chains.delete(e)},addAdapter(e,t,n){var a;let{connectionControllerClient:o}=t;if(!e.namespace)throw new Error("ChainController:addAdapter - adapter must have a namespace");Pa.chains.set(e.namespace,{namespace:e.namespace,networkState:{..._a,caipNetwork:n[0]},accountState:{...Oa},caipNetworks:n,connectionControllerClient:o}),Ua.setRequestedCaipNetworks(null!==(a=null===n||void 0===n?void 0:n.filter((t=>t.chainNamespace===e.namespace)))&&void 0!==a?a:[],e.namespace)},addNetwork(e){const t=Pa.chains.get(e.chainNamespace);if(t){var n;const a=[...t.caipNetworks||[]];null!==(n=t.caipNetworks)&&void 0!==n&&n.find((t=>t.id===e.id))||a.push(e),Pa.chains.set(e.chainNamespace,{...t,caipNetworks:a}),Ua.setRequestedCaipNetworks(a,e.chainNamespace),za.filterByNamespace(e.chainNamespace,!0)}},removeNetwork(e,t){const n=Pa.chains.get(e);if(n){var a,o,i;const r=(null===(a=Pa.activeCaipNetwork)||void 0===a?void 0:a.id)===t,s=[...(null===(o=n.caipNetworks)||void 0===o?void 0:o.filter((e=>e.id!==t)))||[]];r&&null!==n&&void 0!==n&&null!==(i=n.caipNetworks)&&void 0!==i&&i[0]&&Ua.setActiveCaipNetwork(n.caipNetworks[0]),Pa.chains.set(e,{...n,caipNetworks:s}),Ua.setRequestedCaipNetworks(s||[],e),0===s.length&&za.filterByNamespace(e,!1)}},setAdapterNetworkState(e,t){const n=Pa.chains.get(e);n&&(n.networkState={...n.networkState||_a,...t},Pa.chains.set(e,n))},setChainAccountData(e,t){if(!e)throw new Error("Chain is required to update chain account data");const n=Pa.chains.get(e);if(n){const a={...n.accountState||Oa,...t};Pa.chains.set(e,{...n,accountState:a}),1!==Pa.chains.size&&Pa.activeChain!==e||t.caipAddress&&(Pa.activeCaipAddress=t.caipAddress)}},setChainNetworkData(e,t){if(!e)return;const n=Pa.chains.get(e);if(n){const a={...n.networkState||_a,...t};Pa.chains.set(e,{...n,networkState:a})}},setAccountProp(e,t,n){let a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];Ua.setChainAccountData(n,{[e]:t},a)},setActiveNamespace(e){var t;Pa.activeChain=e;const n=e?Pa.chains.get(e):void 0,a=null===n||void 0===n||null===(t=n.networkState)||void 0===t?void 0:t.caipNetwork;var o;null!==a&&void 0!==a&&a.id&&e&&(Pa.activeCaipAddress=null===n||void 0===n||null===(o=n.accountState)||void 0===o?void 0:o.caipAddress,Pa.activeCaipNetwork=a,Ua.setChainNetworkData(e,{caipNetwork:a}),un.setActiveCaipNetworkId(null===a||void 0===a?void 0:a.caipNetworkId),ea.set({activeChain:e,selectedNetworkId:null===a||void 0===a?void 0:a.caipNetworkId}))},setActiveCaipNetwork(e){var t,n;if(!e)return;const a=Pa.activeChain===e.chainNamespace;a||Ua.setIsSwitchingNamespace(!0);const o=Pa.chains.get(e.chainNamespace);Pa.activeChain=e.chainNamespace,Pa.activeCaipNetwork=e,Ua.setChainNetworkData(e.chainNamespace,{caipNetwork:e});let i=null===o||void 0===o||null===(t=o.accountState)||void 0===t?void 0:t.address;if(i)Pa.activeCaipAddress=`${e.chainNamespace}:${e.id}:${i}`;else if(a&&Pa.activeCaipAddress){const{address:t}=xt.parseCaipAddress(Pa.activeCaipAddress);i=t,Pa.activeCaipAddress=`${e.caipNetworkId}:${i}`}else Pa.activeCaipAddress=void 0;Ua.setChainAccountData(e.chainNamespace,{address:i,caipAddress:Pa.activeCaipAddress}),xa.resetSend(),ea.set({activeChain:Pa.activeChain,selectedNetworkId:null===(n=Pa.activeCaipNetwork)||void 0===n?void 0:n.caipNetworkId}),un.setActiveCaipNetworkId(e.caipNetworkId);Ua.checkIfSupportedNetwork(e.chainNamespace)||!wn.state.enableNetworkSwitch||wn.state.allowUnsupportedChain||ca.state.wcBasic||Ua.showUnsupportedChainUI()},addCaipNetwork(e){if(!e)return;const t=Pa.chains.get(e.chainNamespace);var n;t&&(null===t||void 0===t||null===(n=t.caipNetworks)||void 0===n||n.push(e))},async switchActiveNamespace(e){var t;if(!e)return;const n=e!==Ua.state.activeChain,a=null===(t=Ua.getNetworkData(e))||void 0===t?void 0:t.caipNetwork,o=Ua.getCaipNetworkByNamespace(e,null===a||void 0===a?void 0:a.id);n&&o&&await Ua.switchActiveNetwork(o)},async switchActiveNetwork(e){var t;let{throwOnFailure:n=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=Ua.state.activeChain;if(!a)throw new Error("ChainController:switchActiveNetwork - namespace is required");const o="AUTH"===ya.getProviderId(Pa.activeChain),i=null===(t=Ua.getAccountData(a))||void 0===t?void 0:t.address,r=ft.AUTH_CONNECTOR_SUPPORTED_CHAINS.includes(e.chainNamespace);try{if(i&&e.chainNamespace===a||o&&r){const t=va.get(e.chainNamespace);if(!t)throw new Error("Adapter not found");await t.switchNetwork({caipNetwork:e})}Ua.setActiveCaipNetwork(e)}catch(s){if(n)throw s}xn.sendEvent({type:"track",event:"SWITCH_NETWORK",properties:{network:e.caipNetworkId}})},getConnectionControllerClient(e){const t=e||Pa.activeChain;if(!t)throw new Error("Chain is required to get connection controller client");const n=Pa.chains.get(t);if(null===n||void 0===n||!n.connectionControllerClient)throw new Error("ConnectionController client not set");return n.connectionControllerClient},getNetworkProp(e,t){var n;const a=null===(n=Pa.chains.get(t))||void 0===n?void 0:n.networkState;if(a)return a[e]},getRequestedCaipNetworks(e){const t=Pa.chains.get(e),{approvedCaipNetworkIds:n=[],requestedCaipNetworks:a=[]}=(null===t||void 0===t?void 0:t.networkState)||{};return pn.sortRequestedNetworks(n,a).filter((e=>null===e||void 0===e?void 0:e.id))},getAllRequestedCaipNetworks(){const e=[];return Pa.chains.forEach((t=>{if(!t.namespace)throw new Error("ChainController:getAllRequestedCaipNetworks - chainAdapter must have a namespace");const n=Ua.getRequestedCaipNetworks(t.namespace);e.push(...n)})),e},setRequestedCaipNetworks(e,t){Ua.setAdapterNetworkState(t,{requestedCaipNetworks:e});const n=Ua.getAllRequestedCaipNetworks().map((e=>e.chainNamespace)),a=Array.from(new Set(n));za.filterByNamespaces(a)},getAllApprovedCaipNetworkIds(){const e=[];return Pa.chains.forEach((t=>{if(!t.namespace)throw new Error("ChainController:getAllApprovedCaipNetworkIds - chainAdapter must have a namespace");const n=Ua.getApprovedCaipNetworkIds(t.namespace);e.push(...n)})),e},getActiveCaipNetwork(e){var t,n;return e?null===(t=Pa.chains.get(e))||void 0===t||null===(n=t.networkState)||void 0===n?void 0:n.caipNetwork:Pa.activeCaipNetwork},getActiveCaipAddress:()=>Pa.activeCaipAddress,getApprovedCaipNetworkIds(e){var t;const n=Pa.chains.get(e);return(null===n||void 0===n||null===(t=n.networkState)||void 0===t?void 0:t.approvedCaipNetworkIds)||[]},setApprovedCaipNetworksData(e,t){Ua.setAdapterNetworkState(e,t)},checkIfSupportedNetwork(e,t){var n;const a=t||(null===(n=Pa.activeCaipNetwork)||void 0===n?void 0:n.caipNetworkId),o=Ua.getRequestedCaipNetworks(e);return!o.length||(null===o||void 0===o?void 0:o.some((e=>e.caipNetworkId===a)))},checkIfSupportedChainId(e){if(!Pa.activeChain)return!0;const t=Ua.getRequestedCaipNetworks(Pa.activeChain);return null===t||void 0===t?void 0:t.some((t=>t.id===e))},checkIfSmartAccountEnabled(){var e,t;const n=bt.caipNetworkIdToNumber(null===(e=Pa.activeCaipNetwork)||void 0===e?void 0:e.caipNetworkId);if(!Pa.activeChain||!n)return!1;const a=(null===(t=Ut.get(Nt))||void 0===t?void 0:t.split(","))||[];return Boolean(null===a||void 0===a?void 0:a.includes(n.toString()))},showUnsupportedChainUI(){na.open({view:"UnsupportedChain"})},checkIfNamesSupported(){const e=Pa.activeCaipNetwork;return Boolean((null===e||void 0===e?void 0:e.chainNamespace)&&Wt.NAMES_SUPPORTED_CHAIN_NAMESPACES.includes(e.chainNamespace))},resetNetwork(e){Ua.setAdapterNetworkState(e,{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0})},resetAccount(e){var t,n;const a=e;if(!a)throw new Error("Chain is required to set account prop");const o=null===(t=Ua.state.chains.get(a))||void 0===t||null===(n=t.accountState)||void 0===n?void 0:n.preferredAccountType,i=wn.state.defaultAccountTypes[a];Pa.activeCaipAddress=void 0,Ua.setChainAccountData(a,{smartAccountDeployed:!1,currentTab:0,caipAddress:void 0,address:void 0,balance:void 0,balanceSymbol:void 0,profileName:void 0,profileImage:void 0,addressExplorerUrl:void 0,tokenBalance:[],connectedWalletInfo:void 0,preferredAccountType:i||o,socialProvider:void 0,socialWindow:void 0,farcasterUrl:void 0,user:void 0,status:"disconnected"}),za.removeConnectorId(a)},setIsSwitchingNamespace(e){Pa.isSwitchingNamespace=e},getFirstCaipNetworkSupportsAuthConnector(){const e=[];let t;if(Pa.chains.forEach((t=>{ft.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((e=>e===t.namespace))&&t.namespace&&e.push(t.namespace)})),e.length>0){var n,a;const o=e[0];return t=o?null===(n=Pa.chains.get(o))||void 0===n||null===(a=n.caipNetworks)||void 0===a?void 0:a[0]:void 0,t}},getAccountData(e){var t;const n=e||Pa.activeChain;if(n)return null===(t=Ua.state.chains.get(n))||void 0===t?void 0:t.accountState},getNetworkData(e){var t;const n=e||Pa.activeChain;if(n)return null===(t=Ua.state.chains.get(n))||void 0===t?void 0:t.networkState},getCaipNetworkByNamespace(e,t){var n,a,o;if(!e)return;const i=Ua.state.chains.get(e),r=null===i||void 0===i||null===(n=i.caipNetworks)||void 0===n?void 0:n.find((e=>e.id.toString()===(null===t||void 0===t?void 0:t.toString())));return r||((null===i||void 0===i||null===(a=i.networkState)||void 0===a?void 0:a.caipNetwork)||(null===i||void 0===i||null===(o=i.caipNetworks)||void 0===o?void 0:o[0]))},getRequestedCaipNetworkIds(){const e=za.state.filterByNamespace;return(e?[Pa.chains.get(e)]:Array.from(Pa.chains.values())).flatMap((e=>(null===e||void 0===e?void 0:e.caipNetworks)||[])).map((e=>e.caipNetworkId))},getCaipNetworks:e=>e?Ua.getRequestedCaipNetworks(e):Ua.getAllRequestedCaipNetworks(),getCaipNetworkById:(e,t)=>Ra.getCaipNetworks(t).find((t=>t.id.toString()===e.toString()||t.caipNetworkId.toString()===e.toString())),setLastConnectedSIWECaipNetwork(e){Pa.lastConnectedSIWECaipNetwork=e},getLastConnectedSIWECaipNetwork:()=>Pa.lastConnectedSIWECaipNetwork,async fetchTokenBalance(e){var t,n;const a=Ua.getAccountData();if(!a)return[];const o=null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.caipNetworkId,i=null===(n=Ua.state.activeCaipNetwork)||void 0===n?void 0:n.chainNamespace,r=Ua.state.activeCaipAddress,s=r?pn.getPlainAddress(r):void 0;if(Ua.setAccountProp("balanceLoading",!0,i),a.lastRetry&&!pn.isAllowedRetry(a.lastRetry,30*Wt.ONE_SEC_MS))return Ua.setAccountProp("balanceLoading",!1,i),[];try{if(s&&o&&i){const e=await ma.getMyTokensWithBalance();return Ua.setAccountProp("tokenBalance",e,i),Ua.setAccountProp("lastRetry",void 0,i),Ua.setAccountProp("balanceLoading",!1,i),e}}catch(c){Ua.setAccountProp("lastRetry",Date.now(),i),null===e||void 0===e||e(c),bn.showError("Token Balance Unavailable")}finally{Ua.setAccountProp("balanceLoading",!1,i)}return[]},isCaipNetworkDisabled(e){var t;const n=e.chainNamespace,a=Boolean(null===(t=Ua.getAccountData(n))||void 0===t?void 0:t.caipAddress),o=Ua.getAllApprovedCaipNetworkIds(),i=!1!==Ua.getNetworkProp("supportsAllNetworks",n),r=za.getConnectorId(n),s=za.getAuthConnector(),c=r===ft.CONNECTOR_ID.AUTH&&s;return!(!a||i||c)&&!(null!==o&&void 0!==o&&o.includes(e.caipNetworkId))}},Ua=$n(Ra);function Da(){var e,t;const n=(null===(e=Ua.state.activeCaipNetwork)||void 0===e?void 0:e.chainNamespace)||"eip155";return`${n}:${(null===(t=Ua.state.activeCaipNetwork)||void 0===t?void 0:t.id)||1}:${Wt.NATIVE_TOKEN_ADDRESS[n]}`}function Ba(e){return Wt.NATIVE_TOKEN_ADDRESS[e]}function $a(e){var t;return null===(t=Ua.getAccountData(e))||void 0===t?void 0:t.preferredAccountType}const Ma={isLowerCaseMatch:(e,t)=>(null===e||void 0===e?void 0:e.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase())},Wa={filterOutDuplicatesByRDNS(e){const t=wn.state.enableEIP6963?za.state.connectors:[],n=un.getRecentWallets(),a=t.map((e=>{var t;return null===(t=e.info)||void 0===t?void 0:t.rdns})).filter(Boolean),o=n.map((e=>e.rdns)).filter(Boolean),i=a.concat(o);if(i.includes("io.metamask.mobile")&&pn.isMobile()){const e=i.indexOf("io.metamask.mobile");i[e]="io.metamask"}return e.filter((e=>{if(null!==e&&void 0!==e&&e.rdns&&i.includes(String(e.rdns)))return!1;if(null===e||void 0===e||!e.rdns){if(t.some((t=>t.name===e.name)))return!1}return!0}))},filterOutDuplicatesByIds(e){const t=za.state.connectors.filter((e=>"ANNOUNCED"===e.type||"INJECTED"===e.type||"MULTI_CHAIN"===e.type)),n=un.getRecentWallets(),a=t.map((e=>{var t;return e.explorerId||(null===(t=e.explorerWallet)||void 0===t?void 0:t.id)||e.id})),o=n.map((e=>e.id)),i=a.concat(o);return e.filter((e=>!i.includes(null===e||void 0===e?void 0:e.id)))},filterOutDuplicateWallets(e){const t=this.filterOutDuplicatesByRDNS(e);return this.filterOutDuplicatesByIds(t)},markWalletsAsInstalled(e){const{connectors:t}=za.state,{featuredWalletIds:n}=wn.state,a=t.filter((e=>"ANNOUNCED"===e.type)).reduce(((e,t)=>{var n;return null!==(n=t.info)&&void 0!==n&&n.rdns?(e[t.info.rdns]=!0,e):e}),{});return e.map((e=>{var t;return{...e,installed:Boolean(e.rdns)&&Boolean(a[null!==(t=e.rdns)&&void 0!==t?t:""])}})).sort(((e,t)=>{const a=Number(t.installed)-Number(e.installed);if(0!==a)return a;if(null!==n&&void 0!==n&&n.length){const a=n.indexOf(e.id),o=n.indexOf(t.id);if(-1!==a&&-1!==o)return a-o;if(-1!==a)return-1;if(-1!==o)return 1}return 0}))},getConnectOrderMethod(e,t){var n;const a=(null===e||void 0===e?void 0:e.connectMethodsOrder)||(null===(n=wn.state.features)||void 0===n?void 0:n.connectMethodsOrder),o=t||za.state.connectors;if(a)return a;const{injected:i,announced:r}=La.getConnectorsByType(o,Gn.state.recommended,Gn.state.featured),s=i.filter(La.showConnector),c=r.filter(La.showConnector);return s.length||c.length?["wallet","email","social"]:Wt.DEFAULT_CONNECT_METHOD_ORDER},isExcluded(e){const t=Boolean(e.rdns)&&Gn.state.excludedWallets.some((t=>t.rdns===e.rdns)),n=Boolean(e.name)&&Gn.state.excludedWallets.some((t=>Ma.isLowerCaseMatch(t.name,e.name)));return t||n},markWalletsWithDisplayIndex:e=>e.map(((e,t)=>({...e,display_index:t}))),filterWalletsByWcSupport:e=>ca.state.wcBasic?e.filter((e=>e.supports_wc)):pn.isMobile()?e.filter((e=>e.supports_wc||Wt.MANDATORY_WALLET_IDS_ON_MOBILE.includes(e.id))):e,getWalletConnectWallets(e){var t;const n=[...Gn.state.featured,...Gn.state.recommended];(null===(t=Gn.state.filteredWallets)||void 0===t?void 0:t.length)>0?n.push(...Gn.state.filteredWallets):n.push(...e);const a=pn.uniqueBy(n,"id"),o=Wa.markWalletsAsInstalled(a),i=Wa.filterWalletsByWcSupport(o);return Wa.markWalletsWithDisplayIndex(i)}},La={getConnectorsByType(e,t,n){const{customWallets:a}=wn.state,o=un.getRecentWallets(),i=Wa.filterOutDuplicateWallets(t),r=Wa.filterOutDuplicateWallets(n),s=e.filter((e=>"MULTI_CHAIN"===e.type)),c=e.filter((e=>"ANNOUNCED"===e.type)),l=e.filter((e=>"INJECTED"===e.type));return{custom:a,recent:o,external:e.filter((e=>"EXTERNAL"===e.type)),multiChain:s,announced:c,injected:l,recommended:i,featured:r}},showConnector(e){var t;const n=null===(t=e.info)||void 0===t?void 0:t.rdns,a=Boolean(n)&&Gn.state.excludedWallets.some((e=>Boolean(e.rdns)&&e.rdns===n)),o=Boolean(e.name)&&Gn.state.excludedWallets.some((t=>Ma.isLowerCaseMatch(t.name,e.name)));if("INJECTED"===e.type){if("Browser Wallet"===e.name){if(!pn.isMobile())return!1;if(pn.isMobile()&&!n&&!ca.checkInstalled())return!1}if(a||o)return!1}return"ANNOUNCED"!==e.type&&"EXTERNAL"!==e.type||!a&&!o},getIsConnectedWithWC:()=>Array.from(Ua.state.chains.values()).some((e=>za.getConnectorId(e.namespace)===ft.CONNECTOR_ID.WALLET_CONNECT)),getConnectorTypeOrder(e){var t,n;let{recommended:a,featured:o,custom:i,recent:r,announced:s,injected:c,multiChain:l,external:d,overriddenConnectors:u=(null!==(t=null===(n=wn.state.features)||void 0===n?void 0:n.connectorTypeOrder)&&void 0!==t?t:[])}=e;const p=[{type:"walletConnect",isEnabled:!0},{type:"recent",isEnabled:r.length>0},{type:"injected",isEnabled:[...c,...s,...l].length>0},{type:"featured",isEnabled:o.length>0},{type:"custom",isEnabled:i&&i.length>0},{type:"external",isEnabled:d.length>0},{type:"recommended",isEnabled:a.length>0}].filter((e=>e.isEnabled)),m=new Set(p.map((e=>e.type))),h=u.filter((e=>m.has(e))).map((e=>({type:e,isEnabled:!0}))),v=p.filter((e=>{let{type:t}=e;return!h.some((e=>{let{type:n}=e;return n===t}))}));return Array.from(new Set([...h,...v].map((e=>{let{type:t}=e;return t}))))},sortConnectorsByExplorerWallet:e=>[...e].sort(((e,t)=>{var n,a;return e.explorerWallet&&t.explorerWallet?(null!==(n=e.explorerWallet.order)&&void 0!==n?n:0)-(null!==(a=t.explorerWallet.order)&&void 0!==a?a:0):e.explorerWallet?-1:t.explorerWallet?1:0})),getPriority:e=>e.id===ft.CONNECTOR_ID.BASE_ACCOUNT?0:e.id===ft.CONNECTOR_ID.COINBASE||e.id===ft.CONNECTOR_ID.COINBASE_SDK?1:2,sortConnectorsByPriority:e=>[...e].sort(((e,t)=>La.getPriority(e)-La.getPriority(t))),getAuthName(e){let{email:t,socialUsername:n,socialProvider:a}=e;return n?a&&"discord"===a&&n.endsWith("0")?n.slice(0,-1):n:t.length>30?`${t.slice(0,-3)}...`:t},async fetchProviderData(e){try{var t,n;if("Browser Wallet"===e.name&&!pn.isMobile())return{accounts:[],chainId:void 0};if(e.id===ft.CONNECTOR_ID.AUTH)return{accounts:[],chainId:void 0};const[a,o]=await Promise.all([null===(t=e.provider)||void 0===t?void 0:t.request({method:"eth_accounts"}),null===(n=e.provider)||void 0===n?void 0:n.request({method:"eth_chainId"}).then((e=>Number(e)))]);return{accounts:a,chainId:o}}catch(a){return console.warn(`Failed to fetch provider data for ${e.name}`,a),{accounts:[],chainId:void 0}}},getFilteredCustomWallets(e){const t=un.getRecentWallets(),n=za.state.connectors.map((e=>{var t;return null===(t=e.info)||void 0===t?void 0:t.rdns})).filter(Boolean),a=t.map((e=>e.rdns)).filter(Boolean),o=n.concat(a);if(o.includes("io.metamask.mobile")&&pn.isMobile()){const e=o.indexOf("io.metamask.mobile");o[e]="io.metamask"}return e.filter((e=>!o.includes(String(null===e||void 0===e?void 0:e.rdns))))},hasWalletConnector:e=>za.state.connectors.some((t=>t.id===e.id||t.name===e.name)),isWalletCompatibleWithCurrentChain(e){const t=Ua.state.activeChain;return!t||!e.chains||e.chains.some((e=>{const n=e.split(":")[0];return t===n}))},getFilteredRecentWallets(){return un.getRecentWallets().filter((e=>!Wa.isExcluded(e))).filter((e=>!this.hasWalletConnector(e))).filter((e=>this.isWalletCompatibleWithCurrentChain(e)))},getCappedRecommendedWallets(e){const{connectors:t}=za.state,{customWallets:n,featuredWalletIds:a}=wn.state,o=t.find((e=>"walletConnect"===e.id)),i=t.filter((e=>"INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type));if(!o&&!i.length&&(null===n||void 0===n||!n.length))return[];const r=vn.isEmailEnabled(),s=vn.isSocialsEnabled(),c=i.filter((e=>"Browser Wallet"!==e.name&&"WalletConnect"!==e.name)),l=((null===a||void 0===a?void 0:a.length)||0)+((null===n||void 0===n?void 0:n.length)||0)+(c.length||0)+(r?1:0)+(s?1:0),d=Math.max(0,4-l);if(d<=0)return[];return Wa.filterOutDuplicateWallets(e).slice(0,d)},processConnectorsByType(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const n=La.sortConnectorsByExplorerWallet([...e]);return t?n.filter(La.showConnector):n},connectorList(){const e=La.getConnectorsByType(za.state.connectors,Gn.state.recommended,Gn.state.featured),t=this.processConnectorsByType(e.announced.filter((e=>"walletConnect"!==e.id))),n=this.processConnectorsByType(e.injected),a=this.processConnectorsByType(e.multiChain.filter((e=>"WalletConnect"!==e.name)),!1),o=e.custom,i=e.recent,r=this.processConnectorsByType(e.external.filter((e=>e.id!==ft.CONNECTOR_ID.COINBASE_SDK&&e.id!==ft.CONNECTOR_ID.BASE_ACCOUNT))),s=e.recommended,c=e.featured,l=La.getConnectorTypeOrder({custom:o,recent:i,announced:t,injected:n,multiChain:a,recommended:s,featured:c,external:r}),d=za.state.connectors.find((e=>"walletConnect"===e.id)),u=pn.isMobile(),p=[];for(const m of l)switch(m){case"walletConnect":!u&&d&&p.push({kind:"connector",subtype:"walletConnect",connector:d});break;case"recent":La.getFilteredRecentWallets().forEach((e=>p.push({kind:"wallet",subtype:"recent",wallet:e})));break;case"injected":a.forEach((e=>p.push({kind:"connector",subtype:"multiChain",connector:e}))),t.forEach((e=>p.push({kind:"connector",subtype:"announced",connector:e}))),n.forEach((e=>p.push({kind:"connector",subtype:"injected",connector:e})));break;case"featured":c.forEach((e=>p.push({kind:"wallet",subtype:"featured",wallet:e})));break;case"custom":La.getFilteredCustomWallets(null!==o&&void 0!==o?o:[]).forEach((e=>p.push({kind:"wallet",subtype:"custom",wallet:e})));break;case"external":r.forEach((e=>p.push({kind:"connector",subtype:"external",connector:e})));break;case"recommended":La.getCappedRecommendedWallets(s).forEach((e=>p.push({kind:"wallet",subtype:"recommended",wallet:e})));break;default:console.warn(`Unknown connector type: ${m}`)}return p},hasInjectedConnectors:()=>za.state.connectors.filter((e=>("INJECTED"===e.type||"ANNOUNCED"===e.type||"MULTI_CHAIN"===e.type)&&"Browser Wallet"!==e.name&&"WalletConnect"!==e.name)).length},Fa=(0,w.sj)({themeMode:"dark",themeVariables:{},w3mThemeVariables:void 0}),ja={state:Fa,subscribe:e=>(0,w.Ld)(Fa,(()=>e(Fa))),setThemeMode(e){Fa.themeMode=e;try{const t=za.getAuthConnector();if(t){const n=ja.getSnapshot().themeVariables;t.provider.syncTheme({themeMode:e,themeVariables:n,w3mThemeVariables:kt(n,e)})}}catch{console.info("Unable to sync theme to auth connector")}},setThemeVariables(e){Fa.themeVariables={...Fa.themeVariables,...e};try{const e=za.getAuthConnector();if(e){const t=ja.getSnapshot().themeVariables;e.provider.syncTheme({themeVariables:t,w3mThemeVariables:kt(Fa.themeVariables,Fa.themeMode)})}}catch{console.info("Unable to sync theme to auth connector")}},getSnapshot:()=>(0,w.CO)(Fa)},Ha=$n(ja),Va=Object.fromEntries(Ct.map((e=>[e,void 0]))),Ka=Object.fromEntries(Ct.map((e=>[e,!0]))),qa=(0,w.sj)({allConnectors:[],connectors:[],activeConnector:void 0,filterByNamespace:void 0,activeConnectorIds:Va,filterByNamespaceMap:Ka}),za=$n({state:qa,subscribe:e=>(0,w.Ld)(qa,(()=>{e(qa)})),subscribeKey:(e,t)=>(0,y.VW)(qa,e,t),initialize(e){e.forEach((e=>{const t=un.getConnectedConnectorId(e);t&&za.setConnectorId(t,e)}))},setActiveConnector(e){e&&(qa.activeConnector=(0,w.iH)(e))},setConnectors(e){e.filter((e=>!qa.allConnectors.some((t=>t.id===e.id&&za.getConnectorName(t.name)===za.getConnectorName(e.name)&&t.chain===e.chain)))).forEach((e=>{"MULTI_CHAIN"!==e.type&&qa.allConnectors.push((0,w.iH)(e))}));const t=za.getEnabledNamespaces(),n=za.getEnabledConnectors(t);qa.connectors=za.mergeMultiChainConnectors(n)},filterByNamespaces(e){Object.keys(qa.filterByNamespaceMap).forEach((e=>{qa.filterByNamespaceMap[e]=!1})),e.forEach((e=>{qa.filterByNamespaceMap[e]=!0})),za.updateConnectorsForEnabledNamespaces()},filterByNamespace(e,t){qa.filterByNamespaceMap[e]=t,za.updateConnectorsForEnabledNamespaces()},updateConnectorsForEnabledNamespaces(){const e=za.getEnabledNamespaces(),t=za.getEnabledConnectors(e),n=za.areAllNamespacesEnabled();qa.connectors=za.mergeMultiChainConnectors(t),n?Gn.clearFilterByNamespaces():Gn.filterByNamespaces(e)},getEnabledNamespaces:()=>Object.entries(qa.filterByNamespaceMap).filter((e=>{let[t,n]=e;return n})).map((e=>{let[t]=e;return t})),getEnabledConnectors:e=>qa.allConnectors.filter((t=>e.includes(t.chain))),areAllNamespacesEnabled:()=>Object.values(qa.filterByNamespaceMap).every((e=>e)),mergeMultiChainConnectors(e){const t=za.generateConnectorMapByName(e),n=[];return t.forEach((e=>{const t=e[0],a=(null===t||void 0===t?void 0:t.id)===ft.CONNECTOR_ID.AUTH;e.length>1&&t?n.push({name:t.name,imageUrl:t.imageUrl,imageId:t.imageId,connectors:[...e],type:a?"AUTH":"MULTI_CHAIN",chain:"eip155",id:(null===t||void 0===t?void 0:t.id)||""}):t&&n.push(t)})),n},generateConnectorMapByName(e){const t=new Map;return e.forEach((e=>{const{name:n}=e,a=za.getConnectorName(n);if(!a)return;const o=t.get(a)||[];o.find((t=>t.chain===e.chain))||o.push(e),t.set(a,o)})),t},getConnectorName(e){if(!e)return e;return{"Trust Wallet":"Trust"}[e]||e},getUniqueConnectorsByName(e){const t=[];return e.forEach((e=>{t.find((t=>t.chain===e.chain))||t.push(e)})),t},addConnector(e){if(e.id===ft.CONNECTOR_ID.AUTH){var t,n,a;const o=e,i=(0,w.CO)(wn.state),r=Ha.getSnapshot().themeMode,s=Ha.getSnapshot().themeVariables;null===o||void 0===o||null===(t=o.provider)||void 0===t||null===(n=t.syncDappData)||void 0===n||n.call(t,{metadata:i.metadata,sdkVersion:i.sdkVersion,projectId:i.projectId,sdkType:i.sdkType}),null===o||void 0===o||null===(a=o.provider)||void 0===a||a.syncTheme({themeMode:r,themeVariables:s,w3mThemeVariables:kt(s,r)}),za.setConnectors([e])}else za.setConnectors([e])},getAuthConnector(e){var t;const n=e||Ua.state.activeChain,a=qa.connectors.find((e=>e.id===ft.CONNECTOR_ID.AUTH));if(a){if(null!==a&&void 0!==a&&null!==(t=a.connectors)&&void 0!==t&&t.length){return a.connectors.find((e=>e.chain===n))}return a}},getAnnouncedConnectorRdns:()=>qa.connectors.filter((e=>"ANNOUNCED"===e.type)).map((e=>{var t;return null===(t=e.info)||void 0===t?void 0:t.rdns})),getConnectorById:e=>La.sortConnectorsByPriority(qa.allConnectors).find((t=>t.id===e)),getConnector(e){let{id:t,namespace:n}=e;const a=n||Ua.state.activeChain,o=qa.allConnectors.filter((e=>e.chain===a));return La.sortConnectorsByPriority(o).find((e=>e.id===t||e.explorerId===t))},syncIfAuthConnector(e){var t,n;if("AUTH"!==e.id)return;const a=e,o=(0,w.CO)(wn.state),i=Ha.getSnapshot().themeMode,r=Ha.getSnapshot().themeVariables;null===a||void 0===a||null===(t=a.provider)||void 0===t||null===(n=t.syncDappData)||void 0===n||n.call(t,{metadata:o.metadata,sdkVersion:o.sdkVersion,sdkType:o.sdkType,projectId:o.projectId}),a.provider.syncTheme({themeMode:i,themeVariables:r,w3mThemeVariables:kt(r,i)})},getConnectorsByNamespace(e){const t=qa.allConnectors.filter((t=>t.chain===e));return za.mergeMultiChainConnectors(t)},canSwitchToSmartAccount:e=>Ua.checkIfSmartAccountEnabled()&&$a(e)===St.ACCOUNT_TYPES.EOA,selectWalletConnector(e){var t;const n=null===(t=Qn.state.data)||void 0===t?void 0:t.redirectView,a=Ua.state.activeChain,o=a?za.getConnector({id:e.id,namespace:a}):void 0;Vn.handleMobileDeeplinkRedirect((null===o||void 0===o?void 0:o.explorerId)||e.id,Ua.state.activeChain),o?Qn.push("ConnectingExternal",{connector:o,wallet:e,redirectView:n}):Qn.push("ConnectingWalletConnect",{wallet:e,redirectView:n})},getConnectors:e=>e?za.getConnectorsByNamespace(e):za.mergeMultiChainConnectors(qa.allConnectors),setFilterByNamespace(e){qa.filterByNamespace=e,qa.connectors=za.getConnectors(e),Gn.setFilterByNamespace(e)},setConnectorId(e,t){e&&(qa.activeConnectorIds={...qa.activeConnectorIds,[t]:e},un.setConnectedConnectorId(t,e))},removeConnectorId(e){qa.activeConnectorIds={...qa.activeConnectorIds,[e]:void 0},un.deleteConnectedConnectorId(e)},getConnectorId(e){if(e)return qa.activeConnectorIds[e]},isConnected:e=>e?Boolean(qa.activeConnectorIds[e]):Object.values(qa.activeConnectorIds).some((e=>Boolean(e))),resetConnectorIds(){qa.activeConnectorIds={...Va}},extendConnectorsWithExplorerWallets(e){qa.allConnectors.forEach((t=>{const n=e.find((e=>{var n;return e.id===t.id||e.rdns&&e.rdns===(null===(n=t.info)||void 0===n?void 0:n.rdns)}));n&&(t.explorerWallet=n)}));const t=za.getEnabledNamespaces(),n=za.getEnabledConnectors(t);qa.connectors=za.mergeMultiChainConnectors(n)},async connect(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{namespace:t}=e;return za.setFilterByNamespace(t),Qn.push("Connect",{addWalletForNamespace:t}),new Promise(((e,n)=>{if(t){const a=Ua.subscribeChainProp("accountState",(t=>{null!==t&&void 0!==t&&t.caipAddress&&(e({caipAddress:null===t||void 0===t?void 0:t.caipAddress}),a())}),t),o=na.subscribeKey("open",(e=>{e||(n(new Error("Modal closed")),o())}))}else{const t=Ua.subscribeKey("activeCaipAddress",(n=>{n&&(e({caipAddress:n}),t())})),a=na.subscribeKey("open",(e=>{e||(n(new Error("Modal closed")),a())}))}}))}});n(74385),n(75692);const Ga=F.iv`
  button {
    background-color: transparent;
    padding: ${e=>{let{spacing:t}=e;return t[1]}};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${e=>{let{tokens:t}=e;return t.core.foregroundAccent020}};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${e=>{let{tokens:t}=e;return t.core.foregroundAccent010}};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[1]}};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${e=>{let{borderRadius:t}=e;return t[2]}};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var Ja=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Ya=class extends a.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){return a.dy`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${{accent:"accent-primary",primary:"inverse",secondary:"default"}[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};Ya.styles=[W.ET,W.ZM,Ga],Ja([(0,o.Cb)()],Ya.prototype,"size",void 0),Ja([(0,o.Cb)({type:Boolean})],Ya.prototype,"disabled",void 0),Ja([(0,o.Cb)()],Ya.prototype,"icon",void 0),Ja([(0,o.Cb)()],Ya.prototype,"iconColor",void 0),Ja([(0,o.Cb)()],Ya.prototype,"variant",void 0),Ya=Ja([(0,L.M)("wui-icon-link")],Ya);n(65723),n(90285);const Qa=a.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var Xa=n(38127);const Za=a.YP`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,eo=F.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: 100%;
    outline: 1px solid ${e=>{let{tokens:t}=e;return t.core.glass010}};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var to=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let no=class extends a.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:Za,md:Xa.W,lg:Qa},this.selected=!1,this.round=!1}render(){const e={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText="\n      --local-width: var(--apkt-spacing-10);\n      --local-height: var(--apkt-spacing-10);\n      --local-icon-size: var(--apkt-spacing-4);\n    "):this.style.cssText=`\n\n      --local-path: var(--apkt-path-network-${this.size});\n      --local-width:  var(--apkt-width-network-${this.size});\n      --local-height:  var(--apkt-height-network-${this.size});\n      --local-icon-size:  var(--apkt-spacing-${e[this.size]});\n    `,a.dy`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?a.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:a.dy`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};no.styles=[W.ET,eo],to([(0,o.Cb)()],no.prototype,"size",void 0),to([(0,o.Cb)()],no.prototype,"name",void 0),to([(0,o.Cb)({type:Object})],no.prototype,"networkImagesBySize",void 0),to([(0,o.Cb)()],no.prototype,"imageSrc",void 0),to([(0,o.Cb)({type:Boolean})],no.prototype,"selected",void 0),to([(0,o.Cb)({type:Boolean})],no.prototype,"round",void 0),no=to([(0,L.M)("wui-network-image")],no);const ao=F.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }
`;var oo=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let io=class extends a.oi{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,a.dy`${this.template()}`}template(){return this.text?a.dy`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};io.styles=[W.ET,ao],oo([(0,o.Cb)()],io.prototype,"text",void 0),oo([(0,o.Cb)()],io.prototype,"bgColor",void 0),io=oo([(0,L.M)("wui-separator")],io);n(71186);const ro={METMASK_CONNECTOR_NAME:"MetaMask",TRUST_CONNECTOR_NAME:"Trust Wallet",SOLFLARE_CONNECTOR_NAME:"Solflare",PHANTOM_CONNECTOR_NAME:"Phantom",COIN98_CONNECTOR_NAME:"Coin98",MAGIC_EDEN_CONNECTOR_NAME:"Magic Eden",BACKPACK_CONNECTOR_NAME:"Backpack",BITGET_CONNECTOR_NAME:"Bitget Wallet",FRONTIER_CONNECTOR_NAME:"Frontier",XVERSE_CONNECTOR_NAME:"Xverse Wallet",LEATHER_CONNECTOR_NAME:"Leather",OKX_CONNECTOR_NAME:"OKX Wallet",BINANCE_CONNECTOR_NAME:"Binance Wallet",EIP155:ft.CHAIN.EVM,ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",CONNECTOR_RDNS_MAP:{coinbaseWallet:"com.coinbase.wallet",coinbaseWalletSDK:"com.coinbase.wallet"},CONNECTOR_TYPE_EXTERNAL:"EXTERNAL",CONNECTOR_TYPE_WALLET_CONNECT:"WALLET_CONNECT",CONNECTOR_TYPE_INJECTED:"INJECTED",CONNECTOR_TYPE_ANNOUNCED:"ANNOUNCED",CONNECTOR_TYPE_AUTH:"AUTH",CONNECTOR_TYPE_MULTI_CHAIN:"MULTI_CHAIN",CONNECTOR_TYPE_W3M_AUTH:"AUTH",getSDKVersionWarningMessage:(e,t)=>`\n     @@@@@@@           @@@@@@@@@@@@@@@@@@      \n   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   \n  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  \n @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  \n @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ \n @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ \n @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@\n @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    \n @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    \n @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ \n @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  \n  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  \n   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   \n      @@@@@            @@@@@@@@@@@@@@@@@@  \n      \nAppKit SDK version ${e} is outdated. Latest version is ${t}. Please update to the latest version for bug fixes and new features.\n            \nChangelog: https://github.com/reown-com/appkit/releases\nNPM Registry: https://www.npmjs.com/package/@reown/appkit`},so={getCaipTokens(e){if(!e)return;const t={};return Object.entries(e).forEach((e=>{let[n,a]=e;t[`${ro.EIP155}:${n}`]=a})),t},isLowerCaseMatch:(e,t)=>(null===e||void 0===e?void 0:e.toLowerCase())===(null===t||void 0===t?void 0:t.toLowerCase()),getActiveNamespaceConnectedToAuth(){const e=Ua.state.activeChain;return ft.AUTH_CONNECTOR_SUPPORTED_CHAINS.find((t=>za.getConnectorId(t)===ft.CONNECTOR_ID.AUTH&&t===e))},withRetry(e){let{conditionFn:t,intervalMs:n,maxRetries:a}=e,o=0;return new Promise((e=>{!async function i(){return o+=1,await t()?e(!0):o>=a?e(!1):(setTimeout(i,n),null)}()}))},userChainIdToChainNamespace(e){if("number"===typeof e)return ft.CHAIN.EVM;const[t]=e.split(":");return t},getOtherAuthNamespaces(e){if(!e)return[];return ft.AUTH_CONNECTOR_SUPPORTED_CHAINS.filter((t=>t!==e))},getConnectorStorageInfo(e,t){var n;const a=null!==(n=un.getConnections()[t])&&void 0!==n?n:[];return{hasDisconnected:un.isConnectorDisconnected(e,t),hasConnected:a.some((t=>so.isLowerCaseMatch(t.connectorId,e)))}}},co="INVALID_PAYMENT_CONFIG",lo="INVALID_RECIPIENT",uo="INVALID_ASSET",po="INVALID_AMOUNT",mo="UNKNOWN_ERROR",ho="UNABLE_TO_INITIATE_PAYMENT",vo="INVALID_CHAIN_NAMESPACE",go="GENERIC_PAYMENT_ERROR",wo="UNABLE_TO_GET_EXCHANGES",yo="ASSET_NOT_SUPPORTED",fo="UNABLE_TO_GET_PAY_URL",bo="UNABLE_TO_GET_BUY_STATUS",Co="UNABLE_TO_GET_QUOTE",ko="UNABLE_TO_GET_QUOTE_STATUS",Eo="INVALID_RECIPIENT_ADDRESS_FOR_ASSET",Ao={[co]:"Invalid payment configuration",[lo]:"Invalid recipient address",[uo]:"Invalid asset specified",[po]:"Invalid payment amount",[Eo]:"Invalid recipient address for the asset selected",[mo]:"Unknown payment error occurred",[ho]:"Unable to initiate payment",[vo]:"Invalid chain namespace",[go]:"Unable to process payment",[wo]:"Unable to get exchanges",[yo]:"Asset not supported by the selected exchange",[fo]:"Unable to get payment URL",[bo]:"Unable to get buy status",["UNABLE_TO_GET_TOKEN_BALANCES"]:"Unable to get token balances",[Co]:"Unable to get quote. Please choose a different token",[ko]:"Unable to get quote status"};class No extends Error{get message(){return Ao[this.code]}constructor(e,t){super(Ao[e]),this.name="AppKitPayError",this.code=e,this.details=t,Error.captureStackTrace&&Error.captureStackTrace(this,No)}}const Io="reown_test";function To(e){if(!e)return null;const t=e.steps[0];return t&&t.type===jo?t:null}function So(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!e)return[];const n=e.steps.filter((e=>e.type===Ho)),a=n.filter(((e,n)=>n+1>t));return n.length>0&&n.length<3?a:[]}const xo=new hn({baseUrl:pn.getApiUrl(),clientId:null});class Oo extends Error{}function _o(){const{projectId:e,sdkType:t,sdkVersion:n}=wn.state;return{projectId:e,st:t||"appkit",sv:n||"html-wagmi-4.2.2"}}async function Po(e,t){const n=`https://rpc.walletconnect.org/v1/json-rpc?projectId=${wn.getSnapshot().projectId}`,{sdkType:a,sdkVersion:o,projectId:i}=wn.getSnapshot(),r={jsonrpc:"2.0",id:1,method:e,params:{...t||{},st:a,sv:o,projectId:i}},s=await fetch(n,{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}),c=await s.json();if(c.error)throw new Oo(c.error.message);return c}async function Ro(e){return(await Po("reown_getExchanges",e)).result}async function Uo(e){return(await Po("reown_getExchangePayUrl",e)).result}async function Do(e){const t=so.isLowerCaseMatch(e.sourceToken.network,e.toToken.network),n=so.isLowerCaseMatch(e.sourceToken.asset,e.toToken.asset);return t&&n?async function(e){var t,n,a;let{sourceToken:o,toToken:i,amount:r,recipient:s}=e;const c=ca.parseUnits(r,o.metadata.decimals),l=ca.parseUnits(r,i.metadata.decimals);return Promise.resolve({type:Fo,origin:{amount:null!==(t=null===c||void 0===c?void 0:c.toString())&&void 0!==t?t:"0",currency:o},destination:{amount:null!==(n=null===l||void 0===l?void 0:l.toString())&&void 0!==n?n:"0",currency:i},fees:[{id:"service",label:"Service Fee",amount:"0",currency:i}],steps:[{requestId:Fo,type:"deposit",deposit:{amount:null!==(a=null===c||void 0===c?void 0:c.toString())&&void 0!==a?a:"0",currency:o.asset,receiver:s}}],timeInSeconds:6})}(e):async function(e){const t=Ea.bigNumber(e.amount).times(10**e.toToken.metadata.decimals).toString(),{chainId:n,chainNamespace:a}=xt.parseCaipNetworkId(e.sourceToken.network),{chainId:o,chainNamespace:i}=xt.parseCaipNetworkId(e.toToken.network),r="native"===e.sourceToken.asset?Ba(a):e.sourceToken.asset,s="native"===e.toToken.asset?Ba(i):e.toToken.asset;return await xo.post({path:"/appkit/v1/transfers/quote",body:{user:e.address,originChainId:n.toString(),originCurrency:r,destinationChainId:o.toString(),destinationCurrency:s,recipient:e.recipient,amount:t},params:_o()})}(e)}const Bo=["eip155","solana"],$o={eip155:{native:{assetNamespace:"slip44",assetReference:"60"},defaultTokenNamespace:"erc20"},solana:{native:{assetNamespace:"slip44",assetReference:"501"},defaultTokenNamespace:"token"}};function Mo(e,t){const{chainNamespace:n,chainId:a}=xt.parseCaipNetworkId(e),o=$o[n];if(!o)throw new Error(`Unsupported chain namespace for CAIP-19 formatting: ${n}`);let i=o.native.assetNamespace,r=o.native.assetReference;"native"!==t&&(i=o.defaultTokenNamespace,r=t);return`${`${n}:${a}`}/${i}:${r}`}function Wo(e){const t=Ea.bigNumber(e,{safe:!0});return t.lt(.001)?"<0.001":t.round(4).toString()}const Lo="unknown",Fo="direct-transfer",jo="deposit",Ho="transaction",Vo=(0,w.sj)({paymentAsset:{network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},recipient:"0x0",amount:0,isConfigured:!1,error:null,isPaymentInProgress:!1,exchanges:[],isLoading:!1,openInNewTab:!0,redirectUrl:void 0,payWithExchange:void 0,currentPayment:void 0,analyticsSet:!1,paymentId:void 0,choice:"pay",tokenBalances:{[ft.CHAIN.EVM]:[],[ft.CHAIN.SOLANA]:[]},isFetchingTokenBalances:!1,selectedPaymentAsset:null,quote:void 0,quoteStatus:"waiting",quoteError:null,isFetchingQuote:!1,selectedExchange:void 0,exchangeUrlForQuote:void 0,requestId:void 0}),Ko={state:Vo,subscribe:e=>(0,w.Ld)(Vo,(()=>e(Vo))),subscribeKey:(e,t)=>(0,y.VW)(Vo,e,t),async handleOpenPay(e){this.resetState(),this.setPaymentConfig(e),this.initializeAnalytics(),function(){const{chainNamespace:e}=xt.parseCaipNetworkId(Ko.state.paymentAsset.network);if(!pn.isAddress(Ko.state.recipient,e))throw new No(Eo,`Provide valid recipient address for namespace "${e}"`)}(),await this.prepareTokenLogo(),Vo.isConfigured=!0,xn.sendEvent({type:"track",event:"PAY_MODAL_OPEN",properties:{exchanges:Vo.exchanges,configuration:{network:Vo.paymentAsset.network,asset:Vo.paymentAsset.asset,recipient:Vo.recipient,amount:Vo.amount}}}),await na.open({view:"Pay"})},resetState(){Vo.paymentAsset={network:"eip155:1",asset:"0x0",metadata:{name:"0x0",symbol:"0x0",decimals:0}},Vo.recipient="0x0",Vo.amount=0,Vo.isConfigured=!1,Vo.error=null,Vo.isPaymentInProgress=!1,Vo.isLoading=!1,Vo.currentPayment=void 0,Vo.selectedExchange=void 0,Vo.exchangeUrlForQuote=void 0,Vo.requestId=void 0},resetQuoteState(){Vo.quote=void 0,Vo.quoteStatus="waiting",Vo.quoteError=null,Vo.isFetchingQuote=!1,Vo.requestId=void 0},setPaymentConfig(e){if(!e.paymentAsset)throw new No(co);try{var t,n;Vo.choice=null!==(t=e.choice)&&void 0!==t?t:"pay",Vo.paymentAsset=e.paymentAsset,Vo.recipient=e.recipient,Vo.amount=e.amount,Vo.openInNewTab=null===(n=e.openInNewTab)||void 0===n||n,Vo.redirectUrl=e.redirectUrl,Vo.payWithExchange=e.payWithExchange,Vo.error=null}catch(a){throw new No(co,a.message)}},setSelectedPaymentAsset(e){Vo.selectedPaymentAsset=e},setSelectedExchange(e){Vo.selectedExchange=e},setRequestId(e){Vo.requestId=e},setPaymentInProgress(e){Vo.isPaymentInProgress=e},getPaymentAsset:()=>Vo.paymentAsset,getExchanges:()=>Vo.exchanges,async fetchExchanges(){try{Vo.isLoading=!0;const e=await Ro({page:0});Vo.exchanges=e.exchanges.slice(0,2)}catch(e){throw bn.showError(Ao.UNABLE_TO_GET_EXCHANGES),new No(wo)}finally{Vo.isLoading=!1}},async getAvailableExchanges(e){try{var t,n;const a=null!==e&&void 0!==e&&e.asset&&null!==e&&void 0!==e&&e.network?Mo(e.network,e.asset):void 0;return await Ro({page:null!==(t=null===e||void 0===e?void 0:e.page)&&void 0!==t?t:0,asset:a,amount:null===e||void 0===e||null===(n=e.amount)||void 0===n?void 0:n.toString()})}catch(a){throw new No(wo)}},async getPayUrl(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{const a=Number(t.amount),o=await Uo({exchangeId:e,asset:Mo(t.network,t.asset),amount:a.toString(),recipient:`${t.network}:${t.recipient}`});return xn.sendEvent({type:"track",event:"PAY_EXCHANGE_SELECTED",properties:{source:"pay",exchange:{id:e},configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e},headless:n}}),n&&(this.initiatePayment(),xn.sendEvent({type:"track",event:"PAY_INITIATED",properties:{source:"pay",paymentId:Vo.paymentId||Lo,configuration:{network:t.network,asset:t.asset,recipient:t.recipient,amount:a},currentPayment:{type:"exchange",exchangeId:e}}})),o}catch(a){if(a instanceof Error&&a.message.includes("is not supported"))throw new No(yo);throw new Error(a.message)}},async generateExchangeUrlForQuote(e){let{exchangeId:t,paymentAsset:n,amount:a,recipient:o}=e;const i=await Uo({exchangeId:t,asset:Mo(n.network,n.asset),amount:a.toString(),recipient:o});Vo.exchangeSessionId=i.sessionId,Vo.exchangeUrlForQuote=i.url},async openPayUrl(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];try{var a;const o=await this.getPayUrl(e.exchangeId,t,n);if(!o)throw new No(fo);const i=null===(a=e.openInNewTab)||void 0===a||a?"_blank":"_self";return pn.openHref(o.url,i),o}catch(o){throw Vo.error=o instanceof No?o.message:Ao.GENERIC_PAYMENT_ERROR,new No(fo)}},async onTransfer(e){let{chainNamespace:t,fromAddress:n,toAddress:a,amount:o,paymentAsset:i}=e;if(Vo.currentPayment={type:"wallet",status:"IN_PROGRESS"},!Vo.isPaymentInProgress)try{this.initiatePayment();const e=Ua.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===i.network));if(!e)throw new Error("Target network not found");const r=Ua.state.activeCaipNetwork;switch(so.isLowerCaseMatch(null===r||void 0===r?void 0:r.caipNetworkId,e.caipNetworkId)||await Ua.switchActiveNetwork(e),t){case ft.CHAIN.EVM:"native"===i.asset&&(Vo.currentPayment.result=await async function(e,t,n){var a,o;if(t!==ft.CHAIN.EVM)throw new No(vo);if(!n.fromAddress)throw new No(co,"fromAddress is required for native EVM payments.");const i="string"===typeof n.amount?parseFloat(n.amount):n.amount;if(isNaN(i))throw new No(co);const r=null!==(a=null===(o=e.metadata)||void 0===o?void 0:o.decimals)&&void 0!==a?a:18,s=ca.parseUnits(i.toString(),r);if("bigint"!==typeof s)throw new No(go);const c=await ca.sendTransaction({chainNamespace:t,to:n.recipient,address:n.fromAddress,value:s,data:"0x"});return null!==c&&void 0!==c?c:void 0}(i,t,{recipient:a,amount:o,fromAddress:n})),i.asset.startsWith("0x")&&(Vo.currentPayment.result=await async function(e,t){if(!t.fromAddress)throw new No(co,"fromAddress is required for ERC20 EVM payments.");const n=e.asset,a=t.recipient,o=Number(e.metadata.decimals),i=ca.parseUnits(t.amount.toString(),o);if(void 0===i)throw new No(go);const r=await ca.writeContract({fromAddress:t.fromAddress,tokenAddress:n,args:[a,i],method:"transfer",abi:Ia(n),chainNamespace:ft.CHAIN.EVM});return null!==r&&void 0!==r?r:void 0}(i,{recipient:a,amount:o,fromAddress:n})),Vo.currentPayment.status="SUCCESS";break;case ft.CHAIN.SOLANA:Vo.currentPayment.result=await async function(e,t){if(e!==ft.CHAIN.SOLANA)throw new No(vo);if(!t.fromAddress)throw new No(co,"fromAddress is required for Solana payments.");const n="string"===typeof t.amount?parseFloat(t.amount):t.amount;if(isNaN(n)||n<=0)throw new No(co,"Invalid payment amount.");try{if(!ya.getProvider(e))throw new No(go,"No Solana provider available.");const a=await ca.sendTransaction({chainNamespace:ft.CHAIN.SOLANA,to:t.recipient,value:n,tokenMint:t.tokenMint});if(!a)throw new No(go,"Transaction failed.");return a}catch(a){if(a instanceof No)throw a;throw new No(go,`Solana payment failed: ${a}`)}}(t,{recipient:a,amount:o,fromAddress:n,tokenMint:"native"===i.asset?void 0:i.asset}),Vo.currentPayment.status="SUCCESS";break;default:throw new No(vo)}}catch(r){throw Vo.error=r instanceof No?r.message:Ao.GENERIC_PAYMENT_ERROR,Vo.currentPayment.status="FAILED",bn.showError(Vo.error),r}finally{Vo.isPaymentInProgress=!1}},async onSendTransaction(e){try{const{namespace:t,transactionStep:n}=e;Ko.initiatePayment();const a=Ua.getAllRequestedCaipNetworks().find((e=>{var t;return e.caipNetworkId===(null===(t=Vo.paymentAsset)||void 0===t?void 0:t.network)}));if(!a)throw new Error("Target network not found");const o=Ua.state.activeCaipNetwork;if(so.isLowerCaseMatch(null===o||void 0===o?void 0:o.caipNetworkId,a.caipNetworkId)||await Ua.switchActiveNetwork(a),t===ft.CHAIN.EVM){const{from:e,to:a,data:o,value:i}=n.transaction;await ca.sendTransaction({address:e,to:a,data:o,value:BigInt(i),chainNamespace:t})}else if(t===ft.CHAIN.SOLANA){const{instructions:e}=n.transaction;await ca.writeSolanaTransaction({instructions:e})}}catch(t){throw Vo.error=t instanceof No?t.message:Ao.GENERIC_PAYMENT_ERROR,bn.showError(Vo.error),t}finally{Vo.isPaymentInProgress=!1}},getExchangeById:e=>Vo.exchanges.find((t=>t.id===e)),validatePayConfig(e){const{paymentAsset:t,recipient:n,amount:a}=e;if(!t)throw new No(co);if(!n)throw new No(lo);if(!t.asset)throw new No(uo);if(void 0===a||null===a||a<=0)throw new No(po)},async handlePayWithExchange(e){try{Vo.currentPayment={type:"exchange",exchangeId:e};const{network:t,asset:n}=Vo.paymentAsset,a={network:t,asset:n,amount:Vo.amount,recipient:Vo.recipient},o=await this.getPayUrl(e,a);if(!o)throw new No(ho);return Vo.currentPayment.sessionId=o.sessionId,Vo.currentPayment.status="IN_PROGRESS",Vo.currentPayment.exchangeId=e,this.initiatePayment(),{url:o.url,openInNewTab:Vo.openInNewTab}}catch(t){return Vo.error=t instanceof No?t.message:Ao.GENERIC_PAYMENT_ERROR,Vo.isPaymentInProgress=!1,bn.showError(Vo.error),null}},async getBuyStatus(e,t){try{const o=await async function(e){return(await Po("reown_getExchangeBuyStatus",e)).result}({sessionId:t,exchangeId:e});var n,a;if("SUCCESS"===o.status||"FAILED"===o.status)xn.sendEvent({type:"track",event:"SUCCESS"===o.status?"PAY_SUCCESS":"PAY_ERROR",properties:{message:"FAILED"===o.status?pn.parseError(Vo.error):void 0,source:"pay",paymentId:Vo.paymentId||Lo,configuration:{network:Vo.paymentAsset.network,asset:Vo.paymentAsset.asset,recipient:Vo.recipient,amount:Vo.amount},currentPayment:{type:"exchange",exchangeId:null===(n=Vo.currentPayment)||void 0===n?void 0:n.exchangeId,sessionId:null===(a=Vo.currentPayment)||void 0===a?void 0:a.sessionId,result:o.txHash}}});return o}catch(o){throw new No(bo)}},async fetchTokensFromEOA(e){let{caipAddress:t,caipNetwork:n,namespace:a}=e;if(!t)return[];const{address:o}=xt.parseCaipAddress(t);let i=n;a===ft.CHAIN.EVM&&(i=void 0);return await ma.getMyTokensWithBalance({address:o,caipNetwork:i})},async fetchTokensFromExchange(){if(!Vo.selectedExchange)return[];const e=await async function(e){return await xo.get({path:`/appkit/v1/transfers/assets/exchanges/${e}`,params:_o()})}(Vo.selectedExchange.id),t=Object.values(e.assets).flat();return await Promise.all(t.map((async e=>{var t;const n={chainId:(a=e).network,address:`${a.network}:${a.asset}`,symbol:a.metadata.symbol,name:a.metadata.name,iconUrl:a.metadata.logoURI||"",price:0,quantity:{numeric:"0",decimals:a.metadata.decimals.toString()}};var a;const{chainNamespace:o}=xt.parseCaipNetworkId(n.chainId);let i=n.address;if(pn.isCaipAddress(i)){const{address:e}=xt.parseCaipAddress(i);i=e}const r=await jn.getImageByToken(null!==(t=i)&&void 0!==t?t:"",o).catch((()=>{}));return n.iconUrl=null!==r&&void 0!==r?r:"",n})))},async fetchTokens(e){let{caipAddress:t,caipNetwork:n,namespace:a}=e;try{Vo.isFetchingTokenBalances=!0;const e=Boolean(Vo.selectedExchange)?this.fetchTokensFromExchange():this.fetchTokensFromEOA({caipAddress:t,caipNetwork:n,namespace:a}),o=await e;Vo.tokenBalances={...Vo.tokenBalances,[a]:o}}catch(o){const e=o instanceof Error?o.message:"Unable to get token balances";bn.showError(e)}finally{Vo.isFetchingTokenBalances=!1}},async fetchQuote(e){let{amount:t,address:n,sourceToken:a,toToken:o,recipient:i}=e;try{Ko.resetQuoteState(),Vo.isFetchingQuote=!0;const e=await Do({amount:t,address:Vo.selectedExchange?void 0:n,sourceToken:a,toToken:o,recipient:i});if(Vo.selectedExchange){const t=To(e);if(t){var r;const e=`${a.network}:${t.deposit.receiver}`,n=Ea.formatNumber(t.deposit.amount,{decimals:null!==(r=a.metadata.decimals)&&void 0!==r?r:0,round:8});await Ko.generateExchangeUrlForQuote({exchangeId:Vo.selectedExchange.id,paymentAsset:a,amount:n.toString(),recipient:e})}}Vo.quote=e}catch(s){let e=Ao.UNABLE_TO_GET_QUOTE;if(s instanceof Error&&s.cause&&s.cause instanceof Response)try{const t=await s.cause.json();t.error&&"string"===typeof t.error&&(e=t.error)}catch{}throw Vo.quoteError=e,bn.showError(e),new No(Co)}finally{Vo.isFetchingQuote=!1}},async fetchQuoteStatus(e){let{requestId:t}=e;try{if(t===Fo){const e=Vo.selectedExchange,t=Vo.exchangeSessionId;if(e&&t){switch((await this.getBuyStatus(e.id,t)).status){case"IN_PROGRESS":case"UNKNOWN":default:Vo.quoteStatus="waiting";break;case"SUCCESS":Vo.quoteStatus="success",Vo.isPaymentInProgress=!1;break;case"FAILED":Vo.quoteStatus="failure",Vo.isPaymentInProgress=!1}return}return void(Vo.quoteStatus="success")}const{status:e}=await async function(e){return await xo.get({path:"/appkit/v1/transfers/status",params:{requestId:e.requestId,..._o()}})}({requestId:t});Vo.quoteStatus=e}catch{throw Vo.quoteStatus="failure",new No(ko)}},initiatePayment(){Vo.isPaymentInProgress=!0,Vo.paymentId=crypto.randomUUID()},initializeAnalytics(){Vo.analyticsSet||(Vo.analyticsSet=!0,this.subscribeKey("isPaymentInProgress",(e=>{var t;if(null!==(t=Vo.currentPayment)&&void 0!==t&&t.status&&"UNKNOWN"!==Vo.currentPayment.status){const e={IN_PROGRESS:"PAY_INITIATED",SUCCESS:"PAY_SUCCESS",FAILED:"PAY_ERROR"}[Vo.currentPayment.status];xn.sendEvent({type:"track",event:e,properties:{message:"FAILED"===Vo.currentPayment.status?pn.parseError(Vo.error):void 0,source:"pay",paymentId:Vo.paymentId||Lo,configuration:{network:Vo.paymentAsset.network,asset:Vo.paymentAsset.asset,recipient:Vo.recipient,amount:Vo.amount},currentPayment:{type:Vo.currentPayment.type,exchangeId:Vo.currentPayment.exchangeId,sessionId:Vo.currentPayment.sessionId,result:Vo.currentPayment.result}}})}})))},async prepareTokenLogo(){if(!Vo.paymentAsset.metadata.logoURI)try{const{chainNamespace:e}=xt.parseCaipNetworkId(Vo.paymentAsset.network),t=await jn.getImageByToken(Vo.paymentAsset.asset,e);Vo.paymentAsset.metadata.logoURI=t}catch{}}},qo=M.iv`
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
`;var zo=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Go=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.amount=Ko.state.amount,this.namespace=void 0,this.paymentAsset=Ko.state.paymentAsset,this.activeConnectorIds=za.state.activeConnectorIds,this.caipAddress=void 0,this.exchanges=Ko.state.exchanges,this.isLoading=Ko.state.isLoading,this.initializeNamespace(),this.unsubscribe.push(Ko.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(za.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(Ko.subscribeKey("exchanges",(e=>this.exchanges=e))),this.unsubscribe.push(Ko.subscribeKey("isLoading",(e=>this.isLoading=e))),Ko.fetchExchanges(),Ko.setSelectedExchange(void 0)}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){return a.dy`
      <wui-flex flexDirection="column">
        ${this.paymentDetailsTemplate()} ${this.paymentMethodsTemplate()}
      </wui-flex>
    `}paymentMethodsTemplate(){return a.dy`
      <wui-flex flexDirection="column" padding="3" gap="2" class="payment-methods-container">
        ${this.payWithWalletTemplate()} ${this.templateSeparator()}
        ${this.templateExchangeOptions()}
      </wui-flex>
    `}initializeNamespace(){var e;const t=Ua.state.activeChain;this.namespace=t,this.caipAddress=null===(e=Ua.getAccountData(t))||void 0===e?void 0:e.caipAddress,this.unsubscribe.push(Ua.subscribeChainProp("accountState",(e=>{this.caipAddress=null===e||void 0===e?void 0:e.caipAddress}),t))}paymentDetailsTemplate(){const e=Ua.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return a.dy`
      <wui-flex
        alignItems="center"
        justifyContent="space-between"
        .padding=${["6","8","6","8"]}
        gap="2"
      >
        <wui-flex alignItems="center" gap="1">
          <wui-text variant="h1-regular" color="primary">
            ${Wo(this.amount||"0")}
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
            src=${(0,i.o)(this.paymentAsset.metadata.logoURI)}
            class="token-image"
          ></wui-image>
          <wui-image
            src=${(0,i.o)(jn.getNetworkImage(e))}
            class="chain-image"
          ></wui-image>
        </wui-flex>
      </wui-flex>
    `}payWithWalletTemplate(){return function(e){const{chainNamespace:t}=xt.parseCaipNetworkId(e);return Bo.includes(t)}(this.paymentAsset.network)?this.caipAddress?this.connectedWalletTemplate():this.disconnectedWalletTemplate():a.dy``}connectedWalletTemplate(){const{name:e,image:t}=this.getWalletProperties({namespace:this.namespace});return a.dy`
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
          imageSrc=${(0,i.o)(t)}
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
    `}disconnectedWalletTemplate(){return a.dy`<wui-list-item
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
    </wui-list-item>`}templateExchangeOptions(){if(this.isLoading)return a.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-loading-spinner size="md"></wui-loading-spinner>
      </wui-flex>`;const e=this.exchanges.filter((e=>function(e){const t=Ua.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.network));return!!t&&Boolean(t.testnet)}(this.paymentAsset)?e.id===Io:e.id!==Io));return 0===e.length?a.dy`<wui-flex justifyContent="center" alignItems="center">
        <wui-text variant="md-medium" color="primary">No exchanges available</wui-text>
      </wui-flex>`:e.map((e=>a.dy`
        <wui-list-item
          type="secondary"
          boxColor="foregroundSecondary"
          @click=${()=>this.onExchangePayment(e)}
          data-testid="exchange-option-${e.id}"
          ?chevron=${!0}
          imageSrc=${(0,i.o)(e.imageUrl)}
        >
          <wui-text flexGrow="1" variant="lg-regular" color="primary">
            Pay with ${e.name}
          </wui-text>
        </wui-list-item>
      `))}templateSeparator(){return a.dy`<wui-separator text="or" bgColor="secondary"></wui-separator>`}async onWalletPayment(){if(!this.namespace)throw new Error("Namespace not found");this.caipAddress?Qn.push("PayQuote"):(await za.connect(),await na.open({view:"PayQuote"}))}onExchangePayment(e){Ko.setSelectedExchange(e),Qn.push("PayQuote")}async onDisconnect(){try{await ca.disconnect(),await na.open({view:"Pay"})}catch{console.error("Failed to disconnect"),bn.showError("Failed to disconnect")}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const a=za.getConnector({id:n,namespace:t});if(!a)return{name:void 0,image:void 0};const o=jn.getConnectorImage(a);return{name:a.name,image:o}}};Go.styles=qo,zo([(0,o.SB)()],Go.prototype,"amount",void 0),zo([(0,o.SB)()],Go.prototype,"namespace",void 0),zo([(0,o.SB)()],Go.prototype,"paymentAsset",void 0),zo([(0,o.SB)()],Go.prototype,"activeConnectorIds",void 0),zo([(0,o.SB)()],Go.prototype,"caipAddress",void 0),zo([(0,o.SB)()],Go.prototype,"exchanges",void 0),zo([(0,o.SB)()],Go.prototype,"isLoading",void 0),Go=zo([(0,M.Mo)("w3m-pay-view")],Go);var Jo=n(57346);const Yo=F.iv`
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
`;var Qo=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};const Xo={"accent-primary":F.gR.tokens.core.backgroundAccentPrimary};let Zo=class extends a.oi{constructor(){super(...arguments),this.rings=3,this.duration=2,this.opacity=.3,this.size="200px",this.variant="accent-primary"}render(){const e=Xo[this.variant];this.style.cssText=`\n      --pulse-size: ${this.size};\n      --pulse-duration: ${this.duration}s;\n      --pulse-color: ${e};\n      --pulse-opacity: ${this.opacity};\n    `;const t=Array.from({length:this.rings},((e,t)=>this.renderRing(t,this.rings)));return a.dy`
      <div class="pulse-container">
        <div class="pulse-rings">${t}</div>
        <div class="pulse-content">
          <slot></slot>
        </div>
      </div>
    `}renderRing(e,t){const n=`animation-delay: ${e/t*this.duration}s;`;return a.dy`<div class="pulse-ring" style=${n}></div>`}};Zo.styles=[W.ET,Yo],Qo([(0,o.Cb)({type:Number})],Zo.prototype,"rings",void 0),Qo([(0,o.Cb)({type:Number})],Zo.prototype,"duration",void 0),Qo([(0,o.Cb)({type:Number})],Zo.prototype,"opacity",void 0),Qo([(0,o.Cb)()],Zo.prototype,"size",void 0),Qo([(0,o.Cb)()],Zo.prototype,"variant",void 0),Zo=Qo([(0,L.M)("wui-pulse")],Zo);const ei=[{id:"received",title:"Receiving funds",icon:"dollar"},{id:"processing",title:"Swapping asset",icon:"recycleHorizontal"},{id:"sending",title:"Sending asset to the recipient address",icon:"send"}],ti=["success","submitted","failure","timeout","refund"],ni=M.iv`
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
`;var ai=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};const oi={received:["pending","success","submitted"],processing:["success","submitted"],sending:["success","submitted"]};let ii=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.pollingInterval=null,this.paymentAsset=Ko.state.paymentAsset,this.quoteStatus=Ko.state.quoteStatus,this.quote=Ko.state.quote,this.amount=Ko.state.amount,this.namespace=void 0,this.caipAddress=void 0,this.profileName=null,this.activeConnectorIds=za.state.activeConnectorIds,this.selectedExchange=Ko.state.selectedExchange,this.initializeNamespace(),this.unsubscribe.push(Ko.subscribeKey("quoteStatus",(e=>this.quoteStatus=e)),Ko.subscribeKey("quote",(e=>this.quote=e)),za.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e)),Ko.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}connectedCallback(){super.connectedCallback(),this.startPolling()}disconnectedCallback(){super.disconnectedCallback(),this.stopPolling(),this.unsubscribe.forEach((e=>e()))}render(){return a.dy`
      <wui-flex flexDirection="column" .padding=${["3","0","0","0"]} gap="2">
        ${this.tokenTemplate()} ${this.paymentTemplate()} ${this.paymentLifecycleTemplate()}
      </wui-flex>
    `}tokenTemplate(){var e;const t=Wo(this.amount||"0"),n=null!==(e=this.paymentAsset.metadata.symbol)&&void 0!==e?e:"Unknown",o=Ua.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network)),r="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus;return"success"===this.quoteStatus||"submitted"===this.quoteStatus?a.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image success">
          <wui-icon name="checkmark" color="success" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:r?a.dy`<wui-flex alignItems="center" justifyContent="center">
        <wui-flex justifyContent="center" alignItems="center" class="token-image error">
          <wui-icon name="close" color="error" size="inherit"></wui-icon>
        </wui-flex>
      </wui-flex>`:a.dy`
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
                src=${(0,i.o)(jn.getNetworkImage(o))}
                class="chain-image"
                size="mdl"
              ></wui-image>

              <wui-text variant="lg-regular" color="primary">${t} ${n}</wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}paymentTemplate(){return a.dy`
      <wui-flex flexDirection="column" gap="2" .padding=${["0","6","0","6"]}>
        ${this.renderPayment()}
        <wui-separator></wui-separator>
        ${this.renderWallet()}
      </wui-flex>
    `}paymentLifecycleTemplate(){const e=this.getStepsWithStatus();return a.dy`
      <wui-flex flexDirection="column" padding="4" gap="2" class="payment-lifecycle-container">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">PAYMENT CYCLE</wui-text>

          ${this.renderPaymentCycleBadge()}
        </wui-flex>

        <wui-flex flexDirection="column" gap="5" .padding=${["2","0","2","0"]}>
          ${e.map((e=>this.renderStep(e)))}
        </wui-flex>
      </wui-flex>
    `}renderPaymentCycleBadge(){var e,t;const n="failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus,o="success"===this.quoteStatus||"submitted"===this.quoteStatus;if(n)return a.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge error"
          gap="1"
        >
          <wui-icon name="close" color="error" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="error">Failed</wui-text>
        </wui-flex>
      `;if(o)return a.dy`
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge success"
          gap="1"
        >
          <wui-icon name="checkmark" color="success" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="success">Completed</wui-text>
        </wui-flex>
      `;const i=null!==(e=null===(t=this.quote)||void 0===t?void 0:t.timeInSeconds)&&void 0!==e?e:0;return a.dy`
      <wui-flex alignItems="center" justifyContent="space-between" gap="3">
        <wui-flex
          justifyContent="center"
          alignItems="center"
          class="payment-step-badge loading"
          gap="1"
        >
          <wui-icon name="clock" color="default" size="xs"></wui-icon>
          <wui-text variant="sm-regular" color="primary">Est. ${i} sec</wui-text>
        </wui-flex>

        <wui-icon name="chevronBottom" color="default" size="xxs"></wui-icon>
      </wui-flex>
    `}renderPayment(){var e,t,n,o,r;const s=Ua.getAllRequestedCaipNetworks().find((e=>{var t;const n=null===(t=this.quote)||void 0===t?void 0:t.origin.currency.network;if(!n)return!1;const{chainId:a}=xt.parseCaipNetworkId(n);return so.isLowerCaseMatch(e.id.toString(),a.toString())})),c=Wo(Ea.formatNumber((null===(e=this.quote)||void 0===e?void 0:e.origin.amount)||"0",{decimals:null!==(t=null===(n=this.quote)||void 0===n?void 0:n.origin.currency.metadata.decimals)&&void 0!==t?t:0}).toString()),l=null!==(o=null===(r=this.quote)||void 0===r?void 0:r.origin.currency.metadata.symbol)&&void 0!==o?o:"Unknown";return a.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Payment Method</wui-text>

        <wui-flex flexDirection="column" alignItems="flex-end" gap="1">
          <wui-flex alignItems="center" gap="01">
            <wui-text variant="lg-regular" color="primary">${c}</wui-text>
            <wui-text variant="lg-regular" color="secondary">${l}</wui-text>
          </wui-flex>

          <wui-flex alignItems="center" gap="1">
            <wui-text variant="md-regular" color="secondary">on</wui-text>
            <wui-image
              src=${(0,i.o)(jn.getNetworkImage(s))}
              size="xs"
            ></wui-image>
            <wui-text variant="md-regular" color="secondary">${null===s||void 0===s?void 0:s.name}</wui-text>
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}renderWallet(){return a.dy`
      <wui-flex
        alignItems="flex-start"
        justifyContent="space-between"
        .padding=${["3","0","3","0"]}
      >
        <wui-text variant="lg-regular" color="secondary">Wallet</wui-text>

        ${this.renderWalletText()}
      </wui-flex>
    `}renderWalletText(){var e;const{image:t}=this.getWalletProperties({namespace:this.namespace}),{address:n}=this.caipAddress?xt.parseCaipAddress(this.caipAddress):{},o=null===(e=this.selectedExchange)||void 0===e?void 0:e.name;return this.selectedExchange?a.dy`
        <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
          <wui-text variant="lg-regular" color="primary">${o}</wui-text>
          <wui-image src=${(0,i.o)(this.selectedExchange.imageUrl)} size="mdl"></wui-image>
        </wui-flex>
      `:a.dy`
      <wui-flex alignItems="center" justifyContent="flex-end" gap="1">
        <wui-text variant="lg-regular" color="primary">
          ${M.Hg.getTruncateString({string:this.profileName||n||o||"",charsStart:this.profileName?16:4,charsEnd:this.profileName?0:6,truncate:this.profileName?"end":"middle"})}
        </wui-text>

        <wui-image src=${(0,i.o)(t)} size="mdl"></wui-image>
      </wui-flex>
    `}getStepsWithStatus(){return"failure"===this.quoteStatus||"timeout"===this.quoteStatus||"refund"===this.quoteStatus?ei.map((e=>({...e,status:"failed"}))):ei.map((e=>{var t;const n=(null!==(t=oi[e.id])&&void 0!==t?t:[]).includes(this.quoteStatus)?"completed":"pending";return{...e,status:n}}))}renderStep(e){let{title:t,icon:n,status:o}=e;const i={"step-icon-box":!0,success:"completed"===o};return a.dy`
      <wui-flex alignItems="center" gap="3">
        <wui-flex justifyContent="center" alignItems="center" class="step-icon-container">
          <wui-icon name=${n} color="default" size="mdl"></wui-icon>

          <wui-flex alignItems="center" justifyContent="center" class=${(0,Jo.$)(i)}>
            ${this.renderStatusIndicator(o)}
          </wui-flex>
        </wui-flex>

        <wui-text variant="md-regular" color="primary">${t}</wui-text>
      </wui-flex>
    `}renderStatusIndicator(e){return"completed"===e?a.dy`<wui-icon size="sm" color="success" name="checkmark"></wui-icon>`:"failed"===e?a.dy`<wui-icon size="sm" color="error" name="close"></wui-icon>`:"pending"===e?a.dy`<wui-loading-spinner color="accent-primary" size="sm"></wui-loading-spinner>`:null}startPolling(){this.pollingInterval||(this.fetchQuoteStatus(),this.pollingInterval=setInterval((()=>{this.fetchQuoteStatus()}),3e3))}stopPolling(){this.pollingInterval&&(clearInterval(this.pollingInterval),this.pollingInterval=null)}async fetchQuoteStatus(){const e=Ko.state.requestId;if(!e||ti.includes(this.quoteStatus))this.stopPolling();else try{await Ko.fetchQuoteStatus({requestId:e}),ti.includes(this.quoteStatus)&&this.stopPolling()}catch{this.stopPolling()}}initializeNamespace(){var e,t,n;const a=Ua.state.activeChain;this.namespace=a,this.caipAddress=null===(e=Ua.getAccountData(a))||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===(n=Ua.getAccountData(a))||void 0===n?void 0:n.profileName)&&void 0!==t?t:null,this.unsubscribe.push(Ua.subscribeChainProp("accountState",(e=>{var t;this.caipAddress=null===e||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===e||void 0===e?void 0:e.profileName)&&void 0!==t?t:null}),a))}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const a=za.getConnector({id:n,namespace:t});if(!a)return{name:void 0,image:void 0};const o=jn.getConnectorImage(a);return{name:a.name,image:o}}};ii.styles=ni,ai([(0,o.SB)()],ii.prototype,"paymentAsset",void 0),ai([(0,o.SB)()],ii.prototype,"quoteStatus",void 0),ai([(0,o.SB)()],ii.prototype,"quote",void 0),ai([(0,o.SB)()],ii.prototype,"amount",void 0),ai([(0,o.SB)()],ii.prototype,"namespace",void 0),ai([(0,o.SB)()],ii.prototype,"caipAddress",void 0),ai([(0,o.SB)()],ii.prototype,"profileName",void 0),ai([(0,o.SB)()],ii.prototype,"activeConnectorIds",void 0),ai([(0,o.SB)()],ii.prototype,"selectedExchange",void 0),ii=ai([(0,M.Mo)("w3m-pay-loading-view")],ii);var ri=n(56409);const si=F.iv`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${e=>{let{spacing:t}=e;return t[2]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
    column-gap: ${e=>{let{spacing:t}=e;return t[1]}};
    background-color: transparent;
    transition: background-color ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${e=>{let{spacing:t}=e;return t[6]}};
    height: ${e=>{let{spacing:t}=e;return t[6]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${e=>{let{tokens:t}=e;return t.core.textSuccess}};
    box-shadow: 0 0 0 2px ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    }
  }
`;var ci=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let li=class extends a.oi{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return a.dy`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const e=this.icon?a.dy`<wui-icon
          size=${(0,i.o)(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:a.dy`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return a.dy`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${Boolean(this.icon)}
      >
        ${e}
        ${this.enableGreenCircle?a.dy`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return a.dy`
      <wui-text variant="lg-regular" color="primary">
        ${ri.H.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return a.dy`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};li.styles=[W.ET,W.ZM,si],ci([(0,o.Cb)()],li.prototype,"address",void 0),ci([(0,o.Cb)()],li.prototype,"profileName",void 0),ci([(0,o.Cb)()],li.prototype,"alt",void 0),ci([(0,o.Cb)()],li.prototype,"imageSrc",void 0),ci([(0,o.Cb)()],li.prototype,"icon",void 0),ci([(0,o.Cb)()],li.prototype,"iconSize",void 0),ci([(0,o.Cb)({type:Boolean})],li.prototype,"enableGreenCircle",void 0),ci([(0,o.Cb)({type:Boolean})],li.prototype,"loading",void 0),ci([(0,o.Cb)({type:Number})],li.prototype,"charsStart",void 0),ci([(0,o.Cb)({type:Number})],li.prototype,"charsEnd",void 0),li=ci([(0,L.M)("wui-wallet-switch")],li);n(77749);const di=a.iv`
  :host {
    display: block;
  }
`;var ui=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let pi=class extends a.oi{render(){return a.dy`
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
    `}};pi.styles=[di],pi=ui([(0,M.Mo)("w3m-pay-fees-skeleton")],pi);const mi=M.iv`
  :host {
    display: block;
  }

  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }
`;var hi=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let vi=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.quote=Ko.state.quote,this.unsubscribe.push(Ko.subscribeKey("quote",(e=>this.quote=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e,t,n,o;const i=Ea.formatNumber((null===(e=this.quote)||void 0===e?void 0:e.origin.amount)||"0",{decimals:null!==(t=null===(n=this.quote)||void 0===n?void 0:n.origin.currency.metadata.decimals)&&void 0!==t?t:0,round:6}).toString();return a.dy`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">Pay</wui-text>
          <wui-text variant="md-regular" color="primary">
            ${i} ${(null===(o=this.quote)||void 0===o?void 0:o.origin.currency.metadata.symbol)||"Unknown"}
          </wui-text>
        </wui-flex>

        ${this.quote&&this.quote.fees.length>0?this.quote.fees.map((e=>this.renderFee(e))):null}
      </wui-flex>
    `}renderFee(e){var t;const n="network"===e.id,o=Ea.formatNumber(e.amount||"0",{decimals:null!==(t=e.currency.metadata.decimals)&&void 0!==t?t:0,round:6}).toString();if(n){const t=Ua.getAllRequestedCaipNetworks().find((t=>so.isLowerCaseMatch(t.caipNetworkId,e.currency.network)));return a.dy`
        <wui-flex alignItems="center" justifyContent="space-between">
          <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>

          <wui-flex flexDirection="column" alignItems="flex-end" gap="2">
            <wui-text variant="md-regular" color="primary">
              ${o} ${e.currency.metadata.symbol||"Unknown"}
            </wui-text>

            <wui-flex alignItems="center" gap="01">
              <wui-image
                src=${(0,i.o)(jn.getNetworkImage(t))}
                size="xs"
              ></wui-image>
              <wui-text variant="sm-regular" color="secondary">
                ${(null===t||void 0===t?void 0:t.name)||"Unknown"}
              </wui-text>
            </wui-flex>
          </wui-flex>
        </wui-flex>
      `}return a.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-text variant="md-regular" color="secondary">${e.label}</wui-text>
        <wui-text variant="md-regular" color="primary">
          ${o} ${e.currency.metadata.symbol||"Unknown"}
        </wui-text>
      </wui-flex>
    `}};vi.styles=[mi],hi([(0,o.SB)()],vi.prototype,"quote",void 0),vi=hi([(0,M.Mo)("w3m-pay-fees")],vi);const gi=M.iv`
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
`;var wi=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let yi=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.selectedExchange=Ko.state.selectedExchange,this.unsubscribe.push(Ko.subscribeKey("selectedExchange",(e=>this.selectedExchange=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){const e=Boolean(this.selectedExchange);return a.dy`
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

        ${e?null:a.dy`<wui-button
              size="md"
              variant="neutral-secondary"
              @click=${this.dispatchConnectOtherWalletEvent.bind(this)}
              >Connect other wallet</wui-button
            >`}
      </wui-flex>
    `}dispatchConnectOtherWalletEvent(){this.dispatchEvent(new CustomEvent("connectOtherWallet",{detail:!0,bubbles:!0,composed:!0}))}};yi.styles=[gi],wi([(0,o.Cb)({type:Array})],yi.prototype,"selectedExchange",void 0),yi=wi([(0,M.Mo)("w3m-pay-options-empty")],yi);const fi=M.iv`
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
`;var bi=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Ci=class extends a.oi{render(){return a.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.renderOptionEntry()} ${this.renderOptionEntry()} ${this.renderOptionEntry()}
      </wui-flex>
    `}renderOptionEntry(){return a.dy`
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
    `}};Ci.styles=[fi],Ci=bi([(0,M.Mo)("w3m-pay-options-skeleton")],Ci);const ki=M.iv`
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
`;var Ei=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Ai=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.options=[],this.selectedPaymentAsset=null}disconnectedCallback(){var e,t;this.unsubscribe.forEach((e=>e())),null===(e=this.resizeObserver)||void 0===e||e.disconnect();const n=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".pay-options-container");null===n||void 0===n||n.removeEventListener("scroll",this.handleOptionsListScroll.bind(this))}firstUpdated(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".pay-options-container");var n;t&&(requestAnimationFrame(this.handleOptionsListScroll.bind(this)),null===t||void 0===t||t.addEventListener("scroll",this.handleOptionsListScroll.bind(this)),this.resizeObserver=new ResizeObserver((()=>{this.handleOptionsListScroll()})),null===(n=this.resizeObserver)||void 0===n||n.observe(t),this.handleOptionsListScroll())}render(){return a.dy`
      <wui-flex flexDirection="column" gap="2" class="pay-options-container">
        ${this.options.map((e=>this.payOptionTemplate(e)))}
      </wui-flex>
    `}payOptionTemplate(e){var t,n;const{network:o,metadata:r,asset:s,amount:c="0"}=e,l=Ua.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===o)),d=`${o}:${s}`===`${null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.network}:${null===(n=this.selectedPaymentAsset)||void 0===n?void 0:n.asset}`,u=Ea.bigNumber(c,{safe:!0}),p=u.gt(0);return a.dy`
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
              src=${(0,i.o)(r.logoURI)}
              class="token-image"
              size="3xl"
            ></wui-image>
            <wui-image
              src=${(0,i.o)(jn.getNetworkImage(l))}
              class="chain-image"
              size="md"
            ></wui-image>
          </wui-flex>

          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="lg-regular" color="primary">${r.symbol}</wui-text>
            ${p?a.dy`<wui-text variant="sm-regular" color="secondary">
                  ${u.round(6).toString()} ${r.symbol}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>

        ${d?a.dy`<wui-icon name="checkmark" size="md" color="success"></wui-icon>`:null}
      </wui-flex>
    `}handleOptionsListScroll(){var e;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(".pay-options-container");if(!t)return;t.scrollHeight>300?(t.style.setProperty("--options-mask-image","linear-gradient(\n          to bottom,\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--top-opacity))) 0px,\n          rgba(200, 200, 200, calc(1 - var(--options-scroll--top-opacity))) 1px,\n          black 50px,\n          black calc(100% - 50px),\n          rgba(155, 155, 155, calc(1 - var(--options-scroll--bottom-opacity))) calc(100% - 1px),\n          rgba(0, 0, 0, calc(1 - var(--options-scroll--bottom-opacity))) 100%\n        )"),t.style.setProperty("--options-scroll--top-opacity",M.kj.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--options-scroll--bottom-opacity",M.kj.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--options-mask-image","none"),t.style.setProperty("--options-scroll--top-opacity","0"),t.style.setProperty("--options-scroll--bottom-opacity","0"))}};Ai.styles=[ki],Ei([(0,o.Cb)({type:Array})],Ai.prototype,"options",void 0),Ei([(0,o.Cb)()],Ai.prototype,"selectedPaymentAsset",void 0),Ei([(0,o.Cb)()],Ai.prototype,"onSelect",void 0),Ai=Ei([(0,M.Mo)("w3m-pay-options")],Ai);const Ni=M.iv`
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
`;var Ii=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};const Ti={eip155:{icon:"ethereum",label:"EVM"},solana:{icon:"solana",label:"Solana"},bip122:{icon:"bitcoin",label:"Bitcoin"},ton:{icon:"ton",label:"Ton"}};let Si=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.profileName=null,this.paymentAsset=Ko.state.paymentAsset,this.namespace=void 0,this.caipAddress=void 0,this.amount=Ko.state.amount,this.recipient=Ko.state.recipient,this.activeConnectorIds=za.state.activeConnectorIds,this.selectedPaymentAsset=Ko.state.selectedPaymentAsset,this.selectedExchange=Ko.state.selectedExchange,this.isFetchingQuote=Ko.state.isFetchingQuote,this.quoteError=Ko.state.quoteError,this.quote=Ko.state.quote,this.isFetchingTokenBalances=Ko.state.isFetchingTokenBalances,this.tokenBalances=Ko.state.tokenBalances,this.isPaymentInProgress=Ko.state.isPaymentInProgress,this.exchangeUrlForQuote=Ko.state.exchangeUrlForQuote,this.completedTransactionsCount=0,this.unsubscribe.push(Ko.subscribeKey("paymentAsset",(e=>this.paymentAsset=e))),this.unsubscribe.push(Ko.subscribeKey("tokenBalances",(e=>this.onTokenBalancesChanged(e)))),this.unsubscribe.push(Ko.subscribeKey("isFetchingTokenBalances",(e=>this.isFetchingTokenBalances=e))),this.unsubscribe.push(za.subscribeKey("activeConnectorIds",(e=>this.activeConnectorIds=e))),this.unsubscribe.push(Ko.subscribeKey("selectedPaymentAsset",(e=>this.selectedPaymentAsset=e))),this.unsubscribe.push(Ko.subscribeKey("isFetchingQuote",(e=>this.isFetchingQuote=e))),this.unsubscribe.push(Ko.subscribeKey("quoteError",(e=>this.quoteError=e))),this.unsubscribe.push(Ko.subscribeKey("quote",(e=>this.quote=e))),this.unsubscribe.push(Ko.subscribeKey("amount",(e=>this.amount=e))),this.unsubscribe.push(Ko.subscribeKey("recipient",(e=>this.recipient=e))),this.unsubscribe.push(Ko.subscribeKey("isPaymentInProgress",(e=>this.isPaymentInProgress=e))),this.unsubscribe.push(Ko.subscribeKey("selectedExchange",(e=>this.selectedExchange=e))),this.unsubscribe.push(Ko.subscribeKey("exchangeUrlForQuote",(e=>this.exchangeUrlForQuote=e))),this.resetQuoteState(),this.initializeNamespace(),this.fetchTokens()}disconnectedCallback(){super.disconnectedCallback(),this.resetAssetsState(),this.unsubscribe.forEach((e=>e()))}updated(e){super.updated(e);e.has("selectedPaymentAsset")&&this.fetchQuote()}render(){return a.dy`
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
    `}profileTemplate(){var e,t;if(this.selectedExchange){var n,o,r;const e=Ea.formatNumber(null===(n=this.quote)||void 0===n?void 0:n.origin.amount,{decimals:null!==(o=null===(r=this.quote)||void 0===r?void 0:r.origin.currency.metadata.decimals)&&void 0!==o?o:0}).toString();return a.dy`
        <wui-flex
          .padding=${["4","3","4","3"]}
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-text variant="lg-regular" color="secondary">Paying with</wui-text>

          ${this.quote?a.dy`<wui-text variant="lg-regular" color="primary">
                ${Ea.bigNumber(e,{safe:!0}).round(6).toString()}
                ${this.quote.origin.currency.metadata.symbol}
              </wui-text>`:a.dy`<wui-shimmer width="80px" height="18px" variant="light"></wui-shimmer>`}
        </wui-flex>
      `}const s=null!==(e=pn.getPlainAddress(this.caipAddress))&&void 0!==e?e:"",{name:c,image:l}=this.getWalletProperties({namespace:this.namespace}),{icon:d,label:u}=null!==(t=Ti[this.namespace])&&void 0!==t?t:{};return a.dy`
      <wui-flex
        .padding=${["4","3","4","3"]}
        alignItems="center"
        justifyContent="space-between"
        gap="2"
      >
        <wui-wallet-switch
          profileName=${(0,i.o)(this.profileName)}
          address=${(0,i.o)(s)}
          imageSrc=${(0,i.o)(l)}
          alt=${(0,i.o)(c)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        <wui-wallet-switch
          profileName=${(0,i.o)(u)}
          address=${(0,i.o)(s)}
          icon=${(0,i.o)(d)}
          iconSize="xs"
          .enableGreenCircle=${!1}
          alt=${(0,i.o)(u)}
          @click=${this.onConnectOtherWallet.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
      </wui-flex>
    `}initializeNamespace(){var e,t,n;const a=Ua.state.activeChain;this.namespace=a,this.caipAddress=null===(e=Ua.getAccountData(a))||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===(n=Ua.getAccountData(a))||void 0===n?void 0:n.profileName)&&void 0!==t?t:null,this.unsubscribe.push(Ua.subscribeChainProp("accountState",(e=>this.onAccountStateChanged(e)),a))}async fetchTokens(){if(this.namespace){let e;if(this.caipAddress){const{chainId:t,chainNamespace:n}=xt.parseCaipAddress(this.caipAddress),a=`${n}:${t}`;e=Ua.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===a))}await Ko.fetchTokens({caipAddress:this.caipAddress,caipNetwork:e,namespace:this.namespace})}}fetchQuote(){if(this.amount&&this.recipient&&this.selectedPaymentAsset&&this.paymentAsset){const{address:e}=this.caipAddress?xt.parseCaipAddress(this.caipAddress):{};Ko.fetchQuote({amount:this.amount.toString(),address:e,sourceToken:this.selectedPaymentAsset,toToken:this.paymentAsset,recipient:this.recipient})}}getWalletProperties(e){let{namespace:t}=e;if(!t)return{name:void 0,image:void 0};const n=this.activeConnectorIds[t];if(!n)return{name:void 0,image:void 0};const a=za.getConnector({id:n,namespace:t});if(!a)return{name:void 0,image:void 0};const o=jn.getConnectorImage(a);return{name:a.name,image:o}}paymentOptionsViewTemplate(){return a.dy`
      <wui-flex flexDirection="column" gap="2">
        <wui-text variant="sm-regular" color="secondary">CHOOSE PAYMENT OPTION</wui-text>
        <wui-flex class="pay-options-container">${this.paymentOptionsTemplate()}</wui-flex>
      </wui-flex>
    `}paymentOptionsTemplate(){const e=this.getPaymentAssetFromTokenBalances();if(this.isFetchingTokenBalances)return a.dy`<w3m-pay-options-skeleton></w3m-pay-options-skeleton>`;if(0===e.length)return a.dy`<w3m-pay-options-empty
        @connectOtherWallet=${this.onConnectOtherWallet.bind(this)}
      ></w3m-pay-options-empty>`;const t={disabled:this.isFetchingQuote};return a.dy`<w3m-pay-options
      class=${(0,Jo.$)(t)}
      .options=${e}
      .selectedPaymentAsset=${(0,i.o)(this.selectedPaymentAsset)}
      .onSelect=${this.onSelectedPaymentAssetChanged.bind(this)}
    ></w3m-pay-options>`}amountWithFeeTemplate(){return this.isFetchingQuote||!this.selectedPaymentAsset||this.quoteError?a.dy`<w3m-pay-fees-skeleton></w3m-pay-fees-skeleton>`:a.dy`<w3m-pay-fees></w3m-pay-fees>`}paymentActionsTemplate(){var e,t,n,o,i;const r=this.isFetchingQuote||this.isFetchingTokenBalances,s=this.isFetchingQuote||this.isFetchingTokenBalances||!this.selectedPaymentAsset||Boolean(this.quoteError),c=Ea.formatNumber(null!==(e=null===(t=this.quote)||void 0===t?void 0:t.origin.amount)&&void 0!==e?e:0,{decimals:null!==(n=null===(o=this.quote)||void 0===o?void 0:o.origin.currency.metadata.decimals)&&void 0!==n?n:0}).toString();return this.selectedExchange?r||s?a.dy`
          <wui-shimmer width="100%" height="48px" variant="light" ?rounded=${!0}></wui-shimmer>
        `:a.dy`<wui-button
        size="lg"
        fullWidth
        variant="accent-secondary"
        @click=${this.onPayWithExchange.bind(this)}
      >
        ${`Continue in ${this.selectedExchange.name}`}

        <wui-icon name="arrowRight" color="inherit" size="sm" slot="iconRight"></wui-icon>
      </wui-button>`:a.dy`
      <wui-flex alignItems="center" justifyContent="space-between">
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="md-regular" color="secondary">Order Total</wui-text>

          ${r||s?a.dy`<wui-shimmer width="58px" height="32px" variant="light"></wui-shimmer>`:a.dy`<wui-flex alignItems="center" gap="01">
                <wui-text variant="h4-regular" color="primary">${Wo(c)}</wui-text>

                <wui-text variant="lg-regular" color="secondary">
                  ${(null===(i=this.quote)||void 0===i?void 0:i.origin.currency.metadata.symbol)||"Unknown"}
                </wui-text>
              </wui-flex>`}
        </wui-flex>

        ${this.actionButtonTemplate({isLoading:r,isDisabled:s})}
      </wui-flex>
    `}actionButtonTemplate(e){const t=So(this.quote),{isLoading:n,isDisabled:o}=e;let i="Pay";return t.length>1&&0===this.completedTransactionsCount&&(i="Approve"),a.dy`
      <wui-button
        size="lg"
        variant="accent-primary"
        ?loading=${n||this.isPaymentInProgress}
        ?disabled=${o||this.isPaymentInProgress}
        @click=${()=>{t.length>0?this.onSendTransactions():this.onTransfer()}}
      >
        ${i}
        ${n?null:a.dy`<wui-icon
              name="arrowRight"
              color="inherit"
              size="sm"
              slot="iconRight"
            ></wui-icon>`}
      </wui-button>
    `}getPaymentAssetFromTokenBalances(){var e;if(!this.namespace)return[];return(null!==(e=this.tokenBalances[this.namespace])&&void 0!==e?e:[]).map((e=>{try{return function(e){const t=Ua.getAllRequestedCaipNetworks().find((t=>t.caipNetworkId===e.chainId));let n=e.address;if(!t)throw new Error(`Target network not found for balance chainId "${e.chainId}"`);if(so.isLowerCaseMatch(e.symbol,t.nativeCurrency.symbol))n="native";else if(pn.isCaipAddress(n)){const{address:e}=xt.parseCaipAddress(n);n=e}else if(!n)throw new Error(`Balance address not found for balance symbol "${e.symbol}"`);return{network:t.caipNetworkId,asset:n,metadata:{name:e.name,symbol:e.symbol,decimals:Number(e.quantity.decimals),logoURI:e.iconUrl},amount:e.quantity.numeric}}(e)}catch(t){return null}})).filter((e=>Boolean(e))).filter((e=>{const{chainId:t}=xt.parseCaipNetworkId(e.network),{chainId:n}=xt.parseCaipNetworkId(this.paymentAsset.network);return!!so.isLowerCaseMatch(e.asset,this.paymentAsset.asset)||(!this.selectedExchange||!so.isLowerCaseMatch(t.toString(),n.toString()))}))}onTokenBalancesChanged(e){this.tokenBalances=e;const[t]=this.getPaymentAssetFromTokenBalances();t&&Ko.setSelectedPaymentAsset(t)}async onConnectOtherWallet(){await za.connect(),await na.open({view:"PayQuote"})}onAccountStateChanged(e){var t;const{address:n}=this.caipAddress?xt.parseCaipAddress(this.caipAddress):{};if(this.caipAddress=null===e||void 0===e?void 0:e.caipAddress,this.profileName=null!==(t=null===e||void 0===e?void 0:e.profileName)&&void 0!==t?t:null,n){const{address:e}=this.caipAddress?xt.parseCaipAddress(this.caipAddress):{};e?so.isLowerCaseMatch(e,n)||(this.resetAssetsState(),this.resetQuoteState(),this.fetchTokens()):na.close()}}onSelectedPaymentAssetChanged(e){this.isFetchingQuote||Ko.setSelectedPaymentAsset(e)}async onTransfer(){const e=To(this.quote);if(e){var t,n,a,o,i;if(!so.isLowerCaseMatch(null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.asset,e.deposit.currency))throw new Error("Quote asset is not the same as the selected payment asset");const r=null!==(n=null===(a=this.selectedPaymentAsset)||void 0===a?void 0:a.amount)&&void 0!==n?n:"0",s=Ea.formatNumber(e.deposit.amount,{decimals:null!==(o=null===(i=this.selectedPaymentAsset)||void 0===i?void 0:i.metadata.decimals)&&void 0!==o?o:0}).toString();if(!Ea.bigNumber(r).gte(s))return void bn.showError("Insufficient funds");if(this.quote&&this.selectedPaymentAsset&&this.caipAddress&&this.namespace){const{address:t}=xt.parseCaipAddress(this.caipAddress);await Ko.onTransfer({chainNamespace:this.namespace,fromAddress:t,toAddress:e.deposit.receiver,amount:s,paymentAsset:this.selectedPaymentAsset}),Ko.setRequestId(e.requestId),Qn.push("PayLoading")}}}async onSendTransactions(){var e,t,n,a,o,i;const r=null!==(e=null===(t=this.selectedPaymentAsset)||void 0===t?void 0:t.amount)&&void 0!==e?e:"0",s=Ea.formatNumber(null!==(n=null===(a=this.quote)||void 0===a?void 0:a.origin.amount)&&void 0!==n?n:0,{decimals:null!==(o=null===(i=this.selectedPaymentAsset)||void 0===i?void 0:i.metadata.decimals)&&void 0!==o?o:0}).toString();if(!Ea.bigNumber(r).gte(s))return void bn.showError("Insufficient funds");const c=So(this.quote),[l]=So(this.quote,this.completedTransactionsCount);if(l&&this.namespace){await Ko.onSendTransaction({namespace:this.namespace,transactionStep:l}),this.completedTransactionsCount+=1;this.completedTransactionsCount===c.length&&(Ko.setRequestId(l.requestId),Qn.push("PayLoading"))}}onPayWithExchange(){if(this.exchangeUrlForQuote){const e=pn.returnOpenHref("","popupWindow","scrollbar=yes,width=480,height=720");if(!e)throw new Error("Could not create popup window");e.location.href=this.exchangeUrlForQuote;const t=To(this.quote);t&&Ko.setRequestId(t.requestId),Ko.initiatePayment(),Qn.push("PayLoading")}}resetAssetsState(){Ko.setSelectedPaymentAsset(null)}resetQuoteState(){Ko.resetQuoteState()}};Si.styles=Ni,Ii([(0,o.SB)()],Si.prototype,"profileName",void 0),Ii([(0,o.SB)()],Si.prototype,"paymentAsset",void 0),Ii([(0,o.SB)()],Si.prototype,"namespace",void 0),Ii([(0,o.SB)()],Si.prototype,"caipAddress",void 0),Ii([(0,o.SB)()],Si.prototype,"amount",void 0),Ii([(0,o.SB)()],Si.prototype,"recipient",void 0),Ii([(0,o.SB)()],Si.prototype,"activeConnectorIds",void 0),Ii([(0,o.SB)()],Si.prototype,"selectedPaymentAsset",void 0),Ii([(0,o.SB)()],Si.prototype,"selectedExchange",void 0),Ii([(0,o.SB)()],Si.prototype,"isFetchingQuote",void 0),Ii([(0,o.SB)()],Si.prototype,"quoteError",void 0),Ii([(0,o.SB)()],Si.prototype,"quote",void 0),Ii([(0,o.SB)()],Si.prototype,"isFetchingTokenBalances",void 0),Ii([(0,o.SB)()],Si.prototype,"tokenBalances",void 0),Ii([(0,o.SB)()],Si.prototype,"isPaymentInProgress",void 0),Ii([(0,o.SB)()],Si.prototype,"exchangeUrlForQuote",void 0),Ii([(0,o.SB)()],Si.prototype,"completedTransactionsCount",void 0),Si=Ii([(0,M.Mo)("w3m-pay-quote-view")],Si);const xi=M.iv`
  wui-image {
    border-radius: ${e=>{let{borderRadius:t}=e;return t.round}};
  }

  .transfers-badge {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.foregroundSecondary}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[4]}};
  }
`;var Oi=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let _i=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.paymentAsset=Ko.state.paymentAsset,this.amount=Ko.state.amount,this.unsubscribe.push(Ko.subscribeKey("paymentAsset",(e=>{this.paymentAsset=e})),Ko.subscribeKey("amount",(e=>{this.amount=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=c.R.getAllRequestedCaipNetworks().find((e=>e.caipNetworkId===this.paymentAsset.network));return a.dy`<wui-flex
      alignItems="center"
      gap="1"
      .padding=${["1","2","1","1"]}
      class="transfers-badge"
    >
      <wui-image src=${(0,i.o)(this.paymentAsset.metadata.logoURI)} size="xl"></wui-image>
      <wui-text variant="lg-regular" color="primary">
        ${this.amount} ${this.paymentAsset.metadata.symbol}
      </wui-text>
      <wui-text variant="sm-regular" color="secondary">
        on ${null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:"Unknown"}
      </wui-text>
    </wui-flex>`}};_i.styles=[xi],Oi([(0,o.Cb)()],_i.prototype,"paymentAsset",void 0),Oi([(0,o.Cb)()],_i.prototype,"amount",void 0),_i=Oi([(0,M.Mo)("w3m-pay-header")],_i);const Pi=M.iv`
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
`;var Ri=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};const Ui=["SmartSessionList"],Di={PayWithExchange:M.gR.tokens.theme.foregroundPrimary};function Bi(){var e,t,n,a,o,i,r,s;const d=null===(e=u.P.state.data)||void 0===e||null===(t=e.connector)||void 0===t?void 0:t.name,p=null===(n=u.P.state.data)||void 0===n||null===(a=n.wallet)||void 0===a?void 0:a.name,m=null===(o=u.P.state.data)||void 0===o||null===(i=o.network)||void 0===i?void 0:i.name,h=null!==p&&void 0!==p?p:d,v=l.A.getConnectors(),g=1===v.length&&"w3m-email"===(null===(r=v[0])||void 0===r?void 0:r.id),w=null===(s=c.R.getAccountData())||void 0===s?void 0:s.socialProvider;return{Connect:`Connect ${g?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",UsageExceeded:"Usage Exceeded",ConnectingExternal:null!==h&&void 0!==h?h:"Connect Wallet",ConnectingWalletConnect:null!==h&&void 0!==h?h:"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:h?`Get ${h}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:null!==m&&void 0!==m?m:"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:w?w.charAt(0).toUpperCase()+w.slice(1):"Connect Social",ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Processing payment...",PayQuote:"Payment Quote",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset",SmartAccountSettings:"Smart Account Settings"}}let $i=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.heading=Bi()[u.P.state.view],this.network=c.R.state.activeCaipNetwork,this.networkImage=st.f.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=u.P.state.view,this.viewDirection="",this.unsubscribe.push(ct.W.subscribeNetworkImages((()=>{this.networkImage=st.f.getNetworkImage(this.network)})),u.P.subscribeKey("view",(e=>{setTimeout((()=>{this.view=e,this.heading=Bi()[e]}),wt.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()})),c.R.subscribeKey("activeCaipNetwork",(e=>{this.network=e,this.networkImage=st.f.getNetworkImage(this.network)})))}disconnectCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const t=null!==(e=Di[u.P.state.view])&&void 0!==e?e:M.gR.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),a.dy`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){_.X.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),u.P.push("WhatIsAWallet")}async onClose(){await h.safeClose()}rightHeaderTemplate(){var e,t;const n=null===r.h||void 0===r.h||null===(e=r.h.state)||void 0===e||null===(t=e.features)||void 0===t?void 0:t.smartSessions;return"Account"===u.P.state.view&&n?a.dy`<wui-flex>
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
    </wui-flex> `:this.closeButtonTemplate()}closeButtonTemplate(){return a.dy`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){if("PayQuote"===this.view)return a.dy`<w3m-pay-header></w3m-pay-header>`;const e=Ui.includes(this.view);return a.dy`
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
        ${e?a.dy`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){const{view:e}=u.P.state,t="Connect"===e,n=r.h.state.enableEmbedded,o="ApproveTransaction"===e,s="ConnectingSiwe"===e,c="Account"===e,l=r.h.state.enableNetworkSwitch,d=o||s||t&&n;var p;return c&&l?a.dy`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${(0,i.o)(null===(p=this.network)||void 0===p?void 0:p.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${(0,i.o)(this.networkImage)}
      ></wui-select>`:this.showBack&&!d?a.dy`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:a.dy`<wui-icon-button
      data-hidden=${!t}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(_.X.sendEvent({type:"track",event:"CLICK_NETWORKS"}),u.P.push("Networks"))}isAllowedNetworkSwitch(){const e=c.R.getAllRequestedCaipNetworks(),t=!!e&&e.length>1,n=null===e||void 0===e?void 0:e.find((e=>{var t;let{id:n}=e;return n===(null===(t=this.network)||void 0===t?void 0:t.id)}));return t||!n}onViewChange(){const{history:e}=u.P.state;let t=wt.VIEW_DIRECTION.Next;e.length<this.prevHistoryLength&&(t=wt.VIEW_DIRECTION.Prev),this.prevHistoryLength=e.length,this.viewDirection=t}async onHistoryChange(){var e;const{history:t}=u.P.state,n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){u.P.goBack()}};$i.styles=Pi,Ri([(0,o.SB)()],$i.prototype,"heading",void 0),Ri([(0,o.SB)()],$i.prototype,"network",void 0),Ri([(0,o.SB)()],$i.prototype,"networkImage",void 0),Ri([(0,o.SB)()],$i.prototype,"showBack",void 0),Ri([(0,o.SB)()],$i.prototype,"prevHistoryLength",void 0),Ri([(0,o.SB)()],$i.prototype,"view",void 0),Ri([(0,o.SB)()],$i.prototype,"viewDirection",void 0),$i=Ri([(0,M.Mo)("w3m-header")],$i);n(10216),n(99568);const Mi=F.iv`
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
`;var Wi=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Li=class extends a.oi{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return a.dy`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){return"loading"===this.variant?a.dy`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:a.dy`<wui-icon-box
      size="md"
      color=${{success:"success",error:"error",warning:"warning",info:"default"}[this.variant]}
      icon=${{success:"checkmark",error:"warning",warning:"warningCircle",info:"info"}[this.variant]}
    ></wui-icon-box>`}};Li.styles=[W.ET,Mi],Wi([(0,o.Cb)()],Li.prototype,"message",void 0),Wi([(0,o.Cb)()],Li.prototype,"variant",void 0),Li=Wi([(0,L.M)("wui-snackbar")],Li);const Fi=a.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ji=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Hi=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=g.K.state.open,this.unsubscribe.push(g.K.subscribeKey("open",(e=>{this.open=e,this.onOpen()})))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach((e=>e()))}render(){const{message:e,variant:t}=g.K.state;return a.dy` <wui-snackbar message=${e} variant=${t}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),g.K.state.autoClose&&(this.timeout=setTimeout((()=>g.K.hide()),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};Hi.styles=Fi,ji([(0,o.SB)()],Hi.prototype,"open",void 0),Hi=ji([(0,M.Mo)("w3m-snackbar")],Hi);const Vi=(0,w.sj)({message:"",open:!1,triggerRect:{width:0,height:0,top:0,left:0},variant:"shade"}),Ki={state:Vi,subscribe:e=>(0,w.Ld)(Vi,(()=>e(Vi))),subscribeKey:(e,t)=>(0,y.VW)(Vi,e,t),showTooltip(e){let{message:t,triggerRect:n,variant:a}=e;Vi.open=!0,Vi.message=t,Vi.triggerRect=n,Vi.variant=a},hide(){Vi.open=!1,Vi.message="",Vi.triggerRect={width:0,height:0,top:0,left:0}}},qi=(0,S.P)(Ki),zi=a.iv`
  :host {
    width: 100%;
    display: block;
  }
`;var Gi=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Ji=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.text="",this.open=qi.state.open,this.unsubscribe.push(u.P.subscribeKey("view",(()=>{qi.hide()})),s.I.subscribeKey("open",(e=>{e||qi.hide()})),qi.subscribeKey("open",(e=>{this.open=e})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),qi.hide()}render(){return a.dy`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return a.dy`<slot></slot> `}onMouseEnter(){const e=this.getBoundingClientRect();if(!this.open){const t=document.querySelector("w3m-modal"),n={width:e.width,height:e.height,left:e.left,top:e.top};if(t){const a=t.getBoundingClientRect();n.left=e.left-(window.innerWidth-a.width)/2,n.top=e.top-(window.innerHeight-a.height)/2}qi.showTooltip({message:this.text,triggerRect:n,variant:"shade"})}}onMouseLeave(e){this.contains(e.relatedTarget)||qi.hide()}};Ji.styles=[zi],Gi([(0,o.Cb)()],Ji.prototype,"text",void 0),Gi([(0,o.SB)()],Ji.prototype,"open",void 0),Ji=Gi([(0,M.Mo)("w3m-tooltip-trigger")],Ji);const Yi=M.iv`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${e=>{let{spacing:t}=e;return t[3]}} 10px ${e=>{let{spacing:t}=e;return t[3]}};
    border-radius: ${e=>{let{borderRadius:t}=e;return t[3]}};
    color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${e=>{let{spacing:t}=e;return t[5]}});
    transition: opacity ${e=>{let{durations:t}=e;return t.lg}}
      ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${e=>{let{durations:t}=e;return t.xl}};
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${e=>{let{tokens:t}=e;return t.theme.textSecondary}};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${e=>{let{tokens:t}=e;return t.theme.backgroundPrimary}};
    border: 1px solid ${e=>{let{tokens:t}=e;return t.theme.borderPrimary}};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${e=>{let{tokens:t}=e;return t.theme.foregroundPrimary}};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Qi=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Xi=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.open=qi.state.open,this.message=qi.state.message,this.triggerRect=qi.state.triggerRect,this.variant=qi.state.variant,this.unsubscribe.push(qi.subscribe((e=>{this.open=e.open,this.message=e.message,this.triggerRect=e.triggerRect,this.variant=e.variant})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){this.dataset.variant=this.variant;const e=this.triggerRect.top,t=this.triggerRect.left;return this.style.cssText=`\n    --w3m-tooltip-top: ${e}px;\n    --w3m-tooltip-left: ${t}px;\n    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;\n    --w3m-tooltip-display: ${this.open?"flex":"none"};\n    --w3m-tooltip-opacity: ${this.open?1:0};\n    `,a.dy`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};Xi.styles=[Yi],Qi([(0,o.SB)()],Xi.prototype,"open",void 0),Qi([(0,o.SB)()],Xi.prototype,"message",void 0),Qi([(0,o.SB)()],Xi.prototype,"triggerRect",void 0),Qi([(0,o.SB)()],Xi.prototype,"variant",void 0),Xi=Qi([(0,M.Mo)("w3m-tooltip")],Xi);const Zi={getTabsByNamespace(e){var t;return Boolean(e)&&e===b.b.CHAIN.EVM?!1===(null===(t=r.h.state.remoteFeatures)||void 0===t?void 0:t.activity)?wt.ACCOUNT_TABS.filter((e=>"Activity"!==e.label)):wt.ACCOUNT_TABS:[]},isValidReownName:e=>/^[a-zA-Z0-9]+$/gu.test(e),isValidEmail:e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e),validateReownName:e=>e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,""),hasFooter(){const e=u.P.state.view;if(wt.VIEWS_WITH_LEGAL_FOOTER.includes(e)){var t;const{termsConditionsUrl:e,privacyPolicyUrl:n}=r.h.state,a=null===(t=r.h.state.features)||void 0===t?void 0:t.legalCheckbox;return!(!e&&!n||a)}return wt.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}};n(46597);const er=M.iv`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${e=>{let{spacing:t}=e;return t[3]}};
  }

  a {
    text-decoration: none;
    color: ${e=>{let{tokens:t}=e;return t.core.textAccentPrimary}};
    font-weight: 500;
  }
`;var tr=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let nr=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=r.h.state.remoteFeatures,this.unsubscribe.push(r.h.subscribeKey("remoteFeatures",(e=>this.remoteFeatures=e)))}disconnectedCallback(){this.unsubscribe.forEach((e=>e()))}render(){var e;const{termsConditionsUrl:t,privacyPolicyUrl:n}=r.h.state,o=null===(e=r.h.state.features)||void 0===e?void 0:e.legalCheckbox;return!t&&!n||o?a.dy`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:a.dy`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.h.state;return e&&t?"and":""}termsTemplate(){const{termsConditionsUrl:e}=r.h.state;return e?a.dy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:e}=r.h.state;return e?a.dy`<a href=${e} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(){var e;let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return null!==(e=this.remoteFeatures)&&void 0!==e&&e.reownBranding?t?a.dy`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:a.dy`<wui-ux-by-reown></wui-ux-by-reown>`:null}};nr.styles=[er],tr([(0,o.SB)()],nr.prototype,"remoteFeatures",void 0),nr=tr([(0,M.Mo)("w3m-legal-footer")],nr);n(61126);const ar=a.iv``;var or=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let ir=class extends a.oi{render(){const{termsConditionsUrl:e,privacyPolicyUrl:t}=r.h.state;return e||t?a.dy`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `:null}howDoesItWorkTemplate(){return a.dy` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){_.X.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:(0,E.r9)(c.R.state.activeChain)===C.y_.ACCOUNT_TYPES.SMART_ACCOUNT}}),u.P.push("WhatIsABuy")}};ir.styles=[ar],ir=or([(0,M.Mo)("w3m-onramp-providers-footer")],ir);const rr=M.iv`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${e=>{let{easings:t}=e;return t["ease-out-power-2"]}};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var sr=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let cr=class extends a.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=u.P.state.view}firstUpdated(){this.status=Zi.hasFooter()?"show":"hide",this.unsubscribe.push(u.P.subscribeKey("view",(e=>{if(this.view=e,this.status=Zi.hasFooter()?"show":"hide","hide"===this.status){document.documentElement.style.setProperty("--apkt-footer-height","0px")}}))),this.resizeObserver=new ResizeObserver((e=>{for(const t of e)if(t.target===this.getWrapper()){const e=`${t.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",e)}})),this.resizeObserver.observe(this.getWrapper())}render(){return a.dy`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return Zi.hasFooter()?a.dy` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return a.dy`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return a.dy`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return a.dy` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){_.X.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),u.P.push("WhatIsANetwork")}getWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div.container")}};cr.styles=[rr],sr([(0,o.SB)()],cr.prototype,"status",void 0),sr([(0,o.SB)()],cr.prototype,"view",void 0),cr=sr([(0,M.Mo)("w3m-footer")],cr);const lr=M.iv`
  :host {
    display: block;
    width: inherit;
  }
`;var dr=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let ur=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.viewState=u.P.state.view,this.history=u.P.state.history.join(","),this.unsubscribe.push(u.P.subscribeKey("view",(()=>{this.history=u.P.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")})))}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return a.dy`${this.templatePageContainer()}`}templatePageContainer(){return a.dy`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=u.P.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(e){switch(e){case"AccountSettings":return a.dy`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return a.dy`<w3m-account-view></w3m-account-view>`;case"AllWallets":return a.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return a.dy`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return a.dy`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return a.dy`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":default:return a.dy`<w3m-connect-view></w3m-connect-view>`;case"Create":return a.dy`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return a.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return a.dy`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return a.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return a.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return a.dy`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return a.dy`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return a.dy`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return a.dy`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return a.dy`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return a.dy`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return a.dy`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return a.dy`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return a.dy`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return a.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return a.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return a.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return a.dy`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return a.dy`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return a.dy`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return a.dy`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return a.dy`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return a.dy`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return a.dy`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return a.dy`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return a.dy`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return a.dy`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return a.dy`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return a.dy`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return a.dy`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return a.dy`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return a.dy`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return a.dy`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return a.dy`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return a.dy`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return a.dy`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return a.dy`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return a.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return a.dy`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return a.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return a.dy`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return a.dy`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return a.dy`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return a.dy`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return a.dy`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return a.dy`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return a.dy`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return a.dy`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return a.dy`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return a.dy`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return a.dy`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return a.dy`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return a.dy`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return a.dy`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return a.dy`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`}}};ur.styles=[lr],dr([(0,o.SB)()],ur.prototype,"viewState",void 0),dr([(0,o.SB)()],ur.prototype,"history",void 0),ur=dr([(0,M.Mo)("w3m-router")],ur);const pr=M.iv`
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
`;var mr=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};const hr="scroll-lock",vr={PayWithExchange:"0",PayWithExchangeSelectAsset:"0",Pay:"0",PayQuote:"0",PayLoading:"0"};class gr extends a.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=r.h.state.enableEmbedded,this.open=s.I.state.open,this.caipAddress=c.R.state.activeCaipAddress,this.caipNetwork=c.R.state.activeCaipNetwork,this.shake=s.I.state.shake,this.filterByNamespace=l.A.state.filterByNamespace,this.padding=M.gR.spacing[1],this.mobileFullScreen=r.h.state.enableMobileFullScreen,this.initializeTheming(),d.Q.prefetchAnalyticsConfig(),this.unsubscribe.push(s.I.subscribeKey("open",(e=>e?this.onOpen():this.onClose())),s.I.subscribeKey("shake",(e=>this.shake=e)),c.R.subscribeKey("activeCaipNetwork",(e=>this.onNewNetwork(e))),c.R.subscribeKey("activeCaipAddress",(e=>this.onNewAddress(e))),r.h.subscribeKey("enableEmbedded",(e=>this.enableEmbedded=e)),l.A.subscribeKey("filterByNamespace",(e=>{var t;this.filterByNamespace===e||null!==(t=c.R.getAccountData(e))&&void 0!==t&&t.caipAddress||(d.Q.fetchRecommendedWallets(),this.filterByNamespace=e)})),u.P.subscribeKey("view",(()=>{var e;this.dataset.border=Zi.hasFooter()?"true":"false",this.padding=null!==(e=vr[u.P.state.view])&&void 0!==e?e:M.gR.spacing[1]})))}firstUpdated(){if(this.dataset.border=Zi.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded)return s.I.close(),void this.prefetch();this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach((e=>e())),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?a.dy`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?a.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return a.dy` <wui-card
      shake="${this.shake}"
      data-embedded="${(0,i.o)(this.enableEmbedded)}"
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
    </wui-card>`}async onOverlayClick(e){if(e.target===e.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await h.safeClose()}initializeTheming(){const{themeVariables:e,themeMode:t}=v.u.state,n=M.Hg.getColorTheme(t);(0,M.n)(e,n)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),g.K.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const e=document.createElement("style");e.dataset.w3m=hr,e.textContent="\n      body {\n        touch-action: none;\n        overflow: hidden;\n        overscroll-behavior: contain;\n      }\n      w3m-modal {\n        pointer-events: auto;\n      }\n    ",document.head.appendChild(e)}onScrollUnlock(){const e=document.head.querySelector(`style[data-w3m="${hr}"]`);e&&e.remove()}onAddKeyboardListener(){var e;this.abortController=new AbortController;const t=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("wui-card");null===t||void 0===t||t.focus(),window.addEventListener("keydown",(e=>{if("Escape"===e.key)this.handleClose();else if("Tab"===e.key){const{tagName:n}=e.target;!n||n.includes("W3M-")||n.includes("WUI-")||null===t||void 0===t||t.focus()}}),this.abortController)}onRemoveKeyboardListener(){var e;null===(e=this.abortController)||void 0===e||e.abort(),this.abortController=void 0}async onNewAddress(e){const t=c.R.state.isSwitchingNamespace,n="ProfileWallets"===u.P.state.view;!e&&!t&&!n&&s.I.close(),await m.w.initializeIfEnabled(e),this.caipAddress=e,c.R.setIsSwitchingNamespace(!1)}onNewNetwork(e){var t,n;const a=this.caipNetwork,o=(null===a||void 0===a||null===(t=a.caipNetworkId)||void 0===t?void 0:t.toString())!==(null===e||void 0===e||null===(n=e.caipNetworkId)||void 0===n?void 0:n.toString()),i="UnsupportedChain"===u.P.state.view,r=s.I.state.open;let c=!1;this.enableEmbedded&&"SwitchNetwork"===u.P.state.view&&(c=!0),o&&$.resetState(),r&&i&&(c=!0),c&&"SIWXSignMessage"!==u.P.state.view&&u.P.goBack(),this.caipNetwork=e}prefetch(){this.hasPrefetched||(d.Q.prefetch(),d.Q.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}gr.styles=pr,mr([(0,o.Cb)({type:Boolean})],gr.prototype,"enableEmbedded",void 0),mr([(0,o.SB)()],gr.prototype,"open",void 0),mr([(0,o.SB)()],gr.prototype,"caipAddress",void 0),mr([(0,o.SB)()],gr.prototype,"caipNetwork",void 0),mr([(0,o.SB)()],gr.prototype,"shake",void 0),mr([(0,o.SB)()],gr.prototype,"filterByNamespace",void 0),mr([(0,o.SB)()],gr.prototype,"padding",void 0),mr([(0,o.SB)()],gr.prototype,"mobileFullScreen",void 0);let wr=class extends gr{};wr=mr([(0,M.Mo)("w3m-modal")],wr);let yr=class extends gr{};yr=mr([(0,M.Mo)("appkit-modal")],yr);const fr=M.iv`
  .icon-box {
    width: 64px;
    height: 64px;
    border-radius: ${e=>{let{borderRadius:t}=e;return t[5]}};
    background-color: ${e=>{let{colors:t}=e;return t.semanticError010}};
  }
`;var br=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Cr=class extends a.oi{constructor(){super()}render(){return a.dy`
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
    `}onTryAgainClick(){u.P.goBack()}};Cr.styles=fr,Cr=br([(0,M.Mo)("w3m-usage-exceeded-view")],Cr);var kr=n(35894);n(71478);const Er=M.iv`
  :host {
    width: 100%;
  }
`;var Ar=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Nr=class extends a.oi{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0,this.namespaces=[]}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(e){super.updated(e),(e.has("name")||e.has("imageSrc")||e.has("walletRank"))&&(this.hasImpressionSent=!1);e.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver((e=>{e.forEach((e=>{!e.isIntersecting||this.loading||this.hasImpressionSent||this.sendImpressionEvent()}))}),{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){this.name&&!this.hasImpressionSent&&this.walletRank&&(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&_.X.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:u.P.state.view,displayIndex:this.displayIndex}))}handleGetWalletNamespaces(){return Object.keys(kr.j.state.adapters).length>1?this.namespaces:[]}render(){return a.dy`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${(0,i.o)(this.imageSrc)}
        name=${this.name}
        size=${(0,i.o)(this.size)}
        tagLabel=${(0,i.o)(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
        .namespaces=${this.handleGetWalletNamespaces()}
      ></wui-list-wallet>
    `}};Nr.styles=Er,Ar([(0,o.Cb)({type:Array})],Nr.prototype,"walletImages",void 0),Ar([(0,o.Cb)()],Nr.prototype,"imageSrc",void 0),Ar([(0,o.Cb)()],Nr.prototype,"name",void 0),Ar([(0,o.Cb)()],Nr.prototype,"size",void 0),Ar([(0,o.Cb)()],Nr.prototype,"tagLabel",void 0),Ar([(0,o.Cb)()],Nr.prototype,"tagVariant",void 0),Ar([(0,o.Cb)()],Nr.prototype,"walletIcon",void 0),Ar([(0,o.Cb)()],Nr.prototype,"tabIdx",void 0),Ar([(0,o.Cb)({type:Boolean})],Nr.prototype,"disabled",void 0),Ar([(0,o.Cb)({type:Boolean})],Nr.prototype,"showAllWallets",void 0),Ar([(0,o.Cb)({type:Boolean})],Nr.prototype,"loading",void 0),Ar([(0,o.Cb)({type:String})],Nr.prototype,"loadingSpinnerColor",void 0),Ar([(0,o.Cb)()],Nr.prototype,"rdnsId",void 0),Ar([(0,o.Cb)()],Nr.prototype,"displayIndex",void 0),Ar([(0,o.Cb)()],Nr.prototype,"walletRank",void 0),Ar([(0,o.Cb)({type:Array})],Nr.prototype,"namespaces",void 0),Nr=Ar([(0,M.Mo)("w3m-list-wallet")],Nr);const Ir=M.iv`
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
`;var Tr=function(e,t,n,a){var o,i=arguments.length,r=i<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,n):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,a);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Sr=class extends a.oi{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=r.h.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(e){if(e.has("history")){const e=this.history;""!==this.historyState&&this.historyState!==e&&this.onViewChange(e)}e.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),e.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var e;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver((e=>{for(const n of e)if(n.target===this.getWrapper()){let e=n.contentRect.height;const a=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){var t;e=((null===(t=window.visualViewport)||void 0===t?void 0:t.height)||window.innerHeight)-this.getHeaderHeight()-a,this.style.setProperty("--local-border-bottom-radius","0px")}else{e=e+a,this.style.setProperty("--local-border-bottom-radius",a?"var(--apkt-borderRadius-5)":"0px")}this.style.setProperty("--local-container-height",`${e}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${e}px`}})),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),null===(e=window.visualViewport)||void 0===e||e.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var e;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),null===(e=window.visualViewport)||void 0===e||e.removeEventListener("resize",this.onViewportResize)}render(){return a.dy`
      <div class="container" data-mobile-fullscreen="${(0,i.o)(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${(0,i.o)(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(e){const t=e.split(",").filter(Boolean),n=this.historyState.split(",").filter(Boolean),a=n.length,o=t.length,i=t[t.length-1]||"",r=M.Hg.cssDurationToNumber(this.transitionDuration);let s="";o>a?s="next":o<a?s="prev":o===a&&t[o-1]!==n[a-1]&&(s="next"),this.viewDirection=`${s}-${i}`,setTimeout((()=>{var t;this.historyState=e,null===(t=this.setView)||void 0===t||t.call(this,i)}),r),setTimeout((()=>{this.viewDirection=""}),2*r)}getWrapper(){var e;return null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("div.page")}updateContainerHeight(){const e=this.getWrapper();if(!e)return;const t=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let n=0;if(this.mobileFullScreen){var a;n=((null===(a=window.visualViewport)||void 0===a?void 0:a.height)||window.innerHeight)-this.getHeaderHeight()-t,this.style.setProperty("--local-border-bottom-radius","0px")}else n=e.getBoundingClientRect().height+t,this.style.setProperty("--local-border-bottom-radius",t?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${n}px`),"0px"!==this.previousHeight&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${n}px`}getHeaderHeight(){return 60}};Sr.styles=[Ir],Tr([(0,o.Cb)({type:String})],Sr.prototype,"transitionDuration",void 0),Tr([(0,o.Cb)({type:String})],Sr.prototype,"transitionFunction",void 0),Tr([(0,o.Cb)({type:String})],Sr.prototype,"history",void 0),Tr([(0,o.Cb)({type:String})],Sr.prototype,"view",void 0),Tr([(0,o.Cb)({attribute:!1})],Sr.prototype,"setView",void 0),Tr([(0,o.SB)()],Sr.prototype,"viewDirection",void 0),Tr([(0,o.SB)()],Sr.prototype,"historyState",void 0),Tr([(0,o.SB)()],Sr.prototype,"previousHeight",void 0),Tr([(0,o.SB)()],Sr.prototype,"mobileFullScreen",void 0),Sr=Tr([(0,M.Mo)("w3m-router-container")],Sr)}}]);
//# sourceMappingURL=4326.chunk.js.map