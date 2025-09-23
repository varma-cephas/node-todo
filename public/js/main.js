const inputTodoForm = document.getElementById("inputTodo");
const todoNameInput = document.getElementsByName("todo-input")[0]
const deleteTodoBtn = document.querySelectorAll(".deleteTodoForm");
const todoList = document.getElementById("todo-list")===null? document.createElement("ul"):document.getElementById("todo-list")
const todoListContainer = document.getElementById("todoListContainer");
const noTodosMessage = document.getElementById("no-todos-message");

inputTodoForm.addEventListener("submit", async (evnt)=>{
    evnt.preventDefault();
    const todoName = new FormData(inputTodoForm).get("todo-input");
    await sendTodoData("/add-todo", todoName)
    todoNameInput.value = ""
    const todos = await getTodoData("/get-todo");
    const todoItems = updateClientTodoList(todos);
    if(todoItems.childElementCount>=1){
        todoListContainer.innerHTML="";
        todoList.innerHTML=""
        todoList.appendChild(todoItems)
        todoListContainer.appendChild(todoList)
    }else{
        todoList.innerHTML= ""
        todoList.appendChild(todoItems)
    }
})
    
deleteTodoBtn.forEach(elem=>{
    elem.addEventListener("submit", async (evnt)=>{
        evnt.preventDefault();
        await handleDeleteTodo(elem)
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
        return res;
    }catch(err){
        console.log(err)
    }
}

function updateClientTodoList(todos){
    const fragment = new DocumentFragment();
    for(const todo of todos){
        const listItem = document.createElement("li");
        const form = document.createElement("form")
        form.className = "flex items-center justify-between border-b-1 p-4 gap-5 deleteTodoForm";
        form.innerHTML = 
            `
                <div class="flex items-center gap-4">
                    <input type="checkbox" class="w-6 h-6"/>
                    <input type="text" class="text-xl w-40" name="todoName" value="${todo.name}">
                </div>
                <div class="flex items-center gap-5">
                    <button type="submit">
                        <img src="/assets/trash.svg" alt="trash-icon" class="w-10 border border-[#8e6141ff] rounded-full p-2 bg-[#8e6141ff] cursor-pointer"/>
                    </button>
                </div>
            `
        form.addEventListener("submit", async evnt=>{
            evnt.preventDefault();
            await handleDeleteTodo(form)
        })
        listItem.append(form)
        fragment.append(listItem)
    }
    return fragment
}

async function handleDeleteTodo(form){
    const todoName = new FormData(form).get("todoName")
    await sendTodoData("/delete-todo",todoName);
    const todos = await getTodoData("/get-todo");
    if(todos.length===0){
        todoListContainer.innerHTML = `
        <div id="no-todos-message">
            <p class="text-md text-[#8e552b] pt-2 text-center">No todos yet.....</p>
            <p class="text-md text-gray-500 text-center">take your life seriously and add some todos haha...</p>
        </div>
        `
    }
    const todoItems = updateClientTodoList(todos);
    todoList.innerHTML= "";
    todoList.appendChild(todoItems);
}