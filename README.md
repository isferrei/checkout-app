#Checkout App
The Checkout App is a web application that allows users to enter payment information and select a subscription plan. It provides a user-friendly interface for submitting the payment form and viewing available plans.

##Demo
Check out the live demo of the application: <a href="https://checkout-app-amber.vercel.app/">Checkout App Demo</a>

##Features
-Enter payment details such as card number, expiration date, and CVV.
-Select a subscription plan from a list of available options.
-Display card logos for popular payment methods.
-Calculate and display discount information for each plan.
-Dynamically update available installments based on the selected plan.
-Submit the payment form and handle form validation.
-Show loading state while fetching data from the API.
-Display error messages if data fetching or form submission fails.
-Provide a success page after successful form submission.

##Technologies Used:
-Next.js: A React framework for building server-side rendered and static websites.
-React: A JavaScript library for building user interfaces.
-TypeScript: A statically typed superset of JavaScript.
-Tailwind CSS: A utility-first CSS framework for building responsive and customizable UI.
-Jest: A JavaScript testing framework.
-Vercel: A cloud platform for deploying and hosting Next.js applications.

##Getting Started
1. Clone the repository:
```
git clone <repository-url>
```

2. Install the dependencies:
```
cd checkout-app
npm install
```

3. Set up the environment variables:
Copy the .env.example file to .env and update the necessary environment variables, such as the API URL.

4. Run the application:
```
npm run dev
```
The application will be accessible at http://localhost:3000.

##Testing
To run the tests, use the following command:
```
npm test
```

##Deployment
The application is deployed using Vercel. Any changes pushed to the main branch will automatically trigger a new deployment to the production environment.

##Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

##License
This project is licensed under the MIT License.
