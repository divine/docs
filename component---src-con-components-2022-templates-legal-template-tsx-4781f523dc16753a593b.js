(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0sn9":function(e,t,n){"use strict";var a=n("zLVn"),i=n("q1tI"),l=n.n(i),r=n("TSYQ"),c=n.n(r),o=["children","className","empty","disabled","to","size","external"];t.a=function(e){var t=e.children,n=e.className,i=e.empty,r=e.disabled,s=e.to,d=e.size,m=void 0===d?"large":d,u=e.external,p=void 0!==u&&u,f=Object(a.a)(e,o),h=c()("conf__button",{small:"small"===m,empty:i,disabled:r},n);return s?l.a.createElement("a",Object.assign({className:h,href:s},p?{target:"_blank",rel:"noopener noreferrer"}:{}),t):l.a.createElement("div",Object.assign({className:h},f),t)}},"4jF4":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),l=n("l3up"),r=n("56Hn");t.default=function(e){return i.a.createElement(l.a,{logoAlwaysVisible:!0},i.a.createElement(r.a,e))}},"56Hn":function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),l=n("TJpk"),r=n("rkht"),c=n("DZGb");n("78kH");t.a=function(e){var t=e.pageContext,n=t.html,a=t.title,o=t.edition,s=n.replace(/href="#/g,'href="/con/'+o+"#").replace(/href="\/\//g,'href="/');return i.a.createElement("div",{className:"conf__legal"},i.a.createElement(l.Helmet,null,i.a.createElement("title",null,a),i.a.createElement("meta",{property:"og:title",content:a}),i.a.createElement("meta",{name:"twitter:title",content:a})),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"legal__header"},i.a.createElement(c.a,{dark:!0,lined:!0,h1:!0},i.a.createElement("strong",null,a))),i.a.createElement("div",{className:"legal__content dotted-corner"},i.a.createElement("div",{className:"conference__abstract",dangerouslySetInnerHTML:{__html:s}})),i.a.createElement("div",{className:"conf__contact"},i.a.createElement(r.a,null))))}},"78kH":function(e,t,n){},DZGb:function(e,t,n){"use strict";var a=n("q1tI"),i=n.n(a),l=n("TSYQ"),r=n.n(l);t.a=function(e){var t=e.children,n=e.dark,a=void 0!==n&&n,l=e.lined,c=void 0!==l&&l,o=e.h1,s=void 0!==o&&o,d=e.small,m=void 0!==d&&d;return i.a.createElement("div",{className:r()("conf__section-title",{dark:a,small:m})},s?i.a.createElement("h1",{className:"h2 title__layer"},t):i.a.createElement("h2",{className:"title__layer"},t),i.a.createElement("div",{className:r()("h2",{lined:c})},t))}},SU53:function(e,t,n){"use strict";var a=n("q1tI"),i=Object(a.createContext)(null);t.a=i},UYRS:function(e,t,n){"use strict";var a=n("q1tI"),i=n("3nhQ");t.a=function(e){var t=Object(a.useContext)(i.a).isEventBriteLoaded,n=Object(a.useState)(!1),l=n[0],r=n[1];Object(a.useLayoutEffect)((function(){var n;t&&!l&&(null===(n=window.EBWidgets)||void 0===n||n.createWidget({widgetType:"checkout",eventId:"483719928327",modal:!0,modalTriggerElementId:e}),r(!0))}),[t,e,l,r])}},c63E:function(e,t,n){"use strict";var a=n("zLVn"),i=n("q1tI"),l=n.n(i),r=n("dVog"),c=n("UYRS"),o=n("0sn9"),s=n("3nhQ"),d=["children","id"],m=function(e){var t=e.children,n=e.id,i=Object(a.a)(e,d);return Object(c.a)(n),l.a.createElement(o.a,Object.assign({id:n},i),t)};t.a=function(e){return Object(i.useContext)(s.a).edition!==r.a?l.a.createElement(l.a.Fragment,null):l.a.createElement(m,e)}},l3up:function(e,t,n){"use strict";n("K/os");var a=n("q1tI"),i=n.n(a),l=n("Wgwc"),r=n.n(l),c=n("TJpk"),o=n.n(c),s={logoLink:"/",backLink:{to:"/con/",text:"Back to current edition"},links:[{to:"/con/2022/",text:"Home",mobileOnly:!0},{to:"/con/2022/speakers",text:"Speakers"},{to:"/con/2022/#venue",text:"Venue"},{to:"/con/2022/schedule",text:"Schedule"},{to:"/con/2022/review",text:"Review"}]},d=[{title:"Previous edition",links:[{title:"2021 review",link:"/con/2021/review"},{title:"2021 archive",link:"/con/2021/"}]},{title:"The event",links:[{title:"Speakers",link:"/con/2022/speakers"},{title:"Venue",link:"/con/2022/#venue"},{title:"Schedule",link:"/con/2022/schedule"}]},{title:"Legal",links:[{title:"Code of conduct",link:"/con/2022/code-of-conduct"},{title:"FAQ",link:"/con/2022/faq"},{title:"Transparency",link:"/con/2022/transparency"}]}],m=[{id:1,title:"Conference",languages:"French and english-speaking tracks",offers:[{title:"2 days on-site event",price:129,limitDate:"2022-08-20"},{title:"1-day on-site event",price:89,limitDate:"2022-08-20"},{title:"2 days on-site event",price:169,startDate:"2022-08-21"},{title:"1-day on-site event",price:109,startDate:"2022-08-21"},{title:"Online ticket",price:59}]},{id:2,title:"Workshops",languages:"Learn the best of API Platform 3",offers:[{title:"Workshop API Platform 3",price:500},{title:"Workshop DDD",price:500},{title:"2-days workshops",price:800},{title:"Full package: 2 workshops and 2-days conference",price:900}]}],u=n("3nhQ"),p=n("SU53"),f=n("YwZP"),h={TITLE:"API Platform Conference 2022",DESCRIPTION:"The international conference dedicated to API Platform and its ecosystem",OG_IMAGE:"https://api-platform.com/conf-facebook-2022.png",URL:"https://api-platform.com/con/2022/"},v=n("RHlq"),g=n("c63E");t.a=function(e){var t=e.logoAlwaysVisible,n=e.children,l=m.map((function(e){var t=e.offers.sort((function(e,t){return r()(e.limitDate).isAfter(r()(t.limitDate))?1:r()(t.limitDate).isAfter(r()(e.limitDate))?-1:0})),n=t.find((function(e){return r()(e.limitDate).isAfter(r()())}))||t[t.length-1];return{"@type":"Offer",availability:"https://schema.org/SoldOut",price:n.price+".00",name:1===e.offers.length?e.title:e.title+" - "+n.title,priceCurrency:"EUR",url:"https://www.eventbrite.fr/e/api-platform-conference-2022-tickets-304104152707",validFrom:"2022-04-07"}})),c={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2022",description:"The international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2022/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2022-09-15",endDate:"2022-09-16",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2022/"}],image:h.OG_IMAGE,offers:l},E=Object(f.useLocation)().pathname,k=Object(a.useState)([]),b=k[0],y=k[1],w=Object(a.useMemo)((function(){var e=null==b?void 0:b[b.length-1];return e&&"home"!==e&&b.length?E+"#"+b[b.length-1]:E}),[b,E]);Object(a.useEffect)((function(){window.history.replaceState({},"",w)}),[w]);var O=Object(a.useState)(!1),_=O[0],I=O[1];return Object(a.useEffect)((function(){var e=document.createElement("script");e.src="https://www.eventbrite.com/static/widgets/eb_widgets.js",e.onload=function(){I(!0)},document.body.appendChild(e)}),[I]),i.a.createElement(u.a.Provider,{value:{nav:s,activeLink:w,edition:"2022",isEventBriteLoaded:_}},i.a.createElement(p.a.Provider,{value:{sectionsVisibles:b,setSectionsVisibles:y}},i.a.createElement(o.a,null,i.a.createElement("script",{type:"application/ld+json"},JSON.stringify(c)),i.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"})),i.a.createElement(v.a,{edition:"2022",meta:h,logoAlwaysVisible:t,footer:d,navButton:i.a.createElement(g.a,{className:"pink",size:"small",id:"nav"},"Buy ticket")},n)))}}}]);
//# sourceMappingURL=component---src-con-components-2022-templates-legal-template-tsx-4781f523dc16753a593b.js.map