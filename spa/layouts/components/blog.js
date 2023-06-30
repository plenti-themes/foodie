import{SvelteComponent,append_hydration,attr,children,claim_element,claim_space,claim_text,destroy_each,detach,element,init,insert_hydration,noop,safe_not_equal,set_custom_element_data,set_data,space,src_url_equal,text}from"../../web_modules/svelte/internal/index.mjs";function get_each_context(e,t,n){const s=e.slice();return s[5]=t[n],s}function create_each_block(e){let m,a,l,t,F,N,U,p,C=e[5].badge.title+"",k,W,n,r,o,c,V,h,O=e[5].publish.date+"",D,T,B,i,d,K,v,j=e[5].author.name+"",E,A,I,g,f,y=e[5].card.title+"",z,H,b,x=e[5].card.body+"",L,P,s,w,_=e[5].link.title+"",S,$,u,M,R;return{c(){m=element("li"),a=element("div"),l=element("div"),t=element("img"),U=space(),p=element("div"),k=text(C),W=space(),n=element("div"),r=element("div"),o=element("a"),c=element("ion-icon"),V=space(),h=element("time"),D=text(O),B=space(),i=element("a"),d=element("ion-icon"),K=space(),v=element("p"),E=text(j),I=space(),g=element("h3"),f=element("a"),z=text(y),H=space(),b=element("p"),L=text(x),P=space(),s=element("a"),w=element("span"),S=text(_),$=space(),u=element("ion-icon"),R=space(),this.h()},l(e){m=claim_element(e,"LI",{});var A,M,F,T,N,q,Y,X,Q,Z,J,G=children(m),te,ee,ne;a=claim_element(G,"DIV",{class:!0}),F=children(a),l=claim_element(F,"DIV",{class:!0}),T=children(l),t=claim_element(T,"IMG",{src:!0,width:!0,height:!0,loading:!0,alt:!0,class:!0}),U=claim_space(T),p=claim_element(T,"DIV",{class:!0}),te=children(p),k=claim_text(te,C),te.forEach(detach),T.forEach(detach),W=claim_space(F),n=claim_element(F,"DIV",{class:!0}),A=children(n),r=claim_element(A,"DIV",{class:!0}),q=children(r),o=claim_element(q,"A",{href:!0,class:!0}),Y=children(o),c=claim_element(Y,"ION-ICON",{name:!0,role:!0,class:!0,"aria-label":!0}),children(c).forEach(detach),V=claim_space(Y),h=claim_element(Y,"TIME",{class:!0,datetime:!0}),X=children(h),D=claim_text(X,O),X.forEach(detach),Y.forEach(detach),B=claim_space(q),i=claim_element(q,"A",{href:!0,class:!0}),M=children(i),d=claim_element(M,"ION-ICON",{name:!0,role:!0,class:!0,"aria-label":!0}),children(d).forEach(detach),K=claim_space(M),v=claim_element(M,"P",{class:!0}),Q=children(v),E=claim_text(Q,j),Q.forEach(detach),M.forEach(detach),q.forEach(detach),I=claim_space(A),g=claim_element(A,"H3",{class:!0}),Z=children(g),f=claim_element(Z,"A",{href:!0,class:!0}),J=children(f),z=claim_text(J,y),J.forEach(detach),Z.forEach(detach),H=claim_space(A),b=claim_element(A,"P",{class:!0}),ee=children(b),L=claim_text(ee,x),ee.forEach(detach),P=claim_space(A),s=claim_element(A,"A",{href:!0,class:!0}),N=children(s),w=claim_element(N,"SPAN",{}),ne=children(w),S=claim_text(ne,_),ne.forEach(detach),$=claim_space(N),u=claim_element(N,"ION-ICON",{name:!0,"aria-hidden":!0,role:!0,class:!0}),children(u).forEach(detach),N.forEach(detach),A.forEach(detach),F.forEach(detach),R=claim_space(G),G.forEach(detach),this.h()},h(){src_url_equal(t.src,F=e[5].image.url)||attr(t,"src",F),attr(t,"width","600"),attr(t,"height","390"),attr(t,"loading","lazy"),attr(t,"alt",N=e[5].image.alt),attr(t,"class","w-100"),attr(p,"class","badge"),attr(l,"class","card-banner"),set_custom_element_data(c,"name","calendar-outline"),set_custom_element_data(c,"role","img"),set_custom_element_data(c,"class","md hydrated"),set_custom_element_data(c,"aria-label","calendar outline"),attr(h,"class","meta-info"),attr(h,"datetime","2022-01-01"),attr(o,"href",T=e[5].publish.url),attr(o,"class","card-meta-link"),set_custom_element_data(d,"name","person-outline"),set_custom_element_data(d,"role","img"),set_custom_element_data(d,"class","md hydrated"),set_custom_element_data(d,"aria-label","person outline"),attr(v,"class","meta-info"),attr(i,"href",A=e[5].author.url),attr(i,"class","card-meta-link"),attr(r,"class","card-meta-wrapper"),attr(f,"href","."),attr(f,"class","card-title"),attr(g,"class","h3"),attr(b,"class","card-text"),set_custom_element_data(u,"name","arrow-forward"),set_custom_element_data(u,"aria-hidden","true"),set_custom_element_data(u,"role","img"),set_custom_element_data(u,"class","md hydrated"),attr(s,"href",M=e[5].link.url),attr(s,"class","btn-link"),attr(n,"class","card-content"),attr(a,"class","blog-card")},m(e,j){insert_hydration(e,m,j),append_hydration(m,a),append_hydration(a,l),append_hydration(l,t),append_hydration(l,U),append_hydration(l,p),append_hydration(p,k),append_hydration(a,W),append_hydration(a,n),append_hydration(n,r),append_hydration(r,o),append_hydration(o,c),append_hydration(o,V),append_hydration(o,h),append_hydration(h,D),append_hydration(r,B),append_hydration(r,i),append_hydration(i,d),append_hydration(i,K),append_hydration(i,v),append_hydration(v,E),append_hydration(n,I),append_hydration(n,g),append_hydration(g,f),append_hydration(f,z),append_hydration(n,H),append_hydration(n,b),append_hydration(b,L),append_hydration(n,P),append_hydration(n,s),append_hydration(s,w),append_hydration(w,S),append_hydration(s,$),append_hydration(s,u),append_hydration(m,R)},p(e,n){n&16&&!src_url_equal(t.src,F=e[5].image.url)&&attr(t,"src",F),n&16&&N!==(N=e[5].image.alt)&&attr(t,"alt",N),n&16&&C!==(C=e[5].badge.title+"")&&set_data(k,C),n&16&&O!==(O=e[5].publish.date+"")&&set_data(D,O),n&16&&T!==(T=e[5].publish.url)&&attr(o,"href",T),n&16&&j!==(j=e[5].author.name+"")&&set_data(E,j),n&16&&A!==(A=e[5].author.url)&&attr(i,"href",A),n&16&&y!==(y=e[5].card.title+"")&&set_data(z,y),n&16&&x!==(x=e[5].card.body+"")&&set_data(L,x),n&16&&_!==(_=e[5].link.title+"")&&set_data(S,_),n&16&&M!==(M=e[5].link.url)&&attr(s,"href",M)},d(e){e&&detach(m)}}}function create_fragment(e){let o,n,c,h,v,s,d,g,l,u,f,a,m,p,i,r=e[4],t=[];for(let n=0;n<r.length;n+=1)t[n]=create_each_block(get_each_context(e,r,n));return{c(){o=element("section"),n=element("div"),c=element("p"),h=text(e[2]),v=space(),s=element("h2"),d=text(e[0]),g=space(),l=element("span"),u=text(e[1]),f=space(),a=element("p"),m=text(e[3]),p=space(),i=element("ul");for(let e=0;e<t.length;e+=1)t[e].c();this.h()},l(r){o=claim_element(r,"SECTION",{class:!0,id:!0});var b,j,y,_,w,O,x=children(o);n=claim_element(x,"DIV",{class:!0}),b=children(n),c=claim_element(b,"P",{class:!0}),_=children(c),h=claim_text(_,e[2]),_.forEach(detach),v=claim_space(b),s=claim_element(b,"H2",{class:!0}),j=children(s),d=claim_text(j,e[0]),g=claim_space(j),l=claim_element(j,"SPAN",{class:!0}),w=children(l),u=claim_text(w,e[1]),w.forEach(detach),j.forEach(detach),f=claim_space(b),a=claim_element(b,"P",{class:!0}),O=children(a),m=claim_text(O,e[3]),O.forEach(detach),p=claim_space(b),i=claim_element(b,"UL",{class:!0}),y=children(i);for(let e=0;e<t.length;e+=1)t[e].l(y);y.forEach(detach),b.forEach(detach),x.forEach(detach),this.h()},h(){attr(c,"class","section-subtitle"),attr(l,"class","span"),attr(s,"class","h2 section-title"),attr(a,"class","section-text"),attr(i,"class","blog-list"),attr(n,"class","container"),attr(o,"class","section section-divider white blog"),attr(o,"id","blog")},m(e,r){insert_hydration(e,o,r),append_hydration(o,n),append_hydration(n,c),append_hydration(c,h),append_hydration(n,v),append_hydration(n,s),append_hydration(s,d),append_hydration(s,g),append_hydration(s,l),append_hydration(l,u),append_hydration(n,f),append_hydration(n,a),append_hydration(a,m),append_hydration(n,p),append_hydration(n,i);for(let e=0;e<t.length;e+=1)t[e]&&t[e].m(i,null)},p(e,[n]){if(n&4&&set_data(h,e[2]),n&1&&set_data(d,e[0]),n&2&&set_data(u,e[1]),n&8&&set_data(m,e[3]),n&16){r=e[4];let s;for(s=0;s<r.length;s+=1){const o=get_each_context(e,r,s);t[s]?t[s].p(o,n):(t[s]=create_each_block(o),t[s].c(),t[s].m(i,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=r.length}},i:noop,o:noop,d(e){e&&detach(o),destroy_each(t,e)}}}function instance(e,t,n){let{title1:s,title2:o,subtitle:i,body:a,items:r}=t;return e.$$set=e=>{"title1"in e&&n(0,s=e.title1),"title2"in e&&n(1,o=e.title2),"subtitle"in e&&n(2,i=e.subtitle),"body"in e&&n(3,a=e.body),"items"in e&&n(4,r=e.items)},[s,o,i,a,r]}class Component extends SvelteComponent{constructor(e){super(),init(this,e,instance,create_fragment,safe_not_equal,{title1:0,title2:1,subtitle:2,body:3,items:4})}}export default Component