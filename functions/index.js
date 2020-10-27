const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HSlnhGc2C4iHbPT5ZRoEVRq8TmRpwHAVILbcTFgdSY0gbQQOZYLvA881cYg8iUM77VcSu1SowJ5spt32D23UU7r00nxDYKO9I"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - Api routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async  (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recived BOOM!!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    })

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-d9ac3/us-central1/api

