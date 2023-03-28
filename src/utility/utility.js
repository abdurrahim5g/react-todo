// get input value
const getElement = (id) => {
  return document.getElementById(id);
};

// checking what the user want to do? Update or Add
const isUpdate = (boolean = false) => {
  const todoFormSubmit = getElement("todoFormSubmit");
  const updateTodo = getElement("updateTodo");
  console.log(boolean);
  if (boolean) {
    updateTodo.classList.remove("hidden");
    todoFormSubmit.classList.add("hidden");
  } else {
    updateTodo.classList.add("hidden");
    todoFormSubmit.classList.remove("hidden");
  }
};

const isPopupShow = (boolean = false, elementId) => {
  const popup = getElement(elementId ? elementId : "popup");
  !boolean && popup.classList.add("hidden");
  boolean && popup.classList.remove("hidden");
};

// clear todo form
const clearTodoForm = () => {
  const title = getElement("todoTitle");
  const desc = getElement("todoDescription");
  const startEndTime = getElement("startEndTime");
  title.value = desc.value = startEndTime.value = "";
};

/**
 *
 * Handle todoForm
 */
const getDataFromTodoForm = () => {
  const title = getElement("todoTitle");
  const desc = getElement("todoDescription");
  const startEndTime = getElement("startEndTime");
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

// get todo from localStorage
const getTodoFromLocalStorage = () => {
  const todoString = localStorage.getItem(getKeyFromURL());
  const todoArray = JSON.parse(todoString);
  return todoArray;
};

// complete todo function
const completeTodo = (id, setTodo) => {
  const allTodo = getTodoFromLocalStorage();

  allTodo.forEach((singleTodo) => {
    if (id === singleTodo.id) {
      singleTodo.status = 1;
      console.log("After", allTodo);
      setTodoIntoLocalstorage(allTodo, getKeyFromURL());
      setTodo(allTodo);
    }
  });
};

// delete todo from localstorage
const deleteTodo = (id, setTodo) => {
  const oldTodo = getTodoFromLocalStorage();
  const currentTodo = oldTodo.filter((todo) => todo.id !== id);

  setTodoIntoLocalstorage(currentTodo, getKeyFromURL());
  setTodo(getTodoFromLocalStorage());
};

const editTodo = (id) => {
  const oldTodo = getTodoFromLocalStorage();
  const targetedTodo = oldTodo.find((todo) => todo.id === id);
  const { title, desc, startEndTime } = targetedTodo;

  const todoTitle = getElement("todoTitle");
  const todoDesc = getElement("todoDescription");
  const todoTime = getElement("startEndTime");

  todoTitle.value = title;
  todoDesc.value = desc;
  todoTime.value = startEndTime;
  console.log(targetedTodo);

  const updateButton = getElement("updateTodo");
  updateButton.setAttribute("todo-id", id);
  console.log(id);

  isUpdate(true);
  isPopupShow(true);
};

const updateTodo = (setTodo) => {
  const updateButton = getElement("updateTodo");
  const editId = +updateButton.getAttribute("todo-id");

  // get current todo on localStorage
  const currentTodo = getTodoFromLocalStorage();

  // get updated data from the form
  const updateTodoTitle = getElement("todoTitle").value;
  const updateTodoDesc = getElement("todoDescription").value;
  const updateTodoTime = getElement("startEndTime").value;

  const updatedTodo = currentTodo.map((todo) => {
    if (todo.id === editId) {
      console.log(todo.id);
      todo.title = updateTodoTitle;
      todo.desc = updateTodoDesc;
      todo.startEndTime = updateTodoTime;
    }
    return todo;
  });

  setTodoIntoLocalstorage(updatedTodo, getKeyFromURL());
  setTodo(updatedTodo);

  isPopupShow(false);

  console.log(updatedTodo);
};

// export all the functions from hare
export {
  isPopupShow,
  getDataFromTodoForm,
  setTodoIntoLocalstorage,
  getKeyFromURL,
  completeTodo,
  getTodoFromLocalStorage,
  deleteTodo,
  editTodo,
  updateTodo,
  isUpdate,
  clearTodoForm,
};
