const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("Pahle kuch likh le bhai")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");//creatig a span by javascript
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";//for empty the input box
    saveData();//to save data in browser
}


//to toggle the to do
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()//to save data in browser
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()//to save data in browser
    }
},false);

//to store to do data in browser

function saveData(){
     localStorage.setItem("data" , listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();