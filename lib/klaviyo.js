import axios from "axios";

const KLAVIYO_API_KEY = "TkYZxW"; // Use your public API key
const KLAVIYO_EVENT_NAME = "Newsletter"; // Define an event name for subscribing

export const subscribeToNewsletter = async (email) => {
  try {
    const response = await axios.post(
      `https://a.klaviyo.com/api/track`,
      {
        token: KLAVIYO_API_KEY,
        event: KLAVIYO_EVENT_NAME,
        customer_properties: {
          $email: email,
        },
        properties: {
          item_name: "Boots",
          $value: 100,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error subscribing to Klaviyo:", error);
    throw error;
  }
};
