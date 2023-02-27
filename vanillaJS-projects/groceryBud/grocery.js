const submitBtn = $('.submit-btn')
const input = $('.form-control')
const editBtn = $('.edit-btn')
const deleteBtn = $('.delete-btn')
const error = $('.error')
let editValue = ''
//prevent page refresh on form submit
$('.form').submit((e) => {
e.preventDefault()
})


let output = []
const items = JSON.parse(localStorage.getItem('groceryList'))
// localStorage.clear()

//access local storage and append it to the dom
if(items) {
 output = items
  $('.list-items').html(output.join(''))
 }

 //make edit value the value to be edited and replace it in the dom later wth the edited value
const modifyEdit = (value) => {
 editValue = value
 input.val(editValue)
 
}

 //delete list item
const deleteItem = (item) => {
output.splice(output.indexOf(output.find(element => (element.slice(element.indexOf('>')+1,element.indexOf('<',1)) === item))),1)
  $('.list-items').html(output.join(''))
 editValue = ''
 
  localStorage.setItem('groceryList',JSON.stringify(output))
 }


 
//add to list functionality
submitBtn.on('click',() => {
if(input.val()) {
 if(!editValue) {
 output.push(`<p class="d-flex align-content-center justify-content-between">${input.val()}<span class="d-flex align-content-center gap-2">
 <button class="edit-btn btn btn-success" onclick="modifyEdit('${input.val()}')">Edit</button>
 <button class="delete-btn btn btn-danger" onclick="deleteItem('${input.val()}')">Delete</button>
 </span></p>`)
 }

 else {
  output.splice(output.indexOf(output.find(element => (element.slice(element.indexOf('>')+1,element.indexOf('<',1)) === editValue))),1,`<p class="d-flex align-content-center justify-content-between">${input.val()}<span class="d-flex align-content-center gap-2">
  <button class="edit-btn btn btn-success" onclick="modifyEdit('${input.val()}')">Edit</button><button class="delete-btn btn btn-danger" onclick="deleteItem('${input.val()}')">Delete</button></span>
 </p>`)
 editValue = ''
 }

localStorage.setItem('groceryList',JSON.stringify(output))//local storage

 $('.list-items').html(output.join(''))
 input.val('')
}

else {
 // error.text('Input field is empty')
 // error.addClass('text-danger')
 // error.css('opacity',1)
}
})

