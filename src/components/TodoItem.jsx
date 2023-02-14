import { useState } from "react"
import {FaTrash} from "react-icons/fa"
import Card from "./shared/Card"

function TodoItem({item, handleDelete}) {

    const month = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // let [newDate, setNewDate] = useState("")

    const [checked, setChecked] = useState(false)
    
    
    
    let newDate = new Date(item.date)
    const checkBox = (e, id) => {
        if(item.checked == false){
            item.checked = true
            e.target.checked = item.checked
            setChecked(item.checked)
        }else if(item.checked == true){
            item.checked = false
            e.target.checked = item.checked
            setChecked(item.checked)
        }
        
    }
   
        
    
    return (
        <Card item = {true}>
            <div className="todo-item">
                <div className="todo-info">
                    <p className = {`todo-date ${checked ? "checked" : ""} ${item.type === "Personal" ? "personal": ""} ${item.type === "Family" ? "family": ""} ${item.type === "Work" ? "work": ""} ${item.type === "School" ? "school": ""} ${item.type === "Sports" ? "sports": ""} ` }>
                        {`${newDate.getDate()} ${month[newDate.getMonth()]} ${newDate.getFullYear()}`}
                    </p>
                    <div className = {`item-contents ${checked && "checked"}`} >
                        <h3 className="todo-title">{item.title}</h3>
                        <p className= {`todo-type ${checked ? "checked" : ""}  ${item.type === "Personal" ? "personal": ""} ${item.type === "Family" ? "family": ""} ${item.type === "Work" ? "work": "" } ${item.type === "School" ? "school": ""} ${item.type === "Sports" ? "sports": ""} ` }>{item.type}</p>
                        <p className="todo-note">{item.notes}</p>
                    </div>
                </div>
                

                <div className="item-btn">
                    <input type="checkbox" onClick = {checkBox} value ={checked}></input>
                </div>
            </div>

            <button className="delete" onClick={()=> handleDelete(item.id)} >
                <FaTrash color = "red"/>
            </button>
            
       </Card>
    )
}

export default TodoItem
