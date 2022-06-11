import { addProvider, deleteProvider, getAllProviders, Provider } from "../state/slices/providerSlice";
import { AddDispatch } from "../state/Store";

const ENDPOINT = "http://localhost:8080/provider/"
const HEADERS = { "Content-type": "application/json" }

const bringProvidersHandler = async (dispatch: AddDispatch) => {

    let answer = await fetch(
        `${ENDPOINT}all`,
        { method: "GET" }
    );
    answer.ok ? dispatch(getAllProviders(await answer.json()))
        : console.log("Error bringing the providers");
}

const saveProviderHandler = async (dispatch: AddDispatch, provider: Provider) => {

    let answer = await fetch(
        `${ENDPOINT}save`,
        {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(provider)
        },
    );
    answer.ok ? dispatch(addProvider(await answer.json()))
        : console.log("Error saving the provider");
}

const deleteProviderHandler = async (dispatch: AddDispatch, provider: Provider) => {

    let answer = await fetch(
        `${ENDPOINT}delete/${provider.id}`,
        {
            method: "DELETE",
            headers: HEADERS,
            body: JSON.stringify(provider)
        },

    );
    answer.ok ? dispatch(deleteProvider(provider))
        : console.log("Error deleting the provider");
}


export {bringProvidersHandler, saveProviderHandler, deleteProviderHandler}