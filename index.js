import * as sessionApi from './src/pwinty-end-points';
import api from './src/axios-config';


export function Pwinty(merchantId, apiKey) {
    if (!(this instanceof Pwinty)) {
        return new Pwinty(merchantId, apiKey);
    }
    this.merchantId = merchantId;
    this.apiKey = apiKey;
    setApiHeaders(merchantId, apiKey);
}

Pwinty.prototype = {

    /**
     * Fetch Countries.
     */
    fetchCountries: function () {
        console.log("FETCH COUNTRIES.....");
        return sessionApi.listAllCountries();
    },

    /**
     * Fetch all SKU product price
     * @param {*} countryCode 
     */
    fetchProductPrice: function (countryCode) {
        console.log("FETCH PRODUCT PRICES", countryCode);
        return sessionApi.fetchProductPrices(countryCode);
    },

    /**
     * Fetch order list
     * @param {*} count(optional)  Number of orders to retrieve. Default 100, max 250.
     * @param {*} offset(optional) Offset used for paginating order list. Default 0.
     */
    fetchOrderList: function (count, offset) {
        console.log("FETCH ORDER LIST");
        return sessionApi.fetchOrderList(count, offset);
    },


    /**
     * Fetch order details
     * @param {*} orderId 
     */
    fetchOrderDetails: function (orderId) {
        console.log("FETCH ORDER DETAILS");
        return sessionApi.fetchOrderDetails(orderId);
    },
    /**
     * Mandatory orderParams should be
     * let orderObject = {
		countryCode: 'GB',
		preferredShippingMethod: 'Express'
	    };
     * @param {*} orderParams 
     */
    createOrder: function (orderParams) {
        console.log("CREATE ORDER");
        return sessionApi.createOrder(orderParams);
    },

    /**
     * Mandatory addImageParams should be
     * let addImageParamsObject = {
     * orderId: 748246,
     *  sku: 'ART-PRI-HPG-20X28-PRODIGI_GB',
     *  url: 'http%3A%2F%2Fwww.testserver.com%2Faphoto.jpg',
     *  copies:2,
     *  sizing:Crop
     * }
     * @param {*} orderId 
     */
    addImageToOrder: function (orderId, addImageParams) {
        console.log("ADD AN IMAGE TO ORDER");
        return sessionApi.addImageToOrder(orderId, addImageParams);
    },


    /**
     * The body of the HTTP request should contain an array of objects with the following structure.
     * Mandatory addImageParams should be
     * let addImageArrayParams = [{
     * orderId: 748246,
     *  sku: 'ART-PRI-HPG-20X28-PRODIGI_GB',
     *  url: 'http%3A%2F%2Fwww.testserver.com%2Faphoto.jpg',
     *  copies:2,
     *  sizing:Crop
     * }]
     * @param {*} orderId 
     */
    addMultipleImagesToOrder: function (orderId, addImageArrayParams) {
        console.log("ADD MULTIPLE IMAGE TO ORDER");
        return sessionApi.addMultipleImagesToOrder(orderId, addImageArrayParams);
    },
    

    /**
     * Check order status
     * @param {*} orderId 
     */
    checkOrderStatus: function (orderId) {
        console.log("CHECK ORDER STATUS");
        return sessionApi.checkOrderStatus(orderId);
    },

    /**
     * Submit order
     * @param {*} orderId 
     */
    submitOrder: function (orderId) {
        console.log("SUBMIT ORDER");
        return sessionApi.submitOrder(orderId);
    },


    /**
     * Cancel order
     * @param {*} orderId 
     */
    cancelOrder: function (orderId) {
        console.log("CANCEL ORDER");
        return sessionApi.cancelOrder(orderId);
    },

    /**
     * Update order
     * @param {*} orderId 
     * @param {*} updateOrderParams A JSON object identical to the one used when creating an order.
     */
    updateOrder: function (orderId, updateOrderParams) {
        console.log("UPDATE ORDER");
        return sessionApi.updateOrder(orderId, updateOrderParams);
    }
}

function setApiHeaders(merchantId, apiKey) {
    if (!isEmpty(merchantId) && !isEmpty(apiKey)) {
        let env = process.env.NODE_ENV.trim();
        if (env === 'development') {
            api.setDefaultHeader('X-Pwinty-MerchantId', merchantId);
            api.setDefaultHeader('X-Pwinty-REST-API-Key', apiKey);
        } else if (env === 'production') {
            api.setDefaultHeader('X-Pwinty-MerchantId', merchantId);
            api.setDefaultHeader('X-Pwinty-REST-API-Key', apiKey);

        }
    }
}

function isEmpty(str) {
    let isStrEmpty = true;
    if ((typeof str === 'string') && str !== '' && str !== undefined && str !== null) {
        isStrEmpty = false;
    }
    return isStrEmpty;
}

