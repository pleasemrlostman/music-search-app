import React, { useState } from "react";
import { authService, firebaseInstance } from "fbase";
import "routes/Auth/Auth.scss";

const Auth = () => {
    const [error, setError] = useState("");
    const [emailValue, setEmailValue] = useState("");
    const [passwordlValue, setPasswordValue] = useState("");
    const [newAccount, setNewAccout] = useState(true);
    const onChange = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmailValue(value);
        } else {
            setPasswordValue(value);
        }
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        setEmailValue("");
        setPasswordValue("");
        try {
            let data;
            if (newAccount === true) {
                data = await authService.createUserWithEmailAndPassword(
                    emailValue,
                    passwordlValue
                );
                alert("회원가입이 완료됐습니다!");
            } else if (newAccount === false) {
                data = await authService.signInWithEmailAndPassword(
                    emailValue,
                    passwordlValue
                );
            }
            console.log(data);
        } catch (error) {
            setError(error.message);
        }
    };
    const toggleAccout = () => {
        setNewAccout((prev) => {
            return !prev;
        });
    };
    const onSocialLogin = async (e) => {
        const {
            target: { name },
        } = e;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        await authService.signInWithPopup(provider);
    };

    return (
        <div className="auth">
            <div className="auth-inner">
                <p className="auth-title">대충 Last.fm api 이용해서 만든거</p>
                <form className="auth-form" onSubmit={onSubmit}>
                    <input
                        className="auth-input auth-email--write auth-email"
                        type="email"
                        name="email"
                        value={emailValue}
                        placeholder="Please write your e-mail"
                        onChange={onChange}
                    />
                    <input
                        className="auth-input auth-email--write auth-password"
                        type="password"
                        name="password"
                        value={passwordlValue}
                        placeholder="Please write your password"
                        onChange={onChange}
                    />
                    <span className="auth-error">{error}</span>
                    <span onClick={toggleAccout} className="auth-change">
                        {newAccount ? "change Login" : "change Sign in"}
                    </span>
                    <input
                        className="auth-input auth-input--btn"
                        type="submit"
                        value={newAccount ? "Create Accout" : "Login"}
                    />
                </form>
                <div className="other-login">
                    <button
                        onClick={onSocialLogin}
                        name="google"
                        className="other-login__google"
                    >
                        Google Login
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;
