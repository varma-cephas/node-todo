const inputTodoForm = document.getElementById("inputTodo");
const deleteTodoBtn = document.querySelectorAll(".deleteTodoForm");

inputTodoForm.addEventListener("submit", (evnt)=>{
    const todoName = new FormData(inputTodoForm).get("todo-input");
    sendTodoData("/add-todo", todoName)
})
    
deleteTodoBtn.forEach(elem=>{
    elem.addEventListener("click", (evnt)=>{
        const todoName = new FormData(elem).get("todoName")
        sendTodoData("/delete-todo",todoName);
    })
})

async function sendTodoData (endPoint,todoName){
    try{
        await fetch(endPoint,{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({name:todoName, completed:false})
        })
    }catch(err){
        throw new Error("HTTP err",err)
    }
}