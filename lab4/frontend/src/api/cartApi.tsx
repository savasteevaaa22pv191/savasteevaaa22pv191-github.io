import Axios, {AxiosError} from "axios";

const basePath = 'http://localhost:8080/cart'

export async function getTeasFromCart(token: string | null) {
    return Axios.get(basePath,
        {
            headers: {'Authorization': 'JWT ' + token},
            responseType: "json"
        })
        .then
        (response => {
            return response.data;
        })
        .catch((error: AxiosError) => {
            if (error.response!.status !== 401) {
                alert(`${error.response!.status} ${error.response!.data}.`);
            }
            console.log("Выхожу")
            return null;
        });
}



/*export function get_teas_from_cart(token: string, idProduct: number, countProduct: number) {

    return Axios.post(basePath + `cart?token=${token}`,
        null,
        {
            params: {
                idProduct: idProduct,
                count: countProduct
            }
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

}*/

export async function addToCart(idProduct: number, count: number) {
    const token = localStorage.getItem('token')
    return Axios.post(basePath,
        {
            id_tea: idProduct,
            count_tea: count
        },
        {
            headers: {'Authorization': 'JWT ' + token},
            responseType: "json"
        }
    ).then
    (response => {
        return response.data;
    })
        .catch((error: AxiosError) => {
            if (error.response!.status !== 401) {
                alert(`${error.response!.status} ${error.response!.data}.`);
            }
            return null;
        });
}
