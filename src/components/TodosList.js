import React from "react"
import TodoItem from "./TodoItem";
class TodosList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map(todo => (
          <TodoItem deleteTodoProps={this.props.deleteTodoProps} handleChangeProps={this.props.handleChangeProps} key={todo.id} todo={todo} />
        ))}
      </div>
    )
  }
}

export default TodosList