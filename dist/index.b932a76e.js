const t=document.querySelectorAll(".testimonial__container"),e=document.querySelector(".testimonial--button-prev"),o=document.querySelector(".testimonial--button-next"),n=document.querySelector(".dots__container--slider");!function(){let r=0,c=t.length,l=function(t){document.querySelectorAll(".dots__dot").forEach(t=>t.classList.remove("dots__dot--active")),document.querySelector(`.dots__dot[data-slide="${t}"]`).classList.add("dots__dot--active")},i=function(e){t.forEach((t,o)=>t.style.transform=`translateX(${150*(o-e)}%)`)};i(0),function(){t.forEach(function(t,e){n.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${e}"></button>`)});let e=document.querySelectorAll(".dots__dot");e.forEach((t,e)=>{t.addEventListener("click",()=>{i(r=e),l(r)})})}(),l(0),o.addEventListener("click",function(){r===c-1?r=0:r++,i(r),l(r)}),e.addEventListener("click",function(){0===r?r=c-1:r--,i(r),l(r)})}(),document.querySelectorAll(".testimonial__story__text"),document.querySelector(".dots__button-right"),document.querySelector(".dots__button-left"),document.querySelector(".dots____list"),function(){let t=document.querySelectorAll(".testimonial__container");t.forEach(t=>{let e=t.querySelectorAll(".testimonial__story__text");t.querySelectorAll(".dots");let o=t.querySelectorAll(".dots__list li"),n=t.querySelector(".dots__button-left"),r=t.querySelector(".dots__button-right"),c=0;function l(t){e.forEach(t=>t.classList.add("hidden")),e[t].classList.remove("hidden"),o.forEach(t=>t.classList.remove("active")),o[t].classList.add("active")}n.addEventListener("click",()=>{l(c=(c-1+e.length)%e.length)}),r.addEventListener("click",()=>{l(c=(c+1)%e.length)}),o.forEach((t,e)=>{t.addEventListener("click",()=>{l(c=e)})}),l(c)})}(),document.querySelector(".header__navigation__list-container").addEventListener("click",function(t){if(t.preventDefault(),t.target.classList.contains("header__navigation__links")){let e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth"})}}),document.querySelector(".header__button-container").addEventListener("click",function(t){if(t.preventDefault(),t.target.classList.contains("btn")){let e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth"})}}),function(){let t=document.querySelector(".header"),e=document.querySelector(".btn-mobile-nav");e.addEventListener("click",function(){t.classList.toggle("nav-open")})}();const r=document.querySelector(".header"),c=document.querySelector(".header__navigation"),l=new IntersectionObserver(function(t){let[e]=t;e.isIntersecting?c.classList.remove("sticky"):c.classList.add("sticky")},{root:null,threshold:0,rootMargin:"-5px"});l.observe(r);const i=document.querySelector(".footer__year"),s=new Date().getFullYear();i.textContent=s;
//# sourceMappingURL=index.b932a76e.js.map