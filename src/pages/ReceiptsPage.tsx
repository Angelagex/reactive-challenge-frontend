import * as React from "react";
import ReceiptsList from "../components/Receipt/ReceiptList";

interface IReceiptsPageProps {}

const ReceiptsPage: React.FunctionComponent<IReceiptsPageProps> = () => {
  return (
    <div>
      <h1>Receipts</h1>
      <ReceiptsList />
    </div>
  );
};

export default ReceiptsPage;
