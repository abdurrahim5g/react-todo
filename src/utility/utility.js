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
  const startEndTime = document.getElementById("startEndTime");
  const id = new Date().getTime();

  const newTodo = {
    id: id,
    title: title.value,
    desc: desc.value,
    startEndTime: startEndTime.value,
    status: 0,
  };
  todo.push(newTodo);
  setTodoIntoLocalstorage(getKeyFromURL());

  title.value = desc.value = startEndTime.value = "";

  return false;
};

// set the value into localStorage
const setTodoIntoLocalstorage = (key = "todo") => {
  localStorage.setItem(key, JSON.stringify(todo));
};

// get the pathname from url
const getKeyFromURL = () => {
  const path = window.location.pathname;
  const filterKey = path.substring(1);
  return filterKey;
};

// export all the functions from hare
export { isTodoPopupShow, getDataFromTodoForm, setTodoIntoLocalstorage };
