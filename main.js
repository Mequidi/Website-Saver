const inputEl = document.getElementById("input-el");
const saveBtn = document.getElementById("save-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const savedUrlBtn = document.getElementById("saved-url-btn");

let url = [];

function render(){ 
    console.log("saved url button clicked");
    let listEl = "";
    url = getUrl(url,"url");
    console.log(url);
    for (let i = 0; i < url.length; i++) {
        listEl += `<li>
            <a href="${url[i]}"> 
                ${url[i]}
            </a>
        </li>`; 
    }
    ulEl.innerHTML = listEl;
}
function getUrl(variable,key)
{
    variable = JSON.parse(localStorage.getItem(key));
    return variable;
}

function storeUrl()
{
    localStorage.setItem("url",JSON.stringify(url));
}

saveBtn.addEventListener("click", function () {
    console.log("save button clicked!");
    url.push(inputEl.value);
    storeUrl();
})

tabBtn.addEventListener("click", function () {
    console.log("tab button clicked!");
})

deleteBtn.addEventListener("dblclick", function () {
    console.log("deleted button double clicked!");
    
})

savedUrlBtn.addEventListener("click", render);
