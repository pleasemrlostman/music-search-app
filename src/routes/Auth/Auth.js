import React, { useState } from "react";
import "./Auth.scss";

const Auth = () => {
    const [emailValue, setEmailValue] = useState("");
    const [passwordlValue, setPasswordValue] = useState("");
    const onChange = (e) => {
        const { name, value } = e.target;

        if (name === "email") {
            setEmailValue(value);
        } else {
            setPasswordValue(value);
        }
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setEmailValue("");
        setPasswordValue("");
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
                        onChange={onChange}
                    />
                    <input
                        className="auth-input auth-email--write auth-password"
                        type="password"
                        name="password"
                        value={passwordlValue}
                        onChange={onChange}
                    />
                    <input
                        className="auth-input auth-input--btn"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
};

export default Auth;
