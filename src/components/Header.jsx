const Header = ({todos}) => {

    const today = new Date()
    const days = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday","Friday", "Saturday"]
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return (
        <header>
            <div className = "header-contents">
                <h2>Taskeep</h2>
                <p>{`${days[today.getDay()]} ${today.getDate()}th ${months[today.getMonth()]}, ${today.getFullYear()}`}</p>
            </div>
        </header>
            
            
        
    );
}
 
export default Header;