export const todos = new Map([
    [1, {name:"Walk the cat", completed:false}],
]);

export const home = (req, res)=>{
    res.render("index", {todos})
}

