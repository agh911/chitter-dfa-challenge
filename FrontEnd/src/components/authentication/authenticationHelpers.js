import axios from "axios";

export const checkSignIn = async ({ email, password }) => {
    const signInReturn = await axios.post(`${import.meta.env.VITE_CHITTERURL}/signIn`, { email, password });

    const signInStatus = signInReturn.status === 200;

    return signInStatus;
}