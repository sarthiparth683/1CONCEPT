
import { combineReducers, createStore, applyMiddleware } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";
import { useReducer, useRef } from "react";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import axios from "axios";

const actionTypes = {
  set_theme: "set_theme",
  fetch_todos_request: "fetch_todos_request",
  fetch_todos_success: "fetch_todos_success",
  fetch_todos_failure: "fetch_todos_failure",
};

const initialTodoState = {
  loading: false,
  todos: [],
  error: "",
};

// sync - action creators : returns action objects
const fetchTodosRequest = () => {
  return {
    type: actionTypes.fetch_todos_request,
  };
};

const fetchTodosSuccess = (todos) => {
  return {
    type: actionTypes.fetch_todos_success,
    payload: todos,
  };
};

const fetchTodosFailure = (error) => {
  return {
    type: actionTypes.fetch_todos_failure,
    payload: error,
  };
};

// async - action creators: returns functons, not object
const fetchTodos = () => {
  return function (dispatch) {
    dispatch(fetchTodosRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/todos?userId=1&_limit=5")
      .then((response) => {
        // response.data is the data
        dispatch(fetchTodosSuccess(response.data));
      })
      .catch((error) => {
        // error.message is the error
        dispatch(fetchTodosFailure(error.message));
      });
  };
};

function todosReducer(state = initialTodoState, action) {
  switch (action.type) {
    case actionTypes.fetch_todos_request:
      return { ...state, loading: true };

    case actionTypes.fetch_todos_success:
      return { ...state, loading: false, todos: action.payload, error: "" };

    case actionTypes.fetch_todos_failure:
      return { ...state, loading: false, error: action.payload, todos: [] };

    default:
      return state;
  }
}

function themeReducer(state = "dark_mode", action) {
  switch (action.type) {
    case actionTypes.set_theme:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  theme: themeReducer,
  todo: todosReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

function Sidebar() {
  const state = useSelector((state) => state);
  return (
    <pre className="sidebar left-sidebar" id="userSidebar">
      sidebar here.
      {JSON.stringify(state, null, 2)}
    </pre>
  );
}

function Todos() {
  const dispatch = useDispatch();

  return (
    <div className="load-todos">
      <button
        onClick={() => {
          dispatch(fetchTodos());
        }}
        id="load-todos"
      >
        Load Todos
      </button>
    </div>
  );
}

function ThemeSwitch() {
  const dispatch = useDispatch();
  return (
    <div className="theme-switcher">
      <button
        onClick={() =>
          dispatch({ type: actionTypes.set_theme, payload: "light_mode" })
        }
        id="lightModeBtn"
      >
        Light Mode
      </button>
      <button
        onClick={() =>
          dispatch({ type: actionTypes.set_theme, payload: "dark_mode" })
        }
        id="darkModeBtn"
      >
        Dark Mode
      </button>
    </div>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Sidebar />
      </div>
      <div className="main-content">
        <Todos />
        <ThemeSwitch />
      </div>
    </Provider>
  );
}
