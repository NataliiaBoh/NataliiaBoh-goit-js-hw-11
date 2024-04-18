import{i as n,S as m}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function h(o){return o.map(({id:s,webformatURL:r,largeImageURL:i,tags:e,likes:t,views:l,comments:u,downloads:d})=>`<li class="images-list-item" data-id='${s}'>
    <a class="images-list-link" href="${i}">
        <img class="images-list-image" src="${r}" alt="${e}"></img>
    </a>
    <div class="tumb">
        <div class="block">
            <h2 class="tittle">Likes</h2>
            <p class="text">${t}</p>
        </div>
        <div class="block">
            <h2 class="tittle">Views</h2>
            <p class="text">${l}</p>
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
</li>`).join("")}function f(o){const s="https://pixabay.com/api/",r="43313350-287c14b2000f5e13b9dad3a59",i=new URLSearchParams({key:r,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${s}?${i}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const p=document.querySelector(".js-search-form"),c=document.querySelector(".js-images-list"),a=document.querySelector(".loader");a.style.borderColor="white";a.style.borderBottomColor="transparent";p.addEventListener("submit",g);function g(o){o.preventDefault(),c.innerHTML="",a.style.borderColor="black",a.style.borderBottomColor="transparent";const s=o.currentTarget.querySelector(".search-input").value;f(s).then(r=>(a.classList.add("loader"),r.hits.length||n.error({title:"Error",messege:"Sorry, there are no images matching your search query. Please try again!"}),r)).then(r=>{c.insertAdjacentHTML("beforeend",h(r.hits)),new m(".js-images-list a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh(),s=""}).catch(r=>{r.length!=null&&n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{a.classList.remove("loader")})}
//# sourceMappingURL=commonHelpers.js.map
