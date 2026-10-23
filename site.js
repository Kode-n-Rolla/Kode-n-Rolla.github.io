'use strict';
const data = window.PORTFOLIO;
const $ = (id) => document.getElementById(id);
function el(tag, className, value) { const node = document.createElement(tag); if (className) node.className = className; if (value !== undefined) node.textContent = value; return node; }
function safeUrl(url) { try { const u=new URL(url); return ['https:','mailto:'].includes(u.protocol) ? u.href : null; } catch { return null; } }
function link(text, href, className) {const a=el('a',className,text);a.href=href;a.target='_blank';a.rel='noopener noreferrer';return a;}
function tags(items) {const c=el('div','tags'); (items || []).forEach(t=>c.append(el('span','tag',t))); return c;}
function render(){
  const {identity,contact,services,projects,about}=data;
  $('brand-name').textContent=identity.alias; $('real-name').textContent=identity.name; $('alias').textContent=`aka ${identity.alias}`;
  $('headline').textContent=identity.headline; $('intro').textContent=identity.intro; $('location').textContent=identity.location;
  $('about-heading').textContent=about.heading; $('about-text').textContent=about.text;
  $('footer-name').textContent=identity.alias; $('year').textContent=new Date().getFullYear();
  if (!identity.availability) document.querySelector('.header-meta').hidden=true;
  services.forEach(s=>{const c=el('article','service-card');const top=el('div','service-head');top.append(el('span','service-category',s.category),el('span','service-icon',s.icon));c.append(top,el('h3','',s.name),el('p','',s.description),tags(s.skills));$('services-grid').append(c);});
  const visible=projects.filter(p=>p.featured);
  visible.forEach((p,i)=>{const c=el('article','project-card');const head=el('div','project-head');head.append(el('span','project-number',String(i+1).padStart(2,'0')+' /'),el('span','project-type',p.type));const status=el('span','project-status',p.status);const title=el('h3','',p.name);const desc=el('p','project-description',p.description);const bottom=el('div','project-bottom');bottom.append(tags(p.tech));const u=safeUrl(p.github);if(u)bottom.append(link('View code ↗',u,'project-link'));c.append(head,status,title,desc,bottom);$('project-grid').append(c);});
  $('project-count').textContent=String(visible.length).padStart(2,'0');
  const gh=safeUrl(contact.github);if(gh)$('github-all').href=gh;
  about.capabilities.forEach(s=>$('capabilities').append(el('span','capability',s)));
  const destinations=[['Email',contact.email && `mailto:${contact.email}`,'↗'],['LinkedIn',contact.linkedin,'↗'],['Telegram',contact.telegram,'↗'],['GitHub',contact.github,'↗']];
  destinations.forEach(([label,url,symbol])=>{const safe=safeUrl(url);if(!safe)return;const a=link(label+' '+symbol,safe,'contact-link');$('contact-links').append(a);});
  if (!contact.email || !contact.linkedin || !contact.telegram) $('contact-footnote').textContent='Preview note: add your approved contact links to site-data.js before publishing.';
}
render();
