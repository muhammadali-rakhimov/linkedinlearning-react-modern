import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import NewTodoForm from './NewTodoForm'
import TodoListItem from './TodoListItem'
import { removeTodo, markTodoAsCompleted } from './actions'
import { loadTodos } from './thunks'
import './styles/TodoList.css'

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed, isLoading, startLoadingTodos }) => {
  useEffect(() => {
    startLoadingTodos()
  }, [])

  const loadingMessage = <div>Loading todos...</div>
  const content = (
    <div className='list-wrapper'>
      <NewTodoForm />
      {todos.map((todo, index) =>
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />)}
    </div>
  )

  return isLoading ? loadingMessage : content
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: text => dispatch(removeTodo(text)),
  onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
