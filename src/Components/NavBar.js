import mainIcon from "../Images/icon.svg"
import accountIcon from "../Images/account.png"
import bookHeart from "../Images/bx_bx-book-heart.svg"
import notificationIcon from "../Images/notification.svg"
import premAccount from "../Images/premAccount.svg"
import "../Styles/NavBar.css"


const NavBar = () => {
    return (
        <nav>
            <div id="logo">
                <img src={mainIcon} alt="" id="mainIcon" />
                <h1 id="title">KeazoN<span id="sub">BOOKS</span></h1>
            </div>
            <div id="search">
                <input type="text" name="" id="searchInput" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Potter..." />
                <button id="searchButton">SEARCH</button>
            </div>
            <div id="icons">
                <img src={bookHeart} alt="" id="bookHeart" />
                <img src={notificationIcon} alt="" id="notificationIcon" />
                <img src={premAccount} alt="" id="premAccount" />
                <img src={accountIcon} alt="" id="accountIcon" />
            </div>
        </nav>
    )
}

export default NavBar;