
import React from "react";
import image from '../../images/brand-icon/signup.jpg'
import './Signup.css'
import SignupForm from "../../components/SignupForm/SignupForm";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {authentication, registration} from "../../api/authApi";
import Tea from "../../models/Tea";
import {getTeas} from "../../api/productApi";

interface User {
    access_token: string
}

function Signup() {
    const navigate: NavigateFunction = useNavigate();
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [login, setLogin] = React.useState<string>('');
    const [errors, setErrors] = React.useState<string>('');
    const [regRes, setRegRes] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<User>({ access_token: ''});

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

    React.useEffect(() => {
        if(!regRes){
            return;
        }
            const auth = async () => {
                const result: User = await authentication(email, password);
                setUser((oldData: Object) => ({ ...oldData, ...result }))
            }
            auth()
        },

        [regRes]
    );

    function handleEmail(event: any) {
        event.preventDefault()
        setEmail(event.target.value.trim())
    }

    function handlePassword(event: any) {
        event.preventDefault()
        setPassword(event.target.value.trim())
    }

    function handleLogin(event: any) {
        event.preventDefault()
        setLogin(event.target.value.trim())
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault()

        /*for (let errorsKey in errors) {
            errors.set(errorsKey, '')
        }
        if (email.trim().length === 0) {
            errors.set(email, 'Заполните Email.')
        }
        if (password.trim().length === 0) {
            errors.set(password, 'Заполните Пароль.')
        }*/

        if (email !== '' && password !== '' && login !=='') {
            const result: boolean|null = await registration(email, password, login);
            if(result !== null){
                setRegRes(result)
            }
        }
    };


    return (
        <>
            <div className="d-flex row col-12">
                <div className="col-lg-6 col-md-6 d-sm-none d-none d-md-block d-lg-block">
                    <img className="img-signup" src={image}/>
                </div>

                <div className="col-lg-6 col-md-6 col-sm-12 d-flex">
                    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
                        <div className="title-signup">Регистрация</div>

                        <SignupForm click={handleSubmit} email={handleEmail} password={handlePassword} login={handleLogin}/>

                        <div className="registration-block">
                            Уже есть аккаунт?
                            <span className="link-text" onClick={event => navigate('/login')}> Войти</span>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
}

export default Signup;