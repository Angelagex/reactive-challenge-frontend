import * as React from "react";
import { useDispatch } from "react-redux";
import { GiTrashCan } from "react-icons/gi";
import { deleteProviderHandler } from "../../actions/providerActions";
import { Provider } from "../../state/slices/providerSlice";

interface IProviderItemProps {}

const ProviderItem: React.FunctionComponent<Provider> = ({
  id,
  name,
  providerId,
}) => {
  const provider = {
    id,
    name,
    providerId,
  };

  const dispatch = useDispatch();

  const handleDelete = () => {
    deleteProviderHandler(dispatch, provider);
  };

  return (
    <div className="productDiv">
      <div className="productTopButtons">
      </div>
      <h2 className="productTitle">{name}</h2>
      <p className="productDescription">{providerId}</p>
      <div className="productLowButtons">
      <button
        className="buyMoreButton"
        onClick={(e) => {
          handleDelete;
        }}
      >
        Delete
      </button>
      </div>
    </div>
  );
};

export default ProviderItem;
