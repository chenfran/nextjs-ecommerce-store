type ShoppingCartItem = {
  price: number;
  quantity: number;
};

export function calculateTotalPrice(shoppingCartWithItems: ShoppingCartItem[]) {
  let totalPrice = 0;
  shoppingCartWithItems.map((item) => {
    return (totalPrice += item.price * item.quantity);
  });
  return totalPrice.toFixed(2);
}
