import Navbar from "../Navbar/Navbar";
import './profile.css';

function Profile() {
    return (
        <>
            <Navbar />
            <div>
                <div className="greet">
                    <h1>Hello Saksham</h1>
                    <p>Whats in your mind today?</p>
                </div>
                <div className="info">
                    <div className="main_page">
                        <div className="info_body">
                            <h1>Add A New Blog</h1>
                            <div className="title">
                                <h3>What topic would you like to discuss on today?</h3>
                            </div>
                            <div className="body">
                                <h3>Let your thoughts flow over here</h3>
                            </div>
                            <div className="submit_blog">
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                    <div className="secondary_page">
                        <div className="personal_blog">
                            <h1>Your Previous Blog</h1>
                            <div className="your_title">
                                <h3>No Blogs Written For Now</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;