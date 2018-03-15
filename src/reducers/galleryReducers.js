const gallery = function reducer(state = {
  src: "",
  isActive: false
}, action) {
  switch (action.type) {
    case "TOGGLE_VIEWER":
      {
        return {
          ...state,
          src: action.payload.src,
          isActive: action.payload.isActive
        }
      }
  }
  return state
}

export default gallery
