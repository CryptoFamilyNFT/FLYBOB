(this["webpackJsonpflappy-bird"]=this["webpackJsonpflappy-bird"]||[]).push([[1],{421:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Y}));var a=n(1),r=n.n(a),o="Scene_Scene__2ORqK",c="Scene_modal__3yRm3",i="Scene_paper__2XaWO",l="Scene_gameOverImage__3EAhY",s="Scene_gameOverButton__R1mLj",A=n(330),d=n.n(A),u=n.p+"static/media/go.69f9c238.png",g=n(420),m=n(422),p=n.p+"static/media/bg.8792c010.png",h=n.p+"static/media/fg.0f9cbff0.png",y=n.p+"static/media/pipeNorth.96834043.png",b=n.p+"static/media/pipeSouth.ce0b7a5c.png",f=n.p+"static/media/fly.e734c795.mp3",v=n.p+"static/media/score.92d4be02.mp3";n(400);function E(e){return new Promise((t,n)=>{const a=new Image;a.addEventListener("load",()=>t(a)),a.addEventListener("error",e=>n(e)),a.setAttribute("crossOrigin","anonymous"),a.src=e})}function C(e){return new Audio(e)}const I=288,w=512,S={position:{x:10,y:150}},O=new Map([["background",E(p)],["bird",E("data:image/png;base64,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")],["ground",E(h)],["topPipe",E(y)],["bottomPipe",E(b)]]),k=new Map([["fly",C(f)],["score",C(v)]]),j="#00FFFF",x="32px Josefin Sans, sans-serif",R=e=>""+e;var P=n(82),N=n(83),T=n(128),B=n(132),G=n(32);const Z=d()(S);let H,J,U,D,F,L,M;var Y=()=>{const[e,t]=Object(a.useState)(!1),[n,A]=Object(a.useState)(0),d=Object(a.useRef)(null),p=Object(a.useRef)(),h=Object(a.useRef)([]),{context:y,saveContext:b}=Object(a.useContext)(N.a),[f,v]=Object(a.useState)(!0),[E,C]=Object(a.useState)(!1),[Y,Q]=Object(a.useState)(!1),[W,V]=Object(a.useState)(!1),[z,K]=Object(a.useState)(0),q=Object(a.useRef)(0),X=Object(a.useRef)(0),_=y.connected||!1;Object(a.useEffect)(()=>{y.connected&&null!==y&&void 0!==y&&y.BobTokenIds&&0===(null===y||void 0===y?void 0:y.BobTokenIds.length)?Q(!1):Q(!0)},[null===y||void 0===y?void 0:y.BobTokenIds,y.connected]);const $=async(e,t)=>{var n;let a=null!==(n=await P.a.getScoreByUser(t))&&void 0!==n?n:0,r=await(async()=>{try{var e;return P.a.findPlayer(null!==(e=y.addressSigner)&&void 0!==e?e:"").then(e=>e.length>0?(console.log("Scores:",e),!0):(console.log("Player1 not found"),!1)).catch(e=>{console.error("Error fetching scores for Player1:",e)})}catch(t){console.log("Error on getPlayer: ",t)}})();const o=a.find(e=>e.player===y.addressSigner);if(console.log(o.score),e>=Number(o.score)){const n=await P.a.updatePlayer(t,e.toString());console.log("updated score: ",n)}if(0===e&&!1===r){await P.a.addScore(t,e.toString());console.log("updated score: ",e)}else console.log("not updated score")},ee=Object(a.useCallback)(()=>{var e;Z.position={...S.position},q.current=0,h.current=[{x:null===(e=d.current)||void 0===e?void 0:e.width,y:0}]},[]),te=()=>{_&&(Z.position.y-=30,Z.rotation=-60,L.play())},ne=Object(a.useCallback)(()=>{var e;if(!p.current||!d.current||!_)return;const n=H.width+50,a=2.5*H.height;p.current.drawImage(H,0,0,n,a);for(let l=0;l<h.current.length;l++){const e=D.height+90;if(p.current.drawImage(D,h.current[l].x,h.current[l].y),p.current.drawImage(F,h.current[l].x,h.current[l].y+e),h.current[l].x--,125===h.current[l].x&&(h.current=[...h.current,{x:d.current.width,y:Math.floor(Math.random()*D.height)-D.height}]),Z.position.x+J.width>=h.current[l].x&&Z.position.x<=h.current[l].x+D.width&&(Z.position.y<=h.current[l].y+D.height||Z.position.y+J.height>=h.current[l].y+e)||Z.position.y+J.height>=d.current.height-U.height)return console.log("Game over"),t(!0),void A(q.current);5===h.current[l].x&&(q.current++,M.play())}p.current.drawImage(U,0,d.current.height-U.height,U.width+50,U.height),p.current.save(),p.current.translate(Z.position.x+J.width/2,Z.position.y+J.height/2),p.current.rotate((null!==(e=Z.rotation)&&void 0!==e?e:45*Math.PI)/180),p.current.drawImage(J,-J.width/2,-J.height/2,J.width,J.height),p.current.restore(),Z.rotation=-45;Z.position.y+=1.7,Z.rotation+=45;const r=R(q.current),o=p.current.measureText(r).width,c=(d.current.width-o)/2,i=d.current.height-450;p.current.fillStyle=j,p.current.font=x,p.current.fillText(r,c,i),X.current=window.requestAnimationFrame(ne)},[ee,_]),ae=Object(a.useCallback)(()=>{var e;window.removeEventListener("keydown",re),null===(e=d.current)||void 0===e||e.removeEventListener("touchstart",re),window.cancelAnimationFrame(X.current)},[X]),re=()=>{Z.position.y-=20,Z.rotation=-60,L.play()};Object(a.useEffect)(()=>(d.current&&(p.current=d.current.getContext("2d")),ee(),L=k.get("fly"),M=k.get("score"),(async e=>{await(async()=>{H=await O.get("background"),J=await O.get("bird"),U=await O.get("ground"),D=await O.get("topPipe"),F=await O.get("bottomPipe")})(),ne(),window.addEventListener("keydown",re),null===(e=d.current)||void 0===e||e.addEventListener("touchstart",te)})(),()=>{ae()}),[ae,ne,ee,Y]);Object(a.useEffect)(()=>{y.connected&&null!==y&&void 0!==y&&y.BobTokenIds&&0===(null===y||void 0===y?void 0:y.BobTokenIds.length)&&C(!0)},[null===y||void 0===y?void 0:y.BobTokenIds,y.connected]),Object(a.useEffect)(()=>{_&&V(!0)},[Y]);const oe=()=>{var e;$(n,null!==(e=y.addressSigner)&&void 0!==e?e:"").then(()=>{V(!1),setTimeout(()=>{V(!0),t(!1),A(q.current),ee(),ne()},500)}).catch(e=>{console.error("Error checking score:",e)})};return console.log("isConnected Modal: ",f),console.log("isPlayable: ",W),r.a.createElement("div",{style:{height:"100%",marginTop:100}},r.a.createElement("div",null,r.a.createElement("p",{style:{color:"yellow",font:"32px Josefin Sans, sans-serif"}},"My TOP Score: ",y.score)),r.a.createElement(g.a,{open:!_,className:c,onClose:()=>_},r.a.createElement("div",{className:i},r.a.createElement("p",{style:{color:"yellow",font:"32px Josefin Sans, sans-serif"}},"Please Connect Your Wallet!"),r.a.createElement("div",{style:{marginLeft:"auto",display:"flex",justifyContent:"center",gap:10,marginRight:0}},r.a.createElement(T.a,null,r.a.createElement(B.a,{mr:4}))))),r.a.createElement(g.a,{open:E,className:c,style:{zIndex:9999}},r.a.createElement("div",{className:i},r.a.createElement("p",{style:{color:"yellow",font:"32px Josefin Sans, sans-serif"}},"You don't have any BobHeadz :("),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",gap:20,justifyContent:"center",alignItems:"center"}},r.a.createElement("a",{href:"https://app.ebisusbay.com/collection/bob-headz",target:"_blank",rel:"noopener noreferrer"},r.a.createElement(m.a,{onClick:oe,variant:"contained",color:"primary"},"Buy One")),r.a.createElement(m.a,{style:{color:"black",background:"yellow",width:50},variant:"contained"},r.a.createElement(G.c,{to:"/"},"Home"))))),r.a.createElement(g.a,{open:e,onClose:()=>oe(),className:c},r.a.createElement("div",{className:i},r.a.createElement("img",{src:u,alt:"GameOver",className:l}),r.a.createElement("p",{style:{color:"yellow",font:"32px Josefin Sans, sans-serif"}},n),!_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{style:{color:"yellow",font:"32px Josefin Sans, sans-serif"}},"Please Connect Your Wallet!"),r.a.createElement("div",{style:{marginLeft:"auto",display:"flex",justifyContent:"center",gap:10,marginRight:0}},r.a.createElement(T.a,null,r.a.createElement(B.a,{mr:4})))),_&&r.a.createElement(m.a,{className:s,onClick:oe,variant:"contained",color:"primary"},"Restart Game"))),r.a.createElement("canvas",{className:o,ref:d,width:I,height:w}))}}}]);
//# sourceMappingURL=SceneComponent.c1613177.chunk.js.map