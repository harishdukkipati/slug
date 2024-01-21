import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, firestore } from '../firebase';
import { SignInButton } from '@clerk/clerk-react';
import '../App.css';
import '../style.css';
import img from '../img.jpg';
import google from '../goog.png';
import background from '../sign.jpeg';
import logo from '../logo.png';




const SignInForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState(''); // Declare error state
    const navigate = useNavigate();
    // Toggle the visibility of the password
    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleForgotPassword = async () => {
        if (!email) {
            setError("Please enter your email to reset password.");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            alert("Password reset email sent!");
        } catch (error) {
            setError(error.message);
        }
    };

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
            const result = await signInWithPopup(auth, provider);
            // Google sign-in successful, you can use result.user
            navigate("/dashboard"); // or your desired route
        } catch (error) {
            setError(error.message); // Handle sign-in errors here
        }
    };

    // Example function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in successfully
                navigate("/dashboard"); // or your desired route
            })
            .catch((error) => {
                setError(error.message); // Set the error message
            });
    };

    return (
        <><div className="container-fluid main-content d-flex align-items-center justify-content-center"
            style={{ minHeight: '100vh', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
                <div className="row">
                    <div className="col-lg-12 col-md-8 mx-auto">
                        <div className="form-pane rounded shadow" style={{ width: '100%', maxWidth: '500px' }}>
                            <form onSubmit={handleSubmit} className="form-example">
                                <h1 className="form-head text-lg mb-4" style={{ fontfamily: 'Rubik', fontSize: '1.5rem' }}>Log in to your account</h1>

                                <label htmlFor="email"><b>Email<span style={{ color: 'red' }}>*</span></b></label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="form-control mb-2"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />

                                <label htmlFor="password"><b>Password<span style={{ color: 'red' }}>*</span></b></label>
                                <div className="input-group mb-2 custom-input-group">
                                    <input
                                        type={passwordShown ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        required
                                        className="form-control custom-form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)} />
                                    <div className="input-group-append">
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={togglePasswordVisibility}
                                        >
                                            <i className={`fas fa-eye${passwordShown ? '' : '-slash'}`}></i>
                                        </button>
                                    </div>
                                </div>

                                <Link to="/password-reset" className="purple-link text-sm">Forgot password?</Link>
                                {error && <p className="text-danger">{error}</p>}
                                <button className="btn btn-primary btn-block mt-2" type="submit">Log in</button>
                            </form>

                            {/* Google Sign-in Button */}
                            <div className="form-example mt-4">
                                <div className="divider-container">
                                    <hr className="divider-line" />
                                    <span className="divider-text">Or Continue With</span>
                                    <hr className="divider-line" />
                                </div>

                                <div className="d-flex justify-content-center mt-4">
                                    {/* Google Sign-in logic here */}
                                    <button type="button" className="btn google-btn" style={{ border: '1px solid #ccc' }} onClick={signInWithGoogle}>
                                        <img src={google} alt="Google" style={{ height: '20px' }} />
                                        Google
                                    </button>
                                </div>
                            </div>

                            <div className="text-center mt-12 text-gray-500 mx-auto">
                                Don't have an account? <Link to="/sign-up" className="purple-link text-base">Sign up</Link>
                            </div>
                        </div>
                    </div>
                    {/*
    <div className="col-lg-6 col-md-8 mx-auto">
        <img src={img} alt="Descriptive Text" className="img-fluid rounded" />
    </div> */}
                </div>
            </div></>
    );
};

export default SignInForm;
