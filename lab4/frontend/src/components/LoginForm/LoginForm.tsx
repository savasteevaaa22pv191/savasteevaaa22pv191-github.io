import React from "react";
import './LoginForm.css'

function LoginForm(props: any) {
    console.log(props)
    return (
        <>
            <form className="col-7" method="post">
                <div className="wrap-input validate-input">
                    <input className="input-100" name="email" type="text" placeholder="Email"
                           onChange={evt => props.params.email(evt)}>
                    </input>
                    {props.params.errors.get("email") && <div className="errors">Заполните Email</div>}
                </div>

                <div className="wrap-input validate-input">
                    <input className="input-100" name="password" type="password" placeholder="Password"
                           onChange={evt => props.params.password(evt)}>
                    </input>
                    {props.params.errors.get("password") && <div className="errors">Заполните Пароль</div>}
                </div>

                <div className="container-login100-btn">
                    <button className="btn login-btn" type="submit" onClick={evt => props.click(evt)}>Войти</button>
                </div>
            </form>
        </>
    );
}

export default LoginForm;