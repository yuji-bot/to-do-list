const inputq=document.getElementById("task");
let btn=document.querySelector(".btn");
let task=document.querySelector(".taskcontainer");
console.log(inputq.value);
btn.addEventListener("click", ()=>{
    if(inputq.value ===''){
        alert("add task");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputq.value;
        task.appendChild(li);
        console.log(inputq.value);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputq.value="";
});

task.addEventListener("click", (e)=>{
    if(e.target.tagName==="LI"){
        e.target.classlist.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }

})