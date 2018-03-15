import {compose, applyMiddleware, createStore, combineReducers} from 'redux'
import {createLogger} from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import {routerReducer} from 'react-router-redux'

// import {persistStore, autoRehydrate} from 'redux-persist'

// Reducers
import general from './generalReducers'
import contactData from './contactDataReducers'
import contactStatus from './contactStatusReducers'
import reviews from './reviewsReducers'
import gallery from './galleryReducers'

const middlewares = [];
const reducer = {
  general,
  reviews,
  contactData,
  contactStatus,
  gallery
}

if (process.env.NODE_ENV === "development") {
  middlewares.push(createLogger())
}

const store = createStore(combineReducers({
  ...reducer,
  routing: routerReducer
}), compose(applyMiddleware(...middlewares, promise(), thunk)))

// persistStore(store, {
//   blacklist: ['routing', 'sw', 'gallery', 'formStatus']
// })

export default store
