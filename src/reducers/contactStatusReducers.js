const contactStatus = function reducer(state = {
  pending: false,
  sent: false,
  error: false,
  response: {}
}, action) {
  switch (action.type) {
    case "FORM_STATUS_CLEAR":
      {
        return {
          ...state,
          sent: action.payload.sent,
          pending: action.payload.pending,
          error: action.payload.error,
          response: action.payload.response
        }
      }
    case "SUBMIT_CONTACT":
      {
        return {
          ...state,
          firstName: action.payload.firstName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          organisation: action.payload.organisation,
          message: action.payload.message,
          areaOfInterest: action.payload.areaOfInterest
        }
      }
    case "SUBMIT_CONTACT_PENDING":
      {
        return {
          ...state,
          pending: true
        }
      }
    case "SUBMIT_CONTACT_FULFILLED":
      {
        return {
          ...state,
          sent: true,
          pending: false,
          error: false
        }
      }
    case "SUBMIT_CONTACT_REJECTED":
      {
        return {
          ...state,
          error: true,
          sent: false,
          pending: false,
          response: action.payload.response,
          status: action.payload.status
        }
      }
  }
  return state
}

export default contactStatus
