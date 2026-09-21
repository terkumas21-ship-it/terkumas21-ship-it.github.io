const root=document.documentElement;
const menu=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
const theme=document.querySelector('#themeToggle');
const saved=localStorage.getItem('theme');
if(saved) root.dataset.theme=saved;
function updateThemeIcon(){theme.textContent=root.dataset.theme==='dark'?'☀':'☾';theme.setAttribute('aria-label',root.dataset.theme==='dark'?'Switch to light mode':'Switch to dark mode')}
updateThemeIcon();
theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);updateThemeIcon()});
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const progress=document.querySelector('#scrollProgress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(h>0?window.scrollY/h*100:0)+'%'});
document.querySelector('#year').textContent=new Date().getFullYear();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
