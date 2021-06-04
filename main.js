const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const savedUrlBtn = document.getElementById("saved-url-btn");

let urlFromStorage = JSON.parse(localStorage.getItem("urlArray"));
let urlArray = [];
console.log(urlArray.length)



function render(array){ 

    let listEl = "";
    for (let i = 0; i < array.length; i++) {
        listEl += `<li>
            <a target="-blank" href="${array[i]}"> 
                ${array[i]}
            </a>
        </li>`; 
    }
    ulEl.innerHTML = listEl;
}

function storeUrl(variable,key)
{
    localStorage.setItem(key,JSON.stringify(variable));
}

function appendHTTP()
{
    let http = "http://";
  
    for(let i = 0 ; i < urlArray.length ; i++ )
    {
        if(urlArray[i].search(http) == -1)
            urlArray[i] = http + urlArray[i];
    }
}

saveBtn.addEventListener("click", function () { 
    urlArray.push(inputEl.value);
    appendHTTP();
    if(urlArray)
        storeUrl(urlArray,"urlArray");
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active:true,currentWindow:true},function (tabs){
        urlArray.push(tabs[0].url);
        storeUrl(urlArray,"urlArray");
    })
})

deleteBtn.addEventListener("dblclick", function () {
    window.localStorage.clear();
    urlArray = [];
    console.log(urlArray);
    ulEl.textContent="";
})

savedUrlBtn.addEventListener("click", function(){
    
        if(urlFromStorage)
        {
            urlArray = urlFromStorage; 
            console.log(urlArray);
            render(urlArray);
        }
        else    
        {
            console.log("didnt enter the loop");
            render(urlArray);
        }
    
});
