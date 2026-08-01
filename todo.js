const todoList = [{
  name: 'make dinner',
  dueDate: '2025-01-06'
}, {
  name: 'wash dishes',
  dueDate: '2025-01-06'
}];

renderTodoList();
function renderTodoList(){
  let todoListhtml = '';

  todoList.forEach(function(todoobj, index){
    const {name, dueDate} = todoobj;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-button js-delete">Delete</button>
    `;
    todoListhtml += html; 
  });
  
  document.querySelector('.js-todo-list')
    .innerHTML = todoListhtml;

    document.querySelectorAll('.js-delete')
      .forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', () => {
          todoList.splice(index, 1);
          renderTodoList();
        });
      });

}
  document.querySelector('.js-add')
    .addEventListener('click', () => {
      addTodo();
    });

function addTodo(){
  const inputele = document.querySelector('.js-name-input');
  const name = inputele.value;

  const dateinputele = document.querySelector('.js-date')
  const dueDate = dateinputele.value;
  
  todoList.push({
    // name: name,
    // dueDate: dueDate
    name,
    dueDate
  });
  

  inputele.value = '';
  
  renderTodoList();
}