const isTodoPopupShow = (boolean = false) => {
  const popup = document.getElementById("addTodoPopup");
  !boolean && popup.classList.add("hidden");
  boolean && popup.classList.remove("hidden");
};

/**
 *
 * Handle todoForm
 */
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

  // check the localStorage is inatilized before or not
  if (localStorage.getItem(getKeyFromURL())) {
    const prevTodoString = localStorage.getItem(getKeyFromURL());
    const prevTodoArray = JSON.parse(prevTodoString);
    prevTodoArray.push(newTodo);
    const currentTodo = prevTodoArray;

    setTodoIntoLocalstorage(currentTodo, getKeyFromURL());
  } else {
    console.log("not set");
    setTodoIntoLocalstorage([newTodo], getKeyFromURL());
  }

  title.value = desc.value = startEndTime.value = "";

  return false;
};

// set the value into localStorage
const setTodoIntoLocalstorage = (todo, key = "todo") => {
  console.log(todo);
  localStorage.setItem(key, JSON.stringify(todo));
};

// get the pathname from url
const getKeyFromURL = () => {
  const path = window.location.pathname;
  const filterKey = path.substring(1);
  return filterKey;
};

// export all the functions from hare
export {
  isTodoPopupShow,
  getDataFromTodoForm,
  setTodoIntoLocalstorage,
  getKeyFromURL,
};
