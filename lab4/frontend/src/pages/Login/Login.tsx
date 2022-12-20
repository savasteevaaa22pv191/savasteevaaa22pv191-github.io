
import React from "react";
import image from '../../images/brand-icon/login.jpg'
import Form from "./components/Form/Form";
import './Login.css'
import {NavigateFunction, useNavigate} from "react-router-dom";
import {authentication} from "../../api/authApi";

interface User {
    access_token: string
}

interface LoginParams {
    email: (evt:any)=>void,
    password: (evt:any)=>void,
    errors: Map<string, boolean>
}

function Login() {
    const navigate: NavigateFunction = useNavigate();
    const [email, setLogin] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const er = new Map<string, boolean>([
            ["email", false],
            ["password", false]
        ]);
    const [errors, setErrors] = React.useState<Map<string, boolean>>(er);

    const [user, setUser] = React.useState<User>({ access_token: ''});
    const params: LoginParams = {
        email: handleEmail,
        password: handlePassword,
        errors: errors
    }

    React.useEffect(() => {
            if(user.access_token === ''){
                return;
            }
            localStorage.setItem('token', user.access_token);
            navigate('/')
        },
        // eslint-disable-next-line
        [user]
    );


    const handleSubmit = async (event: any) => {
        event.preventDefault()

        for (let errorsKey in errors) {
            setErrors(errors.set(errorsKey, false))
        }
        if (email.trim().length === 0) {

            setErrors(errors.set('email', true))
        }
        if (password.trim().length === 0) {
            setErrors(errors.set('password', true))
        }

        if (email !== '' && password !== '') {
            const result: User = await authentication(email, password);

            setUser((oldData: Object) => ({ ...oldData, ...result }))
        }
    };

    function handleEmail(event: any) {
        event.preventDefault()
        setLogin(event.target.value.trim())
    }

    function handlePassword(event: any) {
        event.preventDefault()
        setPassword(event.target.value.trim())
    }

    return (
        <>
            <div className="d-flex row col-lg-12 col-md-12 col-sm-12">
                <div className="col-lg-6 col-md-6 d-sm-none d-none d-md-block d-lg-block">
                    <img className="img-login" src={image} alt="img"/>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 d-flex ">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="title-login">Вход</div>

                        <Form click={handleSubmit} params={params}/>

                        <div className="registration-block">
                            Нет аккаунта?
                            <span className="link-text" onClick={event => navigate('/signup')}> Зарегистрироваться</span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Login;