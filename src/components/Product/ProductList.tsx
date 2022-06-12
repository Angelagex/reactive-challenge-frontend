import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bringProductsHandler, deleteProductHandler } from "../../actions/productActions";
import { getAllProducts, Product } from "../../state/slices/productSlice";
import { RootState } from "../../state/Store";

interface IProductListProps {}

const ProductList: React.FunctionComponent<IProductListProps> = () => {

  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    bringProductsHandler(dispatch)
  }, [products]);

  const handleDelete = (product: Product) => {
    deleteProductHandler(dispatch, product);    
  };

  return (
     <div>
      <h1>Stock</h1>
      {products.map((product, idx) => (
        <div key={idx}>
          <p>{product.id}</p>
          <p>{product.name}</p>
          <p>{product.amount.toString()}</p>
          <p>{product.provider}</p>

          <button
            onClick={(e) => {
              handleDelete(product);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList
