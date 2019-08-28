import { connect } from "react-redux";
import { toggleTodo /*, deleteTodo */ } from "./actions";
import TodoList from "../../../common/todo-list";
import { VisibilityFilters } from "./actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
  //todos: state.todos  //(when we return all)
});

const mapDispatchToProps = dispatch => ({
  onToggleTodo: id => dispatch(toggleTodo(id)),
  onDelete: id => null
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);