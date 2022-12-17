import Axios, {AxiosError} from "axios";

const historyPath: string = 'http://localhost:8080/products';


export async function getTeas() {
    /*const token = localStorage.getItem('token')*/
    return Axios.get('http://localhost:8080/teas',
        {
            responseType: "json"
        }
    ).then
    (response => {
        return response.data;
    })
    .catch((error: AxiosError) => {
        alert(`${error.response!.status} ${error.response!.data}.`);
        return null;
    });
}
