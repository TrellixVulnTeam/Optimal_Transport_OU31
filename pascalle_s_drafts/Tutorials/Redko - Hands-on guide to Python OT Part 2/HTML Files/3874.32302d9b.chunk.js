(self.webpackChunklite=self.webpackChunklite||[]).push([[3874],{93874:(e,n,t)=>{"use strict";t.d(n,{h:()=>re,k:()=>ie});var a,r=t(28655),i=t.n(r),l=t(63038),o=t.n(l),u=t(71439),c=t(67294),s=t(42963),m=t(46829),d=t(58875),g=t.n(d),p=t(34675),f=t(7530),h=t(64504),v=t(62630),E=t(28309),x=t(79208),b=t(90038),I=function(e){return{backgroundColor:e.baseColor.background.light,borderColor:e.baseColor.border.light,borderRadius:"3px",borderWidth:"1px",alignItems:"center",padding:"25px 20px 25px 20px",marginTop:"",borderStyle:"solid"}},C=function(){var e=(0,E.Iq)();return c.createElement("div",{className:e([S,I])},c.createElement(f.xu,{textAlign:"center"},c.createElement(f.xu,null,"1000 x 1000"),c.createElement(f.xu,null,"pixels")))},y=function(){return c.createElement(f.xu,{marginRight:"5px",display:"inline-block"},c.createElement(h.F,{scale:"S",color:"ERROR"},"That file doesn't meet our requirements. Try another."))},k=function(){return c.createElement(f.xu,{marginTop:"8px"},c.createElement(f.xu,{marginRight:"5px",display:"inline-block"},c.createElement(h.F,{scale:"S",color:"ERROR"},"We couldn't process your request.")),c.createElement(f.xu,{marginRight:"5px",display:"inline-block"},c.createElement(h.F,{scale:"S"},"Try again, or"," ",c.createElement(f.rU,{inline:!0,linkStyle:"OBVIOUS",href:"https://help.medium.com/hc/en-us"},"search our help center for support."))))};!function(e){e.Success="success",e.UploadError="uploadError",e.InvalidError="invalidError"}(a||(a={}));var S={height:"132px",width:"132px",display:"flex",flexDirection:"row",justifyContent:"center"},R=function(e){var n=e.setImageId,t=e.initialImageId,r=e.source,i=(0,E.Iq)(),l=(0,v.Av)(),u=(0,p.Hk)().value,s=c.useState({imageId:t,imageWidth:0,imageHeight:0}),m=o()(s,2),d=m[0],g=m[1],h=c.useState(null),I=o()(h,2),R=I[0],D=I[1],w=function(e){D(e),l.event("user.updateAvatarResult",{userId:null==u?void 0:u.id,source:r,uploadResult:e})},L=(0,x.JA)((function(e,t,r){var i=t.height,l=t.width,o=e.value.fileId;g({imageId:o,imageHeight:i,imageWidth:l}),i<parseInt("1000px",10)||l<parseInt("1000px",10)?(w(a.InvalidError),H()):(n(o),w(a.Success),r())}),(function(){w(a.UploadError)}),(function(){w(a.InvalidError)})),T=L.inputRef,F=L.fireClick,U=function(){l.event("user.updateAvatarClick",{userId:null==u?void 0:u.id,source:r,hasImage:!!d.imageId}),F()},H=function(){g({imageId:"",imageWidth:0,imageHeight:0}),n("")},B=c.useCallback((function(){return c.createElement(f.xu,{marginBottom:"10px"},c.createElement("input",{type:"file","aria-hidden":"true",ref:T,className:i({display:"none"})}),c.createElement(f.rU,{inline:!0,linkStyle:"OBVIOUS",onClick:U},"Add photo"))}),[i,U,T]),A=c.useCallback((function(){return c.createElement("div",{className:i([S])},c.createElement("div",{className:i((function(){return{backgroundImage:"url(".concat((0,b.W6)({miroId:d.imageId||"",width:d.imageWidth||0,height:d.imageHeight||0}),")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"contain",height:"100%",width:"100%",borderRadius:"3px",display:"flex",flexDirection:"row"}}))}))}),[i,d]),P=c.useCallback((function(){return c.createElement(f.xu,{display:"inline-block",marginBottom:"15px"},d.imageId?c.createElement(A,null):c.createElement(C,null))}),[d]);return c.createElement(f.xu,{display:"flex",flexDirection:"column",maxWidth:"132px"},c.createElement(f.xu,{display:"inline-block",float:"right"},c.createElement(P,null)),c.createElement(B,null),R===a.UploadError&&c.createElement(k,null),R===a.InvalidError&&c.createElement(y,null))},D=function(e){var n=e.label,t=e.onChangeFn,a=e.onBlurFn,r=e.value,i=e.errorMessage,l=e.characterCountLimit;return c.createElement(c.Fragment,null,c.createElement(f.xu,{marginBottom:"15px",textAlign:"left"},c.createElement(h.F,{scale:"L",tag:"h4"},n)),c.createElement(f.nv,{scale:"L",onChange:t,value:r,errorMessage:i,onBlur:a,ariaLabel:n,characterCountLimit:l}))},w=t(22091),L=t(29035);function T(){var e=i()(["\n  mutation userCompleteProfileMutation(\n    $userId: ID!\n    $name: String!\n    $bio: String!\n    $imageId: String!\n  ) {\n    userCompleteProfile(userId: $userId, name: $name, bio: $bio, imageId: $imageId)\n  }\n"]);return T=function(){return e},e}function F(){var e=i()(["\n  fragment UserCompleteProfileDialog_user on User {\n    id\n    name\n    bio\n    imageId\n    hasCompletedProfile\n  }\n"]);return F=function(){return e},e}var U={min:3,max:50,message:"Please try another name that’s between 3 and 50 characters."},H={min:10,max:160,message:"Please try another description that’s between 10 and 160 characters."},B=function(e,n){var t=e.min,a=e.max,r=e.message;return function(e){var i=e.target.value;n(i.length<t||i.length>a?r:void 0)}},A=function(e){var n=(0,p.Hk)().value;return{shouldShowDialog:g().canUseDOM&&!(0,L.ic)(navigator.userAgent)&&(null==n?void 0:n.id)===e.id}},P=function(e){var n=e.setHasCompletedProfile,t=e.user,a=(0,v.Av)(),r=(0,p.Hk)().value,i=c.useState(!1),l=o()(i,2),u=l[0],s=l[1],m=O(),d=o()(m,1)[0],g=c.useState((null==t?void 0:t.imageId)||""),f=o()(g,2),E=f[0],x=f[1],b=c.useState((null==t?void 0:t.name)||""),I=o()(b,2),C=I[0],y=I[1],k=c.useState((null==t?void 0:t.bio)||""),S=o()(k,2),L=S[0],T=S[1],F=c.useState(),P=o()(F,2),M=P[0],N=P[1],V=c.useState(),$=o()(V,2),_=$[0],W=$[1],G=B(U,N),q=B(H,W),z=c.useCallback((function(){r&&(s(!0),a.event("user.completedProfile",{userId:r.id,changedName:(null==t?void 0:t.name)!==C,changedBio:(null==t?void 0:t.bio)!==L,changedImage:(null==t?void 0:t.imageId)!==E,hasName:!!C,hasBio:!!L,hasImage:!!E}),d({variables:{userId:r.id,name:C,bio:L,imageId:E}}).then((function(){s(!1),n(!0)})))}),[r,d,s,t,C,L,E]),Q=A(t).shouldShowDialog;return c.useEffect((function(){Q&&a.event("user.presentedCompleteProfileDialog",{userId:null==r?void 0:r.id})}),[Q]),Q?c.createElement(c.Fragment,null,c.createElement(w.QH,{confirmText:"Continue",titleText:"Complete your profile",isDestructiveAction:!1,onConfirm:z,isVisible:!0,hide:function(){},withCloseButton:!1,showCancelButton:!1,disableConfirm:u},c.createElement(h.F,{scale:"L",color:"DARKER"},"Readers like learning a bit more about their writers"),c.createElement(w.xu,{marginTop:"48px",marginBottom:"28px",display:"flex",flexDirection:"row"},c.createElement(w.xu,{overflow:"visible",maxHeight:"200px"},c.createElement(R,{setImageId:x,initialImageId:E,source:"userCompleteProfileDialog"})),c.createElement(w.xu,{marginLeft:"48px",textAlign:"left"},c.createElement(w.xu,{key:"name"},c.createElement(D,{label:"Full name",onChangeFn:function(e){return y(e.target.value)},onBlurFn:G,value:C,errorMessage:M})),c.createElement(w.xu,{key:"bio",marginTop:"40px"},c.createElement(D,{label:"Bio (optional, max 160 characters)",onChangeFn:function(e){return T(e.target.value)},onBlurFn:q,value:L,errorMessage:_,characterCountLimit:160})))))):null},M=(0,u.Ps)(F()),O=function(){return(0,m.useMutation)(N)},N=(0,u.Ps)(T()),V=t(23279),$=t.n(V),_=t(67297),W=t(51064),G=t(27952);function q(){var e=i()(["\n  query userDomainValidityQuery($domain: String!) {\n    userDomainValidity(domain: $domain)\n  }\n"]);return q=function(){return e},e}function z(){var e=i()(["\n  mutation createUserDomainMutation($domain: String!) {\n    userDomainLink(domain: $domain) {\n      __typename\n      ... on CustomDomainFailure {\n        reason\n      }\n    }\n  }\n"]);return z=function(){return e},e}function Q(){var e=i()(["\n  fragment UserSubdomainOnboardingDialog_user on User {\n    id\n    customDomainState {\n      pending {\n        status\n      }\n      live {\n        status\n      }\n    }\n    username\n  }\n"]);return Q=function(){return e},e}var Y=function(e){var n,t,a=e.user,r=e.isVisible,i=e.hide,l=e.redirectTo,u=e.redirectOnHide,s=void 0!==u&&u,m=e.refreshOnHide,d=void 0!==m&&m,f=(0,E.Iq)(),x=(0,v.Av)(),b=(0,p.Hk)().value,I=null!=b&&b.username?function(e){return e.toLowerCase().replace(/[_.]/g,"-").replace(/[^a-z0-9-]/g,"").replace(/-+/g,"-").replace(/^-/,"").replace(/-$/,"")}(b.username):"",C=c.useState(I),y=o()(C,2),k=y[0],S=y[1],R=(0,W.O)(!1),D=o()(R,3),L=D[0],T=D[1],F=D[2],U=c.useState(!1),H=o()(U,2),B=H[0],A=H[1],P=c.useState(!1),M=o()(P,2),O=M[0],N=M[1],V=ee(k),q=ne(k),z=c.useState(null),Q=o()(z,2),Y=Q[0],j=Q[1],K=(0,_.v9)((function(e){return e.config.productName})),X=J(),te=o()(X,1)[0],ae=Z(V),re=ae.isValidityLoading,ie=ae.validityResult,le=ae.checkValidity,oe=c.useCallback($()((function(e){le(e),A(!1)}),500),[]),ue=c.useCallback((function(e){var n=e.target.value;B||A(!0),j(null),oe({domain:n}),S(n)}),[le,B]),ce=c.useCallback((function(){N(!0),x.event("user.claimedSubdomain",{userId:null==b?void 0:b.id,source:"subdomain_dialog",changedUsername:(null==b?void 0:b.username)!==k}),te({variables:{domain:V}}).then((function(e){var n,t,a,r,l="Something went wrong. Please try again with a different name.";if("CustomDomain"===(null===(n=e.data)||void 0===n||null===(t=n.userDomainLink)||void 0===t?void 0:t.__typename))T(),i();else if("CustomDomainFailure"===(null===(a=e.data)||void 0===a||null===(r=a.userDomainLink)||void 0===r?void 0:r.__typename)){var o=e.data.userDomainLink.reason||l;j(o)}else j(l);N(!1)}))}),[te,x,b,V,k]),se=c.useCallback((function(){s&&l(q),F(),d&&window.location.reload()}),[q,s,d]),me=!(null==a||null===(n=a.customDomainState)||void 0===n||!n.pending)||!(null==a||null===(t=a.customDomainState)||void 0===t||!t.live),de=!!b&&a.id===b.id&&!me&&g().canUseDOM;if(c.useEffect((function(){r&&de&&x.event("user.presentedClaimSubdomainDialog",{userId:null==b?void 0:b.id})}),[r,de]),!de)return null;var ge=!B&&!re&&(null==ie?void 0:ie.userDomainValidity);return c.createElement(c.Fragment,null,c.createElement(w.QH,{confirmText:"Claim URL",titleText:"Claim your ".concat(K," URL"),isDestructiveAction:!1,onConfirm:ce,isVisible:r,hide:i,withCloseButton:!1,showCancelButton:!1,secondaryButton:c.createElement(w.zx,{href:(0,G.mcw)(),size:"REGULAR"},"Learn More"),hideOnConfirm:!1,disableConfirm:O||!!Y||!ge},"All your stories show up on your profile, and it now comes with a personalized URL. The name you pick below will also be your username on ",K,".",c.createElement(w.xu,{marginBottom:"14px",marginTop:"32px",display:"flex",flexDirection:"column"},c.createElement(w.nv,{ariaLabel:"Profile domain",onChange:ue,value:k,errorMessage:null!=Y?Y:void 0,hideErrorIcon:!0}),!Y&&c.createElement(w.xu,{display:"inline-block",marginTop:"8px"},c.createElement("table",{className:f({display:"table",marginLeft:"auto",marginRight:"auto",textAlign:"left",borderSpacing:"4px",tableLayout:"fixed",maxWidth:"100%"})},c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",{className:f({paddingRight:"4px",verticalAlign:"top"})},c.createElement(h.F,{color:"LIGHTER",scale:"M",tag:"h4"},c.createElement("strong",null,"URL"))),c.createElement("td",null,c.createElement(h.F,{color:"LIGHTER",scale:"M"},V))),c.createElement("tr",null,c.createElement("td",{className:f({paddingRight:"4px",verticalAlign:"top"})},c.createElement(h.F,{color:"LIGHTER",scale:"M",tag:"h4"},c.createElement("strong",null,"Username"))),c.createElement("td",{className:f({marginBottom:"12px",marginTop:"10px"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},"@",k))),c.createElement("tr",null,c.createElement("td",null),c.createElement("td",{className:f({visibility:k===a.username?"hidden":"visible"})},c.createElement(h.F,{color:"LIGHTER",scale:"M"},"@",a.username," will no longer be valid")))))))),c.createElement(w.QH,{confirmText:"Done",titleText:"You're all set.",isDestructiveAction:!1,onConfirm:function(){},isVisible:L,hide:se,withCloseButton:!1,showCancelButton:!1},"Your profile is now available at your ",K," URL.",c.createElement(w.xu,null,c.createElement(w.xu,{display:"inline-block",marginTop:"28px"},c.createElement("table",{className:f({display:"table",marginLeft:"auto",marginRight:"auto",textAlign:"left",tableLayout:"fixed",maxWidth:"100%"})},c.createElement("tbody",null,c.createElement("tr",null,c.createElement("td",{className:f({marginBottom:"12px",paddingRight:"8px",verticalAlign:"top"})},c.createElement(h.F,{color:"LIGHTER",scale:"M",tag:"h4"},c.createElement("strong",null,"URL"))),c.createElement("td",null,c.createElement(h.F,{color:"LIGHTER",scale:"M",tag:"h4"},V))),c.createElement("tr",{className:f({paddingTop:"8px"})},c.createElement("td",{className:f({paddingRight:"8px",verticalAlign:"top"})},c.createElement(h.F,{color:"LIGHTER",scale:"M",tag:"h4"},c.createElement("strong",null,"Username"))),c.createElement("td",{className:f({marginBottom:"12px"})},c.createElement(h.F,{color:"LIGHTER",scale:"M",tag:"h4"},"@",k)))))))))},j=(0,u.Ps)(Q()),J=function(){return(0,m.useMutation)(K)},K=(0,u.Ps)(z()),Z=function(e){var n=(0,m.useQuery)(X,{variables:{domain:e},ssr:!1});return{isValidityLoading:n.loading,validityResult:n.data,checkValidity:n.refetch}},X=(0,u.Ps)(q()),ee=function(e){var n=(0,_.v9)((function(e){return e.config.authDomain})).split(":")[0];return"".concat(e,".").concat(n)},ne=function(e){var n=(0,_.v9)((function(e){return e.config.authDomain}));return"https://".concat(e,".").concat(n)},te=t(8403);function ae(){var e=i()(["\n  fragment UserSubdomainFlow_user on User {\n    id\n    hasCompletedProfile\n    name\n    bio\n    imageId\n    ...UserCompleteProfileDialog_user\n    ...UserSubdomainOnboardingDialog_user\n  }\n  ","\n  ","\n"]);return ae=function(){return e},e}var re=function(e){var n=e.user,t=e.redirectOnComplete,a=void 0!==t&&t,r=e.refreshOnComplete,i=void 0!==r&&r,l=e.forceVisible,u=void 0!==l&&l,m="true"===(0,te.Wd)("showDomainSetup")||u,d=(0,W.O)(m),g=o()(d,3),p=g[0],f=g[2],h=c.useState(n.hasCompletedProfile),v=o()(h,2),E=v[0],x=v[1],b=c.useState(null),I=o()(b,2),C=I[0],y=I[1],k=A(n).shouldShowDialog&&!E&&(!n.name||!n.bio||!n.imageId);return C?c.createElement(s.Z,{to:C,replace:!0}):c.createElement(c.Fragment,null,c.createElement(Y,{isVisible:p&&!k,hide:u?function(){}:f,user:n,redirectTo:y,redirectOnHide:a,refreshOnHide:i}),p&&k?c.createElement(P,{user:n,setHasCompletedProfile:x}):null)},ie=(0,u.Ps)(ae(),M,j)}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3874.32302d9b.chunk.js.map