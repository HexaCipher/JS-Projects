const form = document.querySelector("form");
const alltask = document.getElementById("alltask");

const input = document.querySelector("input");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text == ""){
        return;
    }

    const parent = document.createElement("div");
    parent.className = "task-row";
    
    const task = document.createElement("span");
    task.textContent = text;
    task.style.marginRight = "10px"

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.style.width = "50px";


    const done = document.createElement("button");
    done.textContent = "Done";
    done.style.width = "50px";
    done.style.marginRight = "10px";


    parent.append(task, done, deleteBtn);
    alltask.append(parent);

    deleteBtn.addEventListener('click', () => {
        parent.remove();
    })

    done.addEventListener('click', () => {
        task.style.textDecoration = "line-through";
        task.style.color = "grey";
        
    })

})
    


