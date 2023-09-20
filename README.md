# DoorstepDining - "Delight to Your Doorstep!"

![DoorstepDining Logo](Logo.png)

Welcome to DoorstepDining, your one-stop solution for delicious meals delivered right to your doorstep. This README provides an overview of the project, technologies used, setup instructions, and usage guidelines.

## Table of Contents
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Project Description
DoorstepDining is a web application dedicated to delivering mouthwatering meals from local restaurants directly to your doorstep. We aim to simplify the dining experience, providing you with a user-friendly platform to order food effortlessly while supporting local eateries.

### Key Features
- **Seamless Ordering:** Browse local restaurant menus, place orders, and enjoy your favorite meals without leaving your home.
- **Personalized Recommendations:** Our algorithm suggests food choices tailored to your preferences, enhancing your dining experience.
- **Real-Time Order Tracking:** Keep track of your order in real-time and receive accurate notifications about its status.
- **Secure Payment Processing:** We offer secure and convenient payment options, including popular local methods like M-Pesa.

## Technologies Used
DoorstepDining utilizes a range of cutting-edge technologies to provide a seamless food delivery experience:

### Front-end
- HTML5
- CSS3

### Back-end
- Node.js
- Express.js

Node.js is known for its speed and scalability, making it an excellent choice for building server-side applications. Express.js streamlines routing, middleware management, and handling HTTP requests, reducing development time.

### Deployment
- Vercel (https://door-step-dining.vercel.app/)

### Third-Party Integrations
- **Payment Gateway:** Secure and Convenient Payment Processing
  We integrate local payment options widely used in Kenya, such as M-Pesa and Airtel money, to cater to the preferences of our Kenyan user base.

## Installation

To set up DoorstepDining locally on your machine, follow these steps:

1. **Navigate to the project directory:**

    ```bash
    cd doorstep-dining
    ```

2. **Install dependencies for the server and client:**

    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. **Create a .env file in the root directory for environment variables such as MongoDB URI, API keys, and secrets. Example:**

    ```env
    PORT=5000
    MONGODB_URI=your-mongodb-uri
    GOOGLE_MAPS_API_KEY=your-google-maps-api-key
    ```

4. **Start the development server:**

    ```bash
    npm run dev
    ```

5. **Access the application locally at [http://localhost:3000](http://localhost:3000).**

## Usage

Use DoorstepDining as follows:

- **Browse Restaurants:** Explore local restaurants and their menus.
- **Place an Order:** Select your desired items, customize your order, and proceed to checkout.
- **Track Your Order:** Keep an eye on your order's status with real-time tracking.
- **Enjoy Your Meal:** Your delicious meal will be delivered right to your doorstep.

## API Documentation

For developers interested in interacting with our API, you can find detailed documentation [here](link-to-your-api-docs).

## Contributing

We welcome contributions from the community. Please review our [Contributing Guidelines](CONTRIBUTING.md) to get started.

## License

DoorstepDining is licensed under the MIT License.

