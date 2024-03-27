// alert("Script is working")

let addTodos = document.querySelector('#addTodos');
let newTodos = JSON.parse(localStorage.getItem('Todos')) || [];
let newDate = JSON.parse(localStorage.getItem('TodosDate')) || [];


// For clock
let hrs = document.querySelector('#hrs')
let min = document.querySelector('#min')
let sec = document.querySelector('#sec')

setInterval(()=>{
    let time = new Date();
    // console.log(time.getSeconds())    
    hrs.innerHTML = (time.getHours()<10?'0':'') + time.getHours();
    min.innerHTML = (time.getMinutes()<10?'0':'') + time.getMinutes();
    sec.innerHTML = (time.getSeconds()<10?'0':'') + time.getSeconds();
},1000)


function getTodos(){
    document.querySelector('#list').innerHTML=""
    newTodos.map((val, index) => {
        if(val != null){
            document.querySelector('#list').innerHTML+=`
                <li id="todoItem">
                
                    <div id="inner">
                    <input class="form-check-input-border" type="checkbox" name="" id="checked" onchange="toggleStrikeThrough(this)"/>
                        ${val} 
                        </div>
                        <div>
                        <button class="btn btn-danger m-2" onclick="deleteTodo(${index})">Remove</button>
                        <button class="btn btn-success m-2" onclick="updateTodo(${index})">Update</button>
                    </div>
            
                </li>`
        }
    })
}

getTodos()

addTodos.addEventListener('click', (event) => {
    let todo = document.querySelector('#inputTodo').value;
    let todoDate = document.querySelector('#inputDate').value;
    if (todo.length === 0) {
        alert("Enter your Task")
    }
    else{
        newTodos.push(`<strong> ${todo} : </strong> ${todoDate}`)  
        document.querySelector('#inputTodo').value = ''
    }
    
    localStorage.setItem('Todos', JSON.stringify(newTodos))
    localStorage.setItem('TodosDate', JSON.stringify(newDate))
    
    document.querySelector('#list').innerHTML=""
    getTodos()
    
})

function deleteTodo(i){
    // delete newTodos[i]
    newTodos.splice(i,1)
    localStorage.setItem('Todos', JSON.stringify(newTodos))

    getTodos()
}
function updateTodo(i){
    let todo = document.querySelector('#inputTodo').value;
    let todoDate = document.querySelector('#inputDate').value;
    localStorage.setItem('Todos', JSON.stringify(newTodos))
    localStorage.setItem('TodosDate', JSON.stringify(newDate))

    newTodos[i] = `<strong> ${todo} : </strong> ${todoDate}`;
    
    document.querySelector('#inputTodo').value = ''
    getTodos()
}



function toggleStrikeThrough(checkbox) {
    var listItem = checkbox.parentNode.parentNode;
    if (checkbox.checked) {
        listItem.style.textDecoration = "line-through"; 
    } else {
        listItem.style.textDecoration = "none";
    }
    let check = document.querySelector("#todoItem")
    check.addEventListener('click' , check)
}


