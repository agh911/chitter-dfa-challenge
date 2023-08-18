import './SignUpForm.css';

export const SignUpForm = () => {
    return (
        <div className="signup-form">
            <h2>Sign Up</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    required
                />
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    required
                />
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}