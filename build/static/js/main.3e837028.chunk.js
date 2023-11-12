(this["webpackJsonpflappy-bird"]=this["webpackJsonpflappy-bird"]||[]).push([[2],{128:function(e,t,n){"use strict";var a=n(1),i=n.n(a),s=n(34),r=n(219),o=n(83),l=n(218),u=n(221);const{ethereum:c}=window,p=Object(l.a)({button:{background:"yellow",border:"2px solid yellow",borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"black",height:48,padding:"0 0px",fontWeight:"bold",fontFamily:"Roboto","&:hover":{background:"#1976d2",color:"white"}}});t.a=e=>{let{children:t}=e;const[n,l]=Object(a.useState)(!1),[d,y]=Object(a.useState)(),m=p(),{context:f,saveContext:b}=i.a.useContext(o.a);function g(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log("ERROR",t)}function v(e){f.connected&&window.location.reload()}function h(e){f.connected&&window.location.reload()}return Object(a.useLayoutEffect)(()=>(s.a.connectErrorListener(g),s.a.connectAccountListener(h),s.a.connectChainListener(v),()=>{s.a.disconnectListeners()}),[f.connected]),Object(a.useEffect)(()=>{f.balance&&y(`${f.balance.toFixed(2)} ${f.chainSymbol}`)},[f.balance,f.chainSymbol]),i.a.createElement("div",{style:{display:"flex",alignItems:"center"}},t,d?i.a.createElement("span",{style:{fontSize:"2x1",fontWeight:"bold",marginRight:15}},d):" ",i.a.createElement(u.a,{variant:"contained",disableElevation:!0,size:"small",style:{marginRight:"-20px",minWidth:100},className:m.button,onClick:f.connected?function(){console.log("Connector.disconnect"),y(void 0);const e={...f,...s.a.initialAccount(),...s.a.initialToast()};s.a.disconnect(e).then(b)}:function(){var e;c&&(null!==(e=f.connected)&&void 0!==e&&e||(l(!0),s.a.connect(f).then(e=>{console.log("Connector.EtherHelper.connect: ",e),b(e),l(!1)})))},disabled:n},n?i.a.createElement(r.a,{size:20,color:"secondary"}):i.a.createElement("span",null,void 0!==f.addressSigner?f.addressSigner.substring(0,7)+"...":"CONNECT")))}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1);const i=e=>a.createElement(a.Fragment,null)},162:function(e,t,n){e.exports=n(210)},198:function(e,t){},207:function(e,t){},208:function(e,t){},210:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),s=n(133),r=n(32),o=n(23),l=n(141),u=n.n(l),c=n(138),p=n.n(c),d="Menu_Menu__3dUGj",y="Menu_Links__3wBOT",m="List_List__1c9rg",f=n(221),b=n(267),g=n(269);var v=()=>{const e=Object(b.a)(),t=Object(g.a)(e.breakpoints.down("sm")),n=Object(o.f)();return i.a.createElement(i.a.Fragment,null,t&&"/"===n.pathname?i.a.createElement("div",{className:m,style:{marginTop:0}},i.a.createElement(f.a,{style:{color:"black",background:"yellow"},variant:"contained"},i.a.createElement(r.c,{to:"/game"},"Play")),i.a.createElement(f.a,{style:{color:"black",background:"yellow"},variant:"contained"},i.a.createElement(r.c,{to:"/leaderboard"},"Leaderboard"))):i.a.createElement("div",{className:m,style:{marginTop:300}},i.a.createElement(f.a,{style:{color:"black",background:"yellow"},variant:"contained"},i.a.createElement(r.c,{to:"/game"},"Play")),i.a.createElement(f.a,{style:{color:"black",background:"yellow"},variant:"contained"},i.a.createElement(r.c,{to:"/leaderboard"},"Leaderboard"))))};var h={APP_COMPONENT:"App",POSTER_COMPONENT:"Poster",MENU_COMPONENT:"Menu",BACK_BUTTON:"Menu__BackButton",LICENSE_LINK:"Menu__LicenseLink",REPO_LINK:"Menu__RepoLink"};const w=i.a.lazy(()=>Promise.all([n.e(5),n.e(1)]).then(n.bind(null,421))),T=i.a.lazy(()=>n.e(0).then(n.bind(null,423)));var E=Object(o.g)(e=>{let{history:t}=e;const n=i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/game",component:w}),i.a.createElement(o.a,{path:"/author",component:T}),i.a.createElement(o.a,{path:"/",component:v})),s=(["/","/leaderboard","/game","/flappy-bird","/flappy-bird/"].includes(t.location.pathname),i.a.createElement("p",null,"Loading..."));return i.a.createElement("div",{className:d,"data-testid":h.MENU_COMPONENT},i.a.createElement(a.Suspense,{fallback:s},n),i.a.createElement("div",{className:y},i.a.createElement("a",{href:"https://linktr.ee/BOBAdventures"},i.a.createElement(p.a,{style:{fontSize:40,color:"yellow"}})),i.a.createElement("a",{href:"https://twitter.com/CroBobAdventure/"},i.a.createElement(u.a,{style:{fontSize:40,color:"yellow"}}))))}),S={Poster:"Poster_Poster__CYb5V",PosterBlur:"Poster_PosterBlur__1QoT-"},_=n(218),O=n(280),M=n(281),A=n(282),P=n(283),C=n(284),I=n(285),x=n(286),k=n(287),B=n(82);const N=Object(_.a)(e=>({root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650,fontFamily:"Josefin Sans, sans-serif"},title:{textAlign:"center",marginBottom:e.spacing(2),marginTop:e.spacing(2),fontFamily:"Josefin Sans, sans-serif"}}));var R=()=>{const e=N(),[t,n]=Object(a.useState)();return Object(a.useEffect)(()=>{(async()=>{try{const e=await B.a.getScores(),t=e.sort((e,t)=>parseInt(t.score)-parseInt(e.score)).slice(0,10);n(t)}catch(e){console.log(e),n([{player:"",score:""}])}})()},[]),i.a.createElement(O.a,{style:{backgroundColor:"yellow",minHeight:300,maxHeight:300,overflowY:"auto",gap:10,border:"1px solid aqua"}},i.a.createElement(M.a,{variant:"h4",className:e.title,style:{fontFamily:"Josefin Sans, sans-serif",marginTop:30}},"Leaderboard"),i.a.createElement(A.a,null,i.a.createElement(P.a,{className:e.table,"aria-label":"simple table"},i.a.createElement(C.a,null,i.a.createElement(I.a,null,i.a.createElement(x.a,{style:{fontFamily:"Josefin Sans, sans-serif"}},"#"),i.a.createElement(x.a,{style:{fontFamily:"Josefin Sans, sans-serif"}},"User"),i.a.createElement(x.a,{style:{fontFamily:"Josefin Sans, sans-serif"}},"Score"))),i.a.createElement(k.a,null,null===t||void 0===t?void 0:t.map((e,t)=>{var n,a;return i.a.createElement(I.a,{key:t},i.a.createElement(x.a,{style:{fontFamily:"Josefin Sans, sans-serif"},component:"th",scope:"row"},t+1),i.a.createElement(x.a,{style:{fontFamily:"Josefin Sans, sans-serif"}},(null===(n=e.player)||void 0===n?void 0:n.slice(0,5))+"..."+(null===(a=e.player)||void 0===a?void 0:a.slice(-5))),i.a.createElement(x.a,{style:{fontFamily:"Josefin Sans, sans-serif"}},e.score))})))))},D=n.p+"static/media/drip.f16f034e.jpeg";const L=Object(_.a)(e=>({root:{width:"100%",marginTop:e.spacing(3),overflowX:"auto"},table:{minWidth:650,fontFamily:"Josefin Sans, sans-serif"},title:{textAlign:"center",marginBottom:e.spacing(2),fontFamily:"Josefin Sans, sans-serif"}}));var F=()=>{L();return i.a.createElement("div",null,i.a.createElement("div",{style:{backgroundColor:"transparent",marginTop:40,border:"2px solid transparent",borderBottom:"none"}},i.a.createElement("img",{src:D,alt:"",style:{border:"2px solid transparent",borderRadius:"50%"}}),i.a.createElement(M.a,{style:{color:"yellow",fontFamily:"Josefin Sans, sand-serif",fontWeight:"bold",fontSize:"40px",marginTop:50,textShadow:"0 0 20px black"}}," BOB ADVENTURES 2")))};var U=()=>{const e=Object(b.a)(),t=Object(g.a)(e.breakpoints.down("sm")),n=i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/leaderboard",component:R}),i.a.createElement(o.a,{path:"/topboard",component:F})),s=Object(o.f)(),r=i.a.createElement("p",null,"Loading...");return i.a.createElement("div",{className:S.Poster,"data-testid":h.POSTER_COMPONENT},t&&"/"!==s.pathname?i.a.createElement("div",{className:S.PosterMobile},i.a.createElement(a.Suspense,{fallback:r},n)):i.a.createElement("div",null,t&&"/"===s.pathname?i.a.createElement(F,null):i.a.createElement(R,null)))},W=n(288),j=n(289),H=n(128),J=n(132);var q=()=>i.a.createElement(W.a,{position:"fixed",style:{height:60}},i.a.createElement(j.a,{style:{gap:15}},i.a.createElement(M.a,{variant:"h6",style:{color:"yellow",fontFamily:"Josefin Sans, sans-serif"},component:r.b,to:"/"},"Home"),i.a.createElement(M.a,{variant:"h6",style:{color:"yellow",fontFamily:"Josefin Sans, sans-serif"},component:r.b,to:"/leaderboard"},"Leaderboard"),i.a.createElement("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:10,marginRight:10}},i.a.createElement(H.a,null,i.a.createElement(J.a,{mr:4})))));Object(_.a)(e=>({PosterMobile:{width:"100%",marginTop:e.spacing(3),overflowX:"auto",height:"100%"},table:{minWidth:650,fontFamily:"Josefin Sans, sans-serif"},title:{textAlign:"center",marginBottom:e.spacing(2),fontFamily:"Josefin Sans, sans-serif"}}));var K=function(){const e=Object(b.a)();return Object(g.a)(e.breakpoints.down("sm")),i.a.createElement(r.a,null,i.a.createElement("div",{className:"App-blurred","data-testid":h.APP_COMPONENT},i.a.createElement("div",{className:"App-content"}),i.a.createElement(i.a.Fragment,null,i.a.createElement(q,null),i.a.createElement(U,null),i.a.createElement(E,null))))};const $=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=()=>{const n=e.installing;null!=n&&(n.onstatechange=()=>{"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(e=>{console.error("Error during service worker registration:",e)})}var V=n(34),X=n(83);var Y=e=>{let{children:t}=e;const[n,s]=i.a.useState({loaded:!1,reload:!0}),r=e=>{s(e)};function o(e){console.log("EtherProvider.error: ",e)}return Object(a.useEffect)(()=>(V.a.connectErrorListener(o),V.a.queryProviderInfo(n).then(e=>r({...e,loaded:!0,connected:!1})),()=>{V.a.disconnectListeners()}),[]),Object(a.useEffect)(()=>{n.toastId&&alert(`${n.toastTitle}\n${n.toastDescription}`)},[n.toastId]),i.a.createElement(X.a.Provider,{value:{context:n,saveContext:r}},t)};const G=document.getElementById("root");Object(s.createRoot)(G).render(i.a.createElement(Y,null,i.a.createElement(K,null))),function(e){if("serviceWorker"in navigator){if(new URL("/flappy-bird",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",()=>{const t="/flappy-bird/service-worker.js";$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then(n=>{const a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):z(e,t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(()=>{console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):z(t,e)})}}()},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(75),i=n(49),s=n(79);var r=n(51),o=n(82);const{ethereum:l}=window;class u{static getChainId(){return Object({NODE_ENV:"production",PUBLIC_URL:"/flappy-bird",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CHAINID?Number(Object({NODE_ENV:"production",PUBLIC_URL:"/flappy-bird",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_CHAINID):25}static initProvider(){const e=this.getChainId(),t=new a.a.providers.JsonRpcProvider(class{static getDeployerAddress(e){switch(e){case 25:return"0xC1ec8665C40B8cAB988C3E126d96d28Bbcdd550a";case 5:case 338:return"0x60fE283F72f309F0900e43bcd4Ce74FfA0e81935";default:return""}}static getHyenaLottery(e){switch(e){case 25:return"0xA24480744F01616e261D129a4dA268DeEB640ed9";case 5:case 338:default:return""}}static getHyenaCasino(e){switch(e){case 25:return"0x62f0a7C28588E2DFd2f8ddac0Dd394E9A46130Eb";case 5:case 338:default:return""}}static getHustlers(e){switch(e){case 25:return"0xA5353D17cC3F30DC07D6B0C5510a15Ce382B14A4";case 5:case 338:default:return""}}static getHyenaRaffle(e){switch(e){case 25:return"0x6De751fc359a32eDd3cd4164f8750f303f4BCE03";case 5:case 338:default:return""}}static getHyenaAddress(e){switch(e){case 25:return"0x257f30fbD890840FA00c2e0f043cF5Ad9A631546";case 5:case 338:return"0x2e38789FAe68D645D651A3cC5e27aD73004Ae71D";default:return""}}static getRpcUrl(e){switch(e){case 25:return"https://evm.cronos.org/";case 338:return"https://evm-t3.cronos.org";default:return"https://evm.cronos.org"}}static getRoyaltiesAddress(e){switch(e){case 25:return"0xf966c9722bc8b320ec738db2e2d10ba2ef075756";case 5:case 338:return"0x36c911fce2be145c338f10184832c95be7dd5f43";default:return""}}static formatAddress(e){return e&&e.length>20?`${e.substring(0,7)}...${e.substring(e.length-5)}`:""}}.getRpcUrl(e));return Object({NODE_ENV:"production",PUBLIC_URL:"/flappy-bird",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WEB&&"1"===Object({NODE_ENV:"production",PUBLIC_URL:"/flappy-bird",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_WEB?t:l?new a.a.providers.Web3Provider(l):t}static initialAccount(){return{balance:void 0,croAmount:0,connected:!1}}static initialToast(){return{toastId:void 0,toastDescription:"",toastStatus:"success",toastTitle:"",toastLink:void 0}}static async getURI(e,t,n){try{const i=u.initProvider();i.getSigner(n.addressSigner);let s;const r=new a.a.Contract(e,["function tokenURI(uint256 tokenId) view returns (string)"],i),o=await r.tokenURI(t);console.log(o);const l=o.slice(8);console.log(o),s="cdn"===l.slice(0,3)?o:"https://ipfs.io/ipfs/"+o.slice(7),"0xA5353D17cC3F30DC07D6B0C5510a15Ce382B14A4"===e&&(s=o),console.log("URI del token NFT:",s);const c=await fetch(s);if(!c.ok)throw new Error("Errore durante il recupero dell'URI risolto: "+c.status);return await c.json()}catch(i){throw console.error("Errore durante il recupero dei dati NFT:",i),i}}static async connect(e){try{console.log("EtherHelper.connect");const t=u.initProvider();e.chainId||(e=await this.getNetwork(t,e));let n=await t.send("eth_requestAccounts",[]);return this.queryProviderInfo({...e,addressSigner:n[0],connected:!0}).then(this.querySignerInfo)}catch(t){console.log("EtherHelper.connect FAILED: ",JSON.stringify(t))}return e}static async getNetwork(e,t){const n=await e.getNetwork();return{...t,chainId:n.chainId?i.a.from(n.chainId).toNumber():25,chainSymbol:n.ensAddress?await e.getCode(n.ensAddress):"CRO"}}static async disconnect(e){return this.disconnectListeners(),this.queryProviderInfo({loaded:!1,reload:!0})}static async mint(e,t){try{if(!e.connected)return e;const n=u.initProvider().getSigner(e.addressSigner),a=new s.b("0x41C7874A2fE9D1ea126bfBD44597A1f96546152e",r,n),i=await a.connect(n).mint(t);let o=await i.wait();console.log("EtherHelper.mint Transaction Hash: ",JSON.stringify(o.transactionHash)),e={...e,toastId:"mint_"+o.transactionHash,toastStatus:"success",toastTitle:"Bob Mint",toastDescription:"Successfully minted your Bob Invitations"}}catch(n){e={...e,toastId:"mintError_"+Date.now(),toastStatus:"error",toastTitle:"Bob Invitations Mint",toastDescription:"FAILED to mint: "+(null===n||void 0===n?void 0:n.message.split(";")[0])},console.log("EtherProvider.mint Error: ",JSON.stringify(n))}return console.log("mint"),await this.querySignerInfo({...e}).then(this.queryProviderInfo)}static async querySignerInfo(e){if(!e.addressSigner)return e;const t=u.initProvider();u.getChainId();e.chainId||(e=await this.getNetwork(t,e));const n=t.getSigner(e.addressSigner).getBalance().then(t=>e.balance=Number(a.a.utils.formatEther(t))).catch(e=>console.log("EtherHelper.queryProviderInfo.croBalance: ",JSON.stringify(e)));e.addressSigner;return await Promise.all([n]),e}static async BobBalanceOf(e){const t=u.initProvider().getSigner(e.addressSigner),n=new s.b("0x41C7874A2fE9D1ea126bfBD44597A1f96546152e",r,t);if(e.connected)try{var a;const t=await n.balanceOf(null!==(a=e.addressSigner)&&void 0!==a?a:"").then(e=>e.toNumber());console.log("balance and tokenIds: ",t);const s=[];for(let a=0;a<t;a++){var i;const t=await n.tokenOfOwnerByIndex(null!==(i=e.addressSigner)&&void 0!==i?i:"",a);s.push(t.toNumber())}return console.log("balance and tokenIds: ",t,s),s}catch(o){console.log("Can't fetch balanceOf owner:",o)}}static async getTokenURI(e,t){if(e.connected){const n=u.initProvider().getSigner(e.addressSigner),a=new s.b("0x41C7874A2fE9D1ea126bfBD44597A1f96546152e",r,n),i=await a.tokenURI(t),o=await fetch(i);return await o.json()}}static async getBobId(e){if(e.connected){const i=u.initProvider().getSigner(e.addressSigner),o=new s.b("0x41C7874A2fE9D1ea126bfBD44597A1f96546152e",r,i);try{if(e.connected)try{var t;const a=await o.balanceOf(null!==(t=e.addressSigner)&&void 0!==t?t:"").then(e=>e.toNumber());console.log("balance and tokenIds: ",a);const i=[];for(let t=0;t<a;t++){var n;const a=await o.tokenOfOwnerByIndex(null!==(n=e.addressSigner)&&void 0!==n?n:"",t);i.push(a.toNumber())}return console.log("balance and tokenIds: ",a,i),i}catch(a){console.log("Can't fetch balanceOf owner:",a)}}catch(a){console.log("ERROR.EtherHelper.getHustlerId: ",JSON.stringify(a))}}}static async getBobBalanceOf(e){if(e.connected){const n=u.initProvider().getSigner(e.addressSigner),a=new s.b("0x41C7874A2fE9D1ea126bfBD44597A1f96546152e",r,n);try{const t=await a.balanceOf(e.addressSigner||"");return t}catch(t){console.log("ERROR.EtherHelper.getHustlerBalanceOf: ",JSON.stringify(t))}}}static async getBobTokenURI(e,t){if(e.connected){const n=u.initProvider().getSigner(e.addressSigner),a=new s.b("0x41C7874A2fE9D1ea126bfBD44597A1f96546152e",r,n),i=await a.tokenURI(t),o=await fetch(i);return await o.json()}}static isBOBHolders(e){var t;return!0===e.connected&&!(null===(t=e.BobTokenIds)||void 0===t||!t.length)}static async queryBobInfo(e){if(e.loaded&&!e.reload)return e;new Date;const t=u.initProvider(),n=t.getSigner(e.addressSigner),a=(new s.b("0x41C7874A2fE9D1ea126bfBD44597A1f96546152e",r,n),u.isBOBHolders(e));return e.isBobHolder=a,e.chainId||(e=await this.getNetwork(t,e)),await Promise.all([a]),e}static async queryProviderInfo(e){var t;if(e.loaded&&!e.reload)return e;const n=u.initProvider(),a=n.getSigner(e.addressSigner),i=(new s.b("0x41C7874A2fE9D1ea126bfBD44597A1f96546152e",r,a),u.BobBalanceOf(e).then(t=>e.BobTokenIds=null!==t&&void 0!==t?t:[]).catch(e=>JSON.stringify(e))),l=(async e=>{try{var t;const n=(null!==(t=await o.a.getScoreByUser(e))&&void 0!==t?t:0).find(t=>t.player===e);return console.log(n.score),n.score}catch(n){return 0}})(null!==(t=e.addressSigner)&&void 0!==t?t:"").then(t=>e.score=null!==t&&void 0!==t?t:[]).catch(e=>console.log(e));return e.chainId||(e=await this.getNetwork(n,e)),await Promise.all([i,l]),await Promise.all([this.queryBobInfo(e)]),e}static async queryOwnerProviderInfo(e){u.initProvider();return e}static connectChainListener(e){null===l||void 0===l||l.on("chainChanged",e)}static connectAccountListener(e){null===l||void 0===l||l.on("accountsChanged",e)}static connectErrorListener(e){null===l||void 0===l||l.on("error",e)}static async getBlockTimeStamp(){const e=u.initProvider();return 1e3*(await e.getBlock("latest")).timestamp}static disconnectListeners(){null===l||void 0===l||l.removeAllListeners()}}},51:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"_marketAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"FundsDisperse","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"milestone","type":"uint256"}],"name":"MilestoneReached","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"address","name":"refundee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Refunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[{"internalType":"address[]","name":"_addresses","type":"address[]"}],"name":"addWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"addWhiteListAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"airdropMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"availableTokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"blacklist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"canMint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"checkBlacklist","outputs":[{"internalType":"uint256[]","name":"blacklisted","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint16","name":"_percent","type":"uint16"},{"internalType":"address","name":"_to","type":"address"}],"name":"disperseFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getInfo","outputs":[{"components":[{"internalType":"uint256","name":"regularCost","type":"uint256"},{"internalType":"uint256","name":"memberCost","type":"uint256"},{"internalType":"uint256","name":"whitelistCost","type":"uint256"},{"internalType":"uint256","name":"maxSupply","type":"uint256"},{"internalType":"uint256","name":"totalSupply","type":"uint256"},{"internalType":"uint256","name":"maxMintPerAddress","type":"uint256"},{"internalType":"uint256","name":"maxMintPerTx","type":"uint256"}],"internalType":"struct Drop.Infos","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPayees","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getShares","outputs":[{"internalType":"uint16[]","name":"","type":"uint16[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initiateRefunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isPresale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxAvailableSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintPerAddress","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"memberCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"milestonesReached","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"mintCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refundAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refunding","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"regularCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"removeWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"requestRefunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"reservedMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256[]","name":"_ids","type":"uint256[]"}],"name":"reservedMintByIds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reservedMintedNFT","outputs":[{"internalType":"uint256","name":"_value","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reservedNft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_salePrice","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"scale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint96","name":"feeNumerator","type":"uint96"}],"name":"setDefaultRoyalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint16","name":"maxAmount","type":"uint16"}],"name":"setMaxMintPerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_max","type":"uint256"}],"name":"setMaxWhiteList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setMemberCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_newPayees","type":"address[]"},{"internalType":"uint16[]","name":"_newShares","type":"uint16[]"}],"name":"setPaymentShares","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setPublicStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setRegularCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_presaleOnly","type":"bool"}],"name":"setWhiteListPresaleOnly","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_cost","type":"uint256"}],"name":"setWhitelistCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"setWhitelistStartTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"whiteListPresaleOnly","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"whitelistCost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]')},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(59),i=n.n(a);class s{static async getScores(){try{const e=await i.a.get(s.BASE_URL+"/scores");return await Promise.all([e]),e.data}catch(e){throw console.error("Error fetching scores:",e),e}}static async getPlayer(){try{return(await i.a.get(s.BASE_URL+"/players")).data}catch(e){throw console.error("Error fetching scores:",e),e}}static async getScoreByUser(e){try{const t=await i.a.get(`${this.BASE_URL}/scores/${e}`);return console.log(t.data),t.data}catch(t){throw console.error(`Error fetching score for user ${e}:`,t),t}}static async addScore(e,t){try{await i.a.post(s.BASE_URL+"/scores",{player:e,score:t})}catch(n){throw console.error("Error adding score:",n),n}}static async findPlayer(e){try{const t=await i.a.get(`${s.BASE_URL}/scores/${e}`);return console.log(t.data),t.data}catch(t){throw console.error(`Error fetching scores for player ${e}:`,t),t}}static async updatePlayer(e,t){try{await i.a.put(s.BASE_URL+"/scores",{player:e,newScore:t})}catch(n){throw console.error("Error updating player:",n),n}}}s.BASE_URL="https://bobdb.onrender.com/api"},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(1);const i=n.n(a).a.createContext(null)}},[[162,3,4]],[0]]);
//# sourceMappingURL=main.3e837028.chunk.js.map