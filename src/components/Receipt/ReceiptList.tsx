import * as React from "react";
import { Table } from "react-bootstrap";
import { GiTrashCan } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { bringReceiptsHandler } from "../../actions/receiptAction";
import { RootState } from "../../state/Store";

interface IReceiptsListProps {}

const ReceiptsList: React.FunctionComponent<IReceiptsListProps> = (props) => {
  const receipts = useSelector((state: RootState) => state.receipt.receipts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    bringReceiptsHandler(dispatch);
  }, [receipts]);

  return (
    <div className="productList">
      <Table size="lg">
        <thead>
          <tr>
            <th>Date</th>
            <th>Provider</th>
            <th>Document</th>
            <th>Order</th>
          </tr>
        </thead>
        <tbody>
          {receipts.map((receipt, idx) => (
            <tr key={idx}>
              <td>{receipt.date}</td>
              <td>{receipt.ReceiptproviderName}</td>
              <td>{receipt.ReceiptproviderId}</td>
              <td>
                <ul className="receiptUl">
                  {receipt.order.map((product, idx) => (
                    <li className="receiptLi" key={idx}>
                      <p>{product.name}</p>
                      <p>{product.amount}</p>
                    </li>
                  ))}
                </ul>
              </td>
              <td>
                {" "}
                <GiTrashCan
                  style={{ fontSize: "1.5em" }}
                  onPointerEnter={(e) => (e.currentTarget.style.color = "red")}
                  onPointerLeave={(e) =>
                    (e.currentTarget.style.color = "black")
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ReceiptsList;
