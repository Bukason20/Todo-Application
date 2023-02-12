import TodoItem from "./TodoItem"

function TodoList({todos, handleDelete}) {
    if(!todos || todos.length === 0 ){
        return "No Todo yet"
    }
    return (
        <div className = "todo-list">
            {todos.map((todo, index) => (
                <TodoItem key = {index} item = {todo} handleDelete={handleDelete}/>
            ))}
        </div>
    )
}

export default TodoList
