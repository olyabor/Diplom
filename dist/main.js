!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelector(".main-slider"),t=e.querySelectorAll(".slide");let n,o=0;const r=()=>{t[o].style.display="none",o++,o>=t.length&&(o=0),t[o].style=""},i=(e=3e3)=>{n=setInterval(r,e)};e.addEventListener("mouseover",e=>{e.target.closest(".main-slider")&&clearInterval(n)}),e.addEventListener("mouseout",e=>{e.target.closest(".main-slider")&&i()}),i(1500)};var r=e=>{let t=document.getElementById("select-style");t||(t=document.createElement("style"),t.id="select-style"),t.textContent="\n  .active {\n    display: flex !important;\n  }\n  .clubs-list .active {\n    display: block !important;\n  }\n  ",e.classList.toggle("active"),document.querySelector(".top-menu").style.cssText=e.classList.contains("active")?"z-index: 0":"z-index: 4444",document.head.append(t)};const i=(e,t=0)=>{const n=document.querySelector("#price-total"),o=[[{name:"1 МЕСЯЦ",type:"СОЛО",price:1999},{name:"6 МЕСЯЦЕВ",type:"СОЛО",price:9900},{name:"9 МЕСЯЦЕВ",type:"СОЛО",price:13900},{name:"12 МЕСЯЦЕВ",type:"ДНЕВНАЯ",price:9900,freezeTime:"* 1 месяц заморозки"},{name:"12 МЕСЯЦЕВ",type:"СОЛО",price:19900,freezeTime:"* 1 месяц заморозки"}],[{name:"1 МЕСЯЦ",type:"СОЛО",price:2999},{name:"6 МЕСЯЦЕВ",type:"СОЛО",price:14990},{name:"9 МЕСЯЦЕВ",type:"СОЛО",price:21990},{name:"12 МЕСЯЦЕВ",type:"ДНЕВНАЯ",price:14990,freezeTime:"* 1 месяц заморозки"},{name:"12 МЕСЯЦЕВ",type:"СОЛО",price:24990,freezeTime:"* 1 месяц заморозки"}]];if(e&&n){const r="1"===e["card-type"]?0:"6"===e["card-type"]?1:"9"===e["card-type"]?2:3,i="mozaika"===e["club-name"]?0:1;n.textContent=Math.round(o[i][r].price*(1-t/100))}};let s,l;function a(){l=0,s={"card-type":"1","club-name":"mozaika",name:"",phone:""},i(s,l)}document.querySelector("#cards").addEventListener("change",e=>{const t=e.target;t.closest(".time")&&(s["card-type"]=t.value),t.matches("#card_leto_mozaika")&&(s["club-name"]="mozaika"),t.matches("#card_leto_schelkovo")&&(s["club-name"]="schelkovo"),t.matches('input[name="name"]')&&"ТЕЛО2020"===t.value&&(l=30),i(s,l)}),a();var c=i;var d=()=>{const e=/^\+?\d{7,13}$/,t=document.getElementById("banner-form"),n=document.getElementById("card_order"),o=document.getElementById("footer_form"),i=document.getElementById("free_visit_form"),s=document.getElementById("callback_form"),l=document.querySelector("body"),d=document.getElementById("thanks"),p=document.querySelector('input[placeholder="Промокод"]');let m=document.createElement("p");m.style="color: white",m.id="mess";document.querySelectorAll('.personal-data>input[type="checkbox"]').forEach(e=>{e.required=!1}),p&&(p.required=!1);const u=t=>{const o=t.target,i=o.querySelector('.personal-data>input[type="checkbox"]'),s=o.querySelectorAll('.club>input[type="radio"]'),p=o.querySelector("#card_check"),u=o.innerHTML;t.preventDefault();const h=e=>!0===e.checked;let y=o.querySelectorAll("input");if((t=>{let n=!0;return t.forEach(t=>{"tel"!==t.type||e.test(t.value)||(t.style.border="solid red",n=!1)}),n})(y))if(y.forEach(e=>{e.style.border=""}),i&&i.checked||p&&p.checked||o.closest("#footer_form")&&[...s].some(h)){const e=new FormData(o);let t={};e.forEach((e,n)=>{t[n]=e}),m.remove(),o.innerHTML+='<h4 style = "text-align: center">Идет отправка</h4>',window.orderData=t,(e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}))(t).then(e=>{if(200!==e.status)throw(o.closest("#callback_form")||o.closest("#free_visit_form"))&&(o.innerHTML='<h4>Ошибка</h4>\n                <button class="btn close-btn" style = "position: relative; top: 50px;">OK</button>'),(o.closest("#banner-form")||o.closest("#footer_form")||o.closest("#card_order"))&&(r(d),d.querySelector(".form-content").innerHTML='\n      <h4>Ошибка!</h4>\n      <p>Отправка не удалась.</p>\n      <button class="btn close-btn">OK</button>'),new Error("status network is not 200");(o.closest("#callback_form")||o.closest("#free_visit_form"))&&(o.innerHTML='<h4>Отправлено</h4>\n                <button class="btn close-btn" style = "position: relative; top: 50px;">OK</button>'),(o.closest("#banner-form")||o.closest("#footer_form")||o.closest("#card_order"))&&(r(d),d.querySelector(".form-content").innerHTML='\n            <h4>Спасибо!</h4>\n            <p>Ваша заявка отправлена. <br> Мы свяжемся с вами в ближайшее время.</p>\n            <button class="btn close-btn">OK</button>'),c(t)}).catch(e=>{console.error(e)})}else s&&o.matches("#footer_form")?m.innerHTML='<p style = "color: red; text-align: center;">Не выбран клуб</p>':(i||n)&&(m.innerHTML='<p style = "color: red; text-align: center">Необходимо подтвердить согласие на обработку данных</p>',[i,n].forEach(e=>{e&&e.addEventListener("change",()=>{e.checked&&m.remove()})})),o.querySelector("#mess")||o.append(m),s.forEach(e=>e.addEventListener("change",()=>{e.checked&&m.remove()}));l.addEventListener("click",e=>{(e.target.matches(".close_icon")||e.target.matches(".overlay")||e.target.matches(".close-btn"))&&(o.innerHTML=u,y=o.querySelectorAll('input[type="text"]'),y.forEach(e=>{e.value="",e.style.border=""}),i&&(i.checked=!1),p&&(p.checked=!1),s.forEach(e=>e.checked=!1),m.remove(),a())})};t.addEventListener("submit",u),n.addEventListener("submit",u),o.addEventListener("submit",u),s.addEventListener("submit",u),i.addEventListener("submit",u)};var p=()=>{const e=document.querySelector("body"),t=document.getElementById("free_visit_form"),n=document.getElementById("callback_form");e.addEventListener("click",o=>{const i=o.target;i.closest(".club-select")&&!i.closest("ul")&&r(i.closest(".club-select").querySelector("ul")),i.closest(".open-popup")&&r(t),i.matches(".callback-btn")&&!i.closest("#footer_form")&&r(n),i.matches(".close-btn")||i.closest(".close-form")?(i.closest("#callback_form")&&r(i.closest("#callback_form")),i.closest("#free_visit_form")&&r(i.closest("#free_visit_form")),i.closest("#thanks")&&r(document.getElementById("thanks")),i.closest("#gift")&&r(document.getElementById("gift"))):i.matches(".close_icon")&&r(i.closest(".popup")),i.closest(".overlay")&&r(e.querySelector(".active")),i.closest(".fixed-gift")&&(e.querySelector(".fixed-gift").style.display="none",r(document.getElementById("gift")))})};var m=()=>{document.querySelector("body").addEventListener("input",e=>{const t=e.target;t.style.border="",t.matches('input[name="name"]')&&"Промокод"!==t.placeholder&&(t.value=t.value.replace(/[^а-я\s]/gi,"")),t.matches('input[type="tel"]')&&(t.minlength="7",t.value=t.value.replace(/[^\+?\d{7,13}]/gi,"").slice(0,13))})};var u=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide");let n,o=0;document.querySelector(".gallery-bg .wrapper").insertAdjacentHTML("afterbegin",'<i class="fa fa-angle-left arrow-left"></i>'),document.querySelector(".gallery-bg .wrapper").insertAdjacentHTML("beforeend",'<i class="fa fa-angle-right arrow-right"></i>');for(let e=0;e<t.length;e++)document.querySelector(".gallery-bg .wrapper").insertAdjacentHTML("beforeend",'<button class="slider-dot"></button>');let r=document.getElementById("slider-style");r||(r=document.createElement("style"),r.id="slider-style"),r.textContent="\n  .gallery-bg {\n    display: flex !important;\n    overflow: hidden;\n    margin-top: 70px;\n  }\n  .gallery-bg .wrapper{\n    display: flex !important;\n    align-items: center !important;\n    transform: translateX(50px);\n  }\n  .slide {\n    display: none;\n    flex 0 0 auto;\n  }\n  .active-slide {\n    display: flex !important;\n    justify-content: center !important;\n    animation-duration: 2s;\n  }\n  .slider-dot {\n    width: 20px !important;\n    height: 5px !important;\n    position: relative !important;\n    left: -50%;\n    top: 40%;\n    margin-left: 5px;\n    z-index: 99;\n    justify-content: center;\n    border: 1px solid #A0C6C1;\n    box-shadow: 0px 2px 12px rgba(173, 152, 143, .25);\n    border-radius: 25%;\n  }\n  .active-dot {\n    background-color: rgba(161, 16, 89, .5);\n  }\n  .arrow-left, .arrow-right {\n    min-width: 50px !important;\n    height: 50px !important;\n    line-height: 50px;\n    font-size: 30px;\n    background-color: #E9F41A;\n    color: #A10659;\n    text-align: center;\n    border-radius: 50%;\n    box-shadow: 0px 2px 12px rgba(173, 152, 143, 0.25);\n  }\n  .arrow-left:hover,\n  .arrow-right:hover,\n  .arrow-left:focus,\n  .arrow-right:focus{\n    background-color: #E9F41A;\n    opacity: .5;\n    outline: transparent;\n  }",document.head.append(r),t[o].classList.add(".active-slide");const i=document.querySelector(".arrow-left"),s=document.querySelector(".arrow-right"),l=document.querySelectorAll(".slider-dot"),a=(e="right")=>{t[o].classList.remove("active-slide"),l[o].classList.remove("active-dot"),"left"===e?(o--,o<0&&(o=t.length-1)):(o++,o>=t.length&&(o=0)),t[o].classList.add("active-slide"),l[o].classList.add("active-dot")},c=(e=3e3)=>{n=setInterval(a,e)};e.addEventListener("mouseover",e=>{e.target.closest(".gallery-slider")&&clearInterval(n)}),e.addEventListener("mouseout",e=>{e.target.closest(".gallery-slider")&&c()}),i.addEventListener("click",()=>{a("left")}),s.addEventListener("click",()=>{a("right")}),l.forEach((e,n)=>{e.addEventListener("click",()=>{t[o].classList.remove("active-slide"),l[o].classList.remove("active-dot"),o=n,t[n].classList.add("active-slide"),e.classList.add("active-dot")})}),c(1500)};var h=()=>{const e=document.querySelector(".top-menu .menu-button"),t=document.querySelector(".top-menu"),n=document.querySelector(".header-main .popup-menu"),o=document.querySelector("#totop");o.style.display="none";const r=()=>{window.innerWidth<=768?(e.classList.remove("hidden-large"),document.querySelector(".top-menu ul").style.display="none"):(document.querySelector(".top-menu ul").style.display="flex",e.classList.add("hidden-large"))};r(),window.addEventListener("resize",()=>{r()}),window.addEventListener("scroll",()=>{const e=document.querySelector(".head-main").offsetHeight,n=document.querySelector(".breadcrumbs"),r=document.querySelector("#clubs");window.scrollY>e?(t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%"):(t.style.position="relative",t.style.top="initial",t.style.left="initial"),o.style.display=(n||r).getBoundingClientRect().y<=0?"block":"none"}),e.addEventListener("click",()=>{n.style.display="flex"}),n.addEventListener("click",e=>{const t=e.target;(t.closest(".close-menu-btn")||t.closest(".scroll>a"))&&(n.style.display="none")})};o(),d(),p(),m(),u();new class{constructor({main:e,wrap:t,next:n,prev:o,infinity:r=!1,position:i=0,slidesToShow:s=5,responsive:l=[]}){e&&t||console.warn('slider-carousel: Необходимо два свойства, "main" и "wrap"!'),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.slides=document.querySelector(t).children,this.next=document.querySelector(n),this.prev=document.querySelector(o),this.slidesToShow=s,this.options={position:i,infinity:r,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=l}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.getElementById("sliderCarousel-style");e||(e=document.createElement("style"),e.id="sliderCarousel-style"),e.textContent=`\n      .glo-slider {\n        overflow: hidden !important;\n        position: relative;\n      }\n      .glo-slider__wrap {\n        display: flex !important;\n        align-items: center;\n        transition: transform .5s !important;\n        will-change: transform !important;\n      }\n      .glo-slider__item {\n        display: flex !important;\n        flex-direction: column !important;\n        justify-content: center;\n        \n        flex: 0 0 ${this.options.widthSlide}% !important;\n        margin: 0 auto !important;\n      }\n    `,document.head.append(e)}controlSlider(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}prevSlider(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev=document.createElement("div"),this.next=document.createElement("div"),this.prev.className="fa fa-angle-left arrow-left",this.next.className="fa fa-angle-right arrow-right",this.main.append(this.prev),this.main.append(this.next);const e=document.createElement("style");e.textContent="\n      #services .arrow-left,\n      #services .arrow-right {\n        min-width: 50px !important;\n        line-height: 50px !important;\n        position: absolute;\n        top: calc(50% - 25px);\n        z-index: 99;     \n        color: #9400D3;\n        font-size: 30px;\n        text-align: center !important;\n        border-radius: 50%;\n        box-shadow: 0px 2px 12px rgba(173, 152, 143, .25);\n      }\n      .arrow-left{\n        left: 0;\n      }\n      .arrow-right{\n        right: 0;\n      }\n      .arrow-left:hover,\n      .arrow-right:hover,\n      .arrow-left:focus,\n      .arrow-right:focus{\n        background-color: #E9F41A;\n        opacity: .5;\n        outline: transparent;\n      }\n    ",document.head.append(e)}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breakpoint),n=Math.max(...t),o=()=>{const o=document.documentElement.clientWidth;if(o<n)for(let e=0;e<t.length;e++)o<t[e]&&(this.slidesToShow=this.responsive[e].slidesToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};o(),window.addEventListener("resize",o)}}({main:"#services>.wrapper",wrap:".services-slider",infinity:!0,responsive:[{breakpoint:1200,slidesToShow:4},{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init(),h()}]);