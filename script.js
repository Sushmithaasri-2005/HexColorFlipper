const btn=document.getElementById("button")
const hexcode=document.getElementById("hexcode")
const bg=document.getElementById("background")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
btn.addEventListener('click',flipBG)
function flipBG()
{
    let hexcolor='#'
    for(let i=0;i<6;i++)
    {
        hexcolor+=randomHex()
    }
    console.log(hexcolor)
    bg.style.backgroundColor=hexcolor
    hexcode.innerHTML=hexcolor

}
function randomHex()
{
    let randomIndex=Math.floor(Math.random()*16)
    return hex[randomIndex]
}

