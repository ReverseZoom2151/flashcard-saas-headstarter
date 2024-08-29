# Flashcard SaaS

Flashcard SaaS is a web application that allows users to generate flashcards from their text input. The application utilizes Clerk for user authentication, OpenAI's GPT-4 Omni model for flashcard generation, Stripe for payment processing, and Firebase Firestore for data storage.

## Features

- User authentication: Users can sign up and sign in to the application using Clerk.
- Flashcard generation: Users can input text and generate flashcards using OpenAI's GPT-4 Omni model.
- Subscription system: Users can purchase a pro subscription for additional features using Stripe.
- Data storage: User data, including flashcards, is stored in Firebase Firestore.
- Responsive design: The application is built using Material-UI and is fully responsive, ensuring a seamless user experience on all devices.

## Technologies Used

- Next.js: A React framework for server-side rendering and generating static websites.
- Clerk: A user authentication service that provides secure and customizable authentication flows.
- OpenAI's GPT-4 Omni model: A large language model that can generate flashcards based on a given text input.
- Stripe: A payment processing service that provides secure and easy-to-use payment processing for online businesses.
- Firebase Firestore: A NoSQL cloud database that provides scalable and flexible data storage for web and mobile applications.
- Material-UI: A popular React UI framework that provides a wide range of customizable components for building responsive and user-friendly interfaces.

## Getting Started

To get started with Flashcard SaaS, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/flashcard-saas.git`
2. Install dependencies: `npm install`
3. Set up environment variables: Create a `.env.local` file and add your Clerk, Stripe, and Firebase configuration variables.
4. Run the development server: `npm run dev`
5. Open your browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
