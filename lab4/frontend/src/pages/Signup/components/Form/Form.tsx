import React from "react";
import '../../../Login/components/Form/Form.css'

function Form(props: any) {

    return (
        <>
            <form className="col-7" method="post">
                <div className="wrap-input validate-input">
                    <input className="input-100" name="email" type="email" placeholder="Email" onChange={evt=>props.email(evt)}>
                    </input>
                </div>

                <div className="wrap-input validate-input">
                    <input className="input-100" name="password" type="text" placeholder="Login" onChange={evt=>props.login(evt)}>
                    </input>
                </div>

                <div className="wrap-input validate-input">
                    <input className="input-100" name="password" type="password" placeholder="Password" onChange={evt=>props.password(evt)}>
                    </input>
                </div>

                <div className="container-login100-btn">
                    <button className="btn login-btn" type="submit" onClick={evt=>props.click(evt)}>Регистрация</button>
                </div>
            </form>
        </>
    );
}

export default Form;