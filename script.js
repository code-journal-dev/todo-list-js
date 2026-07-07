let savedTasks=localStorage.getItem("tasks");
let tasks;
if(savedTasks){
  tasks=JSON.parse(savedTasks);
}
else{
  tasks=[];
}
let input=document.querySelector("input");
let button=document.querySelector("#btn");
let list=document.querySelector("#list");
function displayTasks(){
  list.innerHTML="";
  for(let i=0;i<tasks.length;i++){
    let item=document.createElement("li");
    item.textContent=tasks[i].text;
    if(tasks[i].completed){
      item.classList.add("done");
    }
    let divs=document.createElement("div");
    divs.classList.add("btn-container");
    item.appendChild(divs);
    let deleteBtn=document.createElement("button");
    deleteBtn.textContent="Delete";
    deleteBtn.classList.add("delete_btn");
    deleteBtn.addEventListener("click",function(){
      tasks.splice(i,1);
      localStorage.setItem("tasks",JSON.stringify(tasks));
      displayTasks();
    })
    let completeBtn=document.createElement("button");
    completeBtn.textContent="Completed";
    completeBtn.classList.add("complete_btn");
    //deleteBtn.classList.add("delete_btn");
    divs.appendChild(deleteBtn);
    divs.appendChild(completeBtn);
    list.appendChild(item);
    completeBtn.addEventListener("click",function(){
      tasks[i].completed=!tasks[i].completed;
      //item.classList.add("done");
      localStorage.setItem("tasks",JSON.stringify(tasks));
      displayTasks();
    })
  }
}
button.addEventListener("click",function(){
  if(input.value.trim() === ""){
    return;
  }
  tasks.push(
    {
      text:input.value,
      completed:false
    }
  );
  localStorage.setItem("tasks",JSON.stringify(tasks));
  displayTasks();
  input.value="";
})
displayTasks();
