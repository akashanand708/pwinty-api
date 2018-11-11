# pwinty-api
[Pwinty API](http://pwinty.com/api/) provides all api end points to communicate with  latest v3.0 Pwinty API. This can be used in frontend (ReactJs, ReactNative) and backend( Node.js )

# Installation
`$ npm install pwinty-api`

# Note
We don't need to pass **Sandbox API URL** or **Live API URL** explictly,
If server will run in **development mode** , it will use **Sandbox API URL**,
in **production mode**, it will use **Live API URL**.

In **development mode** , we just need to use **Sandbox merchantId/Sandbox-Rest api key**,and 
in **production mode** , we just need to use **Live merchantId/Sandbox-Rest api key**.

We need to set environment variable for this.
```
In package.json
"scripts": {
    "start": "NODE_ENV=development nodemon ./src/app.js --exec babel-node",
    "build": "babel src -d dist",
    "serve": "NODE_ENV=production node dist/app.js"
  },
```

# Quick Start
Initialize Pwinty with merchant_id and api_key
```
  import { Pwinty } from 'pwinty-api/lib';
  
  let pwinty = new Pwinty("merchant_id", 'api_key');
 ```
  ### Create order

```
	let orderParams = {
		countryCode: 'GB',
		recipientName: '',
		address1: '',
		addressTownOrCity: '',
		stateOrCounty: '',
		postalOrZipCode: '',
		preferredShippingMethod: 'Express'
	};
	pwinty.createOrder(orderParams)
		.then((response) => {
			console.log(response.data);
		})
		.catch((err) => {
			console.log("ERROR.....", err.response.data.statusTxt);
		});
    
 ```
    
  ### Add image to order
 
 ```
	let addImageParamsObject = {
		sku: 'ART-PRI-HPG-20X28-PRODIGI_GB',
		url: '<Image URL>',
		copies: 3,
		sizing: 'Crop'
	};
	pwinty.addImageToOrder(<orderId>,<addImageParams>)
		.then((response) => {
			console.log(response.data);
		})
		.catch((err) => {
			console.log("ERROR.....", err.response.data.statusTxt);
		});
    
 ```