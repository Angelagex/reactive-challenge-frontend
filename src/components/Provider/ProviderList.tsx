import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import  {bringProvidersHandler, deleteProviderHandler}  from "../../actions/providerActions";
import {
  Provider,
} from "../../state/slices/providerSlice";
import { RootState } from "../../state/Store";
import ProviderItem from "./ProviderItem";

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
    <div className="productList">
      {providers.map((provider, idx) => (
        <ProviderItem {...provider} key={idx} />
      ))}
    </div>
  );
};

export default ProviderList;
