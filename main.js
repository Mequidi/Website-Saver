const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const savedUrlBtn = document.getElementById("saved-url-btn");

const urlFromStorage = JSON.parse(localStorage.getItem("url"));
let url = [];
console.log(url.length)

function render(array){ 

    let listEl = "";
    for (let i = 0; i < array.length; i++) {
        listEl += `<li>
            <a href="${array[i]}"> 
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
    console.log("saved url button clicked");
    // url = getUrl(url,"url");
    // url = JSON.parse(localStorage.getItem("url"));
    if(urlFromStorage)
    {
        url = urlFromStorage; 
        console.log(url);
        render(url);
    }
    else    
    {
        console.log("didnt enter the loop");
        render(url);
    }


}
saveBtn.addEventListener("click", function () {
    console.log("save button clicked!");
    url.push(inputEl.value);
    inputEl.innerText= "nikhil";
    if(url){
        storeUrl(url,"url");
    }
})

tabBtn.addEventListener("click", function () {
    console.log("tab button clicked!");
})

deleteBtn.addEventListener("dblclick", function () {
    console.log("deleted button double clicked!");
    localStorage.clear();
    url = [];
    ulEl.textContent="";

})

savedUrlBtn.addEventListener("click", savedUrlFunc);
