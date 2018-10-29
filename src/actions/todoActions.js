// export const addTodo = () => (dispatch) => {
//   dispatch({
//     type: "ADD_TODO"
//   })
// };

// export const addArticle = (article) => {
//   return ({
//     type: "ADD_ARTICLE", payload: article,
//   });
// }
//
// export const toggleTodo = (article) => {
//   console.log("Toggle toDo");
//   return ({
//     type: "TOGGLE_TODO", id: article.id
//   });
// }

export const addTodo = (todo) => {
  return ({
    type: "ADD_TODO", payload: todo,
  });
}

export const toggleTodo = (todo) => {
  return ({
    type: "TOGGLE_TODO", payload: todo.id,
  });
}

export const removeCompleted = () => {
  return ({
    type: "REMOVE_TODO",
  });
}

export const completeAll = () => {
  return ({
    type: "COMPLETE_ALL",
  });
}

export const changeView = (view) => {
  return ({
    type: "CHANGE_VIEW", payload: view,
  });
}

