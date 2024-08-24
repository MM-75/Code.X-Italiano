import React, { createContext, useState } from 'react';

export const QuantityContext = createContext();

export const QuantityProvider = ({ children }) => {
  const [selectedDishes, setSelectedDishes] = useState([]);
const addDish = (dish) => {
  setSelectedDishes((prevDishes) => {
    const existingDishIndex = prevDishes.findIndex(item => item.name === dish.name);
    if (existingDishIndex !== -1) {
      const updatedDishes = [...prevDishes];
      updatedDishes[existingDishIndex].quantity += 1;
      return updatedDishes;
    } else {
      return [...prevDishes, { ...dish, quantity: 1 }];
    }
  });
};

const updateQuantity = (dish, action) => {
  setSelectedDishes(prevDishes => {
    return prevDishes.map(item => {
      if (item.name === dish.name) {
        let newQuantity = item.quantity;
        if (action === 'increase') {
          newQuantity += 1;
        } else if (action === 'decrease') {
          newQuantity -= 1;
        }

        if (newQuantity <= 0) {
          return null;
        }

        return { ...item, quantity: newQuantity };
      }
      return item;
    }).filter(item => item !== null);
  });
};

  const removeDish = (dish) => {
    setSelectedDishes((prevDishes) =>
      prevDishes.filter(item => item.name !== dish.name)
    );
  };

  const clearDishes = () => {
    setSelectedDishes([]);
  };

  return (
    <QuantityContext.Provider value={{ selectedDishes, addDish, updateQuantity, removeDish, clearDishes }}>
      {children}
    </QuantityContext.Provider>
  );
};
