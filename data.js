// Your code here
const add = document.getElementById("add")

// add.addEventListener("click", event => {
//   event.preventDefault()
//   let attribute = document.getElementById("type")
//   console.log(attribute.value)
//   let list = document.getElementById("shopping-list")
//   let name = document.getElementById("name")
//   let item = document.createElement("li")
//   item.innerText = name.value
//   item.setAttribute("data-id", attribute.value)
//   list.appendChild(item)
// })

const addItem = e => {
  e.preventDefault()
  let list = document.getElementById("shopping-list")
  let name = document.getElementById("name")
  let item = document.createElement("li")
  let type = document.getElementById("type")
  item.innerText = name.value
  list.dataset.type = type.value
  list.appendChild(item)
  name.value = ""
}

window.addEventListener("DOMContentLoaded", e => {
  const add = document.getElementById("add")
  add.addEventListener("click", addItem)
})
