import Header from "./Header";
import TodoData from "../data/TodoData"
import { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import {v4 as uuidv4} from "uuid"

function AppCard() {
    const [todos, setTodos] = useState(TodoData)
    const addTodo = (newTodo) => {
        newTodo.id = uuidv4()
        newTodo.checked = false
        setTodos([...todos, newTodo])
    } 

    const deleteTodo = (id) => {
        if(window.confirm("Are you sure you want to delete this todo?")){
            setTodos(todos.filter((item) => item.id !== id))
        }
        // console.log($(id))
    }


    return (
        <div className = "app-card">
            
            <Header todos = {todos}/>
            
            

            <div className="main">
                <TodoForm handleAdd = {addTodo}/>
                <TodoList todos = {todos} handleDelete = {deleteTodo}/>
            </div>
            
        </div>
    )
}

export default AppCard
