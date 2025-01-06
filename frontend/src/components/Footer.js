import React from "react";
import PrivacyPolicyPDF from './privacy-policy.pdf';
import PaymentGatewayPDF from './payment-gateway-terms-and-services.pdf';
import TravelPackagePDF from './travel-package-tandc.pdf';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <span>
            &copy; {new Date().getFullYear()} Kumbh Travels. All rights
            reserved.
          </span>
        </div>
        <div className="flex justify-center space-x-8">
          <a
            href={PrivacyPolicyPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Privacy Policy
          </a>
          <a
            href={PaymentGatewayPDF}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Payment Gateway Terms And Services
          </a>
          <a
            href={TravelPackagePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Travel Package Terms And Conditions
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
