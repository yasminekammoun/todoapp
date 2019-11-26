
but=document.querySelector("#but")


  but.addEventListener ("click" , e=> { 
    let inputValue = document.getElementById("inputList").value;
    let li = document.createElement("li");
    let todo = document.createElement('h5')
    todo.innerHTML = inputValue 
   let Complete=document.createElement("button")
   Complete.innerHTML = 'Complete'
   Complete.className = 'btn btn-light'
   let Delete=document.createElement("button")
   Delete.innerHTML = 'Delete'
   Delete.className="btn btn-danger"
    li.appendChild(todo)
    li.appendChild(Complete)
    li.appendChild(Delete)
    document.querySelector('#UlStyle').appendChild(li)
 
  Delete.addEventListener("click" ,  function(){
      if (Delete){
          this.parentElement.remove(li);
      } 
    }
  )
  Complete.addEventListener("click", function(){
      if ( Complete.innerHTML==="Complete"){
          Complete.innerHTML="Undo"
          this.previousElementSibling.className="fasakh"
      } else
      {
          Complete.innerHTML="Complete"; 
          this.previousElementSibling.className=''

       }
  })
  
   








})
