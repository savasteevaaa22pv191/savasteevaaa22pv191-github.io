import React from "react";
import '../LoginForm/LoginForm.css'

function SignupForm(props: any) {

    const buttonHandler = (email: string, password: string, errors: Map<String, String>) => {
        for (let errorsKey in errors) {
            errors.set(errorsKey, '')
        }
        if (email.trim().length === 0) {
            errors.set(email, 'Заполните Email.')
        }
        if (password.trim().length === 0) {
            errors.set(password, 'Заполните Пароль.')
        }
    };

    return (
        <>
            <form className="col-7" method="post">
                <div className="wrap-input validate-input">
                    <input className="input-100" name="email" type="email" placeholder="Email" onChange={evt=>props.email(evt)}>
                        {/*<div className=""></div>*/}
                    </input>
                </div>

                <div className="wrap-input validate-input">
                    <input className="input-100" name="password" type="text" placeholder="Login" onChange={evt=>props.login(evt)}>
                        {/*<div className="errors"></div>*/}
                    </input>
                </div>

                <div className="wrap-input validate-input">
                    <input className="input-100" name="password" type="password" placeholder="Password" onChange={evt=>props.password(evt)}>
                        {/*<div className="errors"></div>*/}
                    </input>
                </div>

                <div className="container-login100-btn">
                    <button className="btn login-btn" type="submit" onClick={evt=>props.click(evt)}>Регистрация</button>
                </div>
            </form>
        </>
    );
}

export default SignupForm;