const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const savedUrlBtn = document.getElementById("saved-url-btn");

const urlFromStorage = JSON.parse(localStorage.getItem("url"));
// let isStorageEmpty = true
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
// function getUrl(variable,key)
// {
//     variable = JSON.parse(localStorage.getItem(key));
//     return variable;
// }

function storeUrl(variable,key)
{
    localStorage.setItem(key,JSON.stringify(variable));
}

function savedUrlFunc(){
    // console.log("saved url button clicked");
    // url = getUrl(url,"url");
    // url = JSON.parse(localStorage.getItem("url"));
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
}

saveBtn.addEventListener("click", function () {
    // console.log("save button clicked!");
    urlArray.push(inputEl.value);
    if(urlArray){
        storeUrl(urlArray,"urlArray");
        // isStorageEmpty = false;
    }
})

tabBtn.addEventListener("click", function () {
    // console.log("tab button clicked!");
    chrome.tabs.query({active:true,currentWindow:true},function (tabs){
        urlArray.push(tabs[0].url);
        storeUrl(urlArray,"urlArray");
    })
    
    // let test = window.location.hostname;
    // url.push(test);
    // if(url)
    //     storeUrl(url,"url");
})

deleteBtn.addEventListener("dblclick", function () {
    // console.log("deleted button double clicked!");
    localStorage.clear();
    urlArray = [];
    ulEl.textContent="";

})

savedUrlBtn.addEventListener("click", savedUrlFunc);
