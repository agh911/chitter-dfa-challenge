import './SignInForm.css';

export const SignInForm = () => {
    return (
        <div className="signin-form">
            <h2>Sign In</h2>
            <form>
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
                <button type="submit">Sign In</button>
            </form>
        </div>
    )
}
