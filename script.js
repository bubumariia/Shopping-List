const submitButton = document.querySelector(".button")
const inputValue = document.querySelector(".input")
const list = document.querySelector(".list")
const ul = document.querySelector(".ul")
const message = document.querySelector(".message")
const clearBtn = document.querySelector(".deleteButton")
let iconEdit
let iconTrash
let wrapper
let para


submitButton.addEventListener("click", ()=>{
   listCreator()
   removeItem()
   editItem() 
   clearButton()
})

function listCreator(){
    if(inputValue.value === ""){
        message.innerText = "Please Enter Value"
        setTimeout(function(){
            message.innerText = ""
          },2000)
    }
    else{
        
        wrapper = document.createElement("div")
    wrapper.setAttribute("class", "wrapper") 
    
    para = document.createElement("p")
    para.setAttribute("class", "lis")
    para.innerText = inputValue.value
    
    wrapper.appendChild(para)

    iconCreate()

    inputValue.value = ""
    ul.appendChild(wrapper)
    list.append(ul)

    message.innerText = "Item Added to the list"
    setTimeout(function(){
        message.innerText = ""
      },1000)
      

    }
}

function iconCreate(){
    iconTrash = document.createElement("i")
    iconEdit = document.createElement("i")
    iconTrash.setAttribute("class", " trash bi bi-trash")
    wrapper.appendChild(iconTrash)

    
    iconEdit.setAttribute("class", " edit bi bi-pencil-square")
    wrapper.appendChild(iconEdit)
}

function removeItem(){
    const itemsTrash = document.querySelectorAll(".trash")
    itemsTrash.forEach( el =>{
        el.addEventListener("click", (event)=>{
            event.target.parentElement.remove()
            message.innerText = "item Removed"
            setTimeout(function(){
                message.innerText = ""
              },1000)
        })
    })
}

function editItem(){
    const itemsEdit = document.querySelectorAll(".edit")
    itemsEdit.forEach(el =>{
        el.addEventListener("click", (event)=>{
            let content = event.target.parentElement.firstChild.textContent
            inputValue.value = content
            event.target.parentElement.remove()
            message.innerText = "Please Change the value"
            setTimeout(function(){
                message.innerText = ""
              },1000)
        })
    })
}

function clearButton(){
    clearBtn.style.visibility = "visible"
    const wrappers = document.querySelectorAll(".wrapper")
    wrappers.forEach(wrapper=>{
        clearBtn.addEventListener("click", ()=>{
            wrapper.remove()
            message.innerText = "Empty List"
                    setTimeout(function(){
                        message.innerText = ""
                        clearBtn.style.visibility = "hidden"
                      },1000)
        })
    })
    
}





















