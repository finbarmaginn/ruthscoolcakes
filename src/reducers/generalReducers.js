const general = function reducer(state = {
  windowWidth: null,
  isNavActive: false,
  isNavMobile: false
}, action) {
  switch (action.type) {
    case "APP_RESIZE":
      {
        return {
          ...state,
          windowWidth: action.payload.windowWidth,
          isNavMobile: action.payload.isNavMobile
        }
      }
    case "TOGGLE_NAV":
      {
        return {
          ...state,
          isNavActive: action.payload.isNavActive
        }
      }
  }
  return state
}

export default general
