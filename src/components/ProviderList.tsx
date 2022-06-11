import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/Store";

interface IProviderListProps {
}

const ProviderList: React.FunctionComponent<IProviderListProps> = () => {
  const providers = useSelector((state: RootState) => state.provider.providers);

  return (
    <div>
      <h1>ProviderList</h1>
      {providers.map((provider) => 
        <div>
          <p>{provider.id}</p>
          <p>{provider.name}</p>
          <p>{provider.providerId}</p>
        </div>
      )}
    </div>
  );
};

export default ProviderList;
