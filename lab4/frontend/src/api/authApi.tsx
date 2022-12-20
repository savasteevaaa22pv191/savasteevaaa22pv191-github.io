import Axios, {AxiosError} from 'axios';

const basePath = 'http://localhost:8080/'


export function authentication(email: string, password: string){

    return Axios.post(basePath + 'auth',
        {
            username: email,
            password: password
        },
        {
            responseType: 'json'
        }
    ).then
    (response => {
        console.log(response);
        return response.data;
    })
    .catch((error: AxiosError) => {
        alert("Такой пользователь не зарегистрирован");
    });

}

export function registration(email: string, password: string, name: string){

    return Axios.post(basePath + `registration?name=${name}`,
        null,
        {
            auth: {
                username: email,
                password: password
            },
            responseType: 'json'
        }
    ).then
    (response => {
        console.log(response);
        return response.data;
    })
    .catch((error: AxiosError) => {
        alert(error.message);
        return null;
    });

}