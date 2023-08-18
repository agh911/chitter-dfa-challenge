import { SignInForm } from "../components/SignInForm.jsx";
import "./SigningPages.css";

export const SignInPage = () => {
    return (
        <div className="container-fluid vh-100">
            <div className="row full-height d-flex align-content-center">
                <div className="col-7 image-container ps-0">
                    <img
                        src="https://i.pinimg.com/564x/6a/a5/af/6aa5afbc56e530e0fd7676ff3fdf81b4.jpg"
                        alt="Sign Up page side image"
                    />
                </div>
                <div className="col d-flex flex-column align-items-center justify-content-center">
                    <h1>Welcome to Chitter!</h1>
                    <p>Connect with friends and the world around you on Chitter.</p>
                    <SignInForm />
                </div>
            </div>
        </div>
    );
};