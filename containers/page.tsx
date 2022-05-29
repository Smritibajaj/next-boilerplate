import { connect } from "react-redux";
import { createSelector } from "reselect";
import { onChangeTodo, addTodo, deleteTodo } from "../actions";
import { selectTodoItem, selectTodoData } from "../selectors";
import Page from "../components/page";

export default connect(
  createSelector(selectTodoItem(), selectTodoData(), (item, data) => ({
    item,
    data,
  })),
  {
    onChangeTodo,
    addTodo,
    deleteTodo,
  }
)(Page);
