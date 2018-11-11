import axiosInstance from 'axios';
import config from './config';


const defaultHeaders = {
    'Cache-Control': 'no-cache',
    'Content-type': 'application/json'
};
const api = config['env'][process.env.NODE_ENV.trim()];
console.log(process.env.NODE_ENV);
const API_ENDPOINT = `${api.protocol}://${api.endpoint}${(api.port) ? `:${api.port}` : ''}`;
/**
 * Instantiate axios instance with API_ENDPOINT
 */
const axios = axiosInstance.create({
    baseURL: API_ENDPOINT,
    //timeout: 10000
});

/**
 * The error handler upon http request.
 * @param {*} error 
 */
function errorHandler(error) {
    if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log('Error', error.message);
    }
    if (error.response.status === 401) {

    }

    return Promise.reject(error);
}

function successHandler(response) {
    return response;
}

function getDefaultHeaders() {
    return Object.keys(defaultHeaders).map((headerName) => {
        return { name: headerName, value: defaultHeaders[headerName] };
    })
        .reduce((headers, entry) => {
            if (entry.value)
                headers[entry.name] = entry.value;

            return headers;
        }, {});
}

export default {
    setDefaultHeader(headerName, headerValue) {
        defaultHeaders[headerName] = headerValue;
    },
    removeDefaultHeader(headerName) {
        defaultHeaders[headerName] = null;
    },
    http_get(url, params) {
        return axios.request({
            url,
            params,
            headers: getDefaultHeaders()
        }).then(successHandler).catch(errorHandler);
    },
    http_post(url, data) {
        return axios.request({
            method: 'post',
            url,
            data,
            headers: getDefaultHeaders()
        }).then(successHandler).catch(errorHandler);
    },
    http_patch(url, data) {
        return axios.request({
            method: 'patch',
            url,
            data,
            headers: getDefaultHeaders()
        }).then(successHandler).catch(errorHandler);
    },
    http_delete(url, data) {
        return axios.request({
            method: 'delete',
            url,
            data,
            headers: getDefaultHeaders()
        }).then(successHandler).catch(errorHandler);
    },
    http_put(url, data) {
        return axios.request({
            method: 'put',
            url,
            data,
            headers: getDefaultHeaders()
        }).then(successHandler).catch(errorHandler);
    }
};

