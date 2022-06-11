import * as React from "react";
import AddProviderForm from "../components/AddProviderForm";
import ProviderList from "../components/ProviderList";

interface IProvidersPageProps {
}

const ProvidersPage: React.FunctionComponent<IProvidersPageProps> = () => {
  return (
    <div>
      <AddProviderForm />
      <ProviderList />
    </div>
  );
};
export default ProvidersPage;
