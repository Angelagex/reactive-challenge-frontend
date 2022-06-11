import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import  {bringProvidersHandler, deleteProviderHandler}  from "../../actions/providerActions";
import {
  Provider,
} from "../../state/slices/providerSlice";
import { RootState } from "../../state/Store";

interface IProviderListProps {}

const ProviderList: React.FunctionComponent<IProviderListProps> = () => {
  const providers = useSelector((state: RootState) => state.provider.providers);
  const dispatch = useDispatch();

  React.useEffect(() => {
    bringProvidersHandler(dispatch)
  }, [providers]);

  const handleDelete = (provider: Provider) => {
    deleteProviderHandler(dispatch, provider);
  };

  return (
    <div>
      <h1>ProviderList</h1>
      {providers.map((provider, idx) => (
        <div key={idx}>
          <p>{provider.id}</p>
          <p>{provider.name}</p>
          <p>{provider.providerId}</p>
          <button
            onClick={(e) => {
              handleDelete(provider);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProviderList;
