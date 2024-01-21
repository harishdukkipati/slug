import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth, firestore } from '../firebase';
import { SignInButton } from '@clerk/clerk-react';
import '../App.css';
import '../style.css';
import img from '../img.jpg';
import google from '../goog.png';
import background from '../sign.jpeg';

const SignUpForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordShown, setPasswordShown] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const firestore = getFirestore();

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        try {
            const result = await signInWithPopup(auth, provider);
            // Google sign-in successful, you can use result.user
            navigate("/personal"); // or your desired route
        } catch (error) {
            setError(error.message); // Handle sign-in errors here
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(firestore, "users", user.uid), {
                userId: user.uid,
                email,
                displayName: name,
                createdAt: new Date()
            });

            navigate("/personal");
        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <div className="container-fluid main-content d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundImage: `url(${background})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <div className="row">
                <div className="col-lg-12 col-md-8 mx-auto">
                    <div className="form-pane rounded shadow" style={{ width: '100%', maxWidth: '500px' }}>
                        <form onSubmit={handleSubmit} className="form-example">
                            <h1 className="form-head text-lg mb-4" style={{ fontfamily: 'Rubik', fontSize: '1.5rem' }}>Create an account</h1>
                            {error && <p className="text-danger">{error}</p>}

                            <label htmlFor="name"><b>Name<span style={{ color: 'red' }}>*</span></b></label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                required
                                className="form-control mb-2"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label htmlFor="email"><b>Email<span style={{ color: 'red' }}>*</span></b></label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                required
                                className="form-control mb-2"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label htmlFor="password"><b>Password<span style={{ color: 'red' }}>*</span></b></label>
                            <div className="input-group mb-2 custom-input-group">
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    required
                                    className="form-control custom-form-control"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
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

                            <label htmlFor="confirmPassword"><b>Confirm Password<span style={{ color: 'red' }}>*</span></b></label>
                            <div className="input-group mb-8 custom-input-group">
                                <input
                                    type={passwordShown ? "text" : "password"}
                                    name="confirmPassword"
                                    id="confirmPassword"
                                    required
                                    className="form-control custom-form-control"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
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

                            <button className="btn btn-primary btn-block mt-2" type="submit">Sign Up</button>
                        </form>
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
                            Already have an account? <Link to="/sign-in" className="purple-link text-base">Sign in</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;
