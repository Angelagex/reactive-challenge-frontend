import * as React from "react";
import { Product, updateProductToReceipt } from "../../state/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/Store";

interface IItemInOffCavasProps {}

const ItemInOffCavas: React.FunctionComponent<Product> = (product: Product) => {

    const [localAmount, setLocalAmount] = React.useState<number>(product.amount)
    const dispatch = useDispatch();

    const products = useSelector((state: RootState) => state.product.receipt);

    React.useEffect(() => {
    }, [products])

    const handleUpdate = () => {
        
        dispatch(updateProductToReceipt({...product, amount: localAmount} as Product))

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setLocalAmount(Number(e.target.value))

    }

  return (
    <div className="itemAmountDiv">
      <p>You only can buy {(Number(product.maxAmount) - localAmount)} more</p>
      <p className="itemNameDiv"> {product.name}</p>
      <div className="itemAmountButtonsDiv">
        <input
                id="name"
                type="number"
                name="name"
                className="titleInput"
                placeholder="Product's Name"
                value={localAmount}
                onChange={(e) => handleChange(e)}
                min="1"
                max={(Number(product.maxAmount) - localAmount) + 2}
                required
              />
        <button onClick={handleUpdate}>Apply</button>
      </div>
    </div>
  );
};

export default ItemInOffCavas;
