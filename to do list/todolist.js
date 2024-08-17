//to display the task area
var container = document.getElementById("home")

//to display task
var task = document.getElementById("Tasks")
var dl = document.getElementById("dl")
var values = document.getElementById("enter")

 function show(event){
    event.preventDefault()
    container.style.display = "none"
    event.preventDefault()
    var dt = document.createElement("dt")
    dt.innerHTML = ` <input type="checkbox" class="chick">    
    <h3 >${values.value}</h3>
     <button onclick="deleteb(event)">X</button>`
    dl.append(dt)

}
function deleteb(event){
  event.target.parentElement.remove()
}
