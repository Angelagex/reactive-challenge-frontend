import * as React from "react";
import { useDispatch } from "react-redux";
import { deleteProductHandler } from "../../actions/productActions";
import { addProductToOrder, addProductToReceipt, Product, productSlice } from "../../state/slices/productSlice";
import { GiTrashCan, GiPencil, GiCheckMark } from "react-icons/gi";

interface IProductItemProps {}

const ProductItem: React.FunctionComponent<Product> = ({
  id, name, description, price, amount, maxAmount, minAmount, provider}) => {

  const [productAmount, setProductAmount] = React.useState<number>();
  const [productMaxAmount, setProductMaxAmount] = React.useState<number>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductAmount(parseInt(e.target.value));
    setProductMaxAmount(Number(maxAmount) - Number(productAmount));
  };

  const product = {
    id,
    name,
    description,
    price,
    amount,
    maxAmount,
    minAmount,
    provider,
  }

  const dispatch = useDispatch();

  const handleDelete = () => {    
    deleteProductHandler(dispatch, product);
  };

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(addProductToOrder({...product, amount: 1}))
  }

  const handleAddToReceipt = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    dispatch(addProductToReceipt({...product, amount: 1}))
  }

  return (
    <div className="productDiv">
      <div className="productTopButtons">
        <button
          className="deleteButton"
          onClick={handleDelete}
        >
          <GiTrashCan
            onPointerEnter={(e) => (e.currentTarget.style.color = "red")}
            onPointerLeave={(e) => (e.currentTarget.style.color = "black")}
          />
        </button>
        <button className="editButton">
          <GiPencil
            onPointerEnter={(e) => (e.currentTarget.style.color = "white")}
            onPointerLeave={(e) => (e.currentTarget.style.color = "black")}
          />
        </button>
      </div>
      <h2 className="productTitle">{name}</h2>
      <p className="productDescription">{description}</p>
      <p className="productInStock">Units in stock: {amount.toString()}</p>
      <div className="productLowButtons">
        {amount != 0 && (
          <button className="addToCartButton" onClick={handleAddToCart}>Add To Cart</button>
        )}
        <button className="buyMoreButton" onClick={handleAddToReceipt}>Buy More</button>
      </div>
    </div>
  );
};

export default ProductItem;
