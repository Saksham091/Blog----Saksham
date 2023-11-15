import './signup.css';

function Signup() {
    return (
        <div className="login">
            <p>Hello There Welcome To Blogger</p>
            <div className="login-form">
                <div className="information">
                    <div className="profile">
                        <p></p>
                    </div>
                    <div className="name">
                        <div className="first_name">
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="last_name">
                            <input type="text" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="username">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="email">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="submit">
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="change">Already A Member Log In</div>
                </div>
            </div>
        </div>
    );
}

export default Signup;