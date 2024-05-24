import { useState } from "react";

function LoginForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData));
    };

    return (
        <div style={{ display: 'flex', height: '100vh' }}>
            <div style={{ flex: '1', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/img/webpix.png" alt="Your Image" style={{ maxWidth: '50%', maxHeight: '80%', borderRadius: '8px' }} />
            </div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <h1 style={{fontFamily: 'Roboto, sans-serif',fontSize: '20px',  marginLeft: '70px'}}>Welcome Back!</h1>
                    <p style={{fontFamily: 'Roboto, sans-serif',fontSize: '15px',  marginLeft: '65px', marginBottom: '30px'}}>Log in to your dashboard</p>
                    <form onSubmit={handleSubmit}>
                        <div style={{marginBottom: '10px'}}>
                            <label>
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email:"
                                    autoFocus={true}
                                    required={true}
                                    style={{width: '250px', padding: '15px 20px', borderRadius: '10px', fontSize: '15px'}}
                                />
                            </label>
                        </div>
                        <div style={{marginBottom: '10px'}}>
                            <label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Password:"
                                    required={true}
                                    style={{width: '250px', border: '1 solid white', padding: '15px 20px', borderRadius: '10px', fontSize: '15px'}}
                                />
                            </label>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                            <div
                                onClick={() => setFormData(prevState => ({
                                    ...prevState,
                                    rememberMe: !prevState.rememberMe
                                }))}
                                style={{
                                    width: '15px',
                                    height: '15px',
                                    border: '1px solid black',
                                    borderRadius: '10%',
                                    marginRight: '10px',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    background: formData.rememberMe ? '#55229e' : 'white'
                                }}
                            >
                                {formData.rememberMe &&
                                    <span style={{color: '#fff'}}>✓</span>}
                            </div>
                            <label style={{cursor: 'pointer'}}>
                                Remember Me
                            </label>
                            <div style={{marginLeft: 'auto'}}>
                                <p><span style={{marginRight: '5px'}}>ℹ️</span>Forgot Password?</p>
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: '#55229e',
                                    color: '#ffffff',
                                    padding: '10px 20px',
                                    fontSize: '16px',
                                    width: '300px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >Login
                            </button>
                        </div>
                    </form>
                    <div>
                        <p>Don't have an account? <a href="/signup" style={{marginLeft: '90px', color: '#55229e'}}>Sign up</a></p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default LoginForm;
