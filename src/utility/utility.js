const isTodoPopupShow = (boolean = false) => {
  const popup = document.getElementById("addTodoPopup");
  !boolean && popup.classList.add("hidden");
  boolean && popup.classList.remove("hidden");

  console.log(boolean);
};

export { isTodoPopupShow };
