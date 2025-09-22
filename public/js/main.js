const inputTodoForm = document.getElementById("inputTodo");
const deleteTodoBtn = document.querySelectorAll(".deleteTodoForm");

inputTodoForm.addEventListener("submit", async (evnt)=>{
    evnt.preventDefault();
    const todoName = new FormData(inputTodoForm).get("todo-input");
    await sendTodoData("/add-todo", todoName)
    await getTodoData("/get-todo")
})
    
deleteTodoBtn.forEach(elem=>{
    elem.addEventListener("click", async (evnt)=>{
        evnt.preventDefault();
        const todoName = new FormData(elem).get("todoName")
        await sendTodoData("/delete-todo",todoName);
        await getTodoData("/get-todo")
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

async function getTodoData(url){
    try{
        const req = await fetch(url);
        const res = await req.json();
        console.log(res)
    }catch(err){
        console.log(err)
    }
}