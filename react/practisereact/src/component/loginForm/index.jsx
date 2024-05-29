import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { Icon } from '@iconify/react';
import loadingLoop from '@iconify/icons-line-md/loading-loop';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        rememberMe: false
    });

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value
        }));
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .required('Password is required')
    });

    const handleSubmit = async (values) => {
        setIsLoading(true);
        try {

            const payload = {
                username: values.username,
                password: values.password,
                status: 'logged-in'
            };
            const response = await axios.post("http://localhost:9091/user/login", values);
            console.log(response);
            toast.success(`Hi ${values.username}, you !`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            navigate("/quiz");
        } catch (error) {
            console.log("Error logging in", error);
            toast.error("Error logging in: " + (error.response?.data?.data || error.message), {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={{ flex: '1', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/img/webpix.png" alt="Your Image" style={{ maxWidth: '50%', maxHeight: '80%', borderRadius: '8px' }} />
            </div>
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div>
                    <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '20px', marginLeft: '70px' }}>Welcome Back!</h1>
                    <p style={{ fontFamily: 'Roboto, sans-serif', fontSize: '15px', marginLeft: '65px', marginBottom: '30px' }}>Log in to your dashboard</p>

                    <Formik
                        initialValues={formData}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleSubmit }) => (
                            <Form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: '10px' }}>
                                    <Field
                                        type="text"
                                        name="username"
                                        placeholder="Username:"
                                        autoFocus={true}
                                        required={true}
                                        style={{ width: '250px', padding: '15px 20px', borderRadius: '10px', fontSize: '15px' }}
                                    />
                                    <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </div>
                                <div style={{ marginBottom: '10px' }}>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Password:"
                                        required={true}
                                        style={{ width: '250px', border: '1 solid white', padding: '15px 20px', borderRadius: '10px', fontSize: '15px' }}
                                    />
                                    <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '12px' }} />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
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
                                        {formData.rememberMe && <span style={{ color: '#fff' }}>✓</span>}
                                    </div>
                                    <label style={{ cursor: 'pointer' }}>Remember Me</label>
                                    <div style={{ marginLeft: 'auto' }}>
                                        <p><span style={{ marginRight: '5px' }}>ℹ️</span>Forgot Password?</p>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        style={styles.button}
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <Icon icon={loadingLoop} width="24" /> : "Login"}
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                    <ToastContainer />
                    <div>
                        <p>Don't have an account? <Link to="/signup" style={styles.footer}>Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        // '@media(min-width: 768px)': {
        //     flexDirection: 'row',
        // },
    },
    imageContainer: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '80%',
        borderRadius: '8px',
    },
    formContainer: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
    },
    header: {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '20px',
        textAlign: 'center',
        marginBottom: '20px',
    },
    inputContainer: {
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        maxWidth: '300px',
        padding: '15px 20px',
        borderRadius: '10px',
        fontSize: '15px',
    },
    errorMessage: {
        color: 'red',
        fontSize: '12px',
    },
    button: {
        backgroundColor: '#55229e',
        color: '#ffffff',
        padding: '10px 20px',
        fontSize: '16px',
        width: '100%',
        maxWidth: '300px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        textAlign: 'center',
        marginTop: '20px',
        marginLeft: '90px',
    },
    link: {
        color: '#55229e',
        marginLeft: '5px',
    }
};




export default LoginForm;
