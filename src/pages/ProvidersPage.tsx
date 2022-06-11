import * as React from "react";
import AddProviderForm from "../components/Provider/AddProviderForm";
import ProviderList from "../components/Provider/ProviderList";

interface IProvidersPageProps {}

const ProvidersPage: React.FunctionComponent<IProvidersPageProps> = () => {
  return (
    <div>
      <AddProviderForm />
      <ProviderList />
    </div>
  );
};
export default ProvidersPage
