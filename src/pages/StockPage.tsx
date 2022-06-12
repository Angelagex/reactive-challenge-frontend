import * as React from "react";
import AddProductForm from "../components/Product/AddProductForm";
import ProductList from "../components/Product/ProductList";

interface IStockPageProps {}

const StockPage: React.FunctionComponent<IStockPageProps> = () => {
  return (
    <div>
      <AddProductForm />
      <ProductList />
    </div>
  );
};

export default StockPage;
