const refresh=document.querySelector(".symbol");
const copy=document.getElementById("copy");
const color=document.querySelectorAll(".color");
const sel=document.querySelector("select");
const code=document.querySelector(".code");
const box=document.querySelector(".color-box");

refresh.addEventListener("click",()=>
{
    console.log("j");
    fillbox(true);
})
const fillbox=(value)=>
{
    if(value)
    {
        color[0].value=randomcolor();
        color[1].value=randomcolor();
    }
    box.style.background=`linear-gradient(${sel.value},${color[0].value},${color[1].value})`;
    code.innerHTML=`linear-gradient(${sel.value},${color[0].value},${color[1].value})`;

}
function randomcolor()
{
    let i;
    let hex="#";
    let rand="0123456789abcdef";
    for(i=0;i<6;i++)
    {
        hex=hex+rand[Math.floor(Math.random()*rand.length)];

    }
    return (hex);
}
sel.addEventListener("change",()=>
{
    fillbox(false);
})
color.forEach((e)=>
{
    e.addEventListener("input",()=>
    {
        fillbox(false);
    })
})
copy.addEventListener("click",()=>
{
    navigator.clipboard.writeText(code.innerHTML);
    copy.innerText="Copied";
    setTimeout(()=>
    {
        copy.innerText="Copy";
    },2000)
})