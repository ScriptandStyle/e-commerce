import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1, size = null, color = null) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(
                item => item.id === product.id && 
                item.size === size && 
                item.color === color
            );

            if (existingItem) {
                return prevItems.map(item =>
                    item.id === product.id && item.size === size && item.color === color
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }

            return [...prevItems, { 
                ...product, 
                quantity, 
                size, 
                color,
                addedAt: new Date().toISOString() 
            }];
        });
    };

    const removeFromCart = (id, size = null, color = null) => {
        setCartItems(prevItems => 
            prevItems.filter(item => 
                !(item.id === id && item.size === size && item.color === color)
            )
        );
    };

    const updateQuantity = (id, newQuantity, size = null, color = null) => {
        if (newQuantity < 1) {
            removeFromCart(id, size, color);
            return;
        }

        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id && item.size === size && item.color === color
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const getCartCount = () => {
        return cartItems.reduce((count, item) => count + item.quantity, 0);
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            getCartTotal,
            getCartCount
        }}>
            {children}
        </CartContext.Provider>
    );
};
