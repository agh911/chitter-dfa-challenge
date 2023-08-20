import { useState } from 'react';
import '../SignInForm.css';

export const SignInForm = ({ handleSignIn }) => {
    const [signIn, setSignIn] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignIn((signIn) => ({
            ...signIn,
            [name]: value
        }));
    }

    const signInSubmitHandler = (e) => {
        e.preventDefault();
        handleSignIn(signIn);
    }

    return (
        <div className="signin-form">
            <h2>Sign In</h2>
            <form onSubmit={signInSubmitHandler}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={signIn.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={signIn.password}
                    onChange={handleChange}
                    placeholder="Your password"
                    required
                />
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}
