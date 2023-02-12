function Card({children, item, form}) {
    return (
        <div className = {`card ${item && "item"} ${form && "form"}`}>
          {children}  
        </div>
    )
}

export default Card
