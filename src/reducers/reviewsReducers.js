const reviews = function reducer(state = {
  pending: false,
  sent: false,
  error: false,
  returned: {}
}, action) {
  switch (action.type) {
    case "GET_REVIEWS":
      {
        return {
          ...state
        }
      }
    case "GET_REVIEWS_PENDING":
      {
        return {
          ...state,
          pending: true
        }
      }
    case "GET_REVIEWS_FULFILLED":
      {
        return {
          ...state,
          error: false,
          sent: true,
          pending: false,
          returned: action.payload
        }
      }
    case "GET_REVIEWS_REJECTED":
      {
        return {
          ...state,
          error: true,
          sent: false,
          pending: false,
          returned: action.payload.response
        }
      }
  }
  return state
}

export default reviews
