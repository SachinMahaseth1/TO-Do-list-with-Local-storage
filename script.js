//// selector
const addbtn=document.querySelector("#addbtn");
const inputTask=document.querySelector("#inputTask");
const taskElem= document.querySelector("ul");
const toast=document.querySelector("#toast");



const todoappdataset=(newTask)=>{
      /// get existing tasks from localstorage or start with an empty 
    let tasks=JSON.parse(localStorage.getItem("todo")) || [];

     /// add new task to the array
        tasks.push(newTask);

     ////save the upadated array back  to local storage 
    localStorage.setItem("todo",JSON.stringify(tasks));

}   


// display stored tasks
const showtododata=()=>{
    /// get data using for each 
   let dataget= JSON.parse(localStorage.getItem("todo")) || [] ;
   dataget.forEach((curntodo)=>{
     const taskList = document.createElement("li");
        taskList.textContent = curntodo; 
         taskElem.appendChild(taskList);



         /////    add remove functionality 
taskList.addEventListener("click",()=>{
taskList.remove();
removetaskLs(curntodo);
   updateToast();

});
        

   });

 
};


const removetaskLs = (taskToRemove) => {
  let tasks = JSON.parse(localStorage.getItem("todo")) || [];
  let updatedTasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("todo", JSON.stringify(updatedTasks));
};



// Function to check and update toast visibility
const updateToast = () => {
  if (taskElem.children.length === 0) {
    toast.style.display = "block";
  } else {
    toast.style.display = "none";
  }
};


// Call updateToast when page loads
window.addEventListener("DOMContentLoaded", updateToast);

// showtododata();
window.addEventListener("DOMContentLoaded",function(){
   showtododata();
})
// function to do this task   
let addtaskfnc=()=>{
     const newTask=inputTask.value;
     if(newTask.trim()== ""){
        return;
     }

     const taskList= document.createElement("li");
     taskElem.appendChild(taskList);

 taskList.addEventListener("click", () => {
    taskList.remove();
    removetaskLs(newTask);
    updateToast();
  });
updateToast();

     taskList.textContent=newTask;
     todoappdataset(newTask);
     inputTask.value="";
    
    }

// add event Listener 
addbtn.addEventListener("click",addtaskfnc);



