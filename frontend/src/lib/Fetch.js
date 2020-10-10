import axios from 'axios';
import {navigate} from "./History";

const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',

    APPLICATION_JSON: 'application/json',
    APPLICATION_X_WWW_FORM_URL_ENCODED: 'application/x-www-form-urlencoded',
    MULTIPART_FORM_DATA: 'multipart/form-data',
    TEXT_PLAIN: 'text/plain'
}

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 12000,
    headers: {
        "Context-Type": "application/json",
    }
})

const request = async (method, url, data) => {
    try {
        let config = {
            method,
            url,
            ...data
        }
        const result = await axiosInstance(config)
        console.log("result", result);

        return result.data
    }
    catch (e) {
        if(e.response) {
            if(e.response.status === 404) {
                console.log("로그인이 만료되었습니다.");
                navigate('/fail')
            }
        }
    }
}

const FetchJson = {

}

export default FetchJson;