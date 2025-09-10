
let leads=""
let array=[]

const inp_box=document.getElementById("input")
const inp_btn=document.getElementById("input-btn")
const tab_btn=document.getElementById("tab")
const del_btn=document.getElementById("del")
let ul=document.getElementById("unorderedList")

let ls=JSON.parse(localStorage.getItem("array"))

if(ls){
    array=ls
    rendering(array)
}

function rendering(a){
    leads=""
    for(let i=0;i<a.length;i++){
        leads+=`
        <li>
            <a href="${a[i]}" target="_blank">
                ${a[i]}
            </a>
        </li> 
    `
    }
    ul.innerHTML=leads
}

inp_btn.addEventListener("click",function(){
    // leads+="<li><a href='"+inp_box.value+"' target='_blank'>" +inp_box.value+"</a></li>"
    array.push(inp_box.value)
    inp_box.value=""
    localStorage.setItem("array",JSON.stringify(array))
    rendering(array);
})

tab_btn.addEventListener("click",function(){
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        array.push(tabs[0].url)
        localStorage.setItem("array",JSON.stringify(array))
        rendering(array);
    })
})

del_btn.addEventListener("click",function(){
    localStorage.clear()
    array=[]
    rendering(array)
})

