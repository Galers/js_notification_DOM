var e=document.querySelector("body"),t=function(t,n,a,o,s){if(s){var c=document.createElement("div"),d=document.createElement("h2"),l=document.createElement("p");c.classList.add("notification",s),d.classList.add("title"),d.innerText=a,l.innerText=o,c.style.top="".concat(t,"px"),c.style.right="".concat(n,"px"),c.appendChild(d),c.appendChild(l),e.appendChild(c),i(c)}},i=function(e){setTimeout(function(){e.style.visibility="hidden"},2e3)};t(10,10,"Title of Success message","Message example.\n Notification should contain title and description.","success"),t(150,10,"Title of Error message","Message example.\n Notification should contain title and description.","error"),t(290,10,"Title of Warning message","Message example.\n Notification should contain title and description.","warning");
//# sourceMappingURL=index.6ebc8908.js.map
