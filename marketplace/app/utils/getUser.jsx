import axios from 'axios';

const CLERK_API_URL = process.env.CLERK_API_URL; 
const CLERK_API_KEY = process.env.CLERK_API_KEY;

export const getUserData = async (userId) => {
    try {
        const response = await axios.get(`${CLERK_API_URL}/users/${userId}`, {
            headers: {
                'Authorization': `Bearer ${CLERK_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching user data:", error);
        return null;
    }
};
