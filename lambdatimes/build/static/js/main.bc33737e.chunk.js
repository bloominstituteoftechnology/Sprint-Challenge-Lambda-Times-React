(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(29)},23:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(7),o=n.n(i),l=(n(23),n(1)),s=n(2);function c(){var e=Object(l.a)(["\ncursor: pointer;\n"]);return c=function(){return e},e}function u(){var e=Object(l.a)(["\n cursor: pointer;\n  margin-right: 5%;\n  :last-child{\n    margin-right:0\n  };\n  :hover{\n    text-decoration:underline;\n  };\n  \n"]);return u=function(){return e},e}function d(){var e=Object(l.a)(["\n  cursor: pointer;\n  margin-right: 25%;\n  font-weight: bold;\n"]);return d=function(){return e},e}function f(){var e=Object(l.a)(["\ndisplay: flex;\njustify-content: flex-end;\nalign-items: center;\nflex-direction: row;\nflex: 1;\nfont-size: 11px;\nfont-weight: bold;\n"]);return f=function(){return e},e}function m(){var e=Object(l.a)(["\ndisplay: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n  flex: 3;\n  font-size: 9px;\n"]);return m=function(){return e},e}function h(){var e=Object(l.a)(["\ndisplay: flex;\njustify-content: none;\nalign-items: center;\nflex-direction: row;\nflex: 1;\nfont-size: 11px;\n"]);return h=function(){return e},e}function p(){var e=Object(l.a)(["\nwidth: 100%;\ndisplay: flex;\njustify-content: none;\nalign-items: none;\nflex-direction: row;\ncolor: #fff;\nletter-spacing: 1px;\npadding: 0 10px;\n"]);return p=function(){return e},e}function g(){var e=Object(l.a)(["\nwidth: 100%;\ndisplay: flex;\njustify-content: center;\nalign-items: none;\nflex-direction: row;\nposition: fixed;\nheight: 44px;\nbackground-color: #333;\n"]);return g=function(){return e},e}var b=s.a.div(g()),E=s.a.div(p()),O=s.a.div(h()),j=s.a.div(m()),v=s.a.div(f()),x=s.a.span(d()),N=s.a.span(u()),w=s.a.span(c()),S=function(){return r.a.createElement(b,null,r.a.createElement(E,null,r.a.createElement(O,null,r.a.createElement(x,null,"TOPICS"),r.a.createElement(x,null,"SEARCH")),r.a.createElement(j,null,r.a.createElement(N,null,"GENERAL"),r.a.createElement(N,null,"BROWNBAG"),r.a.createElement(N,null,"Stuff"),r.a.createElement(N,null,"MUSIC"),r.a.createElement(N,null,"ANNOUNCEMENTS")),r.a.createElement(v,null,r.a.createElement(w,null,"LOG IN"))))};function y(){var e=Object(l.a)(["\n text-align: right;\n  margin-right: 25px;\n  flex: 1;\n"]);return y=function(){return e},e}function A(){var e=Object(l.a)(["\n  align-self: flex-end;\n  font-size: 11px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  margin-left: 25px;\n  flex: 1;\n"]);return A=function(){return e},e}function T(){var e=Object(l.a)(["\nfont-size: 60px;\nfont-family: Didot, serif;\nfont-weight: bold;\nflex: 8;\ntext-align: center;\ncolor: #000;\n"]);return T=function(){return e},e}function R(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  background-color: #fff;\n  border-bottom: 1px solid lightgrey;\n  width: 100%;\n  height: 120px;\n  margin-top: 44px;\n  padding-bottom: 15px;\n"]);return R=function(){return e},e}var F=s.a.div(R()),W=s.a.h1(T()),B=s.a.span(A()),D=s.a.span(y()),C=function(){return r.a.createElement(F,null,r.a.createElement(B,null,"SMARCH 32, 2018"),r.a.createElement(W,null,"Lambda Times"),r.a.createElement(D,null,"98\xb0"))},I=n(10),L=n(11),G=n(13),k=n(12),M=n(14),U=function(e){return r.a.createElement("div",{className:e.tab===e.selectedTab?"tab active-tab":"tab",onClick:function(){e.selectTabhandler(e.tab),e.selectedTab(e.tab)}},e.tab.toUpperCase())},H=function(e){return console.log(e),r.a.createElement("div",{className:"tabs"},r.a.createElement("div",{className:"topics"},r.a.createElement("span",{className:"title"},"TRENDING TOPICS:"),e.tabs.map(function(t){return r.a.createElement(U,{selectedTab:e.selectedtab,selectTabhandler:e.selectTabHandler,tab:t})})))},P=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"headline"},e.card.headline),r.a.createElement("div",{className:"author"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:e.card.img})),r.a.createElement("span",null,"By ",e.card.author)))},Y=function(e){return r.a.createElement("div",{className:"cards-container"},e.cards.map(function(e){return r.a.createElement(P,{card:e})}))},z=["all","javascript","technology","node","React.js","bootstrap"],K=[{headline:"ES8: The Next Step in the Evolution of Javascript and What it Means For Your Projects",tab:"javascript",img:"./assets/sir.jpg",author:"SIR RUFF'N'STUFF"},{headline:"Type Coercion: Why Does NaN !== NaN? and Other Strange Occurences",tab:"javascript",img:"./assets/bones.jpg",author:"BONES R. LIFE"},{headline:"Bootstrap 5: Get a Sneak Peak at all the New Features",tab:"bootstrap",img:"./assets/fido.jpg",author:"FIDO WALKSALOT"},{headline:"AI: What Are the Ethical Rammifications of the Future?",tab:"technology",img:"./assets/max.jpg",author:"MAX GOODBOYE"},{headline:"History of Javascript Libraries: from jQuery to React",tab:"React.js",img:"./assets/puppers.jpg",author:"PUPPER S. DOGGO"},{headline:"UI Frameworks: A Comparison, Which Made Our List? (Hint: Bootstrap is on it)",tab:"bootstrap",img:"./assets/max.jpg",author:"MAX GOODBOYE"},{headline:"Node.js in 2018: Which Framework? Express, Sails, Hapi?",tab:"node",img:"./assets/sir.jpg",author:"SIR RUFF'N'STUFF"},{headline:"MongoDB: NoSQL vs. SQL, the Debate Continues...",tab:"node",img:"./assets/bones.jpg",author:"BONES R. LIFE"},{headline:"React.js v16 What's new, and what you should know about.",tab:"React.js",img:"./assets/fido.jpg",author:"FIDO WALKSALOT"},{headline:"AR or VR: How We Will See the World Through a Digital Lense",tab:"technology",img:"./assets/max.jpg",author:"MAX GOODBOYE"},{headline:"When to Rest, When to Spread: Why There Are Two Meanings Behind '...'",tab:"javascript",img:"./assets/puppers.jpg",author:"PUPPER S. DOGGO"},{headline:"Typescript: Ten Things you Should Know Before Building Your Next Angular Application",tab:"javascript",img:"./assets/sir.jpg",author:"SIR RUFF'N'STUFF"},{headline:"Quantum Computing: Where we Are Now, and Where We Will Be Very Soon",tab:"technology",img:"./assets/max.jpg",author:"MAX GOODBOYE"},{headline:"React vs Angular vs Vue vs ??? How the frameworks stack up.",tab:"React.js",img:"./assets/fido.jpg",author:"FIDO WALKSALOT"},{headline:"The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",tab:"bootstrap",img:"./assets/max.jpg",author:"MAX GOODBOYE"}],X=function(e){function t(e){var n;return Object(I.a)(this,t),(n=Object(G.a)(this,Object(k.a)(t).call(this,e))).componentDidMount=function(){n.setState({tabs:z,cards:K})},n.changeSelected=function(e){n.setState({selected:e})},n.filterCards=function(){var e=n.state.cards.filter(function(e){return e.tab===n.state.selected});return"all"===n.state.selected?n.state.cards:e},n.state={selected:"all",tabs:[],cards:[]},n}return Object(M.a)(t,e),Object(L.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"content-container"},r.a.createElement(H,{selectTabHandler:this.filterCards,tabs:this.state.tabs,selectedtab:this.changeSelected}),r.a.createElement(Y,{cards:this.filterCards()}))}}]),t}(a.Component),J=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(S,null),r.a.createElement(C,null),r.a.createElement(X,null))};o.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.bc33737e.chunk.js.map