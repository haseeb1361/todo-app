var list =document.getElementById('list')
function addtodo(){
    var todo_item = document.getElementById('todo-item')
    var li = document.createElement('li')
    var liText =document.createTextNode(todo_item.value)
    li.appendChild(liText)
    var dltBtn = document.createElement("button")
    var dltText = document.createTextNode('Delete')
    dltBtn.setAttribute("class","deleteitem")
    dltBtn.setAttribute("onclick","deleteItem(this)")
    dltBtn.appendChild(dltText)


    var editBtn = document.createElement("button")
    var editText = document.createTextNode('Edit')
    editBtn.setAttribute("class","edititem")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")


    li.appendChild(editBtn)
    li.appendChild(dltBtn)
    li.appendChild(editBtn)


    list.appendChild(li)
    todo_item.value = ""
}
function deleteItem(z){
    z.parentNode.remove()
}
function deletall(){
    list.innerHTML= ""
}


function editItem(z){
    var val = z.parentNode.firstChild.nodeValue;
    var editvalue = prompt("enter edit value",val)
    z.parentNode.firstChild.nodeValue = editvalue
}