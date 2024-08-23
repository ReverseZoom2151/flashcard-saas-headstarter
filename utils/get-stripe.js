import { loadStripe } from '@stripe/stripe-js';

let stripeInstance;

const getStripe = () => {
    if (!stripeInstance) {
        try {
            stripeInstance = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);
        } catch (error) {
            console.error("Error initializing Stripe:", error);
            return null;
        }
    }
    return stripeInstance;
}

export default getStripe;
