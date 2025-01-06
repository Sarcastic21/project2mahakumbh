import express from 'express';
import axios from 'axios';  // Import axios using ES module syntax
const router = express.Router();

// PayPal API credentials
const CLIENT_ID = 'M221E1ZZN1MDP';
const SECRET_KEY = 'b1a52de3-4975-48d7-9a6e-c1d63fec440d';
const PAYPAL_API_URL = 'https://api.sandbox.paypal.com/v2/checkout/orders';

// Route to create PayPal order for 25% upfront payment
router.post('/createUpfrontPayment', async (req, res) => {
  try {
    // Get the access token from PayPal
    const auth = Buffer.from(`${CLIENT_ID}:${SECRET_KEY}`).toString('base64');
    const tokenResponse = await axios.post(
      'https://api.sandbox.paypal.com/v1/oauth2/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const accessToken = tokenResponse.data.access_token;

    // Calculate the upfront payment (25% of total)
    const totalAmount = parseFloat(req.body.totalAmount);  // The full amount
    const upfrontAmount = (totalAmount * 0.25).toFixed(2);  // 25% upfront

    // Create an order with PayPal for upfront payment
    const orderResponse = await axios.post(
      PAYPAL_API_URL,
      {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: upfrontAmount,  // 25% of total payment
            },
            description: req.body.description,  // Booking description
          },
        ],
        application_context: {
          return_url: req.body.returnUrl,  // Redirect after success
          cancel_url: req.body.cancelUrl,  // Redirect after cancellation
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    // Return the order ID to the frontend for the payment approval
    res.status(200).json({ orderId: orderResponse.data.id });
  } catch (error) {
    console.error('Error creating PayPal upfront order:', error);
    res.status(500).send('Upfront payment order creation failed');
  }
});

// Route to create PayPal order for 75% final payment
router.post('/payment/createFinalPayment', async (req, res) => {
  try {
    // Get the access token from PayPal
    const auth = Buffer.from(`${CLIENT_ID}:${SECRET_KEY}`).toString('base64');
    const tokenResponse = await axios.post(
      'https://api.sandbox.paypal.com/v1/oauth2/token',
      'grant_type=client_credentials',
      {
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );
    const accessToken = tokenResponse.data.access_token;

    // Calculate the final payment (75% of total)
    const totalAmount = parseFloat(req.body.totalAmount);  // Full total amount
    const finalAmount = (totalAmount * 0.75).toFixed(2);  // Remaining 75%

    // Create an order with PayPal for final payment
    const orderResponse = await axios.post(
      PAYPAL_API_URL,
      {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: finalAmount,  // 75% remaining payment
            },
            description: req.body.description,  // Tour completion payment
          },
        ],
        application_context: {
          return_url: req.body.returnUrl,  // Redirect after success
          cancel_url: req.body.cancelUrl,  // Redirect after cancellation
        },
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    );

    // Return the order ID for final payment processing
    res.status(200).json({ orderId: orderResponse.data.id });
  } catch (error) {
    console.error('Error creating PayPal final order:', error);
    res.status(500).send('Final payment order creation failed');
  }
});


export default router;