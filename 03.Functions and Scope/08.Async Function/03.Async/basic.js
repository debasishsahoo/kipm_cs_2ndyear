async function fetchUserData(userId) {
  try {
    console.log(`Fetching user ${userId}...`);
    // Simulate API call
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: userId,
          name: `User ${userId}`,
          email: `user${userId}@example.com`,
        });
      }, 1000);
    });
    console.log("User data received");
    return response;
  } catch (e) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

// Using async function
fetchUserData(123).then((user) => {
  console.log("User:", user);
});

// Async function with multiple awaits
async function processUserOrder(userId, orderData) {
  try {
    // Step 1: Get user data
    const user = await fetchUserData(userId);
    console.log(`Processing order for ${user.name}`);

    // Step 2: Validate order
    const validation = await validateOrder(orderData);
    if (!validation.valid) {
      throw new Error(`Invalid order: ${validation.errors.join(", ")}`);
    }

    // Step 3: Calculate pricing
    const pricing = await calculatePricing(orderData);

    // Step 4: Save order
    const order = await saveOrder({
      ...orderData,
      userId: userId,
      total: pricing.total,
      tax: pricing.tax,
    });

    // Step 5: Send confirmation
    await sendOrderConfirmation(user.email, order);

    return {
      success: true,
      order: order,
      message: "Order processed successfully",
    };
  } catch (err) {
    console.error("Order processing failed:", err.message);
    return {
      success: false,
      error: err.message,
    };
  }
}
