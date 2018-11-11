/**
 * This file contains pwinty v3 api.
 */
import api from './axios-config';


export const listAllCountries = function () {
    return api.http_get('/countries');
};

export const fetchProductPrices = function (countryCode) {
    return api.http_post(encodeURI(`/catalogue/prodigi direct/destination/${countryCode}/prices`));
}

export const fetchOrderList = function (count, offset) {
    return api.http_get(`/orders?count=${count || 100}&offset=${offset || 0}`);
}

export const createOrder = function (orderParams) {
    return api.http_post('/orders', orderParams);
}

export const addImageToOrder = function (orderId, addImageParams) {
    return api.http_post(`/orders/${orderId}/images`, addImageParams);
}

export const addMultipleImagesToOrder = function (orderId, addImageParams) {
    return api.http_post(`/orders/${orderId}/images/batch`, addImageParams);
}

export const checkOrderStatus = function (orderId) {
    return api.http_get(`/orders/${orderId}/SubmissionStatus`);
}

export const submitOrder = function (orderId) {
    return api.http_post(`/orders/${orderId}/status`, { id: orderId, status: 'Submitted' });
}

export const cancelOrder = function (orderId) {
    return api.http_post(`/orders/${orderId}/status`, { id: orderId, status: 'Cancelled' });
}

export const updateOrder = function (orderId, updateOrderParams) {
    return api.http_put(`/orders/${orderId}`, updateOrderParams);
}

export const fetchOrderDetails = function (orderId) {
    return api.http_get(`/orders/${orderId}`);
}

