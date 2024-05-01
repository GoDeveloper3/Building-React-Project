# Homely Hub

Homely Hub is an Airbnb clone designed to provide users with a seamless platform for listing and renting properties for short-term stays. This README file provides an overview of the project's features, functionalities, and how to set it up for local development.

## Features

1. **Homepage Property Showcase**: Displays property images on the homepage for users to browse.
2. **Property Details Page**: Clicking on a property card reveals detailed information about the property.
3. **Payment Form Integration**: Allows users to make payments seamlessly within the platform.
4. **Stripe Integration**: Securely handles payment transactions through integration with the Stripe payment gateway.
5. **User Authentication**: Provides secure login, signup, and sign-in functionalities for users.

## Setup Instructions

Follow these steps to set up Homely Hub for local development:

1. **Clone the Repository**:

2.  **Install Dependencies**:

3.  **Configure Stripe API Keys**:
- Obtain API keys from the Stripe dashboard.
- Create a `.env` file in the root directory.
- Add your Stripe API keys to the `.env` file:
  ```
  STRIPE_PUBLISHABLE_KEY=your_publishable_key
  STRIPE_SECRET_KEY=your_secret_key
  ```

4. **Start the Development Server**:

5. **Access the Application**:
- Open your web browser and navigate to `http://localhost:3000`.

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- Stripe API
- HTML/CSS

## Contributing

Contributions to Homely Hub are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/your-feature-name`).
6. Create a new Pull Request.

  
