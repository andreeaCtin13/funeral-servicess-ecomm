// First, let's create a simple cart utility to handle localStorage operations
// Create a new file: lib/cartUtils.js

export const CartUtils = {
  // Add item to cart
  addToCart: (item) => {
    let cart = [];

    // Get existing cart if available
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        cart = JSON.parse(storedCart);
      }
    }

    // Check if item already exists and update quantity instead of adding duplicate
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex >= 0) {
      // Increment quantity if item exists
      cart[existingItemIndex].quantity =
        (cart[existingItemIndex].quantity || 1) + 1;
    } else {
      // Add new item with quantity 1
      cart.push({ ...item, quantity: 1 });
    }

    // Save updated cart to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    return cart;
  },

  // Get cart items
  getCart: () => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      return cart ? JSON.parse(cart) : [];
    }
    return [];
  },

  // Clear cart
  clearCart: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    return [];
  },

  // Remove item from cart
  removeFromCart: (itemId) => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const cartItems = JSON.parse(cart);
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    }
    return [];
  },

  // Update item quantity
  updateQuantity: (itemId, quantity) => {
    if (typeof window !== "undefined") {
      const cart = localStorage.getItem("cart");
      if (cart) {
        const cartItems = JSON.parse(cart);
        const updatedCart = cartItems.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: quantity };
          }
          return item;
        });
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    }
    return [];
  },
};
