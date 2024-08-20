let bars=document.getElementById("bars");
let sidebars=document.getElementById("sidebar");
let xmark=document.getElementById("xmark");
let xmark2=document.getElementById("xmark2");
let colors=document.getElementById("colors");
let open=document.getElementById("open");
let hero=document.getElementById("hero");
let footer=document.getElementById("footer");
let image=document.getElementById("image");
let ch1=document.getElementById("ch1");
let f1=document.getElementById("f1");
let f2=document.getElementById("f2");
let f3=document.getElementById("f3");
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
if(colors.style.display=="none") {
    open.style.right="0";
}
ch1.addEventListener("click",()=>{
    hero.style.backgroundColor="#f3f1f6"
    footer.style.backgroundColor="#f3f1f6"
});
f1.addEventListener("click",()=>{
    document.body.style.fontFamily="Helvetica";
});
f2.addEventListener("click",()=>{
    document.body.style.fontFamily="Edu VIC WA NT Beginner";
});
f3.addEventListener("click",()=>{
    console.log("Click")
    document.body.style.fontFamily="Bungee Tint";
});