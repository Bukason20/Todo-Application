import SearchTodo from "./SearchTodo"

const Header = () => {

    const today = new Date()
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <header>
            <div className = "header-contents">
                <p>{`${days[today.getDay()]} ${today.getDate()}th ${months[today.getMonth()]}, ${today.getFullYear()}`}</p>
                <h2>Taskeep</h2>
            </div>
            <SearchTodo />
        </header>
    );
}
 
export default Header;