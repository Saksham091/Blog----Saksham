import './login.css';

function Login() {
    return (
        <div className="login">
            <p>Welcome Back To Blogger</p>
            <div className="login-form">
                <div className="information">
                    <div className="profile">
                        <p></p>
                    </div>
                    <div className="Username">
                        <input type="text" placeholder="Username" />
                    </div>
                    <div className="password">
                        <input type="password" placeholder="Password" />
                    </div>
                    <div className="submit">
                        <button type="submit">Sign Up</button>
                    </div>
                    <div className="change">New Here Sign Up</div>
                </div>
            </div>
        </div>
    );
}

export default Login;