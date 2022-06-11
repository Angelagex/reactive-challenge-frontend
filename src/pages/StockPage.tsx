import * as React from "react";
import ProductList from "../components/Product/ProductList";

interface IStockPageProps {}

const StockPage: React.FunctionComponent<IStockPageProps> = () => {
  return (
    <div>
      <ProductList />
    </div>
  );
};

export default StockPage;
