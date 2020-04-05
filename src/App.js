import React from "react";
import Header from "./components/Header";
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Routes from './components/Routes'

const initialState = {
  user: { name: "Leticia" },
  stories: [],
  posts: [],
  perfil: {}
}

function initialReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload
      };
    case "SET_STORIES":
      return {
        ...state,
        stories: action.payload
      };
    case "SET_PERFIL":
      return {
        ...state,
        perfil: action.payload
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload
      };
    case "UP_LIKE":
      return {
        ...state,
        user: {
          id: state.user.id,
          name: state.user.name,
          username: state.user.username,
          likes: state.user.likes + 1
        }
      };
    default:
      return state
  }
}

const store = createStore(
  initialReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Provider store={store}>
      <>
        <Header />
        <Routes />
      </>
    </Provider>
  );
}

export default App;

