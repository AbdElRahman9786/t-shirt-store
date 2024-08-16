let bars=document.getElementById("bars");
let sidebars=document.getElementById("sidebar");
let xmark=document.getElementById("xmark");
let xmark2=document.getElementById("xmark2");
let colors=document.getElementById("colors");
let open=document.getElementById("open");
bars.addEventListener("click",()=>{
    sidebars.style.display="block";
})
xmark.addEventListener("click",()=>{
    sidebars.style.display="none";
    
})
xmark2.addEventListener("click",()=>{
    colors.style.display="none";
    open.style.display="flex";
    open.style.right="0";
});

open.addEventListener("click",()=>{
    colors.style.display="block";
    open.style.display="none";
});

