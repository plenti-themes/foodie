import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert_hydration,noop,safe_not_equal,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[3]=t[n],s}function create_each_block(e){let o,n,i,s,p,m,b,r,l=e[3].title+"",d,v,a,c=e[3].body+"",f,g,t,u,h,j;return{c(){o=element("li"),n=element("div"),i=element("div"),s=element("img"),b=space(),r=element("h3"),d=text(l),v=space(),a=element("p"),f=text(c),g=space(),t=element("img"),j=space(),this.h()},l(e){o=claim_element(e,"LI",{class:!0});var u,m,p,y,h=children(o);n=claim_element(h,"DIV",{class:!0}),u=children(n),i=claim_element(u,"DIV",{class:!0}),m=children(i),s=claim_element(m,"IMG",{src:!0,width:!0,height:!0,alt:!0}),m.forEach(detach),b=claim_space(u),r=claim_element(u,"H3",{class:!0}),p=children(r),d=claim_text(p,l),p.forEach(detach),v=claim_space(u),a=claim_element(u,"P",{class:!0}),y=children(a),f=claim_text(y,c),y.forEach(detach),g=claim_space(u),t=claim_element(u,"IMG",{src:!0,width:!0,height:!0,loading:!0,alt:!0,class:!0}),u.forEach(detach),j=claim_space(h),h.forEach(detach),this.h()},h(){src_url_equal(s.src,p=e[3].icon.url)||attr(s,"src",p),attr(s,"width","60"),attr(s,"height","60"),attr(s,"alt",m=e[3].icon.alt),attr(i,"class","card-icon"),attr(r,"class","h3 card-title"),attr(a,"class","card-text"),src_url_equal(t.src,u=e[3].image.url)||attr(t,"src",u),attr(t,"width","300"),attr(t,"height","300"),attr(t,"loading","lazy"),attr(t,"alt",h=e[3].image.alt),attr(t,"class","w-100 card-banner"),attr(n,"class","promo-card"),attr(o,"class","promo-item")},m(e,c){insert_hydration(e,o,c),append_hydration(o,n),append_hydration(n,i),append_hydration(i,s),append_hydration(n,b),append_hydration(n,r),append_hydration(r,d),append_hydration(n,v),append_hydration(n,a),append_hydration(a,f),append_hydration(n,g),append_hydration(n,t),append_hydration(o,j)},p(e,n){n&4&&!src_url_equal(s.src,p=e[3].icon.url)&&attr(s,"src",p),n&4&&m!==(m=e[3].icon.alt)&&attr(s,"alt",m),n&4&&l!==(l=e[3].title+"")&&set_data(d,l),n&4&&c!==(c=e[3].body+"")&&set_data(f,c),n&4&&!src_url_equal(t.src,u=e[3].image.url)&&attr(t,"src",u),n&4&&h!==(h=e[3].image.alt)&&attr(t,"alt",h)},d(e){e&&detach(o)}}}function create_fragment(e){let o,n,s,l,u,r,c,d,i,a=e[2],t=[];for(let n=0;n<a.length;n+=1)t[n]=create_each_block(get_each_context(e,a,n));return{c(){o=element("section"),n=element("div"),s=element("h2"),l=text(e[0]),u=space(),r=element("span"),c=text(e[1]),d=space(),i=element("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(a){o=claim_element(a,"SECTION",{class:!0});var h,m,f,p,g=children(o);n=claim_element(g,"DIV",{class:!0}),h=children(n),s=claim_element(h,"H2",{class:!0}),m=children(s),l=claim_text(m,e[0]),u=claim_space(m),r=claim_element(m,"SPAN",{class:!0}),f=children(r),c=claim_text(f,e[1]),f.forEach(detach),m.forEach(detach),d=claim_space(h),i=claim_element(h,"UL",{class:!0}),p=children(i);for(let e=0;e<t.length;e+=1)t[e].l(p);p.forEach(detach),h.forEach(detach),g.forEach(detach),this.h()},h(){attr(r,"class","span"),attr(s,"class","h2 section-title"),attr(i,"class","promo-list has-scrollbar"),attr(n,"class","container"),attr(o,"class","section section-divider white promo")},m(e,a){insert_hydration(e,o,a),append_hydration(o,n),append_hydration(n,s),append_hydration(s,l),append_hydration(s,u),append_hydration(s,r),append_hydration(r,c),append_hydration(n,d),append_hydration(n,i);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(i,null)},p(e,[n]){if(n&1&&set_data(l,e[0]),n&2&&set_data(c,e[1]),n&4){a=e[2];let s;for(s=0;s<a.length;s+=1){const o=get_each_context(e,a,s);t[s]?t[s].p(o,n):(t[s]=create_each_block(o),t[s].c(),t[s].m(i,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=a.length}},i:noop,o:noop,d(e){e&&detach(o),destroy_each(t,e)}}}function instance(e,t,n){let{title1:s,title2:o,items:i}=t;return e.$$set=e=>{"title1"in e&&n(0,s=e.title1),"title2"in e&&n(1,o=e.title2),"items"in e&&n(2,i=e.items)},[s,o,i]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title1:0,title2:1,items:2})}}export default Component