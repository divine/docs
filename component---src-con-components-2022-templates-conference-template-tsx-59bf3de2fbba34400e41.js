(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"0sn9":function(e,t,a){"use strict";var n=a("zLVn"),r=a("q1tI"),c=a.n(r),i=a("TSYQ"),l=a.n(i),s=["children","className","empty","disabled","to","size","external"];t.a=function(e){var t=e.children,a=e.className,r=e.empty,i=e.disabled,o=e.to,m=e.size,u=void 0===m?"large":m,d=e.external,f=void 0!==d&&d,p=Object(n.a)(e,s),v=l()("conf__button",{small:"small"===u,empty:r,disabled:i},a);return o?c.a.createElement("a",Object.assign({className:v,href:o},f?{target:"_blank",rel:"noopener noreferrer"}:{}),t):c.a.createElement("div",Object.assign({className:v},p),t)}},"78kH":function(e,t,a){},DRRC:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("TJpk"),i=a("DZGb"),l=a("TSYQ"),s=a.n(l),o=a("0sn9"),m=a("thtY"),u=a("v46D"),d=a("vxqf");a("78kH");t.a=function(e){var t=e.extraContent,a=e.trackSubtitle,n=e.pageContext,l=n.html,f=n.title,p=n.speakers,v=n.start,h=n.end,E=n.date,g=Object(m.a)(p);return r.a.createElement("div",{className:"conf__conference"},r.a.createElement(c.Helmet,null,r.a.createElement("title",null,f),r.a.createElement("meta",{property:"og:title",content:f}),r.a.createElement("meta",{name:"twitter:title",content:f})),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"conference__header"},r.a.createElement(i.a,{dark:!0,lined:!0,h1:!0,small:50<f.length},r.a.createElement("strong",null,f)),r.a.createElement(r.a.Fragment,null,a,E?r.a.createElement("p",{className:"header__date"},Object(u.a)(E,v,h)):null)),r.a.createElement("div",{className:"conference__content"},r.a.createElement("div",{className:s()("conference__speaker",{minified:1<g.length})},g.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(d.a,{speaker:e,hoverable:!1,social:!1}),r.a.createElement(o.a,{className:"white square",size:"small",to:e.slug},"See speaker details"))}))),r.a.createElement("div",{className:"conference__abstract dotted-corner corner-bottom"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:l}}),t))))}},DZGb:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("TSYQ"),i=a.n(c);t.a=function(e){var t=e.children,a=e.dark,n=void 0!==a&&a,c=e.lined,l=void 0!==c&&c,s=e.h1,o=void 0!==s&&s,m=e.small,u=void 0!==m&&m;return r.a.createElement("div",{className:i()("conf__section-title",{dark:n,small:u})},o?r.a.createElement("h1",{className:"h2 title__layer"},t):r.a.createElement("h2",{className:"title__layer"},t),r.a.createElement("div",{className:i()("h2",{lined:l})},t))}},SU53:function(e,t,a){"use strict";var n=a("q1tI"),r=Object(n.createContext)(null);t.a=r},Tz3w:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n);t.a=function(e){var t=e.speaker,a=t.github,n=t.twitter;return r.a.createElement("div",{className:"social__list"},a&&r.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-github"})),n&&r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"icon-twitter"})))}},UYRS:function(e,t,a){"use strict";var n=a("q1tI"),r=a("3nhQ");t.a=function(e){var t=Object(n.useContext)(r.a).isEventBriteLoaded,a=Object(n.useState)(!1),c=a[0],i=a[1];Object(n.useLayoutEffect)((function(){var a;t&&!c&&(null===(a=window.EBWidgets)||void 0===a||a.createWidget({widgetType:"checkout",eventId:"483719928327",modal:!0,modalTriggerElementId:e}),i(!0))}),[t,e,c,i])}},c63E:function(e,t,a){"use strict";var n=a("zLVn"),r=a("q1tI"),c=a.n(r),i=a("dVog"),l=a("UYRS"),s=a("0sn9"),o=a("3nhQ"),m=["children","id"],u=function(e){var t=e.children,a=e.id,r=Object(n.a)(e,m);return Object(l.a)(a),c.a.createElement(s.a,Object.assign({id:a},r),t)};t.a=function(e){return Object(r.useContext)(o.a).edition!==i.a?c.a.createElement(c.a.Fragment,null):c.a.createElement(u,e)}},idTO:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("DRRC"),i=a("l3up"),l=a("mtCU"),s=a("c63E");t.default=function(e){var t=e.pageContext,a=t.date,n=t.track,o=Object(l.a)(a);return r.a.createElement(i.a,{logoAlwaysVisible:!0},r.a.createElement(c.a,Object.assign({},e,{trackSubtitle:r.a.createElement("p",{className:"overline header__subtitle"},r.a.createElement("strong",null,o.title),n?" - Track #"+n:null),extraContent:r.a.createElement(s.a,{className:"mt-20 pink square",id:t.title,size:"large"},"Get your ticket!")})))}},l3up:function(e,t,a){"use strict";a("K/os");var n=a("q1tI"),r=a.n(n),c=a("Wgwc"),i=a.n(c),l=a("TJpk"),s=a.n(l),o={logoLink:"/",backLink:{to:"/con/",text:"Back to current edition"},links:[{to:"/con/2022/",text:"Home",mobileOnly:!0},{to:"/con/2022/speakers",text:"Speakers"},{to:"/con/2022/#venue",text:"Venue"},{to:"/con/2022/schedule",text:"Schedule"},{to:"/con/2022/review",text:"Review"}]},m=[{title:"Previous edition",links:[{title:"2021 review",link:"/con/2021/review"},{title:"2021 archive",link:"/con/2021/"}]},{title:"The event",links:[{title:"Speakers",link:"/con/2022/speakers"},{title:"Venue",link:"/con/2022/#venue"},{title:"Schedule",link:"/con/2022/schedule"}]},{title:"Legal",links:[{title:"Code of conduct",link:"/con/2022/code-of-conduct"},{title:"FAQ",link:"/con/2022/faq"},{title:"Transparency",link:"/con/2022/transparency"}]}],u=[{id:1,title:"Conference",languages:"French and english-speaking tracks",offers:[{title:"2 days on-site event",price:129,limitDate:"2022-08-20"},{title:"1-day on-site event",price:89,limitDate:"2022-08-20"},{title:"2 days on-site event",price:169,startDate:"2022-08-21"},{title:"1-day on-site event",price:109,startDate:"2022-08-21"},{title:"Online ticket",price:59}]},{id:2,title:"Workshops",languages:"Learn the best of API Platform 3",offers:[{title:"Workshop API Platform 3",price:500},{title:"Workshop DDD",price:500},{title:"2-days workshops",price:800},{title:"Full package: 2 workshops and 2-days conference",price:900}]}],d=a("3nhQ"),f=a("SU53"),p=a("YwZP"),v={TITLE:"API Platform Conference 2022",DESCRIPTION:"The international conference dedicated to API Platform and its ecosystem",OG_IMAGE:"https://api-platform.com/conf-facebook-2022.png",URL:"https://api-platform.com/con/2022/"},h=a("RHlq"),E=a("c63E");t.a=function(e){var t=e.logoAlwaysVisible,a=e.children,c=u.map((function(e){var t=e.offers.sort((function(e,t){return i()(e.limitDate).isAfter(i()(t.limitDate))?1:i()(t.limitDate).isAfter(i()(e.limitDate))?-1:0})),a=t.find((function(e){return i()(e.limitDate).isAfter(i()())}))||t[t.length-1];return{"@type":"Offer",availability:"https://schema.org/SoldOut",price:a.price+".00",name:1===e.offers.length?e.title:e.title+" - "+a.title,priceCurrency:"EUR",url:"https://www.eventbrite.fr/e/api-platform-conference-2022-tickets-304104152707",validFrom:"2022-04-07"}})),l={"@context":"https://schema.org","@type":"Event",name:"API Platform Conference 2022",description:"The international conference dedicated to API Platform and its ecosystem",url:"https://api-platform.com/con/2022/",eventStatus:"http://schema.org/EventScheduled",eventAttendanceMode:"https://schema.org/MixedEventAttendanceMode",startDate:"2022-09-15",endDate:"2022-09-16",organizer:{"@type":"Organization",name:"Les-Tilleuls.coop",url:"https://les-tilleuls.coop/en"},location:[{"@type":"Place",name:"Euratechnologies",address:{"@type":"PostalAddress",addressLocality:"Lille",addressRegion:"Hauts de France",postalCode:"59000",streetAddress:"Place de Saintignon, 165 avenue de Bretagne"}},{"@type":"VirtualLocation",url:"https://api-platform.com/con/2022/"}],image:v.OG_IMAGE,offers:c},g=Object(p.useLocation)().pathname,k=Object(n.useState)([]),b=k[0],y=k[1],w=Object(n.useMemo)((function(){var e=null==b?void 0:b[b.length-1];return e&&"home"!==e&&b.length?g+"#"+b[b.length-1]:g}),[b,g]);Object(n.useEffect)((function(){window.history.replaceState({},"",w)}),[w]);var _=Object(n.useState)(!1),O=_[0],N=_[1];return Object(n.useEffect)((function(){var e=document.createElement("script");e.src="https://www.eventbrite.com/static/widgets/eb_widgets.js",e.onload=function(){N(!0)},document.body.appendChild(e)}),[N]),r.a.createElement(d.a.Provider,{value:{nav:o,activeLink:w,edition:"2022",isEventBriteLoaded:O}},r.a.createElement(f.a.Provider,{value:{sectionsVisibles:b,setSectionsVisibles:y}},r.a.createElement(s.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(l)),r.a.createElement("script",{defer:!0,src:"https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"})),r.a.createElement(h.a,{edition:"2022",meta:v,logoAlwaysVisible:t,footer:m,navButton:r.a.createElement(E.a,{className:"pink",size:"small",id:"nav"},"Buy ticket")},a)))}},mtCU:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=[{date:"2022-09-13",title:"Workshop 1",tracks:null,single:!0},{date:"2022-09-14",title:"Workshop 2",tracks:null,single:!0},{date:"2022-09-15",title:"Con day 1",tracks:["FR","EN"],single:!1},{date:"2022-09-16",title:"Con day 2",tracks:["FR","EN"],single:!1},{date:"2022-09-17",title:"Hack day",tracks:null,single:!0}],r=function(e){return n.find((function(t){return t.date===e}))}},thtY:function(e,t,a){"use strict";var n=a("q1tI"),r=a("3nhQ"),c=a("Wbzz");t.a=function(e){var t=Object(n.useContext)(r.a).edition;return Object(c.useStaticQuery)("3395815452").allMarkdownRemark.nodes.filter((function(t){return!e||e.includes(t.frontmatter.id)})).filter((function(e){return e.fields.collection==="con"+t})).map((function(e){return Object.assign({},e.frontmatter,{slug:"/con/"+t+e.fields.slug})}))}},v46D:function(e,t,a){"use strict";a.d(t,"d",(function(){return c})),a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return m}));var n=a("Wgwc"),r=a.n(n),c=function(e,t){var a=e.start?r()(e.date+"T"+e.start):r()(),n=t.start?r()(t.date+"T"+t.start):r()();return a.isBefore(n)?-1:a.isAfter(n)?1:0},i=function(e){return r()(e).format("ll")},l=function(e,t){return r()(e+"T"+t).format("HH:mm A")},s=function(e){return e&&12>=parseInt(e.split(":")[0],10)},o=function(e,t,a){return t&&a?l(e,t)+" - "+l(e,a):i(e)},m=function(e,t,a){return t&&a?i(e)+" · "+o(e,t,a):i(e)}},vxqf:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("TJpk"),i=a.n(c),l=a("TSYQ"),s=a.n(l),o=a("Wbzz"),m=a("f0fW"),u=a("Tz3w");t.a=function(e){var t=e.speaker,a=e.social,n=void 0===a||a,c=e.hoverable,l=void 0===c||c,d=t.id,f=t.name,p=t.job,v=t.company,h=Object(o.useStaticQuery)("2760183193").allFile.nodes.find((function(e){return e.name===d})),E=h&&Object(m.j)(h),g={"@context":"http://schema.org","@type":"Person",name:t.name,jobTitle:t.job+" "+(t.company?"@ "+t.company:"")};return r.a.createElement("div",{className:"conf__speaker-resume"},r.a.createElement(i.a,null,r.a.createElement("script",{type:"application/ld+json"},JSON.stringify(g))),r.a.createElement("a",{className:s()("conf__speaker-content",{hoverable:l}),href:t.slug},r.a.createElement("div",{className:"circle__effect"},r.a.createElement("div",{className:"circle"},r.a.createElement(m.a,{image:E,className:"circle__picture",alt:f}),r.a.createElement("svg",{className:"circle__plus",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 281.49 281.49"},r.a.createElement("path",{d:"M140.74,0C63.14,0,0,63.14,0,140.74S63.14,281.49,140.74,281.49s140.75-63.14,140.75-140.75S218.35,0,140.74,0Zm0,263.49A122.75,122.75,0,1,1,263.49,140.74,122.88,122.88,0,0,1,140.74,263.49Z"}),r.a.createElement("path",{d:"M210.91,131.74H149.74V70.58a9,9,0,1,0-18,0v61.16H70.58a9,9,0,1,0,0,18h61.16v61.17a9,9,0,0,0,18,0V149.74h61.17a9,9,0,0,0,0-18Z"})))),r.a.createElement("div",{className:"infos"},r.a.createElement("h3",{className:"h5"},f),r.a.createElement("p",{className:"overline lined"},p,r.a.createElement("br",null),v?r.a.createElement(r.a.Fragment,null,"@ ",r.a.createElement("strong",null,v)):null))),n&&r.a.createElement(u.a,{speaker:t}))}}}]);
//# sourceMappingURL=component---src-con-components-2022-templates-conference-template-tsx-59bf3de2fbba34400e41.js.map