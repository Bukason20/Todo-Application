import { useState } from "react"
import Card from "./shared/Card"

function TodoForm({handleAdd}) {

    const [title, setTitle]= useState("")
    const [notes, setNotes]= useState("")
    const [type, setType] = useState("")
    const [date, setDate] = useState("")
    const [message, setMessage] = useState("") 
    const [isDisabled, setIsDisabled] = useState(false)

    const checkLength = (e) => {
        if (e.target.value.length > 20){
            setMessage("The title should not be greater than 20 characters")
            setIsDisabled(true)
        }else {
            setMessage("")
            setIsDisabled(false)
        }
    }
    
    

    const options = [
        {
            value: "Personal",
            name: "Personal"
        },
        {
            value: "Family",
            name: "Family"
        },
        {
            value: "Work",
            name: "Work"
        },
        {
            value: "School",
            name:"School"
        },
        {
            value: "Sports",
            name: "Sports"
        },
        {
            value: "Others",
            name: "Others"
        }
        
        
        ]
    const handleChange1 = (e) => {
        setTitle(e.target.value)
        
    }
    const handleChange2 = (e) => {
        setNotes(e.target.value)
        
    }

    const handleChange3 = (e) => {
        setType(e.target.value)
        // if(e.target.value == "personal")
    }

    const handleChange4 = (e) => {
        setDate(e.target.value)
        
    }

    const newDate = (e) => {
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            title: title,
            notes: notes,
            type:type,
            date: date,
        }
        handleAdd(newTodo)

        setTitle("");
        setNotes("")
        setType("")
        setDate("")
    }
    return (
        <Card form = "true">
            <form onSubmit = {handleSubmit} className = "todo-form">
                <h2>New Task</h2>
                <div className="input-group">
                    <input type="text" placeholder= "Task Title" onChange={handleChange1} onKeyUp = {checkLength} value = {title} required/>
                    <p className="message">{message}</p>
                    <input type="text" placeholder = "Add extra notes" onChange = {handleChange2} value = {notes}/>
                    <input type="text" placeholder = "Date for task to be done" 
                        onFocus = {(e) => (e.target.type = "date")} 
                        onBlur = {(e) => (e.target.type = "text")}
                        onChange = {handleChange4}
                        value = {date}
                        required
                    />
                    <select className="form-type" onChange= {handleChange3} value={type}  required>
                        <option value="" disabled defaultValue>Select Todo type</option>
                        {options.map((option, index) => (
                            <option value={option.value} key = {index}>{option.value}</option>
                        ))}
                    </select>

                    
                        
                    
                    <button type= "submit" disabled = {isDisabled} className = {isDisabled ? "disabled" : ""}>Add Task</button>
                </div>
                
            </form>
        </Card>
    )
}

export default TodoForm
