import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { addBlog, editBlog, removeBlog } from "./actions/actionBlog";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
const store = configureStore();

// store.subscribe(() => {
//   console.log(store.getState());
// });
store.dispatch(addBlog({ title: "Asus", desc: "ZenBook" }));

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);