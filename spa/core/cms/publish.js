import{env}from"../../generated/env.js";import{makeUrl}from"./url_checker.js";const repoUrl=makeUrl(env.cms.repo),apiBaseUrl=`${repoUrl.origin}/api/v4`,capitalizeFirstLetter=e=>e.charAt(0).toUpperCase()+e.slice(1);export async function publish(e,t,n,s,o){let i;const c=new Promise(e=>{o.subscribe(t=>{i=t,e()})});if(await c,!i.isAuthenticated)throw new Error("Authentication required");const l=repoUrl.pathname.slice(1),f=`${apiBaseUrl}`+`/projects/${encodeURIComponent(l)}`+"/repository/commits",d={"Content-Type":"application/json",Authorization:`Bearer ${i.tokens.access_token}`},u=e=>e.split(",")[1];let r=[];e.forEach(e=>{r.push({action:n,file_path:e.file,encoding:s,content:s==="base64"?u(e.contents):e.contents})});let h=capitalizeFirstLetter(n)+" "+(e.length>1?e.length+" files":e[0].file);const m={branch:env.cms.branch,commit_message:h,actions:r},a=await fetch(f,{method:"POST",headers:d,body:JSON.stringify(m)});if(a.ok)(n==="create"||n==="update")&&t?.onSave?.(),n==="delete"&&(t?.onDelete?.(),history.pushState(null,"",env.baseurl&&!env.local?env.baseurl:"/"));else{const{error:e,message:t}=await a.json();throw new Error(`Publish failed: ${e||t}`)}}