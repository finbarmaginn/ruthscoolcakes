const contactData = function reducer(state = {
  name: "",
  email: "",
  tel: "",
  contactTime: "05:30 pm",
  occasion: "-- Occasion --",
  message: ""
}, action) {
  switch (action.type) {
    case "FORM_DATA_CLEAR":
      {
        return {
          ...state,
          name: action.payload.name,
          email: action.payload.email,
          tel: action.payload.tel,
          contactTime: action.payload.contactTime,
          occasion: action.payload.occasion,
          message: action.payload.message
        }
      }
    case "NAME_CHANGE":
      {
        return {
          ...state,
          name: action.payload.newValue
        }
      }
    case "EMAIL_CHANGE":
      {
        return {
          ...state,
          email: action.payload.newValue
        }
      }
    case "TEL_CHANGE":
      {
        return {
          ...state,
          tel: action.payload.newValue
        }
      }
    case "CONTACT_TIME_CHANGE":
      {
        return {
          ...state,
          contactTime: action.payload.newValue
        }
      }
    case "OCCASION_CHANGE":
      {
        return {
          ...state,
          occasion: action.payload.newValue
        }
      }
    case "MESSAGE_CHANGE":
      {
        return {
          ...state,
          message: action.payload.newValue
        }
      }
  }
  return state
}

export default contactData
