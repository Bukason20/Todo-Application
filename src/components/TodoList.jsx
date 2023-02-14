import TodoItem from "./TodoItem"

function TodoList({todos, handleDelete}) {
    if(!todos || todos.length === 0 ){
        return (
            <div className="no-todo">
                <p>No Task Yet</p>
            </div>
        )
    }
    return (
        <div className = "todo-list">
            {/* <h3>Tasks({todos.length})</h3> */}
            {todos.map((todo, index) => (
                <TodoItem key = {index} item = {todo} handleDelete={handleDelete} items = {todos}/>
            ))}
        </div>
    )
}

export default TodoList
