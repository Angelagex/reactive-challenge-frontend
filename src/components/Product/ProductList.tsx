import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { bringProductsHandler, deleteProductHandler } from "../../actions/productActions";
import { getAllProducts, Product } from "../../state/slices/productSlice";
import { RootState } from "../../state/Store";
import ProductItem from "./ProductItem";

interface IProductListProps {}

const ProductList: React.FunctionComponent<IProductListProps> = () => {

  const products = useSelector((state: RootState) => state.product.products);
  const dispatch = useDispatch();

  React.useEffect(() => {
    bringProductsHandler(dispatch)
  }, [products]);


  return (
     <div className="productList">
      {products.map((product, idx) => (
          <ProductItem {...product} key={idx}/>
      ))}
    </div>
  );
};

export default ProductList
