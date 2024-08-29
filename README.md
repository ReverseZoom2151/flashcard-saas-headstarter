# Flashcard SaaS

Flashcard SaaS is a web application that allows users to generate flashcards from their text input. The application utilizes Clerk for user authentication, OpenAI's GPT-4 Omni model for flashcard generation, Stripe for payment processing, and Firebase Firestore for data storage.

## Features

- **User authentication:** Users can sign up and sign in to the application using Clerk.
- **Flashcard generation:** Users can input text and generate flashcards using OpenAI's GPT-4 Omni model.
- **Subscription system:** Users can purchase a pro subscription for additional features using Stripe.
- **Data storage:** User data, including flashcards, is stored in Firebase Firestore.
- **Responsive design:** The application is built using Material-UI and is fully responsive, ensuring a seamless user experience on all devices.

## Technologies Used

- **Next.js:** A React framework for server-side rendering and generating static websites.
- **Clerk:** A user authentication service that provides secure and customizable authentication flows.
- **OpenAI's GPT-4 Omni model:** A large language model that can generate flashcards based on a given text input.
- **Stripe:** A payment processing service that provides secure and easy-to-use payment processing for online businesses.
- **Firebase Firestore:** A NoSQL cloud database that provides scalable and flexible data storage for web and mobile applications.
- **Material-UI:** A popular React UI framework that provides a wide range of customizable components for building responsive and user-friendly interfaces.

## Getting Started

To get a local copy of this project up and running, follow these steps:

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v16 or later)
- **npm** or **yarn**
- **Firebase** project set up

### Installation

To get started with Flashcard SaaS, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/flashcard-saas.git
   cd flashcard-saas
   
2. Install dependencies: `npm install` or `yarn install`
3. Set up Firebase:
- Go to the Firebase console and create a new project.
- Add a Firestore database.
- Obtain your Firebase configuration object and replace the firebaseConfig object in firebase.js.
4. Set up Clerk:
- Go to the Clerk dashboard and create a new application.
- Obtain your Clerk API keys and set them in the .env.local file.
5. Set up Stripe:
- Go to the Stripe dashboard and create a new account or use an existing one.
- Obtain your Stripe API keys and set them in the .env.local file.
6. Run the development server: `npm run dev`
7. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints
- **POST /api/checkout_session:** Create a Stripe Checkout session for the selected subscription plan.
- **GET /api/checkout_session?session_id={session_id}:** Retrieve a Stripe Checkout session.
- **POST /api/generate:** Generate flashcards from the input text using OpenAI API.

## Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

- Fork the repository.
- Create a new branch (git checkout -b feature/your-feature-name).
- Commit your changes (git commit -m 'Add your feature').
- Push to the branch (git push origin feature/your-feature-name).
- Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
