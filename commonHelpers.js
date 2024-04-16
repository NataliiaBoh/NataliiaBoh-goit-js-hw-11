import{S as m,i as l}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(o){return o.map(({id:s,webformatURL:r,largeimageURL:a,tags:e,likes:t,views:n,comments:u,downloads:d})=>`<li class="images-list-item" data-id='${s}'>
    <a class="images-list-link" href="${a}">
        <img class="images-list-image" src="${r}" alt="${e}"></img>
    </a>
    <div class="tumb">
        <div class="block">
            <h2 class="tittle">Likes</h2>
            <p class="text">${t}</p>
        </div>
        <div class="block">
            <h2 class="tittle">Views</h2>
            <p class="text">${n}</p>
        </div>
        <div class="block">
            <h2 class="tittle">Comments</h2>
            <p class="text">${u}</p>
        </div>
        <div class="block">
            <h2 class="tittle">Downloads</h2>
            <p class="text">${d}</p>
        </div>
    </div>
</li>`).join("")}function f(o){const s="https://pixabay.com/api/",r="43313350-287c14b2000f5e13b9dad3a59",a=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${a}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const p=document.querySelector(".js-search-form"),c=document.querySelector(".js-images-list"),i=document.querySelector(".loader");i.style.borderColor="white";i.style.borderBottomColor="transparent";const y=new m(".js-images-list a",{captions:!0,captionsData:"alt",captionDelay:250});p.addEventListener("submit",g);function g(o){o.preventDefault(),c.innerHTML="",i.style.borderColor="black",i.style.borderBottomColor="transparent";const s=o.currentTarget.querySelector(".search-input").value;f(s).then(r=>(i.style.borderColor="white",i.style.borderBottomColor="transparent",r.hits.length||l.error({title:"Error",messege:"Sorry, there are no images matching your search query. Please try again!"}),r)).then(r=>{c.innerHTML=h(r.hits),y.refresh(),s=""}).catch(r=>{i.style.display="none",r.length!=null&&l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}
//# sourceMappingURL=commonHelpers.js.map
