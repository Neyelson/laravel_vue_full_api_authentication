import{_ as C,r as V,o,c as n,a as g,w as B,d as i,b as e,f as t,j as D,g as M,h,v as f,k as w,F as k,l as P,t as E,p as $,e as q,m as I}from"./index-7c82cf1d.js";import{_ as N}from"./ToggleDarkSwitch-20ab811b.js";import{a as A,g as G,n as S}from"./authenticator-a2ec2739.js";const z={},F={"aria-label":"breadcrumb"},L=e("i",{class:"fa-regular fa-circle-left"},null,-1);function Y(d,m){const c=V("router-link");return o(),n("nav",F,[g(c,{to:"/"},{default:B(()=>[L,i(" Go back to main")]),_:1})])}const j=C(z,[["render",Y]]);const u=d=>($("data-v-19b99368"),d=d(),q(),d),J={id:"mainContainer",class:"container"},W=u(()=>e("hgroup",null,[e("h1",null,"Sign up"),e("h2",null,"Complete the form below in order to create a new account.")],-1)),H={class:"grid"},K={for:"name"},O={for:"email"},Q=u(()=>e("small",null,"We'll never share your email with anyone else.",-1)),R={class:"grid"},X={for:"password"},Z=u(()=>e("small",null,"Password must be 8-20 characters, with a mix of uppercase and lowercase letters, numbers, and symbols.",-1)),ee={for:"confirmpassword"},se={key:0,id:"passwordsDoesntMatchAlert"},ae=["aria-invalid"],te={id:"formErrorList"},oe={key:0},ne=["disabled","aria-busy"],le={key:1},re=u(()=>e("p",{id:"successTextTitle"},"Your new account was created successfully!",-1)),ie=u(()=>e("p",null,"You will be automatically redirected to the login page in 10 seconds, there you can securely log in.",-1)),ue=u(()=>e("progress",{id:"myProgressBar",style:{height:"2px"}},null,-1)),de={__name:"SignUp",setup(d){const m=t(""),c=t(""),l=t(""),r=t(""),y=t(null),b=t([]),p=t(null),x=t(!1),_=t(!1);function T(){_.value=!0,A.post("https://evbkzynoncxd.general.trulywired.link/api/register",{name:m.value,email:c.value,password:l.value},{headers:{Authorization:"Bearer "+G()},timeout:3e4}).then(v=>{S("Sign up successful","success"),x.value=!0,setTimeout(function(){I.push("/login")},1e4)}).catch(v=>{typeof v.response.data<"u"&&(b.value=v.response.data.errors),y.value=!0,S("Sign up attempt failed","warning")}).finally(()=>{l.value="",r.value="",_.value=!1})}return D([l,r],()=>{(l.value!==""||r.value!=="")&&(y.value=null),r.value!==""&&l.value!==r.value?p.value=!0:p.value=null}),(v,a)=>{const U=V("router-link");return o(),n(k,null,[g(N,{absolutePosition:!0}),e("main",J,[g(j,{style:{"margin-bottom":"10px"}}),W,x.value?w("",!0):(o(),n("form",{key:0,onSubmit:a[4]||(a[4]=M(s=>T(),["prevent"]))},[e("div",H,[e("label",K,[i(" Display name "),h(e("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>m.value=s),type:"text",id:"name",name:"name",placeholder:"John Doe",required:""},null,512),[[f,m.value]])]),e("label",O,[i("Email address "),h(e("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>c.value=s),type:"email",id:"email",name:"email",placeholder:"example@example.com",required:""},null,512),[[f,c.value]]),Q])]),e("div",R,[e("label",X,[i(" Password "),h(e("input",{"onUpdate:modelValue":a[2]||(a[2]=s=>l.value=s),type:"password",id:"password",name:"password",placeholder:"Password",required:""},null,512),[[f,l.value]]),Z]),e("label",ee,[i(" Confirm password "),p.value?(o(),n("span",se,"Passwords doesn't match")):w("",!0),h(e("input",{"onUpdate:modelValue":a[3]||(a[3]=s=>r.value=s),type:"password",id:"confirmpassword",name:"confirmpassword",placeholder:"Confirm password","aria-invalid":p.value,required:""},null,8,ae),[[f,r.value]])])]),e("ul",te,[y.value&&b.value.length>0?(o(),n("div",oe,[(o(!0),n(k,null,P(b.value,s=>(o(),n("li",{key:s},E(s),1))),128))])):w("",!0)]),e("button",{type:"submit",disabled:_.value||p.value,"aria-busy":_.value},"Create account",8,ne)],32)),x.value?(o(),n("span",le,[re,ie,ue,g(U,{to:"/login",role:"button",style:{"margin-top":"15px"}},{default:B(()=>[i("Go to login page")]),_:1})])):w("",!0)])],64)}}},_e=C(de,[["__scopeId","data-v-19b99368"]]);export{_e as default};