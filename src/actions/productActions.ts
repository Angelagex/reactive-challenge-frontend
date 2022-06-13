import { getAllProducts, addProduct, deleteProduct, updateProduct, Product } from "../state/slices/productSlice";
import { AddDispatch } from "../state/Store";

const ENDPOINT = "http://localhost:8080/product/"
const HEADERS = { "Content-type": "application/json" }

const bringProductsHandler = async (dispatch: AddDispatch) => {

    let answer = await fetch(
        `${ENDPOINT}all`,
        { method: "GET" }
    );
    answer.ok ? dispatch(getAllProducts(await answer.json()))
        : console.log("Error bringing the products");
}

const saveProductHandler = async (dispatch: AddDispatch, product: Product) => {

    let answer = await fetch(
        `${ENDPOINT}save`,
        {
            method: "POST",
            headers: HEADERS,
            body: JSON.stringify(product)
        },
    );
    answer.ok ? dispatch(addProduct(await answer.json()))
        : console.log("Error saving the product");
}

const updateProductHandler = async (dispatch: AddDispatch, product: Product) => {

    let answer = await fetch(
        `${ENDPOINT}save`,
        {
            method: "PUT",
            headers: HEADERS,
            body: JSON.stringify(product)
        },
    );
    answer.ok ? dispatch(addProduct(await answer.json()))
        : console.log("Error saving the product");
}

const deleteProductHandler = async (dispatch: AddDispatch, product: Product) => {

    let answer = await fetch(
        `${ENDPOINT}delete/${product.id}`,
        {
            method: "DELETE",
            headers: HEADERS,
            body: JSON.stringify(product)
        },

    );
    answer.ok ? dispatch(deleteProduct(product))
        : console.log("Error deleting the product");
}


export {bringProductsHandler, saveProductHandler, deleteProductHandler, updateProductHandler }