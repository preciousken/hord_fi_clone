import{j as t,c as h,bl as c,t as f,r as a,p}from"./index-DrakyAIp.js";function D({tabs:n=[],setCurrentTab:l,currentTab:s,className:i,translationProps:r}){return t.jsx("div",{className:h("tabs-picker d-flex gap-md flex-center-y",i),children:n.map(e=>t.jsx(c.Fragment,{children:t.jsxs("div",{onClick:()=>l(e.id),className:h("tab pointer",e.tabClassName,{"tab-active":s===e.id}),"data-testid":e.title,children:[s===e.id&&t.jsx("div",{className:"active-indicator"}),e.extraTabContent,t.jsx("span",{children:f(e.title,r)})]})},e.id))})}function E({children:n,tabs:l,initCurrentTab:s=l[0].id,hideTabPicket:i,setter:r,TabPicker:e=D}){const m=a.useMemo(()=>l.filter(o=>!o.hiddenAt),[l]),[C,d]=a.useState(s||m?.[0]?.id),x=c.Children.map(n,o=>c.cloneElement(o,{currentTab:C,setCurrentTab:d}));return a.useEffect(()=>{s&&d(s)},[s]),a.useEffect(()=>{r&&r(C)},[C]),t.jsxs(t.Fragment,{children:[!i&&t.jsx(e,{currentTab:C,setCurrentTab:d,tabs:m}),x]})}E.Tab=({children:n,currentTab:l,setCurrentTab:s,tab:i})=>{const r=c.Children.map(n,e=>c.cloneElement(e,{currentTab:l,setCurrentTab:s}));return t.jsx(t.Fragment,{children:i===l&&r})};const j=n=>a.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},a.createElement("rect",{x:.5,y:.5,width:23,height:23,rx:11.5,fill:"white"}),a.createElement("path",{d:"M18.1577 10.019C18.142 10.0381 18.1222 10.0533 18.0998 10.0636L15.1951 11.3784L12.5176 12.5933C12.4928 12.6047 12.4655 12.6097 12.4383 12.6077C12.4111 12.6058 12.3847 12.5971 12.3618 12.5824C12.3388 12.5676 12.3199 12.5473 12.3068 12.5234C12.2937 12.4994 12.2869 12.4726 12.2869 12.4453L12.3008 2.81592C12.3011 2.78287 12.3117 2.75074 12.331 2.72392C12.3504 2.69711 12.3775 2.67694 12.4088 2.66616C12.4355 2.65645 12.4853 2.65741 12.5068 2.6591C12.5408 2.66806 12.5709 2.68787 12.5925 2.71551L18.1598 9.81454C18.1751 9.8339 18.1858 9.85648 18.1911 9.88058C18.1964 9.90468 18.1961 9.92967 18.1904 9.95366C18.1846 9.97765 18.1734 10 18.1577 10.019Z",fill:"#1D1D1D"}),a.createElement("path",{d:"M15.0265 12.1465L17.9309 10.8271C17.9653 10.811 18.0043 10.8074 18.0411 10.8171C18.0779 10.8267 18.1101 10.8489 18.1322 10.8798C18.1544 10.9107 18.165 10.9484 18.1622 10.9863C18.1595 11.0243 18.1436 11.06 18.1172 11.0874L12.5621 16.9674C12.5437 16.9873 12.5205 17.0021 12.4947 17.0103C12.4795 17.0133 12.4423 17.0182 12.4153 17.0139C12.3795 17.0068 12.3472 16.9878 12.3236 16.9598C12.2991 16.9306 12.2857 16.8936 12.286 16.8554V13.4909C12.286 13.4596 12.295 13.429 12.312 13.4027C12.329 13.3765 12.3532 13.3557 12.3818 13.3429L15.0265 12.1465Z",fill:"#1D1D1D"}),a.createElement("path",{d:"M5.86756 14.3301C5.88326 14.3491 5.90308 14.3643 5.92552 14.3746L8.8302 15.6894L11.5077 16.9043C11.5325 16.9157 11.5597 16.9207 11.587 16.9188C11.6142 16.9169 11.6405 16.9081 11.6635 16.8934C11.6865 16.8786 11.7054 16.8584 11.7185 16.8344C11.7316 16.8105 11.7384 16.7836 11.7384 16.7563L11.7245 7.12695C11.7241 7.09389 11.7136 7.06176 11.6942 7.03495C11.6749 7.00813 11.6478 6.98796 11.6165 6.97718C11.6041 6.97146 11.567 6.96203 11.5185 6.97012C11.4845 6.97908 11.4544 6.99889 11.4328 7.02653L5.86544 14.1256C5.85014 14.1449 5.83945 14.1675 5.83416 14.1916C5.82887 14.2157 5.82913 14.2407 5.83492 14.2647C5.8407 14.2887 5.85187 14.311 5.86756 14.3301Z",fill:"#1D1D1D"}),a.createElement("path",{d:"M8.99877 16.4575L6.09438 15.1381C6.05994 15.122 6.02095 15.1184 5.98418 15.1281C5.9474 15.1377 5.91515 15.1599 5.89303 15.1908C5.8709 15.2217 5.86029 15.2594 5.86304 15.2973C5.86578 15.3352 5.8817 15.371 5.90805 15.3984L11.4632 21.2784C11.4816 21.2983 11.5048 21.3131 11.5306 21.3213C11.5458 21.3243 11.583 21.3292 11.61 21.3248C11.6458 21.3178 11.6781 21.2988 11.7016 21.2708C11.7262 21.2416 11.7396 21.2046 11.7393 21.1664V17.8019C11.7393 17.7706 11.7303 17.74 11.7133 17.7137C11.6963 17.6874 11.672 17.6667 11.6435 17.6539L8.99877 16.4575Z",fill:"#1D1D1D"}),a.createElement("rect",{x:.5,y:.5,width:23,height:23,rx:11.5,stroke:"#D9D9DE"}));function g({title:n,className:l,children:s}){return t.jsxs("div",{className:"d-flex flex-between section-header flex-center-y mb-6",children:[t.jsx(p,{md:!0,as:"h2",text:n,className:h("m-0 text-center text-color-primary font-500",l)}),s]})}export{j as S,E as T,g as a};