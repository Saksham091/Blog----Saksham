import './navbar.css';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <div className="main-navbar">
                    <div className="logo">Blogger</div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                    <div className="profile-pic">
                        <p></p>
                    </div>
                </div>
                <div className="secondary-navbar">
                    <ul className="nav-links">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Reviews</a></li>
                        <li><a href="#">Liked Blogs</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;