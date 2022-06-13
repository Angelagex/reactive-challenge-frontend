import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveReceiptHandler } from "../../actions/receiptAction";
import { RootState } from "../../state/Store";

interface IReceiptsListProps {}

const ReceiptsList: React.FunctionComponent<IReceiptsListProps> = (props) => {
    const receipts = useSelector((state: RootState) => state.receipt.receipts);
    const dispatch = useDispatch();
  
    React.useEffect(() => {
    //   bringReceiptsHandler(dispatch)
    saveReceiptHandler(dispatch, receipts, useSelector)
    }, [receipts]);

  return (
    <div className="productList">
      <table>
        <th>
          <td></td>
          <td></td>
          <td></td>
        </th>
      </table>
    </div>
  );
};

export default ReceiptsList;
