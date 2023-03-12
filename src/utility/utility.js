const isTodoPopupShow = (boolean = false) => {
  const popup = document.getElementById("addTodoPopup");
  !boolean && popup.classList.add("hidden");
  boolean && popup.classList.remove("hidden");

  console.log(boolean);
};

/**
 *
 * Handle todoForm
 */
const todo = [];
const getDataFromTodoForm = () => {
  const title = document.getElementById("todoTitle");
  const desc = document.getElementById("todoDescription");
  const startTime = document.getElementById("startTime");
  const endTime = document.getElementById("endTime");
  const id = new Date().getTime();

  const newTodo = {
    id: id,
    title: title.value,
    desc: desc.value,
    startTime: startTime.value,
    endTime: endTime.value,
    status: 0,
  };
  todo.push(newTodo);
  setTodoIntoLocalstorage("todo");

  title.value = desc.value = startTime.value = endTime.value = "";

  return false;
};

// set the value into localStorage
const setTodoIntoLocalstorage = (key = "todo") => {
  localStorage.setItem(key, JSON.stringify(todo));
};
export { isTodoPopupShow, getDataFromTodoForm, setTodoIntoLocalstorage };
