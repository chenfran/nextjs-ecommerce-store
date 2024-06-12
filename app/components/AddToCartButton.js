'use client';

export default function AddToCartButton({
  props,
  quantities,
  handleQuantityChange,
  addToShoppingCart,
}) {
  return (
    <>
      <input
        type="number"
        value={quantities[props.product.id] || 1}
        onChange={(event) =>
          handleQuantityChange(
            props.product.id,
            parseInt(event.currentTarget.value),
          )
        }
      />
      <button onClick={() => addToShoppingCart(props.product)}>
        Add to cart
      </button>
    </>
  );
}
