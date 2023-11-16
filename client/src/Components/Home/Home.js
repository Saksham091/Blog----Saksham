import Navbar from "../Navbar/Navbar";
import './home.css';

function Home() {
    return (
        <>
            <Navbar />
            <div>
                <div className="greet">
                    <h1>Whats would you like to read today? </h1>
                </div>
                <div className="info">
                    <div className="home_main_page">
                        <div className="info_body">
                            <div className="blog">
                                <h3>No Blogs Uploded till now</h3>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;