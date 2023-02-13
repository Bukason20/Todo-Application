import { useState } from "react"
import {FaTrash} from "react-icons/fa"
import Card from "./shared/Card"

function TodoItem({item, handleDelete}) {

    const month = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // let [newDate, setNewDate] = useState("")

    const [checked, setChecked] = useState(false)
    const [personal, setPersonal] = useState(false)

    const checkBox = (e) => {
        setChecked(e.target.checked)
    }
    
    let newDate = new Date(item.date)

    const dateColor = () => {
        if(item.type == "Personal"){
            setPersonal(true)
        }else {
            setPersonal(false)
        }
    }
   
        
    
    return (
        <Card item = {true}>
            <div className="todo-item">
                <div className="todo-info">
                    <p className = {`todo-date ${item.type === "Personal" ? "personal": ""} ${item.type === "Family" ? "family": ""} ${item.type === "Work" ? "work": ""} ${item.type === "School" ? "school": ""} ${item.type === "Sports" ? "sports": ""}` }>
                        {`${newDate.getDate()} ${month[newDate.getMonth()]} ${newDate.getFullYear()}`}
                    </p>
                    <div className = {`item-contents ${checked && "checked"}`} >
                        <h3 className="todo-title">{item.title}</h3>
                        <p className= {`todo-type ${item.type === "Personal" ? "personal": ""} ${item.type === "Family" ? "family": ""} ${item.type === "Work" ? "work": ""} ${item.type === "School" ? "school": ""} ${item.type === "Sports" ? "sports": ""}` }>{item.type}</p>
                        <p className="todo-note">{item.notes}</p>
                    </div>
                </div>
                

                <div className="item-btn">
                    <input type="checkbox" onChange = {checkBox} value = {checked}></input>
                </div>
            </div>

            <button className="delete" onClick={()=> handleDelete(item.id)} >
                <FaTrash color = "red"/>
            </button>
            
       </Card>
    )
}

export default TodoItem
