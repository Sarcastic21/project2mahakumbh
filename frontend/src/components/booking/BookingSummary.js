import React, { useState } from 'react';

const accommodationTypes = [
  { value: '2days', label: '2 Day 1 Night', originalPrice: 'Rs. 12,999.00', discountedPrice: 'Rs. 6,999.00' },
  { value: '3days', label: '3 Day 2 Night', originalPrice: 'Rs. 21,500.00', discountedPrice: 'Rs. 11,999.00' },
  { value: '5days', label: '5 Day 3 Night', originalPrice: 'Rs. 29,999.00', discountedPrice: 'Rs. 19,999.00' }
];

export function BookingSummary({ formData, selectedPackage }) {
  const [isChecked, setIsChecked] = useState(false); // Track checkbox state

  // Function to convert price string to number
  const convertToNumber = (priceString) => {
    const numericValue = parseFloat(priceString.replace(/[^0-9.]/g, "")) * 10000;
    console.log(numericValue);
    return isNaN(numericValue) ? 0 : numericValue;
  };

  const generateOrderId = () => {
    const timestamp = Date.now(); // Get current timestamp
    const randomString = Math.random().toString(36).substring(2, 10); // Generate random string
    return `${timestamp}-${randomString}`; // Combine them to form the unique order ID
  };

  const getTotalPrice = () => {
    const selectedType = accommodationTypes.find(type => type.value === formData.accommodationType);
    if (selectedType) {
      const price = convertToNumber(selectedType.discountedPrice);
      return price;
    }
    console.warn('Invalid accommodation type');
    return 0; // Return a default value in case of invalid accommodation type
  };

  const handleCheckout = async () => {
    const totalAmount = getTotalPrice();
    const initialPayment = totalAmount * 0.25;
  
    const orderId = generateOrderId(); // Generate the unique order ID
  
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/payment/createUpfrontPayment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          amount: initialPayment,
          orderId: orderId, // Use the generated order ID
          customerInfo: {
            name: formData.name,
            phone: formData.phoneNumber,
          },
        }),
      });
  
      if (response.ok) {
        const { paymentToken } = await response.json();
        initiatePayment(paymentToken);
      } else {
        console.error('Failed to create partial payment request');
      }
    } catch (error) {
      console.error('Error during checkout:', error); // Log the error if the fetch fails
    }
  };
  

  const initiatePayment = (paymentToken) => {
    const phonePe = window.PhonePe;

    phonePe.init({
      merchantId: 'M221E1ZZN1MDP', // Use the provided merchant ID
      paymentToken: paymentToken,
      redirectUrl: '/dashboard', // Use the provided redirect URL
    });

    phonePe.startPayment();
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Booking Summary</h3>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Package</span>
          <span className="font-medium">{selectedPackage.title}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Dates</span>
          <span className="font-medium">
            {formData.checkIn} to {formData.checkOut}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Guests</span>
          <span className="font-medium">
            {formData.adults} Adults, {formData.children} Children
          </span>
        </div>

        <div className="border-t pt-3 mt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span>Total Amount</span>
            <span>₹{getTotalPrice().toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold">
            <span>25% Payment</span>
            <span>₹{(getTotalPrice() * 0.25).toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Terms and Conditions checkbox */}
      <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="mr-2"
          />
          <span>
            I accept the <a href="/terms" className="text-blue-600">Terms of Service</a> and <a href="/refund-policy" className="text-blue-600">Refund Policy</a>.
          </span>
        </label>
      </div>

      {/* Payment button */}
      <button
        onClick={handleCheckout}
        disabled={!isChecked}  // Disable button if checkbox is not checked
        className={`mt-6 w-full px-6 py-3 ${isChecked ? 'bg-orange-600 hover:bg-orange-700' : 'bg-gray-400 cursor-not-allowed'} text-white rounded-full`}
      >
        Pay 25% Now
      </button>
    </div>
  );
}
