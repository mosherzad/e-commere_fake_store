import { createContext, useEffect, useState } from "react";

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    const total = card.reduce((acc, currentItem) => {
      return acc + currentItem.price * currentItem.amount;
    }, 0);
    setTotalPrice(total);
  }, [card]);

  useEffect(() => {
    if (card) {
      const amount = card.reduce((acc, currentItem) => {
        return acc + currentItem.amount;
      }, 0);
      setItemAmount(amount);
    }
  }, [card]);
  const addToCard = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cardItem = card.find((item) => {
      return item.id === id;
    });
    if (cardItem) {
      const newCard = [...card].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cardItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCard(newCard);
    } else {
      setCard([...card, newItem]);
    }
  };

  const removeFromCard = (id) => {
    const newCard = card.filter((item) => {
      return item.id !== id;
    });
    setCard(newCard);
  };

  const clearCard = () => {
    setCard([]);
  };

  const increaseAmount = (id) => {
    const item = card.find((item) => item.id === id);
    addToCard(item, id);
  };

  const decreaseAmount = (id) => {
    const cardItem = card.find((item) => item.id === id);
    if (cardItem) {
      const newCard = card.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cardItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCard(newCard);
    }
    if (cardItem.amount < 2) {
      removeFromCard(id);
    }
  };

  return (
    <CardContext.Provider
      value={{
        card,
        addToCard,
        removeFromCard,
        clearCard,
        increaseAmount,
        decreaseAmount,
        itemAmount,
        totalPrice,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
